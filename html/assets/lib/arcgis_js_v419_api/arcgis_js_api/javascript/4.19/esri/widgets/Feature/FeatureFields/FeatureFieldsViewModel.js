// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Accessor ../../../popup/FieldInfo ../../../popup/ExpressionInfo ../support/featureUtils".split(" "),function(g,c,b,t,u,e,v,m,
w,x,y,n,p,q,r){b=function(h){function f(a){a=h.call(this,a)||this;a.attributes=null;a.expressionInfos=null;a.description=null;a.fieldInfos=null;a.title=null;return a}g._inheritsLoose(f,h);g._createClass(f,[{key:"formattedFieldInfos",get:function(){const {expressionInfos:a,fieldInfos:k}=this,l=[];null==k?void 0:k.forEach(d=>{if(!d.hasOwnProperty("visible")||d.visible)d=d.clone(),d.label=r.getFieldInfoLabel(d,a),l.push(d)});return l}}]);return f}(n);c.__decorate([e.property()],b.prototype,"attributes",
void 0);c.__decorate([e.property({type:[q]})],b.prototype,"expressionInfos",void 0);c.__decorate([e.property()],b.prototype,"description",void 0);c.__decorate([e.property({type:[p]})],b.prototype,"fieldInfos",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"formattedFieldInfos",null);c.__decorate([e.property()],b.prototype,"title",void 0);return b=c.__decorate([m.subclass("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")],b)});