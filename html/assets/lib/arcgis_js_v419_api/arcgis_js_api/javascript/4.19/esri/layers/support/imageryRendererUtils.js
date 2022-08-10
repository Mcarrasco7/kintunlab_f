// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../core/lang ../../renderers/visualVariables/SizeVariable ../../renderers/support/colorRampUtils ../../renderers/support/stretchRendererUtils ./RasterFunction".split(" "),function(t,z,E,y,F,n){function A(a){const b=a.Raster;return b&&"esri.layers.support.RasterFunction"===b.declaredClass?A(b.functionArguments):a}function G(a,b){const c=new n;c.functionName="VectorFieldRenderer";const {dataType:f,bandProperties:d}=b;b="vector-uv"===f?!0:!1;let g,k;d&&2===d.length&&(g=d.map(e=>e.BandName.toLowerCase()).indexOf("magnitude"),
k=d.map(e=>e.BandName.toLowerCase()).indexOf("direction"));if(-1===g||null===g)g=0,k=1;const q="arithmetic"===a.rotationType?1:2,l="flow-from"===a.flowRepresentation?0:1,m=a.visualVariables?a.visualVariables.filter(e=>"Magnitude"===e.field)[0]:new E;a={magnitudeBandID:g,directionBandID:k,isUVComponents:b,referenceSystem:q,massFlowAngleRepresentation:l,symbolTileSize:50,symbolTileSizeUnits:100,calculationMethod:"Vector Average",symbologyName:H[a.style.toLowerCase().replace("-","_")],minimumMagnitude:m.minDataValue,
maximumMagnitude:m.maxDataValue,minimumSymbolSize:m.minSize,maximumSymbolSize:m.maxSize};c.functionArguments=a;return c}function I(a,b){const c=[],f=[],d=[],g=[],{pixelType:k,rasterAttributeTable:q}=b,l=q&&q.features,m=B(q);if(l&&Array.isArray(l)&&a.classBreakInfos){a.classBreakInfos.forEach((h,u)=>{const p=h.symbol.color;let w;p.a&&l.forEach(C=>{w=C.attributes[a.field];(w>=h.minValue&&w<h.maxValue||u===a.classBreakInfos.length-1&&w>=h.minValue)&&g.push([C.attributes[m],p.r,p.g,p.b])})});b=k?x(g,
k):g;var e=new n;e.functionName="Colormap";e.functionArguments={};e.functionArguments.Colormap=b;e.variableName="Raster";return e}a.classBreakInfos.forEach((h,u)=>{const p=h.symbol&&h.symbol.color;p.a?(0===u?c.push(h.minValue,h.maxValue+1E-6):c.push(h.minValue+1E-6,h.maxValue+1E-6),f.push(u),g.push([u,p.r,p.g,p.b])):d.push(h.minValue,h.maxValue)});b=k?x(g,k):g;e=new n;e.functionName="Remap";e.functionArguments={InputRanges:c,OutputValues:f,NoDataRanges:d};e.variableName="Raster";const r=new n;r.functionName=
"Colormap";r.functionArguments={Colormap:b,Raster:e};return r}function x(a,b){(b=D[String(b).toLowerCase()])&&a.push([Math.floor(b[0]-1),0,0,0],[Math.ceil(b[1]+1),0,0,0]);return a}function B(a){if(a)return{fields:a}=a,(a=a&&a.find(b=>b&&b.name&&"value"===b.name.toLowerCase()))&&a.name}function J(a,b){const c=[],{pixelType:f,rasterAttributeTable:d}=b,g=d&&d.features,k=B(d);let q=!1;a.uniqueValueInfos&&a.uniqueValueInfos.forEach(m=>{const e=m.symbol.color;e.a&&(a.field!==k&&g?g&&g.forEach(r=>{String(r.attributes[a.field])===
String(m.value)&&c.push([r.attributes[k],e.r,e.g,e.b])}):isNaN(+m.value)?q=!0:c.push([+m.value,e.r,e.g,e.b]))});if(q)return null;b=f&&0<c.length?x(c,f):c;const l=new n;l.functionName="Colormap";l.functionArguments={};l.functionArguments.Colormap=b;l.variableName="Raster";return l}function K(a){const b=[];a.forEach(c=>{Array.isArray(c)?b.push(c):null!=c.min&&null!=c.max&&b.push([c.min,c.max,c.avg||0,c.stddev||0])});return b}const D={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],
s16:[-32768,32767]},H={simple_scalar:"Simple Scalar",wind_barb:"Wind Barb",single_arrow:"Single Arrow",beaufort_kn:"Beaufort Wind (Knots)",beaufort_m:"Beaufort Wind (MetersPerSecond)",ocean_current_m:"Ocean Current (MetersPerSecond)",ocean_current_kn:"Ocean Current (Knots)"},L=new Set("raster-stretch unique-value class-breaks raster-shaded-relief vector-field raster-colormap".split(" ")),v={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9};t.combineRenderingRules=
function(a,b){if(!a||!b)return z.clone(a||b);a=z.clone(a);"none"!==b.functionName.toLowerCase()&&(A(a.functionArguments).Raster=b);return a};t.convertRendererToRenderingRule=function(a,b){b=b||{};switch(a.type){case "raster-stretch":var c=new n;c.functionName="Stretch";var f=v[F.stretchTypeJSONDict.toJSON(a.stretchType)],d=K(a.statistics);d={StretchType:f,Statistics:d,DRA:a.dynamicRangeAdjustment,UseGamma:a.useGamma,Gamma:a.gamma,ComputeGamma:a.computeGamma};null!=a.outputMin&&(d.Min=a.outputMin);
null!=a.outputMax&&(d.Max=a.outputMax);f===v.standardDeviation?(d.NumberOfStandardDeviations=a.numberOfStandardDeviations,c.outputPixelType="u8"):f===v.percentClip?(d.MinPercent=a.minPercent,d.MaxPercent=a.maxPercent,c.outputPixelType="u8"):f===v.minMax?c.outputPixelType="u8":f===v.sigmoid&&(d.SigmoidStrengthLevel=a.sigmoidStrengthLevel);c.functionArguments=d;c.variableName="Raster";if(a.colorRamp){f=a.colorRamp;d=new n;const g=y.getColorRampName(f);d.functionArguments=g?{colorRamp:g}:!b.convertColorRampToColormap||
"algorithmic"!==f.type&&"multipart"!==f.type?{colorRamp:a.colorRamp.toJSON()}:{Colormap:y.convertColorRampToColormap(f,256)};d.variableName="Raster";d.functionName="Colormap";d.functionArguments.Raster=c;a=d}else a=c;return a;case "class-breaks":return I(a,b);case "unique-value":return J(a,b);case "raster-colormap":return(a=a.extractColormap())&&0!==a.length?({pixelType:b}=b,a=b?x(a,b):a,b=new n,b.functionName="Colormap",b.functionArguments={},b.functionArguments.Colormap=a,a=b):a=void 0,a;case "vector-field":return G(a,
b);case "raster-shaded-relief":return"elevation"!==b.dataType?a=new n:(b=new n,b.functionName="Hillshade",c="traditional"===a.hillshadeType?0:1,f="none"===a.scalingType?1:3,d={HillshadeType:c,SlopeType:f,ZFactor:a.zFactor},0===c&&(d.Azimuth=a.azimuth,d.Altitude=a.altitude),3===f&&(d.PSPower=a.pixelSizePower,d.PSZFactor=a.pixelSizeFactor),b.functionArguments=d,b.variableName="Raster",a.colorRamp&&(b.functionName="ShadedRelief",d.Colormap=y.convertColorRampToColormap(a.colorRamp,256)),a=b),a}};t.isSupportedRendererType=
function(a){return L.has(a.type)};t.pixelTypeRanges=D;Object.defineProperty(t,"__esModule",{value:!0})});