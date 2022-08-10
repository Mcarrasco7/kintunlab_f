// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./Util","./depthRange"],function(f,h,k,l){let n=function(){function e(a){this.context=a;this.renderPlugins=[];this.slots=[];for(a=0;23>a;++a)this.slots[a]=[]}var d=e.prototype;d.add=function(a,b){this.renderPlugins.push(b);for(let c=0;c<a.length;++c)this.slots[a[c]].push(b);b.initializeRenderContext(this.context);this.context.requestRender()};d.remove=function(a){var b=this.renderPlugins.length;this.renderPlugins=this.renderPlugins.filter(c=>
c!==a);k.assert(this.renderPlugins.length<b,"Removing non-added render plugin");for(b=0;b<this.slots.length;++b)this.slots[b]=this.slots[b].filter(c=>c!==a);a.uninitializeRenderContext();this.context.requestRender()};d.prepareRender=function(a){for(const b of this.renderPlugins)b.prepareRender&&b.prepareRender(a)};d.render=function(){const a=this.slots[this.context.renderContext.slot];let b=!1;for(const c of a)c.canRender&&c.render(this.context.renderContext)&&(b=!0);return b};d.queryDepthRange=function(a){const b=
m;b.near=Infinity;b.far=-Infinity;for(const c of this.renderPlugins)if(c.queryDepthRange){const g=c.queryDepthRange(a);g&&l.union(b,g,b)}return b};h._createClass(e,[{key:"needsHighlight",get:function(){return this.renderPlugins.some(a=>a.needsHighlight)}},{key:"needsLinearDepth",get:function(){return this.renderPlugins.some(a=>a.needsLinearDepth)}},{key:"needsLaserlineWithContrastControl",get:function(){const a=this.slots[17];return!!a&&0<a.length}},{key:"renderOccludedFlags",get:function(){let a=
0;this.renderPlugins.forEach(b=>{b.renderOccludedFlags&&(a|=b.renderOccludedFlags)});return a}}]);return e}();const m={near:0,far:0};f.RenderPluginManager=n;Object.defineProperty(f,"__esModule",{value:!0})});