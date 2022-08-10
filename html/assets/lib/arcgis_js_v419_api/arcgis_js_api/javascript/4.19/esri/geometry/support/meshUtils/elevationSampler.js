// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../chunks/vec3f64 ../../../core/workers/workers ../../../layers/support/ElevationSampler ../../../chunks/triangle ../../../views/3d/support/geometryUtils ./ElevationSamplerWorker".split(" "),function(m,r,n,t,u,v,w,p,x){function y(){++k;e&&(clearTimeout(e),e=0);return g?g:g=u.open("ElevationSamplerWorker").catch(()=>null)}function z(b){--k;n.isSome(b)&&0===k&&(e=setTimeout(()=>{b.close();g=null;e=0},1E4))}let A=function(b){function f(a,
c,h){var d=b.call(this)||this;d.rindex=c;d.demResolution={min:0,max:0};d.spatialReference=a.spatialReference.clone();d.extent=a.extent.clone();d.noDataValue=n.isSome(h)&&h.noDataValue||0;return d}r._inheritsLoose(f,b);f.prototype.elevationAt=function(a){a=this.projectIfRequired(a,this.spatialReference);let c=Number.NEGATIVE_INFINITY;p.ray.fromValues([a.x,a.y,0],[0,0,-1],q);this.rindex.search({minX:a.x,maxX:a.x,minY:a.y,maxY:a.y},h=>{w.intersectRay(h,q,l)&&l[2]>c&&(c=l[2])});return c===Number.NEGATIVE_INFINITY?
this.noDataValue:c};return f}(v.ElevationSamplerBase);const B=new x.ElevationSamplerWorker;let k=0,g=null,e=0;const q=p.ray.fromValues([0,0,0],[0,0,-1]),l=t.create();m.create=async function(b,f){const a=await y(),c=await B.createIndex(b,a);z(a);return new A(b,c,f)};Object.defineProperty(m,"__esModule",{value:!0})});