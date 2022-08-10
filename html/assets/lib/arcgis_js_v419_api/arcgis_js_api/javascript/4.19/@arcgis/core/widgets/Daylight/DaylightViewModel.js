/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{u as t}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import{schedule as s}from"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/shared.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import{a as r}from"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../Basemap.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/mathUtils.js";import"../../Camera.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../Ground.js";import"../../core/Handles.js";import"../../chunks/CollectionFlattener.js";import"../../chunks/basemapUtils.js";import"../../Map.js";import"../../layers/Layer.js";import"../../chunks/TablesMixin.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../tasks/support/ColorRamp.js";import"../../tasks/support/AlgorithmicColorRamp.js";import"../../tasks/support/MultipartColorRamp.js";import"../../chunks/colorRamps.js";import"../../renderers/Renderer.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/VisualVariablesMixin.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/jsonUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/ClassBreaksRenderer.js";import"../../chunks/colorUtils2.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/normalizeUtilsCommon.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/MemCache.js";import"../../chunks/ItemCache.js";import"../../chunks/utils3.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils2.js";import"../../chunks/LRUCache.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import"../../TimeInterval.js";import"../../Viewpoint.js";import"../../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../../chunks/MultiOriginJSONSupport.js";import{init as n,watch as a,on as m}from"../../core/watchUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../tasks/support/ProjectParameters.js";import"../../chunks/fieldType.js";import"../../chunks/Version.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/projection.js";import"../../chunks/heightModelInfoUtils.js";import"../../chunks/spatialReferenceSupport.js";import"../../webscene/Lighting.js";import"../../webscene/background/Background.js";import"../../webscene/background/ColorBackground.js";import"../../webscene/Environment.js";import"../../chunks/OperationalLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/commonProperties2.js";import"../../chunks/Scheduler.js";import{HandleOwner as l}from"../../core/HandleOwner.js";import"../../chunks/_commonjsHelpers.js";import"../../core/workers/RemoteClient.js";import"../../core/workers/Connection.js";import"../../core/workers/workers.js";import"../../form/ExpressionInfo.js";import"../../form/elements/FieldElement.js";import"../../form/support/elements.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../form/elements/support/inputs.js";import"../../form/elements/GroupElement.js";import"../../form/FormTemplate.js";import"../../chunks/vec4f64.js";import"../../chunks/screenshotUtils.js";import"../../geometry/support/MeshTexture.js";import"../../geometry/support/MeshMaterial.js";import"../../geometry/support/MeshMaterialMetallicRoughness.js";import"../../geometry/support/MeshComponent.js";import"../../chunks/earcut.js";import"../../chunks/deduplicate.js";import"../../chunks/triangulationUtils.js";import"../../chunks/quatf64.js";import"../../chunks/mat3.js";import"../../chunks/BufferView.js";import"../../chunks/vec2.js";import"../../chunks/vec4.js";import"../../chunks/projection.js";import"../../chunks/vec32.js";import"../../chunks/quat.js";import"../../chunks/domUtils.js";import"../../chunks/widgetUtils.js";import"../../chunks/projector.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../support/widget.js";import"../../chunks/vmEvent.js";import"../../chunks/index.js";import"../Widget.js";import"../../layers/support/LOD.js";import"../../layers/support/TileInfo.js";import"../../chunks/zscale.js";import"../../chunks/queryZScale.js";import"../../layers/support/Field.js";import"../../tasks/support/FeatureSet.js";import"../../layers/FeatureLayer.js";import"../../chunks/ArcGISService.js";import"../../chunks/BlendLayer.js";import"../../chunks/CustomParametersMixin.js";import"../../chunks/PortalLayer.js";import"../../chunks/RefreshableLayer.js";import"../../chunks/ScaleRangeLayer.js";import"../../layers/support/TimeInfo.js";import"../../chunks/TemporalLayer.js";import"../../layers/support/FeatureReductionSelection.js";import"../../layers/support/FeatureReductionCluster.js";import"../../chunks/labelUtils.js";import"../../layers/support/LabelClass.js";import"../../chunks/defaultsJSON.js";import"../../chunks/defaults.js";import"../../chunks/featureReductionUtils.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../chunks/labelingInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/DataLayerSource.js";import"../../chunks/styleUtils2.js";import"../../support/popupUtils.js";import"../../tasks/support/AttachmentQuery.js";import"../../tasks/support/Query.js";import"../../tasks/support/StatisticDefinition.js";import"../../tasks/support/RelationshipQuery.js";import"../../chunks/serviceTileInfoProperty.js";import"../../chunks/TilemapCache.js";import"../../chunks/ArcGISCachedService.js";import"../../chunks/WorkerHandle.js";import"../../layers/ElevationLayer.js";import"../../chunks/GraphicsCollection.js";import"../../chunks/utils4.js";import"../../tasks/Task.js";import"../../rest/query/support/AttachmentInfo.js";import"../../chunks/query.js";import"../../chunks/executeRelationshipQuery.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/featureConversionUtils.js";import"../../tasks/QueryTask.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/scaleUtils.js";import"../../chunks/SublayersOwner.js";import"../../layers/support/Sublayer.js";import"../../chunks/sublayerUtils.js";import"../../layers/TileLayer.js";import"../../layers/VectorTileLayer.js";import"../../chunks/TileKey.js";import"../../chunks/TileIndex.js";import"../../chunks/jsonContext.js";import"../../chunks/vec4f32.js";import"../../chunks/StyleRepository.js";import"../../chunks/unitBezier.js";import"../../chunks/definitions.js";import"../../chunks/capabilities2.js";import"../../layers/support/ElevationSampler.js";import"../../chunks/layerUtils.js";import"../../chunks/quantizationUtils.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df32.js";import"../../chunks/vec2f32.js";import"../../symbols/support/symbolUtils.js";import"../../views/BasemapView.js";import"../../chunks/byteSizeEstimations.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/ElevationProvider.js";import"../../chunks/TerrainConst.js";import"../../views/GroundView.js";import"../../views/Magnifier.js";import"../../chunks/WebGLRequirements.js";import"../../chunks/interactiveToolUtils.js";import"../../chunks/throttle.js";import"../Attachments.js";import"../Attachments/AttachmentsViewModel.js";import"../Feature/FeatureViewModel.js";import"../Feature.js";import"../../chunks/AnchorElementViewModel.js";import"../Spinner/SpinnerViewModel.js";import"../Popup.js";import"../../chunks/Queue.js";import"../../chunks/InputManager.js";import"../../chunks/layerViewUtils.js";import"../../chunks/actions.js";import"../Popup/PopupViewModel.js";import"../../chunks/GoTo.js";import"../../chunks/MapUtils.js";import"../../views/View.js";import"../../chunks/RefreshableLayerView.js";import"../../chunks/screenUtils2.js";import"../../views/input/gamepad/GamepadInputDevice.js";import"../../views/input/gamepad/GamepadSettings.js";import"../../views/input/Input.js";import"../../views/navigation/gamepad/GamepadSettings.js";import"../../views/navigation/Navigation.js";import"../../views/ViewAnimation.js";import"../../chunks/mat2df64.js";import"../../chunks/vec2f64.js";import"../../chunks/viewpointUtils.js";import"../../chunks/mat3f32.js";import"../../views/2d/ViewState.js";import"../../views/ui/UI.js";import"../Attribution/AttributionViewModel.js";import"../Attribution.js";import"../Compass/CompassViewModel.js";import"../Compass.js";import"../NavigationToggle/NavigationToggleViewModel.js";import"../NavigationToggle.js";import"../Zoom.js";import"../Zoom/ZoomViewModel.js";import"../../views/ui/DefaultUI.js";import p,{S as u,p as c,c as h}from"../../views/SceneView.js";import"../../chunks/requestImageUtils.js";import"../../chunks/VertexColor.glsl.js";import"../../chunks/Program.js";import"../../chunks/FramebufferObject.js";import"../../chunks/renderState.js";import"../../chunks/glUtil.js";import"../../chunks/InterleavedLayout.js";import"../../chunks/mat4f32.js";import"../../chunks/vec3f32.js";import"../../chunks/stack.js";import"../../chunks/geometryUtils.js";import"../../chunks/ColorMaterial.js";import"../../chunks/Util.js";import"../../chunks/glUtil3D.js";import"../../chunks/Object3D.js";import"../../chunks/VertexArrayObject.js";import"../../chunks/sdfPrimitives.js";import"../../chunks/lineUtils.js";import"../../chunks/intersectorUtils.js";import"../../chunks/Intersector.js";import"../../chunks/Camera.js";import"../../chunks/resources.js";import"../../chunks/PropertiesPool.js";import"../../chunks/PiUtils.glsl.js";import"../../chunks/GLMaterialTexture.js";import"../../chunks/VerticalOffset.glsl.js";import"../../chunks/labelFormatUtils.js";import"../../chunks/RibbonLineMaterial.js";import"../../chunks/pointUtils.js";import"../../chunks/RenderingContext.js";import"../../chunks/PhysicallyBasedRendering.glsl.js";import"../../chunks/testSVGPremultipliedAlpha.js";import"../../chunks/vec42.js";import"../../chunks/callExpressionWithFeature.js";import"../../chunks/RenderGeometry.js";import"../../chunks/Texture.js";import"../../chunks/NativeLineMaterial.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/objectResourceUtils.js";import"../../chunks/geometryServiceUtils.js";import"../../views/3d/support/SceneViewPerformanceInfo.js";import"../../chunks/terrainUtils.js";import"../../views/3d/support/LayerPerformanceInfo.js";import"../../chunks/config.js";import"../../chunks/VectorTile.js";import"../../chunks/DisplayObject.js";import"../../chunks/TiledDisplayObject.js";import"../../chunks/rasterUtils.js";import"../../chunks/ElevationQueryTileCache.js";import"../../views/layers/LayerView.js";import"../../chunks/tileUtils.js";import"../../chunks/quatf32.js";import"../../chunks/CameraSpace.glsl.js";import"../../chunks/EdgeProcessingWorker.js";import"../../chunks/hitTestSelectUtils.js";import j from"../Slider/SliderViewModel.js";import"../../chunks/MomentElementViewModel.js";import b from"../support/DatePickerViewModel.js";function d(e,t){return new Date(e.getTime()+36e5*t)}var T;!function(e){e[e.NORTHERN=0]="NORTHERN",e[e.SOUTHERN=1]="SOUTHERN"}(T||(T={}));const g={spring:{dayOfMonth:20,month:2},summer:{dayOfMonth:21,month:5},fall:{dayOfMonth:23,month:8},winter:{dayOfMonth:21,month:11}},y=["spring","summer","fall","winter"];function k(e,t,i){const s=new Date(e.getTime()),o=U(t,i),{dayOfMonth:r,month:n}=g[o];return s.setMonth(n),s.setDate(r),s}function C(e,t){return U(function(e){const t=e.getTime(),i=k(e,"spring",T.NORTHERN).getTime(),s=k(e,"summer",T.NORTHERN).getTime(),o=k(e,"fall",T.NORTHERN).getTime(),r=k(e,"winter",T.NORTHERN).getTime();return t>=i&&t<s?"spring":t>=s&&t<o?"summer":t>=o&&t<r?"fall":"winter"}(e),t)}function U(e,t){return t===T.NORTHERN?e:function(e){const t=y.indexOf(e);return y[(t+2)%4]}(e)}function S(e,t){return function(e,t){const i=new Date(t);return i.setUTCFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),i}(e,60*t*1e3)}function z(e){const t=[{name:"UTC-12",abbr:-12,label:["UTC-12",e.timezoneDateline]},{name:"UTC-11",abbr:-11,label:["UTC-11",e.timezoneSamoa]},{name:e.timezoneHAST,abbr:-10,label:["UTC-10 ("+e.timezoneHAST+")",e.timezoneHawaii]},{name:e.timezoneAKST,abbr:-9,label:["UTC-9 ("+e.timezoneAKST+")",e.timezoneAlaska]},{name:e.timezonePST,abbr:-8,label:["UTC-8 ("+e.timezonePST+")",e.timezoneBaja]},{name:e.timezoneMST,abbr:-7,label:["UTC-7 ("+e.timezoneMST+")",e.timezoneMountain]},{name:e.timezoneMST,abbr:-7,label:["UTC-7 ("+e.timezoneMST+")",e.timezoneLaPaz]},{name:e.timezoneMST,abbr:-7,label:["UTC-7 ("+e.timezoneMST+")",e.timezoneArizona]},{name:e.timezoneCST,abbr:-6,label:["UTC-6 ("+e.timezoneCST+")",e.timezoneSaskatchewan]},{name:e.timezoneCST,abbr:-6,label:["UTC-6 ("+e.timezoneCST+")",e.timezoneCentralAmerica]},{name:e.timezoneCST,abbr:-6,label:["UTC-6 ("+e.timezoneCST+")",e.timezoneCentralTime]},{name:e.timezoneCST,abbr:-6,label:["UTC-6 ("+e.timezoneCST+")",e.timezoneMexico]},{name:e.timezoneEST,abbr:-5,label:["UTC-5 ("+e.timezoneEST+")",e.timezoneEasternUS]},{name:e.timezoneEST,abbr:-5,label:["UTC-5 ("+e.timezoneEST+")",e.timezoneLima]},{name:e.timezoneEST,abbr:-5,label:["UTC-5 ("+e.timezoneEST+")",e.timezoneIndiana]},{name:"UTC-4",abbr:-4,label:["UTC-4",e.timezoneAtlantic]},{name:"UTC-4",abbr:-4,label:["UTC-4",e.timezoneCuiaba]},{name:"UTC-4",abbr:-4,label:["UTC-4",e.timezoneSantiago]},{name:"UTC-4",abbr:-4,label:["UTC-4",e.timezoneManaus]},{name:"UTC-4",abbr:-4,label:["UTC-4",e.timezoneAsuncion]},{name:"UTC-3",abbr:-3,label:["UTC-3",e.timezoneBrasilia]},{name:"UTC-3",abbr:-3,label:["UTC-3",e.timezoneGreenland]},{name:"UTC-3",abbr:-3,label:["UTC-3",e.timezoneMontevideo]},{name:"UTC-3",abbr:-3,label:["UTC-3",e.timezoneCayenne]},{name:"UTC-3",abbr:-3,label:["UTC-3",e.timezoneBuenosAires]},{name:"UTC-2",abbr:-2,label:["UTC-2",e.timezoneMidAtlantic]},{name:"UTC-1",abbr:-1,label:["UTC-1",e.timezoneAzores]},{name:"UTC-1",abbr:-1,label:["UTC-1",e.timezoneCaboVerde]},{name:"GMT",abbr:0,label:["UTC (GMT)",e.timezoneDublin]},{name:"GMT",abbr:0,label:["UTC (GMT)",e.timezoneReykjavik]},{name:"GMT",abbr:0,label:["UTC (GMT)",e.timezoneCasablanca]},{name:e.timezoneCET,abbr:1,label:["UTC+1 ("+e.timezoneCET+")",e.timezoneBelgrade]},{name:e.timezoneCET,abbr:1,label:["UTC+1 ("+e.timezoneCET+")",e.timezoneSarajevo]},{name:e.timezoneCET,abbr:1,label:["UTC+1 ("+e.timezoneCET+")",e.timezoneBrussels]},{name:e.timezoneCET,abbr:1,label:["UTC+1 ("+e.timezoneCET+")",e.timezoneWCAfrica]},{name:e.timezoneCET,abbr:1,label:["UTC+1 ("+e.timezoneCET+")",e.timezoneAmsterdam]},{name:e.timezoneCET,abbr:1,label:["UTC+1 ("+e.timezoneCET+")",e.timezoneWindhoek]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneMinsk]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneCairo]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneHelsinki]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneAthens]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneJerusalem]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneAmman]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneBeirut]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneHarare]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneDamascus]},{name:e.timezoneEET,abbr:2,label:["UTC+2 ("+e.timezoneEET+")",e.timezoneIstanbul]},{name:e.timezoneMSK,abbr:3,label:["UTC+3 ("+e.timezoneMSK+")",e.timezoneKuwait]},{name:e.timezoneMSK,abbr:3,label:["UTC+3 ("+e.timezoneMSK+")",e.timezoneBaghdad]},{name:e.timezoneMSK,abbr:3,label:["UTC+3 ("+e.timezoneMSK+")",e.timezoneNairobi]},{name:e.timezoneMSK,abbr:3,label:["UTC+3 ("+e.timezoneMSK+")",e.timezoneKaliningrad]},{name:e.timezoneGST,abbr:4,label:["UTC+4 ("+e.timezoneGST+")",e.timezoneMoscow]},{name:e.timezoneGST,abbr:4,label:["UTC+4 ("+e.timezoneGST+")",e.timezoneMuscat]},{name:e.timezoneGST,abbr:4,label:["UTC+4 ("+e.timezoneGST+")",e.timezoneBaku]},{name:e.timezoneGST,abbr:4,label:["UTC+4 ("+e.timezoneGST+")",e.timezoneYerevan]},{name:e.timezoneGST,abbr:4,label:["UTC+4 ("+e.timezoneGST+")",e.timezoneTbilisi]},{name:e.timezoneGST,abbr:4,label:["UTC+4 ("+e.timezoneGST+")",e.timezonePortLouis]},{name:"UTC+5",abbr:5,label:["UTC+5",e.timezoneTashkent]},{name:"UTC+5",abbr:5,label:["UTC+5",e.timezoneIslamabad]},{name:"UTC+6",abbr:6,label:["UTC+6",e.timezoneEkaterinburg]},{name:"UTC+6",abbr:6,label:["UTC+6",e.timezoneAstana]},{name:"UTC+6",abbr:6,label:["UTC+6",e.timezoneDhaka]},{name:e.timezoneICT,abbr:7,label:["UTC+7 ("+e.timezoneICT+")",e.timezoneNovosibirsk]},{name:e.timezoneICT,abbr:7,label:["UTC+7 ("+e.timezoneICT+")",e.timezoneBangkok]},{name:e.timezoneCCT,abbr:8,label:["UTC+8 ("+e.timezoneCCT+")",e.timezoneKrasnoyarsk]},{name:e.timezoneCCT,abbr:8,label:["UTC+8 ("+e.timezoneCCT+")",e.timezoneBeijing]},{name:e.timezoneCCT,abbr:8,label:["UTC+8 ("+e.timezoneCCT+")",e.timezoneSingapore]},{name:e.timezoneCCT,abbr:8,label:["UTC+8 ("+e.timezoneCCT+")",e.timezoneTaipei]},{name:e.timezoneCCT,abbr:8,label:["UTC+8 ("+e.timezoneCCT+")",e.timezonePerth]},{name:e.timezoneCCT,abbr:8,label:["UTC+8 ("+e.timezoneCCT+")",e.timezoneUlaanbaatar]},{name:e.timezoneJST,abbr:9,label:["UTC+9 ("+e.timezoneJST+")",e.timezoneIrkutsk]},{name:e.timezoneJST,abbr:9,label:["UTC+9 ("+e.timezoneJST+")",e.timezoneSeoul]},{name:e.timezoneJST,abbr:9,label:["UTC+9 ("+e.timezoneJST+")",e.timezoneOsaka]},{name:e.timezoneAEST,abbr:10,label:["UTC+10 ("+e.timezoneAEST+")",e.timezoneYakutsk]},{name:e.timezoneAEST,abbr:10,label:["UTC+10 ("+e.timezoneAEST+")",e.timezoneCanberra]},{name:e.timezoneAEST,abbr:10,label:["UTC+10 ("+e.timezoneAEST+")",e.timezoneBrisbane]},{name:e.timezoneAEST,abbr:10,label:["UTC+10 ("+e.timezoneAEST+")",e.timezoneHobart]},{name:e.timezoneAEST,abbr:10,label:["UTC+10 ("+e.timezoneAEST+")",e.timezoneGuam]},{name:"UTC+11",abbr:11,label:["UTC+11",e.timezoneVladivostok]},{name:"UTC+11",abbr:11,label:["UTC+11",e.timezoneSolomon]},{name:e.timezoneNZST,abbr:12,label:["UTC+12 ("+e.timezoneNZST+")",e.timezoneMagadan]},{name:e.timezoneNZST,abbr:12,label:["UTC+12 ("+e.timezoneNZST+")",e.timezoneFiji]},{name:e.timezoneNZST,abbr:12,label:["UTC+12 ("+e.timezoneNZST+")",e.timezoneAuckland]},{name:e.timezoneNZST,abbr:12,label:["UTC+12 ("+e.timezoneNZST+")",e.timezoneNukualofa]}];return t.sort(((e,t)=>e.abbr<t.abbr?-1:e.abbr>t.abbr?1:0)),t}function f(e,t){let i=new Date(36e5*Math.round(e/60));"tick"!==t&&(i=new Date(6e4*e));let s=r(i,{hour:"2-digit",minute:"2-digit",timeZone:"UTC"});return"tick"===t&&-1!==s.indexOf(" ")&&(s=r(i,{hour:"numeric",timeZone:"UTC"}),s=s.replace(":00","")),s}let v=class extends j{constructor(e){super(e),this.items=null,this.currentIndex=0,this.isDropdownOpen=!1}get currentItem(){return null!==this.items&&null!==this.currentIndex&&this.currentIndex<this.items.length?this.items[this.currentIndex]:null}selectItem(e){this.currentIndex=e,this.isDropdownOpen=!1}toggle(){this.isDropdownOpen=!this.isDropdownOpen}};e([i()],v.prototype,"items",void 0),e([i()],v.prototype,"currentIndex",void 0),e([i()],v.prototype,"currentItem",null),e([i()],v.prototype,"isDropdownOpen",void 0),v=e([o("esri.widgets.Daylight.SliderWithDropdown")],v);let w=class extends l{constructor(e){super(e),this.view=null,this.datePickerViewModel=new b,this.timeSliderViewModel=new v,this.lightingUpdateInterval=200,this._cachedLightingDateUTC=new Date(0),this._cachedDisplayUTCOffset=0,this._enableShadowsOnFirstInteraction=!0,this._lastLightingUpdate=0,this._nextLightingUpdate=null,this.playSpeedMultiplier=1}initialize(){this.handles.add([n(this,"view",(()=>{this.view&&this.view.when((()=>this._updateLighting(null)))})),a(this,"view.environment.lighting.date",(e=>this._scheduleUpdateLighting(e))),m(this,"view.environment.lighting","timezone-will-change",(e=>this._timezoneWillChange(e)),(()=>this._timezoneWillChange(null))),n(this,"view.stationary",(()=>{(this.dayPlaying||this.yearPlaying)&&this._updateSunriseAndSunset()})),this.watch(["timeSliderPosition","timeSliderViewModel.state"],(()=>{"ready"===this.timeSliderViewModel.state&&this.timeSliderViewModel.setValue(0,this.timeSliderPosition)})),this.timeSliderViewModel.watch("currentItem",(e=>this.utcOffset=e.abbr)),this.timeSliderViewModel.watch("isDropdownOpen",(()=>this.stopPlaying())),this.timeSliderViewModel.watch("values",(e=>this.timeSliderPosition=e[0])),this.datePickerViewModel.watch("value",(e=>{this.dayPlaying=!1,this.localDate=e})),this.watch("localDate",(async e=>{this.datePickerViewModel.value.valueOf()!==e.getTime()&&this.datePickerViewModel.set("value",e)}))])}destroy(){this._nextLightingUpdate&&(clearTimeout(this._nextLightingUpdate),this._nextLightingUpdate=null),this.view=null}get isSupported(){return!this.view||"3d"===this.view.type}get utcOffset(){return this._cachedDisplayUTCOffset}set utcOffset(e){e!==this.utcOffset&&(this.view.environment.lighting.displayUTCOffset=e,this._updateLighting(null))}get localDate(){return function(e){const t=new Date(0);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t}(this._lightingDateDisplay)}set localDate(e){if(e.getTime()!==this.localDate.getTime()){const t=function(e,t){const i=new Date(e.getTime());return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i}(this._lightingDateDisplay,e);this._lightingDateDisplay=t}}get timeSliderPosition(){var e;return 60*(e=this._lightingDateDisplay).getUTCHours()+e.getUTCMinutes()+e.getUTCSeconds()/60+e.getUTCMilliseconds()/6e4}set timeSliderPosition(e){if(Math.abs(e-this.timeSliderPosition)>1/60){const t=S(this._lightingDateDisplay,e);this._lightingDateDisplay=t,this.stopPlaying(),this._enableShadowsOnFirstInteraction&&(this.directShadowsEnabled=!0,this._enableShadowsOnFirstInteraction=!1)}}get _lightingDateDisplay(){return d(this._cachedLightingDateUTC,this._cachedDisplayUTCOffset)}set _lightingDateDisplay(e){const t=d(e,-this._cachedDisplayUTCOffset);t.getTime()!==this.view.environment.lighting.date.getTime()&&(this.view.environment.lighting.date=t,this._updateLighting(null))}_timezoneFromCamera(e){var i;const s=null==(i=e.camera)?void 0:i.position;if(!s||!e.environment.lighting.cameraTrackingEnabled)return 0;const o=t(c([s.longitude,s.latitude]));return Math.round(o.hours+o.minutes/60+o.seconds/3600)}set playingState(e){this.playingState!==e&&(this._set("playingState",e),"none"!==e&&(this._updateSunriseAndSunset(),this._lastTime=(new Date).getTime(),this._play(),this._enableShadowsOnFirstInteraction&&(this.directShadowsEnabled=!0,this._enableShadowsOnFirstInteraction=!1)))}get dayPlaying(){return"day"===this.playingState}set dayPlaying(e){e?this.playingState="day":this.dayPlaying&&(this.playingState="none")}get yearPlaying(){return"year"===this.playingState}set yearPlaying(e){e?this.playingState="year":this.yearPlaying&&(this.playingState="none")}get currentSeason(){return C(this.localDate,this._currentHemisphere)}set currentSeason(e){this.stopPlaying();const t=U(e,this._currentHemisphere);this.localDate=k(this.localDate,t,T.NORTHERN)}get _currentHemisphere(){var e,t;const i=null==(e=this.view)||null==(t=e.camera)?void 0:t.position;return i?i.latitude>=0?T.NORTHERN:T.SOUTHERN:T.NORTHERN}stopPlaying(){this.playingState="none"}toggleDayPlaying(){this.dayPlaying=!this.dayPlaying}toggleYearPlaying(){this.yearPlaying=!this.yearPlaying}toggleDirectShadows(){this.stopPlaying(),this.directShadowsEnabled=!this.directShadowsEnabled}_updateLighting(e){var t,i;const s=Date.now();this._lastLightingUpdate=s;const o=null==(t=this.view)||null==(i=t.environment)?void 0:i.lighting;if(!o)return;const r=e||o.date,n=o.displayUTCOffset,a=null!==n?n:this._timezoneFromCamera(this.view);this._cachedLightingDateUTC.getTime()!==r.getTime()&&(this._cachedLightingDateUTC=new Date(r.getTime())),this._cachedDisplayUTCOffset!==a&&(this._cachedDisplayUTCOffset=a)}_timezoneWillChange(e){var t,i;const s=null==(t=this.view)||null==(i=t.environment)?void 0:i.lighting;if(!s||!s.cameraTrackingEnabled)return;let o;if(e)o=e.timezoneOffset;else{if(null!=s.displayUTCOffset)return;o=h(s.positionTimezoneInfo)}s.displayUTCOffset=o,this._scheduleUpdateLighting(null)}_scheduleUpdateLighting(e){if(this._nextLightingUpdate)return;const t=Date.now()-this._lastLightingUpdate,i=this.lightingUpdateInterval-t;i<=0?s((()=>this._updateLighting(e))):this._nextLightingUpdate=setTimeout((()=>{this._updateLighting(null),this._nextLightingUpdate=null}),i)}_play(){var e;const t=this.view;if(null!=(e=this.view)&&e.environment&&(this.dayPlaying||this.yearPlaying)){const e=(new Date).getTime()-this._lastTime;if(this.dayPlaying){this._lastTime=(new Date).getTime();const i=function(e,t,i){const s=12e5,o=3e5,r=18e5,n=2e5;if(isNaN(e.getTime())&&isNaN(t.getTime()))return o;const a=i.getTime(),m=e.getTime(),l=t.getTime(),p=m-36e5,u=m+36e5,c=l-48e5,h=l+24e5;let j=o;return a>=p&&a<=u?j=a-p<=s?r-(a-p)/s*16e5:u-a<=6e5?o-(u-a)/s*2*1e5:n:a>=c&&a<=h?j=a-c<=6e5?o-(a-c)/s*2*1e5:h-a<=s?r-(h-a)/s*16e5:n:(a<m||a>l)&&(j=r),j}(this._sunrise,this._sunset,t.environment.lighting.date)*this.playSpeedMultiplier/100*e;if(i>0){let e=new Date(t.environment.lighting.date.getTime()+i);if(((e.getUTCHours()+t.environment.lighting.displayUTCOffset)%24+24)%24<((t.environment.lighting.date.getUTCHours()+t.environment.lighting.displayUTCOffset)%24+24)%24){const s=864e5;e=new Date(t.environment.lighting.date.getTime()+i-s)}t.environment.lighting.date=e}}else{if(e>1e3){this._lastTime=(new Date).getTime();const e=(t.environment.lighting.date.getUTCMonth()+1)%12,i=new Date(t.environment.lighting.date.getTime());i.setUTCMonth(e),t.environment.lighting.date=i}}requestAnimationFrame((()=>this._play()))}}_updateSunriseAndSunset(){const e=function(e,t,i,s){const o=u.getTimes(e,t,i),r=o.sunrise,n=o.sunset,a=d(e,s),m=d(r,s),l=d(n,s);if(a.getUTCDate()!==m.getUTCDate()||a.getUTCDate()!==l.getUTCDate()){const e=a.getTime()-m.getTime()>0?1:-1;r.setUTCDate(r.getUTCDate()+e),n.setUTCDate(n.getUTCDate()+e)}return{sunrise:r,sunset:n}}(this.view.environment.lighting.date,this.view.camera.position.latitude,this.view.camera.position.longitude,this.view.environment.lighting.displayUTCOffset);this._sunrise=new Date(e.sunrise),this._sunset=new Date(e.sunset)}};e([i({type:p})],w.prototype,"view",void 0),e([i({type:b})],w.prototype,"datePickerViewModel",void 0),e([i({type:v})],w.prototype,"timeSliderViewModel",void 0),e([i()],w.prototype,"isSupported",null),e([i()],w.prototype,"lightingUpdateInterval",void 0),e([i()],w.prototype,"_cachedLightingDateUTC",void 0),e([i()],w.prototype,"_cachedDisplayUTCOffset",void 0),e([i()],w.prototype,"_enableShadowsOnFirstInteraction",void 0),e([i()],w.prototype,"utcOffset",null),e([i()],w.prototype,"localDate",null),e([i()],w.prototype,"timeSliderPosition",null),e([i()],w.prototype,"_lightingDateDisplay",null),e([i({aliasOf:"view.environment.lighting.directShadowsEnabled"})],w.prototype,"directShadowsEnabled",void 0),e([i({type:["none","day","year"],value:"none"})],w.prototype,"playingState",null),e([i()],w.prototype,"dayPlaying",null),e([i()],w.prototype,"yearPlaying",null),e([i()],w.prototype,"playSpeedMultiplier",void 0),e([i()],w.prototype,"currentSeason",null),e([i()],w.prototype,"_lastTime",void 0),e([i()],w.prototype,"_sunrise",void 0),e([i()],w.prototype,"_sunset",void 0),e([i({readOnly:!0})],w.prototype,"_currentHemisphere",null),w=e([o("esri.widgets.Daylight.DaylightViewModel")],w);var D=w;export default D;export{y as O,v as S,f,z as g};