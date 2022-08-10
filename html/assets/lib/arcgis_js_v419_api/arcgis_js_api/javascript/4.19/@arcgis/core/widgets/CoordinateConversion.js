/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{g as e}from"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import{L as o}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{e as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../core/urlUtils.js";import{aliasOf as n}from"../core/accessorSupport/decorators/aliasOf.js";import{cast as a}from"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../chunks/mathUtils2.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/vec3.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"../chunks/uid.js";import"../Graphic.js";import"../core/Handles.js";import"../chunks/unitUtils.js";import"../core/watchUtils.js";import"../tasks/support/ProjectParameters.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../geometry/coordinateFormatter.js";import"../chunks/domUtils.js";import{s as l,i as p}from"../chunks/widgetUtils.js";import"../chunks/projector.js";import{a as c}from"../chunks/accessibleHandler.js";import{m as d}from"../chunks/messageBundle.js";import{j as m}from"../chunks/index.js";import u from"./Widget.js";import"../chunks/GoTo.js";import"../chunks/geometryServiceUtils.js";import h from"./CoordinateConversion/support/Conversion.js";import"./CoordinateConversion/support/Format.js";import"../chunks/number3.js";import _ from"./CoordinateConversion/CoordinateConversionViewModel.js";const b="esri-coordinate-conversion esri-widget",v="esri-coordinate-conversion--capture-mode",g="esri-coordinate-conversion--no-basemap",y="esri-coordinate-conversion__popup",j="esri-coordinate-conversion__conversion-list",C="esri-coordinate-conversion__row",k="esri-coordinate-conversion__display",f="esri-coordinate-conversion__conversions-view--expanded",w="esri-coordinate-conversion__conversions-view--expand-down",x="esri-coordinate-conversion__conversions-view--expand-up",S="esri-coordinate-conversion__conversions-view",I="esri-coordinate-conversion__select-primary",M="esri-coordinate-conversion__select-row",P="esri-coordinate-conversion__tools",D="esri-coordinate-conversion__mode-toggle",T="esri-coordinate-conversion__row-button",V="esri-coordinate-conversion__back-button",F="esri-coordinate-conversion__button",L="esri-coordinate-conversion__input-coordinate",U="esri-coordinate-conversion__input-form",E="esri-coordinate-conversion__input-group",O="esri-coordinate-conversion__input-coordinate--rejected",B="esri-coordinate-conversion__heading",$="esri-coordinate-conversion__pattern-input",R="esri-coordinate__settings",A="esri-coordinate-conversion__settings-group",G="esri-coordinate-conversion__settings-group-horizontal",q="esri-coordinate-conversion__preview-coordinate",W="esri-disabled",z="esri-input",H="esri-button",N="esri-widget__heading",Q="esri-widget--button",J="esri-icon-left-arrow",K="esri-icon-right-arrow",X="esri-icon-map-pin",Y="esri-icon-up",Z="esri-icon-duplicate",tt="esri-icon-edit",et="esri-select",ot="esri-icon-down",st="esri-icon-refresh",it="esri-icon-close",rt="esri-icon-settings2",nt={settingsButton:!0,inputButton:!0,captureButton:!0,expandButton:!0},at=o.getLogger("esri.widgets.CoordinateConversion");let lt=class extends u{constructor(t,e){super(t,e),this._popupMessage=null,this._popupId=null,this._coordinateInput=null,this._badInput=!1,this._goToEnabled=!1,this._conversionFormat=null,this._settingsFormat=null,this._previewConversion=null,this._expanded=!1,this._popupVisible=!1,this._settingsVisible=!1,this._inputVisible=!1,this.conversions=null,this.currentLocation=null,this.formats=null,this.goToOverride=null,this.label=void 0,this.messages=null,this.messagesCommon=null,this.mode=null,this.orientation="auto",this.requestDelay=null,this.view=null,this.viewModel=new _,this.visibleElements={...nt}}set multipleConversions(t){!1===t&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1)),this._set("multipleConversions",t)}get multipleConversions(){const t=this._get("multipleConversions");return"boolean"!=typeof t||t}castVisibleElements(t){return{...nt,...t}}reverseConvert(t,e){return this.viewModel.reverseConvert(t,e)}render(){const t=this.get("viewModel.state"),e="disabled"===t?m("div",{key:"esri-coordinate__no-basemap"},this.messages.noBasemap):null,o=!e&&this._inputVisible?this._renderInputForm():null,s=!e&&this._settingsVisible?this._renderSettings():null,i=e||o||s?null:this._renderConversionsView(),r=this._popupVisible?this._renderPopup():null,n={[v]:"capture"===this.mode,[W]:"loading"===t,[g]:"disabled"===t};return m("div",{class:this.classes(b,n)},r,e,i,s,o)}_addConversion(t){const e=t.target,o=e.options[e.options.selectedIndex]["data-format"],s=e["data-index"],i=new h({format:o});e.options.selectedIndex=0,s>=0&&this.conversions.removeAt(s),this.conversions.add(i,s)}_findSettingsFormat(){return this._settingsFormat||this.conversions.reduceRight(((t,e)=>{const o=e.format;return o.get("hasDisplayProperties")?o:t}),null)||this.formats.find((t=>t.hasDisplayProperties))}_hidePopup(){this._popupId&&(clearTimeout(this._popupId),this._popupId=null),this._popupVisible=!1,this._popupMessage=null,this.scheduleRender()}_onConvertComplete(){this._inputVisible=!1,this._coordinateInput.value=""}_onCopy(t){const o=t.currentTarget["data-conversion"].displayCoordinate;"clipboardData"in e?e.clipboardData.setData("text",o):t.clipboardData.setData("text/plain",o),this._showPopup(this.messages.copySuccessMessage),t.preventDefault()}_processUserInput(t){const e=i(t),o=this.viewModel;if("Enter"!==e&&e)this._badInput&&(this._badInput=!1);else{const t=this._coordinateInput["data-format"],e=this._coordinateInput.value;this._reverseConvert(e,t).then((t=>{"capture"===this.mode?o.resume():this.mode="capture",this.currentLocation=t,o.setLocation(t),this._onConvertComplete()})).catch((t=>{at.error(t),this._showPopup(this.messages.invalidCoordinate),this._badInput=!0}))}}_reverseConvert(t,e){const o=this.viewModel;return e.reverseConvert(t).then((t=>(this._goToEnabled&&o.goToLocation(t).catch((t=>{at.warn(t),this._showPopup(this.messages.locationOffBasemap)})),t)))}_setInputFormat(t){const e=t.target,o=e[e.options.selectedIndex]["data-format"];this._conversionFormat=o}_setPreviewConversion(){const t=this._findSettingsFormat(),e=this.viewModel;if(t){const o=this.conversions.find((e=>e.format===t));this._previewConversion=new h({format:t,position:{location:this.currentLocation,coordinate:o&&o.position.coordinate}}),this._previewConversion.position.coordinate||e.previewConversion(this._previewConversion)}}_setSettingsFormat(t){const e=t.target,o=e[e.options.selectedIndex]["data-format"];this._settingsFormat=o,this._setPreviewConversion()}_showPopup(t,e=2500){this._popupMessage=t,this._popupVisible?clearTimeout(this._popupId):this._popupVisible=!0,this.scheduleRender(),this._popupId=setTimeout((()=>{this._popupId=null,this._hidePopup()}),e)}_toggleGoTo(){this._goToEnabled=!this._goToEnabled}_updateCurrentPattern(t){t.stopPropagation();const e=t.target,o=this._findSettingsFormat();o&&(o.currentPattern=e.value)}_renderConversion(t,e){const{messages:o}=this,s=`${this.id}__list-item-${e}`,i=`${t.format.name} ${o.conversionOutputSuffix}`,r=0===e,n=r||this._expanded,a=r?this._renderFirstConversion(t):this._renderTools(e,t,s),l=r&&!t.displayCoordinate?o.noLocation:t.displayCoordinate,p=m("div",{"aria-label":l,class:k,"data-conversion":t,role:"listitem",tabindex:"0",title:l},l),c=this._renderOptions(this.formats.filter((e=>e!==t.format)));return n?m("li",{"aria-label":i,class:C,id:s,key:t,role:"group",title:i,tabindex:"0"},m("select",{"aria-controls":s,"aria-label":o.selectFormat,class:this.classes(et,M),bind:this,"data-index":e,onchange:this._addConversion,title:o.selectFormat},m("option",{"aria-label":t.format.name,selected:!0,title:t.format.name},t.format.name.toUpperCase()),c),p,a):null}_renderCopyButton(t){return m("li",{"aria-label":this.messagesCommon.copy,bind:this,class:this.classes(Q,T),"data-conversion":t,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:this.messagesCommon.copy},m("span",{"aria-hidden":"true",class:Z}))}_renderFirstConversion(t){const e=this.id,o={[ot]:!this._expanded,[Y]:this._expanded},{messages:s,messagesCommon:i,multipleConversions:r,visibleElements:n}=this,a="live"===this.mode?s.captureMode:s.liveMode,l=this._expanded?i.collapse:i.expand,p=t.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(t):null,c=r&&n.expandButton&&m("li",{"aria-controls":`${e}__${j}`,"aria-label":l,bind:this,class:Q,key:"esri-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:l},m("span",{"aria-hidden":"true",class:this.classes(o)})),d=!r&&n.captureButton&&m("li",{"aria-label":a,bind:this,class:this.classes(Q,D),key:"esri-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:a},m("span",{"aria-hidden":"true",class:X}));return m("ul",{class:P},p,c,d)}_renderInputForm(){const t=this._conversionFormat||this.conversions.getItemAt(0).format,e=this.formats.findIndex((e=>e.name===t.name)),o=this.id,s=`${o}__${L}`,i=`${o}__${L}__header`,r=this._renderOptions(this.formats,!0,e),n={[O]:this._badInput},{messages:a,messagesCommon:p}=this;return m("div",{"aria-labelledby":i,class:U,key:"esri-coordinate-conversion__input-form",role:"search"},m("div",{class:B},m("div",{"aria-label":p.back,bind:this,class:this.classes(Q,V),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:p.back},this._renderBackIcon()),m("h4",{class:N,id:i},a.inputCoordTitle)),m("div",{class:E},m("select",{"aria-controls":s,"aria-label":a.selectFormat,bind:this,class:this.classes(et,M),onchange:this._setInputFormat,title:a.selectFormat},r),m("input",{afterCreate:l,"aria-labelledby":i,"aria-required":"true",bind:this,class:this.classes(L,z,n),"data-format":t,"data-node-ref":"_coordinateInput",id:s,onkeydown:this._processUserInput,placeholder:a.inputCoordTitle,role:"textbox",spellcheck:!1,title:a.inputCoordTitle,type:"text"})),m("div",{class:E},m("label",{"aria-label":a.goTo},m("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:a.goTo,type:"checkbox"}),a.goTo),m("button",{"aria-label":a.convert,bind:this,class:this.classes(F,H),onclick:this._processUserInput,title:a.convert,type:"button"},a.convert)))}_renderConversionsView(){const t=`${this.id}__${j}`,e=this._renderPrimaryTools(),o=this._renderOptions(this.formats),s=this.conversions.map(((t,e)=>this._renderConversion(t,e))).toArray(),{messages:i}=this,r=this._expanded?m("div",{class:C},m("select",{"aria-controls":t,"aria-label":i.addConversion,bind:this,class:this.classes(et,I),onchange:this._addConversion,title:i.addConversion},m("option",{disabled:!0,selected:!0,value:""},i.addConversion),o),e):null,n={[f]:this._expanded,[x]:"expand-up"===this.orientation,[w]:"expand-down"===this.orientation};return m("div",{class:this.classes(S,n),key:"esri-coordinate-conversion__main-view"},m("ul",{"aria-expanded":this._expanded?"true":"false",class:j,id:t},s),r)}_renderOptions(t,e,o){const s=this.conversions.getItemAt(0);return t.map(((t,i)=>{const r=!(e||!s)&&(s.format.name===t.name||this.conversions.map((t=>t.format.name)).includes(t.name));return m("option",{"aria-label":t.name,"data-format":t,disabled:r,key:t.name,selected:i===o,value:t.name},t.name.toUpperCase())})).toArray()}_renderPopup(){return m("div",{class:y,role:"alert"},this._popupMessage)}_renderPrimaryTools(){const{messages:t,visibleElements:e}=this,o="live"===this.mode?t.captureMode:t.liveMode,s=e.inputButton&&m("li",{bind:this,class:Q,onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:t.inputCoordTitle},m("span",{"aria-hidden":"true",class:tt})),i=e.captureButton&&m("li",{bind:this,class:this.classes(Q,D),onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:o},m("span",{"aria-hidden":"true",class:X})),r=e.settingsButton&&m("li",{bind:this,class:Q,onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:t.settingsTitle},m("span",{"aria-hidden":"true",class:rt}));return m("ul",{class:P},s,i,r)}_renderSettings(){const t=this.id,e=`${t}__${$}`,o=`${t}__${$}__header`,s=`${t}__${q}`,i=this.formats.filter((t=>t.hasDisplayProperties)),r=this._findSettingsFormat(),n=i.indexOf(r),a=this._renderOptions(i,!0,n),l=r.get("currentPattern"),{messages:p,messagesCommon:c}=this;return m("div",{"aria-labelledby":o,class:R,key:"esri-coordinate-conversion__settings"},m("div",{class:B},m("div",{bind:this,class:this.classes(Q,V),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:c.back},this._renderBackIcon()),m("h4",{class:N,id:o},p.settingsTitle)),m("div",{class:A},m("label",{for:e},p.changeCoordinateDisplay),m("select",{"aria-label":p.selectFormat,class:et,bind:this,onchange:this._setSettingsFormat,title:p.selectFormat},a),m("div",{class:G},m("input",{"aria-controls":s,bind:this,class:this.classes($,z),id:e,oninput:this._updateCurrentPattern,spellcheck:!1,title:p.changeCoordinateDisplay,type:"text",value:l}),m("div",{"aria-controls":e,bind:this,class:Q,onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",tabindex:"0",title:p.defaultPattern},m("span",{"aria-hidden":"true",class:st})))),m("div",{class:A},m("label",null,c.preview,m("div",{class:q,id:s,tabindex:"0"},this._previewConversion.displayCoordinate))))}_renderBackIcon(){return m("span",{"aria-hidden":"true",class:p()?K:J})}_renderTools(t,e,o){const s=e.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(e):null,{messages:i}=this;return m("ul",{class:P,role:"listitem"},s,m("li",{"aria-controls":o,"aria-label":i.removeConversion,bind:this,class:this.classes(Q,T),"data-index":t,key:`${o}__${Q}`,onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:i.removeConversion},m("span",{"aria-hidden":"true",class:it})))}_copyCoordinateOutput(t){const e=t.target;if(!("createTextRange"in document.body)){const t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o)}document.execCommand("copy")}_removeConversion(t){const e=t.currentTarget["data-index"];this.conversions.removeAt(e)}_setDefaultPattern(t){t.stopPropagation();const e=this._findSettingsFormat();e&&(e.currentPattern=e.get("defaultPattern"))}_toggleExpand(){this._expanded=!this._expanded}_toggleInputVisibility(){this._inputVisible=!this._inputVisible,this._popupVisible&&this._hidePopup(),this._inputVisible?this.viewModel.pause():this.viewModel.resume()}_toggleMode(){this.mode="live"===this.mode?"capture":"live"}_toggleSettingsVisibility(){this._settingsVisible=!this._settingsVisible,this._popupVisible&&this._hidePopup(),this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):this.viewModel.resume()}};t([n("viewModel.conversions")],lt.prototype,"conversions",void 0),t([n("viewModel.currentLocation")],lt.prototype,"currentLocation",void 0),t([n("viewModel.formats")],lt.prototype,"formats",void 0),t([n("viewModel.goToOverride")],lt.prototype,"goToOverride",void 0),t([s({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],lt.prototype,"label",void 0),t([s(),d("esri/widgets/CoordinateConversion/t9n/CoordinateConversion")],lt.prototype,"messages",void 0),t([s(),d("esri/t9n/common")],lt.prototype,"messagesCommon",void 0),t([n("viewModel.mode")],lt.prototype,"mode",void 0),t([s()],lt.prototype,"orientation",void 0),t([n("viewModel.requestDelay")],lt.prototype,"requestDelay",void 0),t([s()],lt.prototype,"multipleConversions",null),t([n("viewModel.locationSymbol")],lt.prototype,"locationSymbol",void 0),t([n("viewModel.view")],lt.prototype,"view",void 0),t([s({type:_})],lt.prototype,"viewModel",void 0),t([s()],lt.prototype,"visibleElements",void 0),t([a("visibleElements")],lt.prototype,"castVisibleElements",null),t([c()],lt.prototype,"_copyCoordinateOutput",null),t([c()],lt.prototype,"_removeConversion",null),t([c()],lt.prototype,"_setDefaultPattern",null),t([c()],lt.prototype,"_toggleExpand",null),t([c()],lt.prototype,"_toggleInputVisibility",null),t([c()],lt.prototype,"_toggleMode",null),t([c()],lt.prototype,"_toggleSettingsVisibility",null),lt=t([r("esri.widgets.CoordinateConversion")],lt);var pt=lt;export default pt;