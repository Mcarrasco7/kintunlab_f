/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{L as t,i as s,b as i,h as r,c as o}from"../../chunks/Logger.js";import"../../chunks/string.js";import{h as n,f as a}from"../../chunks/metadata.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import{e as c}from"../../core/scheduling.js";import{createTask as p}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import{E as m}from"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import u from"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import{c as d}from"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/vec3.js";import"../../chunks/colorUtils.js";import y from"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import g from"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import f from"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import{c as v,b as j,p as x}from"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import b from"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import V from"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import k from"../../Graphic.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/fieldType.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/vec4f64.js";import"../../chunks/quatf64.js";import{j as S,a as _,h as w,s as C}from"../../chunks/vec2.js";import"../../chunks/vec4.js";import"../../layers/support/Field.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/quantizationUtils.js";import"../../chunks/byteSizeEstimations.js";import{m as P}from"../../chunks/dehydratedFeatures.js";import{c as M}from"../../chunks/vec2f64.js";import"../../chunks/stack.js";import{d as G}from"../../chunks/Settings.js";import{g as I}from"../../chunks/elevationInfoUtils.js";import{a as R,V as L,A as z,c as U,E as O,C as E}from"../../chunks/AppendVertex.js";const D={main:new y([255,127,0]),selected:new y([255,255,255]),outline:new y([0,0,0,.5]),selectedOutline:new y([255,255,255]),hoverOutline:new y([255,255,255]),secondary:new y([255,255,255]),secondaryOutline:new y([100,100,100]),transparent:new y([0,0,0,0])};function H(e,t){if(t)for(const s in t)e[s]=t[s]}class T{constructor(e){this.size=8,this.hoverSize=10,this.color=D.main,this.hoverColor=D.main,this.outlineColor=D.outline,this.hoverOutlineColor=D.hoverOutline,H(this,e)}}class F{constructor(e){this.color=D.secondary,this.hoverColor=D.main,H(this,e)}}class A{constructor(e){this.color=D.transparent,this.hoverColor=D.transparent,this.outlineColor=D.main,this.hoverOutlineColor=D.main,this.stagedColor=D.transparent,this.stagedOutlineColor=D.secondary,H(this,e)}}class Z{constructor(e){this.vertex=new T,this.midpoint=new T({color:D.secondary,outlineColor:D.secondaryOutline,size:6}),this.selected=new T({color:D.selected,hoverColor:D.selected,hoverOutlineColor:D.hoverOutline}),H(this,e)}}class q{constructor(e){this.center=new T({color:D.secondaryOutline}),this.fill=new A,this.line=new F,this.vertex=new T({color:D.selected,outlineColor:D.main,hoverColor:D.selected,hoverOutlineColor:D.secondaryOutline}),H(this,e)}}const B=new class{constructor(e){this.reshapeGraphics=new Z,this.transformGraphics=new q,H(this,e)}};function N(e,t){const s=e.x-t.x,i=e.y-t.y;return s*s+i*i}function Q(e,t){const s=e.length===t.length&&e[0]===t[0]&&e[1]===t[1];switch(e.length){case 2:return s;case 3:return s&&e[2]===t[2];case 4:return s&&e[3]===t[3]}return!1}function W(e,t,s,i){return"2d"===i.type?i.toScreen(t.toPoint(e,ee)):(X(e,t,s,i,K),i.state.camera.projectToScreen(K,$),v($[0],$[1]))}function X(e,t,s,i,r=d()){const o=t.toXYZ(e);return o[2]=I(i,o,t.spatialReference,s)||0,i.renderCoordsHelper.toRenderCoords(o,t.spatialReference,r),r}function Y(e,t,s,i,r,o,n){const a=s.toXYZ(e),l=s.toXYZ(t),c=I(r,a,s.spatialReference,i),p=I(r,l,s.spatialReference,i),h=(null==c?p:null==p?c:Math.min(c,p))||0;a[2]=h,l[2]=h,r.renderCoordsHelper.toRenderCoords(a,s.spatialReference,o),r.renderCoordsHelper.toRenderCoords(l,s.spatialReference,n)}function J(e,t){t.sort(((t,s)=>S(t.targetPoint,e)-S(s.targetPoint,e)))}const K=d(),$=j(),ee=new u;class te{}class se extends te{constructor(e){super(),this.intersectionPoint=e}equals(e){return e instanceof se&&Q(this.intersectionPoint,e.intersectionPoint)}}t.getLogger("esri.views.interactive.snapping.hints.LineSnappingHint");class ie extends te{constructor(e,t,s,i=!0,r=!0){super(),this.type=e,this.lineStart=t,this.lineEnd=s,this.fadeLeft=i,this.fadeRight=r}equals(e){return e instanceof ie&&(this.type===e.type&&Q(this.lineStart,e.lineStart)&&Q(this.lineEnd,e.lineEnd)&&this.fadeLeft===e.fadeLeft&&this.fadeRight===e.fadeRight)}}t.getLogger("esri.views.interactive.snapping.hints.ParallelSnappingHint");class re extends te{constructor(e,t){super(),this.lineStart=e,this.lineEnd=t}equals(e){return e instanceof re&&(Q(this.lineStart,e.lineStart)&&Q(this.lineEnd,e.lineEnd))}}class oe extends te{constructor(e){super(),this.point=e}equals(e){return e instanceof oe&&Q(this.point,e.point)}}t.getLogger("esri.views.interactive.snapping.hints.RightAngleSnappingHint");class ne extends te{constructor(e,t,s){super(),this.previousVertex=e,this.centerVertex=t,this.nextVertex=s}equals(e){return e instanceof ne&&(Q(this.previousVertex,e.previousVertex)&&Q(this.centerVertex,e.centerVertex)&&Q(this.nextVertex,e.nextVertex))}}class ae{draw(e,t){const s=this.getUniqueHints(e),i=[];for(const e of s)e instanceof se&&i.push(this.visualizeIntersectionPoint(e,t)),e instanceof ie&&i.push(this.visualizeLine(e,t)),e instanceof re&&i.push(this.visualizeParallelSign(e,t)),e instanceof ne&&i.push(this.visualizeRightAngleQuad(e,t)),e instanceof oe&&i.push(this.visualizePoint(e,t));return n(i)}getUniqueHints(e){const t=[];for(const s of e){let e=!0;for(const i of t)if(s.equals(i)){e=!1;break}e&&t.push(s)}return t}}class le extends ae{visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator({geometry:new u({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.coordinateHelper.spatialReference}),symbol:he,context:t})}visualizePoint(e,t){return this._visualizeSnappingIndicator({geometry:new u({x:e.point[0],y:e.point[1],spatialReference:t.coordinateHelper.spatialReference}),symbol:me,context:t})}visualizeLine(e,t){return this._visualizeSnappingIndicator({geometry:new g({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.coordinateHelper.spatialReference}),symbol:ue,context:t})}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator({geometry:new g({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.coordinateHelper.spatialReference}),symbol:de,context:t})}visualizeRightAngleQuad(e,t){return this._visualizeSnappingIndicator({geometry:new g({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:t.coordinateHelper.spatialReference}),symbol:ve(e),context:t})}_visualizeSnappingIndicator(e){const{geometry:t,symbol:s,context:i}=e,r=new k({geometry:t,symbol:s});return i.view.graphics.add(r),a((()=>{i.view.graphics.remove(r)}))}}const ce=D.main.toArray(),pe=[...D.main.toRgb(),100],he=new V({outline:new b({width:1.5,color:ce}),size:15,color:[0,0,0,0]}),me=new V({outline:{width:.5,color:[0,0,0,1]},size:10,color:ce}),ue=new f({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:x(G.lineHintWidthTarget),color:ce}]}}}),de=new f({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:ce}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:ce}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),ye=e=>new f({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:x(G.rightAngleHintSize),rotation:e,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:x(G.rightAngleHintOutlineSize),color:ce},{type:"CIMSolidFill",enable:!0,color:pe}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),ge=ye(45),fe=ye(225),ve=(()=>{const e=M(),t=M(),s=d();return i=>(_(e,i.centerVertex,i.previousVertex),_(t,i.nextVertex,i.previousVertex),w(s,e,t),s[2]<0?ge:fe)})();class je{constructor(e,t,s){this.editGeometry=e,this.vertices=t,this.operation=s,this.undone=!1}apply(){this.vertices.forEach((e=>this.operation.apply(e))),this.editGeometry.components.forEach((e=>e.unnormalizeVertexPositions()));const e={updatedVertices:this.vertices,operation:this.undone?"redo":"apply"};this.editGeometry.emit("change",e)}undo(){this.vertices.forEach((e=>{this.operation.undo(e)}));const e={updatedVertices:this.vertices,operation:"undo"};this.editGeometry.emit("change",e),this.undone=!0}canAccumulate(e){if(this.undone)return!1;if(e.vertices.length!==this.vertices.length)return!1;for(let t=0;t<e.vertices.length;++t)if(e.vertices[t]!==this.vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){if(e instanceof je&&this.canAccumulate(e)){this.vertices.forEach((t=>this.operation.accumulate(t,e.operation))),this.operation.accumulateParams(e.operation),this.editGeometry.components.forEach((e=>e.unnormalizeVertexPositions()));const t={updatedVertices:this.vertices,operation:"apply"};return this.editGeometry.emit("change",t),!0}return!1}}class xe{constructor(e){this.helper=e}}class be{constructor(e,t,s=0){this.editGeometry=e,this.removedVertices=null,this._minNumberOfVertices=0,this.vertices=t,this._minNumberOfVertices=s}apply(){let e="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach((e=>{const t=this._removeVertex(e);s(t)&&this.removedVertices.push(t)})),e="apply"):this.removedVertices.forEach((e=>{this._redoRemoveVertex(e)}));const t={removedVertices:this.vertices,operation:e};this.editGeometry.emit("change",t)}undo(){this.removedVertices.forEach((e=>{this._undoRemoveVertex(e)}));const e={addedVertices:this.vertices,operation:"undo"};this.editGeometry.emit("change",e)}accumulate(e){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this._minNumberOfVertices)return null;const s={removedVertex:e,createdEdge:null},i=e.left,r=e.right;return t.vertices.splice(t.vertices.indexOf(e),1),i&&(t.edges.splice(t.edges.indexOf(i),1),i.left.right=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.right.left=null),0===e.index&&r&&this.vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.right),0),i&&r&&(s.createdEdge=new R(t,i.left,r.right),t.edges.push(s.createdEdge)),r&&t.updateVertexIndex(r.right,r.right.index-1),s}_redoRemoveVertex(e){console.warn("redo remove vertex not implemented yet")}_undoRemoveVertex(e){const t=e.removedVertex,s=e.removedVertex.component,i=t.left,r=t.right;e.createdEdge&&s.edges.splice(s.edges.indexOf(e.createdEdge),1),s.vertices.push(t),i&&(s.edges.push(i),i.left.right=i),r&&(s.edges.push(r),r.right.left=r),s.updateVertexIndex(t,t.index)}}class Ve{constructor(e,t,s){this.editGeometry=e,this.edge=t,this.t=s,this.createdVertex=null,this.left=null,this.right=null}apply(){let e="redo";const t=this.edge,s=t.component,r=t.component.data,o=t.left,n=t.right;s.edges.splice(s.edges.indexOf(t),1),i(this.createdVertex)&&(e="apply",this.createdVertex=new L(t.component)),s.vertices.push(this.createdVertex),this.createdVertex.pos=r.coordinateHelper.lerp(t.left.pos,t.right.pos,this.t,r.coordinateHelper.createNew()),i(this.left)&&(this.left=new R(s,o,this.createdVertex)),this.left.left.left?s.edges.push(this.left):s.edges.unshift(this.left),o.right=this.left,i(this.right)&&(this.right=new R(s,this.createdVertex,n)),s.edges.push(this.right),n.left=this.right,s.updateVertexIndex(this.createdVertex,o.index+1);const a={addedVertices:[this.createdVertex],operation:e};this.editGeometry.emit("change",a)}undo(){if(i(this.createdVertex)||i(this.left)||i(this.right))return null;const e=this.edge,t=e.component,s=this.createdVertex.left,r=this.createdVertex.right,o=s.left,n=r.right;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this.left),1),t.edges.splice(t.edges.indexOf(this.right),1),this.edge.left.left?t.edges.push(this.edge):t.edges.unshift(this.edge),o.right=e,n.left=e,t.updateVertexIndex(o,o.index);const a={removedVertices:[this.createdVertex],operation:"undo"};this.editGeometry.emit("change",a)}accumulate(e){return!1}}class ke extends xe{constructor(e,t,s,i){super(e),this.dx=t,this.dy=s,this.dz=i}move(e,t,s,i){this.helper.addDelta(e.pos,t,s,i)}apply(e){this.move(e,this.dx,this.dy,this.dz)}undo(e){this.move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof ke}accumulate(e,t){this.move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}class Se extends xe{constructor(e,t,s,i=0){super(e),this.origin=t,this.angle=s,this.accumulationType=i}rotate(e,t){this.helper.rotate(e.pos,this.origin,t)}apply(e){this.rotate(e,this.angle)}undo(e){this.rotate(e,-this.angle)}canAccumulate(e){return e instanceof Se&&c(this.origin,e.origin)}accumulate(e,t){const s=1===t.accumulationType;this.rotate(e,s?t.angle-this.angle:t.angle)}accumulateParams(e){const t=1===e.accumulationType;this.angle=t?e.angle:this.angle+e.angle}}class _e extends xe{constructor(e,t,s,i,r,o=0){super(e),this.origin=t,this.axis1=s,this.factor1=i,this.factor2=r,this.accumulationType=o,this.axis2=C(M(),s[1],-s[0])}scale(e,t,s){this.helper.scale(e.pos,this.origin,this.axis1,t),this.helper.scale(e.pos,this.origin,this.axis2,s)}apply(e){this.scale(e,this.factor1,this.factor2)}undo(e){this.scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof _e&&c(this.origin,e.origin)&&c(this.axis1,e.axis1)}accumulate(e,t){1===t.accumulationType?this.scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this.scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=1===e.accumulationType;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}class we extends m{constructor(e,t){super(),this.editGeometry=e,this.type=t,this._geometry=null,this._dirty=!0,this._listener=this.editGeometry.on("change",(e=>{e.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation}),this._dirty=!0}))}destroy(){this._listener.remove()}splitEdge(e,t){const s=new Ve(this.editGeometry,e,t);return this.editGeometry.apply(s),s}updateVertices(e,t,s=1){const i=new je(this.editGeometry,e,t);return this.editGeometry.apply(i,s),i}moveVertices(e,t,s,i,r=1){return this.updateVertices(e,new ke(this.editGeometry.coordinateHelper,t,s,i),r)}scaleVertices(e,t,s,i,r,o=1,n=0){return this.updateVertices(e,new _e(this.editGeometry.coordinateHelper,t,s,i,r,n),o)}rotateVertices(e,t,s,i=1,r=0){return this.updateVertices(e,new Se(this.editGeometry.coordinateHelper,t,s,r),i)}removeVertices(e){let t=0;switch(this.type){case"point":t=1;break;case"polyline":t=2;break;case"polygon":t=3}const s=new be(this.editGeometry,e,t);return this.editGeometry.apply(s),s}appendVertex(e){if(0===this.editGeometry.components.length)return null;const t=new z(this.editGeometry,this.editGeometry.components[0],e);return this.editGeometry.apply(t),t}canRemoveVertex(){let e=0;switch(this.type){case"point":e=1;break;case"polyline":e=2;break;case"polygon":e=3}return this.editGeometry.components[0].vertices.length>e}undo(){return this.editGeometry.undo()}get canUndo(){return this.editGeometry.canUndo}redo(){return this.editGeometry.redo()}get canRedo(){return this.editGeometry.canRedo}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this.editGeometry.toPoint();break;case"polyline":this._geometry=this.editGeometry.toPolyline();break;case"polygon":this._geometry=this.editGeometry.toPolygon()}this._dirty=!1}return this._geometry}}class Ce{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.geometry=e.geometry,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer}get coordinateHelper(){return this.geometry.editGeometry.coordinateHelper}}let Pe=class extends m.EventedAccessor{constructor(e){var t;super(e),this._hasZ=null,this._snappingTask=null,this._stagedVertex=null,this._stagedVertexUnsnapped=null,this._lastVertexUnsnapped=null,this._nativeEventHistory={undoStack:[],redoStack:[]},this.interactiveUndoDisabled=!1,this.history=[],this.redoHistory=[],this.snapToScene=!1,this.view=null,this.elevationInfo=null,this.defaultZ=0,this._coordinateHelper=U(e.hasZ,!1,e.view.spatialReference,"local"),this._snappingManager=e.snappingManager,this._editGeometry=new we(new O(this._coordinateHelper),null!=(t=e.editGeometryType)?t:"polygon"),this._snappingContext=new Ce({geometry:this._editGeometry,elevationInfo:{mode:"on-the-ground",offset:0},pointer:"mouse",visualizer:new le}),this._activeComponent=new E(this._editGeometry.editGeometry),this._editGeometry.editGeometry.components.push(this._activeComponent)}destroy(){this._snappingTask=r(this._snappingTask),s(this._snappingManager)&&this._snappingManager.doneSnapping(),this._editGeometry.destroy()}get _committedVertices(){return this._editGeometry.editGeometry.components[0].vertices.map((e=>e.pos))}get vertices(){return s(this._stagedVertex)?[...this._committedVertices,this._coordinateHelper.pointToArray(this._stagedVertex)]:this._committedVertices}get hasZ(){return s(this._hasZ)?this._hasZ:"3d"===this.view.type}set hasZ(e){this._hasZ=e,this.notifyChange("hasZ")}canUndo(){return this._editGeometry.editGeometry.canUndo}canRedo(){return this._editGeometry.editGeometry.canRedo}undo(){this.canUndo()&&this._editGeometry.undo()}redo(){this.canRedo()&&this._editGeometry.redo()}getCoordsFromScreenPoint(e){const t=this.screenToMap(e);return s(t)?t.hasZ?[t.x,t.y,t.z]:[t.x,t.y]:null}getCoordsAndPointFromScreenPoint(e){const t=this.screenToMap(e);return s(t)?t.hasZ?{vertex:[t.x,t.y,t.z],mapPoint:t}:{vertex:[t.x,t.y],mapPoint:t}:null}_pushCursorVertex(e){const t=P(e[0],e[1],null,this.view.spatialReference);this._stagedVertexUnsnapped=t,i(this._snappingManager)?this._stagedVertex=t:(this._stagedVertex=this._snappingManager.update(t,this._snappingContext),this._snappingTask=p((async e=>{if(s(this._snappingManager)){const s=await this._snappingManager.snap(t,this._snappingContext,e);return s.valid&&(this._stagedVertex=s.apply(),this.notifyChange("vertices")),s}return null})))}_popCursorVertex(){this._stagedVertex=null,this._stagedVertexUnsnapped=null,this.notifyChange("vertices")}getGeometryZValue(){return this.defaultZ}screenToMap(e){let t=null;if("3d"===this.view.type)if(this.hasZ){const s=o(this.elevationInfo,Me);t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(j(e.x,e.y),s,this.getGeometryZValue())}else{const i=o(this.elevationInfo,Ge);t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(j(e.x,e.y),i,0),s(t)&&(t.z=void 0)}else t=this.view.toMap(e),s(t)&&(t.z=this.hasZ?this.getGeometryZValue():void 0);return t}_isDuplicateOfLastVertex(e){const t=this._editGeometry.editGeometry.components[0].getLastVertex();if(s(t)&&e[0]===t[0]&&e[1]===t[1])return!0;const{x:i,y:r}=this._coordinateHelper.createDehydratedPoint(e);return!(!s(this._lastVertexUnsnapped)||i!==this._lastVertexUnsnapped.x||r!==this._lastVertexUnsnapped.y)}};e([l({readOnly:!0})],Pe.prototype,"vertices",null),e([l({type:Boolean,nonNullable:!0})],Pe.prototype,"interactiveUndoDisabled",void 0),e([l({readOnly:!0})],Pe.prototype,"history",void 0),e([l({readOnly:!0})],Pe.prototype,"redoHistory",void 0),e([l()],Pe.prototype,"snapToScene",void 0),e([l()],Pe.prototype,"view",void 0),e([l()],Pe.prototype,"elevationInfo",void 0),e([l({nonNullable:!0})],Pe.prototype,"defaultZ",void 0),e([l()],Pe.prototype,"hasZ",null),Pe=e([h("esri.views.draw.DrawAction")],Pe);const Me={mode:"absolute-height",offset:0},Ge={mode:"on-the-ground",offset:0};var Ie=Pe;export default Ie;export{we as E,se as I,ie as L,ke as M,re as P,ne as R,Ce as S,je as U,ae as a,X as b,Y as c,W as d,N as e,Se as f,_e as g,B as h,le as i,oe as j,Q as o,J as s};