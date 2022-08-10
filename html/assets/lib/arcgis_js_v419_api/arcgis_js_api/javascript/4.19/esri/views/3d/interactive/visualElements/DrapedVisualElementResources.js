// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/Accessor ../../../../core/Identifiable".split(" "),function(h,
k,g,l,c,r,t,m,u,n,v,w,x,p,q){l=function(){function d(a){this.resourceFactory=a;this._resources=null;this._visible=!0;this._attached=!1}var b=d.prototype;b.destroy=function(){this._destroyResources()};b.recreate=function(){this.attached&&this._createResources()};b.recreateGeometry=function(){this.resourceFactory.recreateGeometry?c.isNone(this._resources)||(this.ensureRenderGeometriesRemoved(),this.resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()};
b._createOrDestroyResources=function(){this._attached?c.isNone(this._resources)&&this._createResources():this._destroyResources()};b._createResources=function(){var a;this._destroyResources();var e=this.resourceFactory.createResources();this._resources={layerView:new f({view:this.resourceFactory.view}),external:e,geometriesAdded:!1};this._syncGeometriesToRenderer();(e=null==(a=this.resourceFactory.view.basemapTerrain)?void 0:a.overlayManager)&&e.registerDrapeSource(this._resources.layerView)};b._destroyResources=
function(){var a;if(!c.isNone(this._resources)){this.ensureRenderGeometriesRemoved();var e=null==(a=this.resourceFactory.view.basemapTerrain)?void 0:a.overlayManager;e&&e.unregisterDrapeSource(this._resources.layerView);this._resources=null}};b._syncGeometriesToRenderer=function(){this._visible?this.ensureRenderGeometriesAdded():this.ensureRenderGeometriesRemoved()};b.ensureRenderGeometriesRemoved=function(){var a;!c.isNone(this._resources)&&null!=(a=this.resourceFactory.view)&&a.basemapTerrain&&
this._resources.geometriesAdded&&(this.resourceFactory.view.basemapTerrain.overlayManager.renderer.removeGeometries(this._resources.external.geometries,this._resources.layerView,2),this._resources.geometriesAdded=!1)};b.ensureRenderGeometriesAdded=function(){c.isNone(this._resources)||this._resources.geometriesAdded||(this.resourceFactory.view.basemapTerrain.overlayManager.renderer.addGeometries(this._resources.external.geometries,this._resources.layerView,2),this._resources.geometriesAdded=!0)};
k._createClass(d,[{key:"resources",get:function(){return c.isSome(this._resources)?this._resources.external:null}},{key:"visible",get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this._syncGeometriesToRenderer())}},{key:"attached",get:function(){return this._attached},set:function(a){a!==this._attached&&(this._attached=a,this._createOrDestroyResources())}}]);return d}();let f=function(d){function b(a){a=d.call(this,a)||this;a.drapeSourceType=1;return a}k._inheritsLoose(b,
d);return b}(q.IdentifiableMixin(p));g.__decorate([m.property({constructOnly:!0})],f.prototype,"view",void 0);g.__decorate([m.property({readOnly:!0})],f.prototype,"drapeSourceType",void 0);f=g.__decorate([n.subclass("DrapedVisualElementLayerView")],f);h.DrapedVisualElementResources=l;Object.defineProperty(h,"__esModule",{value:!0})});