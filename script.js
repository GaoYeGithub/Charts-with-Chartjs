var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bubble', 
    data: {
        labels: [], 
        datasets: [{
            label: 'Bubble Dataset', 
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `(${tooltipItem.raw.x}, ${tooltipItem.raw.y}, ${tooltipItem.raw.r})`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

function addData(chart) {
  var x = parseFloat(document.getElementById("x-value").value);
  var y = parseFloat(document.getElementById("y-value").value);
  var r = parseFloat(document.getElementById("r-value").value);
  chart.data.datasets[0].data.push({x: x, y: y, r: r});
  chart.update();
}


function removeData(chart) {
  chart.data.datasets[0].data.pop();
  chart.update();
}

function saveCanvas() {
    var image = canvas.toDataURL();  
    var tmpLink = document.createElement('a');  
    tmpLink.download = 'my_chart.png';
    tmpLink.href = image;  
    document.body.appendChild(tmpLink);  
    tmpLink.click();  
    document.body.removeChild(tmpLink);  
}
