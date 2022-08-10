/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{clone as e}from"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{i as s}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import o from"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import{fetchMessageBundle as t}from"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../Basemap.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../chunks/basemapUtils.js";import"../../renderers/PointCloudRenderer.js";import"../../chunks/PointSizeSplatAlgorithm.js";import{a as r}from"../../chunks/LegendOptions.js";import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/PointCloudStretchRenderer.js";import i from"../../renderers/PointCloudUniqueValueRenderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../tasks/support/ColorRamp.js";import"../../tasks/support/AlgorithmicColorRamp.js";import"../../tasks/support/MultipartColorRamp.js";import"../../chunks/colorRamps.js";import"../../renderers/Renderer.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/VisualVariablesMixin.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/jsonUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/ClassBreaksRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import l from"../../renderers/UniqueValueRenderer.js";import"../../chunks/normalizeUtilsCommon.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/MemCache.js";import"../../chunks/LRUCache.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import"../../core/watchUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../chunks/zscale.js";import"../../chunks/queryZScale.js";import"../../layers/support/Field.js";import"../../tasks/support/FeatureSet.js";import"../../chunks/DataLayerSource.js";import"../../tasks/support/AttachmentQuery.js";import"../../tasks/support/Query.js";import"../../tasks/support/StatisticDefinition.js";import"../../tasks/support/RelationshipQuery.js";import"../../chunks/ClassBreaksDefinition.js";import{c as p,g as n}from"../../chunks/layerUtils2.js";import"../../chunks/utils4.js";import"../../tasks/Task.js";import"../../rest/query/support/AttachmentInfo.js";import"../../chunks/query.js";import"../../chunks/executeRelationshipQuery.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/featureConversionUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import{a}from"../../chunks/utils5.js";import"../../chunks/quantizationUtils.js";import"../../chunks/predominanceUtils.js";import"../../chunks/heatmapUtils.js";import"../heuristics/scaleRange.js";import m from"../heuristics/sizeRange.js";import"../../chunks/numberUtils.js";import{a as u,b as c}from"../../chunks/utils7.js";import"../statistics/summaryStatistics.js";import{o as j,b as y,v as d,i as h,d as b,m as f,n as k,l as g,p as S}from"../../chunks/utils8.js";import"../statistics/classBreaks.js";import"../../views/support/colorUtils.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils9.js";import v from"../statistics/uniqueValues.js";import{cloneScheme as w,getSchemes as U}from"../symbology/type.js";async function I(e){let o=e.typeScheme,t=null,r=null;const i=await S(e.basemap,e.view);if(t=s(i.basemapId)?i.basemapId:null,r=s(i.basemapTheme)?i.basemapTheme:null,o)return{scheme:w(o),basemapId:t,basemapTheme:r};const l=U({basemap:t,basemapTheme:r,geometryType:e.geometryType,theme:e.theme,worldScale:e.worldScale,view:e.view});return l&&(o=l.primaryScheme,t=l.basemapId,r=l.basemapTheme),{scheme:o,basemapId:t,basemapTheme:r}}function T(e,s){let o;return o=e.label<s.label?-1:e.label>s.label?1:0,o}function V(e,s){let o;return o=e.value<s.value?-1:e.value>s.value?1:0,o}function M(e,s){let o=s.count-e.count;return 0===o&&(o=T(e,s)),o}function C(e,s){let o=s.count-e.count;return 0===o&&(o=V(e,s)),o}function E(e,s,o){let t;"count"===s?(t=C,o&&o.codedValues&&(t=M)):"value"===s&&(t=V,o&&o.codedValues&&(t=T)),t&&e.sort(t)}async function x(e,s){const o=e.uniqueValueInfos,t=await I({basemap:"gray",theme:"point-cloud-class",geometryType:"point",typeScheme:s}),r=t&&t.scheme,i="point-cloud-class"===r.theme,l=i?r.colors:b(r.colors,o.length);return E(o,"value"),o.map(((e,s)=>{const o=e.value;let t=null;return i?(t=l[o],t||(t=l[l.length-1])):t=l[s],{values:[o],color:t,label:e.label}}))}async function D(i){const y=await async function(t){if(!t||!t.layer||!t.field&&!t.valueExpression)throw new o("type-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(t.valueExpression&&!t.view)throw new o("type-renderer:missing-parameters","View is required when 'valueExpression' is specified");const r={...t};r.symbolType=r.symbolType||"2d",r.numTypes=null==r.numTypes?10:r.numTypes,r.defaultSymbolEnabled=null==r.defaultSymbolEnabled||r.defaultSymbolEnabled,r.sortBy=null==r.sortBy?"count":r.sortBy,r.sortEnabled=null==r.sortEnabled||r.sortEnabled,r.statistics=e(r.statistics);const i=[0,2,1,3],l=p(r.layer,i);if(r.layer=l,!l)throw new o("type-renderer:invalid-parameters","'layer' must be one of these types: "+n(i).join(", "));const m=s(r.signal)?{signal:r.signal}:null;await l.load(m);const u=l.geometryType;if(r.outlineOptimizationEnabled="polygon"===u&&r.outlineOptimizationEnabled,r.sizeOptimizationEnabled=("point"===u||"multipoint"===u||"polyline"===u)&&r.sizeOptimizationEnabled,"mesh"===u)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==u)throw new o("type-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new o("type-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const c=await a({field:r.field,valueExpression:r.valueExpression}),j=d(l,c,"type-renderer:invalid-parameters");if(j)throw j;return r}(i),{layer:h,view:S,signal:U}=y,T={layer:h,field:y.field,valueExpression:y.valueExpression,returnAllCodedValues:y.returnAllCodedValues,view:S,signal:U},[V,M,C]=await Promise.all([null!=y.statistics?y.statistics:v(T),y.outlineOptimizationEnabled?j({layer:h,view:S,signal:U}):null,y.sizeOptimizationEnabled?m({layer:h,view:S,signal:U}):null]);return async function(e,s,o,i){const p=await t("esri/smartMapping/t9n/smartMapping"),n=e.uniqueValueInfos,a=s.layer,m=s.field,j=m?a.getField(m):null,y=j?a.getFieldDomain(j.name):null,d=-1===s.numTypes?n.length:s.numTypes,h=a.geometryType,S=await I({basemap:s.basemap,geometryType:h,typeScheme:s.typeScheme,worldScale:s.symbolType.indexOf("3d-volumetric")>-1,view:s.view}),v=S.scheme,U=new l({field:m});let T,V=-1;const M={value:null,domain:y,fieldInfo:j};if(n.forEach(((e,s)=>{M.value=e.value,e.label=u(M),null===e.value&&(V=s)})),V>-1&&(T=n.splice(V,1)[0]),!1!==s.sortEnabled&&E(n,s.sortBy,y),j&&"date"===j.type){const e=n.filter(((e,s)=>s<d)).map((e=>e.value));M.dateFormatInterval=c(e)}const C=o&&o.opacity;let x=b(v.colors,n.length);const D=f(v,h),z=k(v,h,C);n.forEach(((e,o)=>{M.value=e.value,e.label=u(M),e.symbol=g(h,{type:s.symbolType,color:x[o],size:D,outline:z,meshInfo:{colorMixMode:s.colorMixMode,edgesType:s.edgesType}})})),s.valueExpression&&(U.valueExpression=s.valueExpression,U.valueExpressionTitle=s.valueExpressionTitle),s.legendOptions&&(U.legendOptions=new r(s.legendOptions)),x=b(v.colors,d);for(let e=0;e<d;e++){const o=n[e];o&&U.addUniqueValueInfo({value:o.value,label:o.label,symbol:g(h,{type:s.symbolType,color:x[e],size:D,outline:z,meshInfo:{colorMixMode:s.colorMixMode,edgesType:s.edgesType}})})}s.defaultSymbolEnabled&&(U.defaultSymbol=g(h,{type:s.symbolType,color:v.noDataColor,size:D,outline:z,meshInfo:{colorMixMode:s.colorMixMode,edgesType:s.edgesType}}),U.defaultLabel=p.other),T&&(T.symbol=g(h,{type:s.symbolType,color:v.noDataColor,size:D,outline:z,meshInfo:{colorMixMode:s.colorMixMode,edgesType:s.edgesType}}),n.push(T));const P=[],R=U.uniqueValueInfos.length===n.length?-1:U.uniqueValueInfos.length;if(R>-1)for(let e=R;e<n.length;e++)P.push({...n[e]});return o&&o.visualVariables&&o.visualVariables.length&&(U.visualVariables=o.visualVariables.map((e=>e.clone()))),i&&i.minSize&&(U.visualVariables?U.visualVariables.push(i.minSize):U.visualVariables=[i.minSize]),{renderer:U,uniqueValueInfos:n,excludedUniqueValueInfos:P,typeScheme:w(v),basemapId:S.basemapId,basemapTheme:S.basemapTheme}}(V,y,M,C)}async function z(t){const r=await async function(t){if(!(t&&t.layer&&t.field))throw new o("type-point-cloud-class-renderer:missing-parameters","'layer' and 'field' parameters are required");const r={...t};r.statistics=e(r.statistics);const i=[4],l=p(r.layer,i);if(r.layer=l,r.density=r.density||25,r.size=r.size||"100%",!h(r.size))throw new o("type-point-cloud-class-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");if(!l)throw new o("type-point-cloud-class-renderer:invalid-parameters","'layer' must be one of these types: "+n(i).join(", "));const m=s(r.signal)?{signal:r.signal}:null;await l.load(m);const u=await a({field:r.field}),c=d(l,u,"type-point-cloud-class-renderer:invalid-parameters");if(c)throw c;return r}(t),l=null!=r.statistics?r.statistics:await v({layer:r.layer,field:r.field,signal:r.signal});return{renderer:new i({field:r.field,pointsPerInch:r.density,pointSizeAlgorithm:y(r.size),colorUniqueValueInfos:await x(l,r.typeScheme)})}}export{z as createPCClassRenderer,D as createRenderer};
