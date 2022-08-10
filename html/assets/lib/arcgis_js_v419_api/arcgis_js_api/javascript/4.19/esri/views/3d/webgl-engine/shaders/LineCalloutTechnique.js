// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState ../core/shaderLibrary/util/View.glsl ../materials/internal/MaterialUtil ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/hud/HUD.glsl ../core/shaderLibrary/shading/MultipassGeometryTest.glsl ../core/shaderLibrary/attributes/VerticalOffset.glsl ../../../../chunks/LineCallout.glsl".split(" "),
function(t,p,q,h,d,m,f,u,v,l,n,w,x,y,z,A,r){m=function(k){function g(){return k.apply(this,arguments)||this}q._inheritsLoose(g,k);var b=g.prototype;b.initializeProgram=function(c){var e=g.shader.get();const a=this.configuration;e=e.build({occlusionTestEnabled:a.occlusionTestEnabled,verticalOffsetEnabled:a.verticalOffset,screenSizePerspectiveEnabled:a.screenSizePerspective,depthHudEnabled:a.depthHudEnabled,depthHudAlignStartEnabled:a.depthHudAlignStartEnabled,screenCenterOffsetUnitsEnabled:a.screenCenterOffsetUnitsEnabled,
slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,viewingMode:c.viewingMode,isDraped:!1,multipassGeometryEnabled:a.multipassGeometryEnabled});return new v(c.rctx,e.generateSource("vertex"),e.generateSource("fragment"),u.Default3D)};b.bindPass=function(c,e,a){n.View.bindProjectionMatrix(this.program,a.camera.projectionMatrix);r.LineCallout.bindUniforms(this.program,e,a.camera.pixelRatio||1);A.VerticalOffset.bindUniforms(this.program,e,a);y.HUD.bindUniforms(this.program,
a);this.program.setUniform2fv("cameraNearFar",a.camera.nearFar);this.program.setUniform2fv("inverseViewport",a.inverseViewport);z.bindMultipassGeometryUniforms(this.program,c,a);this.program.setUniform1i("hudVisibilityTexture",4);c.bindTexture(a.hudVisibilityTexture,4);this.program.setUniform1f("cameraGroundRelative",a.camera.aboveGround?1:-1);this.program.setUniform1f("polygonOffset",e.shaderPolygonOffset);n.View.bindViewport(this.program,a);this.program.setUniform1f("perDistancePixelRatio",Math.tan(a.camera.fovY/
2)/(a.camera.fullViewport[2]/2));this.program.setUniformMatrix4fv("viewNormal",a.camera.viewInverseTransposeMatrix);this.program.setUniform2f("pixelToNDC",2/a.camera.fullViewport[2],2/a.camera.fullViewport[3]);this.program.setUniform1f("lineSize",Math.ceil(e.size)*(a.camera.pixelRatio||1));w.bindScreenSizePerspective(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment")};b.bindDraw=function(c){n.View.bindView(this.program,c);n.View.bindCamPosition(this.program,c.origin,c.camera.viewInverseTransposeMatrix);
x.Slice.bindUniformsWithOrigin(this.program,this.configuration,c)};b.setPipelineState=function(c){c=c?519:513;return this.configuration.depthHudEnabled?l.makePipelineState({depthTest:{func:c},depthWrite:l.defaultDepthWriteParams}):l.makePipelineState({blending:l.separateBlendingParams(1,770,771,771),depthTest:{func:c},colorWrite:l.defaultColorWriteParams})};b.initializePipeline=function(){return this.setPipelineState(this.configuration.multipassGeometryEnabled)};return g}(m.ShaderTechnique);m.shader=
new d.ReloadableShaderModule(r.LineCalloutShader,()=>new Promise(function(k,g){t(["./LineCallout.glsl"],k,g)}));d=function(k){function g(){var b=k.apply(this,arguments)||this;b.occlusionTestEnabled=!0;b.verticalOffset=!1;b.screenSizePerspective=!1;b.depthHudEnabled=!1;b.depthHudAlignStartEnabled=!1;b.screenCenterOffsetUnitsEnabled=0;b.slicePlaneEnabled=!1;b.multipassGeometryEnabled=!1;return b}q._inheritsLoose(g,k);return g}(f.ShaderTechniqueConfiguration);h.__decorate([f.parameter()],d.prototype,
"occlusionTestEnabled",void 0);h.__decorate([f.parameter()],d.prototype,"verticalOffset",void 0);h.__decorate([f.parameter()],d.prototype,"screenSizePerspective",void 0);h.__decorate([f.parameter()],d.prototype,"depthHudEnabled",void 0);h.__decorate([f.parameter()],d.prototype,"depthHudAlignStartEnabled",void 0);h.__decorate([f.parameter({count:2})],d.prototype,"screenCenterOffsetUnitsEnabled",void 0);h.__decorate([f.parameter()],d.prototype,"slicePlaneEnabled",void 0);h.__decorate([f.parameter()],
d.prototype,"multipassGeometryEnabled",void 0);p.LineCalloutTechnique=m;p.LineCalloutTechniqueConfiguration=d;Object.defineProperty(p,"__esModule",{value:!0})});