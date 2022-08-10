// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ./DefaultVertexAttributeLocations ./ContentObject ../materials/internal/MaterialUtil".split(" "),function(f,h,l,m,g,k){g=function(e){function c(a,n){var b=e.call(this)||this;b.type=3;b.supportsEdges=!1;b._visible=!0;b._renderPriority=0;b._insertOrder=0;b._vertexAttributeLocations=m.Default3D;b._params=k.copyParameters(a,n);b.validateParameterValues(b._params);return b}h._inheritsLoose(c,e);var d=c.prototype;d.dispose=
function(){};d.update=function(a){return!1};d.setParameterValues=function(a){k.updateParameters(this._params,a)&&(this.validateParameterValues(this._params),this.parametersChanged())};d.validateParameterValues=function(a){};d.isVisibleInPass=function(a){return!0};d.isVisible=function(){return this._visible};d.parametersChanged=function(){l.isSome(this.materialRepository)&&this.materialRepository.materialChanged(this)};h._createClass(c,[{key:"params",get:function(){return this._params}},{key:"visible",
get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this.parametersChanged())}},{key:"renderOccluded",get:function(){return this.params.renderOccluded}},{key:"renderPriority",get:function(){return this._renderPriority},set:function(a){a!==this._renderPriority&&(this._renderPriority=a,this.parametersChanged())}},{key:"insertOrder",get:function(){return this._insertOrder},set:function(a){a!==this._insertOrder&&(this._insertOrder=a,this.parametersChanged())}},{key:"vertexAttributeLocations",
get:function(){return this._vertexAttributeLocations}}]);return c}(g.ContentObject);f.Material=g;f.materialParametersDefaults={renderOccluded:1};f.materialPredicate=function(e,c){return e.isVisible()&&e.isVisibleInPass(c.pass)&&0!==(e.renderOccluded&c.renderOccludedMask)};Object.defineProperty(f,"__esModule",{value:!0})});