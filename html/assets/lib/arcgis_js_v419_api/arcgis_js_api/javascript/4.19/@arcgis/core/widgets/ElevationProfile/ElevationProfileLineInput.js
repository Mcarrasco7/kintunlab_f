/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{b as t,e as o,c as r}from"../../chunks/Logger.js";import"../../chunks/string.js";import{h as s}from"../../chunks/metadata.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../chunks/JSONSupport.js";import"../../chunks/asyncUtils.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/colorUtils.js";import p from"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import{on as a}from"../../core/watchUtils.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/projection.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/vec4f64.js";import"../../layers/support/ElevationSampler.js";import{d as c}from"../../chunks/elevationInfoUtils.js";import{h as l,m}from"../../chunks/ElevationProfileLine.js";import{GeometryDescriptor as u}from"../../chunks/ElevationQuery.js";let h=class extends l{constructor(e){super(e),this.type="input",this.color=new p("#00c8c8"),this.numSamplesForPreview=50,this.numSamplesPerChunk=500,this.chartFillEnabled=!1,this.chartStrokeOffsetY=-1,this._getQueryElevationDependencies=m(((e,t,r,s,i)=>o(e,(e=>({elevationInfo:e,visibleLayers:t,view:r,stationary:s,spatialReference:i})))))}get queryElevationDependencies(){const e=this._viewModel.view;return t(e)?null:this._getQueryElevationDependencies(this._elevationInfo,this._visibleLayers,e,e.stationary,e.spatialReference)}get available(){return!this._viewModel.inputIsSketched}get _elevationInfo(){return o(this._viewModel.input,c)}get _visibleLayers(){var e;const t=null==(e=this._viewModel)?void 0:e.view,s=o(t,(e=>{var t,o;return null==(t=e.map)||null==(o=t.allLayers)?void 0:o.filter((e=>e.visible)).toArray()}));return r(s,[])}async queryElevation(e,{noDataValue:o,signal:s}){const i=this.queryElevationDependencies;if(t(i))throw new Error("ElevationProfileLineInput: no dependencies");const{view:n,elevationInfo:p,spatialReference:a}=i;if("on-the-ground"===p.mode&&"3d"===n.type){const t=await u.fromGeometry(e).project(a,s),i=n.elevationProvider;return t.coordinates.forEach((e=>{e.z=r(i.getElevation(e.x,e.y,0,a,"ground"),0)})),{geometry:t.export(),noDataValue:o}}return{geometry:e,noDataValue:o}}attach(e){const t=()=>this._onChange();return s([super.attach(e),this.watch("queryElevationDependencies",t),a(e,"view.elevationProvider","elevation-change",t)])}};e([i({type:p,nonNullable:!0})],h.prototype,"color",void 0),e([i()],h.prototype,"queryElevationDependencies",null),e([i()],h.prototype,"available",null),e([i()],h.prototype,"_elevationInfo",null),e([i()],h.prototype,"_visibleLayers",null),h=e([n("esri.widgets.ElevationProfile.ElevationProfileLineInput")],h);var j=h;export default j;