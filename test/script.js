document.addEventListener("DOMContentLoaded", function() {
    // Sample data
    var data = {
      labels: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      datasets: [{
        label: "Post Viewers' Graph",
        borderColor: "rgba(75,192,192,1)",
        data: [650, 590, 800, 810, 700],
        fill: false,
      }]
    };
  
    // Chart configuration
    var config = {
      type: 'line',
      data: data,
    };
  
    // Create the chart
    var ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, config);
  });
  