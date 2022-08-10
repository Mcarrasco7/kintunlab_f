// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../renderers/support/clickToleranceUtils".split(" "),function(f,r,k,g,t,y,z,u,A,v,l,B,C,D,w,x){g=d=>{d=
function(m){function h(){return m.apply(this,arguments)||this}r._inheritsLoose(h,m);h.prototype.fetchPopupFeatures=async function(n,p){var {layer:c}=this;if(!n)return Promise.reject(new l("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:c}));if("tile"!==c.type)return Promise.reject(new l("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:c.type}));const q=this.get("view.scale");c=c.allSublayers.toArray().filter(a=>{const b=0===a.minScale||q<=a.minScale,
e=0===a.maxScale||q>=a.maxScale;return a.popupTemplate&&a.popupEnabled&&a.visible&&b&&e});return w.eachAlways(c.map(async a=>{const b=a.createQuery();var e=t.isSome(p)?p.event:null;e=x.calculateTolerance({renderer:a.renderer,event:e});b.geometry=this.createFetchPopupFeaturesQueryGeometry(n,e);b.outFields=await a.popupTemplate.getRequiredFields();return(await a.queryFeatures(b)).features})).then(a=>[].concat(...a.map(b=>b.value).filter(Boolean)))};return h}(d);k.__decorate([u.property()],d.prototype,
"layer",void 0);return d=k.__decorate([v.subclass("esri.layers.mixins.TileLayerView")],d)};f.TileLayerView=g;f.default=g;Object.defineProperty(f,"__esModule",{value:!0})});