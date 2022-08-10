// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ./CloudRaster ./ImageAuxRaster ./ImageServerRaster ./MRFRaster ./TIFFRaster".split(" "),function(n,p,q,g,r,t,u){const b=new Map;b.set("CRF",{desc:"Cloud Raster Format",constructor:q});b.set("MRF",{desc:"Meta Raster Format",constructor:t});b.set("TIFF",{desc:"GeoTIFF",constructor:u});b.set("RasterTileServer",{desc:"Raster Tile Server",constructor:r});b.set("JPG",{desc:"JPG Raster Format",constructor:g});b.set("PNG",{desc:"PNG Raster Format",
constructor:g});b.set("GIF",{desc:"GIF Raster Format",constructor:g});b.set("BMP",{desc:"BMP Raster Format",constructor:g});return function(){function h(){}h.open=async function(c){const {url:d,ioConfig:f,sourceJSON:v}=c;let a=c.datasetFormat;null==a&&d.lastIndexOf(".")&&(a=d.slice(d.lastIndexOf(".")+1).toUpperCase());if("OVR"===a||"TIF"===a)a="TIFF";else if("JPG"===a||"JPEG"===a||"JFIF"===a)a="JPG";-1<d.toLowerCase().indexOf("/imageserver")&&-1===d.toLowerCase().indexOf("/wcsserver")&&(a="RasterTileServer");
const w={bandIds:null,sampling:null},l={url:d,sourceJSON:v,datasetFormat:a,ioConfig:f||w};let k,e;if(this.supportedFormats.has(a))return k=b.get(a).constructor,e=new k(l),await e.open({signal:c.signal}),e;if(a)throw new p("rasterfactory:open","not a supported format "+a);const x=Array.from(b.keys());let y=0;const m=function(){a=x[y++];if(!a)return null;k=b.get(a).constructor;e=new k(l);return e.open({signal:c.signal}).then(()=>e).catch(()=>m())};return m()};h.register=function(c,d,f){b.has(c.toUpperCase())||
b.set(c.toUpperCase(),{desc:d,constructor:f})};n._createClass(h,null,[{key:"supportedFormats",get:function(){const c=new Set;b.forEach((d,f)=>c.add(f));return c}}]);return h}()});