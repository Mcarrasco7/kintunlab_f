// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/Collection ./FillSymbol3DLayer ./Symbol3D".split(" "),function(k,c,a,d,t,u,l,m,n,v,w,x,p,q,r){var e;const g=p.ofType({base:null,key:"type",typeMap:{fill:q}});
a=e=function(h){function f(b){b=h.call(this,b)||this;b.symbolLayers=new g;b.type="mesh-3d";return b}k._inheritsLoose(f,h);f.prototype.clone=function(){return new e({styleOrigin:d.clone(this.styleOrigin),symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail)})};return f}(r);c.__decorate([l.property({type:g})],a.prototype,"symbolLayers",void 0);c.__decorate([m.enumeration({MeshSymbol3D:"mesh-3d"},{readOnly:!0})],a.prototype,"type",void 0);return a=e=c.__decorate([n.subclass("esri.symbols.MeshSymbol3D")],
a)});