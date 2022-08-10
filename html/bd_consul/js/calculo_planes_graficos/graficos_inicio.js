var randomScalingFactor = function() {
  return Math.round((Math.random() * (5 - 1) + 1) * Math.round(Math.random() * 100));
};

var ifs = document.getElementById("indicefactores");


var ifs = new Chart(ifs, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [(indice_factores*100), 100-(indice_factores*100)],
    backgroundColor: ['#efb810', '#fff'],
    hoverBackgroundColor: ['#e5b010', '#fcf8ee'],
    hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        weight: 1,
      },
      legend: {
        display: false,
        align: 'center',
      },
      cutoutPercentage: 90,
    }
  ,});



var cal1id = document.getElementById("cal1");

var cal1 = new Chart(cal1id, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [30, 70],
    backgroundColor: ['#6666ff', '#FF6666'],
    hoverBackgroundColor: ['#d1d1ff', '#ffd1d1'],
    hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        weight: 1,
      },
      legend: {
        display: false,
        align: 'center',
      },
      cutoutPercentage: 40,
    }
  ,});



 
  
  var barChartData = {
    labels: ['E', 'F', 'M', 'A'],
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
        randomScalingFactor()
      ]
      
    }]
  };
  
  window.onload = function() {
  
    var configbar = document.getElementById('cal2').getContext('2d');
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
  
