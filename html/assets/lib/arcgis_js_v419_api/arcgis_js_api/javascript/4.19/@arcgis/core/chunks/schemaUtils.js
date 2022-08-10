/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{h as e,clone as t}from"../core/lang.js";import{u as r,L as i,i as n,c as s}from"./Logger.js";import a from"../core/Error.js";import{g as l}from"../geometry/SpatialReference.js";import{d as o}from"./extentUtils.js";import{isPoint as u}from"../geometry/support/jsonUtils.js";import{a as c,t as f}from"./screenUtils.js";import"../renderers/Renderer.js";import{fromJSON as m}from"../symbols/support/jsonUtils.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/UniqueValueRenderer.js";import{a as d}from"./normalizeUtilsCommon.js";import{normalizeMapX as p}from"../geometry/support/normalizeUtils.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import y from"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import{c as h}from"./aaBoundingRect.js";import{s as g,a as b,b as x,i as v,t as w}from"./vec2.js";import{r as M}from"./definitions.js";import{b as S,s as z,g as I,a as V}from"./BidiText.js";import{i as E,t as j,r as T,s as F}from"./mat2d.js";import{c as R}from"./mat2df32.js";import{c as k}from"./vec2f32.js";import{c as N}from"./clusterUtils2.js";import{b as O,a as P}from"./enums.js";import{j as C}from"./Utils10.js";import{c as L,h as U}from"./MaterialKey.js";import{t as B}from"./util2.js";import{g as J}from"./visualVariablesUtils2.js";import{C as K,R as A}from"./CIMSymbolHelper.js";const q=Math.PI/180,D=R(),$=k(),G=512,H=50;function W(e,t){if(!t.isWrappable)return null;const[r,i]=d(t);return e[2]>i?[h([e[0],e[1],i,e[3]]),h([r,e[1],r+e[2]-i,e[3]])]:e[0]<r?[h([r,e[1],e[2],e[3]]),h([i-(r-e[0]),e[1],i,e[3]])]:null}function X(e,t,r,i,n,s,a){if(!i||!r.symbol)return e[0]=e[1]=e[2]=e[3]=0,t[0]=t[1]=t[2]=t[3]=0,e;const c=i;if(!u(c)){o(e,c);let i=t[0];0===i&&(i=ce(r),t[0]=i);const s=n*i/2;return e[0]-=s,e[1]-=s,e[2]+=s,e[3]+=s,e}{const i=c.x,o=c.y;"esriTS"===r.symbol.type&&0===t[2]&&0===t[3]&&fe(t,r.symbol,r.mosaicItem),function(e,t,r,i,n,s,a,o){let u;switch(i.type){case"esriSMS":case"esriPMS":u=le(t,r,i,s,a,0);break;case"esriTS":u=ue(t,r,i,n,s,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":u=oe(t,r,i,s,a,0)}let c,f,m=0;for(let e=0;e<u.rings[0].length-1;e++)f=u.rings[0][e],c=(t-f[0])*(t-f[0])+(r-f[1])*(r-f[1]),m=Math.max(m,c);m=Math.sqrt(m);let d=p(t-m,o),y=p(t+m,o);if(d>y){const e=l(o);if(e){const[t,r]=e.valid;d=t,y=r}}e[0]=d,e[1]=r-m,e[2]=y,e[3]=r+m}(e,i,o,r.symbol,t,n,s,a)}return e}function Y(e){return"text"===e||"esriTS"===e}function Q(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function Z(e){switch(r(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const _=k(),ee=k(),te=k(),re=k(),ie=k(),ne=k(),se=k();function ae(e,t,r,i){g(te,t,r);const n=e.paths;let s,a,l,o,u,c,f,m,d,p=1/0;for(let e=0;e<n.length;e++){const y=n[e];if(!(y.length<2))for(let e=1;e<y.length;e++)s=y[e-1][0],l=y[e-1][1],a=y[e][0],o=y[e][1],u=Math.min(s,a)-i,c=Math.min(l,o)-i,f=Math.max(s,a)+i,m=Math.max(l,o)+i,t<u||t>f||r<c||r>m||(g(_,s,l),g(ee,a,o),b(re,ee,_),b(ie,_,te),x(ne,re,v(re,ie)/v(re,re)),b(se,ie,ne),d=v(se,se),p>d&&(p=d))}return Math.sqrt(p)<=i}function le(e,t,r,i,n,s){let a,l;const o=c(r.xoffset),u=c(r.yoffset),f=q*r.angle,m=q*s;switch(r.type){case"esriSMS":a=l=c(r.size);break;case"esriPMS":a=c(r.width),l=c(r.height)}n<.04&&(i=.04*i/n);const d=E(D);j(d,d,g($,e,t)),T(d,d,m-f),F(d,d,g($,i,-i)),j(d,d,g($,o,-u));const p=[0,0];w(p,g($,-.5*a,-.5*l),d);const y=[0,0];w(y,g($,-.5*a,.5*l),d);const h=[0,0];w(h,g($,.5*a,-.5*l),d);const b=[0,0];return w(b,g($,.5*a,.5*l),d),{rings:[[p,h,b,y,p]]}}function oe(e,t,r,i,n,s){const a=K.getEnvelope(r.data);if(!a)return null;n<.04&&(i=.04*i/n);const l=c(a.width),o=c(a.height),u=c(a.x),f=c(a.y),m=0*q,d=q*s,p=E(D);j(p,p,g($,e,t)),T(p,p,d-m),F(p,p,g($,i,i));const y=[0,0];w(y,g($,u,f+o),p);const h=[0,0];w(h,g($,u,f),p);const b=[0,0];w(b,g($,u+l,f+o),p);const x=[0,0];return w(x,g($,u+l,f),p),{rings:[[y,b,x,h,y]]}}function ue(e,t,r,i,n,s){const a=c(r.xoffset),l=c(r.yoffset),o=q*r.angle,u=q*s,f=E(D);j(f,f,g($,e,t)),T(f,f,u),F(f,f,g($,n,-n));const m=i[0]+i[2]/2,d=i[1]+i[3]/2;j(f,f,g($,a,-l)),j(f,f,g($,m,d)),T(f,f,o),j(f,f,g($,-m,-d));const p=[0,0];w(p,g($,i[0],i[1]),f);const y=[0,0];w(y,g($,i[0],i[1]+i[3]),f);const h=[0,0];w(h,g($,i[0]+i[2],i[1]),f);const b=[0,0];return w(b,g($,i[0]+i[2],i[1]+i[3]),f),{rings:[[p,h,b,y,p]]}}function ce(e){switch(e.symbol.type){case"esriSFS":case"esriPFS":{const t=e.symbol.outline;return t?t.width:0}case"esriSLS":return c(e.symbol.width);case"esriSMS":return c(e.symbol.size);case"esriPMS":return c(Math.max(e.symbol.width,e.symbol.height));case"esriTS":{const t=[0,0,0,0];fe(t,e.symbol,e.mosaicItem);const r=Math.max(Math.abs(t[0]),Math.abs(t[1]));return Math.max(t[2],t[3])+r}case"expanded-cim":{const t=K.getEnvelope(e.symbol.data);return t.width!==-1/0&&t.height!==-1/0||(t.width=10,t.height=10,t.x=0,t.y=0),c(Math.sqrt(t.width*t.width+t.height*t.height))}case"composite-symbol":{if(!e.symbol.layers.length)return 0;const t=e.symbol.layers.length-1;return ce({symbol:e.symbol.layers[t],mosaicItem:null})}case"label":default:return 0}}function fe(e,t,r){if(!r||0===r.glyphMosaicItems.length)return e;const i=S(t.text)[1],n=r.glyphMosaicItems,s=z(n,i,{scale:c(t.font.size)/24,angle:t.angle,xOffset:t.xoffset,yOffset:t.yoffset,hAlign:I(t.horizontalAlignment||"center"),vAlign:V(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=c(s.x-s.halfWidth),e[1]=c(s.y-s.halfHeight),e[2]=c(s.width),e[3]=c(s.height),e}const me={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1};function de(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const r=t[0];if("stops"===r.transformationType)return r.stops.map((e=>e.size)).reduce(we,0);if("clamped-linear"===r.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((e=>e.size)).reduce(we,0),t="number"==typeof r.minSize?r.minSize:r.minSize.stops.map((e=>e.size)).reduce(we,0),Math.max(e,t)}return"real-world-size"===r.transformationType?30:void 0}async function pe(e,t,r){if(!e||r&&"cluster"===r.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?100:200;const i=e.getSymbols(),n=de(e),s=[];for(const e of i)s.push(xe(e,n));const a=await Promise.all(s);return c(a.reduce(we,0))}const ye=[0,0,0,0];function he(e,t){return null==e?t:e}const ge={sdf:!0,code:99,metrics:M.metrics,rect:new A(0,0,24,24),page:0,textureBinding:2};async function be(e,t){if("simple-marker"===e.type){const r=Math.max(he(e.size,12),t);return ve(e)+.707*r}if("picture-marker"===e.type){const r=Math.max(he(e.height,12),t),i=he(e.width,12)*(r/he(e.height,12))/2,n=r/2;return ve(e)+Math.sqrt(i*i+n*n)}if("text"===e.type){const t=function(e){const t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[ge]};const r=[];for(let i=0;i<t;i++)r.push({...ge,code:e.text.charCodeAt(i)});return{glyphMosaicItems:r}}(e);fe(ye,e.toJSON(),t);const r=Math.abs(ye[0]),i=Math.abs(ye[1]),n=ye[2],s=ye[3];return Math.max(r,i)+Math.max(n,s)}if("simple-line"===e.type){const r=e,i=Math.max(he(r.width,.75),t)/2;return r.marker?Math.max(6*r.width,2*t):i}if("simple-fill"===e.type||"picture-fill"===e.type)return Math.max(function(e,t){return null==e.outline?t:he(e.outline.width,t)}(e,0),t)/2;if("cim"===e.type){const t=K.getEnvelope(e.data);return t?Math.sqrt(t.width*t.width+t.height*t.height):0}return"web-style"===e.type?be(await e.fetchCIMSymbol(),t):0}async function xe(e,t){return function(e){return e.type in me}(e)?Math.min(await be(e,t),75):0}function ve(e){const t=he(e.xoffset,0),r=he(e.yoffset,0);return Math.sqrt(t*t+r*r)}function we(e,t){return Math.max(e,t)}const Me=i.getLogger("esri.renderers.visualVariables.support.utils"),Se=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),r=t.visualVariables.map((e=>Ie(e)?Ve(e):e));return t.visualVariables=r,t};function ze(e){return e.map((e=>Ie(e)?Ve(e.clone()):e))}function Ie(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function Ve(e){return e.stops=function(e,t){if(t.length<=8)return t;if(Me.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16)return function(e,t){const[r,...i]=t,n=i.pop(),s=i[0].value,a=i[i.length-1].value,l=(a-s)/6,o=[];for(let r=s;r<a;r+=l){let n=0;for(;r>=i[n].value;)n++;const s=i[n],a=t[n-1],l=r-a.value,u=s.value===a.value?1:l/(s.value-a.value);if("color"===e){const e=i[n],s=t[n-1],a=e.color.clone();a.r=Ee(s.color.r,a.r,u),a.g=Ee(s.color.g,a.g,u),a.b=Ee(s.color.b,a.b,u),a.a=Ee(s.color.a,a.a,u),o.push({value:r,color:a,label:e.label})}else if("size"===e){const e=i[n],s=t[n-1],a=f(e.size),l=Ee(f(s.size),a,u);o.push({value:r,size:l,label:e.label})}else{const e=i[n],s=Ee(t[n-1].opacity,e.opacity,u);o.push({value:r,opacity:s,label:e.label})}}return[r,...o,n]}(e,t);return function(e){const[t,...r]=e,i=r.pop();for(;r.length>6;){let e=0,t=0;for(let i=1;i<r.length;i++){const n=r[i-1],s=r[i],a=Math.abs(s.value-n.value);a>t&&(t=a,e=i)}r.splice(e,1)}return[t,...r,i]}(t)}(e.type,e.stops),e}function Ee(e,t,r){return(1-r)*e+r*t}const je=i.getLogger("esri.views.2d.layers.features.schemaUtils"),Te={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function Fe(e){return U(e)}function Re(e){switch(e.type){case"line-marker":var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style};default:return m(e.toJSON()).toJSON()}}function ke(e,t,r){if(!e)return null;let i=0,s=!1,a=0;switch(n(t)&&(a=de(t),"visualVariables"in t&&(i=function(e){if(!e)return O.NONE;let t=0;for(const r of e)if("size"===r.type){const e=J(r);t|=e,"outline"===r.target&&(t|=e<<4)}else"color"===r.type?t|=O.COLOR:"opacity"===r.type?t|=O.OPACITY:"rotation"===r.type&&(t|=O.ROTATION);return t}(t.visualVariables||[]),s="dot-density"===t.type)),e.type){case"simple-fill":case"picture-fill":return function(e,t,r,i){const n=L(P.FILL,t,!1,r),s=i?Fe(n):n,a=e.clone(),l=a.outline;a.outline=null;const o=[],u={materialKey:s,hash:a.hash(),...Re(a)};if(o.push(u),l){const e=L(P.LINE,t,!0,!1),r={materialKey:i?Fe(e):e,hash:l.hash(),...Re(l)};o.push(r)}return{type:"composite-symbol",layers:o,hash:o.reduce(((e,t)=>t.hash+e),"")}}(e,i,s,r);case"simple-marker":case"picture-marker":return function(e,t,r,i){const n=L(P.MARKER,t,!1,!1),s=i?Fe(n):n,a=Re(e);return{materialKey:s,hash:e.hash(),...a,angle:e.angle,maxVVSize:r}}(e,i,a,r);case"simple-line":return function(e,t,r){const i=L(P.LINE,t,!1,!1),n=r?Fe(i):i,s=e.clone(),a=s.marker;s.marker=null;const l=[];if(l.push({materialKey:n,hash:s.hash(),...Re(s)}),a){var o;const e=L(P.MARKER,t,!1,!1),i=r?Fe(e):e;a.color=null!=(o=a.color)?o:s.color,l.push({materialKey:i,hash:a.hash(),lineWidth:s.width,...Re(a)})}return{type:"composite-symbol",layers:l,hash:l.reduce(((e,t)=>t.hash+e),"")}}(e,i,r);case"text":return function(e,t,r,i){const n=L(P.TEXT,t,!1,!1),s=i?Fe(n):n,a=Re(e);return{materialKey:s,hash:e.hash(),...a,angle:e.angle,maxVVSize:r}}(e,i,a,r);case"label":return function(e,t,r){const i=L(P.LABEL,t,!1,!1,e.labelPlacement);return{materialKey:r?Fe(i):i,hash:e.hash(),...e.toJSON(),labelPlacement:e.labelPlacement}}(e,i,r);case"cim":return{type:"cim",rendererKey:i,data:e.data,maxVVSize:a};case"web-style":return{...Re(e),type:"web-style",hash:e.hash(),rendererKey:i,maxVVSize:a};default:throw new Error(`symbol not supported ${e.type}`)}}function Ne(e,r){const i=t(e);return i.some((e=>function(e,t){const r=e.labelPlacement,i=Te[t];if(!e.symbol)return je.warn("No LabelClass symbol specified."),!0;if(!i)return je.error(new a("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!i.some((e=>e===r))){const n=i[0];r&&je.warn(`Found invalid label placement type ${r} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,r)))?[]:i}function Oe(t){return e("esri-2d-update-debug")&&console.debug("Created new schema",Pe(t,!0)),Pe(t)}function Pe(e,t=!1){try{var r,i;const n=function(e,t=!1){const r=new Array;return r.push(function(e,t,r=!1){const i={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,s=n?"aggregate":"feature";switch(e.renderer.type){case"heatmap":{const{blurRadius:t,fieldOffset:r,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:i,target:s,storage:null,mesh:{blurRadius:t,fieldOffset:r,field:Be(i,{target:s,field:n,resultType:"numeric"}).field}}}default:{const t=[],l="aggregate"===s?N(t,e.renderer,n,null):e.renderer;!function(e,t){const r={mesh:!0,storage:!0};for(const i of t){const{name:t,outStatistic:n}=i,{statisticType:s,onStatisticField:a}=n;let l=null,o=null,u=null;const c="numeric",f="feature";if("onStatisticValueExpression"in n){o=Je(e,{type:"expression",target:f,valueExpression:n.onStatisticValueExpression,resultType:c}).fieldIndex}else if("onStatisticNormalizationField"in n){l=Je(e,{type:"field",target:f,field:a,resultType:c}).field,u=n.onStatisticNormalizationField}else{l=Je(e,{type:"field",target:f,field:a,resultType:c}).field}Je(e,{type:"statistic",target:"aggregate",name:t,context:r,inField:l,inNormalizationField:u,inFieldIndex:o,statisticType:s})}}(i,t);const o=Ae(i,s,l,r);let u=null;const c=function(e,t,r){switch(r.type){case"dot-density":return function(e,t,r){if(!r||!r.length)return{type:"dot-density",mapping:[],target:t};return{type:"dot-density",mapping:r.map(((r,i)=>{const{field:n,fieldIndex:s}=Be(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t});return{binding:i,field:n,fieldIndex:s}})),target:t}}(e,t,r.attributes);case"simple":case"class-breaks":case"unique-value":return function(e,t,r){if(!r||!r.length)return{type:"visual-variable",mapping:[],target:t};const i={storage:!0},n="numeric";return{type:"visual-variable",mapping:ze(r).map((r=>{var s;const a=C(r.type),{field:l,fieldIndex:o}=Be(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:i,resultType:n});switch(r.type){case"size":return"$view.scale"===r.valueExpression?null:{type:"size",binding:a,field:l,fieldIndex:o,normalizationField:Be(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field,valueRepresentation:null!=(s=r.valueRepresentation)?s:null};case"color":return{type:"color",binding:a,field:l,fieldIndex:o,normalizationField:Be(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"opacity":return{type:"opacity",binding:a,field:l,fieldIndex:o,normalizationField:Be(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"rotation":return{type:"rotation",binding:a,field:l,fieldIndex:o}}})).filter((e=>e)),target:t}}(e,t,r.visualVariables);case"heatmap":case"dictionary":return null}}(i,s,l),f=B(e.geometryType);let m=e.labelsVisible&&e.labelingInfo||[],d=[];if(n){if("selection"===n.type)throw new a("ValidationError","Mapview does not support `selection` reduction type",n);if(n.symbol){const e=new y({symbol:n.symbol,visualVariables:"visualVariables"in l?l.visualVariables:null});u=Ae(i,s,e,r)}d=n&&n.labelsVisible&&n.labelingInfo||[]}m=Ne(m,f),d=Ne(d,f);let p=0;const h=[...m.map((e=>Ke(l,i,e,"feature",p++,r))),...d.map((e=>Ke(l,i,e,"aggregate",p++,r)))];return{type:"symbol",target:s,attributes:i,aggregateFields:t,storage:c,mesh:{matcher:o,labels:h,aggregateMatcher:u}}}}}(e,t)),r}(e,t),s={};n.map((t=>function(e,t,r){switch(r.target){case"feature":return void Ue(e,Le(t),r);case"aggregate":{const i=t.featureReduction;if("selection"===i.type)throw new a("ValidationError","Mapview does not support `selection` reduction type",i);return Ue(e,Le(t),r),void function(e,t,r){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:c(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(c(t.clusterMaxSize)/64),fields:r.aggregateFields}});Ce(e.aggregate,r.attributes.fields)}(e,i,r)}}}(s,e,t)));return{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(r=e.historicMoment)?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(i=e.timeExtent)?void 0:i.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:s}}catch(e){if("ValidationError"===e.fieldName)return je.error(e),null;throw e}}function Ce(e,t){for(const r in t){const i=t[r];if(i.target!==e.name)continue;const n=e.attributes[r];n?(n.context.mesh=n.context.mesh||i.context.mesh,n.context.storage=n.context.storage||i.context.storage):e.attributes[r]=i}return e}function Le(e){var t,r,i,n,s;return[null!=(t=null==(r=e.filter)?void 0:r.toJSON())?t:null,null!=(i=null==(n=e.effect)||null==(s=n.filter)?void 0:s.toJSON())?i:null]}function Ue(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),Ce(e.feature,r.attributes.fields),e}function Be(e,t){return t.field?Je(e,{...t,type:"field",field:t.field}):t.valueExpression?Je(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function Je(e,t){switch(t.type){case"expression":{const r=t.valueExpression;if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i}}return{fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=JSON.stringify(t.label);if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i}}return{fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return"aggregate"===t.target&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function Ke(e,t,r,i,n,s=!1){const a=Je(t,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),{fieldIndex:l}=a;return{...ke(r,e,s),fieldIndex:l,target:i,index:n}}function Ae(e,t,r,i=!1){const n=s(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return function(e,t,r,i=!1){const n=t.getSymbols();return{type:"simple",symbol:ke(n.length?n[0]:null,t,i),isDotDensity:r}}(0,r,"dot-density"===r.type,i);case"class-breaks":return function(e,t,r,i=!1){const n={mesh:!0,use:"renderer.field"},s=r.backgroundFillSymbol,{field:a,fieldIndex:l}=Be(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:n}),o=r.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,c=r.classBreakInfos.map((e=>({symbol:ke(e.symbol,r,i),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:a,fieldIndex:l,backgroundFillSymbol:ke(s,r,i),defaultSymbol:ke(r.defaultSymbol,r,i),intervals:c,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:u,isMaxInclusive:r.isMaxInclusive}}(n,t,r,i);case"unique-value":return function(e,t,r,i=!1){const n=[],s=r.backgroundFillSymbol,l={target:t,context:{mesh:!0},resultType:"string"};if(r.field&&"string"!=typeof r.field)throw new a("ValidationError","Expected renderer.field to be a string",r);const{field:o,fieldIndex:u}=Be(e,{...l,field:r.field,valueExpression:r.valueExpression});for(const e of r.uniqueValueInfos)n.push({value:""+e.value,symbol:ke(e.symbol,r,i)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:Be(e,{...l,field:r.field2}).field,field3:Be(e,{...l,field:r.field3}).field,fieldDelimiter:r.fieldDelimiter,backgroundFillSymbol:ke(s,r),defaultSymbol:ke(r.defaultSymbol,r),map:n}}(n,t,r,i);case"dictionary":return function(e,t,r=!1){return{type:"dictionary",renderer:t.toJSON()}}(0,r,i)}}export{H as P,G as T,Y as a,ue as b,le as c,ae as d,oe as e,Z as f,X as g,Ae as h,Q as i,W as j,ke as k,pe as l,Oe as m,Se as s};