// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/mat4 ../../../chunks/mat4f64 ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/Program ../../webgl/renderState ../../../chunks/Stars.glsl".split(" "),function(m,l,n,h,p,q,e,r,t,k,u){e=function(f){function d(){return f.apply(this,arguments)||this}n._inheritsLoose(d,f);var g=d.prototype;g.initializeProgram=
function(a){const b=d.shader.get().build();return new t(a.rctx,b.generateSource("vertex"),b.generateSource("fragment"),r.Default3D)};g.initializePipeline=function(){return k.makePipelineState({blending:k.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:k.defaultColorWriteParams})};g.bindPass=function(a,{camera:b,modelMatrix:c}){a=this.makeInfiniteProjectionMatrix(b.projectionMatrix,b.near,v);h.multiply(a,a,b.viewMatrix);h.multiply(a,a,c);this.program.setUniformMatrix4fv("transform",
a);this.program.setUniform4fv("viewport",b.fullViewport);this.program.setUniform1f("pixelRatio",b.pixelRatio)};g.makeInfiniteProjectionMatrix=function(a,b,c){h.copy(c,a);c[10]=2.4E-7-1;c[11]=-1;c[14]=(2.4E-7-2)*b;return c};return d}(e.ShaderTechnique);e.shader=new q.ReloadableShaderModule(u.StarsShader,()=>new Promise(function(f,d){m(["./Stars.glsl"],f,d)}));const v=p.create();l.StarsTechnique=e;Object.defineProperty(l,"__esModule",{value:!0})});