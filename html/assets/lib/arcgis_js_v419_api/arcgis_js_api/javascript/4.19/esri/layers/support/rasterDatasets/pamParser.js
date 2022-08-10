// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/SpatialReference","../../../geometry","../rasterTransforms/PolynomialTransform","./xmlUtilities"],function(n,p,A,w,e){function r(b,d){if(!b||!d)return null;const c=[];for(let a=0;a<b.length;a++)c.push(b[a]),c.push(d[a]);return c}function x(b){var d,c=e.getElement(b,"GeodataXform");b=e.getElementNumericValue(c,"SpatialReference/WKID")||e.getElementValue(c,"SpatialReference/WKT");b=q(b);if("typens:PolynomialXform"!==c.getAttribute("xsi:type"))return{spatialReference:b,
transform:null};var a=null!=(d=e.getElementNumericValue(c,"PolynomialOrder"))?d:1,f=e.getElementNumericValues(c,"CoeffX/Double");const g=e.getElementNumericValues(c,"CoeffY/Double");d=e.getElementNumericValues(c,"InverseCoeffX/Double");c=e.getElementNumericValues(c,"InverseCoeffY/Double");f=r(f,g);c=r(d,c);a=new w({spatialReference:b,polynomialOrder:a,forwardCoefficients:f,inverseCoefficients:c});return{spatialReference:b,transform:a}}function y(b){var d;const c=e.getElementNumericValue(b,"NoDataValue");
var a=e.getElement(b,"Histograms/HistItem");const f=e.getElementNumericValue(a,"HistMin"),g=e.getElementNumericValue(a,"HistMax"),z=e.getElementNumericValue(a,"BucketCount");a=null==(d=e.getElementValue(a,"HistCounts"))?void 0:d.split("|").map(h=>Number(h));let k,l,t,u;e.getElements(b,"Metadata/MDI").forEach(h=>{var v;const m=Number(null!=(v=h.textContent)?v:h.nodeValue);switch(h.getAttribute("key").toUpperCase()){case "STATISTICS_MINIMUM":k=m;break;case "STATISTICS_MAXIMUM":l=m;break;case "STATISTICS_MEAN":t=
m;break;case "STATISTICS_STDDEV":u=m}});b=e.getElementNumericValue(b,"Metadata/SourceBandIndex");return{noDataValue:c,histogram:null!=a&&a.length&&null!=k&&null!=l?{min:f,max:g,size:z||a.length,counts:a}:null,sourceBandIndex:b,statistics:null!=k&&null!=l?{min:k,max:l,avg:t,stddev:u}:null}}function q(b){if(!b)return null;var d=Number(b);if(!isNaN(d)&&0!==d)return new p({wkid:d});b=String(b);if(!b.startsWith("GEOGCS")&&!b.startsWith("PROJCS"))return null;d=b.replace(/\]/g,"[").replace(/"/g,"").split("[").map(c=>
c.trim()).filter(c=>""!==c);d=d[d.length-1].split(",");return"EPSG"===d[0]&&b.endsWith('"]]')&&(d=Number(d[1]),!isNaN(d)&&0!==d)?new p({wkid:d}):new p({wkt:b})}n.parsePAMInfo=function(b){var d;if("pamdataset"!==(null==b?void 0:null==(d=b.documentElement.tagName)?void 0:d.toLowerCase()))return{};const c={spatialReference:null,transform:null,metadata:{},rasterBands:[],statistics:null,histograms:null};b.documentElement.childNodes.forEach(a=>{if(1===a.nodeType)if(e.isSameTagIgnoreNS(a,"SRS"))c.spatialReference||
(a=e.getElementValue(a),c.spatialReference=q(a));else if(e.isSameTagIgnoreNS(a,"Metadata"))if("xml:ESRI"===a.getAttribute("domain")){const {spatialReference:f,transform:g}=x(a);c.transform=g;c.spatialReference||(c.spatialReference=f)}else e.getElements(a,"MDI").forEach(f=>c.metadata[f.getAttribute("key")]=e.getElementValue(f));else e.isSameTagIgnoreNS(a,"PAMRasterBand")&&(a=y(a),null!=a.sourceBandIndex&&null==c.rasterBands[a.sourceBandIndex]?c.rasterBands[a.sourceBandIndex]=a:c.rasterBands.push(a))});
if(b=c.rasterBands)c.statistics=b[0].statistics?b.map(a=>a.statistics):null,c.histograms=b[0].histogram?b.map(a=>a.histogram):null;return c};n.parseSpatialReference=q;Object.defineProperty(n,"__esModule",{value:!0})});