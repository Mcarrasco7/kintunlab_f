// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../geometry/SpatialReference ../../geometry/Point ../../geometry/Polyline ../../geometry ../../intl/locale ../../symbols/CIMSymbol ../../symbols/Font ../../intl/messages ../../intl ../../symbols/SimpleMarkerSymbol ../../symbols/TextSymbol ../../symbols ../../Graphic ../../core/Handles ../../core/unitUtils ../../core/watchUtils ../../geometry/projection ../../core/unitFormatUtils ../../geometry/support/geodesicUtils ../../geometry/geometryEngine ../../layers/GraphicsLayer ../../layers/GroupLayer ../../views/interactive/dragEventPipeline ../../views/interactive/InteractiveToolBase ../../views/draw/Draw ../../views/interactive/GraphicManipulator".split(" "),
function(q,A,h,e,ba,ca,k,da,N,ea,fa,ha,B,C,O,ia,P,Q,R,D,ja,E,S,ka,v,T,U,F,m,w,n,x,G,V,y,W,X,Y){function Z(c,d,b,a){const g=new E({style:"circle",color:a.handleColor,size:a.handleWidth,outline:{type:"simple-line",width:0}});a=new E({style:"circle",color:a.handleColor,size:1.5*a.handleWidth,outline:{type:"simple-line",width:0}});c=new v({geometry:c,symbol:g});return new Y.GraphicManipulator({view:d,layer:b,graphic:c,focusedSymbol:a})}function H(c,d,b){c=new O({paths:[c],spatialReference:d});if(d.isGeographic)if(n.isSupported(d))b=
n.geodesicLengths([c],"meters")[0],d=n.geodesicDensify(c,1E5);else{b=m.project(c,B.WGS84);var a=n.geodesicDensify(b,1E5);b=n.geodesicLengths([b],"meters")[0];d=m.project(a,d)}else d.isWebMercator?(b=x.geodesicLength(c,"meters"),d=x.geodesicDensify(c,1E5,"meters")):(a=x.planarLength(c,"meters"),a>=b?(b=m.project(c,B.WGS84),a=n.geodesicDensify(b,1E5),b=n.geodesicLengths([b],"meters")[0],d=m.project(a,d)):(b=a,d=c));return{measurement:{geometry:d,length:b},original:c,drawing:d}}function z(c){if(!c)return!1;
const {isGeographic:d,isWebMercator:b,isWGS84:a}=c;return d&&!a&&!n.isSupported(c)||!d&&!b}function I(c,d,b){if(!d||!c)return null;switch(b){case "metric":return w.formatMetricLength(c,d.length,"meters");case "imperial":return w.formatImperialLength(c,d.length,"meters");default:return w.formatDecimal(c,U.convertUnit(d.length,"meters",b),b)}}e=function(c){function d(){var a=c.apply(this,arguments)||this;a._drawActive=!1;a._handles=new T;a._polylineLayer=new G;a._manipulatorLayer=new G;a._groupLayer=
new V({layers:[a._polylineLayer,a._manipulatorLayer],listMode:"hide",visible:!1});a._vertices=[];a.deferCreation=!0;a.geodesicDistanceThreshold=1E5;a.measurement=null;a.measurementLabel=null;return a}A._inheritsLoose(d,c);var b=d.prototype;b.initialize=function(){D.fetchMessageBundle("esri/core/t9n/Units").then(a=>{this.messages=a});this._handles.add(P.onLocaleChange(async()=>{this.messages=await D.fetchMessageBundle("esri/core/t9n/Units")}))};b.destroy=function(){this.detach();this._draw&&(this._draw.destroy(),
this._draw=null);this._handles&&(this._handles.destroy(),this._handles=null);this._polylineLayer&&(this._polylineLayer.destroy(),this._polylineLayer=null);this._manipulatorLayer&&(this._manipulatorLayer.destroy(),this._manipulatorLayer=null)};b.activate=function(){this._drawActive||0!==this._vertices.length||this._startSketch()};b.onAttach=function(){const a=this.view;this._draw=new X({view:a});a.map.add(this._groupLayer);a.focus();this._handles.add([F.init(this,["unit","geodesicDistanceThreshold",
"palette","messages"],()=>{0<this._vertices.length&&this._updatePolylines()}),F.init(this,"view.spatialReference",g=>{z(g)&&!m.isLoaded()&&m.load()})]);this.create()};b.onDetach=function(){const {map:a}=this.view;this._draw.view=null;this._draw.destroy();this._draw=null;a.remove(this._groupLayer);this._handles.removeAll();this._polylineLayer.removeAll();this._manipulatorLayer.removeAll();this._set("measurement",null);this._set("measurementLabel",null)};b.onShow=function(){this._groupLayer.visible=
!0};b.onHide=function(){this._groupLayer.visible=!1};b.reset=function(){this._vertices=[];this._polylineLayer.removeAll();this._set("measurement",null);this._set("measurementLabel",null);this._draw.reset();this._drawActive=!1;this._updateSketch([])};b.onInputEvent=function(a){"pointer-move"===a.type&&this._updateCursor()};b._startSketch=function(){this._drawActive=!0;const a=this._draw.create("polyline",{mode:"click"});a.on("vertex-add vertex-update vertex-remove cursor-update undo redo".split(" "),
g=>this._updateSketch(g.vertices));a.on("draw-complete",()=>{this._stopSketch()})};b._stopSketch=function(){this.manipulators.forEach(a=>{a.manipulator.interactive=!0});this._drawActive=!1;this.complete()};b._updateSketch=function(a){if(!z(this.view.spatialReference)||m.isLoaded())if(2>a.length)this._vertices=[],this.manipulators.removeAll(),this._polylineLayer.removeAll();else{this.create();for(var {spatialReference:g}=this.view;this._vertices.length>a.length;){var {manipulatorId:f}=this._vertices.pop();
this.manipulators.remove(f)}for(let l=this._vertices.length;l<a.length;l++){const [J,K]=a[l];f=new C({x:J,y:K,spatialReference:g});f=Z(f,this.view,this._manipulatorLayer,this.palette);var p=this.manipulators.add(f);y.createManipulatorDragEventPipeline(f,(L,aa)=>{aa.next(y.screenToMap(this.view)).next(y.dragGraphic(L.graphic)).next(()=>{const M=L.graphic.geometry;this._vertices[l].coord=[M.x,M.y];this._updatePolylines()})});this._vertices.push({manipulatorId:p,coord:[J,K]})}f=this._vertices.length-
1;p=this._vertices[f];var [r,t]=a[f];if(p.coord[0]!==r||p.coord[1]!==t)p.coord=[r,t],a=new C({x:r,y:t,spatialReference:g}),this.manipulators.findById(p.manipulatorId).graphic.geometry=a;var u=this._drawActive?this._vertices[f].manipulatorId:null;this.manipulators.forEach(l=>{l.manipulator.interactive=null==u||l.id!==u});this._updatePolylines()}};b._updateCursor=function(){this.cursor=this._drawActive?"crosshair":null};b._updatePolylines=function(){var a=this._vertices.map(l=>l.coord);const {measurement:g,
drawing:f,original:p}=H(a,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",g);a=I(this.messages,g,this.unit);this._set("measurementLabel",a);const {pathPrimaryColor:r,pathSecondaryColor:t,pathWidth:u}=this.palette;this._polylineLayer.removeAll();this._polylineLayer.addMany([new v({geometry:f,symbol:new Q({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],
lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:u-1.5,color:t},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:u,color:r}]}}})}),new v({geometry:p.extent.center,symbol:new S({color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,font:new R({size:14,family:"sans-serif"}),text:a})})])};A._createClass(d,[{key:"editable",set:function(a){this._set("editable",a);a||this._draw.reset()}}]);return d}(W.InteractiveToolBase);
h.__decorate([k.property()],e.prototype,"cursor",void 0);h.__decorate([k.property({value:!0})],e.prototype,"editable",null);h.__decorate([k.property({type:Number})],e.prototype,"geodesicDistanceThreshold",void 0);h.__decorate([k.property({readOnly:!0})],e.prototype,"measurement",void 0);h.__decorate([k.property({readOnly:!0})],e.prototype,"measurementLabel",void 0);h.__decorate([k.property()],e.prototype,"messages",void 0);h.__decorate([k.property()],e.prototype,"palette",void 0);h.__decorate([k.property()],
e.prototype,"unit",void 0);h.__decorate([k.property({constructOnly:!0})],e.prototype,"view",void 0);e=h.__decorate([N.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],e);q.createDistanceMeasurementInfo2D=H;q.createDistanceMeasurementLabel=I;q.default=e;q.isSupported=function(c){return null!=c&&(!z(c)||m.isSupported())};Object.defineProperty(q,"__esModule",{value:!0})});