for (var ts2 = 14844186e5, dates = [], spikes = [5, -5, 3, -3, 8, -8], i = 0; i < 120; i++) {
    var innerArr = [(ts2 += 864e5), dataSeries[1][i].value];
    dates.push(innerArr);
}
colors = ["#fa5c7c"];
(dataColors = $("#line-chart-zoomable").data("colors")) && (colors = dataColors.split(","));
options = {
    chart: { type: "area", stacked: !1, height: 380, zoom: { enabled: !0 } },
    plotOptions: { line: { curve: "smooth" } },
    dataLabels: { enabled: !1 },
    stroke: { width: [3] },
    series: [{ name: "XYZ MOTORS", data: dates }],
    markers: { size: 0, style: "full" },
    colors: colors,
    title: { text: "Stock Price Movement", align: "left" },
    grid: { row: { colors: ["transparent", "transparent"], opacity: 0.2 }, borderColor: "#f1f3fa" },
    fill: { gradient: { enabled: !0, shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.5, opacityTo: 0.1, stops: [0, 70, 80, 100] } },
    yaxis: {
        min: 2e7,
        max: 25e7,
        labels: {
            formatter: function(e) {
                return (e / 1e6).toFixed(0);
            },
        },
        title: { text: "Price" },
    },
    xaxis: { type: "datetime" },
    tooltip: {
        shared: !1,
        y: {
            formatter: function(e) {
                return (e / 1e6).toFixed(0);
            },
        },
    },
    responsive: [{ breakpoint: 600, options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } } }],
};
(chart = new ApexCharts(document.querySelector("#line-chart-zoomable"), options)).render();



window.Apex = { chart: { parentHeightOffset: 0, toolbar: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"] };
var e = new Date(),
    t = (function(e, t) {
        for (var a = new Date(t, e, 1), o = [], r = 0; a.getMonth() === e && r < 15;) {
            var s = new Date(a);
            o.push(s.getDate() + " " + s.toLocaleString("en-us", { month: "short" })), a.setDate(a.getDate() + 1), (r += 1);
        }
        return o;
    })(e.getMonth() + 1, e.getFullYear()),
    a = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(n = $("#sessions-overview").data("colors")) && (a = n.split(","));
var o = {
    chart: { height: 309, type: "area" },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 4 },
    series: [{ name: "Sessions", data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35] }],
    zoom: { enabled: !1 },
    legend: { show: !1 },
    colors: a,
    xaxis: { type: "string", categories: t, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, labels: {} },
    yaxis: {
        labels: {
            formatter: function(e) {
                return e + "k";
            },
            offsetX: -15,
        },
    },
    fill: { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.45, opacityTo: 0.05, stops: [45, 100] } },
};
new ApexCharts(document.querySelector("#sessions-overview"), o).render();

var n;
a = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
(n = $("#sessions-os").data("colors")) && (a = n.split(","));
o = {
    chart: { height: 268, type: "radialBar" },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: { fontSize: "22px" },
                value: { fontSize: "16px" },
                total: {
                    show: !0,
                    label: "Actividad",
                    formatter: function(e) {
                        return 500;
                    },
                },
            },
        },
    },
    colors: a,
    series: [10, 35, 67, 83],
    labels: ["Transporte", "Turismo", "Ganaderia", "Agricultura"],
};
new ApexCharts(document.querySelector("#sessions-os"), o).render();