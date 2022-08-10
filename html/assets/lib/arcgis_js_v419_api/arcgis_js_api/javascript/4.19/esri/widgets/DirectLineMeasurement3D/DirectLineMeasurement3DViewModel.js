// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Handles ../../core/unitUtils ../../core/watchUtils ../../views/3d/interactive/graphics/analysisFactoryUtils ../support/commonProperties ../support/InteractiveToolViewModel ../../views/3d/interactive/measurementTools/directLineMeasurement3D/DirectLineMeasurement3DTool".split(" "),
function(l,f,c,m,q,z,g,A,r,B,C,D,t,k,u,v,w,x,y){const n=q.getLogger("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel");c=function(p){function h(a){a=p.call(this,a)||this;a.supportedViewType="3d";a._handles=new t;a._userUnitOptions=null;a._userUnit=null;return a}l._inheritsLoose(h,p);var d=h.prototype;d.initialize=function(){this._handles.add([u.init(this,"unit",a=>{this.tool&&(this.tool.model.unit=a)})])};d.destroy=function(){this._handles.destroy();this._handles=null};d.start=
function(){return this.createTool()};d.clear=function(){this.removeTool()};h.preload=async function(){return v.preloadAnalysisModules("DirectLineMeasurement3D")};d.createToolParams=function(){return{toolConstructor:y,constructorArguments:()=>({unit:this.unit})}};d.logUnsupportedError=function(){n.error("DirectLineMeasurement3D widget is not implemented for MapView")};d.logError=function(...a){n.error(...a)};d._findSelectableUnit=function(a,b){const e=this.unitOptions;return-1!==e.indexOf(a)?a:b?this._findSelectableUnit(b):
e[0]};d._filteredOrAllUnits=function(a){if(!a)return k.measurementLengthUnits.slice();a=a.filter(b=>-1!==k.measurementLengthUnits.indexOf(b));return 0===a.length?k.measurementLengthUnits.slice():a};l._createClass(h,[{key:"state",get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"}},{key:"measurement",get:function(){if(!this.tool)return null;var a=this.tool.model,b=this.tool.directLineMeasurementView.dataObjectView;if(m.isNone(b))return{mode:"euclidean",directDistance:{text:null,
state:"unavailable"},horizontalDistance:{text:null,state:"unavailable"},verticalDistance:{text:null,state:"unavailable"}};b=b.actualVisualizedMeasurement;const e=this.tool.directLineMeasurementView;a=m.isSome(a.model.measurement)?"available":"unavailable";switch(b){case "euclidean":return{mode:b,directDistance:{text:e.directLabelText,state:a},horizontalDistance:{text:e.horizontalLabelText,state:a},verticalDistance:{text:e.verticalLabelText,state:a}};case "geodesic":return{mode:b,directDistance:{text:null,
state:"unavailable"},horizontalDistance:{text:e.directLabelText,state:a},verticalDistance:{text:e.verticalLabelText,state:a}}}}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(a){this._userUnitOptions=a;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return this._userUnit?this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)},set:function(a){this._userUnit=
a?this._findSelectableUnit(a,this._userUnit):null;this.notifyChange("unit")}}]);return h}(x.InteractiveToolViewModel);f.__decorate([g.property({readOnly:!0})],c.prototype,"state",null);f.__decorate([g.property({readOnly:!0})],c.prototype,"measurement",null);f.__decorate([g.property()],c.prototype,"tool",void 0);f.__decorate([g.property(w.defaultUnitPropertyMetadata)],c.prototype,"defaultUnit",void 0);f.__decorate([g.property()],c.prototype,"unitOptions",null);f.__decorate([g.property()],c.prototype,
"unit",null);return c=f.__decorate([r.subclass("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],c)});