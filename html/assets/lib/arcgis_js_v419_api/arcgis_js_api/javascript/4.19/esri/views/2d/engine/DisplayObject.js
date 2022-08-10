// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/has","../../../core/promiseUtils","../../../core/Evented"],function(g,h,f,k,m){const n=1/f("mapview-transitions-duration");f=function(l){function d(){var a=l.apply(this,arguments)||this;a._fadeOutResolver=null;a._fadeInResolver=null;a._clips=null;a.computedVisible=!0;a.computedOpacity=1;a.fadeTransitionEnabled=!1;a.inFadeTransition=!1;a._isReady=!1;a._opacity=1;a._stage=null;a._visible=!0;return a}h._inheritsLoose(d,l);var b=
d.prototype;b.fadeIn=function(){if(this._fadeInResolver)return this._fadeInResolver.promise;this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null);this.computedOpacity=0;this.fadeTransitionEnabled=!0;this._fadeInResolver=k.createResolver();this.requestRender();return this._fadeInResolver.promise};b.fadeOut=function(){if(this._fadeOutResolver)return this._fadeOutResolver.promise;this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null);this.fadeTransitionEnabled=
!0;this._fadeOutResolver=k.createResolver();this.requestRender();return this._fadeOutResolver.promise};b.beforeRender=function(a){this.updateTransitionProperties(a.deltaTime,a.state.scale)};b.afterRender=function(a){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)};b.remove=function(){var a;null==(a=this.parent)?void 0:a.removeChild(this)};
b.setTransform=function(a){};b.processRender=function(a){this.stage&&this.computedVisible&&this.doRender(a)};b.requestRender=function(){this.stage&&this.stage.requestRender()};b.processDetach=function(){this.onDetach();this.emit("detach")};b.updateTransitionProperties=function(a,c){if(this.fadeTransitionEnabled){c=this._fadeOutResolver||!this.visible?0:this.opacity;const e=this.computedOpacity;e===c?this.computedVisible=this.visible:(a*=n,this.computedOpacity=e>c?Math.max(c,e-a):Math.min(c,e+a),this.computedVisible=
0<this.computedOpacity,a=c===this.computedOpacity,this.inFadeTransition=!a,a||this.requestRender())}else this.computedOpacity=this.opacity,this.computedVisible=this.visible};b.onAttach=function(){};b.onDetach=function(){};b.doRender=function(a){};b.ready=function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())};h._createClass(d,[{key:"clips",get:function(){return this._clips},set:function(a){this._clips=a;this.requestRender()}},{key:"isReady",get:function(){return this._isReady}},
{key:"opacity",get:function(){return this._opacity},set:function(a){this._opacity!==a&&(this._opacity=Math.min(1,Math.max(a,0)),this.requestRender())}},{key:"stage",get:function(){return this._stage},set:function(a){if(this._stage!==a){var c=this._stage;(this._stage=a)?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):c.trashDisplayObject(this)}}},{key:"visible",get:function(){return this._visible},set:function(a){this._visible!==a&&(this._visible=a,this.requestRender())}}]);
return d}(m);g.DisplayObject=f;Object.defineProperty(g,"__esModule",{value:!0})});