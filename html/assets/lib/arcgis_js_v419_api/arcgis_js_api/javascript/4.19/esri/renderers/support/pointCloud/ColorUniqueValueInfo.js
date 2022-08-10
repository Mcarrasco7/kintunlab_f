// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/lang ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/JSONSupport ../../../Color".split(" "),function(a,k,b,q,g,r,l,d,t,m,u,v,w,n,p){var e;a.ColorUniqueValueInfo=
e=function(h){function f(){var c=h.apply(this,arguments)||this;c.description=null;c.label=null;c.values=null;c.color=null;return c}k._inheritsLoose(f,h);f.prototype.clone=function(){return new e({description:this.description,label:this.label,values:g.clone(this.values),color:g.clone(this.color)})};return f}(n.JSONSupport);b.__decorate([d.property({type:String,json:{write:!0}})],a.ColorUniqueValueInfo.prototype,"description",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.ColorUniqueValueInfo.prototype,
"label",void 0);b.__decorate([d.property({type:[String],json:{write:!0}})],a.ColorUniqueValueInfo.prototype,"values",void 0);b.__decorate([d.property({type:p,json:{type:[l.Integer],write:!0}})],a.ColorUniqueValueInfo.prototype,"color",void 0);a.ColorUniqueValueInfo=e=b.__decorate([m.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],a.ColorUniqueValueInfo);a.default=a.ColorUniqueValueInfo;Object.defineProperty(a,"__esModule",{value:!0})});