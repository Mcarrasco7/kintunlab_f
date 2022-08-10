// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../geometry/Point ../../../geometry/support/coordsUtils ../../../geometry ../../../core/Evented ../../../symbols/SimpleMarkerSymbol ../../../Graphic ../../../core/Handles ../../../core/watchUtils ../../input/InputManager ./settings ../../2d/interactive/SnappingVisualizer2D ../../interactive/editGeometry/EditGeometry ../../interactive/editGeometry/EditGeometryHelper ../../interactive/snapping/SnappingContext ./drawUtils ./layerUtils ./GraphicMover".split(" "),
function(G,u,r,w,fa,ha,v,ia,I,ja,ka,la,J,x,C,ma,q,y,z,H,B,K,L,M,N,O,P,Q,R,S){let T=function(m,p,d){this.graphic=m;this.mover=p;this.selected=d;this.type="reshape-start"},U=function(m,p,d){this.graphic=m;this.mover=p;this.selected=d;this.type="reshape"},V=function(m,p,d){this.graphic=m;this.mover=p;this.selected=d;this.type="reshape-stop"},W=function(m,p,d){this.mover=m;this.dx=p;this.dy=d;this.type="move-start"},X=function(m,p,d){this.mover=m;this.dx=p;this.dy=d;this.type="move"},Y=function(m,p,d){this.mover=
m;this.dx=p;this.dy=d;this.type="move-stop"},Z=function(m){this.added=m;this.type="vertex-select"},aa=function(m){this.removed=m;this.type="vertex-deselect"},ba=function(m,p,d,a){this.added=m;this.graphic=p;this.oldGraphic=d;this.vertices=a;this.type="vertex-add"},ca=function(m,p,d,a){this.removed=m;this.graphic=p;this.oldGraphic=d;this.vertices=a;this.type="vertex-remove"};var da=["Backspace","Delete"];r=L.settings.reshapeGraphics;const D={vertices:{default:new y({style:"circle",size:r.vertex.size,
color:r.vertex.color,outline:{color:r.vertex.outlineColor,width:1}}),hover:new y({style:"circle",size:r.vertex.hoverSize,color:r.vertex.hoverColor,outline:{color:r.vertex.hoverOutlineColor,width:1}}),selected:new y({style:"circle",size:r.selected.size,color:r.selected.color,outline:{color:r.selected.outlineColor,width:1}})},midpoints:{default:new y({style:"circle",size:r.midpoint.size,color:r.midpoint.color,outline:{color:r.midpoint.outlineColor,width:1}}),hover:new y({style:"circle",size:r.midpoint.size,
color:r.midpoint.color,outline:{color:r.midpoint.outlineColor,width:1}})}};q=function(m){function p(a){a=m.call(this,a)||this;a._handles=new H;a._graphicAttributes={esriSketchTool:"box"};a._mover=null;a._snappingTask=null;a._stagedVertex=null;a._totalDx=0;a._totalDy=0;a._viewHandles=new H;a.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}};a.enableMidpoints=!0;a.graphic=null;a.handleGraphics=[];a.layer=null;a.midpointGraphics=
[];a.midpointSymbol=new y({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}});a.selectedHandles=[];a.snappingManager=null;a.type="reshape";a.view=null;return a}G._inheritsLoose(p,m);var d=p.prototype;d.initialize=function(){this._setup();this._handles.add([B.whenOnce(this,"view.ready",()=>{const {layer:a,view:b}=this;R.addUniqueLayer(b,a);this._viewHandles.add([b.on("key-down",c=>this._keyDownHandler(c),K.ViewEventPriorities.TOOL)])}),B.pausable(this,"graphic",()=>this.refresh()),
B.pausable(this,"layer",(a,b)=>{b&&(this._clearSelection(),this._resetGraphics(b));this.refresh()}),B.pausable(this,"enableMidpoints",()=>{this.refresh()})])};d.destroy=function(){this._reset();this._mover&&this._mover.destroy();this._mover=null;this._handles.removeAll();this._handles=null;this._viewHandles.removeAll();this._viewHandles=null};d.isUIGraphic=function(a){const b=[];this.graphic&&b.push(this.graphic);b.concat(this.handleGraphics,this.midpointGraphics);return b.length&&b.includes(a)};
d.refresh=function(){this._reset();this._setup()};d.reset=function(){this.graphic=null};d.clearSelection=function(){this._clearSelection()};d.removeSelectedHandles=function(){this.selectedHandles.length&&this._removeVertex(this.selectedHandles)};d._setup=function(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())};d._setUpGeometryHelper=function(){const a=this.graphic.geometry;w.isNone(a)||"polygon"!==a.type&&"polyline"!==a.type||(this._geometryHelper=new O.EditGeometryHelper(N.EditGeometry.fromGeometry(a,
"local"),a.type))};d._saveSnappingContextForHandle=function(a,b){var c;this._snappingContext=new P.SnappingContext({geometry:this._geometryHelper,elevationInfo:{mode:"on-the-ground",offset:0},pointer:(null==(c=b.viewEvent)?void 0:c.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new M.SnappingVisualizer2D,vertexHandle:this._getVertexFromEditGeometry(a)})};d._reset=function(){this._clearSelection();this._resetGraphicStateVars();this._resetGraphics();this._resetSnappingStateVars();this._mover&&
this._mover.destroy();this._mover=null;this.view.cursor="default"};d._resetSnappingStateVars=function(){var a;w.isSome(this.snappingManager)&&this.snappingManager.doneSnapping();null==(a=this._geometryHelper)?void 0:a.destroy();this._geometryHelper=null;this._snappingTask=w.abortMaybe(this._snappingTask);this._stagedVertex=this._snappingContext=this._snappingTask=null};d._resetGraphicStateVars=function(){this._totalDy=this._totalDx=0};d._resetGraphics=function(a){if(a=a||this.layer)a.removeMany(this.handleGraphics),
a.removeMany(this.midpointGraphics);this.handleGraphics.forEach(b=>b.destroy());this.midpointGraphics.forEach(b=>b.destroy());this._set("handleGraphics",[]);this._set("midpointGraphics",[]);this._set("selectedHandles",[])};d._setupGraphics=function(){var a=w.unwrap(this.graphic.geometry);const b=C.geometryToCoordinates(a.clone());if("polygon"===a.type)for(const c of b)a=c[c.length-1],c[0][0]===a[0]&&c[0][1]===a[1]&&2<c.length&&c.pop();this._set("handleGraphics",this._createHandleGraphics(b));this.enableMidpoints&&
this._set("midpointGraphics",this._createMidpointGraphics(b));this._saveRelatedIndices(this.handleGraphics);this.layer.addMany(this.midpointGraphics);this.layer.addMany(this.handleGraphics)};d._createHandleGraphics=function(a){const {_graphicAttributes:b,symbols:c,view:{spatialReference:f}}=this,e=[];null==a?void 0:a.forEach((g,h)=>{g.forEach((k,l)=>{var t;const [n,A]=k;e.push(new z({geometry:new x({x:n,y:A,spatialReference:f}),symbol:null==c?void 0:null==(t=c.vertices)?void 0:t.default,attributes:{...b,
pathIndex:h,pointIndex:l}}))})});return e};d._createMidpointGraphics=function(a){const {_graphicAttributes:b,symbols:c,view:{spatialReference:f}}=this,e=[];null==a?void 0:a.forEach((g,h)=>{g.forEach((k,l)=>{const [t,n]=k;k=g[l+1]?l+1:0;if("polygon"===w.get(this.graphic.geometry,"type")||0!==k){const [A,E]=g[k],[F,ea]=C.getMidpoint([t,n],[A,E]);e.push(new z({geometry:new x({x:F,y:ea,spatialReference:f}),symbol:c.midpoints.default,attributes:{...b,pathIndex:h,pointIndexStart:l,pointIndexEnd:k}}))}})});
return e};d._saveRelatedIndices=function(a){if(a){var b=a.map(({geometry:c})=>({x:c.x,y:c.y}));for(let c=0;c<b.length;c++){const f=[];for(let e=0;e<b.length;e++){if(c===e)continue;const g=b[c],h=b[e];g.x===h.x&&g.y===h.y&&f.push(e)}a[c].attributes.relatedGraphicIndices=f}}};d._setupMover=function(){this._mover=new S({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.midpointGraphics,this.graphic),view:this.view,callbacks:{onGraphicClick:a=>this._onGraphicClickCallback(a),onGraphicMoveStart:a=>
this._onGraphicMoveStartCallback(a),onGraphicMove:a=>this._onGraphicMoveCallback(a),onGraphicMoveStop:a=>this._onGraphicMoveStopCallback(a),onGraphicPointerOver:a=>this._onGraphicPointerOverCallback(a),onGraphicPointerOut:a=>this._onGraphicPointerOutCallback(a)}})};d._onGraphicClickCallback=function(a){a.viewEvent.stopPropagation();const b=a.graphic;if(b===this.graphic){if(this.clearSelection(),this.emit("graphic-click",a),this.callbacks.onGraphicClick)this.callbacks.onGraphicClick(a)}else if(this._isMidpoint(b)){if(2!==
a.viewEvent.button){a=this.graphic.clone();var c=this._createHandleFromMidpoint(b);this.refresh();this._emitVertexAddEvent([b],a,c)}}else this._isHandle(b)&&(a.viewEvent.stopPropagation(),2===a.viewEvent.button?this._removeVertex(b):(a.viewEvent.native.shiftKey||this._clearSelection(),this.selectedHandles.includes(b)?this._removeFromSelection(b,!0):this._addToSelection(b)))};d._onGraphicMoveStartCallback=function(a){const b=a.graphic,{dx:c,dy:f}=a;this._resetGraphicStateVars();this._resetSnappingStateVars();
if(b===this.graphic)this.handleGraphics.forEach(e=>e.visible=!1),this.midpointGraphics.forEach(e=>e.visible=!1),this._clearSelection(),this._emitMoveStartEvent(c,f);else{if(this._isMidpoint(b)){this._clearSelection();const e=this.graphic.clone(),g=this._createHandleFromMidpoint(b);this._emitVertexAddEvent([b],e,g);this._addToSelection(b)}else this.selectedHandles.includes(b)||(this._clearSelection(),this._addToSelection(b));this._setUpGeometryHelper();this._saveSnappingContextForHandle(b,a);this._onHandleMove(b,
c,f,a);this._emitReshapeStartEvent(b)}};d._onGraphicMoveCallback=function(a){const {graphic:b,dx:c,dy:f}=a;this._totalDx+=c;this._totalDy+=f;b===this.graphic?(this._syncGraphicsWithGeometry(),this._emitMoveEvent(c,f)):(this._onHandleMove(b,c,f,a),this._emitReshapeEvent(b))};d._onGraphicMoveStopCallback=function(a){const {graphic:b,dx:c,dy:f}=a;this._totalDx+=c;this._totalDy+=f;if(b===this.graphic){this._syncGraphicsWithGeometry();for(const e of[].concat(this.handleGraphics,this.midpointGraphics))e.visible=
!0;this._emitMoveStopEvent()}else this._onHandleMove(b,c,f,a),this._resetSnappingStateVars(),this._isMidpoint(b)&&this.refresh(),this._emitReshapeStopEvent(b);this._resetGraphicStateVars()};d._syncGraphicsWithGeometry=function(){var a=this.graphic.geometry;a="polyline"===a.type?a.paths:a.rings;this._updateHandleGraphicLocations(a);this._updateMidpointGraphicLocations(a)};d._updateHandleGraphicLocations=function(a){for(const b of this.handleGraphics){const {pathIndex:c,pointIndex:f}=b.attributes,[e,
g]=a[c][f];b.set("geometry",new x(e,g,this.view.spatialReference))}};d._updateMidpointGraphicLocations=function(a){for(const b of this.midpointGraphics){const {pathIndex:c,pointIndexStart:f,pointIndexEnd:e}=b.attributes,[g,h]=a[c][f],[k,l]=a[c][e],[t,n]=C.getMidpoint([g,h],[k,l]);b.geometry=new x({x:t,y:n,spatialReference:this.view.spatialReference})}};d._getVertexFromEditGeometry=function(a){var b;const {pathIndex:c,pointIndex:f}=a.attributes;return null==(b=this._geometryHelper)?void 0:b.editGeometry.components[c].vertices[f]};
d._onHandleMove=function(a,b,c,f){w.abortMaybe(this._snappingTask);const e=a.geometry,g="graphic-move-stop"===f.type;if(w.isSome(this.snappingManager)&&1===this.selectedHandles.length&&!g){const h=this.snappingManager;this._stagedVertex=h.update(e,this._snappingContext);this._syncGeometryAfterHandleMove(a,new x(this._stagedVertex),b,c,g);this._emitReshapeEvent(a);this._snappingTask=J.createTask(async k=>{k=await h.snap(e,this._snappingContext,k);k.valid&&(this._stagedVertex=k.apply(),this._syncGeometryAfterHandleMove(a,
new x(this._stagedVertex),b,c,g),this._emitReshapeEvent(a))})}else{const h=w.isSome(this._stagedVertex)?new x(this._stagedVertex):e;this._syncGeometryAfterHandleMove(a,h,b,c,g);"graphic-move"===f.type&&this._emitReshapeEvent(a)}};d._syncGeometryAfterHandleMove=async function(a,b,c,f,e=!1){const {x:g,y:h}=b,k=this._getUpdatedGeometryAfterHandleMove(a,b);let l="polyline"===k.type?k.paths:k.rings;this._isHandle(a)&&(l=this._moveRelatedCoordinates(l,a,g,h),l=this._moveSelectedHandleCoordinates(l,a,c,
f,"polygon"===k.type),this._updateMidpointGraphicLocations(l));this.graphic.geometry=k;this._syncEditGeometryAfterHandleMove(a,g,h);e&&(a.geometry=b)};d._getUpdatedGeometryAfterHandleMove=function(a,b){const {x:c,y:f}=b;b=w.unwrap(this.graphic.geometry).clone();const e="polyline"===b.type?b.paths:b.rings,{pathIndex:g,pointIndex:h}=a.attributes;a=e[g].length-1;e[g][h]=[c,f];"polygon"===b.type&&(0===h?e[g][a]=[c,f]:h===a&&(e[g][0]=[c,f]));return b};d._moveRelatedCoordinates=function(a,b,c,f){var {relatedGraphicIndices:e}=
b.attributes;for(const g of e){e=this.handleGraphics[g];const {pathIndex:h,pointIndex:k}=e.attributes;a[h][k]=[c,f];e.geometry=b.geometry}return a};d._moveSelectedHandleCoordinates=function(a,b,c,f,e){for(const h of this.selectedHandles)if(h!==b){const {pathIndex:k,pointIndex:l,relatedGraphicIndices:t}=h.attributes,n=Q.cloneMove(h.geometry,c,f,this.view);var g=a[k].length-1;a[k][l]=[n.x,n.y];h.geometry=n;e&&(0===l?a[k][g]=[n.x,n.y]:l===g&&(a[k][0]=[n.x,n.y]));for(const A of t){g=this.handleGraphics[A];
const {pathIndex:E,pointIndex:F}=g.attributes;a[E][F]=[n.x,n.y];g.geometry=n}}return a};d._syncEditGeometryAfterHandleMove=function(a,b,c){a=this._getVertexFromEditGeometry(a);this._geometryHelper.moveVertices([a],b-a.pos[0],c-a.pos[1],0)};d._onGraphicPointerOverCallback=function(a){a=a.graphic;this._isHandle(a)&&!this._isSelected(a)&&(a.symbol=this.symbols.vertices.hover);this._updateHoverCursor(a)};d._onGraphicPointerOutCallback=function(a){a=a.graphic;this._isHandle(a)&&!this._isSelected(a)&&(a.symbol=
this.symbols.vertices.default);this.view.cursor="default"};d._createHandleFromMidpoint=function(a){const {_graphicAttributes:b}=this,c=[],f=w.unwrap(this.graphic.geometry).clone(),{pathIndex:e,pointIndexStart:g,pointIndexEnd:h}=a.attributes,{x:k,y:l}=a.geometry,t=0===h?g+1:h,n="polyline"===f.type?f.paths:f.rings;n[e].splice(t,0,[k,l]);a.attributes={...b,pathIndex:e,pointIndex:t,relatedGraphicIndices:[]};c.push({coordinates:n[e][t],componentIndex:e,vertexIndex:t});this.graphic.geometry=f;return c};
d._removeHandles=function(a){const b=w.unwrap(this.graphic.geometry).clone(),c="polygon"===b.type?b.rings:b.paths,f=[];a instanceof z&&(a=[a]);for(const e of a){const {x:g,y:h}=e.geometry;for(a=0;a<c.length;a++){const k=c[a];for(let l=0;l<k.length;l++){const [t,n]=k[l];g===t&&h===n&&(f.push({coordinates:c[a][l],componentIndex:a,vertexIndex:l}),c[a].splice(Number(l),1))}}}if("polygon"===b.type)for(const e of c){const [g,h]=e[0],[k,l]=e[e.length-1];(1===e.length||3>e.length&&g===k&&h===l)&&c.splice(c.indexOf(e),
1);2<e.length&&(g!==k||h!==l)&&e.push(e[0])}else for(const e of c)1===e.length&&c.splice(c.indexOf(e),1);this.graphic.geometry=b;return f};d._addToSelection=function(a){a instanceof z&&(a=[a]);for(const b of a)b.symbol=this.symbols.vertices.selected;this._set("selectedHandles",this.selectedHandles.concat(a));this._emitSelectEvent(a)};d._removeFromSelection=function(a,b){const {vertices:c}=this.symbols;b=b?c.hover:c.default;a instanceof z&&(a=[a]);for(const f of a)this.selectedHandles.splice(this.selectedHandles.indexOf(f),
1),this._set("selectedHandles",this.selectedHandles),f.set("symbol",b);this._emitDeselectEvent(a)};d._clearSelection=function(){if(this.selectedHandles.length){const a=this.selectedHandles;for(const b of this.selectedHandles)b.set("symbol",this.symbols.vertices.default);this._set("selectedHandles",[]);this._emitDeselectEvent(a)}};d._keyDownHandler=function(a){da.includes(a.key)&&!a.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)};d._removeVertex=function(a){if(!("polygon"===
this.graphic.geometry.type&&4>this.handleGraphics.length||3>this.handleGraphics.length)){var b=this.graphic.clone();a instanceof z&&(a=[a]);var c=this._removeHandles(a);this.refresh();this._emitVertexRemoveEvent(a,b,c)}};d._isHandle=function(a){return this.handleGraphics.includes(a)};d._isSelected=function(a){return this._isHandle(a)&&this.selectedHandles.includes(a)};d._isMidpoint=function(a){return this.midpointGraphics.includes(a)};d._updateHoverCursor=function(a){this.view.cursor=this._isMidpoint(a)?
"copy":"move"};d._emitMoveStartEvent=function(a,b){a=new W(this.graphic,a,b);this.emit("move-start",a);if(this.callbacks.onMoveStart)this.callbacks.onMoveStart(a)};d._emitMoveEvent=function(a,b){a=new X(this.graphic,a,b);this.emit("move",a);if(this.callbacks.onMove)this.callbacks.onMove(a)};d._emitMoveStopEvent=function(){const a=new Y(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",a);if(this.callbacks.onMoveStop)this.callbacks.onMoveStop(a)};d._emitReshapeStartEvent=function(a){a=
new T(this.graphic,a,this.selectedHandles);this.emit("reshape-start",a);if(this.callbacks.onReshapeStart)this.callbacks.onReshapeStart(a)};d._emitReshapeEvent=function(a){a=new U(this.graphic,a,this.selectedHandles);this.emit("reshape",a);if(this.callbacks.onReshape)this.callbacks.onReshape(a)};d._emitReshapeStopEvent=function(a){a=new V(this.graphic,a,this.selectedHandles);this.emit("reshape-stop",a);if(this.callbacks.onReshapeStop)this.callbacks.onReshapeStop(a)};d._emitSelectEvent=function(a){a=
new Z(a);this.emit("select",a);if(this.callbacks.onVertexSelect)this.callbacks.onVertexSelect(a)};d._emitDeselectEvent=function(a){a=new aa(a);this.emit("deselect",a);if(this.callbacks.onVertexDeselect)this.callbacks.onVertexDeselect(a)};d._emitVertexAddEvent=function(a,b,c){a=new ba(a,this.graphic,b,c);this.emit("vertex-add",a);if(this.callbacks.onVertexAdd)this.callbacks.onVertexAdd(a)};d._emitVertexRemoveEvent=function(a,b,c){a=new ca(a,this.graphic,b,c);this.emit("vertex-remove",a);if(this.callbacks.onVertexRemove)this.callbacks.onVertexRemove(a)};
G._createClass(p,[{key:"state",get:function(){const a=!!this.get("view.ready"),b=!(!this.get("graphic")||!this.get("layer"));return a&&b?"active":a?"ready":"disabled"}},{key:"symbols",set:function(a){const {midpoints:b=D.midpoints,vertices:c=D.vertices}=a||{};this._set("symbols",{midpoints:b,vertices:c})}}]);return p}(q.EventedAccessor);u.__decorate([v.property()],q.prototype,"callbacks",void 0);u.__decorate([v.property()],q.prototype,"enableMidpoints",void 0);u.__decorate([v.property()],q.prototype,
"graphic",void 0);u.__decorate([v.property({readOnly:!0})],q.prototype,"handleGraphics",void 0);u.__decorate([v.property()],q.prototype,"layer",void 0);u.__decorate([v.property({readOnly:!0})],q.prototype,"midpointGraphics",void 0);u.__decorate([v.property()],q.prototype,"midpointSymbol",void 0);u.__decorate([v.property({readOnly:!0})],q.prototype,"selectedHandles",void 0);u.__decorate([v.property()],q.prototype,"snappingManager",void 0);u.__decorate([v.property({readOnly:!0})],q.prototype,"state",
null);u.__decorate([v.property({value:D})],q.prototype,"symbols",null);u.__decorate([v.property({readOnly:!0})],q.prototype,"type",void 0);u.__decorate([v.property()],q.prototype,"view",void 0);return q=u.__decorate([I.subclass("esri.views.draw.support.Reshape")],q)});