// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/compilerUtils ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../core/Collection ../../core/Handles ../../layers/Layer ../../core/watchUtils ../../views/layers/support/ClipRect".split(" "),
function(v,d,c,w,D,E,f,F,x,G,H,I,y,z,A,B,u,p){function C(q,g){g=10**g;return Math.round(q*g)/g}const r=z.ofType(B),t={left:0,right:0,top:0,bottom:0};c=function(q){function g(a){a=q.call(this,a)||this;a._handles=new A;a._leadingClips=new Map;a._trailingClips=new Map;a.direction="horizontal";a.leadingLayers=new r;a.max=100;a.min=0;a.precision=4;a.step=.5;a.stepMultiplier=10;a.trailingLayers=new r;a.view=null;return a}v._inheritsLoose(g,q);var e=g.prototype;e.initialize=function(){this._handles.add([u.init(this,
["view","view.ready","position","direction"],()=>this._clipLayers()),u.on(this,"leadingLayers","change",()=>this._clipLeadingLayers()),u.on(this,"trailingLayers","change",()=>this._clipTrailingLayers())])};e.destroy=function(){this._removeExistingClips();this._handles.destroy();this._handles=null};e._clipLayers=function(){this._clipLeadingLayers();this._clipTrailingLayers()};e._clipLeadingLayers=function(){this._removeClips("leading");const {leadingLayers:a}=this;a.forEach(b=>this._clipLayer({layer:b,
type:"leading"}))};e._clipTrailingLayers=function(){this._removeClips("trailing");const {trailingLayers:a}=this;a.forEach(b=>this._clipLayer({layer:b,type:"trailing"}))};e._getLayerView=async function(a){const {view:b}=this;if(!a||!b)return null;a=await w.typeCast(b)().whenLayerView(a);return"clips"in a?a:null};e._getVerticalClipRect=function(a){const {position:b}=this;return"leading"===a?new p({...t,bottom:`${100-b}%`}):"trailing"===a?new p({...t,top:`${b}%`}):null};e._getHorizontalClipRect=function(a){const {position:b}=
this;return"leading"===a?new p({...t,right:`${100-b}%`}):"trailing"===a?new p({...t,left:`${b}%`}):null};e._getClipRect=function(a){const {direction:b}=this;return"vertical"===b?this._getVerticalClipRect(a):"horizontal"===b?this._getHorizontalClipRect(a):null};e._clipLayer=async function(a){const {_leadingClips:b,_trailingClips:l}=this,{layer:m,type:h}=a;a="trailing"===h?l:"leading"===h?b:null;const k=await this._getLayerView(m);if(k&&"clips"in k&&a&&k.hasOwnProperty("clips")){var n=a.get(k);n&&k.clips.remove(n);
if(n=this._getClipRect(h))a.set(k,n),k.clips.add(n)}};e._removeClips=function(a){const {_leadingClips:b,_trailingClips:l}=this;if(a="trailing"===a?l:"leading"===a?b:null)a.forEach((m,h)=>{h&&h.hasOwnProperty("clips")&&h.clips.remove(m)}),a.clear()};e._removeExistingClips=function(){this._removeClips("leading");this._removeClips("trailing")};v._createClass(g,[{key:"position",get:function(){return 25},set:function(a){const {precision:b,min:l,max:m}=this;this._set("position",C(Math.max(Math.min(a,m),
l),b))}},{key:"state",get:function(){const {view:a}=this;return a&&a.ready?"ready":"disabled"}}]);return g}(y);d.__decorate([f.property()],c.prototype,"direction",void 0);d.__decorate([f.property({type:r})],c.prototype,"leadingLayers",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"max",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"min",void 0);d.__decorate([f.property()],c.prototype,"position",null);d.__decorate([f.property()],c.prototype,"precision",void 0);d.__decorate([f.property({readOnly:!0})],
c.prototype,"state",null);d.__decorate([f.property()],c.prototype,"step",void 0);d.__decorate([f.property()],c.prototype,"stepMultiplier",void 0);d.__decorate([f.property({type:r})],c.prototype,"trailingLayers",void 0);d.__decorate([f.property()],c.prototype,"view",void 0);return c=d.__decorate([x.subclass("esri.widgets.Swipe.SwipeViewModel")],c)});