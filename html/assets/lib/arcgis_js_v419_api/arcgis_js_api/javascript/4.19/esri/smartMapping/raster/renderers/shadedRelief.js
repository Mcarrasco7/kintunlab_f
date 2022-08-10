// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],function(c,g,d,h,k){async function l(a){a=await k.processRasterRendererParameters(a);const b=a.layer.supportsMultidirectionalHillshade();if("multi-directional"===a.hillshadeType&&!b)throw new d("raster-shaded-relief-renderer:not-supported","multi-directional hillshade type is only supported on 10.8.1+ servers");b||(a.hillshadeType="traditional");return a}c.createRenderer=
async function(a){a=await l(a);const b=h.createShadedReliefRenderer(a.layer.rasterInfo,a.hillshadeType);if(!g.isSome(b))throw new d("raster-shaded-relief-renderer:not-supported","Only elevation raster data is supported");{const {scalingType:e,colorRamp:f}=a;null!=e&&(b.scalingType=e);void 0!==f&&(b.colorRamp=f)}return{renderer:b}};Object.defineProperty(c,"__esModule",{value:!0})});