// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/maybe ../../../core/promiseUtils ../../../geometry/SpatialReference ../../../geometry/Polyline ../../../core/mathUtils ../../../chunks/vec3 ../../../core/unitUtils ../../../geometry/projection ../../../geometry/support/geodesicUtils ../../../chunks/vec2 ./ProfileGenerationError".split(" "),function(O,r,l,x,D,y,P,Q,E,u,t,F,G){function z(a,b,c){if(l.isNone(b))return H(a);const e=a.spatialReference,f=b.mode;b=l.unwrapOr(b.offset,0);let d=null;switch(c.type){case "2d":d=
R(a,f,b);break;case "3d":d=S(a,f,b,c)}return l.isNone(d)?H(a):new y({hasZ:!0,hasM:!1,spatialReference:e,paths:I(a.paths,d)})}function R({hasZ:a},b,c){switch(b){case "absolute-height":return a?([e,f,d])=>[e,f,d+c]:([e,f])=>[e,f,c];default:return null}}function S({spatialReference:a,hasZ:b},c,e,{elevationProvider:f}){switch(c){case "on-the-ground":return([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"ground"),0)];case "absolute-height":return b?([d,g,h])=>[d,g,h+e]:([d,g])=>[d,g,e];case "relative-to-ground":return b?
([d,g,h])=>[d,g,h+l.unwrapOr(f.getElevation(d,g,h,a,"ground"),0)+e]:([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"ground"),0)+e];case "relative-to-scene":return b?([d,g,h])=>[d,g,h+l.unwrapOr(f.getElevation(d,g,h,a,"scene"),0)+e]:([d,g])=>[d,g,l.unwrapOr(f.getElevation(d,g,0,a,"scene"),0)+e];default:return null}}function H(a){return a.hasZ?new y({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:I(a.paths,([b,c])=>[b,c])}):a}function I(a,b){const c=a.length,e=Array(c);for(let f=0;f<c;++f){const d=
a[f],g=d.length,h=Array(d.length);e[f]=h;for(let k=0;k<g;++k)h[k]=b(d[k])}return e}function J(a){return l.isSome(a)&&"polyline"===a.type}function K(a,b,c,e,f){const {spatialReference:d,hasZ:g}=a,h={from:null,to:null,distance:0,azimuth:0,reverseAzimuth:0,spatialReference:d,metersPerSR:E.getMetersPerUnitForSR(d)},k=Array(a.paths.length),m=Array(a.paths.length);let n=0;for(let p=0;p<a.paths.length;++p){const A=a.paths[p],B=[],C=[];var q=0;for(let v=1;v<A.length;++v){const L=A[v],w=e(h,A[v-1],L);for(;q<
w.distance;q+=b)B.push(f(w,q)),C.push((n+q)*c);q-=w.distance;n+=w.distance;B.push(L);C.push(n*c)}k[p]=B;m[p]=C}return{densifiedPath:new y({spatialReference:d,hasZ:g,paths:k}),distances:m}}function T(a,b,c){const {hasZ:e}=a;return K(a,b,c,U,e?V:W)}function X(a,b,c){const {hasZ:e}=a;return K(a,b,c,Y,e?Z:aa)}function Y(a,b,c){a.distance=0;t.inverseGeodeticSolver(a,b,c,a.spatialReference);a.from=b;a.to=c;return a}function U(a,b,c){a.from=b;a.to=c;a.distance=F.distance(c,b)*a.metersPerSR;return a}function aa({from:a,
azimuth:b,spatialReference:c},e){return t.directGeodeticSolver([0,0],a,b,e,c)}function Z({from:a,to:b,azimuth:c,distance:e,spatialReference:f},d){b=[0,0,P.lerp(a[2],b[2],d/e)];t.directGeodeticSolver(b,a,c,d,f);return b}function W({from:a,to:b,distance:c},e){return F.lerp([0,0],a,b,e/c)}function V({from:a,to:b,distance:c},e){return Q.lerp([0,0,0],a,b,e/c)}function ba(a){return t.isSupported(a.spatialReference)?a:u.project(a,D.WGS84)}function M(a){return a.paths.reduce((b,c)=>b+c.length,0)}function N(a,
b,c){return M(a)+Math.floor(b/c)+Math.max(0,a.paths.reduce(e=>1+e,0)-1)}r.countPoints=M;r.densifyPath=async function(a,b,c,e,f,d,g){var h=a.spatialReference;const k=h.isGeographic||h.isWebMercator;var m=await new Promise(function(q,p){O(["../../../geometry/geometryEngineAsync"],q,p)});x.throwIfAborted(g);let n=0;k||(n=await m.planarLength(a,"meters"),x.throwIfAborted(g));m=1/E.getMetersPerUnitForSR(e);if(k||n>=f.geodesicDistanceThreshold){await u.initializeProjection([{source:h,dest:e},{source:h,
dest:D.WGS84}],g);g=ba(a);h=t.geodesicLengths([g],"meters")[0];f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(N(a,h,f)>d)throw new G.ProfileGenerationError("too-complex");g=z(g,b,c);({densifiedPath:a,distances:b}=X(g,f,m))}else{await u.initializeProjection([{source:h,dest:e}],g);h=n;f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(N(a,h,f)>d)throw new G.ProfileGenerationError("too-complex");a=z(a,b,c);({densifiedPath:a,distances:b}=T(a,f,m));x.throwIfAborted(g)}a=u.project(a,
e);return{densifiedPath:a,pathLength:h*m,distances:b}};r.isPolyline=J;r.isValidInputPath=function(a){return J(a)&&0<a.paths.length&&a.paths.every(b=>2<=b.length)};r.toAbsoluteHeightElevation=z;Object.defineProperty(r,"__esModule",{value:!0})});