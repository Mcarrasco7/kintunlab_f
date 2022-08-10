// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/maybe ../../../core/urlUtils ../../../core/promiseUtils ../../support/Scheduler ../webgl-engine/lib/WebGLDriverTest ../webgl-engine/lib/Texture".split(" "),function(m,t,p,u,l,q,v,w){let r=function(){function n(a,b,c,f){this._streamDataRequester=a;this._stage=b;this._textureOptions=c;this._textureRequests=new Map;this._frameTask=p.isSome(f)?f.registerTask(q.Task.TEXTURE_UNLOAD,h=>this._frameTask.processQueue(h),()=>!1):q.ImmediateTask}
var d=n.prototype;d.destroy=function(){this._frameTask.remove();this._textureRequests.forEach(a=>this.releaseTextureRequest(a));this._textureRequests.clear()};d.fromUrl=async function(a,b,c){l.throwIfAborted(c);const f=p.isSome(c)&&c.signal,h=this.makeUid(a,b);let g=this._textureRequests.get(h);if(!g){c=l.createAbortController();const k=this._streamDataRequester.request(a,"image",{uid:h,signal:c.signal});g={referenceCount:0,texture:null,textureAsync:null,abortController:c};this._textureRequests.set(h,
g);g.textureAsync=k.then(e=>{e=this.createTexture(a,e,b);g.texture=e;g.abortController=null;this.addToStage(e);return{uid:h,texture:e}},e=>{g.abortController=null;throw e;})}g.referenceCount++;return(new Promise((k,e)=>{l.onAbort(f,()=>{e(l.createAbortError())});g.textureAsync.then(k,e)})).catch(k=>{this.release(h);throw k;})};d.fromData=function(a,b){a=this.makeUid(a);let c=this._textureRequests.get(a);c||(c={referenceCount:0,texture:b(),textureAsync:null,abortController:null},this.addToStage(c.texture),
this._textureRequests.set(a,c));c.referenceCount++;return{uid:a,texture:c.texture}};d.release=function(a){if(this._textureRequests){var b=this._textureRequests.get(a);b?(1>b.referenceCount&&console.warn("TextureCollection: reference count is \x3c 1 for "+a),b.referenceCount--,1>b.referenceCount&&this._frameTask.schedule(()=>this.releaseNow(a))):console.warn(`TextureCollection: texture doesn't exist: '${a}'`)}};d.releaseNow=function(a){if(this._textureRequests){var b=this._textureRequests.get(a);!b||
0<b.referenceCount||(this.releaseTextureRequest(b),this._textureRequests.delete(a))}};d.releaseTextureRequest=function(a){a.texture?this.removeFromStage(a.texture):a.abortController&&(a.abortController.abort(),a.abortController=null)};d.createTexture=function(a,b,c){const f={...this._textureOptions,powerOfTwoResizeMode:2};if(u.isSVG(a)){if(c||0===b.width&&0===b.height)a=b.width?b.height/b.width:1,c=c||64,1<a?(b.width=Math.round(c/a),b.height=c):(b.width=c,b.height=Math.round(c*a));this._stage.renderView&&
v.testWebGLDriver(this._stage.renderView.renderingContext).svgAlwaysPremultipliesAlpha&&(f.preMultiplyAlpha=!1)}f.width=b.width;f.height=b.height;return new w.Texture(b,f)};d.addToStage=function(a){this._stage.add(a)};d.removeFromStage=function(a){this._stage.remove(a)};d.makeUid=function(a,b){return null!=b?`${a}.${b}px`:a};t._createClass(n,[{key:"test",get:function(){return{textureRequests:this._textureRequests}}}]);return n}();m.TextureCollection=r;m.default=r;Object.defineProperty(m,"__esModule",
{value:!0})});