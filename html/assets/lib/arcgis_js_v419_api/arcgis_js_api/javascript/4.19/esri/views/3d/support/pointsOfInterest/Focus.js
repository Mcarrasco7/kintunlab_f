// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../geometry/Point ../../../../core/mathUtils ../../../../core/screenUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../geometryUtils ../PropertiesPool ./PointOfInterest".split(" "),
function(d,n,g,C,D,E,h,F,t,G,H,I,u,v,w,p,e,x,y,z){const A=Array;d.Focus=function(q){function l(a){a=q.call(this,a)||this;a._propertiesPool=new y.PropertiesPool({location:u,renderLocation:A},n._assertThisInitialized(a));return a}n._inheritsLoose(l,q);var m=l.prototype;m.destroy=function(){this._propertiesPool.destroy();this._propertiesPool=null};m.calculateScreenHorizontalEdgeOnSurface=function(a){const b=this.state.camera;var f=b.getRenderCenter(w.createRenderScreenPointArray3());f[1]=b.aboveGround?
b.padding[2]:b.fullHeight-b.padding[0];if(this.estimateSurfaceIntersectionAtRenderPoint(f,a))return a;const c=this.renderCoordsHelper.getAltitude(this.centerOnSurface.renderLocation);if(b.unprojectFromRenderScreen(f,k)&&(e.subtract(k,k,b.eye),f=e.normalize(k,k),this.renderCoordsHelper.intersectManifold(x.ray.wrap(b.eye,f),c,a)))return a;e.copy(a,b.eye);this.renderCoordsHelper.setAltitude(c,a);return a};m.update=function(){};m.updateRenderLocation=function(){};n._createClass(l,[{key:"location",get:function(){const a=
this._propertiesPool.get("location");this.renderCoordsHelper.fromRenderCoords(this.renderLocation,a,this.state.spatialReference);return a}},{key:"renderLocation",get:function(){var a=this.centerOnSurface.renderLocation,b=this.renderCoordsHelper;const f=this.calculateScreenHorizontalEdgeOnSurface(B);var c=this.state.camera;b.worldUpAtPosition(a,r);c=Math.max(0,(Math.acos(e.dot(r,c.viewForward))-.5*Math.PI)*(c.aboveGround?1:-1));b=this._propertiesPool.get("renderLocation");Number.isNaN(c)?e.copy(b,
a):(c=1-v.clamp(c/(.5*Math.PI),0,1),e.lerp(b,a,f,c*c*c));return(a=this._get("renderLocation"))&&e.equals(a,b)?a:b}}]);return l}(z.PointOfInterest);g.__decorate([h.property({constructOnly:!0})],d.Focus.prototype,"centerOnSurface",void 0);g.__decorate([h.property({constructOnly:!0})],d.Focus.prototype,"estimateSurfaceIntersectionAtRenderPoint",void 0);g.__decorate([h.property({readOnly:!0})],d.Focus.prototype,"location",null);g.__decorate([h.property({readOnly:!0})],d.Focus.prototype,"renderLocation",
null);g.__decorate([h.property({readOnly:!0,aliasOf:"centerOnSurface.updating"})],d.Focus.prototype,"updating",void 0);d.Focus=g.__decorate([t.subclass("esri.views.3d.support.CenterOnSurface")],d.Focus);const r=p.create(),k=p.create(),B=p.create();d.default=d.Focus;Object.defineProperty(d,"__esModule",{value:!0})});