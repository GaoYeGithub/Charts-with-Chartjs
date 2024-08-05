var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Dataset 1',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Dataset 2',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                stacked: false,
                title: {
                    display: true,
                    text: 'Categories'
                }
            },
            y: {
                stacked: false,
                title: {
                    display: true,
                    text: 'Values'
                },
                beginAtZero: true
            }
        }
    }
});

function addData(chart, datasetName) {
    var label, data;

    if (datasetName === 'dataset1') {
        label = document.getElementById("label1").value;
        data = document.getElementById("data1").value;
    } else if (datasetName === 'dataset2') {
        label = document.getElementById("label2").value;
        data = document.getElementById("data2").value;
    }

    if (!chart.data.labels.includes(label)) {
        chart.data.labels.push(label);
    }

    chart.data.datasets.forEach((dataset) => {
        if (dataset.label === `Dataset 1` && datasetName === 'dataset1') {
            dataset.data.push(data);
        } else if (dataset.label === `Dataset 2` && datasetName === 'dataset2') {
            dataset.data.push(data);
        }
    });

    chart.update();
}

function removeData(chart, datasetName) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        if (dataset.label === `Dataset 1` && datasetName === 'dataset1') {
            dataset.data.pop();
        } else if (dataset.label === `Dataset 2` && datasetName === 'dataset2') {
            dataset.data.pop();
        }
    });
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
