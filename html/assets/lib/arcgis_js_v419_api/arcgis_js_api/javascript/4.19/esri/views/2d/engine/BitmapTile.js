// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","./webgl/TiledDisplayObject","./Bitmap"],function(k,l,f,m){f=function(b){function e(a,g,h,n=null){var d=b.call(this,a,g,h,h)||this;d.bitmap=new m.Bitmap(n,"standard",!1);d.bitmap.coordScale=h;d.bitmap.once("isReady",()=>d.ready());return d}l._inheritsLoose(e,b);var c=e.prototype;c.destroy=function(){b.prototype.destroy.call(this);this.bitmap.destroy()};c.beforeRender=function(a){b.prototype.beforeRender.call(this,a);this.bitmap.beforeRender(a)};
c.afterRender=function(a){b.prototype.afterRender.call(this,a);this.bitmap.afterRender(a)};c.setTransform=function(a,g){b.prototype.setTransform.call(this,a,g);this.bitmap.transforms.dvs=this.transforms.dvs};c.onAttach=function(){this.bitmap.stage=this.stage};c.onDetach=function(){this.bitmap&&(this.bitmap.stage=null)};l._createClass(e,[{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(a){this.bitmap.stencilRef=a}}]);return e}(f.TiledDisplayObject);k.BitmapTile=f;Object.defineProperty(k,
"__esModule",{value:!0})});