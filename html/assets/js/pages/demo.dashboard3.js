!(function (o) {
    "use strict";
    function e() {
        (this.$body = o("body")), (this.charts = []);
    }
    (e.prototype.initCharts = function () {
        window.Apex = { chart: { parentHeightOffset: 0, toolbar: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"] };
        var e = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
            t = o("#revenue-chart").data("colors");
        t && (e = t.split(","));
        var r = {
            chart: { height: 364, type: "line", dropShadow: { enabled: !0, opacity: 0.2, blur: 7, left: -7, top: 7 } },
            dataLabels: { enabled: !1 },
            stroke: { curve: "smooth", width: 4 },
            series: [
                { name: "Emprededores con iniciación de actividades", data: [10, 20, 15, 25, 20, 30, 20,10, 20, 15, 25, 20] },
                { name: "Emprededores sin iniciación de actividades", data: [10, 22, 15, 25, 2, 30, 7,10, 34, 15, 1, 2] },
                
            ],
            colors: e,
            zoom: { enabled: !1 },
            legend: { show: !1 },
            xaxis: { type: "string", categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"], tooltip: { enabled: !1 }, axisBorder: { show: !1 } },
            yaxis: {
                labels: {
                    formatter: function (e) {
                        return e + " Emp";
                    },
                    offsetX: -15,
                },
            },
        };


        new ApexCharts(document.querySelector("#revenue-chart"), r).render();
        e = ["#727cf5", "#e3eaef"];
        (t = o("#high-performing-product").data("colors")) && (e = t.split(","));
        r = {
            chart: { height: 257, type: "bar", stacked: !0 },
            plotOptions: { bar: { horizontal: !1, columnWidth: "20%" } },
            dataLabels: { enabled: !1 },
            stroke: { show: !0, width: 2, colors: ["transparent"] },
            series: [
                { name: "Indigena", data: [65, 59] },
                { name: "No Indigena", data: [89, 40] },
            ],
            zoom: { enabled: !1 },
            legend: { show: !1 },
            colors: e,
            xaxis: { categories: ["Masculino", "Femenino"], axisBorder: { show: !1 } },
            yaxis: {
                labels: {
                    formatter: function (e) {
                        return "N° "+e;
                    },
                    offsetX: -15,
                },
            },
            fill: { opacity: 1 },
            tooltip: {
                y: {
                    formatter: function (e) {
                        return "N°" + e + "";
                    },
                },
            },
        };


        new ApexCharts(document.querySelector("#high-performing-product"), r).render();
        e = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00", "#39afd1"];
        (t = o("#average-sales").data("colors")) && (e = t.split(","));
        r = {
            size:'90%',
            chart: { height: 213, type: "pie" },
            legend: { show: !1 },
            stroke: { colors: ["transparent"],},
            series: [58.46, 22.49, 18.92, 0.08,0.01],
            labels: ["Bosques y plantaciones", "Humedales, áreas desprovistas de vegetación, nieve, glaciares y cuerpos de agua", "Praderas y matorrales", "Áreas urbanas e industriales","Terrenos agrícolas"],
            colors: e,
            responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: "bottom" } } }],
        };
        new ApexCharts(document.querySelector("#average-sales"), r).render();
    }),
        (e.prototype.initMaps = function () {
            0 < o("#world-map-markers").length &&
                o("#world-map-markers").vectorMap({
                    map: "world_mill_en",
                    normalizeFunction: "polynomial",
                    hoverOpacity: 0.7,
                    hoverColor: !1,
                    regionStyle: { initial: { fill: "#e3eaef" } },
                    markerStyle: { initial: { r: 9, fill: "#727cf5", "fill-opacity": 0.9, stroke: "#fff", "stroke-width": 7, "stroke-opacity": 0.4 }, hover: { stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5 } },
                    backgroundColor: "transparent",
                    markers: [
                        { latLng: [-38.6970017, -71.7475124], name: "Volcan Llaima" },
                        { latLng: [-38.9666651, -71.5341766], name: "Volcán Sollipulli " },
                        { latLng: [-38.843632, -71.703162], name: "Zonas con alta pendiente y escaza vegetación al sur y al este de la comuna" },
                        
                    ],
                    zoomOnScroll: !1,
                    
                });
                
        }),
        (e.prototype.init = function () {
            o("#dash-daterange").daterangepicker({ singleDatePicker: !0 }), this.initCharts(), this.initMaps();
        }),
        (o.Dashboard = new e()),
        (o.Dashboard.Constructor = e);
})(window.jQuery),
    (function (t) {
        "use strict";
        t(document).ready(function (e) {
            t.Dashboard.init();
            

        });
    })(window.jQuery);








