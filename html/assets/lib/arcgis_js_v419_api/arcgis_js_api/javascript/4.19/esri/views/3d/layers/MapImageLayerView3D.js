// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../support/drapedUtils ../../layers/MapImageLayerView ./DynamicLayerView3D".split(" "),function(f,g,b,p,q,r,t,h,u,v,w,k,l,m){b=function(e){function c(){var a=
e.apply(this,arguments)||this;a.updateWhenStationary=!0;return a}f._inheritsLoose(c,e);var d=c.prototype;d.initialize=function(){this.updatingHandles.add(this,"exportImageVersion",()=>this.updatingHandles.addPromise(this.refreshDebounced()))};d.createFetchPopupFeaturesQueryGeometry=function(a,n){return k.createQueryGeometry(a,n,this.view)};d.getFetchOptions=function(){return{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp}};return c}(l.MapImageLayerView(m));return b=g.__decorate([h.subclass("esri.views.3d.layers.MapImageLayerView3D")],
b)});