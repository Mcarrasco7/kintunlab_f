/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{i as e}from"./Logger.js";import{c as t}from"./vec3f64.js";import{b as o,a as r}from"../geometry/Polygon.js";import{projectPointToVector as n}from"../geometry/projection.js";import{I as a}from"./quatf64.js";import{n as s}from"./aaBoundingBox.js";import{m as i}from"./dehydratedFeatures.js";import{c}from"./ColorMaterial.js";import{O as l}from"./Object3D.js";import{d as p,b as m}from"./RibbonLineMaterial.js";const f=t();function u(t,o,r,i,c,m,u,d,g,h){const j=r?r.length:0,y=t.clippingExtent;if(n(o,f,t.elevationProvider.spatialReference),e(y)&&!s(y,f))return null;const v=t.renderCoordsHelper.spatialReference;n(o,f,v);const b=t.localOriginFactory.getOrigin(f),x=new l({castShadow:!1,metadata:{layerUid:d,graphicUid:g,usesVerticalDistanceToGround:!0}});for(let e=0;e<j;e++){const t=c?c[e]:a;x.addGeometry(r[e],i[e],t,m,b,h)}return{object:x,sampledElevation:p(x,o,t.elevationProvider,t.renderCoordsHelper,u)}}function d(e,t,o){const r=e.elevationContext,a=o.spatialReference;n(t,f,a),r.centerPointInElevationSR=i(f[0],f[1],t.hasZ?f[2]:0,a)}function g(e){switch(e.type){case"point":return e;case"polygon":case"extent":return c(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const n=o(t,r(t)/2);return i(n[0],n[1],n[2],e.spatialReference)}case"mesh":return e.extent.center}return null}function h(e,t,o,r,n){const a=new Float64Array(3*e.length),s=new Float64Array(a.length);e.forEach(((e,t)=>{a[3*t+0]=e[0],a[3*t+1]=e[1],a[3*t+2]=e.length>2?e[2]:0}));const i=m(a,t,0,s,0,a,0,a.length/3,o,r,n),c=null!=i;return{numVertices:e.length,position:a,mapPosition:s,projectionSuccess:c,sampledElevation:i}}export{u as c,d as e,h as g,g as p};
