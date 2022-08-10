// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/object ../core/maybe ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/Error ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/promiseUtils ../popup/ExpressionInfo ../PopupTemplate ../request ./Layer ../core/MultiOriginJSONSupport ./support/commonProperties ./mixins/OperationalLayer ./support/Field ./support/FieldsIndex ./mixins/ArcGISService ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./support/fieldProperties ../support/popupUtils ./mixins/SceneService ./pointCloudFilters/typeUtils ../renderers/support/pointCloud/typeUtils".split(" "),
function(q,d,r,x,y,z,A,S,f,T,B,C,D,l,E,U,V,F,t,G,H,c,I,n,J,p,K,L,M,N,O,P,Q,R,u){const v=A.getLogger("esri.layers.PointCloudLayer");r=O.defineFieldProperties();c=function(w){function m(...a){a=w.call(this,...a)||this;a.operationalLayerType="PointCloudLayer";a.popupEnabled=!0;a.popupTemplate=null;a.opacity=1;a.filters=[];a.fields=null;a.outFields=null;a.path=null;a.legendEnabled=!0;a.renderer=null;a.type="point-cloud";return a}q._inheritsLoose(m,w);var g=m.prototype;g.normalizeCtorArgs=function(a,b){return"string"===
typeof a?{url:a,...b}:a};g.getFieldDomain=function(a){return(a=this.fieldsIndex.get(a))&&a.domain?a.domain:null};g.readServiceFields=function(a,b,h){return Array.isArray(a)?a.map(e=>{const k=new p;"FieldTypeInteger"===e.type&&(e=x.clone(e),e.type="esriFieldTypeInteger");k.read(e,h);return k}):Array.isArray(b.attributeStorageInfo)?b.attributeStorageInfo.map(e=>new p({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})):null};g.writeRenderer=function(a,b,h,e){y.setDeepValue("layerDefinition.drawingInfo.renderer",
a.write(null,e),b)};g.load=function(a){const b=z.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},a).catch(F.throwIfAbortError).then(()=>this._fetchService(b));this.addResolvingPromise(a);return Promise.resolve(this)};g.createPopupTemplate=function(a){a=P.createPopupTemplate(this,a);this.formatPopupTemplateReturnsField(a);this.formatPopupTemplateRGBField(a);return a};g.formatPopupTemplateReturnsField=function(a){const b=this.fieldsIndex.get("RETURNS");if(b){var h=a.fieldInfos.find(k=>
k.fieldName===b.name);if(h){var e=new t({name:"pcl-returns-decoded",title:b.alias||b.name,expression:`
        var returnValue = $feature.${b.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});a.expressionInfos=[...a.expressionInfos||[],e];h.fieldName="expression/pcl-returns-decoded"}}};g.formatPopupTemplateRGBField=function(a){const b=this.fieldsIndex.get("RGB");if(b){var h=a.fieldInfos.find(k=>k.fieldName===b.name);if(h){var e=new t({name:"pcl-rgb-decoded",title:b.alias||b.name,expression:`
        var rgb = $feature.${b.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});a.expressionInfos=[...a.expressionInfos||[],e];h.fieldName="expression/pcl-rgb-decoded"}}};g.queryCachedStatistics=async function(a,b){await this.load(b);if(!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const h=this.fieldsIndex.get(a);if(!h)throw new l("pointcloudlayer:field-unexisting",`Field '${a}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===h.name)return a=E.join(this.parsedUrl.path,
`./statistics/${e.key}`),H(a,{query:{f:"json"},responseType:"json",signal:b?b.signal:null}).then(k=>k.data);throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available");};g.saveAs=async function(a,b){return this._debouncedSaveOperations(1,{...b,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},a)};g.save=async function(){return this._debouncedSaveOperations(0,{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"})};
g.validateLayer=function(a){if(a.layerType&&"PointCloud"!==a.layerType)throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(2<this.version.major)throw new l("layer:service-version-too-new","Service version is too new.",
{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});};g.hasCachedStatistics=function(a){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(b=>b.name===a)};g._getTypeKeywords=function(){return["PointCloud"]};g._validateElevationInfo=function(){const a=this.elevationInfo;a&&("absolute-height"!==a.mode&&v.warn(".elevationInfo\x3d","Point cloud layers only support absolute-height elevation mode"),a.featureExpressionInfo&&"0"!==a.featureExpressionInfo.expression&&
v.warn(".elevationInfo\x3d","Point cloud layers do not support featureExpressionInfo"))};q._createClass(m,[{key:"defaultPopupTemplate",get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"fieldsIndex",get:function(){return new K(this.fields)}},{key:"elevationInfo",set:function(a){this._set("elevationInfo",a);this._validateElevationInfo()}}]);return m}(Q.SceneService(L.ArcGISService(J.OperationalLayer(M.PortalLayer(N.ScaleRangeLayer(I.MultiOriginJSONMixin(c)))))));
d.__decorate([f.property({type:["PointCloudLayer"]})],c.prototype,"operationalLayerType",void 0);d.__decorate([f.property(n.popupEnabled)],c.prototype,"popupEnabled",void 0);d.__decorate([f.property({type:G,json:{name:"popupInfo",write:!0}})],c.prototype,"popupTemplate",void 0);d.__decorate([f.property({readOnly:!0,json:{read:!1}})],c.prototype,"defaultPopupTemplate",null);d.__decorate([f.property({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],c.prototype,"opacity",
void 0);d.__decorate([f.property({type:["show","hide"]})],c.prototype,"listMode",void 0);d.__decorate([f.property({types:[R.types],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],c.prototype,"filters",void 0);d.__decorate([f.property({type:[p]})],c.prototype,"fields",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"fieldsIndex",null);d.__decorate([B.reader("service","fields",["fields","attributeStorageInfo"])],c.prototype,"readServiceFields",
null);d.__decorate([f.property(r.outFields)],c.prototype,"outFields",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"attributeStorageInfo",void 0);d.__decorate([f.property(n.elevationInfo)],c.prototype,"elevationInfo",null);d.__decorate([f.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0);d.__decorate([f.property(n.legendEnabled)],c.prototype,"legendEnabled",void 0);d.__decorate([f.property({types:u.types,
json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:u.types},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],c.prototype,"renderer",void 0);d.__decorate([D.writer("renderer")],c.prototype,"writeRenderer",null);d.__decorate([f.property({json:{read:!1},readOnly:!0})],c.prototype,"type",void 0);return c=d.__decorate([C.subclass("esri.layers.PointCloudLayer")],c)});