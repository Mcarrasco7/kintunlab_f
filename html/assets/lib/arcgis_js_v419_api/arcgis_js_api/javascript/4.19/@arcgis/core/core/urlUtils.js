/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{g as t}from"./lang.js";import"../chunks/object.js";import e from"../config.js";import{L as n,a as r,i as o,b as i}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/Message.js";import s from"./Error.js";const u=n.getLogger("esri.core.urlUtils"),l=e.request,c="esri/config: esriConfig.request.proxyUrl is not set.",f=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,a=/^\s*http:/i,h=/^\s*https:/i,p=/^\s*file:/i,d=/:\d+$/,g=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,m=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),y=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class ${constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let e=r(this.uri.match(m));this.scheme=e[2]||(e[1]?"":null),this.authority=e[4]||(e[3]?"":null),this.path=e[5],this.query=e[7]||(e[6]?"":null),this.fragment=e[9]||(e[8]?"":null),null!=this.authority&&(e=r(this.authority.match(y)),this.user=e[3]||null,this.password=e[4]||null,this.host=e[6]||e[7],this.port=e[9]||null)}toString(){return this.uri}}const x=new $(e.applicationUrl),O={},w=(()=>{const t=r(x.path),e=t.substring(0,t.lastIndexOf(t.split("/")[t.split("/").length-1]));return`${`${x.scheme}://${x.host}${null!=x.port?`:${x.port}`:""}`}${e}`})();function U(t){const e={path:null,query:null},n=new $(t),r=t.indexOf("?");return null===n.query?e.path=t:(e.path=t.substring(0,r),e.query=b(n.query)),n.fragment&&(e.hash=n.fragment,null===n.query&&(e.path=e.path.substring(0,e.path.length-(n.fragment.length+1)))),e}function b(t){const e=t.split("&"),n={};for(const t of e){if(!t)continue;const e=t.indexOf("=");let r,o;e<0?(r=decodeURIComponent(t),o=""):(r=decodeURIComponent(t.slice(0,e)),o=decodeURIComponent(t.slice(e+1)));let i=n[r];"string"==typeof i&&(i=n[r]=[i]),Array.isArray(i)?i.push(o):n[r]=o}return n}function R(t){return t&&"object"==typeof t&&"toJSON"in t&&"function"==typeof t.toJSON}function C(t,e){return t?e&&"function"==typeof e?Object.keys(t).map((n=>encodeURIComponent(n)+"="+encodeURIComponent(e(n,t[n])))).join("&"):Object.keys(t).map((n=>{const r=t[n];if(null==r)return"";const o=encodeURIComponent(n)+"=",i=e&&e[n];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((t=>R(t)?o+encodeURIComponent(JSON.stringify(t)):o+encodeURIComponent(t))).join("&"):R(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((t=>t)).join("&"):""}function q(t=!1){let e,n=l.proxyUrl;if("string"==typeof t){r=t,e=h.test(r)||"https"===x.scheme&&_(r);const o=S(t);o&&(n=o.proxyUrl)}else e=!!t;var r;if(!n)throw u.warn(c),new s("urlutils:proxy-not-set",c);e&&rt()&&(n=nt(n));return U(n)}function j(t){const e=S(t);let n,r;if(e){const t=v(e.proxyUrl);n=t.path,r=t.query?b(t.query):null}if(n){const e=U(t);t=n+"?"+e.path;const o=C({...r,...e.query});o&&(t=`${t}?${o}`)}return t}const L={path:"",query:""};function v(t){const e=t.indexOf("?");return-1!==e?(L.path=t.slice(0,e),L.query=t.slice(e+1)):(L.path=t,L.query=null),L}function I(t){return t=(t=ot(t=function(t){if(!t||"/"!==t[t.length-1])return`${t}/`;return t}(t=v(t).path),!0)).toLowerCase()}function k(t){const e={proxyUrl:t.proxyUrl,urlPrefix:I(t.urlPrefix)},n=l.proxyRules,r=e.urlPrefix;let o=n.length;for(let t=0;t<n.length;t++){const e=n[t].urlPrefix;if(0===r.indexOf(e)){if(r.length===e.length)return-1;o=t;break}0===e.indexOf(r)&&(o=t+1)}return n.splice(o,0,e),o}function S(t){const e=l.proxyRules,n=I(t);for(let t=0;t<e.length;t++)if(0===n.indexOf(e[t].urlPrefix))return e[t]}function A(t,e){return t=P(t),e=P(e),ot(t)===ot(e)}function P(t){const e=(t=z(t)).indexOf("/sharing");return e>0?t.substring(0,e):t.replace(/\/+$/,"")}function B(t){const e=e=>null==e||e instanceof RegExp&&e.test(t)||"string"==typeof e&&t.startsWith(e),n=l.interceptors;if(n)for(const t of n)if(Array.isArray(t.urls)){if(t.urls.some(e))return t}else if(e(t.urls))return t;return null}function E(t,e,n=!1){const r=ct(t),o=ct(e);return!(!n&&r.scheme!==o.scheme)&&(null!=r.host&&null!=o.host&&(r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port))}function J(t){if("string"==typeof t){if(!Q(t))return!0;t=ct(t)}if(E(t,x))return!0;const e=l.trustedServers||[];for(let n=0;n<e.length;n++){const r=N(e[n]);for(let e=0;e<r.length;e++)if(E(t,r[e]))return!0}return!1}function N(t){return O[t]||(tt(t)||_(t)?O[t]=[new $(T(t))]:O[t]=[new $(`http://${t}`),new $(`https://${t}`)]),O[t]}function T(t,e=w,n){return _(t)?n&&n.preserveProtocolRelative?t:"http"===x.scheme&&x.authority===D(t).slice(2)?`http:${t}`:`https:${t}`:tt(t)?t:r(M("/"===t[0]?function(t){const e=t.indexOf("//"),n=t.indexOf("/",e+2);if(-1===n)return t;return t.slice(0,n)}(e):e,t))}function W(t,e=w,n){if(!Q(t))return t;const r=z(t),o=r.toLowerCase(),i=z(e).toLowerCase().replace(/\/+$/,""),s=n?z(n).toLowerCase().replace(/\/+$/,""):null;if(s&&0!==i.indexOf(s))return t;const u=(t,e,n)=>-1===(n=t.indexOf(e,n))?t.length:n;let l=u(o,"/",o.indexOf("//")+2),c=-1;for(;o.slice(0,l+1)===i.slice(0,l)+"/"&&(c=l+1,l!==o.length);)l=u(o,"/",l+1);if(-1===c)return t;if(s&&c<s.length)return t;t=r.slice(c);const f=i.slice(c-1).replace(/[^/]+/g,"").length;if(f>0)for(let e=0;e<f;e++)t=`../${t}`;else t=`./${t}`;return t}function z(t){return t=function(t){const e=l.httpsDomains;if(!function(t){return a.test(t)||"http"===x.scheme&&_(t)}(t))return t;const n=t.indexOf("/",7);let r;r=-1===n?t:t.slice(0,n);if(r=r.toLowerCase().slice(7),d.test(r)){if(!r.endsWith(":80"))return t;r=r.slice(0,-3),t=t.replace(":80","")}if("http"===x.scheme&&r===x.authority&&!g.test(t))return t;(rt()&&r===x.authority||e&&e.some((t=>r===t||r.endsWith(`.${t}`)))||rt()&&!S(t))&&(t=nt(t));return t}(t=function(t){return t.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}(t=function(t){if(/^https?:\/\//i.test(t)){const e=v(t);t=(t=e.path.replace(/\/{2,}/g,"/")).replace("/","//"),e.query&&(t+=`?${e.query}`)}return t}(t=T(t=t.trim()))))}function M(...t){const e=t.filter(o);if(!e||!e.length)return;const n=[];if(Q(e[0])){const t=e[0],o=t.indexOf("//");-1!==o&&(n.push(t.slice(0,o+1)),r=e[0],p.test(r)&&(n[0]+="/"),e[0]=t.slice(o+2))}else"/"===e[0][0]&&n.push("");var r;const i=e.reduce(((t,e)=>e?t.concat(e.split("/")):t),[]);for(let t=0;t<i.length;t++){const e=i[t];".."===e&&n.length>0&&".."!==n[n.length-1]?n.pop():(!e&&t===i.length-1||e&&("."!==e||0===n.length))&&n.push(e)}return n.join("/")}function D(t,e=!1){if(F(t)||G(t))return null;let n=t.indexOf("://");if(-1===n&&_(t))n=2;else{if(-1===n)return null;n+=3}const r=t.indexOf("/",n);return-1!==r&&(t=t.slice(0,r)),e&&(t=ot(t,!0)),t}function Q(t){return _(t)||tt(t)}function F(t){return null!=t&&"blob:"===t.slice(0,5)}function G(t){return"data:"===t.slice(0,5)}function H(t){const e=V(t);if(!e||!e.isBase64)return null;const n=atob(e.data),r=new Uint8Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);return r.buffer}const K=/^data:(.*?)(;base64)?,(.*)$/;function V(t){const e=t.match(K);if(!e)return null;const[,n,r,o]=e;return{mediaType:n,isBase64:!!r,data:o}}function X(t){return t.isBase64?`data:${t.mediaType};base64,${t.data}`:`data:${t.mediaType},${t.data}`}function Y(t){const e=H(t);if(!e)return null;const n=V(t);return new Blob([e],{type:n.mediaType})}function Z(e,n){(function(e,n){const r=document.createElement("a");if(!("download"in r))return!1;let o=null;if(t.URL&&t.URL.createObjectURL){const n=Y(e);if(!n)return!1;o=t.URL.createObjectURL(n)}r.download=n,r.href=o||e,r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),o&&t.URL.revokeObjectURL(o);return})(e,n)||function(t,e){if(window.navigator.msSaveOrOpenBlob)return window.navigator.msSaveOrOpenBlob(Y(t),e)}(e,n)}function _(t){return null!=t&&void 0!==t&&"/"===t[0]&&"/"===t[1]}function tt(t){return f.test(t)}function et(t){return _(t)?`http:${t}`:t.replace(h,"http:")}function nt(t){return _(t)?`https:${t}`:t.replace(a,"https:")}function rt(){return"https"===x.scheme}function ot(t,e=!1){return _(t)?t.slice(2):(t=t.replace(f,""),e&&t.length>1&&"/"===t[0]&&"/"===t[1]&&(t=t.slice(2)),t)}function it(t){let e=0;if(Q(t)){const n=t.indexOf("//");-1!==n&&(e=n+2)}const n=t.lastIndexOf("/");return n<e?t:t.slice(0,n+1)}function st(t,e){if(!t)return"";const n=U(t).path.replace(/\/+$/,""),r=n.substring(n.lastIndexOf("/")+1);if(null==e||!e.length)return r;const o=new RegExp(`.(${e.join("|")})$`,"ig");return r.replace(o,"")}function ut(t){return t.replace(/\/+$/,"")}function lt(t,e,n){if(!(e&&n&&t&&Q(t)))return t;const r=t.indexOf("//"),o=t.indexOf("/",r+2),i=t.indexOf(":",r+2),s=Math.min(o<0?t.length:o,i<0?t.length:i);if(t.slice(r+2,s).toLowerCase()!==e.toLowerCase())return t;return`${t.slice(0,r+2)}${n}${t.slice(s)}`}function ct(t){return"string"==typeof t?new $(T(t)):(t.scheme||(t.scheme=x.scheme),t)}function ft(t){return yt.test(t)}function at(t,e){const n=U(t),r=Object.keys(n.query||{});return r.length>0&&e&&e.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),n.path}function ht(t,e,n){const r=U(t),o=r.query||{};return o[e]=String(n),`${r.path}?${C(o)}`}function pt(t,e){const n=U(t),r=n.query||{};for(const t in e)r[t]=e[t];const o=C(r);return o?`${n.path}?${o}`:n.path}function dt(t,e){const{path:n,query:r}=U(t);if(!r)return t;delete r[e];const o=C(r);return o?`${n}?${o}`:n}function gt(t){if(i(t))return null;const e=t.match(mt);return e?e[1]:null}const mt=/.*?\.([^\/]*)$/,yt=/(^data:image\/svg|\.svg$)/i;export{$ as Url,j as addProxy,k as addProxyRule,ht as addQueryParameter,pt as addQueryParameters,w as appBaseUrl,x as appUrl,lt as changeDomain,V as dataComponents,H as dataToArrayBuffer,Y as dataToBlob,Z as downloadDataAsFile,st as getFilename,B as getInterceptor,D as getOrigin,gt as getPathExtension,S as getProxyRule,q as getProxyUrl,tt as hasProtocol,E as hasSameOrigin,A as hasSamePortal,Q as isAbsolute,rt as isAppHTTPS,F as isBlobProtocol,G as isDataProtocol,_ as isProtocolRelative,ft as isSVG,J as isTrustedServer,M as join,T as makeAbsolute,X as makeData,W as makeRelative,z as normalize,C as objectToQuery,b as queryToObject,it as removeFile,dt as removeQueryParameter,at as removeQueryParameters,ut as removeTrailingSlash,et as toHTTP,nt as toHTTPS,O as trustedServersUrlCache,U as urlToObject};
