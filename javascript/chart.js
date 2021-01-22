// JavaScript Document


Chart.defaults.global.defaultFontColor = '#4d4d4d';
Chart.defaults.global.defaultFontFamily = "'Nunito Sans', sans-serif";
/* --------------------------------------------
				Traffic Chart
-----------------------------------------------*/
var trafficChart = document.getElementById('traffic-chart').getContext('2d');
var myChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm'],
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
            data: [123, 87, 11, 7, 10, 8, 80, 100, 98, 70, 50, 120, 150, 30, 50, 60, 80, 25, 30, 20, 40, 50, 70, 98],
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
		}
    },
});

/* --------------------------------------------
				Daily Traffic Chart
-----------------------------------------------*/
var dailyTrafficChart = document.getElementById('daily-traffic-chart').getContext('2d');
var myChart = new Chart(dailyTrafficChart, {
    type: 'bar',
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
var mobileUsers = document.getElementById('mobile-users-chart').getContext('2d');
var myChart = new Chart(mobileUsers, {
    type: 'doughnut',
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