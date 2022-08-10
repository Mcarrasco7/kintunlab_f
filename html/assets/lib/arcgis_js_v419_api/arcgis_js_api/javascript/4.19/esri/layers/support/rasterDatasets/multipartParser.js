// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports"],function(p){function r(a,d,e=0){var f="--"+d.boundary,b=[];for(var c=0;c<f.length;c++)b.push(f.charCodeAt(c));f=[];c="\n--"+d.boundary+"--";for(var h=0;h<c.length;h++)f.push(c.charCodeAt(h));h=[10];const g=[13,10];c=[];const n=b.length;a=new Uint8Array(a,e);const m=Math.min(5E4,a.length-n);let k=e=0;for(let l=0;l<m;l++){for(k=0;k<n&&a[l+k]===b[k];k++);k===n&&(e&&c.push(q(a.subarray(e,l),d)),l+=n-1,a[l+1]===h[0]?l+=1:a[l+1]===g[0]&&a[l+2]===g[1]&&(l+=2),e=l+1)}b=f.length;for(h=a.length-
b-10;h<a.length-b;h++){for(k=0;k<b&&a[h+k]===f[k];k++);if(k===b){c.push(q(a.subarray(e,h),d));break}}return c}function q(a,d){const e=String.fromCharCode.apply(null,a.subarray(0,Math.min(300,a.length))).split("\n"),f=Math.min(e.length,7),b={contentDisposition:"inline"};let c=0;for(let g=0;g<f;g++){var h;if(4>e[g].length)c=c+e[g].length+1;else if("content"===e[g].slice(0,7).toLowerCase()){c=c+e[g].length+1;if(-1===e[g].indexOf(":"))continue;const n=e[g].substring(0,e[g].indexOf(":")).trim(),m=e[g].substring(e[g].indexOf(":")+
1).trim();switch(n.toLowerCase()){case "content-type":b.contentType=m;break;case "content-description":b.contentDescription=m;break;case "content-transfer-encoding":b.contentTransferEncoding=m;break;case "content-id":b.contentID=m;break;case "content-disposition":b.contentDisposition=m;break;case "content-location":b.contentLocation=m}}else if(-1<b.contentDisposition.toLowerCase().indexOf("inline")&&4<=e[g].length&&-1<(null==(h=b.contentType)?void 0:h.toLowerCase().indexOf("image"))){d=!0;0<b.contentType.toLowerCase().indexOf("tif")&&
(d=73===a[c]&&73===a[c+1]||77===a[c]&&77===a[c+1]);d&&(d=new ArrayBuffer(a.length-c),(new Uint8Array(d)).set(a.subarray(c,a.length)),b.contentData=d);break}else if((""===d.start||b.contentID===d.start)&&b.contentType){if(-1<b.contentType.indexOf("text")||-1<b.contentType.indexOf("xml")){b.contentData=String.fromCharCode.apply(null,a.subarray(c,a.length));break}b.contentData=a.subarray(c,a.length)}}return b}p.getBoundary=function(a){a=new Uint8Array(a,0,2E3);var d=String.fromCharCode.apply(null,a);
a=d.indexOf('boundary\x3d"');d=-1!==a?d.slice(a+10,d.indexOf('"',a+10)):"";return{boundary:d,offset:-1!==a?a+12+d.length:0}};p.parse=function(a){var d,e;var f=null==(d=a.getHeader("Content-Type"))?void 0:d.split(";");if((null!=(e=null==f?void 0:f[0].trim())?e:"").startsWith("multipart/")){d={boundary:"",start:"",type:""};for(e=1;e<f.length;e++){const b=f[e].split("\x3d"),c=b[1].trim();d[b[0].trim()]=c.startsWith('"')?c.slice(1,b[1].length-1):c}f=d}else f=null;return f?{isMultipart:!0,data:f.boundary?
r(a.data,f,0):null}:{isMultipart:!1,data:null}};Object.defineProperty(p,"__esModule",{value:!0})});