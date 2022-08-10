function carga_mapa(lat,lon){
        var map;
        require([
            "esri/map",
            "esri/toolbars/edit",
            "esri/geometry/Point",
            "esri/SpatialReference",
            "esri/dijit/Search",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/graphic", 
            "dojo/domReady!",
        ], function(
            Map, Edit, Point, SpatialReference,Search, SimpleMarkerSymbol, Graphic
        ) {

            

             
            map = new Map("map", {
                basemap: "hybrid",
                center: [lat, lon],
                zoom: 12 
            });
            
            var search = new Search({
                map: map
             }, "search");
             search.startup();
            
            
            editToolbar = new Edit(map);
            
            point = new Point(lat, lon, new SpatialReference({wkid:4326}));
            markerSymbol = new SimpleMarkerSymbol();
            markerSymbol.setStyle(SimpleMarkerSymbol.STYLE_CIRCLE).setSize(15).setColor([255,0,0,0.5]);
            pointGraphic = new Graphic(point, markerSymbol);
        
            
        
            map.on("load", function()
            { map.graphics.on("graphic-add", function() 
            { editToolbar.activate(Edit.MOVE, pointGraphic); });
            map.graphics.add(pointGraphic);
            
           
            editToolbar.on('graphic-move-stop', function() { var x = pointGraphic.geometry.x; var y = pointGraphic.geometry.y; posicion(y,x); });
            
            });

            
             
             


        });
}

function posicion(lat,lon){
    $("#latitud").val(lat);
    $("#longitud").val(lon);

}