var briteChartApp = window.briteChartApp || {};
!(function (i, e) {
    "use strict";
    var c = ["#727cf5", "#0acf97", "#6c757d", "#fa5c7c", "#ffbc00", "#39afd1", "#e3eaef"];
    
        
        (e.createDonutChart = function (e, t, legenda) {
            var a = i(e).data("colors"),
                l = a ? a.split(",") : c.concat(),
                n = britecharts.donut(),
                u = britecharts.legend();
            u.width(350).height(300).colorSchema(l).numberFormat("s"),
                n
                    .height(300)
                    .highlightSliceById(1)
                    .colorSchema(l)
                    .hasFixedHighlightedSlice(!0)
                    .internalRadius(90)
                    .on("customMouseOver", function (e) {
                        u.highlight(e.data.id);
                    })
                    .on("customMouseOut", function () {
                        u.clearHighlight();
                    }),
                d3.select(e).datum(t).call(n),
                d3.select(".legend-entry-name").style("white-space", "nowrap"),
                d3.select(".legend-entry-name").style("overflow", "hidden"),
                d3.select(".legend-entry-name").style("text-overflow", "ellipsis"),
                d3.select(legenda).datum(t).call(u);
               
                
               
                
        }),
        
        
        
        i(function () {
            var 
                a = [
                    { name: "Comercio", id: 1, quantity: 36.3, percentage: 36.3 },
                    { name: "Actividades de alojamiento y de servicio de comidas", id: 2, quantity: 18.1, percentage: 18.1 },
                    { name: "Agricultura, ganadería, caza y silvicultura", id: 3, quantity: 11.1, percentage: 11.1 },
                    { name: "Otro", id: 4, quantity: 35.5 , percentage: 35.5 }
                ],
                b = [
                    { name: "Agricultura, ganadería, caza y silvicultura", id: 1, quantity: 44.7, percentage: 44.7 },
                    { name: "Industrias manufactureras", id: 2, quantity: 10.6, percentage: 10.6 },
                    { name: "Construcción", id: 3, quantity: 10.6, percentage: 10.6 },
                    { name: "Comercio al por mayor y al por menor", id: 4, quantity: 11.9, percentage: 11.9 },
                    { name: "Otro", id: 5, quantity: 22.2, percentage: 22.2 }
                ],
                a2 = [
                    { name: "Comercio", id: 1, quantity: 34.3, percentage: 34.3 },
                    { name: "Actividades de alojamiento y de servicio de comidas", id: 2, quantity: 11.1, percentage: 11.1 },
                    { name: "Agricultura, ganadería, caza y silvicultura", id: 3, quantity: 35.1, percentage: 35.1 },
                    { name: "Otro", id: 4, quantity: 25.5, percentage: 25.5 }
                ],
                b2 = [
                    { name: "Agricultura, ganadería, caza y silvicultura", id: 1, quantity: 34.7, percentage: 34.7 },
                    { name: "Industrias manufactureras", id: 2, quantity: 15.6, percentage: 15.6 },
                    { name: "Construcción", id: 3, quantity: 50.6, percentage: 50.6 },
                    { name: "Comercio al por mayor y al por menor", id: 4, quantity: 16.9, percentage: 16.9 },
                    { name: "Otro", id: 5, quantity: 6.2, percentage: 6.2 }
                ];
            function u() {
                
                    d3.selectAll(".donut-chart").remove(),
                    d3.selectAll(".britechart-legend").remove(),
                    
                    
                    0 < i(".donut-container").length && briteChartApp.createDonutChart(".donut-container", a, ".legend-chart-container")
                    0 < i(".donut-container2").length && briteChartApp.createDonutChart(".donut-container2", b,".legend-chart-container2")
                    0 < i(".donut-containerv2").length && briteChartApp.createDonutChart(".donut-containerv2", a2,".legend-chart-containerv2")
                    0 < i(".donut-container2v2").length && briteChartApp.createDonutChart(".donut-container2v2", b2,".legend-chart-container2v2")
                    $('.legend-entry-name');
                    $('.legend-entry-name').css({'white-space' : 'nowrap!important','width' : '50px!important','overflow' : 'hidden!important','text-overflow' : 'ellipsis!important'});
                    console.log("hola");
                    }
            i(window).on("resize", function (e) {
                e.preventDefault(), setTimeout(u, 200);
            }),
                u();
        });
})(jQuery, briteChartApp);
