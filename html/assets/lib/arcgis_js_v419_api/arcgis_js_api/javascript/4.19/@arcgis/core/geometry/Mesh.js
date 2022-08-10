/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{clone as e}from"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import{L as n,b as r}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{throwIfAborted as s}from"../core/promiseUtils.js";import"../chunks/Message.js";import i from"../core/Error.js";import"../chunks/ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"./SpatialReference.js";import"../request.js";import"../chunks/assets.js";import c from"./Geometry.js";import l from"./Point.js";import"../chunks/Ellipsoid.js";import"./support/webMercatorUtils.js";import p from"./Extent.js";import"../chunks/mathUtils2.js";import{c as u,Z as f,f as m}from"../chunks/vec3f64.js";import"../chunks/common.js";import{t as h,n as g,g as x,i as y,b as A}from"../chunks/vec3.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"./Multipoint.js";import d from"./Polygon.js";import"../chunks/extentUtils.js";import"./Polyline.js";import{f as v,h as w,i as j,c as b}from"../chunks/unitUtils.js";import{a as k,m as F,b as M,s as R,i as P,r as E}from"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"./support/GeographicTransformationStep.js";import"./support/GeographicTransformation.js";import{projectPointToVector as T,computeLinearTransformation as S}from"./projection.js";import{c as U}from"../chunks/vec4f64.js";import"../chunks/screenshotUtils.js";import"./support/MeshTexture.js";import"./support/MeshMaterial.js";import"./support/MeshMaterialMetallicRoughness.js";import z,{M as C}from"./support/MeshComponent.js";import"../chunks/earcut.js";import"../chunks/deduplicate.js";import{t as O}from"../chunks/triangulationUtils.js";import{c as G,a as L,b as W}from"../chunks/quatf64.js";import{f as $,n as B}from"../chunks/mat3.js";import{B as N,a as _}from"../chunks/BufferView.js";import"../chunks/vec2.js";import"../chunks/vec4.js";import{p as D,a as I,t as V,b as q,c as J,d as Z,e as Y}from"../chunks/projection.js";import{t as H,a as K}from"../chunks/vec32.js";import{s as Q,m as X,g as tt}from"../chunks/quat.js";const et=n.getLogger("esri.geometry.support.meshUtils.centerAt");function nt(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference,o=r.isWGS84||r.isWebMercator&&(!n||!1!==n.geographic),s=n&&n.origin||t.extent.center;o?function(t,e,n){const r=t.spatialReference,o=v(r),s=ot,i=rt;if(!T(e,i,o))return void et.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to ECEF`);T(n,s,o)||T(t.extent.center,s,o);const a=t.vertexAttributes.position,c=t.vertexAttributes.normal,l=new Float64Array(a.length),p=new Float32Array(c?c.length:0);D(a,r,l),c&&I(c,a,l,r,p);S(o,s,st,o),S(o,i,it,o),k(st,st),F(it,it,st),V(l,it),k(it,it),M(it,it),c&&V(p,it,!0);q(l,a,r),c&&J(p,a,l,r,c);t.vertexAttributesChanged()}(t,e,s):function(t,e,n){const r=ot,o=rt;if(!T(e,o,t.spatialReference))return void et.error(`Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`);if(!T(n,r,t.spatialReference)){const e=t.extent.center;r[0]=e.x,r[1]=e.y,r[2]=e.z,et.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}). Using mesh extent.center instead`)}(function(t,e,n){if(!t)return;for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=e[o]-n[o]})(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}(t,e,s)}const rt=u(),ot=u(),st=G(),it=G(),at=n.getLogger("esri.geometry.support.triangleMeshMerge");function ct(t,e){if(0===t.length)return at.error("merge()","Must specify one more more geometries to merge"),null;const n=t[0].spatialReference;if(t.some((t=>!t.spatialReference.equals(n))))return at.error("merge()","Geometries must all be in the same spatial reference"),null;const r=function(t){let e=0,n=0,r=0,o=0,s=0;const i=function(t){let e=!1,n=!1,r=!1,o=!1;for(const s of t){const t=s.vertexAttributes;if(t&&t.position&&(t.uv&&(e=!0),t.normal&&(n=!0),t.tangent&&(o=!0),t.color&&(r=!0),n&&e&&r&&o))break}return{normal:n,uv:e,color:r,tangent:o}}(t);for(const a of t){const t=a.vertexAttributes;t&&t.position&&(e+=t.position.length,i.uv&&(n+=t.position.length/ft.position*ft.uv),i.normal&&(r+=t.position.length/ft.position*ft.normal),i.color&&(o+=t.position.length/ft.position*ft.color),i.tangent&&(s+=t.position.length/ft.position*ft.tangent))}return{position:new Float64Array(e),uv:n?new Float32Array(n):null,normal:r?new Float32Array(r):null,tangent:s?new Float32Array(s):null,color:o?new Uint8Array(o):null}}(t),o=[],s={position:0,uv:0,normal:0,tangent:0,color:0},i=new Map,a=new Map;for(const n of t){const t=n.vertexAttributes;if(e&&e.reuseMaterials&&n.components)for(const t of n.components)t.material&&i.set(t.material,t.material);pt(n,s,i,a,o),ut("position",t,r,s,0),ut("normal",t,r,s,0),ut("tangent",t,r,s,0),ut("uv",t,r,s,0),ut("color",t,r,s,255)}return{vertexAttributes:r,components:o,spatialReference:n}}function lt(t,e,n){(function(t,e){return e.normal>0&&!t.vertexAttributes.normal})(t,e)&&"source"===n.shading&&(n.shading="flat")}function pt(t,e,n,r,o){if(t.components)for(const s of t.components){const i=s.cloneWithDeduplication(n,r);for(let t=0;t<i.faces.length;t++)i.faces[t]+=e.position/3;lt(t,e,i),o.push(i)}else if(t.vertexAttributes&&t.vertexAttributes.position){const n=t.vertexAttributes.position.length/3,r=new Uint32Array(n);for(let t=0;t<n;t++)r[t]=t+e.position;const s=new z({faces:r});lt(t,e,s),o.push(s)}}function ut(t,e,n,r,o){if(!e)return;const s=e.position;if(!s)return;const i=e[t];if(i)!function(t,e,n,r,o){for(let s=0;s<o;s++)n[r++]=t[e++]}(i,0,n[t],r[t],i.length),r[t]+=i.length;else{const e=n[t];let i=r[t];const a=ft[t];if(e){for(let t=0;t<s.length;t+=3)for(let t=0;t<a;t++)e[i++]=o;r[t]=i}}}const ft={position:3,normal:3,tangent:4,uv:2,color:4};function mt(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;r.isWGS84||r.isWebMercator&&(!n||!1!==n.geographic)?function(t,e){const n=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(r.length),a=new Float32Array(o?o.length:0),c=new Float32Array(s?s.length:0),l=t.extent.center,p=gt;S(n,[l.x,l.y,l.z],xt,v(n)),$(yt,xt),h(p,e,yt),D(r,n,i),o&&I(o,r,i,n,a);s&&Z(s,r,i,n,c);ht(i,p),q(i,r,n),o&&J(a,r,i,n,o);s&&Y(c,r,i,n,s);t.vertexAttributesChanged()}(t,e):function(t,e){ht(t.vertexAttributes.position,e),t.vertexAttributesChanged()}(t,e)}function ht(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const gt=u(),xt=G(),yt=L();function At(t,e,n){return wt(e,n)?function(t,e,n){const r=e.spatialReference,o=vt(e,n,bt),s=new Float64Array(t.position.length),i=function(t,e,n,r){H(N.fromTypedArray(r),N.fromTypedArray(t),e);const o=new Float64Array(t.length);return q(r,o,n)}(t.position,o,r,s),a=B(Ft,o),c=function(t,e,n,r,o){if(!n)return null;const s=new Float32Array(n.length);return K(_.fromTypedArray(s),_.fromTypedArray(n),r),J(s,t,e,o,s),s}(i,s,t.normal,a,r),l=function(t,e,n,r,o){if(!n)return null;const s=new Float32Array(n.length);K(_.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT),_.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),r);for(let t=3;t<s.length;t+=4)s[t]=n[t];return Y(s,t,e,o,s),s}(i,s,t.tangent,a,r);return{position:i,normal:c,tangent:l}}(t,e,n):function(t,e,n){const r=new Float64Array(t.position.length),o=t.position,s=e.x,i=e.y,a=e.z||0,{horizontal:c,vertical:l}=jt(n?n.unit:null,e.spatialReference);for(let t=0;t<o.length;t+=3)r[t+0]=o[t+0]*c+s,r[t+1]=o[t+1]*c+i,r[t+2]=o[t+2]*l+a;return{position:r,normal:t.normal,tangent:t.tangent}}(t,e,n)}function dt(t,e,n){return wt(e,n)?function(t,e,n){const r=e.spatialReference;vt(e,n,bt);const o=k(kt,bt),s=new Float64Array(t.position.length),i=function(t,e,n,r){const o=D(t,e,r),s=N.fromTypedArray(o),i=new Float64Array(o.length),a=N.fromTypedArray(i);return H(a,s,n),i}(t.position,r,o,s),a=B(Ft,o),c=function(t,e,n,r,o){if(!t)return null;const s=I(t,e,n,r,new Float32Array(t.length)),i=_.fromTypedArray(s);return K(i,i,o),s}(t.normal,t.position,s,r,a),l=function(t,e,n,r,o){if(!t)return null;const s=Z(t,e,n,r,new Float32Array(t.length)),i=_.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT);return K(i,i,o),s}(t.tangent,t.position,s,r,a);return{position:i,normal:c,tangent:l}}(t,e,n):function(t,e,n){const r=new Float64Array(t.position.length),o=t.position,s=e.x,i=e.y,a=e.z||0,{horizontal:c,vertical:l}=jt(n?n.unit:null,e.spatialReference);for(let t=0;t<o.length;t+=3)r[t+0]=(o[t+0]-s)/c,r[t+1]=(o[t+1]-i)/c,r[t+2]=(o[t+2]-a)/l;return{position:r,normal:t.normal,tangent:t.tangent}}(t,e,n)}function vt(t,e,n){S(t.spatialReference,[t.x,t.y,t.z||0],n,v(t.spatialReference));const{horizontal:r,vertical:o}=jt(e?e.unit:null,t.spatialReference);return R(n,n,[r,r,o]),n}function wt(t,e){const n=t.spatialReference;return n.isWGS84||n.isWebMercator&&(!e||!1!==e.geographic)}function jt(t,e){if(r(t))return Mt;const n=e.isWGS84?1:w(e),o=e.isWGS84?1:j(e),s=b(1,t,"meters");return{horizontal:s*n,vertical:s*o}}const bt=G(),kt=G(),Ft=L(),Mt={horizontal:1,vertical:1};const Rt={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function Pt(t,e,n){!function(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}(t),function(t,e){if(null==e)return;const n="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];Ut[0]=n[0],Ut[4]=n[1],Ut[8]=n[2];for(let e=0;e<t.position.length;e+=3){for(let n=0;n<3;n++)St[n]=t.position[e+n];h(St,St,Ut);for(let n=0;n<3;n++)t.position[e+n]=St[n]}if(n[0]!==n[1]||n[1]!==n[2]){Ut[0]=1/n[0],Ut[4]=1/n[1],Ut[8]=1/n[2];for(let e=0;e<t.normal.length;e+=3){for(let n=0;n<3;n++)St[n]=t.normal[e+n];h(St,St,Ut),g(St,St);for(let n=0;n<3;n++)t.normal[e+n]=St[n]}}}(t,n&&n.size);const r=At(t,e,n);return{vertexAttributes:{position:r.position,normal:r.normal,uv:t.uv},components:[{faces:t.faces,material:n&&n.material||null}],spatialReference:e.spatialReference}}const Et={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},Tt={south:0,east:1,north:2,west:3,up:4,down:5},St=u(),Ut=L(),zt=n.getLogger("esri.geometry.support.meshUtils.rotate");function Ct(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position||0===e[3])return;const r=t.spatialReference,o=r.isWGS84||r.isWebMercator&&(!n||!1!==n.geographic),s=n&&n.origin||t.extent.center;o?function(t,e,n){const r=t.spatialReference,o=v(r),s=It;T(n,s,o)||T(t.extent.center,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),p=new Float32Array(a?a.length:0),u=new Float32Array(c?c.length:0);S(o,s,_t,o),$(Dt,_t);const f=$t;h($t,e,Dt),f[3]=e[3],D(i,r,l),a&&I(a,i,l,r,p);c&&Z(c,i,l,r,u);Lt(l,f,3,s),q(l,i,r),a&&(Lt(p,f,3),J(p,i,l,r,a));c&&(Lt(u,f,4),Y(u,i,l,r,c));t.vertexAttributesChanged()}(t,e,s):function(t,e,n){const r=It;if(!T(n,r,t.spatialReference)){const e=t.extent.center;r[0]=e.x,r[1]=e.y,r[2]=e.z,zt.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}). Using mesh extent.center instead`)}Lt(t.vertexAttributes.position,e,3,r),Lt(t.vertexAttributes.normal,e,3),Lt(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}(t,e,s)}function Ot(t,e,n){return x(n,t),n[3]=e,n}function Gt(t,e,n){return Q(Bt,t,t[3]),Q(Nt,e,e[3]),X(Bt,Nt,Bt),n[3]=tt(n,Bt),n}function Lt(t,e,n,r=f){if(t){P(_t),E(_t,_t,e[3],e);for(let e=0;e<t.length;e+=n){for(let n=0;n<3;n++)Wt[n]=t[e+n]-r[n];y(Wt,Wt,_t);for(let n=0;n<3;n++)t[e+n]=Wt[n]+r[n]}}}const Wt=u(),$t=U(),Bt=W(),Nt=W(),_t=G(),Dt=L(),It=u(),Vt=n.getLogger("esri.geometry.support.meshUtils.scale");function qt(t,e,n){if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference,o=r.isWGS84||r.isWebMercator&&(!n||!1!==n.geographic),s=n&&n.origin||t.extent.center;o?function(t,e,n){const r=t.spatialReference,o=v(r),s=Yt;T(n,s,o)||T(t.extent.center,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,l=new Float64Array(i.length),p=new Float32Array(a?a.length:0),u=new Float32Array(c?c.length:0);D(i,r,l),a&&I(a,i,l,r,p);c&&Z(c,i,l,r,u);Jt(l,e,s),q(l,i,r),a&&J(p,i,l,r,a);c&&Y(u,i,l,r,c);t.vertexAttributesChanged()}(t,e,s):function(t,e,n){const r=Yt;if(!T(n,r,t.spatialReference)){const e=t.extent.center;r[0]=e.x,r[1]=e.y,r[2]=e.z,Vt.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}). Using mesh extent.center instead`)}Jt(t.vertexAttributes.position,e,r),t.vertexAttributesChanged()}(t,e,s)}function Jt(t,e,n=f){if(t)for(let r=0;r<t.length;r+=3){for(let e=0;e<3;e++)Zt[e]=t[r+e]-n[e];A(Zt,Zt,e);for(let e=0;e<3;e++)t[r+e]=Zt[e]+n[e]}}const Zt=u(),Yt=u();var Ht;const Kt=n.getLogger("esri.geometry.Mesh");let Qt=Ht=class extends c{constructor(t){super(t),this.components=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new C,this.type="mesh"}get cache(){return this.commitProperty("components"),this.commitProperty("vertexAttributes"),this.commitProperty("hasM"),this.commitProperty("hasZ"),{}}get extent(){const t=this.spatialReference,e=this.vertexAttributes&&this.vertexAttributes.position;if(!e||0===e.length||this.components&&0===this.components.length)return new p({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});const n={xmin:1/0,xmax:-1/0,ymin:1/0,ymax:-1/0,zmin:1/0,zmax:-1/0,spatialReference:t};if(!this.components)return new p(this.extendExtent(n,e,null));for(const t of this.components){if(!t.faces){this.extendExtent(n,e,null);break}this.extendExtent(n,e,t.faces)}return new p(n)}addComponent(t){this.components||(this.components=[]),this.components.push(z.from(t)),this.notifyChange("components")}removeComponent(t){if(this.components){const e=this.components.indexOf(t);if(-1!==e)return this.components.splice(e,1),void this.notifyChange("components")}Kt.error("removeComponent()","Provided component is not part of the list of components")}rotate(t,e,n,r){return Ot(te.x,Xt(t),ne),Ot(te.y,Xt(e),re),Ot(te.z,Xt(n),oe),Gt(ne,re,ne),Gt(ne,oe,ne),Ct(this,ne,r),this}offset(t,e,n,r){return ee[0]=t,ee[1]=e,ee[2]=n,mt(this,ee,r),this}scale(t,e){return qt(this,t,e),this}centerAt(t,e){return nt(this,t,e),this}clone(){const t=this.components?new Map:null,n=this.components?new Map:null,r=this.components?this.components.map((e=>e.cloneWithDeduplication(t,n))):null;return new Ht({components:r,spatialReference:this.spatialReference,vertexAttributes:e(this.vertexAttributes)})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}toJSON(t){return this.write(null,t)}forEachVertex(t,e,n){if(e)for(let r=0;r<e.length;r++){const o=3*e[r];n(t[o+0],t[o+1],t[o+2])}else for(let e=0;e<t.length;e+=3)n(t[e+0],t[e+1],t[e+2])}extendExtent(t,e,n){return this.forEachVertex(e,n,((e,n,r)=>{t.xmin=Math.min(t.xmin,e),t.xmax=Math.max(t.xmax,e),t.ymin=Math.min(t.ymin,n),t.ymax=Math.max(t.ymax,n),t.zmin=Math.min(t.zmin,r),t.zmax=Math.max(t.zmax,r)})),t}async toBinaryGLTF(t){const{toBinaryGLTF:e}=await import("../chunks/gltfexport.js");return e(this,t)}static createBox(t,e){if(!(t instanceof l))return Kt.error(".createBox()","expected location to be a Point instance"),null;const n=new Ht(Pt(function(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=Et,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let c=0,l=0,p=0,u=0;for(let r=0;r<t.length;r++){const f=t[r],m=c/3;for(const t of e)a[u++]=m+t;const h=f.corners;for(let t=0;t<4;t++){const e=h[t];let r=0;i[p++]=.25*n[t][0]+f.uvOrigin[0],i[p++]=f.uvOrigin[1]-.25*n[t][1];for(let t=0;t<3;t++)0!==f.axis[t]?(o[c++]=.5*f.axis[t],s[l++]=f.axis[t]):(o[c++]=.5*e[r++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}(),t,e));return e&&e.imageFace&&"all"!==e.imageFace?function(t,e){const n=t.components[0],r=n.faces,o=Tt[e],s=6*o,i=new Uint32Array(6),a=new Uint32Array(r.length-6);let c=0,l=0;for(let t=0;t<r.length;t++)t>=s&&t<s+6?i[c++]=r[t]:a[l++]=r[t];const p=new Float32Array(t.vertexAttributes.uv),u=4*o*2,f=[0,1,1,1,1,0,0,0];for(let t=0;t<f.length;t++)p[u+t]=f[t];return t.vertexAttributes.uv=p,t.components=[new z({faces:i,material:n.material}),new z({faces:a})],t}(n,e.imageFace):n}static createSphere(t,e){return t instanceof l?new Ht(Pt(function(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array((e-1)*n*2*3);let c=0,l=0,p=0,u=0;for(let t=0;t<=e;t++){const r=t/e*Math.PI+.5*Math.PI,f=Math.cos(r),m=Math.sin(r);St[2]=m;const h=0===t||t===e,g=h?n-1:n;for(let r=0;r<=g;r++){const m=r/g*2*Math.PI;St[0]=-Math.sin(m)*f,St[1]=Math.cos(m)*f;for(let t=0;t<3;t++)o[c]=.5*St[t],s[c]=St[t],++c;i[l++]=(r+(h?.5:0))/n,i[l++]=t/e,0!==t&&r!==n&&(t!==e&&(a[p++]=u,a[p++]=u+1,a[p++]=u-n),1!==t&&(a[p++]=u,a[p++]=u-n,a[p++]=u-n-1)),u++}}return{position:o,normal:s,uv:i,faces:a}}(e&&e.densificationFactor||0),t,e)):(Kt.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,e){return t instanceof l?new Ht(Pt(function(t=0){const e=Math.round(16*2**t),n=4*(e+1)+2*e,r=new Float64Array(3*n),o=new Float32Array(3*n),s=new Float32Array(2*n),i=new Uint32Array(4*e*3);let a=0,c=0,l=0,p=0,u=0;for(let t=0;t<=5;t++){const n=0===t||5===t,f=t<=1||t>=4,m=2===t||4===t,h=n?e-1:e;for(let g=0;g<=h;g++){const x=g/h*2*Math.PI,y=n?0:.5;St[0]=y*Math.sin(x),St[1]=y*-Math.cos(x),St[2]=t<=2?.5:-.5;for(let e=0;e<3;e++)r[a++]=St[e],o[c++]=f?2===e?t<=1?1:-1:0:2===e?0:St[e]/y;s[l++]=(g+(n?.5:0))/e,s[l++]=t<=1?1*t/3:t<=3?1*(t-2)/3+1/3:1*(t-4)/3+2/3,m||0===t||g===e||(5!==t&&(i[p++]=u,i[p++]=u+1,i[p++]=u-e),1!==t&&(i[p++]=u,i[p++]=u-e,i[p++]=u-e-1)),u++}}return{position:r,normal:o,uv:s,faces:i}}(e&&e.densificationFactor||0),t,e)):(Kt.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,e){return t instanceof l?new Ht(Pt(function(t){const e=Rt.facingAxisOrderSwap[t],n=Rt.position,r=Rt.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let t=0;t<4;t++){const t=i;for(let a=0;a<3;a++){const c=e[a],l=Math.abs(c)-1,p=c>=0?1:-1;o[i]=n[t+l]*p,s[i]=r[t+l]*p,i++}}return{position:o,normal:s,uv:new Float32Array(Rt.uv),faces:new Uint32Array(Rt.faces)}}(e&&e.facing||"up"),t,e)):(Kt.error(".createPlane()","expected location to be a Point instance"),null)}static createFromPolygon(t,e){if(!(t instanceof d))return Kt.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=O(t);return new Ht({vertexAttributes:{position:n.position},components:[{faces:n.faces,shading:"flat",material:e&&e.material||null}],spatialReference:t.spatialReference})}static async createFromGLTF(t,e,n){if(!(t instanceof l))throw Kt.error(".createfromGLTF()","expected location to be a Point instance"),new i("invalid-input","Expected location to be a Point instance");return new Promise(((r,o)=>{import("../chunks/loadGLTFMesh.js").then((async a=>{try{s(n);const o=await a.loadGLTFMesh(t,e,n);r(new Ht(ct(o.map((t=>new Ht(t))),{reuseMaterials:!0})))}catch(t){o(new i("gltf-loader-error","Failed to load glTF.",`[${t.name}] ${t.message}`))}}))}))}};function Xt(t){return t/180*Math.PI}t([o({json:{read:!1}})],Qt.prototype,"cache",null),t([o({type:[z]})],Qt.prototype,"components",void 0),t([o({readOnly:!0,json:{read:!1}})],Qt.prototype,"extent",null),t([o({readOnly:!0,json:{read:!1,write:!1}})],Qt.prototype,"hasZ",void 0),t([o({readOnly:!0,json:{read:!1,write:!1}})],Qt.prototype,"hasM",void 0),t([o({type:C,nonNullable:!0,json:{write:!0}})],Qt.prototype,"vertexAttributes",void 0),Qt=Ht=t([a("esri.geometry.Mesh")],Qt),Qt.prototype.toJSON.isDefaultToJSON=!0;const te={x:m(1,0,0),y:m(0,1,0),z:m(0,0,1)},ee=u(),ne=U(),re=U(),oe=U();var se=Qt;export default se;export{At as g,ct as m,dt as u};