document.addEventListener("DOMContentLoaded", function() {
    // Function to generate random data between 200 and 3000
    function generateRandomData() {
      return Array.from({ length: 5 }, () => Math.floor(Math.random() * (3000 - 200 + 1)) + 200);
    }
  
    // Sample data
    var data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Facebook",
          borderColor: "rgba(59, 89, 152, 1)",
          data: generateRandomData(),
          fill: false,
        },
        {
          label: "YouTube",
          borderColor: "rgba(255, 0, 0, 1)",
          data: generateRandomData(),
          fill: false,
        },
        {
          label: "Twitter",
          borderColor: "rgba(0, 172, 237, 1)",
          data: generateRandomData(),
          fill: false,
        },
        {
          label: "Instagram",
          borderColor: "rgba(193, 53, 132, 1)",
          data: generateRandomData(),
          fill: false,
        },
        {
          label: "Pinterest",
          borderColor: "rgba(189, 8, 28, 1)",
          data: generateRandomData(),
          fill: false,
        },
      ]
    };
  
    // Chart configuration
    var config = {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 3500, // Adjust this value based on your preference
          }
        }
      }
    };
  
    // Create the chart
    var ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, config);
  });
  