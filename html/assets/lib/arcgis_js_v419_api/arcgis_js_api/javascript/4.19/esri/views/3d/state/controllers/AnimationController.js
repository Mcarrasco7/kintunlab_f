// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/promiseUtils ../../../ViewAnimation ./CameraController".split(" "),
function(b,h,m,p,e,q,r,t,u,n,v,w,x,f,k,a){b.AnimationController=function(l){function c(){return l.apply(this,arguments)||this}h._inheritsLoose(c,l);var d=c.prototype;d.onControllerStart=function(){this.state=a.State.Running;e.isSome(this.viewAnimation)&&this.viewAnimation.when(()=>this.updateStateFromViewAnimation(),()=>this.updateStateFromViewAnimation())};d.updateStateFromViewAnimation=function(){!e.isSome(this.viewAnimation)||this.state!==a.State.Ready&&this.state!==a.State.Running||(this.viewAnimation.state===
k.State.FINISHED?this.finish():this.viewAnimation.state===k.State.STOPPED&&(this.state=a.State.Stopped))};d.onControllerEnd=function(){e.isSome(this.viewAnimation)&&!this.viewAnimation.done&&(this.state===a.State.Finished?this.viewAnimation.finish():this.state===a.State.Stopped&&this.viewAnimation.stop());this._asyncResult&&(this.state===a.State.Finished?this._asyncResult.resolve():this._asyncResult.reject(f.createAbortError()))};d.finish=function(){this.finishController()};h._createClass(c,[{key:"canStop",
get:function(){return!0}},{key:"asyncResult",get:function(){return this._asyncResult},set:function(g){this._asyncResult&&(this._asyncResult.reject(f.createAbortError()),this._asyncResult=null);this.state===a.State.Finished||this.state===a.State.Stopped?this.state===a.State.Finished?g.resolve():g.reject(f.createAbortError()):this._asyncResult=g}}]);return c}(a.CameraController);b.AnimationController=m.__decorate([n.subclass("esri.views.3d.state.controllers.AnimationController")],b.AnimationController);
Object.defineProperty(b,"__esModule",{value:!0})});