// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Accessor ../../../core/Collection ./snappingUtils ./LineSnapper ./ParallelLineSnapper ./RightAngleSnapper ./RightAngleTriangleSnapper".split(" "),
function(b,h,c,x,y,z,e,A,m,B,C,D,n,p,q,r,t,u,v){b.SelfSnappingEngine=function(k){function d(a){a=k.call(this,a)||this;a.updating=!1;a._snappers=new p;return a}h._inheritsLoose(d,k);var l=d.prototype;l.initialize=function(){this._snappers.push(new t.ParallelLineSnapper(this.view,this.options),new r.LineSnapper(this.view,this.options),new u.RightAngleSnapper(this.view,this.options),new v.RightAngleTriangleSnapper(this.view,this.options))};l.fetchCandidates=async function(a,f){if(!this.options.effectiveSelfEnabled)return[];
const g=[];for(const w of this._snappers.items)g.push(...w.snap(a,f));q.sortCandidatesInPlace(a,g);return g};h._createClass(d,[{key:"options",set:function(a){this._set("options",a);for(const f of this._snappers)f.options=a}}]);return d}(n);c.__decorate([e.property({readOnly:!0})],b.SelfSnappingEngine.prototype,"updating",void 0);c.__decorate([e.property({constructOnly:!0})],b.SelfSnappingEngine.prototype,"view",void 0);c.__decorate([e.property()],b.SelfSnappingEngine.prototype,"options",null);b.SelfSnappingEngine=
c.__decorate([m.subclass("esri.views.interactive.snapping.SelfSnappingEngine")],b.SelfSnappingEngine);Object.defineProperty(b,"__esModule",{value:!0})});