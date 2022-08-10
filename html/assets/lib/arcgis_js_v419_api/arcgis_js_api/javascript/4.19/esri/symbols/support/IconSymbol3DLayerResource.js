// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../chunks/persistableUrlUtils ../../core/JSONSupport".split(" "),
function(a,p,d,k,z,A,q,r,t,u,v,w,e,B,C,l,x){var f;k=r.strict()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"});a.IconSymbol3DLayerResource=f=function(m){function g(b){return m.call(this,b)||this}p._inheritsLoose(g,m);var h=g.prototype;h.readHref=function(b,c,n){return b?l.fromJSON(b,n):c.dataURI};h.writeHref=function(b,c,n,y){b&&(e.isDataProtocol(b)?c.dataURI=b:(c.href=l.toJSON(b,y),e.isAbsolute(c.href)&&(c.href=e.normalize(c.href))))};h.clone=function(){return new f({href:this.href,
primitive:this.primitive})};return g}(x.JSONSupport);d.__decorate([q.property({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],a.IconSymbol3DLayerResource.prototype,"href",void 0);d.__decorate([u.reader("href")],a.IconSymbol3DLayerResource.prototype,"readHref",null);d.__decorate([w.writer("href",{href:{type:String},dataURI:{type:String}})],a.IconSymbol3DLayerResource.prototype,"writeHref",null);d.__decorate([t.enumeration(k)],a.IconSymbol3DLayerResource.prototype,"primitive",void 0);
a.IconSymbol3DLayerResource=f=d.__decorate([v.subclass("esri.symbols.support.IconSymbol3DLayerResource")],a.IconSymbol3DLayerResource);a.default=a.IconSymbol3DLayerResource;a.defaultPrimitive="circle";Object.defineProperty(a,"__esModule",{value:!0})});