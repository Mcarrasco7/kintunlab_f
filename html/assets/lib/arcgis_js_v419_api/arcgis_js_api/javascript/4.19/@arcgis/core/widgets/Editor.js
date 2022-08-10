/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{e as s}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/compilerUtils.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../chunks/asyncUtils.js";import"../core/urlUtils.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/shared.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import{substitute as o}from"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/vec3.js";import"../chunks/mathUtils.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import{getDisplayFieldName as a}from"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"../chunks/uid.js";import"../Graphic.js";import"../core/Handles.js";import"../layers/Layer.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"../chunks/colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/sizeVariableUtils.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/VisualVariablesMixin.js";import"../chunks/symbolConversion.js";import"../symbols/support/jsonUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/normalizeUtilsCommon.js";import"../geometry/support/normalizeUtils.js";import"../chunks/MemCache.js";import"../chunks/ItemCache.js";import"../chunks/utils3.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils2.js";import"../chunks/LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../TimeInterval.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../chunks/MultiOriginJSONSupport.js";import{init as n,on as l,watch as p,whenNot as m}from"../core/watchUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/fieldType.js";import"../geometry/HeightModelInfo.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";import"../chunks/Scheduler.js";import{HandleOwnerMixin as c}from"../core/HandleOwner.js";import"../chunks/_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"../form/ExpressionInfo.js";import"../form/elements/FieldElement.js";import"../form/support/elements.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/support/inputs.js";import"../form/elements/GroupElement.js";import"../form/FormTemplate.js";import"../geometry/support/geodesicUtils.js";import"../geometry/Circle.js";import"../chunks/vec4f64.js";import"../chunks/quatf64.js";import"../chunks/mat3.js";import"../chunks/BufferView.js";import"../chunks/vec2.js";import"../chunks/vec4.js";import"../chunks/quat.js";import"../chunks/domUtils.js";import{i as d}from"../chunks/widgetUtils.js";import"../chunks/projector.js";import{a as u}from"../chunks/accessibleHandler.js";import{m as h}from"../chunks/messageBundle.js";import"./support/widget.js";import{v as j}from"../chunks/vmEvent.js";import{j as k}from"../chunks/index.js";import y from"./Widget.js";import"../chunks/zscale.js";import"../chunks/queryZScale.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"../layers/FeatureLayer.js";import"../chunks/ArcGISService.js";import"../chunks/BlendLayer.js";import"../chunks/CustomParametersMixin.js";import"../chunks/PortalLayer.js";import"../chunks/RefreshableLayer.js";import"../chunks/ScaleRangeLayer.js";import"../layers/support/TimeInfo.js";import"../chunks/TemporalLayer.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../chunks/labelUtils.js";import"../layers/support/LabelClass.js";import"../chunks/defaultsJSON.js";import"../chunks/defaults.js";import"../chunks/featureReductionUtils.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../layers/support/FieldsIndex.js";import"../layers/support/GeometryFieldsInfo.js";import"../chunks/labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/DataLayerSource.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import"../chunks/GraphicsCollection.js";import"../layers/GraphicsLayer.js";import"../chunks/utils4.js";import"../tasks/Task.js";import"../rest/query/support/AttachmentInfo.js";import"../chunks/query.js";import"../chunks/executeRelationshipQuery.js";import"../chunks/pbf.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/pbfQueryUtils.js";import"../chunks/featureConversionUtils.js";import"../tasks/QueryTask.js";import"../chunks/aaBoundingBox.js";import"../chunks/vec4f32.js";import"../chunks/quantizationUtils.js";import"../chunks/mat2d.js";import"../symbols/support/symbolUtils.js";import"../chunks/byteSizeEstimations.js";import"../chunks/dehydratedFeatureComparison.js";import"../chunks/dehydratedFeatures.js";import"../chunks/ElevationProvider.js";import"../chunks/interactiveToolUtils.js";import"../chunks/throttle.js";import g from"./Attachments.js";import"./Attachments/AttachmentsViewModel.js";import"./Feature/FeatureViewModel.js";import"./Feature.js";import"../chunks/AnchorElementViewModel.js";import"./Spinner/SpinnerViewModel.js";import{S as f}from"./Popup.js";import"../chunks/Queue.js";import"../chunks/InputManager.js";import"../chunks/layerViewUtils.js";import"../chunks/actions.js";import"./Popup/PopupViewModel.js";import"../chunks/GoTo.js";import"../chunks/MapUtils.js";import"../chunks/screenUtils2.js";import"../chunks/mat2df64.js";import"../chunks/vec2f64.js";import"../chunks/requestImageUtils.js";import"../chunks/VertexColor.glsl.js";import"../chunks/Program.js";import"../chunks/FramebufferObject.js";import"../chunks/renderState.js";import"../chunks/glUtil.js";import"../chunks/InterleavedLayout.js";import"../chunks/mat4f32.js";import"../chunks/vec3f32.js";import"../chunks/stack.js";import"../chunks/geometryUtils.js";import"../chunks/ColorMaterial.js";import"../chunks/Util.js";import"../chunks/glUtil3D.js";import"../chunks/Object3D.js";import"../chunks/VertexArrayObject.js";import"../chunks/sdfPrimitives.js";import"../chunks/PiUtils.glsl.js";import"../chunks/GLMaterialTexture.js";import"../chunks/VerticalOffset.glsl.js";import"../chunks/RibbonLineMaterial.js";import"../chunks/Texture.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/hitTestSelectUtils.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../chunks/Settings.js";import b from"../views/interactive/snapping/SnappingOptions.js";import"../views/draw/DrawAction.js";import"../chunks/elevationInfoUtils.js";import"../chunks/AppendVertex.js";import"../chunks/Keys.js";import"../views/draw/MultipointDrawAction.js";import"../chunks/InteractiveToolBase.js";import"../chunks/DrawTool.js";import"../chunks/VisualElement.js";import"../chunks/LaserlineVisualElement.js";import"../chunks/Object3DVisualElement.js";import"../chunks/RightAngleQuadVisualElement.js";import"../views/draw/PointDrawAction.js";import"../views/draw/PolygonDrawAction.js";import"../views/draw/PolylineDrawAction.js";import"../views/draw/SegmentDrawAction.js";import"../views/draw/Draw.js";import"../chunks/drapedUtils.js";import"../chunks/moment.js";import"./FeatureForm/FieldConfig.js";import"./FeatureForm/FieldGroupConfig.js";import"./FeatureForm/InputField.js";import"./FeatureForm/InputFieldGroup.js";import"./FeatureForm/FeatureFormViewModel.js";import w from"./FeatureForm.js";import"./FeatureTemplates/TemplateItem.js";import"./FeatureTemplates/TemplateItemGroup.js";import"./FeatureTemplates/FeatureTemplatesViewModel.js";import v,{I as _}from"./FeatureTemplates.js";import"../chunks/editingSupport.js";import"./Editor/CreateWorkflowData.js";import"./Editor/Edits.js";import"./Editor/Workflow.js";import"../chunks/workflowUtils.js";import"./Editor/CreateWorkflow.js";import"./Editor/UpdateWorkflowData.js";import"./Editor/UpdateWorkflow.js";import"./Sketch/SketchViewModel.js";import M from"./Editor/EditorViewModel.js";const F="esri-editor esri-widget esri-widget--panel",S="esri-editor__header",C="esri-editor__scroller",A="esri-editor__content",T="esri-editor__content-group",U="esri-editor__temp-wrapper",I="esri-editor__message",D="esri-editor__controls",E="esri-editor__title",W="esri-editor__back-button",V="esri-editor__mode-selection",L="esri-editor__progress-bar",P="esri-editor__warning-card",x="esri-editor__warning-header",R="esri-editor__warning-heading",O="esri-editor__warning-message",B="esri-editor__warning-divider",H="esri-editor__warning-option",G="esri-editor__warning-option--primary",q="esri-editor__warning-option--negative",z="esri-editor__warning-option--positive",Q="esri-editor__feature-list-item",J="esri-editor__feature-list-item--disabled",K="esri-editor__feature-list-name",N="esri-editor__feature-list-icon",$="esri-editor__control-button",Z="esri-editor__overlay",X="esri-icon-right",Y="esri-icon-left",ee="esri-icon-notice-triangle",te="esri-icon-edit",se="esri-button",re="esri-button--disabled",ie="esri-button--secondary",oe="esri-button--tertiary",ae="esri-heading",ne="esri-interactive";function le(e){e.focus()}let pe=class extends(c(y)){constructor(e,t){super(e,t),this._candidateCommitted=!1,this._featureForm=new w,this._attachments=new g({visibleElements:{addSubmitButton:!1,cancelAddButton:!1,cancelUpdateButton:!1,deleteButton:!1,errorMessage:!1,progressBar:!1,updateButton:!1}}),this._featureTemplates=new v,this._filterText="",this._prompt=null,this._spinner=new f,this.activeWorkflow=null,this.allowedWorkflows=null,this.iconClass=te,this.label=void 0,this.layerInfos=null,this.messages=null,this.messagesCommon=null,this.messagesTemplates=null,this.snappingOptions=new b,this.supportingWidgetDefaults=null,this.view=null,this.viewModel=new M,this._handleHeaderClickOrKeyDown=e=>{e.currentTarget["data-prevent-back"]||this._handleBack.call(this,e)},this._setCandidateFeature=(e,t=!1)=>{if(this._candidateCommitted)return;const s=this.viewModel.activeWorkflow;s.data.edits.feature=e,t&&(s.next(),this._candidateCommitted=!0)},this._handleSave=this._handleSave.bind(this),this._handleBack=this._handleBack.bind(this),this._handleDone=this._handleDone.bind(this),this._handleDelete=this._handleDelete.bind(this),this._handleAdd=this._handleAdd.bind(this),this._handleEdit=this._handleEdit.bind(this),this._handleAttachmentAdd=this._handleAttachmentAdd.bind(this),this._handleAttachmentUpdate=this._handleAttachmentUpdate.bind(this),this._handleAttachmentDelete=this._handleAttachmentDelete.bind(this)}initialize(){this.own([n(this,"viewModel",(e=>{this._featureForm.viewModel=e?e.featureFormViewModel:null,this._attachments.viewModel=e?e.attachmentsViewModel:null,this._featureTemplates.viewModel=e?e.featureTemplatesViewModel:null,this._spinner.viewModel=e?e.spinnerViewModel:null})),n(this,"view",((e,t)=>{const s=`editor-${this.id}-spinner`;t&&t.ui.remove(this._spinner,s),e&&e.ui.add(this._spinner,{key:s,position:"manual"})})),l(this,"viewModel.sketchViewModel","create",(()=>{this.scheduleRender()})),l(this,"viewModel.activeWorkflow","cancel-request",(({controller:e})=>{const{messages:t,messagesCommon:s}=this;this._prompt={title:t.cancelRequestTitle,message:t.cancelRequestWarningMessage,options:[{label:s.form.no,type:"neutral",action:()=>(e.deny(),this._prompt=null)},{label:s.form.yes,type:"negative",action:()=>{e.allow(),this._prompt=null}}]},this.scheduleRender()})),n(this,"supportingWidgetDefaults",(e=>{e&&(this._featureForm.set(e.featureForm),this._attachments.set(e.attachments),this._featureTemplates.set(e.featureTemplates),this.viewModel.sketchViewModel.set(e.sketch))})),p(this,"_attachments.error",(e=>{if(!e)return;const{messages:t,messagesCommon:s}=this;this._prompt={title:t.errorWarningTitle,message:e.message,options:[{label:s.form.ok,type:"neutral",action:()=>{this._prompt=null}}]}})),p(this,"viewModel.failures",(e=>{if(!e)return;const{messages:t}=this,[{error:s,retry:r,cancel:i}]=e;this._prompt={title:t.errorWarningTitle,message:o(t.errorWarningMessageTemplate,{errorMessage:s.message}),options:[{label:t.retry,type:"positive",action:()=>{r(),this._prompt=null}},{label:t.ignore,type:"neutral",action:()=>(i(),this._prompt=null)}]}})),p(this,"viewModel.state",(e=>{"awaiting-update-feature-candidate"===e&&(this._candidateCommitted=!1)})),p(this,["_attachments.selectedFile","_attachments.submitting"],(()=>this.scheduleRender())),m(this,"viewModel.activeWorkflow",(()=>this._featureTemplates.filterText=""))])}destroy(){this._attachments.destroy(),this._featureForm.destroy(),this._featureTemplates.destroy()}startCreateWorkflowAtFeatureTypeSelection(){return this.viewModel.startCreateWorkflowAtFeatureTypeSelection()}startCreateWorkflowAtFeatureCreation(e){return this.viewModel.startCreateWorkflowAtFeatureCreation(e)}startCreateWorkflowAtFeatureEdit(e){return this.viewModel.startCreateWorkflowAtFeatureEdit(e)}startUpdateWorkflowAtFeatureSelection(){return this.viewModel.startUpdateWorkflowAtFeatureSelection()}startUpdateWorkflowAtMultipleFeatureSelection(e){return this.viewModel.startUpdateWorkflowAtMultipleFeatureSelection(e)}startUpdateWorkflowAtFeatureEdit(e){return this.viewModel.startUpdateWorkflowAtFeatureEdit(e)}deleteFeatureFromWorkflow(){return this.viewModel.deleteFeatureFromWorkflow()}cancelWorkflow(e){return this.viewModel.cancelWorkflow(e)}render(){const{_attachments:e,viewModel:t}=this;if(!t)return k("div",{class:F});const{state:s}=t,r=this._prompt?k("div",{class:Z,key:"overlay"},this.renderPrompt({message:this._prompt.message,title:this._prompt.title,options:this._prompt.options})):null;return k("div",{class:F},t.syncing||e.submitting?this.renderProgressBar():null,"disabled"===s?null:"ready"===s?this.renderLanding():"awaiting-feature-creation-info"===s?this.renderTemplates():"editing-new-feature"===s||"editing-existing-feature"===s?this.renderAttributeEditing():"awaiting-feature-to-update"===s?this.renderFeatureUpdating():"awaiting-update-feature-candidate"===s?this.renderFeatureList():"awaiting-feature-to-create"===s?this.renderFeatureCreation():"adding-attachment"===s?this.renderAttachmentAdding():"editing-attachment"===s?this.renderAttachmentEditing():null,r)}renderTemplates(){return k("div",{class:U,key:"wrapper"},this.renderHeader(this.messages.selectTemplate,!0),k("div",{key:"content",class:A},this._featureTemplates.render()))}renderAttributeEditing(){const{activeWorkflow:e,featureFormViewModel:t}=this.viewModel,s=e.data.edits.feature,r="update"===e.type&&!e.data.edits.modified||t.inputFields.length>0&&!t.valid,{messages:i,messagesCommon:a}=this,n="create"===e.type?a.add:a.update,l=[{label:n,type:"primary",disabled:r,clickHandler:this._handleSave}];let p=!1;"update"===e.type&&(e.data.editableItem.hasAttachments&&(p=!0),e.data.editableItem.supports.indexOf("delete")>-1&&l.push({label:a.delete,type:"tertiary",clickHandler:this._handleDelete}));const m=this._getLabel(s);return k("div",{class:U,key:"wrapper"},this.renderHeader(m,!0),k("div",{key:"content",class:this.classes(A,C)},k("div",{class:T},t.inputFields.length>0?this._featureForm.render():this.renderMessage(o(i.clickToFinishTemplate,{button:n})),p?k("div",{key:"attachments"},k("div",null,i.attachments),this._attachments.render()):null)),this.renderControls(l))}renderAttachmentAdding(){const{_attachments:e,messages:t,messagesCommon:s}=this,r=[{label:e.submitting?s.cancel:s.add,disabled:e.submitting||!e.selectedFile,type:"primary",clickHandler:this._handleAttachmentAdd}];return k("div",{class:U,key:"wrapper"},this.renderHeader(t.addAttachment,!0,e.submitting),k("div",{key:"content",class:this.classes(A,C)},e.render()),this.renderControls(r))}renderAttachmentEditing(){const{_attachments:e,messages:t,messagesCommon:s}=this,r=[{label:s.update,disabled:e.submitting||!e.selectedFile,type:"primary",clickHandler:this._handleAttachmentUpdate},{label:s.delete,disabled:e.submitting,type:"tertiary",clickHandler:this._handleAttachmentDelete}];return k("div",{class:U,key:"wrapper"},this.renderHeader(t.editAttachment,!0,e.submitting),k("div",{key:"content",class:this.classes(A,C)},e.render()),this.renderControls(r))}renderFeatureUpdating(){const{messages:e}=this;return k("div",{class:U,key:"wrapper"},this.renderHeader(e.selectFeature,!0),k("div",{key:"content",class:this.classes(A,C)},this.renderMessage(e.selectFeatureToEdit)))}renderMessage(e){return k("div",{class:I},e)}renderFeatureCreation(){const{messages:e,viewModel:t}=this,s=t.sketchViewModel,r=t.activeWorkflow.data.creationInfo.layer,i=s.canUndo()&&s.createGraphic?s.createGraphic:null,o=this._getSketchingTip(r.geometryType,i);return k("div",{class:U,key:"wrapper"},this.renderHeader(e.placeFeature,!0),k("div",{key:"content",class:this.classes(A,C)},this.renderMessage(o)))}renderControls(e){return k("div",{class:D,key:"controls"},e.map((({disabled:e=!1,label:t,type:s,clickHandler:r},i)=>this.renderButton({label:t,class:this.classes($,se,"secondary"===s?ie:"tertiary"===s?oe:null,e?re:null),disabled:e,clickHandler:r,key:i}))))}renderPrompt({title:e,message:t,options:r=[]}){return k("div",{class:P,role:"alert"},k("div",{class:x},k("span",{class:ee,"aria-hidden":"true"}),k("h4",{class:this.classes(ae,R)},e)),k("div",{class:O},t),k("div",{class:B}),r.map((({label:e,action:t,type:r},i)=>{const o=0===i;return k("div",{afterCreate:o?le:null,class:this.classes(H,o?G:null,"positive"===r?z:"negative"===r?q:null),key:i,onclick:t,onkeydown:e=>{const r=s(e);"Enter"!==r&&" "!==r||(e.preventDefault(),t.call(null))},tabIndex:0,role:"button"},e)})))}renderProgressBar(){return k("div",{class:this.classes(L),key:"progress-bar"})}renderButton(e){return k("button",{class:e.class,disabled:e.disabled,key:e.key,onclick:e.clickHandler,type:"button"},e.label)}renderHeader(e,t=!1,s=!1){const{messagesCommon:r}=this;return k("header",{class:S,key:"header"},t?k("div",{"aria-label":r.back,class:this.classes(W,ne,s?re:null),key:"back-button","data-prevent-back":s,onclick:this._handleHeaderClickOrKeyDown,onkeydown:this._handleHeaderClickOrKeyDown,role:"button",tabIndex:0,title:r.back},k("span",{"aria-hidden":"true",class:d()?X:Y})):null,k("h4",{class:this.classes(E,ae)},e))}renderLanding(){const{messages:e}=this,{allowedWorkflows:t,canCreate:s,canUpdate:r}=this.viewModel,i=d()?Y:X;return k("div",{class:U,key:"wrapper"},this.renderHeader(e.widgetLabel),k("div",{key:"content",class:A,role:"group"},k("div",{class:V,key:"mode-selection"},t.indexOf("update")>-1?k("div",{"aria-disabled":r?"false":"true",class:this.classes(Q,r?null:J),key:"update",onclick:this._handleEdit,onkeydown:this._handleEdit,role:"button",tabIndex:r?0:-1},k("span",{class:K},e.editFeature),k("span",{"aria-hidden":"true",class:this.classes(N,i)})):null,t.indexOf("create")>-1?k("div",{class:this.classes(Q,s?null:J),key:"create",onclick:this._handleAdd,onkeydown:this._handleAdd,role:"button",tabIndex:s?0:-1},k("span",{class:K},e.addFeature),k("span",{"aria-hidden":"true",class:this.classes(N,i)})):null)))}renderFeatureList(){const{messages:e,messagesTemplates:t,viewModel:{editableItems:s,activeWorkflow:r}}=this,i=r.data.candidates,a=o(e.multipleFeaturesTemplate,{total:i.length}),n=new Map;i.map((e=>({label:this._getLabel(e),id:e.attributes[e.layer.objectIdField],data:e}))).filter((e=>{const{label:t,data:s}=e,r=this._filterText.toLowerCase(),{title:i}=s.layer;return this.viewModel.editableItems.find((e=>e.layer===s.layer)).supports.indexOf("update")>-1&&(!r||t.toLowerCase().indexOf(r)>-1||i.toLowerCase().indexOf(r)>-1)})).forEach((e=>{const t=e.data.layer;n.has(t)?n.get(t).items.push(e):n.set(t,{id:`${t.id}`,label:t.title,items:[e]})}));const l=s.filter((({layer:e})=>n.has(e))).map((({layer:e})=>n.get(e))).toArray();return k("div",{class:U,key:"wrapper"},this.renderHeader(a,!0),k("div",{key:"content",class:this.classes(A,C)},_({id:this.id,filterText:this._filterText,items:l,messages:{filterPlaceholder:t.filterPlaceholder,noItems:t.noItems,noMatches:t.noMatches},onItemMouseEnter:({data:e})=>this._setCandidateFeature(e),onItemMouseLeave:()=>this._setCandidateFeature(null),onItemSelect:({data:e})=>this._setCandidateFeature(e,!0),onFilterChange:e=>this._filterText=e})))}_getSketchingTip(e,t){const{messages:s}=this;if("point"===e)return s.tips.clickToAddPoint;if("polygon"===e||"polyline"===e){if(!t)return s.tips.clickToStart;const r=t.geometry,i="polygon"===e?"rings":"paths",[o]=r[i];return"polygon"===e&&o<4?s.tips.clickToContinue:s.tips.clickToContinueThenDoubleClickToEnd}return s.tips.clickToAddFeature}_getLabel(e){const t=e.layer,{objectIdField:s}=t,{attributes:r}=e,i=a(t);return i&&r[i]&&`${r[i]}`||o(this.messages.untitledFeatureTemplate,{id:r[s]})}_handleDelete(){const{messages:e,messagesCommon:t}=this;this._prompt={title:e.deleteWarningTitle,message:e.deleteWarningMessage,options:[{label:e.keepFeature,type:"neutral",action:()=>this._prompt=null},{label:t.delete,type:"positive",action:()=>{this.viewModel.deleteFeatureFromWorkflow(),this._prompt=null}}]}}_handleSave(){this.viewModel.activeWorkflow.commit()}_handleAttachmentAdd(){const{_attachments:e}=this,{activeWorkflow:t}=this.viewModel;e.addAttachment().then((()=>t.previous()))}_handleAttachmentUpdate(){const{_attachments:e}=this,{activeWorkflow:t}=this.viewModel;e.updateAttachment().then((()=>t.previous()))}_handleAttachmentDelete(){const{messages:e,messagesCommon:t}=this;this._prompt={title:e.deleteAttachmentWarningTitle,message:e.deleteAttachmentWarningMessage,options:[{label:e.keepAttachment,type:"neutral",action:()=>this._prompt=null},{label:t.delete,type:"positive",action:()=>{const{_attachments:e}=this,{activeWorkflow:t}=this.viewModel;e.deleteAttachment(e.viewModel.activeAttachmentInfo).then((()=>{t.previous(),this._prompt=null}))}}]}}_handleAdd(){this.viewModel.canCreate&&this.viewModel.startCreateWorkflowAtFeatureTypeSelection()}_handleEdit(){this.viewModel.canUpdate&&this.viewModel.startUpdateWorkflowAtFeatureSelection()}_handleDone(){this.viewModel.cancelWorkflow({force:!0})}_handleBack(){const{messages:e}=this,{activeWorkflow:t}=this.viewModel,{stepId:s,data:r,type:i}=t,o=()=>{t.hasPreviousStep?t.previous():this.viewModel.cancelWorkflow({force:!0})};if("editing-new-feature"===s||"editing-existing-feature"===s&&r.edits.modified){const t="create"===i?e.cancelAddWarningMessage:e.cancelEditWarningMessage,s="create"===i?e.cancelAddTitle:e.cancelEditTitle,r="create"===i?e.continueAdding:e.continueEditing,a="create"===i?e.discardFeature:e.discardEdits;this._prompt={title:s,message:t,options:[{label:r,type:"neutral",action:()=>this._prompt=null},{label:a,type:"negative",action:()=>{o(),this._prompt=null}}]}}else o()}};e([t()],pe.prototype,"_attachments",void 0),e([i("viewModel.activeWorkflow")],pe.prototype,"activeWorkflow",void 0),e([i("viewModel.allowedWorkflows")],pe.prototype,"allowedWorkflows",void 0),e([t()],pe.prototype,"iconClass",void 0),e([t({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],pe.prototype,"label",void 0),e([i("viewModel.layerInfos")],pe.prototype,"layerInfos",void 0),e([t(),h("esri/widgets/Editor/t9n/Editor")],pe.prototype,"messages",void 0),e([t(),h("esri/t9n/common")],pe.prototype,"messagesCommon",void 0),e([t(),h("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")],pe.prototype,"messagesTemplates",void 0),e([i("viewModel.snappingOptions")],pe.prototype,"snappingOptions",void 0),e([t()],pe.prototype,"supportingWidgetDefaults",void 0),e([i("viewModel.view")],pe.prototype,"view",void 0),e([t(),j(["workflow-cancel","workflow-commit"])],pe.prototype,"viewModel",void 0),e([u()],pe.prototype,"_handleDelete",null),e([u()],pe.prototype,"_handleAttachmentAdd",null),e([u()],pe.prototype,"_handleAttachmentUpdate",null),e([u()],pe.prototype,"_handleAttachmentDelete",null),e([u()],pe.prototype,"_handleAdd",null),e([u()],pe.prototype,"_handleEdit",null),e([u()],pe.prototype,"_handleDone",null),e([u()],pe.prototype,"_handleBack",null),pe=e([r("esri.widgets.Editor")],pe);var me=pe;export default me;
