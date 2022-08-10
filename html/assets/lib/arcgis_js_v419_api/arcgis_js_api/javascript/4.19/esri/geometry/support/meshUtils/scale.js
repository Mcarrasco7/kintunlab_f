// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../chunks/vec3f64 ../../../chunks/vec3 ../../projectionEllipsoid ../../projection ./projection".split(" "),function(p,u,m,v,w,n,g){function q(b,k,c=m.ZEROS){if(b)for(let d=0;d<b.length;d+=3){for(var a=0;3>a;a++)l[a]=b[d+a]-c[a];v.scale(l,l,k);for(a=0;3>a;a++)b[d+a]=l[a]+c[a]}}const x=u.getLogger("esri.geometry.support.meshUtils.scale"),l=m.create(),e=m.create();p.scale=function(b,k,c){if(b.vertexAttributes&&b.vertexAttributes.position){var a=b.spatialReference,
d=c&&c.origin||b.extent.center;if(a.isWGS84||a.isWebMercator&&(!c||!1!==c.geographic)){{c=b.spatialReference;a=w.getSphericalPCPF(c);n.projectPointToVector(d,e,a)||n.projectPointToVector(b.extent.center,e,a);d=b.vertexAttributes.position;a=b.vertexAttributes.normal;const h=b.vertexAttributes.tangent,f=new Float64Array(d.length),r=new Float32Array(a?a.length:0),t=new Float32Array(h?h.length:0);g.projectToECEF(d,c,f);a&&g.projectNormalToECEF(a,d,f,c,r);h&&g.projectTangentToECEF(h,d,f,c,t);q(f,k,e);
g.projectFromECEF(f,d,c);a&&g.projectNormalFromECEF(r,d,f,c,a);h&&g.projectTangentFromECEF(t,d,f,c,h);b.vertexAttributesChanged()}}else n.projectPointToVector(d,e,b.spatialReference)||(c=b.extent.center,e[0]=c.x,e[1]=c.y,e[2]=c.z,x.error(`Failed to project specified origin (wkid:${d.spatialReference.wkid}) to mesh spatial reference (wkid:${b.spatialReference.wkid}). Using mesh extent.center instead`)),q(b.vertexAttributes.position,k,e),b.vertexAttributesChanged()}};Object.defineProperty(p,"__esModule",
{value:!0})});