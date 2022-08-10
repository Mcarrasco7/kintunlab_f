var randomScalingFactor = function() {
	return Math.round((Math.random() * (5 - 1) + 1) * Math.round(Math.random() * 100));
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

	var configbar = document.getElementById('afectados').getContext('2d');
	window.myBar = new Chart(configbar, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: true,
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
