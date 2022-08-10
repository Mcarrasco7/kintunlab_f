/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{b as t,i}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import r from"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import{o as a}from"./locale.js";import"./number.js";import{fetchMessageBundle as n}from"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import{s as l,p as m,d as p}from"./mathUtils2.js";import{c as d}from"./vec3f64.js";import"./common.js";import{a as c,n as h,s as u,c as g,k as _,i as b,g as j,b as v,e as y}from"./vec3.js";import"./mathUtils.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import{d as f,f as w}from"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import"../Graphic.js";import L from"../core/Handles.js";import{q as S,e as O,c as P}from"./unitUtils.js";import{whenOnce as C}from"../core/watchUtils.js";import"./fieldType.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"./Scheduler.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"./vec4f64.js";import"./earcut.js";import"./deduplicate.js";import"./triangulationUtils.js";import{c as E}from"./quatf64.js";import"./mat3.js";import"./BufferView.js";import{i as D}from"./vec2.js";import"./vec4.js";import"./quat.js";import"./domUtils.js";import"./widgetUtils.js";import"./projector.js";import{L as M,G as z,E as V,f as A,a as x,b as U,c as R,d as T,e as G,m as I}from"./quantityFormatUtils.js";import"./messageBundle.js";import"./index.js";import"../widgets/Widget.js";import"../layers/support/Field.js";import"../tasks/support/AttachmentQuery.js";import"../rest/query/support/AttachmentInfo.js";import"./aaBoundingBox.js";import{f as k}from"./vec4f32.js";import"./quantizationUtils.js";import"./byteSizeEstimations.js";import"./dehydratedFeatures.js";import"./ElevationProvider.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"./MapUtils.js";import"./vec2f64.js";import{S as F,g as H,p as q,a as W,b as B,D as Q,V as N,R as J,M as $,G as K,m as X}from"./VertexColor.glsl.js";import{P as Y}from"./Program.js";import"./FramebufferObject.js";import{m as Z,a as ee,d as te}from"./renderState.js";import"./glUtil.js";import{n as ie}from"./InterleavedLayout.js";import"./mat4f32.js";import"./vec3f32.js";import{a as se}from"./stack.js";import"./geometryUtils.js";import{G as re}from"./ColorMaterial.js";import"./Util.js";import"./glUtil3D.js";import"./Object3D.js";import"./VertexArrayObject.js";import{u as oe}from"./lineUtils.js";import"./intersectorUtils.js";import"./Camera.js";import"./PiUtils.glsl.js";import"./RibbonLineMaterial.js";import"./PhysicallyBasedRendering.glsl.js";import"./VisualElement.js";import{O as ae}from"./Object3DVisualElement.js";import{R as ne}from"./RightAngleQuadVisualElement.js";import{s as le}from"./viewUtils.js";import{L as me}from"./LineVisualElement.js";var pe=Object.freeze({__proto__:null,build:function(){const e=new F;e.vertex.uniforms.add("proj","mat4").add("view","mat4").add("width","float"),e.attributes.add("position","vec3"),e.attributes.add("normal","vec3"),e.attributes.add("uv0","vec2"),e.attributes.add("auxpos1","float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),e.vertex.code.add(H`
    void main(void) {
      vec3 bitangent = normal;

      vtc = uv0;
      vlength = auxpos1;
      vradius = 0.5 * width;

      vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
      gl_Position = proj * pos;
    }
  `),e.fragment.uniforms.add("outlineSize","float").add("outlineColor","vec4").add("stripeLength","float").add("stripeEvenColor","vec4").add("stripeOddColor","vec4");const t=1/Math.sqrt(2);return e.fragment.code.add(H`
    const float INV_SQRT2 = ${H.float(t)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),e}});class de extends B{constructor(e,t){super(e,t)}initializeProgram(e){const t=de.shader.get().build();return new Y(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),Q)}bindPass(e,t,i){N.bindProjectionMatrix(this.program,i.camera.projectionMatrix),this.program.setUniform1f("width",t.width),this.program.setUniform1f("outlineSize",t.outlineSize),this.program.setUniform4fv("outlineColor",t.outlineColor),this.program.setUniform1f("stripeLength",t.stripeLength),this.program.setUniform4fv("stripeEvenColor",t.stripeEvenColor),this.program.setUniform4fv("stripeOddColor",t.stripeOddColor)}bindDraw(e){N.bindView(this.program,e)}initializePipeline(){return Z({polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},depthWrite:ee,colorWrite:te})}get primitiveType(){return 5}}de.shader=new J(pe,(()=>Promise.resolve().then((function(){return pe}))));class ce extends W{constructor(){super(...arguments),this.polygonOffsetEnabled=!1}}e([q()],ce.prototype,"polygonOffsetEnabled",void 0);class he extends ${constructor(e){super(e,ge),this.techniqueConfig=new ce}getTechniqueConfig(){return this.techniqueConfig.polygonOffsetEnabled=this.params.polygonOffset,this.techniqueConfig}dispose(){}getPassParameters(){return this.params}intersect(){}createBufferWriter(){return new we}getGLMaterial(e){return 0===e.output?new ue(e):void 0}}class ue extends K{constructor(e){super(e),this.updateParameters()}updateParameters(){this.technique=this.techniqueRep.acquireAndReleaseExisting(de,this.material.getTechniqueConfig(),this.technique)}beginSlot(e){return 3===e}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)}}const ge={width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1,...X},_e=ie().vec3f("position").vec3f("normal").vec2f("uv0").f32("auxpos1"),be=d(),je=d(),ve=d(),ye=d(),fe=d();class we{constructor(){this.vertexBufferLayout=_e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 2*(e.indices.get("position").length/2+1)}write(e,t,i,s){const r=t.vertexAttributes.get("position").data,o=t.vertexAttributes.get("normal").data,a=r.length/3,n=t&&t.indices&&t.indices.get("position");n&&n.length!==2*(a-1)&&console.warn("MeasurementArrowMaterial does not support indices");const l=be,m=je,p=ve,d=ye,j=fe,v=e.transformation,y=e.invTranspTransformation,f=i.position,w=i.normal,L=i.uv0;let S=0;for(let e=0;e<a;++e){const t=3*e;if(c(l,r[t],r[t+1],r[t+2]),e<a-1){const t=3*(e+1);c(m,r[t],r[t+1],r[t+2]),c(j,o[t],o[t+1],o[t+2]),h(j,j),u(p,m,l),h(p,p),g(d,j,p),h(d,d)}const i=_(l,m);v&&y&&(b(l,l,v),b(m,m,v),b(d,d,y));const n=s+2*e,O=n+1;f.setVec(n,l),f.setVec(O,l),w.setVec(n,d),w.setVec(O,d),L.set(n,0,S),L.set(n,1,-1),L.set(O,0,S),L.set(O,1,1),e<a-1&&(S+=i)}const O=i.auxpos1;for(let e=0;e<2*a;++e)O.set(s+e,S)}}class Le extends ae{constructor(e){super(e),this._parameters=Se,this._handles=null,this._origin=d(),this._originTransform=E(),this._arrowCenter=d(),this._renderOccluded=4,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameterValues({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameterValues({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const e=this._stripesEnabled?this._parameters.arrowStripeEvenColor:this._parameters.arrowStripeOddColor;this._arrowMaterial.setParameterValues({stripeEvenColor:e})}}createExternalResources(){const e=this._stripesEnabled?this._parameters.arrowStripeEvenColor:this._parameters.arrowStripeOddColor;this._arrowMaterial=new he({outlineColor:this._parameters.arrowOutlineColor,stripeEvenColor:e,stripeOddColor:this._parameters.arrowStripeOddColor,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new L,this._handles.add(this.view.state.watch("camera",(()=>{this.viewChanged()})))}destroyExternalResources(){this._arrowMaterial=null,this._handles.destroy(),this._handles=null}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(t(this._geometry)||t(this._geometry.startRenderSpace)||t(this._geometry.endRenderSpace))return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);e.addGeometry(i,this._arrowMaterial,this._originTransform),this.viewChanged()}_createArrowGeometry(e,t,i,s){const r=this.view.renderCoordsHelper,o=[],a=[],n=(e,t)=>{const s=se.get();u(s,e,i),o.push(s),a.push(t)};if("euclidean"===s.type){s.eval(.5,this._arrowCenter);const i=se.get();r.worldUpAtPosition(this._arrowCenter,i),n(e,i),n(t,i)}else{s.eval(.5,this._arrowCenter);const e=this._parameters.arrowSubdivisions+1&-2;for(let t=0;t<e;++t){const i=t/(e-1),o=se.get(),a=se.get();s.eval(i,o),r.worldUpAtPosition(o,a),n(o,a)}}return re.createPolylineGeometry(o,a)}geometryChanged(){this.recreateGeometry()}viewChanged(){if(this.view.ready&&this.attached&&i(this._geometry)){const e=this.view._stage.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameterValues({width:this._parameters.arrowWidth*e})}}}const Se={arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128};let Oe=class extends r{constructor(e){super(e),this._params={...De},this._handles=new L,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._segmentLabelDisplayedMeasurement="euclidean",this._startPosition=d(),this._endPosition=d(),this._cornerPosition=d(),this._startPositionAtSeaLevel=d(),this._endPositionAtSeaLevel=d(),this._viewMode="none",this._geometryDirty=!0,this.state="pending",this.messages=null,this._visualizedMeasurement="auto",this._actualVisualizedMeasurement="euclidean",this._visualElementOrientation="auto",this._triangleOrientationOverride=null,this._triangleCollapseRatioThreshold=.03,this._geodesicDistanceThreshold=1e5}initialize(){this._handles.add(C(this.view,"ready",(()=>this._initialize()),!0))}_initialize(){switch(this.state){case"ready":throw new Error("invalid state");case"destroyed":return}this._segmentVisualElement=new Le({attached:!0,view:this.view,geometry:null,renderOccluded:4}),this._triangleVisualElement=new me({attached:!0,view:this.view,width:this._params.triangleLineWidth,color:this._params.triangleColor,renderOccluded:4}),this._rightAngleQuad=new ne({attached:!0,view:this.view,color:Ee,renderOccluded:4}),this._projectedGeodesicLine=new me({attached:!0,view:this.view,width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:oe(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._geodesicStartHint=new me({attached:!0,view:this.view,width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:oe(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._geodesicEndHint=new me({attached:!0,view:this.view,width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stipplePattern:oe(this._params.guideStippleLengthPixels),stippleIntegerRepeats:!1,renderOccluded:4}),this._segmentLabel=new M({attached:!0,view:this.view,fontSize:this._params.direcLabelFontSize}),this._verticalLabel=new M({attached:!0,view:this.view,fontSize:this._params.verticalLabelFontSize}),this._horizontalLabel=new M({attached:!0,view:this.view,fontSize:this._params.horizontalLabelFontSize}),this._handles.add([this.dataObject.watch("visible",(()=>this._update(!1)),!0),this.dataObject.watch("startPoint",(()=>this._update()),!0),this.dataObject.watch("endPoint",(()=>this._update()),!0),this.dataObject.watch("measurement",(()=>this._update()),!0),this.dataObject.watch("settings.unit",(()=>{this._updateLabels(),this._updateSegmentStripeLength()}),!0),this.view.state.watch("camera",(()=>this._update()),!0),a((async()=>this._updateMessageBundle()))]),this._set("state","ready"),this._updateMessageBundle(),this._update()}async whenReady(){return C(this,"ready").then((()=>{}))}get ready(){return"ready"===this.state}get viewMode(){return this._viewMode}get visualizedMeasurement(){return this._visualizedMeasurement}set visualizedMeasurement(e){e!==this._visualizedMeasurement&&(this._visualizedMeasurement=e,this._update())}get actualVisualizedMeasurement(){return this._actualVisualizedMeasurement}get visualElementsOrientation(){return this._visualElementOrientation}set visualElementsOrientation(e){e!==this._visualElementOrientation&&(this._visualElementOrientation=e,this._update())}get allowVisualElementsOrientationChange(){return t(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){t(this._triangleOrientationOverride)!==e&&(t(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._getActualVisualElementsOrientation():(this._triangleOrientationOverride=null,this._update()))}get triangleCollapseRatioThreshold(){return this._triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._triangleCollapseRatioThreshold=e,this._update()}get geodesicDistanceThreshold(){return this._geodesicDistanceThreshold}set geodesicDistanceThreshold(e){this._geodesicDistanceThreshold=e,this._update()}get segmentLabel(){return this._segmentLabel}get horizontalLabel(){return this._horizontalLabel}get verticalLabel(){return this._verticalLabel}get testData(){let e=null;const t="geodesic"===this.actualVisualizedMeasurement;return e={direct:t?this.horizontalLabel:this.segmentLabel,horizontal:t?this.segmentLabel:this.horizontalLabel,vertical:this.verticalLabel},{labels:e,stripeLength:this._segmentVisualElement.stripeLength}}_update(e=!0){switch(this.state){case"destroyed":case"pending":return}const t=this.dataObject.visible;switch(this._geometryDirty=e,this._geometryDirty&&t&&(this._updateGeometryAndViewMode(),this._geometryDirty=!1),this._viewMode){case"none":this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment":this._segmentVisualElement.visible=t,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment-and-triangle":this._segmentVisualElement.visible=t,this._triangleVisualElement.visible=t,this._rightAngleQuad.visible=t,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1;break;case"segment-and-projection":this._segmentVisualElement.visible=t,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}this._updateLabels()}destroy(){switch(this.state){case"destroyed":case"pending":return}this._handles.destroy(),this._segmentVisualElement.destroy(),this._segmentVisualElement=null,this._triangleVisualElement.destroy(),this._triangleVisualElement=null,this._rightAngleQuad.destroy(),this._rightAngleQuad=null,this._projectedGeodesicLine.destroy(),this._projectedGeodesicLine=null,this._geodesicStartHint.destroy(),this._geodesicStartHint=null,this._geodesicEndHint.destroy(),this._geodesicEndHint=null,this._segmentLabel.destroy(),this._segmentLabel=null,this._verticalLabel.destroy(),this._verticalLabel=null,this._horizontalLabel.destroy(),this._horizontalLabel=null,this.set("view",null),this._set("state","destroyed")}_updateGeometryAndViewMode(){const e=this.view,i=e.renderCoordsHelper;if(t(this.dataObject.startPoint)||t(this.dataObject.endPoint)||this.dataObject.startPoint.equals(this.dataObject.endPoint))return this._viewMode="none",void(this._actualVisualizedMeasurement="auto"===this._visualizedMeasurement?"euclidean":this._visualizedMeasurement);i.toRenderCoords(this.dataObject.startPoint,this._startPosition),i.toRenderCoords(this.dataObject.endPoint,this._endPosition);const s=this._getActualVisualElementsOrientation(),r=this._updateActualVisualizedMeasurement();this._viewMode=this._computeViewMode(r);let o=this._startPosition,a=this._endPosition;const n="above-segment"===s?1:-1,m=n*(i.getAltitude(a)-i.getAltitude(o));m<0&&(o=this._endPosition,a=this._startPosition);const p="geodesic"===r?new z(this._startPosition,this._endPosition,i.spatialReference):new V(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=p,this._updateSegmentStripeLength(),this._segmentLabelDisplayedMeasurement=r,this._viewMode){case"segment":this._segmentLabel.anchor="above-segment"===s?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:p,sampleLocation:"center"};break;case"segment-and-triangle":{const t=this._cornerPosition;i.worldUpAtPosition(o,t),v(t,t,n*Math.abs(m)),y(t,t,o),this._triangleVisualElement.geometry=[[[o[0],o[1],o[2]],[t[0],t[1],t[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:o,center:t,next:a};const r=new V(o,t),d=new V(t,a),c=function(e,t,i,s,r){const o=ze,a=Ve;r.projectToRenderScreen(i,o),r.projectToRenderScreen(t,a);const n={segment:"bottom",horizontal:"top",vertical:o[0]<a[0]?"left":"right"};{const s=Ae,o=xe;if(le(e,i,s,r),le(e,t,o,r),D(s,o)>=Me)n.segment=l(s[1])===l(o[1])?I(n.vertical):n.vertical;else{const e=Ue;le(i,t,e,r),D(e,o)>=Me&&(n.segment=l(e[0])===l(o[0])?I(n.horizontal):n.horizontal)}}if("below-segment"===s){const e=e=>"top"===e?"bottom":"top";n.segment=e(n.segment),n.horizontal=e(n.horizontal),n.vertical=e(n.vertical)}return n}(o,a,t,s,e.state.camera);this._segmentLabel.geometry={type:"segment",segment:p,sampleLocation:"center"},this._segmentLabel.anchor=c.segment,this._verticalLabel.geometry={type:"segment",segment:r,sampleLocation:"center"},this._verticalLabel.anchor=c.vertical,this._horizontalLabel.geometry={type:"segment",segment:d,sampleLocation:"center"},this._horizontalLabel.anchor=c.horizontal;break}case"segment-and-projection":{j(this._startPositionAtSeaLevel,this._startPosition),j(this._endPositionAtSeaLevel,this._endPosition),i.setAltitude(0,this._startPositionAtSeaLevel),i.setAltitude(0,this._endPositionAtSeaLevel);const e=new z(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,i.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(e),this._geodesicStartHint.setGeometryFromSegment(new V(this._startPositionAtSeaLevel,this._startPosition)),this._geodesicEndHint.setGeometryFromSegment(new V(this._endPositionAtSeaLevel,this._endPosition)),this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"},this._segmentLabel.anchor="above-segment"===s?"top":"bottom";break}}}_updateLabels(){switch(this.state){case"pending":case"destroyed":return}const e=this.messages,i=this.dataObject.measurement;if(t(i)||!e)return this._segmentLabel.visible=!1,this._horizontalLabel.visible=!1,void(this._verticalLabel.visible=!1);const s={verticalDistance:"",horizontalDistance:"",euclideanDistance:"",geodesicDistance:""},r=i.directDistance,o=i.horizontalDistance,a=i.verticalDistance,n=i.geodesicDistance,l=i.geodesicAngle;switch(this.dataObject.settings.unit){case"metric":s.euclideanDistance=r&&T(e,r),s.horizontalDistance=o&&T(e,o),s.verticalDistance=a&&G(e,a),s.geodesicDistance=n&&T(e,n);break;case"imperial":s.euclideanDistance=r&&U(e,r),s.horizontalDistance=o&&U(e,o),s.verticalDistance=a&&R(e,a),s.geodesicDistance=n&&U(e,n);break;case"degrees":{const t=l&&A(e,l,"degrees");s.euclideanDistance=t,s.horizontalDistance=t,s.geodesicDistance=t;break}case"degrees-minutes-seconds":s.horizontalDistance=l&&x(l);break;default:{const t=this.dataObject.settings.unit;s.euclideanDistance=r&&A(e,r,t),s.horizontalDistance=o&&A(e,o,t),s.verticalDistance=a&&A(e,a,t),s.geodesicDistance=n&&A(e,n,t);break}}this._segmentLabel.text="euclidean"===this._segmentLabelDisplayedMeasurement?s.euclideanDistance:s.geodesicDistance,this._horizontalLabel.text=s.horizontalDistance,this._verticalLabel.text=s.verticalDistance;const m=this.dataObject.visible;switch(this._viewMode){case"none":this._segmentLabel.visible=!1,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1;break;case"segment":this._segmentLabel.visible=m,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1;break;case"segment-and-triangle":this._segmentLabel.visible=m,this._horizontalLabel.visible=m,this._verticalLabel.visible=m;break;case"segment-and-projection":this._segmentLabel.visible=m,this._horizontalLabel.visible=!1,this._verticalLabel.visible=!1}this.notifyChange("segmentLabel"),this.notifyChange("horizontalLabel"),this.notifyChange("verticalLabel")}_updateSegmentStripeLength(){const e=function(e,t){let s=null;if(i(t.measurement)){const e=t.measurement.directDistance;switch(t.settings.unit){case"metric":s=e&&e.toUnit("meters");break;case"imperial":s=e&&e.toUnit(S(e.value,e.unit));break;case"degrees":case"degrees-minutes-seconds":{const e=t.measurement.geodesicAngle;s=e&&e.toUnit("degrees");break}default:s=e&&e.toUnit(t.settings.unit)}}if(s){let t=1;return t=m(s.value/30),t*="degrees"===s.unit?O(e.spatialReference).metersPerDegree:P(1,s.unit,"meters"),t}return null}(this.view,this.dataObject);i(e)?(this._segmentVisualElement.stripeLength=e,this._segmentVisualElement.stripesEnabled=!0):this._segmentVisualElement.stripesEnabled=!1}_computeViewMode(e){const i=this.dataObject,s=i.measurement;if("geodesic"===e){if(!Pe(i,this.geodesicDistanceThreshold))return"segment";if(Ce(this.view,this._startPosition)||Ce(this.view,this._endPosition))return"segment-and-projection"}if(t(s))return"segment";return Math.min(s.verticalDistance.value/s.horizontalDistance.value,s.horizontalDistance.value/s.verticalDistance.value)<this.triangleCollapseRatioThreshold?"segment":"segment-and-triangle"}_getActualVisualElementsOrientation(){return i(this._triangleOrientationOverride)?this._triangleOrientationOverride:"auto"===this.visualElementsOrientation?this.view.state.camera.aboveGround?"above-segment":"below-segment":this.visualElementsOrientation}_updateActualVisualizedMeasurement(){if("auto"===this._visualizedMeasurement){this._actualVisualizedMeasurement="euclidean";const e=this.dataObject.settings.unit;"degrees"!==e&&"degrees-minutes-seconds"!==e||(this._actualVisualizedMeasurement="geodesic"),Pe(this.dataObject,this.geodesicDistanceThreshold)&&(this._actualVisualizedMeasurement="geodesic")}else this._actualVisualizedMeasurement=this._visualizedMeasurement;return this._actualVisualizedMeasurement}_updateMessageBundle(){n("esri/core/t9n/Units").then((e=>{this.messages=e,this.view&&this._updateLabels()}))}};function Pe(e,t){return i(e.measurement)&&e.measurement.horizontalDistance&&e.measurement.horizontalDistance.value>t}function Ce(e,t){if(!e.state)return!1;const i=e.state.camera,s=e.renderCoordsHelper,r=i.computeScreenPixelSizeAt(t);return s.getAltitude(t)/r>=10}e([s({readOnly:!0})],Oe.prototype,"state",void 0),e([s()],Oe.prototype,"ready",null),e([s()],Oe.prototype,"messages",void 0),e([s()],Oe.prototype,"view",void 0),e([s()],Oe.prototype,"dataObject",void 0),e([s()],Oe.prototype,"viewMode",null),e([s()],Oe.prototype,"segmentLabel",null),e([s()],Oe.prototype,"horizontalLabel",null),e([s()],Oe.prototype,"verticalLabel",null),Oe=e([o("esri.views.3d.interactive.graphics.DirectLineMeasurement3D.DirectLineMeasurement3DView")],Oe);const Ee=k(1,.5,0,.75),De={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:Ee,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:Ee,guideLineWidth:2,guideLineColor:Ee,guideStippleLengthPixels:6,labelDistance:25,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},Me=Math.cos(p(12)),ze=f(),Ve=f(),Ae=w(),xe=w(),Ue=w();export{Oe as DirectLineMeasurement3DView};
