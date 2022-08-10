// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/property ../../../../../core/jsonMap ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/urlUtils ../../../../../core/uuid ../../../../../portal/support/resourceExtension ../../../../../chunks/vec3f64 ../../../../../chunks/vec3 ../../../support/mathUtils ../../utils/navigationUtils ./MomentumController".split(" "),
function(b,f,d,r,t,u,g,v,l,w,x,y,h,m,n,p,q){b.ZoomPlanarMomentumController=function(k){function c(a){a=k.call(this,a)||this;a.interactionType=1;a.constraintOptions.interactionDirection=h.create();return a}f._inheritsLoose(c,k);c.prototype.momentumStep=function(a,e){m.copy(this.constraintOptions.interactionDirection,e.eye);a=this.momentum.valueDelta(0,a);p.applyZoomToPoint(e,this.zoomCenter,a,this.view.state.constraints.minimumPoiDistance);this.constraintOptions.interactionDirection=n.directionFromTo(this.constraintOptions.interactionDirection,
e.eye,this.constraintOptions.interactionDirection)};f._createClass(c,[{key:"zoomCenter",set:function(a){this._set("zoomCenter",h.clone(a))}}]);return c}(q.MomentumController);d.__decorate([g.property({constructOnly:!0})],b.ZoomPlanarMomentumController.prototype,"momentum",void 0);d.__decorate([g.property({constructOnly:!0})],b.ZoomPlanarMomentumController.prototype,"zoomCenter",null);b.ZoomPlanarMomentumController=d.__decorate([l.subclass("esri.views.3d.state.controllers.momentum.ZoomPlanarMomentumController")],
b.ZoomPlanarMomentumController);Object.defineProperty(b,"__esModule",{value:!0})});