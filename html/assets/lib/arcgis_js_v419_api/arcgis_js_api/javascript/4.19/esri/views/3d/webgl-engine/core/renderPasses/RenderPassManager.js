// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../../../../../chunks/vec3f64 ../../../../../chunks/vec3 ../../../../../chunks/mat4 ../../../../../chunks/mat3f64 ../../../../../chunks/mat3 ../../../../../chunks/vec2 ../../../../../chunks/vec4 ../../../support/geometryUtils ../../lib/depthRange ../util/TwoVectorPosition ./AllRenderPasses ./RenderPass".split(" "),function(q,u,f,v,g,w,x,k,r,y,z,A,B,l,e){let C=function(){function m(a,b){this.rctx=a;this.shaderTechniqueRepository=
b;this.canRender=!0;this._materialPassParams=new l.MaterialPassesParameters;this._shadowPassParams=new l.ShadowMapPassParameters;this._highlightPassParams=new l.HighlightPassParameters;this._systems=new Set;this._passes=[];this._shadowMapPass=this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository));this.passes={materialOpaque:this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository)),materialTransparent:this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository,
1)),materialIntegratedMesh:this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository)),shadowMap:this._shadowMapPass,highlight:this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository)),highlightIntegratedMesh:this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository)),highlightShadowMap:this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository)),defaultShadowMap:this._registerPass(new e.RenderPass(a,this.shaderTechniqueRepository))}}var d=m.prototype;
d.register=function(a){this._systems.add(a)};d.prepareRender=function(a){0!==this._systems.size&&(this._passes.forEach(b=>b.prepareSubmit()),this._systems.forEach(b=>{b.submit(this.passes,{camera:a})}),this._passes.forEach(b=>b.finishSubmit()),this.shaderTechniqueRepository.frameUpdate())};d.render=function(a){if(0===this._systems.size)return!1;if(4===a.slot)switch(this._configure(a),a.pass){case 0:this._materialPassParams.subPass=0;this._configureMaterialColorPass(a);this.passes.materialOpaque.dispatch(this._materialPassParams);
break;case 2:this._materialPassParams.subPass=2;this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 3:this._materialPassParams.subPass=3;this.passes.materialOpaque.dispatch(this._materialPassParams);break;case 5:this.passes.highlight.dispatch(this._highlightPassParams);break;case 4:this._shadowMapPass.dispatch(this._shadowPassParams);break;case 7:f.isSome(this.passes.highlightShadowMap)&&this.passes.highlightShadowMap.dispatch(this._shadowPassParams);break;case 6:f.isSome(this.passes.defaultShadowMap)&&
this.passes.defaultShadowMap.dispatch(this._shadowPassParams)}if(6===a.slot)switch(this._configure(a),a.pass){case 0:this._materialPassParams.subPass=0;this._configureMaterialColorPass(a);this.passes.materialTransparent.dispatch(this._materialPassParams);break;case 1:this._materialPassParams.subPass=1;this._configureMaterialColorPass(a);this.passes.materialTransparent.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2;this.passes.materialTransparent.dispatch(this._materialPassParams);
break;case 3:this._materialPassParams.subPass=3,this.passes.materialTransparent.dispatch(this._materialPassParams)}if(1===a.slot)switch(this._configure(a),a.pass){case 0:this._materialPassParams.subPass=0;this._configureMaterialColorPass(a);this._materialPassParams.ssrParams=a.ssrParams;this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 2:this._materialPassParams.subPass=2;this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 3:this._materialPassParams.subPass=
3;this.passes.materialIntegratedMesh.dispatch(this._materialPassParams);break;case 5:this.passes.highlightIntegratedMesh.dispatch(this._highlightPassParams)}return!0};d.notifyDirty=function(){this.context.requestRender()};d.slots=function(){return[4,6,1]};d.initializeRenderContext=function(a){this.context=a};d.uninitializeRenderContext=function(){};d.queryDepthRange=function(a){const b={near:Infinity,far:-Infinity};this._systems.forEach(c=>{c=c.queryShadowCasterDepthRange(a);f.isSome(c)&&A.union(b,
c,b)});return b};d._configureMaterialColorPass=function(a){this._materialPassParams.shadowMap={bind:(b,c)=>{a.shadowMap.bind(b,c);c=this._materialPassParams.viewTransform;g.add(h,c.worldFromView_TL,c.worldFromView_TH);a.shadowMap.bindView(b,h)}};this._materialPassParams.ambientOcclusion={bind:(b,c)=>{a.ssaoHelper.setUniforms(b,c)}};this._materialPassParams.ambientOcclusionEnabled=!!a.ssaoHelper&&a.ssaoHelper.enabled;this._materialPassParams.sceneHasOcludees=a.hasOccludees};d._configure=function(a){this._updateParameters(a,
4===a.pass||7===a.pass||6===a.pass?this._shadowPassParams:5===a.pass?this._highlightPassParams:this._materialPassParams)};d._updateParameters=function(a,b){const c=a.camera,n=c.viewInverseTransposeMatrix;g.set(h,n[3],n[7],n[11]);p.set(h);g.copy(b.viewTransform.worldFromView_TH,p.high);g.copy(b.viewTransform.worldFromView_TL,p.low);k.fromMat4(b.viewTransform.viewFromCameraRelative_RS,c.viewMatrix);w.copy(b.viewTransform.projFromView,c.projectionMatrix);0===b.identifier?(this._materialPassParams.transparent=
6===a.slot,this._materialPassParams.integratedMesh=1===a.slot,this._materialPassParams.lighting=a.scenelightingData,k.transpose(t,b.viewTransform.viewFromCameraRelative_RS),k.invert(b.transformNormal_ViewFromGlobal,t),r.set(b.cameraNearFar,c.near,c.far)):1===b.identifier?r.set(b.cameraNearFar,c.near,c.far):2===b.identifier&&(b.highlightDepthTexture=a.highlightDepthTexture,y.copy(b.viewport,c.fullViewport));if(0===b.identifier||2===b.identifier)b.inverseViewport[0]=1/c.fullViewport[2],b.inverseViewport[1]=
1/c.fullViewport[3];z.boundedPlane.copyWithoutVerify(a.sliceHelper.plane,b.slicePlane);g.subtract(b.slicePlane.origin,b.slicePlane.origin,h);b.slicePlaneEnabled=a.sliceHelper.isEnabled;this._materialPassParams.transparencyPassType=a.transparencyPassType;this._materialPassParams.multipassTerrainParams=a.multipassTerrainParams};d._registerPass=function(a){this._passes.push(a);return a};u._createClass(m,[{key:"shadowCastingEnabled",get:function(){return f.isSome(this.passes.shadowMap)},set:function(a){a?
(this._materialPassParams.shadowsEnabled=!0,this.passes.shadowMap=this._shadowMapPass):(this._materialPassParams.shadowsEnabled=!1,this.passes.shadowMap=null)}},{key:"screenSpaceReflectionsEnabled",get:function(){return f.isSome(this._materialPassParams.ssrParams.ssrEnabled)},set:function(a){this._materialPassParams.ssrParams.ssrEnabled=a?!0:!1}},{key:"needsHighlight",get:function(){return 0<this.passes.highlight.count||0<this.passes.highlightIntegratedMesh.count}}]);return m}();const h=v.create(),
t=x.create(),p=new B.TwoVectorPosition;q.RenderPassManager=C;Object.defineProperty(q,"__esModule",{value:!0})});