// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/maybe ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/Error ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/promiseUtils ../geometry/SpatialReference ../core/Collection ../core/loadAll ../core/CollectionFlattener ./Layer ../core/MultiOriginJSONSupport ./support/commonProperties ./mixins/OperationalLayer ./mixins/ArcGISService ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./buildingSublayers/BuildingComponentSublayer ./buildingSublayers/BuildingGroupSublayer ./mixins/SceneService ./support/BuildingFilter ./support/BuildingSummaryStatistics ./support/FetchAssociatedFeatureLayer".split(" "),
function(q,e,l,u,A,B,R,g,S,v,C,w,D,T,U,E,F,G,H,I,c,J,r,K,L,M,N,x,k,O,P,y,Q){const t=B.getLogger("esri.layers.BuildingSceneLayer"),z=G.ofType(P);l=u.clone(k.sublayersProperty);l.json.origins["web-scene"]={type:[x],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};l.json.origins["portal-item"]={type:[x],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};c=function(m){function n(a){a=m.call(this,a)||this;a.operationalLayerType="BuildingSceneLayer";a.allSublayers=new I({root:q._assertThisInitialized(a),
rootCollectionNames:["sublayers"],getChildrenFunction:b=>"building-group"===b.type?b.sublayers:null});a.sublayers=null;a.sublayerOverrides=null;a.filters=new z;a.activeFilterId=null;a.summaryStatistics=null;a.outFields=null;a.type="building-scene";return a}q._inheritsLoose(n,m);var d=n.prototype;d.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a};d.destroy=function(){this.allSublayers.destroy()};d.readSublayers=function(a,b,h){a=k.readSublayers(a,b,h);k.forEachSublayer(a,f=>f.layer=
this);this.sublayerOverrides&&(this.applySublayerOverrides(a,this.sublayerOverrides),this.sublayerOverrides=null);return a};d.applySublayerOverrides=function(a,{overrides:b,context:h}){k.forEachSublayer(a,f=>f.read(b.get(f.id),h))};d.readSublayerOverrides=function(a,b){const h=new Map;for(const f of a)null==f||"object"!==typeof f||"number"!==typeof f.id?b.messages.push(new w("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:f})):
h.set(f.id,f);return{overrides:h,context:b}};d.writeSublayerOverrides=function(a,b,h){const f=[];k.forEachSublayer(this.sublayers,p=>{p=p.write({},h);1<Object.keys(p).length&&f.push(p)});0<f.length&&(b.sublayers=f)};d.writeUnappliedOverrides=function(a,b){b.sublayers=[];a.overrides.forEach(h=>{b.sublayers.push(u.clone(h))})};d.write=function(a,b){a=m.prototype.write.call(this,a,b);!b||"web-scene"!==b.origin&&"portal-item"!==b.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,a,b):
this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,a));return a};d.read=function(a,b){m.prototype.read.call(this,a,b);b&&("web-scene"===b.origin||"portal-item"===b.origin)&&null!=a&&Array.isArray(a.sublayers)&&(a=this.readSublayerOverrides(a.sublayers,b),this.sublayers?this.applySublayerOverrides(this.sublayers,a):this.sublayerOverrides=a)};d.readSummaryStatistics=function(a,b){return"string"===typeof b.statisticsHRef?(a=D.join(this.parsedUrl.path,b.statisticsHRef),new y({url:a})):
null};d.load=function(a){const b=A.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},a).catch(E.throwIfAbortError).then(()=>this._fetchService(b)).then(()=>this._fetchAssociatedFeatureService(b));this.addResolvingPromise(a);return Promise.resolve(this)};d.loadAll=function(){return H.loadAll(this,a=>{k.forEachSublayer(this.sublayers,b=>{"building-group"!==b.type&&a(b)});this.summaryStatistics&&a(this.summaryStatistics)})};d.saveAs=async function(a,b){return this._debouncedSaveOperations(1,
{...b,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},a)};d.save=async function(){return this._debouncedSaveOperations(0,{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"})};d.validateLayer=function(a){if(!a.layerType||"Building"!==a.layerType)throw new w("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:a.layerType});};d._getTypeKeywords=function(){return["Building"]};d._validateElevationInfo=
function(){const a=this.elevationInfo;a&&("absolute-height"!==a.mode&&t.warn(".elevationInfo\x3d","Building scene layers only support absolute-height elevation mode"),a.featureExpressionInfo&&"0"!==a.featureExpressionInfo.expression&&t.warn(".elevationInfo\x3d","Building scene layers do not support featureExpressionInfo"))};d._fetchAssociatedFeatureService=async function(a){a=new Q.FetchAssociatedFeatureLayer(this.parsedUrl,this.portalItem,a);try{this.associatedFeatureServiceItem=await a.fetchPortalItem()}catch(b){t.warn("Associated feature service item could not be loaded",
b)}};q._createClass(n,[{key:"elevationInfo",set:function(a){this._set("elevationInfo",a);this._validateElevationInfo()}}]);return n}(O.SceneService(L.ArcGISService(K.OperationalLayer(M.PortalLayer(N.ScaleRangeLayer(J.MultiOriginJSONMixin(c)))))));e.__decorate([g.property({type:["BuildingSceneLayer"]})],c.prototype,"operationalLayerType",void 0);e.__decorate([g.property({readOnly:!0})],c.prototype,"allSublayers",void 0);e.__decorate([g.property(l)],c.prototype,"sublayers",void 0);e.__decorate([v.reader("service",
"sublayers")],c.prototype,"readSublayers",null);e.__decorate([g.property({type:z,nonNullable:!0,json:{write:!0}})],c.prototype,"filters",void 0);e.__decorate([g.property({type:String,json:{write:!0}})],c.prototype,"activeFilterId",void 0);e.__decorate([g.property({readOnly:!0,type:y})],c.prototype,"summaryStatistics",void 0);e.__decorate([v.reader("summaryStatistics",["statisticsHRef"])],c.prototype,"readSummaryStatistics",null);e.__decorate([g.property({type:[String],json:{read:!1}})],c.prototype,
"outFields",void 0);e.__decorate([g.property(r.sceneLayerFullExtent)],c.prototype,"fullExtent",void 0);e.__decorate([g.property({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0);e.__decorate([g.property(r.readOnlyService(F))],c.prototype,"spatialReference",void 0);e.__decorate([g.property(r.elevationInfo)],c.prototype,"elevationInfo",null);e.__decorate([g.property({json:{read:!1},readOnly:!0})],c.prototype,"type",void 0);e.__decorate([g.property()],c.prototype,"associatedFeatureServiceItem",
void 0);return c=e.__decorate([C.subclass("esri.layers.BuildingSceneLayer")],c)});