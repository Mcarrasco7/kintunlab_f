// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../ViewAnimation ../../../camera/constraintUtils ../../../webgl-engine/lib/Camera ../AnimationController".split(" "),
function(b,g,h,r,t,u,l,v,m,w,x,y,n,p,k,q){b.MomentumController=function(d){function c(a){a=d.call(this,a)||this;a.view=null;a.beginCamera=new k;a.elapsedTimeSec=0;a.constraintOptions={selection:15,interactionType:4,interactionFactor:0,interactionStartCamera:new k,interactionDirection:null,tiltMode:0};return a}g._inheritsLoose(c,d);var e=c.prototype;e.initialize=function(){this.constraintOptions.interactionType=this.interactionType;this.viewAnimation=new n};e.onControllerStart=function(a){this.beginCamera.copyFrom(a);
this.constraintOptions.interactionStartCamera=this.beginCamera;d.prototype.onControllerStart.call(this,a)};e.stepController=function(a,f){f.copyViewFrom(this.beginCamera);this.elapsedTimeSec+=a;this.momentumStep(this.elapsedTimeSec,f);p.applyAll(this.view,f,this.constraintOptions)};g._createClass(c,[{key:"steppingFinished",get:function(){return this.momentum.isFinished(this.elapsedTimeSec)}}]);return c}(q.AnimationController);h.__decorate([l.property({constructOnly:!0})],b.MomentumController.prototype,
"view",void 0);b.MomentumController=h.__decorate([m.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],b.MomentumController);Object.defineProperty(b,"__esModule",{value:!0})});