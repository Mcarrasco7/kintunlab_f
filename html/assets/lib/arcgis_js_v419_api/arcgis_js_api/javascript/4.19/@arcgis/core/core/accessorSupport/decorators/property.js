/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../../lang.js";import"../../../chunks/object.js";import"../../../config.js";import{L as t}from"../../../chunks/Logger.js";import"../../../chunks/string.js";import{p as e,g as r,i as n,a as s,b as o}from"../../../chunks/metadata.js";import{b as i,a,i as c,c as u,d as f,f as l,g as p,h as g,j as d,e as y}from"../../../chunks/ensureType.js";function m(t,e){const s="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(s,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const o=r(e);return n(o,s)?o.get(s):e[s]}function h(t,e,r){if(null==t)return t;const n=m(e[r],t);return!n&&r<e.length-1?void 0:r===e.length-1?n:h(n,e,r+1)}function j(t,r,n=0){return"string"==typeof r&&-1===r.indexOf(".")?m(r,t):h(t,e(r),n)}function v(t,e){return j(t,e)}function A(t,e){return void 0!==j(e,t)}t.getLogger("esri.core.accessorSupport.set");function O(t,e,r){if(t&&e)if("object"==typeof e)for(const r of Object.getOwnPropertyNames(e))O(t,r,e[r]);else{if(-1!==e.indexOf(".")){const n=e.split("."),s=n.splice(n.length-1,1)[0];return void O(v(t,n),s,r)}t[e]=r}}const b=t.getLogger("esri.core.accessorSupport.decorators.property");function x(t={}){return(e,r,n)=>{if(e===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${e.name}.${r}. Accessor does not support static properties.`);const m=s(e,r);n&&(n.get||n.set?(m.get=n.get||m.get,m.set=n.set||m.set):"value"in n&&("value"in t&&b.warn(`@property() will redefine the value of "${r}" on "${e.constructor.name}" already defined in the metadata`,t),m.value=t.value=n.value)),null!=t.readOnly&&(m.readOnly=t.readOnly);const h=t.aliasOf;if(h){const t="string"==typeof h?h:h.source,e="string"==typeof h?null:!0===h.overridable;let n;m.dependsOn=[t],m.get=function(){let e=v(this,t);if("function"==typeof e){n||(n=t.split(".").slice(0,-1).join("."));const r=v(this,n);r&&(e=e.bind(r))}return e},m.readOnly||(m.set=e?function(t){void 0!==t?this._override(r,t):this._clearOverride(r)}:function(e){O(this,t,e)})}const j=t.type,A=t.types;m.cast||(j?m.cast=function(t){let e=0,r=t;if(c(t))return u(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const n=r;if(f(n))return 0===e?l(n):p(l(n),e);if(1===e)return g(n);if(e>1)return d(n,e);const s=t;if(s.from)return s.from;return y(s)}(j):A&&(Array.isArray(A)?m.cast=i(a(A[0])):m.cast=a(A))),t.range&&(m.cast=w(m.cast,t.range)),o(m,t)}}function k(t,e,r){const n=s(t,r);n.json||(n.json={});let o=n.json;return void 0!==e&&(o.origins||(o.origins={}),o.origins[e]||(o.origins[e]={}),o=o.origins[e]),o}function w(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}export{A as e,w as ensureRange,v as g,x as property,k as propertyJSONMeta,O as s,j as v};
