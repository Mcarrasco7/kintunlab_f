/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{clone as t}from"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{L as i,i as r}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import o from"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import{a as l}from"../../chunks/number.js";import{substitute as a}from"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import u from"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../chunks/Identifiable.js";import{a as c}from"../../chunks/unitUtils.js";import"../../chunks/scaleUtils.js";import d from"./SearchSource.js";import{c as p,s as m}from"../../chunks/geometryUtils3.js";const h=/https?:\/\/services.*\.arcgis\.com/i,g=/(?:\{([^}]+)\})/g,f=i.getLogger("esri.widgets.Search.support.layerSearchUtils");function y(e,i){const{exactMatch:s=!1,location:n,maxResults:l,spatialReference:a,source:d,sourceIndex:h,suggestResult:g,view:y}=e,{layer:j,filter:E,zoomScale:L}=d,I=y&&y.scale,U=F(d,y),_=i&&i.signal;return x(j).then((()=>{const e=j.popupTemplate;return e?e.getRequiredFields(j.fields):null})).then((e=>{var i,F;const{objectIdField:x,returnZ:M}=j,O=w(d);if(!k(j,O))throw f.error("invalid-field: displayField is invalid."),new o("getResults():invalid-field","displayField is invalid.");const D=e&&e.length?e:[O],N=d.outFields||D,C=v(N);-1!==N.indexOf(x)||C||N.push(x);if(!(C||b(j,N)))throw f.error("invalid-field: outField is invalid."),new o("getResults():invalid-field","outField is invalid.");const P=j.createQuery(),{orderByFields:A}=d;if(A&&(P.orderByFields=A),a){P.outSpatialReference=a;const e=1/c(a);e&&(P.maxAllowableOffset=e)}const B="mesh"===j.geometryType||"multipatch"===j.geometryType,q=(null==(i=j.capabilities)||null==(F=i.data)?void 0:F.supportsZ)&&!B;if(P.returnZ=q&&!1!==M,P.returnGeometry=!0,P.multipatchOption=B?"xyFootprint":null,N&&(P.outFields=N),n)P.geometry=n;else if(g.key)P.objectIds=[parseInt(g.key,10)];else{const e=d.searchFields||[O];if(!b(j,e))throw f.error("invalid-field: search field is invalid."),new o("getResults():invalid-field","search field is invalid.");S(j)&&(P.num=l),U&&(P.geometry=U);if(!g.text.trim())return[];const{prefix:t="",suffix:i=""}=d,r=T($(`${t}${g.text}${i}`),j,e,E,s);if(!r)return[];P.where=r}return j.queryFeatures(P,{signal:_}).then((e=>function(e,i,s,o,n,l,a){return e.features.map((e=>function(e,i,s,o,n,l,a){const c=e.clone(),d=e.sourceLayer,h=d&&d.objectIdField,g=h&&e.attributes[h],f=R(e,s.searchTemplate,n),y=p(c.geometry,i,l),j="number"==typeof a?m(t(y),i,a):y,F=e.clone();r(j)&&(F.geometry=u.fromExtent(j));return{extent:j,target:F,feature:c,key:g,name:f,sourceIndex:o}}(e,i,s,o,n,l,a)))}(e,y,d,h,O,I,L)))}))}function j(e,t){const{source:i,spatialReference:r,view:s,suggestTerm:n,maxSuggestions:l,sourceIndex:a}=e,{layer:u,filter:c}=i,d=t&&t.signal,p=F(i,s);return x(u).then((()=>{if(!S(u))return[];const e=w(i),t=i.searchFields||[e],s=[];i.suggestionTemplate?i.suggestionTemplate.replace(g,((e,t)=>(s.push(t),e))):s.push(e);const m=v(s);-1!==s.indexOf(u.objectIdField)||m||s.push(u.objectIdField);const h=k(u,e),y=m||b(u,s),j=b(u,t);if(!h)throw f.error("invalid-field: displayField is invalid."),new o("getSuggestions():invalid-field","displayField is invalid.");if(!y)throw f.error("invalid-field: outField is invalid."),new o("getSuggestions():invalid-field","outField is invalid.");if(!j)throw f.error("invalid-field: search field is invalid."),new o("getSuggestions():invalid-field","search field is invalid.");const F=u.createQuery(),{orderByFields:x}=i;x&&(F.orderByFields=x),F.outSpatialReference=r,F.returnGeometry=!1,F.num=l,F.outFields=s,p&&(F.geometry=p);if(!n.trim())return[];const{prefix:E="",suffix:L=""}=i,I=T($(`${E}${n}${L}`),u,t,c,!1);return I?(F.where=I,u.queryFeatures(F,{signal:d}).then((t=>function(e,t,i,r){return e.features.map((e=>function(e,t,i,r){const s=e.sourceLayer,{attributes:o}=e,{objectIdField:n}=s,l=o[n];return{text:R(e,t.suggestionTemplate,r),key:l,sourceIndex:i}}(e,t,i,r)))}(t,i,a,e)))):[]}))}function F(e,t){const{filter:i,withinViewEnabled:r}=e,s=t&&t.extent;return i&&i.geometry||(r&&s?s:void 0)}function v(e){return e&&-1!==e.indexOf("*")}async function x(e){e&&await e.load()}function S(e){var t,i,r;return null!=(t=null==e||null==(i=e.capabilities)||null==(r=i.query)?void 0:r.supportsPagination)&&t}function w(e){return e.displayField||e.layer.displayField||function(e){let t="";if(e){const{fields:i}=e;i&&i.some((e=>"string"===e.type&&(t=e.name,!0)))}return t}(e.layer)}function b(e,t){return!(!e||!t)&&t.every((t=>k(e,t)))}function k(e,t){return!!e.getField(t)}function $(e){return e.replace(/\'/g,"''")}function E(e,t){const i=t&&t.where;return i?`(${e}) AND (${i})`:e}function T(e,t,i,r,s){const{definitionExpression:o}=t;let n="";if(e){const o=h.test(t.url)&&function(e){for(let t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return!0;return!1}(e)?"N":"";i&&i.forEach((i=>{const l=t.getField(i),a="function"==typeof t.getFieldDomain&&t.getFieldDomain(i),u=(a&&"coded-value"===a.type?function(e,t,i){let r=null;const{codedValues:s}=e;return s&&s.some((e=>{const s=e.name,o=i?s:s.toLowerCase();return(i?t:t.toLowerCase())===o&&(r=e.code.toString(),!0)})),r}(a,e,s):null)||e||null;if(null!==u){const e=function(e,t,i,r,s){const o=t.type,n=t.name;if("string"===o||"date"===o||"global-id"===o)return E(s?`${n} = ${i}'${e}'`:`UPPER(${n}) LIKE ${i}'%${e.toUpperCase()}%'`,r);if("oid"===o||"small-integer"===o||"integer"===o||"single"===o||"double"===o){const t=Number(e);return isNaN(t)?null:E(`${n} = ${t}`,r)}return E(`${n} = ${e}`,r)}(u,l,o,r,s);e&&(n+=function(e,t){return e?` OR (${t})`:`(${t})`}(n,e))}}))}return o?`(${o}) AND (${n})`:n}function R(e,t,i){const r=e.sourceLayer,{attributes:s}=e,o="function"==typeof r.getFieldDomain&&r.getFieldDomain(i);if(t)return a(t,s);if(i&&s){const e=r.getField(i),t=(u=i,(n=s)[Object.keys(n).find((e=>e.toLowerCase()===u.toLowerCase()))]);return null==t?"":o&&"coded-value"===o.type?function(e,t){let i=null;const{codedValues:r}=e;return r&&r.length&&r.some((e=>e.code===t&&(i=e.name,!0))),i}(o,t):"date"===(null==e?void 0:e.type)?l(new Date(t)):"number"==typeof t?t.toString():"string"!=typeof t?"":t.trim()}var n,u;return""}var L;let I=L=class extends d{constructor(){super(...arguments),this.displayField=null,this.exactMatch=null,this.orderByFields=null,this.searchFields=null,this.searchTemplate=null,this.suggestionTemplate=null,this.getResults=(e,t)=>y({source:this,...e},t),this.getSuggestions=(e,t)=>j({source:this,...e},t)}set layer(e){this._set("layer",e),e&&e.load().catch((()=>{}))}get name(){return this._getLayerTitle()||""}set name(e){void 0!==e?this._override("name",e):this._clearOverride("name")}clone(){return new L({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?t(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,layer:this.layer,searchFields:this.searchFields?t(this.searchFields):null,suggestionTemplate:this.suggestionTemplate,zoomScale:this.zoomScale})}_getFirstStringField(){const e=this.layer;let t="";return e&&e.fields&&e.fields.some((e=>"string"===e.type&&(t=e.name,!0))),t}_getDisplayField(){return this.displayField||this.layer.displayField||this._getFirstStringField()}_getSearchFieldsString(){const{layer:e,searchFields:t}=this;if(!e.loaded)return"";return`: ${(t||[this._getDisplayField()]).map((t=>{const i=e.getField(t);return i&&i.alias||t})).join(", ")}`}_getLayerTitle(){const{layer:e}=this;if(!e)return;const{title:t}=e;return t?`${t}${this._getSearchFieldsString()}`:void 0}};e([s({json:{read:{source:"field.name"},write:{target:"field.name"}}})],I.prototype,"displayField",void 0),e([s({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],I.prototype,"exactMatch",void 0),e([s({value:null})],I.prototype,"layer",null),e([s()],I.prototype,"name",null),e([s({type:[String],json:{write:!0}})],I.prototype,"orderByFields",void 0),e([s()],I.prototype,"searchFields",void 0),e([s()],I.prototype,"searchTemplate",void 0),e([s()],I.prototype,"suggestionTemplate",void 0),I=L=e([n("esri.widgets.Search.LayerSearchSource")],I);var U=I;export default U;
