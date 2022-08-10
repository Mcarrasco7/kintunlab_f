// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../geometry/Point ../../../geometry ../../../chunks/vec3f64 ../../../chunks/vec3 ../../../chunks/quatf64 ../../../chunks/quat ../../../chunks/mat2d ../../../chunks/mat2df64".split(" "),function(h,n,l,p,q,g,k,u,v,y,r){function m(e,d,f=null){return l.isSome(f)?[e,d,f]:[e,d]}function t(e,d,f=null){return l.isSome(f)?{x:e,y:d,z:f}:{x:e,y:d}}q=function(){function e(d){this.spatialReference=d}e.prototype.mapToLocalMultiple=
function(d){return l.filterNones(d.map(f=>this.mapToLocal(f)))};n._createClass(e,[{key:"doUnnormalization",get:function(){return!1}}]);return e}();let w=function(e){function d(b,c,a=null){c=e.call(this,c)||this;c.defaultZ=a;c.transform=r.create();c.transformInv=r.create();c.transform=r.clone(b);y.invert(c.transformInv,c.transform);return c}n._inheritsLoose(d,e);var f=d.prototype;f.makeMapPoint=function(b,c){return m(b,c,this.defaultZ)};f.mapToLocal=function(b){return t(this.transform[0]*b[0]+this.transform[2]*
b[1]+this.transform[4],this.transform[1]*b[0]+this.transform[3]*b[1]+this.transform[5])};f.localToMap=function(b){return m(this.transformInv[0]*b.x+this.transformInv[2]*b.y+this.transformInv[4],this.transformInv[1]*b.x+this.transformInv[3]*b.y+this.transformInv[5],this.defaultZ)};return d}(q),x=function(e){function d(b,c){var a=e.call(this,b.spatialReference)||this;a.view=b;a.defaultZ=null;a.pWS=g.create();a.tangentFrameUpWS=g.create();a.tangentFrameRightWS=g.create();a.tangentFrameForwardWS=g.create();
a.localFrameRightWS=g.create();a.localFrameUpWS=g.create();a.worldToLocalTransform=u.create();a.localToWorldTransform=u.create();a.scale=1;a.scale=b.resolution;a.referenceMapPoint=c;a.defaultZ=c.hasZ?c.z:null;b=b.state.camera.viewRight;a.view.renderCoordsHelper.toRenderCoords(a.referenceMapPoint,a.pWS);a.view.renderCoordsHelper.worldBasisAtPosition(a.pWS,0,a.tangentFrameRightWS);a.view.renderCoordsHelper.worldBasisAtPosition(a.pWS,1,a.tangentFrameUpWS);a.view.renderCoordsHelper.worldBasisAtPosition(a.pWS,
2,a.tangentFrameForwardWS);c=g.create();k.scale(c,a.tangentFrameForwardWS,k.dot(b,a.tangentFrameForwardWS));k.subtract(a.localFrameRightWS,b,c);k.normalize(a.localFrameRightWS,a.localFrameRightWS);k.cross(a.localFrameUpWS,a.tangentFrameForwardWS,a.localFrameRightWS);v.rotationTo(a.worldToLocalTransform,a.localFrameRightWS,a.tangentFrameRightWS);v.invert(a.localToWorldTransform,a.worldToLocalTransform);return a}n._inheritsLoose(d,e);var f=d.prototype;f.makeMapPoint=function(b,c){return m(b,c,this.defaultZ)};
f.mapToLocal=function(b){const c=g.create();this.view.renderCoordsHelper.toRenderCoords(new p({x:b[0],y:b[1],spatialReference:this.spatialReference}),c);k.transformQuat(c,c,this.worldToLocalTransform);b=this.view.renderCoordsHelper.fromRenderCoords(c,this.view.spatialReference);return l.isSome(b)?t(b.x/this.scale,b.y/this.scale):null};f.localToMap=function(b){const c=g.create();this.view.renderCoordsHelper.toRenderCoords(new p({x:b.x*this.scale,y:b.y*this.scale,spatialReference:this.spatialReference}),
c);k.transformQuat(c,c,this.localToWorldTransform);b=this.view.renderCoordsHelper.fromRenderCoords(c,this.view.spatialReference);return l.isSome(b)?m(b.x,b.y,this.defaultZ):null};n._createClass(d,[{key:"doUnnormalization",get:function(){return"global"===this.view.viewingMode}}]);return d}(q);h.AffineCoordinateSystem=w;h.SceneViewCoordinateSystem=x;h.SurfaceCoordinateSystem=q;h.createViewAlignedCoordinateSystem=function(e,d){return"2d"===e.type?new w(e.state.transform,e.spatialReference,2<d.length?
d[2]:null):"3d"===e.type?(d=2<d.length?new p({x:d[0],y:d[1],z:d[2],spatialReference:e.spatialReference}):new p({x:d[0],y:d[1],spatialReference:e.spatialReference}),new x(e,d)):null};h.makeMapPoint=m;h.makeSurfacePoint=t;Object.defineProperty(h,"__esModule",{value:!0})});