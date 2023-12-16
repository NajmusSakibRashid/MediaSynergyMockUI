document.addEventListener("DOMContentLoaded", function() {
    // Function to generate random data between 200 and 3000
    function generateRandomData() {
      return Array.from({ length: 5 }, () => Math.floor(Math.random() * (3000 - 200 + 1)) + 200);
    }
  
    // Sample data
    var data = {
      labels: ["Facebook", "YouTube", "Twitter", "Instagram", "Pinterest"],
      datasets: [
        {
          label: "Monthly Engagement",
          backgroundColor: [
            "rgba(59, 89, 152, 0.5)",
            "rgba(255, 0, 0, 0.5)",
            "rgba(0, 172, 237, 0.5)",
            "rgba(193, 53, 132, 0.5)",
            "rgba(189, 8, 28, 0.5)",
          ],
          data: generateRandomData(),
        }
      ]
    };
  
    // Chart configuration
    var config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 3500, // Adjust this value based on your preference
          }
        }
      }
    };
  
    // Create the chart
    var ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, config);
  });
  