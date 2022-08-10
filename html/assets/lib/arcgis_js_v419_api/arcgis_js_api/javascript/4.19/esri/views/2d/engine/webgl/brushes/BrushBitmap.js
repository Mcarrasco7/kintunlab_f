// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../definitions","../VertexStream","./WGLBrush"],function(p,k,q,r){const f={nearest:{defines:[],samplingMode:9728,mips:!1},bilinear:{defines:[],samplingMode:9729,mips:!1},bicubic:{defines:["bicubic"],samplingMode:9729,mips:!1},trilinear:{defines:[],samplingMode:9987,mips:!0}};return function(l){function g(){var a=l.apply(this,arguments)||this;a._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:{a_position:0,a_texcoord:1}};return a}
p._inheritsLoose(g,l);var h=g.prototype;h.dispose=function(){this._quad&&this._quad.dispose()};h.prepareState=function({context:a},b){a.setBlendingEnabled(!0);"additive"===b.blendFunction?a.setBlendFunctionSeparate(1,1,1,1):a.setBlendFunctionSeparate(1,771,1,771);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0);a.setStencilFunction(514,b.stencilRef,255)};h.draw=function(a,b){const {context:m,renderingOptions:n,painter:t}=a;if(b.source){a.timeline.begin(this.name);this._quad||
(this._quad=new q(m,[0,0,1,0,0,1,1,1]));if("dynamic"===n.samplingMode){({state:d}=a);var e=b.resolution/b.pixelRatio/d.resolution,c=Math.round(a.pixelRatio)!==a.pixelRatio;e=1.05<e||.95>e;var d=d.rotation||e||c||b.isSourceScaled||b.rotation?f.bilinear:f.nearest}else d=f[n.samplingMode];c=t.materialManager.getProgram(a,this._desc,d.defines);var {coordScale:u,computedOpacity:v,transforms:w}=b;b.setSamplingProfile(d);b.bind(a,k.TEXTURE_BINDING_BITMAP);m.bindProgram(c);c.setUniformMatrix3fv("u_dvsMat3",
w.dvs);c.setUniform1i("u_texture",k.TEXTURE_BINDING_BITMAP);c.setUniform2fv("u_coordScale",u);c.setUniform1f("u_opacity",v);this._quad.draw();a.timeline.end(this.name)}};return g}(r)});