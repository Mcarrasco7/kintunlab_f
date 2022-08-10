/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{ignoreAbortErrors as o}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/compilerUtils.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../chunks/asyncUtils.js";import"../core/urlUtils.js";import{aliasOf as r}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/shared.js";import"../chunks/writer.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../chunks/persistable.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/vec3.js";import"../chunks/mathUtils.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"../chunks/uid.js";import"../Graphic.js";import"../core/Handles.js";import"../layers/Layer.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"../chunks/colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/sizeVariableUtils.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/VisualVariablesMixin.js";import"../chunks/symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"../chunks/MemCache.js";import"../chunks/ItemCache.js";import"../chunks/utils3.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils2.js";import"../chunks/LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../chunks/MultiOriginJSONSupport.js";import"../core/watchUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/fieldType.js";import"../geometry/HeightModelInfo.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";import"../chunks/Scheduler.js";import"../core/HandleOwner.js";import"../chunks/_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"../form/ExpressionInfo.js";import"../form/elements/FieldElement.js";import"../form/support/elements.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/support/inputs.js";import"../form/elements/GroupElement.js";import"../form/FormTemplate.js";import"../chunks/vec4f64.js";import"../chunks/earcut.js";import"../chunks/deduplicate.js";import"../chunks/triangulationUtils.js";import"../chunks/quatf64.js";import"../chunks/mat3.js";import"../chunks/BufferView.js";import"../chunks/vec2.js";import"../chunks/vec4.js";import"../chunks/quat.js";import"../chunks/domUtils.js";import"../chunks/widgetUtils.js";import"../chunks/projector.js";import"../chunks/accessibleHandler.js";import{m as i}from"../chunks/messageBundle.js";import"./support/widget.js";import"../chunks/vmEvent.js";import{j as p}from"../chunks/index.js";import n from"./Widget.js";import"../chunks/zscale.js";import"../chunks/queryZScale.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"../layers/FeatureLayer.js";import"../chunks/ArcGISService.js";import"../chunks/BlendLayer.js";import"../chunks/CustomParametersMixin.js";import"../chunks/PortalLayer.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../layers/support/TimeInfo.js";import"../chunks/TemporalLayer.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../chunks/labelUtils.js";import"../layers/support/LabelClass.js";import"../chunks/defaultsJSON.js";import"../chunks/defaults.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/DataLayerSource.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import"../layers/buildingSublayers/BuildingSublayer.js";import"../chunks/capabilities.js";import"../chunks/I3SIndexInfo.js";import"../chunks/I3SLayerDefinitions.js";import"../layers/buildingSublayers/BuildingComponentSublayer.js";import"../chunks/utils4.js";import"../tasks/Task.js";import"../rest/query/support/AttachmentInfo.js";import"../chunks/query.js";import"../chunks/executeRelationshipQuery.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/pbfQueryUtils.js";import"../chunks/featureConversionUtils.js";import"../tasks/QueryTask.js";import"../chunks/aaBoundingBox.js";import"../chunks/vec4f32.js";import"../chunks/quantizationUtils.js";import"../symbols/support/symbolUtils.js";import"../chunks/byteSizeEstimations.js";import"../chunks/dehydratedFeatures.js";import"../chunks/ElevationProvider.js";import"../chunks/interactiveToolUtils.js";import"../chunks/throttle.js";import"./Attachments.js";import"./Attachments/AttachmentsViewModel.js";import"./Feature/FeatureViewModel.js";import"./Feature.js";import"../chunks/AnchorElementViewModel.js";import"./Spinner/SpinnerViewModel.js";import"./Popup.js";import"../chunks/Queue.js";import"../chunks/InputManager.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"./Popup/PopupViewModel.js";import"../chunks/GoTo.js";import"../chunks/MapUtils.js";import"../chunks/screenUtils2.js";import"../chunks/vec2f64.js";import"../chunks/requestImageUtils.js";import"../chunks/VertexColor.glsl.js";import"../chunks/Program.js";import"../chunks/FramebufferObject.js";import"../chunks/renderState.js";import"../chunks/glUtil.js";import"../chunks/InterleavedLayout.js";import"../chunks/mat4f32.js";import"../chunks/vec3f32.js";import"../chunks/stack.js";import"../chunks/geometryUtils.js";import"../chunks/ColorMaterial.js";import"../chunks/Util.js";import"../chunks/glUtil3D.js";import"../chunks/Object3D.js";import"../chunks/VertexArrayObject.js";import"../chunks/lineUtils.js";import"../chunks/intersectorUtils.js";import"../chunks/Intersector.js";import"../chunks/Camera.js";import"../chunks/PiUtils.glsl.js";import"../chunks/GLMaterialTexture.js";import"../chunks/RibbonLineMaterial.js";import"../chunks/PhysicallyBasedRendering.glsl.js";import"../chunks/Texture.js";import"../chunks/NativeLineMaterial.js";import"../chunks/elevationInfoUtils.js";import"../chunks/InteractiveToolBase.js";import"../chunks/VisualElement.js";import"../chunks/Object3DVisualElement.js";import"../chunks/InteractiveToolViewModel.js";import"../chunks/dragEventPipeline3D.js";import"../chunks/manipulatorUtils.js";import"../chunks/LineVisualElement.js";import"../chunks/heading-rotate-png.js";import"../chunks/ImageMaterial.js";import"./Slice/SlicePlane.js";import m from"./Slice/SliceViewModel.js";const l="esri-slice",u={buttonDisabled:"esri-button--disabled",layerIncludeButton:"esri-icon-close esri-slice__cross",widgetIcon:"esri-icon-slice",base:`${l} esri-widget esri-widget--panel`,layerList:`${l}__settings`,layerListHeading:"esri-slice__settings-title esri-widget__heading",layerItem:`${l}__layer-item`,container:`${l}__container`,actionSection:"esri-slice__actions",hint:`${l}__hint`,hintText:`${l}__hint-text`,panelError:`${l}__panel--error`,newSliceButton:`${l}__clear-button esri-button esri-button--primary`,excludeButton:`${l}__exclude-button esri-button esri-button--secondary`,cancelButton:`${l}__cancel-button esri-button esri-button--secondary`};let a=class extends n{constructor(s,t){super(s,t),this.messages=null,this.iconClass=u.widgetIcon,this.label=void 0,this.view=null,this.viewModel=new m}render(){const s=this.viewModel.isSupported,t=this.viewModel.active,o="disabled"===this.viewModel.state,e="ready"===this.viewModel.state,r="slicing"===this.viewModel.state||"sliced"===this.viewModel.state,i="exclude"===this.viewModel.layersMode,{messages:n}=this,m=o&&u.buttonDisabled,l=t&&!r||i?null:p("button",{disabled:o,class:this.classes(u.newSliceButton,m),bind:this,onclick:this._onNewSliceClick,key:"esri-slice__clear",type:"button"},n.newSlice),a=r&&!i?p("button",{class:this.classes(u.excludeButton,m),bind:this,onclick:()=>{this.viewModel.enterExcludeLayerMode()},key:"esri-slice__exclude",type:"button"},n.excludeLayer):null,c=t&&i?p("button",{class:this.classes(u.cancelButton,m),bind:this,onclick:()=>{this.viewModel.exitExcludeLayerMode()},key:"esri-slice__cancel-exclude",type:"button"},n.cancel):null;let j=null;t&&(i?j=n.excludeHint:e&&(j=n.hint));const h=j?p("div",{class:u.hint,key:"esri-slice__hint"},p("p",{class:u.hintText},j)):null,d=this.excludedLayers?this.excludedLayers.toArray().map((s=>p("li",{class:u.layerItem,key:s.uid},p("a",{href:"",onclick:()=>(this.excludedLayers.remove(s),!1),class:u.layerIncludeButton,title:n.includeLayer}),s.title))):[];this.excludeGroundSurface&&d.push(p("li",{class:u.layerItem,key:"ground"},p("a",{href:"",onclick:()=>(this.excludeGroundSurface=!1,!1),class:u.layerIncludeButton,title:n.includeLayer}),n.ground));const k=!i&&r&&d.length>0?p("div",{class:u.layerList,key:"esri-slice__settings"},p("h3",{class:u.layerListHeading},n.excludedLayers),p("ul",null,d)):null,y=p("div",{class:u.panelError,key:"esri-slice__unsupported"},p("p",null,n.unsupported)),b=p("div",{class:u.actionSection},a,c,l),S=this.visible?p("div",{class:u.container},s?[h,k,b]:y):null;return p("div",{class:u.base,role:"presentation"},S)}_onNewSliceClick(){o(this.viewModel.removeSliceAndStart())}};s([t(),i("esri/widgets/Slice/t9n/Slice")],a.prototype,"messages",void 0),s([t()],a.prototype,"iconClass",void 0),s([t({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0),s([r("viewModel.view")],a.prototype,"view",void 0),s([r("viewModel.visible")],a.prototype,"visible",void 0),s([r("viewModel.active")],a.prototype,"active",void 0),s([t({type:m})],a.prototype,"viewModel",void 0),s([r("viewModel.excludedLayers")],a.prototype,"excludedLayers",void 0),s([r("viewModel.excludeGroundSurface")],a.prototype,"excludeGroundSurface",void 0),a=s([e("esri.widgets.Slice")],a);var c=a;export default c;