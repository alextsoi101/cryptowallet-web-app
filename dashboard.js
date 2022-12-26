const options = {
    chart: {
        toolbar: {
            show: true,
            tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: true,
                zoomout: true,
                pan: false,
                reset: false 
            }
        },
        type: 'area',
        height: '300px',
        width: '800px',
    },
    colors: ['#001c71'],
    series: [{
        name: 'Total balance',
        data: [30,40,35,50,49,60],
    }],
    xaxis: {
        categories: ['15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec'],
    },
    dataLabels: {
        enabled: false
    },
}

const chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();


//Change chart color
const defaultcolorChart = document.querySelector('#defaultcolor');
const orangeChart = document.querySelector('#orange');
const blueChart = document.querySelector('#blue');
const greenChart = document.querySelector('#green');
const fioletChart = document.querySelector('#fiolet');
const purpureChart = document.querySelector('#purpure');

defaultcolorChart.addEventListener('click', () => {
    chart.updateOptions({colors: ['#001c71']})
});

orangeChart.addEventListener('click', () => {
    chart.updateOptions({colors: ['#d47707']})
});

blueChart.addEventListener('click', () => {
    chart.updateOptions({colors: ['#1377be']})
});

greenChart.addEventListener('click', () => {
    chart.updateOptions({colors: ['#0d653d']})
});

fioletChart.addEventListener('click', () => {
    chart.updateOptions({colors: ['#4b2b86']})
});

purpureChart.addEventListener('click', () => {
    chart.updateOptions({colors: ['#862b6a']})
});
