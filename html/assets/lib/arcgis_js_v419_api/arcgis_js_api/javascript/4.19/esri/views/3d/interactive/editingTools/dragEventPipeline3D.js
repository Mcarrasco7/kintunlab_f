// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/mathUtils ../../../../core/screenUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../geometry/projection ../../../../support/elevationInfoUtils ../../support/stack ../../support/geometryUtils ../../webgl-engine/lib/intersectorUtils ../../webgl-engine/lib/Intersector ../../../interactive/dragEventPipeline".split(" "),function(n,k,F,p,q,l,v,w,x,r,y,G,H){function z(a,b){const c=q.create(),e=q.create();let g=!1;return d=>{if("start"===
d.action){var h=p.screenPointObjectToArray(d.screenStart,p.castScreenPointArray(x.sv2d.get()));h=r.ray.fromScreen(a.state.camera,h,A);k.isSome(h)&&(g=r.plane.intersectRay(b,h,c))}if(!g)return null;h=p.screenPointObjectToArray(d.screenEnd,p.castScreenPointArray(x.sv2d.get()));h=r.ray.fromScreen(a.state.camera,h,A);return k.isNone(h)?null:r.plane.intersectRay(b,h,e)?{...d,renderStart:c,renderEnd:e,plane:b,ray:h}:null}}function I(a,b,c,e=null,g=null){let d=null;return h=>{if("start"===h.action&&(d=a.sceneIntersectionHelper.intersectElevationFromScreen(p.createScreenPointArray(h.screenStart.x,
h.screenStart.y),b,c,g),k.isSome(d)&&k.isSome(e)&&!v.projectPoint(d,d,e))||k.isNone(d))return null;const f=a.sceneIntersectionHelper.intersectElevationFromScreen(p.createScreenPointArray(h.screenEnd.x,h.screenEnd.y),b,c,g);return k.isSome(f)?k.isSome(e)&&!v.projectPoint(f,f,e)?null:{...h,mapStart:d,mapEnd:f}:null}}function B(a,b,c,e=null,g=null){b=w.getZForElevationMode(b,a,c);return I(a,c,b,e,g)}function C(a,b,c,e=null,g=null){return B(a,c,w.getGraphicEffectiveElevationInfo(b),e,g)}function J(a,
b){const c=K,e=L,g=r.plane.create();a.renderCoordsHelper.worldUpAtPosition(b,c);a=l.cross(g,c,l.subtract(e,b,a.state.camera.eye));l.cross(a,a,c);return r.plane.fromPositionAndNormal(b,a,g)}function D(a,b){const c=q.create(),e=l.length(b);a.renderCoordsHelper.worldUpAtPosition(b,c);const g=q.create(),d=q.create(),h=f=>{l.subtract(f,f,b);r.vector.projectPoint(c,f,f);"global"===a.viewingMode&&l.length(f)*F.sign(l.dot(c,f))<-e+.001&&l.subtract(f,l.scale(f,c,.001),b);l.add(f,f,b);return f};return f=>{f.renderStart=
h(l.copy(g,f.renderStart));f.renderEnd=h(l.copy(d,f.renderEnd));return f}}function E(a,b){const c=a.renderCoordsHelper;return e=>{const g=c.fromRenderCoords(e.renderStart,b),d=c.fromRenderCoords(e.renderEnd,b);return k.isSome(g)&&k.isSome(d)?{...e,mapStart:g,mapEnd:d}:null}}const K=q.create(),L=q.create(),A=r.ray.create();n.convertToMapCoordinates=E;n.hideManipulatorWhileDragging=function(a){let b=null;return c=>{switch(c.action){case "start":b=a.disableDisplay();break;case "end":case "cancel":k.isSome(b)&&
(b.remove(),b=null)}return c}};n.projectToWorldUp=D;n.screenToMap3D=function(a,b=null){const c=new G.Intersector(a.state.mode);c.options.selectionMode=!0;c.options.store=0;const e=p.createScreenPointArray(),g={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},d=q.create(),h=k.unwrapOr(b,a.spatialReference),f=m=>{a.map.ground&&1>a.map.ground.opacity?g.exclude.add(y.TERRAIN_ID):g.exclude.delete(y.TERRAIN_ID);a.sceneIntersectionHelper.intersectIntersectorScreen(p.screenPointObjectToArray(m,
e),c,g);m=c.results.min;if(m.getIntersectionPoint(d))m="TerrainRenderer"===m.intersector?0:1;else if(c.results.ground.getIntersectionPoint(d))m=0;else return null;return{location:a.renderCoordsHelper.fromRenderCoords(d,h),surfaceType:m}};let u;return m=>{if("start"===m.action){var t=f(m.screenStart);u=k.isSome(t)?t.location:null}if(k.isNone(u))return null;t=f(m.screenEnd);return k.isSome(t)&&k.isSome(t.location)?{...m,mapStart:u,mapEnd:t.location,surfaceType:t.surfaceType}:null}};n.screenToMapXYAtLocation=
B;n.screenToMapXYForGraphic=function(a,b,c,e){a=b.toMap(a.screenStart,{include:[c]});return k.isSome(a)?C(b,c,a,e):null};n.screenToMapXYForGraphicAtLocation=C;n.screenToRenderPlane=z;n.screenToZConstrained=function(a,b,c){let e=null;const g=new H.EventPipeline;g.next(z(a,J(a,b))).next(D(a,b)).next(E(a,c)).next(d=>{d.mapEnd.x=d.mapStart.x;d.mapEnd.y=d.mapStart.y;e=d});return d=>{e=null;g.execute(d);return e}};Object.defineProperty(n,"__esModule",{value:!0})});