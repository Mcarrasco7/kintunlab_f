// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example

if(plan1<10){
  $( "#priesgo" ).parent().css( "top", "42%" );
}
if(plan1==100){
  $( "#priesgo" ).parent().css( "top", "57%" );
}

if(plan2<10){
  $( "#priesgo" ).parent().css( "top", "42%" );
}
if(plan2==100){
  $( "#priesgo" ).parent().css( "top", "57%" );
}
if(plan3<10){
  $( "#priesgo" ).parent().css( "top", "42%" );
}
if(plan3==100){
  $( "#priesgo" ).parent().css( "top", "57%" );
}



$('#priesgo').html(''+plan1+'<span class="sub-text">%</span>');
$('#pemergencia').html(''+plan2+'<span class="sub-text">%</span>');
$('#pvariable').html(''+plan3+'<span class="sub-text">%</span>');
$('#pcontigencia').html(''+plan4+'<span class="sub-text">%</span>');



function getColor(d) {
  return d <= 100 && d >= 67   ? '#3ddd37' :
         d <= 66 && d >= 34 ? '#f0f226' :
         d <= 33 && d >= 1 ? '#e33d3d' :
                     '#fff';
}

function getColor2(d) {
  return d <= 100 && d >= 67   ? '#32fa2a' :
         d <= 66 && d >= 34 ? '#fdff0d' :
         d <= 33 && d >= 1 ? '#ff2e2e' :
                     '#fff';
}

var ctx = document.getElementById("planreduccionriesgo");


var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [plan1, plan1-100],
    backgroundColor: [getColor(plan1), '#fff'],
    hoverBackgroundColor: [getColor2(plan1), '#fcf8ee'],
    hoverBorderColor: "rgba(234, 236, 244, 1)",
    borderWidth:0,
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
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
        }
      },
      legend: {
        display: false,
        align: 'center',
      },
      tooltips: {
        enabled: false
     },
      cutoutPercentage: 90,
    }
  ,});

 

var ctx2 = document.getElementById("planemergencia");

var myDoughnutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [plan2, plan2-100],
    backgroundColor: [getColor(plan2), '#fff'],
    hoverBackgroundColor: [getColor2(plan2), '#fcf8ee'],
    hoverBorderColor: "rgba(234, 236, 244, 1)",
    borderWidth:0,
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
      legend: {
        display: false,
        align: 'center',
      },
      tooltips: {
        enabled: false
     },
      cutoutPercentage: 90,
    }
  ,});

var ctx3 = document.getElementById("plancomunal");

var myDoughnutChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [plan3, plan3-100],
    backgroundColor: [getColor(plan3), '#fff'],
    hoverBackgroundColor: [getColor2(plan3), '#fcf8ee'],
    hoverBorderColor: "rgba(234, 236, 244, 1)",
    borderWidth:0,
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
      tooltips: {
        enabled: false
     },
      cutoutPercentage: 90,
    }
  ,});

var ctx4 = document.getElementById("plancontingencia");

var myDoughnutChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data : {
    labels: ['Porcentaje avanzado','Porcentaje restante'],
    datasets: [{data: [plan4, plan4-100],
    backgroundColor: [getColor(plan4), '#fff'],
    hoverBackgroundColor: [getColor2(plan4), '#fcf8ee'],
    hoverBorderColor: "rgba(234, 236, 244, 1)",
    borderWidth:0,
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
      tooltips: {
        enabled: false
     },
      cutoutPercentage: 90,
    }
  ,});

  