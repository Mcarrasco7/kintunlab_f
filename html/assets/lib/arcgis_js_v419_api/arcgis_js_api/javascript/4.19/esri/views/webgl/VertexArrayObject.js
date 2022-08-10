// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../core/maybe","./Util"],function(n,p,h){return function(){function g(a,b,c,d,f){this._context=a;this._locations=b;this._layout=c;this._buffers=d;this._indexBuffer=f;this._glName=null;this._initialized=!1;a.instanceCounter.increment(2,this)}var e=g.prototype;e.dispose=function(a=!0){if(this._context){var b=this._context.capabilities.vao;b&&this._glName&&(b.deleteVertexArray(this._glName),this._glName=null);this._context.getBoundVAO()===this&&this._context.bindVAO(null);
if(a){for(const c in this._buffers)this._buffers[c].dispose(),delete this._buffers[c];this._indexBuffer=p.disposeMaybe(this._indexBuffer)}this._context.instanceCounter.decrement(2,this);this._context=null}};e.initialize=function(){if(!this._initialized){var a=this._context.capabilities.vao;if(a){const b=a.createVertexArray();a.bindVertexArray(b);this._bindLayout();a.bindVertexArray(null);this._glName=b}this._initialized=!0}};e.bind=function(){this.initialize();const a=this._context.capabilities.vao;
a?a.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())};e._bindLayout=function(){const a=this._buffers,b=!!this._context.capabilities.vao,c=this._layout,d=this._indexBuffer;a||console.error("Vertex buffer dictionary is empty!");const f=this._context.gl;for(const k in a){const l=a[k];l||console.error("Vertex buffer is uninitialized!");const m=c[k];m||console.error("Vertex element descriptor is empty!");h.bindVertexBufferLayout(this._context,this._locations,l,m)}d&&(b?f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,
d.glName):this._context.bindBuffer(d))};e.unbind=function(){this.initialize();const a=this._context.capabilities.vao;a?a.bindVertexArray(null):this._unbindLayout()};e._unbindLayout=function(){const a=this._buffers,b=this._layout;a||console.error("Vertex buffer dictionary is empty!");for(const c in a){const d=a[c];d||console.error("Vertex buffer is uninitialized!");h.unbindVertexBufferLayout(this._context,this._locations,d,b[c])}this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)};
n._createClass(g,[{key:"glName",get:function(){return this._glName}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},{key:"size",get:function(){return Object.keys(this._buffers).reduce((a,b)=>a+this._buffers[b].size,this._indexBuffer?this._indexBuffer.size:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}}]);return g}()});