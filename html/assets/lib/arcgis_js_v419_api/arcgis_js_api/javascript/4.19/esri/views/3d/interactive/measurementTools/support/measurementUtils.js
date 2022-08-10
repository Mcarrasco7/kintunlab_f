// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../../../geometry/SpatialReference ../../../../../geometry/Polygon ../../../../../chunks/vec3f64 ../../../../../chunks/vec3 ../../../support/mathUtils ../../../../../geometry/projection ../../../../../geometry/support/geodesicUtils ../../../../../geometry/geometryEngine".split(" "),function(w,x,n,d,y,m,u,z){var q;(function(h){h.boundingSphere=function(a,b){const c=b.center;d.set(c,0,0,0);for(var e=0;e<a.length;++e)d.add(c,c,a[e]);d.scale(c,c,1/a.length);e=0;for(let f=0;f<a.length;++f)e=
Math.max(e,d.squaredDistance(c,a[f]));b.radius=Math.sqrt(e)};h.bestFitPlane=function(a,b){if(3>a.length)throw Error("need at least 3 points to fit a plane");y.planeFromPoints(a[0],a[1],a[2],b)};h.planePointDistance=function(a,b){return d.dot(a,b)+a[3]};h.segmentLengthEuclidean=function(a,b,c){return m.projectPointToVector(a,k,c)&&m.projectPointToVector(b,l,c)?d.distance(k,l):0};h.segmentLengthGeodesic=function(a,b){if(!m.projectPointToWGS84ComparableLonLat(a,k)||!m.projectPointToWGS84ComparableLonLat(b,
l))return 0;a={distance:null};u.inverseGeodeticSolver(a,[k[0],k[1]],[l[0],l[1]]);return a.distance};h.segmentLengthGeodesicVector=function(a,b,c){const e={distance:null};u.inverseGeodeticSolver(e,[a[0],a[1]],[b[0],b[1]],c);return e.distance};h.triangleAreaEuclidean=function(a,b,c){return.5*Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]))};h.triangleAreaGeodesic=function(a,b,c,e){const f=A;if(!m.projectVectorToWGS84ComparableLonLat(a,e,k)||!m.projectVectorToWGS84ComparableLonLat(b,e,l)||!m.projectVectorToWGS84ComparableLonLat(c,
e,r))return 0;f.setPoint(0,0,k);f.setPoint(0,1,l);f.setPoint(0,2,r);return Math.abs(z.geodesicArea(f,"square-meters"))};h.tangentFrame=function(a,b,c){Math.abs(a[0])>Math.abs(a[1])?d.set(b,0,1,0):d.set(b,1,0,0);d.cross(c,a,b);d.normalize(b,b);d.cross(b,c,a);d.normalize(c,c)};h.fitHemisphere=function(a,b=null,c=!0){const e=(v,p)=>{if(0===p[0]&&0===p[1]&&0===p[2])return!1;for(let t=0;t<v.length;++t)if(-1E-6>d.dot(p,v[t]))return!1;return!0};if(0===a.length)return!1;if(1===a.length)return b&&d.copy(b,
a[0]),!0;d.set(g,0,0,0);for(var f=0;f<a.length;++f)d.add(g,g,a[f]);d.normalize(g,g);if(e(a,g))return b&&d.copy(b,g),!0;if(!c)return!1;for(c=0;c<a.length;++c)for(f=0;f<a.length;++f)if(c!==f&&(d.cross(g,a[c],a[f]),d.normalize(g,g),e(a,g)))return b&&d.copy(b,g),!0;return!1};h.compareSets=function(a,b){if(a===b)return!0;if(a.size!==b.size)return!1;for(let c=0;c<a.size;++c)if(!b.has(a[c]))return!1;return!0}})(q||(q={}));const k=n.create(),l=n.create(),r=n.create(),A=new x({rings:[[k,l,r]],spatialReference:w.WGS84}),
g=n.create();return q});