// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Accessor".split(" "),function(b,g,c,p,q,e,h,r,m,t,u,v,n){b.ClipDistanceConstraint=function(k){function d(){var a=
k.apply(this,arguments)||this;a.mode="auto";return a}g._inheritsLoose(d,k);var f=d.prototype;f.castNear=function(a){return Math.max(1E-8,a)};f.castFar=function(a){return Math.max(1E-8,a)};f.autoUpdate=function(a,l){"auto"===this.mode&&(this._get("near")!==a&&this._set("near",a),this._get("far")!==l&&this._set("far",l))};g._createClass(d,[{key:"near",get:function(){return this._get("near")},set:function(a){this._set("near",a);a>=this._get("far")&&(this.far=a+1E-9);this.mode="manual"}},{key:"far",get:function(){return this._get("far")},
set:function(a){this._set("far",a);a<=this._get("near")&&(this.near=a-1E-9);this.mode="manual"}}]);return d}(n);c.__decorate([e.property({type:Number,value:1E-8})],b.ClipDistanceConstraint.prototype,"near",null);c.__decorate([h.cast("near")],b.ClipDistanceConstraint.prototype,"castNear",null);c.__decorate([e.property({type:Number,value:1E-8})],b.ClipDistanceConstraint.prototype,"far",null);c.__decorate([h.cast("far")],b.ClipDistanceConstraint.prototype,"castFar",null);c.__decorate([e.property({type:["auto",
"manual"]})],b.ClipDistanceConstraint.prototype,"mode",void 0);b.ClipDistanceConstraint=c.__decorate([m.subclass("esri.views.3d.constraints.ClipDistanceConstraint")],b.ClipDistanceConstraint);b.default=b.ClipDistanceConstraint;Object.defineProperty(b,"__esModule",{value:!0})});