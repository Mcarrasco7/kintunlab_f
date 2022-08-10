/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{b as t,i as s,u as i,L as r}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{createResolver as l,isAbortError as a,createAbortController as n}from"../core/promiseUtils.js";import"./Message.js";import h from"../core/Error.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{E as c}from"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./common.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./uid.js";import d from"../Graphic.js";import m from"../core/Handles.js";import"./unitUtils.js";import"./colorUtils2.js";import{d as u,h as y}from"./diffUtils.js";import"./MemCache.js";import"./ItemCache.js";import{L as _}from"./LRUCache.js";import"../core/watchUtils.js";import"./mat4.js";import{c as f}from"./aaBoundingRect.js";import"./Scheduler.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"../core/workers/RemoteClient.js";import"../core/workers/Connection.js";import"../core/workers/workers.js";import"./earcut.js";import"./mat3.js";import"./vec2.js";import"../layers/support/LOD.js";import j from"../layers/support/TileInfo.js";import"./TilemapCache.js";import"./pbf.js";import"./OptimizedFeatureSet.js";import"./featureConversionUtils.js";import{T as g}from"./TileKey.js";import"./TileIndex.js";import"./vec4f32.js";import{S as b}from"./StyleRepository.js";import"./unitBezier.js";import"./definitions.js";import"./vec2f32.js";import"./number2.js";import"./Rect.js";import"./Queue.js";import"./vec2f64.js";import"./mat3f32.js";import"./QueueProcessor.js";import{T}from"./TileStrategy.js";import{a as v,T as C}from"./TileInfoView.js";import"./Program.js";import"./FramebufferObject.js";import"./mat4f32.js";import"./VertexArrayObject.js";import"./ShaderCompiler.js";import{a as S,F as w}from"./config.js";import{a as I,w as D,V as R}from"./VectorTile.js";import"./DisplayObject.js";import{T as L}from"./TiledDisplayObject.js";import"./rasterUtils.js";import P from"../views/layers/LayerView.js";import"./Container.js";import"./ClipRect.js";import{L as U}from"./LayerView2D.js";import"./brushes.js";import{W as M}from"./enums.js";import"./Utils10.js";import"./GeometryUtils2.js";import"./MaterialKey.js";import"./WGLContainer.js";import{T as H}from"./TileContainer.js";import{S as F,a as k,C as z,d as V,b as Q,T as q}from"./SymbolRepository.js";const O=(e,t)=>e+1/(1<<2*t);class B{constructor(e,t){this._tiles=new Map,this._tileCache=new _(40,(e=>e.dispose())),this._viewSize=[0,0],this._visibleTiles=new Map,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this._container=t}destroy(){for(const[e,t]of this._tiles)t.dispose();this._tiles=null,this._tileCache.clear(),this._tileCache=null}update(e){this._updateCacheSize(e);const t=this.tileInfoView,s=t.getTileCoverage(e.state,0,"smallest"),{spans:i,lodInfo:r}=s,{level:o}=r,l=new Set,a=new Set;for(const{row:e,colFrom:t,colTo:s}of i)for(let i=t;i<=s;i++){const t=g.getId(o,e,r.normalizeCol(i),r.getWorldForColumn(i)),s=this._getOrAcquireTile(t);l.add(t),s.processed()?this._addToContainer(s):a.add(new g(t))}for(const[e,t]of this._tiles)t.isCoverage=l.has(e);for(const e of a)this._findPlaceholdersForMissingTiles(e,l);let n=!1;for(const[e,i]of this._tiles)i.neededForCoverage=l.has(e),i.neededForCoverage||i.isHoldingForFade&&t.intersects(s,i.key)&&l.add(e),i.isFading&&(n=!0);for(const[e,t]of this._tiles)l.has(e)||this._releaseTile(e);return v.pool.release(s),!n}clear(){this._tiles.clear(),this._tileCache.clear(),this._visibleTiles.clear()}clearCache(){this._tileCache.clear()}_findPlaceholdersForMissingTiles(e,t){const s=[];for(const[i,r]of this._tiles)this._addPlaceholderChild(s,r,e,t);const i=s.reduce(O,0);Math.abs(1-i)<1e-6||this._addPlaceholderParent(e.id,t)}_addPlaceholderChild(e,t,s,i){t.key.level<=s.level||!t.hasData()||function(e,t){const s=t.level-e.level;return e.row===t.row>>s&&e.col===t.col>>s&&e.world===t.world}(s,t.key)&&(this._addToContainer(t),i.add(t.id),e.push(t.key.level-s.level))}_addPlaceholderParent(e,t){let s=e;for(;;){if(s=x(s),!s||t.has(s))return;const e=this._getTile(s);if(e&&e.hasData())return this._addToContainer(e),void t.add(e.id)}}_getOrAcquireTile(e){let t=this._tiles.get(e);return t||(t=this._tileCache.pop(e),t||(t=this.acquireTile(new g(e))),this._tiles.set(e,t),t)}_getTile(e){let t=this._tiles.get(e);return t||(t=this._tileCache.pop(e),t&&this._tiles.set(e,t),t)}_releaseTile(e){const t=this._tiles.get(e);this.releaseTile(t),this._removeFromContainer(t),this._tiles.delete(e),t.hasData()?this._tileCache.put(e,t,1):t.dispose()}_addToContainer(e){let i;const r=[],o=this._container;if(o.contains(e))return;const l=this._visibleTiles;for(const[s,o]of l)this._canConnectDirectly(e,o)&&r.push(o),t(i)&&this._canConnectDirectly(o,e)&&(i=o);if(s(i)){for(const t of r)i.childrenTiles.delete(t),e.childrenTiles.add(t),t.parentTile=e;i.childrenTiles.add(e),e.parentTile=i}else for(const t of r)e.childrenTiles.add(t),t.parentTile=e;l.set(e.id,e),o.addChild(e)}_removeFromContainer(e){if(this._visibleTiles.delete(e.id),this._container.removeChild(e),s(e.parentTile)){e.parentTile.childrenTiles.delete(e);for(const t of e.childrenTiles)s(e.parentTile)&&e.parentTile.childrenTiles.add(t)}for(const t of e.childrenTiles)t.parentTile=e.parentTile;e.parentTile=null,e.childrenTiles.clear()}_canConnectDirectly(e,t){const s=e.key;let{level:i,row:r,col:o,world:l}=t.key;const a=this._visibleTiles;for(;i>0;){if(i--,r>>=1,o>>=1,s.level===i&&s.row===r&&s.col===o&&s.world===l)return!0;if(a.has(`${i}/${r}/${o}/${l}`))return!1}return!1}_updateCacheSize(e){const t=e.state.size;if(t[0]===this._viewSize[0]&&t[1]===this._viewSize[1])return;const s=Math.ceil(t[0]/512)+1,i=Math.ceil(t[1]/512)+1;this._viewSize[0]=t[0],this._viewSize[1]=t[1],this._tileCache.maxSize=5*s*i}}function x(e){const[t,s,i,r]=e.split("/"),o=parseInt(t,10);return 0===o?null:`${o-1}/${parseInt(s,10)>>1}/${parseInt(i,10)>>1}/${parseInt(r,10)}`}class E extends c{constructor(e,t){super(),this.styleRepository=e,this._tileToHandle=new Map,this._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._completed=!1,this._symbolRepository=new F(4096,t,(()=>new I)),this._symbolDeclutterer=new k(t,this._symbolRepository,((e,t,s)=>new z(e,t,s,this.styleRepository,this._zoom,this._viewState.rotation)),((e,t)=>{e.allSymbolsFadingOut=!0,e.lastOpacityUpdate=t,D(e,t,!0),e.decluttered=!0,e.requestRender()}),((e,t)=>this.styleRepository.getStyleLayerByUID(e.styleLayerUID).z-this.styleRepository.getStyleLayerByUID(t.styleLayerUID).z),(e=>{const t=this.styleRepository.getStyleLayerByUID(e).getLayoutProperty("visibility");return!t||1!==t.getValue()}))}addTile(e){e.decluttered=!1,this._tileToHandle.set(e,e.on("symbols-changed",(()=>{this._symbolRepository.add(e),this.restartDeclutter()}))),this._symbolRepository.add(e),this.restartDeclutter()}removeTile(e){const t=this._tileToHandle.get(e);t&&(this._symbolRepository.removeTile(e),this.restartDeclutter(),t.remove(),this._tileToHandle.delete(e))}update(e,t){return this._zoom=e,this._viewState={scale:t.scale,rotation:t.rotation,center:[t.center[0],t.center[1]],size:[t.size[0],t.size[1]]},this._continueDeclutter(),this._completed}restartDeclutter(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable()}clear(){this._completed=!1,this._symbolRepository=null,this._symbolDeclutterer.restart(),this._tileToHandle.forEach((e=>e.remove())),this._tileToHandle.clear()}get stale(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}deleteStyleLayers(e){this._symbolRepository.deleteStyleLayers(e)}_continueDeclutter(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(S),this._completed&&this._scheduleNotifyStable())}_scheduleNotifyStable(){s(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout((()=>{this._stableNotificationHandle=null,this.emit("fade-complete")}),1.5*w)}_notifyUnstable(){s(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this.emit("fade-start")}}function A(e,t){if(e){const s=e.getLayoutProperty("visibility");if(!s||1!==s.getValue()&&(void 0===e.minzoom||e.minzoom<t+1e-6)&&(void 0===e.maxzoom||e.maxzoom>=t-1e-6))return!0}return!1}class N extends H{constructor(e){super(e),this._backgroundTiles=[],this._pointToCallbacks=new Map,this._fading=!1}destroy(){this.removeAllChildren(),this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null),s(this._symbolFader)&&(this._symbolFader.clear(),this._symbolFader=null),this._styleRepository=null,this._backgroundTiles=[],this._pointToCallbacks.clear()}setStyleResources(e,s,r){if(this._spriteMosaic=e,this._glyphMosaic=s,this._styleRepository=r,t(this._symbolFader)){const e=new E(this._styleRepository,this.children);e.on("fade-start",(()=>{this.emit("fade-start"),this._fading=!0,this.requestRender()})),e.on("fade-complete",(()=>{this.emit("fade-complete"),this._fading=!1,this.requestRender()})),this._symbolFader=e}i(this._symbolFader).styleRepository=r}deleteStyleLayers(e){s(this._symbolFader)&&this._symbolFader.deleteStyleLayers(e)}async hitTest(e,t){const s=[e,t],i=l();return this._pointToCallbacks.set(s,i),this.requestRender(),i.promise}enterTileInvalidation(){for(const e of this.children)e.invalidating=!0}createRenderParams(e){return{...super.createRenderParams(e),renderPass:null,styleLayer:null,styleLayerUID:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,hasClipping:!!this._clippingInfos}}doRender(e){!this.visible||e.drawPhase!==M.MAP&&e.drawPhase!==M.DEBUG||void 0===this._spriteMosaic||super.doRender(e)}addChild(e){return super.addChild(e),s(this._symbolFader)?this._symbolFader.addTile(e):e.decluttered=!0,this.requestRender(),e}removeChild(e){return s(this._symbolFader)&&this._symbolFader.removeTile(e),this.requestRender(),super.removeChild(e)}renderChildren(e){if(e.drawPhase!==M.DEBUG){if(this._doRender(e),this._pointToCallbacks.size>0){const{context:t}=e,s=t.getBoundFramebufferObject();e.drawPhase=M.HITTEST;const i=e.painter.effects.hittest;i.bind(e),this._doRender(e),i.draw(e,this._pointToCallbacks),t.bindFramebuffer(s)}}else super.renderChildren(e)}removeAllChildren(){for(let e=0;e<this.children.length;e++){const t=this.children[e];s(this._symbolFader)&&this._symbolFader.removeTile(t),t.dispose()}super.removeAllChildren()}getStencilTarget(){return this.children.filter((e=>e.neededForCoverage&&e.hasData()))}restartDeclutter(){s(this._symbolFader)&&this._symbolFader.restartDeclutter()}_doRender(e){const{context:t}=e,i=this._styleRepository;if(!i)return;const r=i.layers;let o=!0;e.drawPhase===M.HITTEST&&(o=!1),i.backgroundBucketIds.length>0&&(e.renderPass="background",this._renderBackgroundLayers(e,i.backgroundBucketIds)),super.renderChildren(e),e.drawPhase===M.MAP&&this._fade(e.displayLevel,e.state);const l=this.children.filter((e=>e.visible&&e.hasData()));if(l&&0!==l.length){for(const e of l)e.triangleCount=0;t.setStencilWriteMask(0),t.setColorMask(!0,!0,!0,!0),t.setStencilOp(7680,7680,7681),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!0),t.setDepthFunction(515),t.setClearDepth(1),t.clear(t.gl.DEPTH_BUFFER_BIT),e.renderPass="opaque";for(let t=r.length-1;t>=0;t--)this._renderStyleLayer(r[t],e,l);t.setDepthWriteEnabled(!1),t.setBlendingEnabled(o),t.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(let t=0;t<r.length;t++)this._renderStyleLayer(r[t],e,l);t.setDepthTestEnabled(!1),e.renderPass="symbol";for(let t=0;t<r.length;t++)this._renderStyleLayer(r[t],e,l);if(t.bindVAO(),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0),e.drawPhase===M.MAP){const e=window.COLLISION_DEBUG_CTX;if(e&&s(this._symbolFader)&&(e.clearRect(0,0,e.canvas.width,e.canvas.height),!this._fading||window.COLLISION_XRAY))for(const t of this.children)if(t.symbols){const s=[];if(t.symbols.forEach((e=>{s.push(...e)})),window.COLLISION_SHOW_GRID){var a,n,h;const t=null==(a=this._symbolFader)||null==(n=a._symbolDeclutterer)||null==(h=n._collisionJob)?void 0:h._gridIndex;t&&V(e,t)}Q(e,s)}}}}_fade(e,t){s(this._symbolFader)&&(this._symbolFader.update(e,t)||this.requestRender())}_renderStyleLayer(e,t,s){const{painter:i,renderPass:r}=t;if(void 0===e)return;const o=e.getLayoutProperty("visibility");if(o&&1===o.getValue())return;let l;switch(e.type){case 0:return;case 1:if("opaque"!==r&&"translucent"!==t.renderPass)return;l="vtlFill";break;case 2:if("translucent"!==r)return;l="vtlLine";break;case 4:if("symbol"!==r)return;l="vtlCircle";break;case 3:if("symbol"!==r)return;l="vtlSymbol"}if(s=3===e.type?s.filter((e=>e.decluttered)):s.filter((e=>e.neededForCoverage)),"vtlSymbol"!==l){const i=t.displayLevel;if(0===s.length||void 0!==e.minzoom&&e.minzoom>=i+1e-6||void 0!==e.maxzoom&&e.maxzoom<i-1e-6)return}const a=e.uid;t.styleLayerUID=a,t.styleLayer=e;for(const e of s)if(e.layerData.has(a)){i.renderObjects(t,s,l);break}}_renderBackgroundLayers(e,t){const{context:i,displayLevel:r,painter:o,state:l}=e,a=this._styleRepository;let n=!1;for(const e of t)if(A(a.getLayerById(e),r)){n=!0;break}if(!n)return;const h=this._tileInfoView.getTileCoverage(e.state,0,"smallest"),{spans:p,lodInfo:c}=h,{level:d}=c,m=f(),u=[];if(this._renderPasses){const t=this._renderPasses[0];s(this._clippingInfos)&&(t.brushes[0].prepareState(e,this._clippingInfos[0]),t.brushes[0].drawMany(e,this._clippingInfos))}const y=this._backgroundTiles;let _,j=0;for(const{row:e,colFrom:t,colTo:s}of p)for(let i=t;i<=s;i++){if(j<y.length)_=y[j],_.key.set(d,e,c.normalizeCol(i),c.getWorldForColumn(i)),this._tileInfoView.getTileBounds(m,_.key,!1),_.bounds=m,_.coords[0]=m[0],_.coords[1]=m[3];else{const t=new g(d,e,c.normalizeCol(i),c.getWorldForColumn(i));_=new L(t,this._tileInfoView.getTileBounds(f(),t),[512,512],[4096,4096]),y.push(_)}_.setTransform(l,this._tileInfoView.getTileResolution(_.key)),u.push(_),j++}i.setStencilWriteMask(0),i.setColorMask(!0,!0,!0,!0),i.setStencilOp(7680,7680,7681),i.setStencilFunction(514,0,255);let b=!0;e.drawPhase===M.HITTEST&&(b=!1),i.setStencilTestEnabled(b);for(const s of t){const t=a.getLayerById(s);A(t,r)&&(e.styleLayerUID=t.uid,e.styleLayer=t,o.renderObjects(e,u,"vtlBackground"))}v.pool.release(h)}}class W extends C{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const t=g.pool.acquire(e),s=0===t.level?null:g.getId(t.level-1,t.row>>1,t.col>>1,t.world);return g.pool.release(t),s}getTileCoverage(e,t,s){const i=super.getTileCoverage(e,t,s);if(!i)return i;const r=1<<i.lodInfo.level;return i.spans=i.spans.filter((e=>e.row>=0&&e.row<r)),i}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const t=this._fullCacheLodInfos;if(e>t[0].scale)return t[0].level;let s,i;for(let r=0;r<t.length-1;r++)if(i=t[r+1],e>i.scale)return s=t[r],s.level+(s.scale-e)/(s.scale-i.scale);return t[t.length-1].level}}_initializeFullCacheLODs(e){let t;if(0===e[0].level)t=e.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));else{const e=this.tileInfo.size[0],s=this.tileInfo.spatialReference;t=j.create({size:e,spatialReference:s}).lods.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})))}for(let e=0;e<t.length;e++)this._levelByScale[t[e].scale]=t[e].level;this._fullCacheLodInfos=t}}const G=r.getLogger("esri.views.2d.layers.VectorTileLayerView2D");let $=class extends(U(P)){constructor(){super(...arguments),this._styleChanges=[],this._handles=new m,this._fetchQueue=null,this._parseQueue=null,this._isTileHandlerReady=!1,this.fading=!1}initialize(){const e=this.layer.tileInfo;if(!(e&&e.spatialReference).equals(this.view.spatialReference))return void this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})));const{style:t,spriteUrl:s,glyphsUrl:i}=this.layer.currentStyleInfo;this._styleRepository=new b(t,{spriteUrl:s,glyphsUrl:i}),this._tileInfoView=new W(this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new N(this._tileInfoView),this._tileHandler=new q(this.layer,this._styleRepository,window.devicePixelRatio||1),this.container.addChild(this._vectorTileContainer),this.handles.add([this._vectorTileContainer.on("fade-start",(()=>{this.fading=!0,this.notifyChange("updating"),this.requestUpdate()})),this._vectorTileContainer.on("fade-complete",(()=>{this.fading=!1,this.notifyChange("updating"),this.requestUpdate()}))])}destroy(){var e;this._stop(),this.container.removeAllChildren(),this._vectorTileContainer&&(this._vectorTileContainer.destroy(),this._vectorTileContainer=null),null==(e=this._tileHandler)||e.destroy(),this._tileHandler=null}async hitTest(e,t){if(this.suspended||!this._tileHandlerPromise)return null;await this._tileHandlerPromise;const s=await this._vectorTileContainer.hitTest(e,t);if(!s||0===s.length)return null;const i=s[0]-1,r=this._styleRepository,o=r.getStyleLayerByUID(i);if(!o)return null;const l=r.getStyleLayerIndex(o.id),a=new d({attributes:{layerId:l,layerName:o.id,layerUID:i}});return a.layer=this.layer,a.sourceLayer=this.layer,a}update(e){if(this._tileHandlerPromise&&this._isTileHandlerReady)return e.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=e.state,this._parseQueue.state=e.state,this._tileManager.update(e)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))}attach(){this._start(),this._handles.add([this.layer.on("paint-change",(e=>{if(e.isDataDriven)this._styleChanges.push({type:0,data:e}),this.notifyChange("updating"),this.requestUpdate();else{const t=this._styleRepository,s=t.getLayerById(e.layerName);if(!s)return;const i=3===s.type;t.setPaintProperties(e.layerName,e.paint),i&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender()}})),this.layer.on("layout-change",(e=>{const s=this._styleRepository,i=s.getLayerById(e.layer);if(!i)return;const r=u(i.layout,e.layout);if(!t(r)){if(y(r,"visibility")&&1===function(e){if(t(e))return 0;switch(e.type){case"partial":return Object.keys(e.diff).length;case"complete":return Math.max(Object.keys(e.oldValue).length,Object.keys(e.newValue).length);case"collection":return Object.keys(e.added).length+Object.keys(e.changed).length+Object.keys(e.removed).length}}(r))return s.setLayoutProperties(e.layer,e.layout),3===i.type&&this._vectorTileContainer.restartDeclutter(),void this._vectorTileContainer.requestRender();this._styleChanges.push({type:1,data:e}),this.notifyChange("updating"),this.requestUpdate()}})),this.layer.on("style-layer-visibility-change",(e=>{const t=this._styleRepository,s=t.getLayerById(e.layer);s&&(t.setStyleLayerVisibility(e.layer,e.visibility),3===s.type&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender())})),this.layer.on("style-layer-change",(e=>{this._styleChanges.push({type:2,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("delete-style-layer",(e=>{this._styleChanges.push({type:3,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("load-style",(()=>this._loadStyle()))])}detach(){this._stop(),this._handles.removeAll()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}canResume(){let e=super.canResume();const t=this.layer;if(e&&t.currentStyleInfo){const s=this.view.scale,i=t.currentStyleInfo;if(i&&i.layerDefinition){const t=i.layerDefinition;t.minScale&&t.minScale<s&&(e=!1),t.maxScale&&t.maxScale>s&&(e=!1)}}return e}isUpdating(){const e=this._vectorTileContainer.children;return!this._isTileHandlerReady||!this._fetchQueue||!this._parseQueue||this._fetchQueue.updating||this._parseQueue.updating||e.length>0&&e.filter((e=>e.invalidating)).length>0||this.fading}acquireTile(e){const t=this._createVectorTile(e);return this._tileHandlerPromise.then((()=>{this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e}))).then((e=>{t.once("attach",(()=>this.requestUpdate())),e&&(t.setData(e.tileData),this.requestUpdate(),this.notifyChange("updating"))})).catch((e=>{this.notifyChange("updating"),a(e)||G.error(e)}))})),t}releaseTile(e){const t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.requestUpdate()}_start(){if(this._stop(),this._tileManager=new B({acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView},this._vectorTileContainer),!this.layer.currentStyleInfo)return;const e=new AbortController,t=this._tileHandler.start({signal:e.signal}).then((()=>{this._fetchQueue=new T({tileInfoView:this._tileInfoView,process:(e,t)=>this._getTileData(e,t),concurrency:15}),this._parseQueue=new T({tileInfoView:this._tileInfoView,process:(e,t)=>this._parseTileData(e,t),concurrency:8}),this.requestUpdate(),this._isTileHandlerReady=!0}));this._tileHandler.spriteMosaic.then((e=>{this._vectorTileContainer.setStyleResources(e,this._tileHandler.glyphMosaic,this._styleRepository),this.requestUpdate()})),this._tileHandlerAbortController=e,this._tileHandlerPromise=t}_stop(){if(!this._tileHandlerAbortController||!this._vectorTileContainer)return;const e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileManager&&(this._tileManager.destroy(),this._tileManager=null),this._vectorTileContainer.removeAllChildren()}async _getTileData(e,t){const s=await this._tileHandler.fetchTileData(e,t);return this.notifyChange("updating"),s}async _parseTileData(e,t){return this._tileHandler.parseTileData(e,t)}async _applyStyleChanges(){this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache();const e=this._styleChanges;try{await this._tileHandler.updateStyle(e)}catch(e){G.error("error applying vector-tiles style update",e.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0}const t=this._styleRepository,s=[];e.forEach((e=>{if(3!==e.type)return;const i=e.data,r=t.getLayerById(i.layerName);r&&s.push(r.uid)}));const i=[];let r;e.forEach((e=>{const s=e.type,o=e.data;switch(s){case 0:t.setPaintProperties(o.layerName,o.paint),r=o.layerName;break;case 1:t.setLayoutProperties(o.layerName,o.layout),r=o.layerName;break;case 3:return void t.deleteStyleLayer(o.layerName);case 2:t.setStyleLayer(o.layer,o.index),r=o.layer.id}const l=t.getLayerById(r);l&&i.push(l.uid)}));const o=this._vectorTileContainer.children;if(s.length>0){this._vectorTileContainer.deleteStyleLayers(s);for(const e of o)e.deleteLayerData(s)}if(this._fetchQueue.resume(),this._parseQueue.resume(),i.length>0){const e=[];for(const t of o){const s=this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e,styleLayerUIDs:i}))).then((e=>t.setData(e.tileData)));e.push(s)}await Promise.all(e)}this._styleChanges=[],this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}async _loadStyle(){const{style:e,spriteUrl:t,glyphsUrl:s}=this.layer.currentStyleInfo;this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this.notifyChange("updating"),this._styleRepository=new b(e,{spriteUrl:t,glyphsUrl:s}),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=n();const{signal:i}=this._tileHandlerAbortController;try{this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,e),await this._tileHandlerPromise}catch(e){if(!a(e))throw e}if(i.aborted)return this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),void this.requestUpdate();const r=await this._tileHandler.spriteMosaic;this._vectorTileContainer.setStyleResources(r,this._tileHandler.glyphMosaic,this._styleRepository),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}_createVectorTile(e){const t=this._tileInfoView.getTileBounds(f(),e);return new R(e,this._styleRepository,t,[512,512])}};e([o()],$.prototype,"_fetchQueue",void 0),e([o()],$.prototype,"_parseQueue",void 0),e([o()],$.prototype,"_isTileHandlerReady",void 0),e([o()],$.prototype,"suspended",void 0),e([o()],$.prototype,"fading",void 0),e([o()],$.prototype,"updating",void 0),$=e([p("esri.views.2d.layers.VectorTileLayerView2D")],$);var J=$;export default J;
