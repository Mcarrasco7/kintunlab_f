/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{urlToObject as e}from"../core/urlUtils.js";import t from"../request.js";import s from"../geometry/Polygon.js";import r from"../geometry/Polyline.js";import{fromJSON as n,getJsonType as o}from"../geometry/support/jsonUtils.js";import"../geometry.js";import{p as a,a as i}from"./utils4.js";import{e as f,c,g as p,l as y,o as m,r as g,d as u,t as l}from"./trimExtend.js";import d from"../tasks/support/GeneralizeParameters.js";import S from"../tasks/support/LengthsParameters.js";import O from"../tasks/support/OffsetParameters.js";import h from"../tasks/support/RelationParameters.js";import J from"../tasks/support/TrimExtendParameters.js";async function N(e,s,r){const n=a(e),o={...n.query,f:"json",...s.toJSON()},f=i(o,r);return t(n.path+"/areasAndLengths",f).then((e=>e.data))}async function j(e,r,n,o){const c=r[0].spatialReference,p=a(e),y={...p.query,f:"json",sr:JSON.stringify(c.toJSON()),polygons:JSON.stringify(f(r).geometries),polylines:JSON.stringify(f(n).geometries)},m=i(y,o);return t(p.path+"/autoComplete",m).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new s({spatialReference:c,rings:e})))))}async function R(e,r,n){const o=a(e),f={...o.query,f:"json",...r.toJSON()},c=r.outSpatialReference||r.geometries[0].spatialReference,p=i(f,n);return t(o.path+"/buffer",p).then((e=>(e.data.geometries||[]).map((({rings:e})=>new s({spatialReference:c,rings:e})))))}async function q(e,s,r){const o=s[0].spatialReference,c=a(e),p={...c.query,f:"json",sr:JSON.stringify(o.toJSON()),geometries:JSON.stringify(f(s))},y=i(p,r);return t(c.path+"/convexHull",y).then((({data:e})=>n(e.geometry).set({spatialReference:o})))}async function k(e,s,r,i){const f=a(e),c=s[0].spatialReference,p={...i,query:{...f.query,f:"json",sr:JSON.stringify(c),target:JSON.stringify({geometryType:o(s[0]),geometries:s}),cutter:JSON.stringify(r)}},y=await t(f.path+"/cut",p),{cutIndexes:m,geometries:g=[]}=y.data;return{cutIndexes:m,geometries:g.map((e=>{const t=n(e);return t.spatialReference=c,t}))}}async function w(e,s,r){const o=s.geometries[0].spatialReference,f=a(e),c={...f.query,f:"json",...s.toJSON()},p=i(c,r);return t(f.path+"/densify",p).then((({data:e})=>(e.geometries||[]).map((e=>n(e).set({spatialReference:o})))))}async function v(e,s,r,i){const c=s[0].spatialReference,p=a(e);let y={query:{...p.query,f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(f(s)),geometry:JSON.stringify({geometryType:o(r),geometry:r.toJSON()})}};return i&&(y={...i,...y}),t(p.path+"/difference",y).then((({data:e})=>(e.geometries||[]).map((e=>n(e).set({spatialReference:c})))))}async function P(e,s,r){const n=a(e),o={...n.query,f:"json",...s.toJSON()},f=i(o,r);return t(n.path+"/distance",f).then((({data:e})=>e&&e.distance))}async function T(e,s,r){const n={};null!=s.sr&&"object"==typeof s.sr?n.sr=s.sr.wkid||JSON.stringify(s.sr):n.sr=s.sr,n.strings=JSON.stringify(s.strings);const o=s.conversionType||"mgrs";n.conversionType=c.toJSON(o),n.conversionMode=s.conversionMode;const f=a(e),p={...f.query,f:"json",...n},y=i(p,r);return t(f.path+"/fromGeoCoordinateString",y).then((({data:e})=>e.coordinates))}async function x(e,s,r){const o=(s=d.from(s)).toJSON(),f=p(s),c=a(e),y={...c.query,f:"json",...f},m=o.geometries[0].spatialReference,g=i(y,r);return t(c.path+"/generalize",g).then((({data:e})=>(e.geometries||[]).map((e=>n(e).set({spatialReference:m})))))}async function b(e,s,r,c){const p=s[0].spatialReference,y=a(e),m={...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(f(s)),geometry:JSON.stringify({geometryType:o(r),geometry:r.toJSON()})},g=i(m,c);return t(y.path+"/intersect",g).then((({data:e})=>(e.geometries||[]).map((e=>n(e).set({spatialReference:p})))))}function M(e,s,r){const o=s.map((e=>e.toJSON())),f=s[0].spatialReference,c=a(e),p={...c.query,f:"json",sr:f.wkid?f.wkid:JSON.stringify(f.toJSON()),polygons:JSON.stringify(o)},y=i(p,r);return t(c.path+"/labelPoints",y).then((({data:e})=>(e.labelPoints||[]).map((e=>n(e).set({spatialReference:f})))))}async function C(e,s,r){s=S.from(s);const n=y(s),o=a(e),f={...o.query,f:"json",...n},c=i(f,r);return t(o.path+"/lengths",c).then((({data:e})=>e))}async function E(e,s,r){s=O.from(s);const o=m(s),f=a(e),c={...f.query,f:"json",...o},p=s.geometries[0].spatialReference,y=i(c,r);return t(f.path+"/offset",y).then((({data:e})=>(e.geometries||[]).map((e=>n(e).set({spatialReference:p})))))}async function G(e,s,r){s=h.from(s);const n=g(s),o=a(e),f={...o.query,f:"json",...n},c=i(f,r);return t(o.path+"/relation",c).then((({data:e})=>e.relations))}async function z(e,s,r,f){const c=s.spatialReference,p=a(e),y={...p.query,f:"json",sr:JSON.stringify(c.toJSON()),target:JSON.stringify({geometryType:o(s),geometry:s.toJSON()}),reshaper:JSON.stringify(r.toJSON())},m=i(y,f);return t(p.path+"/reshape",m).then((({data:e})=>n(e.geometry).set({spatialReference:c})))}async function D(s,r,n){const a="string"==typeof s?e(s):s,i=r[0].spatialReference,c=o(r[0]),p={...n,query:{...a.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(f(r))}},{data:y}=await t(a.path+"/simplify",p);return u(y.geometries,c,i)}async function I(e,s,r){const n={};null!=s.sr&&"object"==typeof s.sr?n.sr=s.sr.wkid||JSON.stringify(s.sr):n.sr=s.sr,n.coordinates=JSON.stringify(s.coordinates);const o=s.conversionType||"mgrs";n.conversionType=c.toJSON(o),n.conversionMode=s.conversionMode,n.numOfDigits=s.numOfDigits,n.rounding=s.rounding,n.addSpaces=s.addSpaces;const f=a(e),p={...f.query,f:"json",...n},y=i(p,r);return t(f.path+"/toGeoCoordinateString",y).then((({data:e})=>e.strings))}async function L(e,s,n){s=J.from(s);const o=l(s),f=a(e),c={...f.query,f:"json",...o},p=s.sr,y=i(c,n);return t(f.path+"/trimExtend",y).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new r({spatialReference:p,paths:e})))))}async function U(e,s,r){const o=s[0].spatialReference,c=a(e),p={...c.query,f:"json",sr:JSON.stringify(o.toJSON()),geometries:JSON.stringify(f(s))},y=i(p,r);return t(c.path+"/union",y).then((({data:e})=>n(e.geometry).set({spatialReference:o})))}export{N as a,j as b,R as c,q as d,k as e,w as f,v as g,P as h,T as i,x as j,b as k,M as l,C as m,z as n,E as o,L as p,G as r,D as s,I as t,U as u};