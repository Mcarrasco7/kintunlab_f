// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport ./ClassificationDefinition".split(" "),function(g,b,a,m,n,d,p,h,q,r,t,k,l){a=function(e){function f(){var c=e.apply(this,arguments)||this;c.classificationDefinition=
null;c.where=null;return c}g._inheritsLoose(f,e);return f}(k.JSONSupport);b.__decorate([d.property({type:l,json:{read:{source:"classificationDef"},write:{target:"classificationDef"}}})],a.prototype,"classificationDefinition",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=b.__decorate([h.subclass("esri.tasks.support.GenerateRendererParameters")],a)});