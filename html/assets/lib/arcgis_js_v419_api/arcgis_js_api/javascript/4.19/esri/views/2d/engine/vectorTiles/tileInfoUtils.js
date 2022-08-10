// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../layers/support/TileInfo"],function(f,k){f.areSchemasOverlapping=function(a,b){if(a===b)return!0;if(!a&&null!=b||null!=a&&!b||!a.spatialReference.equals(b.spatialReference)||a.dpi!==b.dpi)return!1;var c=a.origin;const e=b.origin;if(1E-6<=Math.abs(c.x-e.x)||1E-6<=Math.abs(c.y-e.y))return!1;a.lods[0].scale>b.lods[0].scale?(c=a,a=b):c=b;for(b=c.lods[0].scale;b>=a.lods[a.lods.length-1].scale-1E-6;b/=2)if(1E-6>Math.abs(b-a.lods[0].scale))return!0;return!1};f.unionTileInfos=
function(a,b){if(a===b)return a;if(!a&&null!=b)return b;if(null!=a&&!b)return a;const c=a.size[0],e=a.format,l=a.dpi,m={x:a.origin.x,y:a.origin.y},n=a.spatialReference.toJSON();var d=a.lods[0].scale>b.lods[0].scale?a.lods[0]:b.lods[0];a=(a.lods[a.lods.length-1].scale<=b.lods[b.lods.length-1].scale?a.lods[a.lods.length-1]:b.lods[b.lods.length-1]).scale;b=[];let g=d.scale;d=d.resolution;let h=0;for(;g>a;)b.push({level:h,resolution:d,scale:g}),h++,g/=2,d/=2;return new k({size:[c,c],dpi:l,format:e||"pbf",
origin:m,lods:b,spatialReference:n})};Object.defineProperty(f,"__esModule",{value:!0})});