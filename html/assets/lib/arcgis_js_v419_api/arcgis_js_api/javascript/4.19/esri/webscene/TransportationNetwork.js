// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/JSONSupport".split(" "),function(g,b,a,m,n,c,p,h,q,r,t,k){var d;a=d=function(f){function e(l){return f.call(this,l)||this}g._inheritsLoose(e,f);e.prototype.clone=function(){return new d({name:this.name,
path:this.path,title:this.title})};return e}(k.JSONSupport);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"path",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);return a=d=b.__decorate([h.subclass("esri.webscene.TransportationNetwork")],a)});