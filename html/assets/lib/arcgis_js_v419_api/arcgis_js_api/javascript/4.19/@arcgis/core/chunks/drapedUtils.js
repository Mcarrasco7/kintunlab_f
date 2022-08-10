/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{b as e,i as t}from"./Logger.js";import n from"../geometry/Extent.js";import"../geometry.js";import{a as r}from"./unitUtils.js";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,n=0;for(let r=0;r<e.length;r++){const s=e[r].size;"number"==typeof s&&(t+=s,n++)}return t/n}(e.stops):t}function o(e){const t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;const r="visualVariables"in t?function(e,t){if(!t)return e;const n=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:n,minSize:r}=t;return(a(n,e)+a(r,e))/2}));let r=0;const s=n.length;if(0===s)return e;for(let e=0;e<s;e++)r+=n[e];const o=Math.floor(r/s);return Math.max(o,e)}(n,t.visualVariables):n;if("simple"===t.type)return s(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach((t=>{e=s(e,t.symbol)})),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach((t=>{e=s(e,t.symbol)})),e}return t.type,r}function i(e,s,a,o=new n){let i;if("2d"===a.type)i=s*a.resolution;else if("3d"===a.type){const n=a.overlayPixelSizeInMapUnits(e),o=a.basemapSpatialReference;i=t(o)&&!o.equals(a.spatialReference)?r(o)/r(a.spatialReference):s*n}const f=e.x-i,u=e.y-i,l=e.x+i,c=e.y+i,{spatialReference:m}=a;return o.xmin=Math.min(f,l),o.ymin=Math.min(u,c),o.xmax=Math.max(f,l),o.ymax=Math.max(u,c),o.spatialReference=m,o}function f(t,n,r){const s=r.toMap(t);if(e(s))return!1;return i(s,o(),r,u).intersects(n)}const u=new n;export{i as a,o as c,f as i};
