/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{L as r}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{isAbortError as s}from"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import"../Graphic.js";import"../core/Handles.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"./colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"./sizeVariableUtils.js";import"./unitUtils.js";import"./lengthUtils.js";import"./visualVariableUtils.js";import"./VisualVariablesMixin.js";import"./symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./devEnvironmentUtils.js";import"./styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"./normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./utils3.js";import"./LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"./timeUtils.js";import"../TimeExtent.js";import"../core/watchUtils.js";import"./fieldType.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./commonProperties2.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./mat3.js";import"./vec2.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"../layers/support/Field.js";import"./defaultsJSON.js";import"./defaults.js";import"../layers/support/FieldsIndex.js";import"./DataLayerSource.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import{G as e}from"./GraphicsCollection.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import"./sublayerUtils.js";import"./ExportImageParameters.js";import"./TileKey.js";import"./vec4f32.js";import"./definitions.js";import"./capabilities2.js";import"./quantizationUtils.js";import"./BidiText.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2f32.js";import"./number2.js";import"./Rect.js";import"./BidiEngine.js";import"./MD5.js";import"./clusterUtils2.js";import"./Queue.js";import{R as p}from"./RefreshableLayerView.js";import"./vec2f64.js";import"./mat3f32.js";import"./QueueProcessor.js";import"./TileStrategy.js";import"./TileInfoView.js";import"./Program.js";import"./FramebufferObject.js";import"./mat4f32.js";import"./VertexArrayObject.js";import"./ShaderCompiler.js";import"./callExpressionWithFeature.js";import"./config.js";import"./DisplayObject.js";import"./TiledDisplayObject.js";import"./rasterUtils.js";import m from"../views/layers/LayerView.js";import"./Container.js";import"./ClipRect.js";import{L as a}from"./LayerView2D.js";import"./Bitmap.js";import"./brushes.js";import"./visualVariablesUtils.js";import{W as l}from"./enums.js";import"./Utils10.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import"./WGLContainer.js";import{B as n}from"./BitmapContainer.js";import"./normalizeUtilsSync.js";import"./json.js";import"./projectionSupport.js";import"./TurboLine.js";import"./util2.js";import{a as j}from"./drapedUtils.js";import"./centroid.js";import"./FeatureSetReader.js";import"./quickselect.js";import"./TileStore.js";import"./visualVariablesUtils2.js";import"./TileClipper.js";import"./CIMSymbolHelper.js";import"./cimAnalyzer.js";import"./WGLMeshFactory.js";import{a as u,G as c}from"./BaseGraphicContainer.js";import"./FeatureContainer.js";import"./tileUtils2.js";import"./schemaUtils.js";import"./GraphicsView.js";import"./TileContainer.js";import"./popupUtils.js";import{E as d}from"./ExportStrategy.js";import{M as y}from"./MapImageLayerView.js";let h=class extends u{renderChildren(t){if(t.drawPhase!==l.HIGHLIGHT)return;if(this.attributeView.bindTextures(t.context),!this.children.some((t=>t.hasData)))return;super.renderChildren(t);const{painter:r}=t,o=r.effects.highlight;o.bind(t),t.context.setColorMask(!0,!0,!0,!0),t.context.clear(16384),this._renderChildren(t,o.defines.concat(["highlightAll"])),o.draw(t),o.unbind()}};h=t([i("esri.views.2d.layers.support.HighlightGraphicContainer")],h);var b=h;const g=r.getLogger("esri.views.2d.layers.MapImageLayerView2D");let f=class extends(y(p(a(m)))){constructor(){super(...arguments),this._highlightGraphics=new e}hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{s(t)||g.error(t)}))}attach(){const{imageMaxWidth:t,imageMaxHeight:r,version:o}=this.layer,s=o>=10.3,i=o>=10;this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer);const e=new c({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new b(this.view.featuresTilingScheme)});this.container.addChild(e.container),this.strategy=new d({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:r,imageRotationSupported:s,imageNormalizationSupported:i,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,r){return this._highlightGraphics.add(t),{remove:()=>{this._highlightGraphics.remove(t)}}}createFetchPopupFeaturesQueryGeometry(t,r){return j(t,r,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,r,o,s){return this.layer.fetchImage(t,r,o,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...s})}};t([o()],f.prototype,"strategy",void 0),t([o()],f.prototype,"updating",void 0),f=t([i("esri.views.2d.layers.MapImageLayerView2D")],f);var S=f;export default S;