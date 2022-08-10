// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../chunks/persistableUrlUtils ../core/promiseUtils ./Symbol ../portal/Portal ./support/Thumbnail".split(" "),function(m,n,c,b,p,B,d,q,r,C,D,E,l,t,u,v,w){function x(){return new Promise(function(f,
g){m(["./support/styleUtils"],f,g)})}var k;const y=p.getLogger("esri.symbols.WebStyleSymbol");b=k=function(f){function g(a){a=f.call(this,a)||this;a.styleName=null;a.portal=null;a.styleUrl=null;a.thumbnail=null;a.name=null;a.type="web-style";return a}n._inheritsLoose(g,f);var h=g.prototype;h.read=function(a,e){this.portal=e?e.portal:void 0;f.prototype.read.call(this,a,e)};h.clone=function(){return new k({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})};h.fetchSymbol=
function(a){return this._fetchSymbol("webRef",a)};h.fetchCIMSymbol=function(a){return this._fetchSymbol("cimRef",a)};h._fetchSymbol=async function(a,e){const z=await x();t.throwIfAborted(e);a=z.resolveWebStyleSymbol(this,{portal:this.portal},a,e);a.catch(A=>{y.error("#fetchSymbol()","Failed to create symbol from style",A)});return a};return g}(u);c.__decorate([d.property({json:{write:!1}})],b.prototype,"color",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"styleName",
void 0);c.__decorate([d.property({type:v,json:{write:!1}})],b.prototype,"portal",void 0);c.__decorate([d.property({type:String,json:{read:l.read,write:l.write}})],b.prototype,"styleUrl",void 0);c.__decorate([d.property({type:w["default"],json:{read:!1}})],b.prototype,"thumbnail",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"name",void 0);c.__decorate([q.enumeration({styleSymbolReference:"web-style"},{readOnly:!0})],b.prototype,"type",void 0);return b=k=c.__decorate([r.subclass("esri.symbols.WebStyleSymbol")],
b)});