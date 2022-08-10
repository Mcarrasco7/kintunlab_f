/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../core/lang.js";import"../../../chunks/deprecate.js";import"../../../chunks/object.js";import"../../../kernel.js";import"../../../config.js";import"../../../chunks/Logger.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../core/Accessor.js";import"../../../chunks/PropertyOrigin.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../chunks/Message.js";import"../../../core/Error.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/ensureType.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/Evented.js";import"../../../core/Collection.js";import"../../../chunks/collectionUtils.js";import"../../../chunks/JSONSupport.js";import"../../../chunks/Promise.js";import"../../../chunks/Loadable.js";import"../../../core/urlUtils.js";import"../../../core/accessorSupport/decorators/aliasOf.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../chunks/jsonMap.js";import"../../../chunks/enumeration.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../chunks/resourceExtension.js";import"../../../chunks/persistableUrlUtils.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/locale.js";import"../../../chunks/number.js";import"../../../intl.js";import"../../../request.js";import"../../../chunks/assets.js";import"../../../geometry/Geometry.js";import"../../../geometry/Point.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Extent.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalUser.js";import"../../../portal/Portal.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../portal/PortalItem.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../chunks/vec3.js";import"../../../chunks/colorUtils.js";import"../../../Color.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Multipoint.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../geometry.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/domains.js";import"../../../chunks/arcadeOnDemand.js";import"../../../layers/support/fieldUtils.js";import"../../../popup/content/Content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/CustomContent.js";import"../../../chunks/date.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/FieldInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../chunks/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/TextContent.js";import"../../../popup/content.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../chunks/Identifiable.js";import"../../../support/actions/ActionBase.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../PopupTemplate.js";import"../../../symbols/Symbol.js";import"../../../symbols/CIMSymbol.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/screenUtils.js";import"../../../chunks/opacityUtils.js";import"../../../chunks/materialUtils.js";import"../../../symbols/edges/Edges3D.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/utils.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../chunks/colors.js";import"../../../chunks/Symbol3DOutline.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/Thumbnail.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../chunks/Symbol3DVerticalOffset.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureFillSymbol.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../symbols.js";import"../../../chunks/uid.js";import"../../../Graphic.js";import"../../../core/Handles.js";import"../../../chunks/CollectionFlattener.js";import"../../../layers/Layer.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../renderers/support/AuthoringInfo.js";import"../../../renderers/support/AuthoringInfoVisualVariable.js";import"../../../tasks/support/ColorRamp.js";import"../../../tasks/support/AlgorithmicColorRamp.js";import"../../../tasks/support/MultipartColorRamp.js";import"../../../chunks/colorRamps.js";import"../../../renderers/Renderer.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../renderers/visualVariables/ColorVariable.js";import"../../../renderers/visualVariables/support/OpacityStop.js";import"../../../renderers/visualVariables/OpacityVariable.js";import"../../../renderers/visualVariables/RotationVariable.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../renderers/visualVariables/SizeVariable.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../chunks/VisualVariablesMixin.js";import"../../../chunks/symbolConversion.js";import"../../../symbols/support/jsonUtils.js";import"../../../renderers/support/ClassBreakInfo.js";import"../../../chunks/commonProperties.js";import"../../../renderers/ClassBreaksRenderer.js";import"../../../chunks/colorUtils2.js";import"../../../chunks/diffUtils.js";import"../../../renderers/support/UniqueValueInfo.js";import"../../../chunks/devEnvironmentUtils.js";import"../../../chunks/styleUtils.js";import"../../../renderers/UniqueValueRenderer.js";import"../../../chunks/MemCache.js";import"../../../chunks/LRUCache.js";import"../../../renderers/DictionaryRenderer.js";import"../../../renderers/support/AttributeColorInfo.js";import"../../../renderers/DotDensityRenderer.js";import"../../../renderers/support/HeatmapColorStop.js";import"../../../renderers/HeatmapRenderer.js";import"../../../renderers/SimpleRenderer.js";import"../../../renderers/support/jsonUtils.js";import"../../../chunks/timeUtils.js";import"../../../TimeExtent.js";import"../../../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../../../chunks/MultiOriginJSONSupport.js";import"../../../core/watchUtils.js";import"../../../chunks/arcgisLayerUrl.js";import"../../../chunks/fieldType.js";import"../../../chunks/Version.js";import"../../../geometry/HeightModelInfo.js";import"../../../chunks/mat4.js";import"../../../chunks/pe.js";import"../../../chunks/aaBoundingRect.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/projection.js";import"../../../chunks/OperationalLayer.js";import"../../../chunks/ElevationInfo.js";import"../../../chunks/unitConversionUtils.js";import"../../../chunks/commonProperties2.js";import"../../../chunks/Scheduler.js";import"../../../core/HandleOwner.js";import"../../../chunks/_commonjsHelpers.js";import"../../../core/workers/RemoteClient.js";import"../../../core/workers/Connection.js";import"../../../core/workers/workers.js";import"../../../chunks/vec4f64.js";import"../../../chunks/mat3.js";import"../../../chunks/vec2.js";import"../../../chunks/vec4.js";import"../../../layers/support/LOD.js";import"../../../layers/support/TileInfo.js";import"../../../layers/support/Field.js";import"../../../chunks/ArcGISService.js";import"../../../chunks/BlendLayer.js";import"../../../chunks/CustomParametersMixin.js";import"../../../chunks/PortalLayer.js";import"../../../chunks/RefreshableLayer.js";import"../../../chunks/ScaleRangeLayer.js";import"../../../chunks/labelUtils.js";import"../../../layers/support/LabelClass.js";import"../../../chunks/defaultsJSON.js";import"../../../chunks/defaults.js";import"../../../layers/support/FeatureTemplate.js";import"../../../layers/support/FeatureType.js";import"../../../layers/support/FieldsIndex.js";import"../../../chunks/DataLayerSource.js";import"../../../support/popupUtils.js";import"../../../tasks/support/Query.js";import"../../../tasks/support/StatisticDefinition.js";import"../../../chunks/serviceTileInfoProperty.js";import"../../../chunks/TilemapCache.js";import"../../../chunks/ArcGISCachedService.js";import"../../../chunks/WorkerHandle.js";import"../../../layers/ElevationLayer.js";import"../../../chunks/SublayersOwner.js";import"../../../layers/support/Sublayer.js";import"../../../chunks/sublayerUtils.js";import"../../../layers/TileLayer.js";import"../../../layers/VectorTileLayer.js";import"../../../chunks/TileKey.js";import"../../../chunks/TileIndex.js";import"../../../chunks/jsonContext.js";import"../../../chunks/vec4f32.js";import"../../../chunks/StyleRepository.js";import"../../../chunks/unitBezier.js";import"../../../chunks/definitions.js";import"../../../chunks/capabilities2.js";import"../../../chunks/TerrainConst.js";import"../../../chunks/vec2f64.js";import"../../../chunks/mat3f32.js";import"../../../chunks/FramebufferObject.js";import"../../../chunks/Util.js";import"../../../chunks/VertexArrayObject.js";import{k as s}from"../../../chunks/terrainUtils.js";import"../../../chunks/config.js";import"../../../chunks/VectorTile.js";import"../../../chunks/DisplayObject.js";import"../../../chunks/TiledDisplayObject.js";import"../../../chunks/rasterUtils.js";export default class{constructor(r,o){if(this.layer=null,this.memory=0,this.displayedNumberOfFeatures=0,this.maximumNumberOfFeatures=null,this.totalNumberOfFeatures=null,this.layer=r.layer,this.memory=s(r)?o.basemapTerrain.getUsedMemoryForLayerView(r):r.getUsedMemory(),"performanceInfo"in r){const s=r.performanceInfo;this.displayedNumberOfFeatures=s.displayedNumberOfFeatures,this.maximumNumberOfFeatures=s.maximumNumberOfFeatures,this.totalNumberOfFeatures=s.totalNumberOfFeatures}}}
