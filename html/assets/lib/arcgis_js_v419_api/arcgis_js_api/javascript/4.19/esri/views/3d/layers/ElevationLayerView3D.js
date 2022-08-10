// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ./LayerView3D ./TiledLayerView3D ../../layers/LayerView".split(" "),function(h,c,a,q,r,e,t,k,l,u,v,w,m,n,p){a=function(g){function f(){return g.apply(this,
arguments)||this}h._inheritsLoose(f,g);f.prototype.initialize=function(){var b=this.get("view.map.allLayers");b=b&&b.includes(this.layer);var d=this.get("view.map.ground.layers");d=d&&d.includes(this.layer);b&&!d&&(b=new l("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground"),this.addResolvingPromise(Promise.reject(b)));this._addTilingSchemeMatchPromise()};return f}(n.TiledLayerView3D(m.LayerView3D(p)));c.__decorate([e.property({readOnly:!0,
aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);c.__decorate([e.property()],a.prototype,"layer",void 0);c.__decorate([e.property({readOnly:!0,aliasOf:"layer.tileInfo"})],a.prototype,"tileInfo",void 0);return a=c.__decorate([k.subclass("esri.views.3d.layers.ElevationLayerView3D")],a)});