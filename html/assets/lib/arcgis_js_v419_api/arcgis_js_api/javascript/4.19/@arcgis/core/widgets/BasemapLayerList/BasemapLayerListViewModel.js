/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import{E as r}from"../../chunks/Evented.js";import i from"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import"../../Graphic.js";import"../../core/Handles.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../tasks/support/ColorRamp.js";import"../../tasks/support/AlgorithmicColorRamp.js";import"../../tasks/support/MultipartColorRamp.js";import"../../chunks/colorRamps.js";import"../../renderers/Renderer.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/VisualVariablesMixin.js";import"../../chunks/symbolConversion.js";import"../../symbols/support/jsonUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/ClassBreaksRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/MemCache.js";import"../../chunks/LRUCache.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import"../../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../../chunks/MultiOriginJSONSupport.js";import{init as o,watch as p}from"../../core/watchUtils.js";import"../../chunks/fieldType.js";import{HandleOwnerMixin as m}from"../../core/HandleOwner.js";import"../../chunks/domUtils.js";import"../../chunks/widgetUtils.js";import"../../chunks/projector.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../support/widget.js";import"../../chunks/vmEvent.js";import"../../chunks/index.js";import"../Widget.js";import"../../layers/support/Field.js";import"../../chunks/labelUtils.js";import"../../layers/support/LabelClass.js";import"../../chunks/defaultsJSON.js";import"../../chunks/defaults.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/DataLayerSource.js";import"../../support/popupUtils.js";import"../../tasks/support/Query.js";import"../../tasks/support/StatisticDefinition.js";import"../../layers/support/Sublayer.js";import"../../chunks/ActionSlider.js";import"../LayerList/ListItemPanel.js";import"../../chunks/layerListUtils.js";import a from"../LayerList/ListItem.js";const l="view",n="basemap",c="base-layers",u="reference-layers",j="reference-layers-list-mode",y="base-layers-list-mode",h="base-layer-views",d="reference-layer-views",b=i.ofType(a);let k=class extends(m(r.EventedAccessor)){constructor(e){super(e),this.baseItems=new b,this.baseListItemCreatedFunction=null,this.referenceListItemCreatedFunction=null,this.referenceItems=new b,this.view=null,this._compileBaseList=this._compileBaseList.bind(this),this._compileReferenceList=this._compileReferenceList.bind(this)}initialize(){this.handles.add(o(this,["view.map.basemap","view","view.ready","view.basemapView"],(()=>this._watchBasemapLayers())),l)}destroy(){this.view=null,this.baseItems.removeAll(),this.referenceItems.removeAll()}get basemapTitle(){return this.get("view.map.basemap.title")||null}set basemapTitle(e){void 0!==e?this._override("basemapTitle",e):this._clearOverride("basemapTitle")}get state(){return this.get("view.ready")?"ready":this.get("view")?"loading":"disabled"}triggerAction(e,s){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:s})}transferListItem({listItem:e,from:s,to:t,newIndex:r}){const{referenceItems:i,baseItems:o}=this,{layer:p}=e,m=this.get("view.map.basemap.baseLayers"),a=this.get("view.map.basemap.referenceLayers");if(!m||!a||s===t)return;const l="reference"===t?i:o,n="reference"===s?a:m,c="reference"===t?a:m;("reference"===s?i:o).remove(e),n.remove(p),l.add(e,r),c.add(p,r)}_createItemChangeHandles({items:e,key:s,callback:t}){const{handles:r}=this;r.remove(s),t(),e&&r.add(e.on("change",(()=>t())),s)}_watchItemProperties({item:e,type:s}){this.handles.add([e.children.on("change",(()=>{this._modifyListItemChildren({type:s,childItems:e.children})}))],`children-change-${e.uid}`)}_modifyListItemChildren({childItems:e,type:s}){e.forEach((e=>this._modifyListItem({type:s,item:e})))}_modifyListItem({item:e,type:s}){const t={item:e};"base"===s&&"function"==typeof this.baseListItemCreatedFunction&&this.baseListItemCreatedFunction.call(null,t),"reference"===s&&"function"==typeof this.referenceListItemCreatedFunction&&this.referenceListItemCreatedFunction.call(null,t),this._modifyListItemChildren({type:s,childItems:e.children})}_createListItem({layer:e,type:s}){const{view:t}=this,r=new a({layer:e,view:t});return this._watchItemProperties({type:s,item:r}),r}_watchLayersListMode({layers:e,key:s,callback:t}){const{handles:r}=this;r.remove(s),e&&e.forEach((e=>{r.add(p(e,"listMode",(()=>t())),s)}))}_compileListItems({layers:e,items:s,key:t,type:r,callback:i}){this._watchLayersListMode({layers:e,key:t,callback:i}),this._createNewItems({type:r,items:s,layers:e}),this._modifyOrRemoveItems({type:r,items:s,layers:e}),this._sortItems(s,e)}_compileReferenceList(){const{referenceItems:e}=this,s=this.get("view.map.basemap.referenceLayers");this._compileListItems({type:"reference",layers:s,items:e,key:y,callback:this._compileReferenceList})}_compileBaseList(){const{baseItems:e}=this,s=this.get("view.map.basemap.baseLayers");this._compileListItems({type:"base",layers:s,items:e,key:j,callback:this._compileBaseList})}_compileLists(){this._compileReferenceList(),this._compileBaseList()}_createNewItems({items:e,layers:s,type:t}){s&&s.forEach((s=>{e.find((e=>e.layer===s))||e.add(this._createListItem({type:t,layer:s}))}))}_modifyOrRemoveItems({items:e,layers:s,type:t}){const{handles:r}=this;e&&e.forEach((i=>{if(!i)return;s&&s.find((e=>i.layer===e))?this._modifyListItem({type:t,item:i}):(r.remove(`children-change-${i.uid}`),e.remove(i))}))}_sortItems(e,s){e&&e.sort(((e,t)=>{const r=s.indexOf(e.layer),i=s.indexOf(t.layer);return r>i?-1:r<i?1:0}))}_watchBasemapLayers(){const{handles:e,view:s}=this;e.remove([c,u,n,h,d]),this._compileLists(),s&&s.ready&&e.add([o(this,"view.map.basemap.baseLayers",(e=>this._createItemChangeHandles({items:e,key:c,callback:this._compileBaseList}))),o(this,"view.map.basemap.referenceLayers",(e=>this._createItemChangeHandles({items:e,key:u,callback:this._compileReferenceList}))),o(this,"view.basemapView.baseLayerViews",(e=>this._createItemChangeHandles({items:e,key:h,callback:this._compileBaseList}))),o(this,"view.basemapView.referenceLayerViews",(e=>this._createItemChangeHandles({items:e,key:d,callback:this._compileReferenceList}))),o(this,"baseListItemCreatedFunction",(()=>this._compileBaseList())),o(this,"referenceListItemCreatedFunction",(()=>this._compileReferenceList()))],n)}};e([s({type:b})],k.prototype,"baseItems",void 0),e([s()],k.prototype,"basemapTitle",null),e([s()],k.prototype,"baseListItemCreatedFunction",void 0),e([s()],k.prototype,"referenceListItemCreatedFunction",void 0),e([s({type:b})],k.prototype,"referenceItems",void 0),e([s({readOnly:!0})],k.prototype,"state",null),e([s()],k.prototype,"view",void 0),e([s()],k.prototype,"transferListItem",null),k=e([t("esri.widgets.BasemapLayerList.BasemapLayerListViewModel")],k);var f=k;export default f;