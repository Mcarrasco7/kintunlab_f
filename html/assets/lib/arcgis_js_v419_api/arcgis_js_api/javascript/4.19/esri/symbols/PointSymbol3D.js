// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/Error ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/Collection ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./TextSymbol3DLayer ./Symbol3D ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),
function(y,e,n,g,F,G,p,z,A,B,C,H,I,J,r,f,t,u,b,q,D){var c;const v=r.ofType({base:null,key:"type",typeMap:{icon:f,object:t,text:u}});n=r.ofType({base:null,key:"type",typeMap:{icon:f,object:t}});b=c=function(w){function d(a){a=w.call(this,a)||this;a.verticalOffset=null;a.callout=null;a.symbolLayers=new v;a.type="point-3d";return a}y._inheritsLoose(d,w);var h=d.prototype;h.writeSymbolLayers=function(a,l,E,m){const x=a.filter(k=>"text"!==k.type);m&&m.messages&&x.length<a.length&&(a=a.find(k=>"text"===
k.type),m.messages.push(new C("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:a})));l[E]=x.map(k=>k.write({},m)).toArray()};h.supportsCallout=function(){if(1>(this.symbolLayers?this.symbolLayers.length:0))return!1;for(const a of this.symbolLayers.items)switch(a.type){case "icon":case "text":case "object":continue;default:return!1}return!0};h.hasVisibleCallout=function(){return q.hasVisibleCallout(this)};h.hasVisibleVerticalOffset=function(){return q.hasVisibleVerticalOffset(this)};
h.clone=function(){return new c({verticalOffset:g.clone(this.verticalOffset),callout:g.clone(this.callout),styleOrigin:g.clone(this.styleOrigin),symbolLayers:g.clone(this.symbolLayers),thumbnail:g.clone(this.thumbnail)})};d.fromSimpleMarkerSymbol=function(a){return new c({symbolLayers:[f.fromSimpleMarkerSymbol(a)]})};d.fromPictureMarkerSymbol=function(a){return new c({symbolLayers:[f.fromPictureMarkerSymbol(a)]})};d.fromCIMSymbol=function(a){if(a.data&&a.data.symbol){const l=a.data.symbol;if("CIMPointSymbol"===
l.type&&l.callout)return new c({symbolLayers:[f.fromCIMSymbol(a)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})}return new c({symbolLayers:[f.fromCIMSymbol(a)]})};d.fromTextSymbol=function(a){return new c({symbolLayers:[u.fromTextSymbol(a)]})};return d}(b);e.__decorate([p.property({type:D["default"],json:{write:!0}})],b.prototype,"verticalOffset",void 0);e.__decorate([p.property(q.calloutProperty)],b.prototype,"callout",void 0);e.__decorate([p.property({type:v,json:{type:n,
origins:{"web-scene":{type:n}}}})],b.prototype,"symbolLayers",void 0);e.__decorate([B.writer("web-scene","symbolLayers")],b.prototype,"writeSymbolLayers",null);e.__decorate([z.enumeration({PointSymbol3D:"point-3d"},{readOnly:!0})],b.prototype,"type",void 0);return b=c=e.__decorate([A.subclass("esri.symbols.PointSymbol3D")],b)});