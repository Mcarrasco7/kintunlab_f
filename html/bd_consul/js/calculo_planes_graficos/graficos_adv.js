var randomScalingFactor = function() {
	return Math.round((Math.random() * (5 - 1) + 1) * Math.round(Math.random() * 100));
};

var configscatter = {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4', '5', '6', '7'],
		datasets: [{
			label: 'datos1',
			borderColor: '#efb810',
			backgroundColor: '#efb810',
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}, {
			label: 'datos2',
			borderColor: '#2c39a3',
			backgroundColor: '#2c39a3',
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}, {
			label: 'datos3',
			borderColor: '#357376',
			backgroundColor: '#357376',
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}, {
			label: 'datos4',
			borderColor: '#9656a1',
			backgroundColor: '#9656a1',
			data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor()
			],
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Calculando algo'
		},
		tooltips: {
			mode: 'index',
		},
		hover: {
			mode: 'index'
		},
		legend: {
	        display: false,
	        align: 'center',
	    },

		scales: {
			xAxes: [{
				scaleLabel: {
					display: false,
					labelString: 'Dias'
				}
			}],
			yAxes: [{
				stacked: false,
				scaleLabel: {
					display: false,
					labelString: 'Valor'
				}
			}]
		}
	}
};


var barChartData = {
	labels: ['E', 'F', 'M', 'A', 'M', 'J', 'J'],
	datasets: [{
		label: 'Hombre',
		backgroundColor: '#9656a1',
		borderColor: '#9656a1',
		borderWidth: 1,
		data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor()
		]
	}, {
		label: 'Mujer',
		backgroundColor: '#357376',
		borderColor: '#357376',
		borderWidth: 1,
		data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor()
		]
		
	}]
};



window.onload = function() {
	var ctx = document.getElementById('scatter').getContext('2d');
	window.myLine = new Chart(ctx, configscatter);


	var configbar = document.getElementById('barras').getContext('2d');
	window.myBar = new Chart(configbar, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart'
			}
		}
	});
};

