// JavaScript Document

/* --------------------------------------------
			Global Chart Atributes
-----------------------------------------------*/

Chart.defaults.global.defaultFontColor = '#4d4d4d';
Chart.defaults.global.defaultFontFamily = "'Nunito Sans', sans-serif";

/* --------------------------------------------
				Traffic Chart
-----------------------------------------------*/

let trafficDataHourly = [87, 11, 7, 10, 8, 80, 100, 98, 70, 50, 30, 50];
let trafficDataHourlyLabels = ['1am', '3am', '5am', '7am', '9am', '11am', '1pm', '3pm', '5pm', '7pm', '9pm', '11pm'];
let trafficDataDaily = [523, 721, 1101, 730, 834, 723, 1267, 476, 129, 894, 1123, 654];
let trafficDataDailyLabels = ['10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st'];
let trafficDataWeekly = [3723, 2921, 4501, 4230, 3344, 1234, 3267, 4213, 4521, 2134, 1456, 1235];
let trafficDataWeeklyLabels = ['1st-7th', '8th-14th', '15th-21st', '22nd-28th', '29th-5th', '6th-12th', '13th-19th', '20th-26th', '27th-2nd', '3rd-9th', '10th-6th'];
let trafficDataMonthly = [13723, 12921, 14501, 14230, 9344, 11234, 13267, 15784, 12893, 8912, 13487, 15694];
let trafficDataMonthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let trafficHourly = document.getElementById('traffic-hourly');
let trafficDaily = document.getElementById('traffic-daily');
let trafficWeekly = document.getElementById('traffic-weekly');
let trafficMonthly = document.getElementById('traffic-monthly');
let trafficButtons = document.getElementsByClassName('traffic-buttons');

trafficHourly.addEventListener('click', () => {updateTrafficChart(trafficDataHourlyLabels, trafficDataHourly, trafficHourly);}, false);
trafficDaily.addEventListener('click', () => {updateTrafficChart(trafficDataDailyLabels, trafficDataDaily, trafficDaily);}, false);
trafficWeekly.addEventListener('click', () => {updateTrafficChart(trafficDataWeeklyLabels, trafficDataWeekly, trafficWeekly);}, false);
trafficMonthly.addEventListener('click', () => {updateTrafficChart(trafficDataMonthlyLabels, trafficDataMonthly, trafficMonthly);}, false);

function updateTrafficChart (trafficLables, trafficData, dataFormat) {
	trafficChart.data.labels = trafficLables;
	trafficChart.config.data.datasets[0].data = trafficData;
	trafficChart.update();
	let i;
	for (i = 0; i < trafficButtons.length; i++) {
		trafficButtons[i].classList.remove('traffic-button-focus');
	}
	dataFormat.className = "traffic-buttons traffic-button-focus";
}

//Traffic Chart
let trafficChartCanvas = document.getElementById('traffic-chart').getContext('2d');
let trafficChart = new Chart(trafficChartCanvas, {
	responsive: true,
	maintainAspectRatio: false,
    type: 'line',
    data: {
        labels: trafficDataHourlyLabels,
        datasets: [{
			label: 'Visitors',
			backgroundColor: 'rgb(116, 119, 191, 0.2)',
			borderCapStyle: 'round',
			borderColor: 'rgb(116, 119, 191)',
			borderWidth: '1',
			borderJoinStyle: 'round',
			pointBackgroundColor: '#fff',
			pointBorderColor: '#7477bf',
			pointBorderWidth: '1.5',
			pointRadius: '5',
			lineTension: '0',
            data: trafficDataHourly,
        }],
		
    },
    options: {
		legend: {
			display: false,
		},
		layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
		},
		tooltips: {
			backgroundColor: '#fff',
			titleFontColor: '#7477bf',
			bodyFontColor: '#7477bf',
			displayColors: false,
			borderColor: '#7477bf',
			borderWidth: 1,
		},
		scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
		animation: {
			easing: 'easeInOutQuad',
			duration: 700,
		}
    },
});

/* --------------------------------------------
			Daily Traffic Chart
-----------------------------------------------*/

var dailyTrafficChartCanvas = document.getElementById('daily-traffic-chart').getContext('2d');
var dailyTrafficChart = new Chart(dailyTrafficChartCanvas, {
    type: 'bar',
	responsive: true,
	maintainAspectRatio: false,
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
			label: 'Visitors',
			backgroundColor: 'rgb(116, 119, 191)',
			borderCapStyle: 'round',
			borderColor: 'rgb(116, 119, 191)',
			borderWidth: '1',
			borderJoinStyle: 'round',
			pointBackgroundColor: '#fff',
			pointBorderColor: '#7477bf',
			pointBorderWidth: '1.5',
			pointRadius: '5',
			lineTension: '0',
            data: [723, 921, 1501, 1230, 834, 723, 1267],
        }],
		
    },
    options: {
		legend: {
			display: false,
		},
		layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
		},
		tooltips: {
			backgroundColor: '#fff',
			bodyFontColor: '#7477bf',
			displayColors: false,
			borderColor: '#7477bf',
			borderWidth: 1,
			titleFontSize: 0,
			titleMarginBottom: 0,
		},
		scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    
                }
            }]
        },
    },
});

/* --------------------------------------------
			Mobile Users Chart
-----------------------------------------------*/

var mobileUsersCanvas = document.getElementById('mobile-users-chart').getContext('2d');
var mobileUsers = new Chart(mobileUsersCanvas, {
    type: 'doughnut',
	responsive: true,
	maintainAspectRatio: false,
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
			label: 'Visitors',
			backgroundColor: ['#81c98f', '#74b1bf', 'rgb(116, 119, 191)'],
			borderCapStyle: 'round',
			borderColor: ['#81c98f', '#74b1bf', 'rgb(116, 119, 191)'],
			borderWidth: '1',
			borderJoinStyle: 'round',
			pointBackgroundColor: '#fff',
			pointBorderColor: '#7477bf',
			pointBorderWidth: '1.5',
			pointRadius: '5',
			lineTension: '0',
            data: [1056, 345, 198],
        }],
		
    },
    options: {
		legend: {
			display: true,
			position: 'right',
			labels: {
				boxWidth: 15,
				fontSize: 15,
			},
		},
		layout: {
            padding: {
                left: 0,
                right: 20,
                top: 20,
                bottom: 20
            }
		},
		tooltips: {
			backgroundColor: '#fff',
			bodyFontColor: '#7477bf',
			displayColors: false,
			borderColor: '#7477bf',
			borderWidth: 1,
			titleFontSize: 5,
			titleMarginBottom: 0,
		},
		scales: {
            Axes: [{
				gridlines: {
					display: false,
				},
            }]
        },
    },
});