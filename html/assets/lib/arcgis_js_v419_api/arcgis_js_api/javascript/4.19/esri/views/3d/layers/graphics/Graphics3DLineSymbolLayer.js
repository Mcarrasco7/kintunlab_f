// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/Error ../../../../geometry/Extent ../../../../geometry/Polygon ../../../../geometry ../../../../Color ../../../../core/screenUtils ../../../../chunks/mat4f64 ../../../../chunks/vec4f64 ../../../../chunks/vec4 ../../../../geometry/support/aaBoundingBox ../../webgl-engine/lib/Object3D ./elevationAlignmentUtils ./ElevationAligners ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ../../../../renderers/support/renderingInfoUtils ../../webgl-engine/materials/RibbonLineMaterial ../../webgl-engine/materials/lineStippleUtils ./Graphics3DDrapedGraphicLayer ../support/FastSymbolUpdates ../../webgl-engine/lib/RenderGeometry ./lineUtils".split(" "),
function(x,A,h,E,F,G,v,H,q,I,J,K,m,L,p,M,N,O,w,P,B,Q,R,C,S,y){const T=["polyline","polygon","extent"];v=function(z){function t(a,b,c,d){a=z.call(this,a,b,c,d)||this;a._uniformSize=1;return a}A._inheritsLoose(t,z);var e=t.prototype;e.doLoad=async function(){this._vvConvertOptions={modelSize:[1,1,1],symbolSize:[1,1,1],unitInMeters:1,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,0,0]},supportedTypes:{size:!0,color:!0,opacity:!0,rotation:!1}};this._fastUpdates=this._context.renderer&&this._context.renderer.visualVariables&&
0<this._context.renderer.visualVariables.length?C.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):{enabled:!1};if(!this._drivenProperties.size){const a=null!=this.symbolLayer.size?this.symbolLayer.size:q.px2pt(1);if(0>a)throw new E("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values");this._uniformSize=a}};e.getMaterialParameters=function(a){var b=h.get(this.symbolLayer,"material","color");b=this._getCombinedOpacityAndColor(b);a={width:1,color:b,
polygonOffset:!0,join:this.symbolLayer.join||"miter",cap:this.symbolLayer.cap||"butt",transparent:1>b[3]||this.needsDrivenTransparentPass,slicePlaneEnabled:this._context.slicePlaneEnabled,isClosed:a,stipplePattern:this.symbolLayer.stipplePattern?Q.createStipplePattern(this.symbolLayer.stipplePattern.map(q.pt2px)):null,stippleOffColor:this.symbolLayer.stippleOffColor?H.toUnitRGBA(this.symbolLayer.stippleOffColor):null,stippleIntegerRepeats:!0};this._drivenProperties.size?this._fastUpdates.enabled&&
this._fastUpdates.visualVariables.size&&(a.width=q.pt2px(1)):(b=null!=this.symbolLayer.size?this.symbolLayer.size:q.px2pt(1),a.width=q.pt2px(b));return this._fastUpdates&&this._fastUpdates.visualVariables?{...a,...this._fastUpdates.materialParameters}:a};e.destroy=function(){z.prototype.destroy.call(this);this._context.stage.remove(this._lineMaterial);this._lineMaterial=null;this._context.stage.remove(this._ringMaterial);this._ringMaterial=null};e.getDrivenSize=function(a){return this._drivenProperties.size&&
a.size?q.pt2px(P.getDriverAxisSizeValueAny(a.size)):1};e.getSizeFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?w.getAttributeValue(this._fastUpdates.visualVariables.size.field,a):null};e.getDrivenColor=function(a){const b=J.fromValues(1,1,1,1);this._drivenProperties.color&&a.color&&(b[0]=a.color[0],b[1]=a.color[1],b[2]=a.color[2],0<a.color.length&&(b[3]=a.color[3]));this._drivenProperties.opacity&&a.opacity&&(b[3]=a.opacity);return b};e.getColorFeatureAttributeData=
function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color?w.getAttributeValue(this._fastUpdates.visualVariables.color.field,a):null};e.getOpacityFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.opacity?w.getAttributeValue(this._fastUpdates.visualVariables.opacity.field,a):null};e.createGraphics3DGraphic=function(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,T,this.symbolLayer.type))return null;const c=this.setGraphicElevationContext(b,
new N.ElevationContext);this.ensureDrapedStatus("on-the-ground"===c.mode);return this.draped?this._createAsOverlay(a,this._context.layer.uid):this._createAs3DShape(a,c,b.uid)};e.applyRendererDiff=function(a,b){for(const c in a.diff)switch(c){case "visualVariables":if(C.updateFastSymbolUpdatesState(this._fastUpdates,b,this._vvConvertOptions))h.isSome(this._lineMaterial)&&this._lineMaterial.setParameterValues(this._fastUpdates.materialParameters),h.isSome(this._ringMaterial)&&this._ringMaterial.setParameterValues(this._fastUpdates.materialParameters);
else return!1;break;default:return!1}return!0};e.layerOpacityChanged=function(){h.isSome(this._lineMaterial)&&this.updateMaterialLayerOpacity(this._lineMaterial);h.isSome(this._ringMaterial)&&this.updateMaterialLayerOpacity(this._ringMaterial);return!0};e.updateMaterialLayerOpacity=function(a){const b=a.params.color;var c=h.get(this.symbolLayer,"material","color");c=this._getCombinedOpacity(c);a.setParameterValues({color:[b[0],b[1],b[2],c],transparent:1>c||this.needsDrivenTransparentPass})};e.layerElevationInfoChanged=
function(a,b,c){const d=this._elevationContext.mode;c=p.elevationModeChangeUpdateType(t.elevationModeChangeTypes,c,d);if(c!==p.SymbolUpdateType.UPDATE)return c;const g=p.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,()=>g)};e.slicePlaneEnabledChanged=function(){h.isSome(this._lineMaterial)&&this._lineMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});h.isSome(this._ringMaterial)&&this._ringMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});
return!0};e.physicalBasedRenderingChanged=function(){return!0};e.pixelRatioChanged=function(){return!0};e._getGeometryAsPolygonOrPolyline=function(a){switch(a.type){case "extent":if(a instanceof F)return G.fromExtent(a);break;case "polygon":case "polyline":return a}return null};e._createAs3DShape=function(a,b,c){const d=this._getGeometryAsPolygonOrPolyline(a.graphic.geometry);var g="polygon"===d.type?d.rings:d.paths,k=[];const u=[],f=[],r=m.create(),l=y.geometryToRenderInfo(d,this._context.elevationProvider,
this._context.renderCoordsHelper,b);this._logGeometryCreationWarnings(l,g,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");for(g=0;g<l.lines.length;g++){const {position:n,mapPosition:D}=l.lines[g];if(h.isSome(this._context.clippingExtent)&&(m.empty(r),m.expandWithBuffer(r,D),!m.intersectsClippingArea(r,this._context.clippingExtent)))continue;const U=this._createGeometry(a,n,D,d.type);k.push(U);u.push("polygon"===d.type?this.ringMaterial:this.lineMaterial);f.push(I.IDENTITY)}if(0===k.length)return null;
a=new L.Object3D({geometries:k,materials:u,transformations:f,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:c}});k=new O(this,a,k,null,null,M.perVertexElevationAligner,b);k.alignedSampledElevation=l.sampledElevation;k.needsElevationUpdates=p.needsElevationUpdates2D(b.mode);return k};e._createGeometry=function(a,b,c,d){const g=this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color;return y.createGeometry({removeDuplicateStartEnd:"polygon"===d?1:0,uniformSize:this._uniformSize,
attributeData:{position:b,mapPosition:c,size:this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?null:this.getDrivenSize(a.renderingInfo),color:g?null:this.getDrivenColor(a.renderingInfo),sizeFeature:this.getSizeFeatureAttributeData(a.graphic),colorFeature:this.getColorFeatureAttributeData(a.graphic),opacityFeature:this.getOpacityFeatureAttributeData(a.graphic)}})};e._createAsOverlay=function(a,b){const c=a.graphic,d=this._getGeometryAsPolygonOrPolyline(c.geometry);var g="polygon"===
d.type?d.rings:d.paths;const k="polygon"===d.type?this.ringMaterial:this.lineMaterial;k.renderPriority=this._renderPriority;const u=[],f=m.create(),r=m.empty();var l=y.geometryToRenderInfoDraped(d,this._context.overlaySR);this._logGeometryCreationWarnings(l,g,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");if(0<g.length){({lines:g}=l);for(l=0;l<g.length;++l){var n=g[l];m.empty(f);m.expandWithBuffer(f,n.position);m.intersectsClippingArea(f,this._context.clippingExtent)&&(m.expandWithAABB(r,
f),n=this._createGeometry(a,n.position,null,d.type),n=new S.RenderGeometry(n,k,b,c.uid),K.set(n.boundingSphere,.5*(f[0]+f[3]),.5*(f[1]+f[4]),0,.5*Math.sqrt((f[3]-f[0])*(f[3]-f[0])+(f[4]-f[1])*(f[4]-f[1]))),u.push(n))}return new R(this,u,r)}return null};A._createClass(t,[{key:"lineMaterial",get:function(){h.isNone(this._lineMaterial)&&(this._lineMaterial=new B.RibbonLineMaterial(this.getMaterialParameters(!1)),this._context.stage.add(this._lineMaterial));return this._lineMaterial}},{key:"ringMaterial",
get:function(){h.isNone(this._ringMaterial)&&(this._ringMaterial=new B.RibbonLineMaterial(this.getMaterialParameters(!0)),this._context.stage.add(this._ringMaterial));return this._ringMaterial}}]);return t}(w.Graphics3DSymbolLayer);v.elevationModeChangeTypes={definedChanged:p.SymbolUpdateType.RECREATE,staysOnTheGround:p.SymbolUpdateType.NONE,onTheGroundChanged:p.SymbolUpdateType.RECREATE};x.Graphics3DLineSymbolLayer=v;x.default=v;Object.defineProperty(x,"__esModule",{value:!0})});