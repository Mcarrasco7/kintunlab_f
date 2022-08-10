var ctxv2 = document.getElementById("ifsot");
  var myDoughnutChartv2 = new Chart(ctxv2, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [(ifsot*100), 100-(ifsot*100)],
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
        
      },
      elements: {
        center: {
          text: '90%',
          color: '#FF6384', // Default is 
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
        }
      },
      legend: {
        display: false,
        align: 'center',
      },
      cutoutPercentage: 90,
    }
  ,});

  var ctxv3 = document.getElementById("ifscc");
  var myDoughnutChartv3 = new Chart(ctxv3, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [(ifscc*100), 100-(ifscc*100)],
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
        
      },
      elements: {
        center: {
          text: '90%',
          color: '#FF6384', // Default is 
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
        }
      },
      legend: {
        display: false,
        align: 'center',
      },
      cutoutPercentage: 90,
    }
  ,});
  var ctxv4 = document.getElementById("socio-demo");
  var myDoughnutChartv4 = new Chart(ctxv4, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [(socio*100), 100-(socio*100)],
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
        
      },
      elements: {
        center: {
          text: '90%',
          color: '#FF6384', // Default is 
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
        }
      },
      legend: {
        display: false,
        align: 'center',
      },
      cutoutPercentage: 90,
    }
  ,});
 
  var ctxv5 = document.getElementById("gobernanza");
  var myDoughnutChartv5 = new Chart(ctxv5, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [(gobernanza*100), 100-(gobernanza*100)],
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
        
      },
      elements: {
        center: {
          text: '90%',
          color: '#FF6384', // Default is 
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
        }
      },
      legend: {
        display: false,
        align: 'center',
      },
      cutoutPercentage: 90,
    }
  ,});