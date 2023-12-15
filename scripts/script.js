document.addEventListener("DOMContentLoaded", function() {
    // Sample data
    var data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
        label: "Sample Line Graph",
        borderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56],
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
  