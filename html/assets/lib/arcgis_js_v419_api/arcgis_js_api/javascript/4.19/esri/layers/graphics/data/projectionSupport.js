// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/support/spatialReferenceUtils","../../../geometry/support/webMercatorUtils","../../../geometry/projection","../../../geometry/geometryAdapters/json"],function(k,e,l,m,p){function q(c,a){if(!a)return null;if("x"in a){var b={x:0,y:0};[b.x,b.y]=c(a.x,a.y,n);null!=a.z&&(b.z=a.z);null!=a.m&&(b.m=a.m);return b}if("xmin"in a)return b={xmin:0,ymin:0,xmax:0,ymax:0},[b.xmin,b.ymin]=c(a.xmin,a.ymin,n),[b.xmax,b.ymax]=c(a.xmax,a.ymax,n),a.hasZ&&(b.zmin=a.zmin,b.zmax=a.zmax,
b.hasZ=!0),a.hasM&&(b.mmin=a.mmin,b.mmax=a.mmax,b.hasM=!0),b;if("rings"in a)return{rings:r(a.rings,c),hasM:a.hasM,hasZ:a.hasZ};if("paths"in a)return{paths:r(a.paths,c),hasM:a.hasM,hasZ:a.hasZ};if("points"in a)return{points:t(a.points,c),hasM:a.hasM,hasZ:a.hasZ}}function r(c,a){const b=[];for(const d of c)b.push(t(d,a));return b}function t(c,a){const b=[];for(const d of c)c=a(d[0],d[1],[0,0]),b.push(c),2<d.length&&c.push(d[2]),3<d.length&&c.push(d[3]);return b}const n=[0,0],u=q.bind(null,l.lngLatToXY),
v=q.bind(null,l.xyToLngLat),w=new (function(){function c(){this._jobs=[];this._timer=null;this._process=this._process.bind(this)}var a=c.prototype;a.push=async function(b,d,f){b&&b.length&&d&&f&&e.equals(d,f);const g={geometries:b,inSpatialReference:d,outSpatialReference:f,resolve:null};this._jobs.push(g);return new Promise(h=>{g.resolve=h;null===this._timer&&(this._timer=setTimeout(this._process,10))})};a._process=function(){this._timer=null;const b=this._jobs.shift();if(b){var {geometries:d,inSpatialReference:f,
outSpatialReference:g,resolve:h}=b;l.canProject(f,g)?e.isWebMercator(g)?h(d.map(u)):h(d.map(v)):h(m.projectMany(p.jsonAdapter,d,f,g,null));0<this._jobs.length&&(this._timer=setTimeout(this._process,10))}};return c}());k.checkProjectionSupport=async function(c,a){a&&(c=Array.isArray(c)?c.map(b=>{var d;return null==(d=b.geometry)?void 0:d.spatialReference}):[c],await m.initializeProjection(c.map(b=>({source:b,dest:a}))))};k.project=function(c,a,b){if(!c)return c;b||(b=a,a=c.spatialReference);return e.isValid(a)&&
e.isValid(b)&&!e.equals(a,b)?l.canProject(a,b)?e.isWebMercator(b)?u(c):v(c):m.projectMany(p.jsonAdapter,[c],a,b,null)[0]:c};k.projectMany=async function(c,a,b){return w.push(c,a,b)};Object.defineProperty(k,"__esModule",{value:!0})});