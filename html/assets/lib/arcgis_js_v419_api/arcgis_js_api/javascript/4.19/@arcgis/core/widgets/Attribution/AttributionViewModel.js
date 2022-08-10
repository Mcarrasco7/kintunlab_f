/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import r from"../../core/Collection.js";import"../../chunks/JSONSupport.js";import{r as s}from"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import o from"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import{geographicToWebMercator as n,project as a}from"../../geometry/support/webMercatorUtils.js";import{e as c}from"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../core/Handles.js";import{on as h,whenTrue as p}from"../../core/watchUtils.js";import{HandleOwner as u}from"../../core/HandleOwner.js";function m(t,e){return t&&"copyright"in t&&(!e||"function"==typeof t.originOf&&"user"===t.originOf("copyright"))}function l(t,e,i){if(!i||!e)return;t.find((t=>t.layerView===e&&t.text===i))||t.push({text:i,layerView:e})}const d=[];let y=class extends u{constructor(t){super(t),this.clear=()=>{this._fetchedAttributionData.clear(),this._pendingAttributions.clear(),this.handles.remove("suspension"),this.notifyChange("state")},this._pendingAttributions=new Set,this._fetchedAttributionData=new Map,this.items=new r,this.view=null,this._allLayerViewsChange=t=>{this.handles.remove("suspension");const e=this.get("view.allLayerViews");e&&this.handles.add(e.map((t=>t.watch(["suspended","attributionVisible"],this._updateAttributionItems))),"suspension"),t&&t.removed&&t.removed.forEach((t=>{this._pendingAttributions.delete(t),this._fetchedAttributionData.delete(t)})),this._updateAttributionItems()},this._updateAttributionItems=()=>{const t=this.get("view.allLayerViews");var e,i;(d.length=0,t)?(t.forEach((t=>{if(t.suspended||!t.get("layer.attributionVisible"))return;const e=t.layer;if(m(e,"user"))return void l(d,t,e.copyright);if(e.hasAttributionData){if(this._fetchedAttributionData.has(t)){const i=this._fetchedAttributionData.get(t);return void(i?l(d,t,this._getDynamicAttribution(i,this.view,e)):m(e)&&l(d,t,e.copyright))}return void this._fetchAttributionData(t)}const i=e.get("portalItem.accessInformation");l(d,t,i||e.copyright)})),e=this.items,i=d,(e.length!==i.length||e.some(((t,e)=>t.text!==i[e].text)))&&(this.items.removeAll(),this.items.addMany(d)),d.length=0,this.notifyChange("state")):this.clear()},this.handles.add([h(this,"view.allLayerViews","change",this._allLayerViewsChange,this._allLayerViewsChange,this.clear),p(this,"view.stationary",(()=>this._updateAttributionItems()))])}destroy(){this.view=null,this._fetchedAttributionData.clear(),this._pendingAttributions.clear(),this.items.removeAll()}get state(){return this.get("view.ready")?this._pendingAttributions.size>0?"loading":"ready":"disabled"}async _fetchAttributionData(t){if(this._pendingAttributions.has(t))return;this._pendingAttributions.add(t);const e=await s(t.layer.fetchAttributionData());if(this._pendingAttributions.has(t)){const i=e.ok?this._createContributionIndex(e.value,"bing-maps"===t.layer.type):null;this._pendingAttributions.delete(t),this._fetchedAttributionData.set(t,i)}this._updateAttributionItems()}_createContributionIndex(t,e){const i=t.contributors,r={};if(!i)return r;for(let t=0;t<i.length;t++){const s=i[t],a=s.coverageAreas;if(!a)return;for(const i of a){const a=i.bbox,c=i.zoomMin-(e&&i.zoomMin?1:0),h=i.zoomMax-(e&&i.zoomMax?1:0),p={xmin:a[1],ymin:a[0],xmax:a[3],ymax:a[2],spatialReference:o.WGS84},u={extent:n(p),attribution:s.attribution||"",score:null!=i.score?i.score:100,id:t};for(let t=c;t<=h;t++)r[t]=r[t]||[],r[t].push(u)}}return r.maxKey=Math.max.apply(null,Object.keys(r)),r}_getDynamicAttribution(t,e,i){const{extent:r,scale:s}=e;let o=i.tileInfo.scaleToZoom(s);if(o=Math.min(t.maxKey,Math.round(o)),!r||null==o||o<=-1)return"";const n=t[o],h=a(r.center.clone().normalize(),e.spatialReference),p={};return n?n.filter((t=>{const e=!p[t.id]&&h&&c(t.extent,h);return e&&(p[t.id]=!0),e})).sort(((t,e)=>e.score-t.score||t.objectId-e.objectId)).map((t=>t.attribution)).join(", "):""}};t([e({readOnly:!0,type:r})],y.prototype,"items",void 0),t([e({readOnly:!0})],y.prototype,"state",null),t([e()],y.prototype,"view",void 0),y=t([i("esri.widgets.Attribution.AttributionViewModel")],y);var g=y;export default g;