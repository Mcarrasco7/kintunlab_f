// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/Zlib ../../../chunks/Jpg ../rasterDatasets/byteStreamUtils ./Lzw ./TiffTags ./utils".split(" "),function(H,O,R,ea,S,J,T){function U(b,a){let e="unknown";3===b?e="f32":1===b?1===a?e="u1":2===a?e="u2":4===a?e="u4":8>=a?e="u8":16>=a?e="u16":32>=a&&(e="u32"):2===b&&(8>=a?e="s8":16>=a?e="s16":32>=a&&(e="s32"));return e}function L(b){let a=null;switch(b?b.toLowerCase():"f32"){case "u1":case "u2":case "u4":case "u8":a=Uint8Array;break;case "u16":a=Uint16Array;break;case "u32":a=
Uint32Array;break;case "s8":a=Int8Array;break;case "s16":a=Int16Array;break;case "s32":a=Int32Array;break;default:a=Float32Array}return a}function fa(b,a){return{x:a[0]*b.x+a[1]*b.y+a[2],y:a[3]*b.x+a[4]*b.y+a[5]}}function D(b,a){return(b=b.get(a))&&b.values}function y(b,a){return(b=b.get(a))&&b.values[0]}function P(b,a,e,m=0,f=J.TIFF_TAGS,c=4){var d=8===c;const l=d?Q(new DataView(b,e,8),0,a):(new DataView(b,e,2)).getUint16(0,a),g=4+2*c;var h=d?8:2;d=h+l*g;if(e+d>b.byteLength)return{success:!1,ifd:null,
nextIFD:null,requiredBufferSize:d};const t=e+d+4<=b.byteLength?M(new DataView(b,e+d,8===c?8:4),0,a,8===c):null;e+=h;h=new Map;let k,x,n,u,z;for(let w=0;w<l;w++){var p=new DataView(b,e+g*w,g);k=p.getUint16(0,a);n=p.getUint16(2,a);x=J.getTagName(k,f);const q=[];2===c?(u=p.getUint16(4,a),z=p.getUint16(6,a)):4===c?(u=p.getUint32(4,a),z=p.getUint32(8,a)):8===c&&(u=M(p,4,a,!0),z=M(p,12,a,!0),q.push(p.getUint32(12,a)),q.push(p.getUint32(16,a)));p={id:k,type:n,valueCount:u,valueOffset:z,valueOffsets:q,values:null};
V(b,a,p,m,!1,c);h.set(x,p)}return{success:!0,ifd:h,nextIFD:t,requiredBufferSize:d}}function V(b,a,e,m=0,f=!1,c=4){if(e.values)return!0;var d=e.type,l=e.valueCount,g=e.valueOffset;let h=[];var t=W[d],k=8*t,x=l*t,n=l*W[d]*8,u=8===c?64:32;c=e.valueOffsets;if(n>u&&x>(f?b.byteLength:b?b.byteLength-g+m:0))return e.offlineOffsetSize=[g,x],e.values=null,!1;if(n<=u)if(a||(32>=u?g>>>=32-n:(b=null!=c&&c.length?c[0]:g>>>0,a=null!=c&&c.length?c[1]:Math.round((g-b)/4294967296),32>=n?(g=b>>>32-n,c[0]=g):(g=b*2**
(32-n)+(a>>>32-n),c[0]=b,c[1]=a>>>32-n))),1===l&&k===u)h=[g];else if(64===u)for(b=null!=c&&c.length?c[0]:g>>>0,g=null!=c&&c.length?c[1]:Math.round((g-b)/4294967296),a=b,t=32,b=1;b<=l;b++)x=32-k*b%32,t<k?(x=a<<x>>>32-t,n=g<<32-t>>>32-t,a=g,h.push(x+n*2**(k-t)),t-=32-(k-t)):(h.push(a<<x>>>32-k),t-=k),0===t&&(t=32,a=g);else for(b=1;b<=l;b++)h.push(g<<32-k*b>>>32-k);else for(g-=m,f&&(g=0),l=g;l<g+x;l+=t){switch(d){case 1:k=(new DataView(b,l,1)).getUint8(0);break;case 2:k=(new DataView(b,l,1)).getUint8(0);
break;case 3:k=(new DataView(b,l,2)).getUint16(0,a);break;case 4:k=(new DataView(b,l,4)).getUint32(0,a);break;case 5:k=(new DataView(b,l,4)).getUint32(0,a)/(new DataView(b,l+4,4)).getUint32(0,a);break;case 6:k=(new DataView(b,l,1)).getInt8(0);break;case 7:k=(new DataView(b,l,1)).getUint8(0);break;case 8:k=(new DataView(b,l,2)).getInt16(0,a);break;case 9:k=(new DataView(b,l,4)).getInt32(0,a);break;case 10:k=(new DataView(b,l,4)).getInt32(0,a)/(new DataView(b,l+4,4)).getInt32(0,a);break;case 11:k=(new DataView(b,
l,4)).getFloat32(0,a);break;case 12:k=(new DataView(b,l,8)).getFloat64(0,a);break;case 16:case 18:k=Q(new DataView(b,l,8),0,a);break;case 17:c=new DataView(b,l,8);n=(k=a)?c.getInt32(0,k):c.getUint32(0,k);c=k?c.getUint32(4,k):c.getInt32(4,k);u=0<=(k?n:c)?1:-1;k?n*=u:c*=u;k=u*(k?4294967296*c+n:4294967296*n+c);break;default:k=null}h.push(k)}if(2===d){d="";g=h;h=[];for(b=0;b<g.length;b++)0===g[b]&&""!==d?(h.push(d),d=""):d+=String.fromCharCode(g[b]);""===d&&0!==h.length||h.push(d)}e.values=h;return!0}
function X(b){var a=b[0];const e=y(a,"TILEWIDTH"),m=y(a,"TILELENGTH"),f=y(a,"IMAGEWIDTH"),c=y(a,"IMAGELENGTH");var d=y(a,"BITSPERSAMPLE");const l=y(a,"SAMPLESPERPIXEL");var g=y(a,"SAMPLEFORMAT")||1;const h=U(g,d),t=D(a,"PLANARCONFIGURATION")?2===D(a,"PLANARCONFIGURATION")[0]:!1;var k=D(a,"GDAL_NODATA");let x;null!=k&&("string"===typeof k[0]?(x=k.map(C=>parseFloat(C)),x.some(C=>isNaN(C))&&(x=null)):"number"===typeof k[0]&&(x=k));var n=y(a,"COMPRESSION")||1;switch(n){case 1:k="NONE";break;case 2:case 3:case 4:case 32771:k=
"CCITT";break;case 5:k="LZW";break;case 6:case 7:k="JPEG";break;case 32773:k="PACKBITS";break;case 8:case 32946:k="DEFLATE";break;case 34712:k="JPEG2000";break;default:k=String(n)}let u=!0,z="";1!==n&&5!==n&&6!==n&&8!==n&&32946!==n&&(u=!1,z+="unsupported tag compression "+n);3<g&&(u=!1,z+="unsupported tag sampleFormat "+g);0!==d%8&&(u=!1,z+="unsupported tag bitsPerSample "+d);d=y(a,"GEOASCIIPARAMS");if(d){var p=(p=d.split("|").filter(C=>-1<C.indexOf("ESRI PE String \x3d "))[0])?p.replace("ESRI PE String \x3d ",
""):"";p=0===p.indexOf("PROJCS")||0===p.indexOf("GEOGCS")?{wkid:null,wkt:p}:null}g=D(a,"GEOTIEPOINTS");d=D(a,"GEOPIXELSCALE");n=D(a,"GEOTRANSMATRIX");var w=a.has("GEOKEYDIRECTORY")?a.get("GEOKEYDIRECTORY").data:null;a=!1;if(w){a=2===y(w,"GTRasterTypeGeoKey");var q=y(w,"GTModelTypeGeoKey");2===q?(w=y(w,"GeographicTypeGeoKey"),1024<=w&&32766>=w&&(p={wkid:w})):1===q&&(w=y(w,"ProjectedCSTypeGeoKey"),1024<=w&&32766>=w&&(p={wkid:w}))}let v;d&&g&&6<=g.length?(v=[d[0],0,g[3]-g[0]*d[0],0,-Math.abs(d[1]),g[4]-
g[1]*d[1]],a&&(v[2]-=.5*v[0]+.5*v[1],v[5]-=.5*v[3]+.5*v[4])):n&&16===n.length&&(v=a?[n[0],n[1],n[3]-.5*n[0],n[4],n[5],n[7]-.5*n[5]]:[n[0],n[1],n[3],n[4],n[5],n[7]]);if(v){var r=[{x:0,y:c},{x:0,y:0},{x:f,y:c},{x:f,y:0}];n=g=Number.POSITIVE_INFINITY;q=w=Number.NEGATIVE_INFINITY;for(let C=0;C<r.length;C++)a=fa(r[C],v),g=a.x>g?g:a.x,w=a.x<w?w:a.x,n=a.y>n?n:a.y,q=a.y<q?q:a.y;r={xmin:g,xmax:w,ymin:n,ymax:q,spatialReference:p}}p=b.filter(C=>1===y(C,"NEWSUBFILETYPE"));let F,E,B,A;0<p.length&&(F=Math.round(Math.log(f/
y(p[0],"IMAGEWIDTH"))/Math.LN2),E=Math.round(Math.log(f/y(p[p.length-1],"IMAGEWIDTH"))/Math.LN2),B=y(p[p.length-1],"TILEWIDTH"),A=y(p[p.length-1],"TILEHEIGHT"));B=0<E?B||e:null;A=0<E?A||m:null;let G;e&&(G=[{maxCol:Math.ceil(f/e)-1,maxRow:Math.ceil(c/m)-1,minRow:0,minCol:0}],p.forEach(C=>{G.push({maxCol:Math.ceil(y(C,"IMAGEWIDTH")/y(C,"TILEWIDTH"))-1,maxRow:Math.ceil(y(C,"IMAGELENGTH")/y(C,"TILELENGTH"))-1,minRow:0,minCol:0})}));p=y(b[0],"GDAL_METADATA");p=ha(p);z+=" "+Y({width:f,height:c,tileWidth:e,
tileHeight:m,planes:l,ifds:b});return{width:f,height:c,tileWidth:e,tileHeight:m,planes:l,isBSQ:t,pixelType:h,compression:k,noData:x,isSupported:u,message:z,extent:r,affine:d?null:v,firstPyramidLevel:F,maximumPyramidLevel:E,pyramidBlockWidth:B,pyramidBlockHeight:A,tileBoundary:G,metadata:p}}function Z(b){const {littleEndian:a,isBigTiff:e,firstIFD:m}=aa(b);var f=m;const c=[];do if(f=ba(b,a,f,0,J.TIFF_TAGS,e?8:4),f.success)c.push(f.ifd),f=f.nextIFD;else break;while(0<f);return{...X(c),littleEndian:a,
isBigTiff:e,ifds:c}}function Q(b,a,e){const m=b.getUint32(a,e);b=b.getUint32(a+4,e);return e?4294967296*b+m:4294967296*m+b}function M(b,a,e,m){return m?Q(b,a,e):b.getUint32(a,e)}function aa(b){var a=new DataView(b,0,16),e=a.getUint16(0,!1);b=null;if(18761===e)b=!0;else if(19789===e)b=!1;else throw"unexpected endianess byte";var m=a.getUint16(2,b);if(42!==m&&43!==m)throw"unexpected tiff identifier";e=4;if(m=43===m){const f=a.getUint16(e,b);e+=2;if(8!==f)throw"unsupported bigtiff version";if(0!==a.getUint16(e,
b))throw"unsupported bigtiff version";e+=2}a=M(a,e,b,m);return{littleEndian:b,isBigTiff:m,firstIFD:a}}function ba(b,a,e,m=0,f=J.TIFF_TAGS,c=4){e=P(b,a,e,m,f,c);let d;const l=e.ifd;l&&(J.ifdTags.forEach((g,h)=>{l.has(h)&&(d=l.get(h),d.data=P(b,a,d.valueOffset-m,m,g).ifd)}),l.has("GEOKEYDIRECTORY")&&(d=l.get("GEOKEYDIRECTORY"),(f=d.values)&&4<f.length&&(f=f[0]+"."+f[1]+"."+f[2],d.data=P(b,a,d.valueOffset+6-m,m,J.GEO_KEYS,2).ifd,d.data&&d.data.set("GEOTIFFVersion",{id:0,type:2,valueCount:1,valueOffset:null,
values:[f]}))),l.has("XMP")&&(d=l.get("XMP"),f=d.values,"number"===typeof f[0]&&7===d.type&&(d.values=[ea.bytesToUTF8(new Uint8Array(f))])));return e}function Y(b){const {width:a,height:e,tileHeight:m,tileWidth:f}=b,c=b.planes,d=f?f*m:a*e;b=D(b.ifds[0],"BITSPERSAMPLE")[0];let l="";d*c>2**30/(8<b?b/8:1)&&(l=f?"tiled tiff exceeding 1 gigabits per tile is not supported":"scanline tiff exceeding 1 gigabits is not supported");return l}const W=[0,1,1,2,4,8,1,1,2,4,8,4,8,-1,-1,-1,8,8,8],ca=function(b,a,
e,m,f){var c=T.isPlatformLittleEndian===a,d=y(e,"BITSPERSAMPLE"),l=y(e,"SAMPLEFORMAT")||1;d=U(l,d);l=y(e,"COMPRESSION")||1;e=L(d);if(1===l){var g=b.slice(m,m+f);var h=new Uint8Array(g)}else 8===l||32946===l?(h=new Uint8Array(b,m,f),h=new O.Zlib(h),b=h.getBytes(),g=new ArrayBuffer(b.length),h=new Uint8Array(g),h.set(b)):6===l?(h=new Uint8Array(b,m,f),g=new R.Jpg,g.parse(h),b=g.getData(g.width,g.height,!0),g=new ArrayBuffer(b.length),h=new Uint8Array(g),h.set(b)):5===l&&(h=S.decode(b,m,f,a),g=h.buffer);
if("u8"!==d&&"s8"!==d&&!c)switch(g=new ArrayBuffer(h.length),c=new Uint8Array(g),d){case "u16":case "s16":for(d=0;d<h.length;d+=2)c[d]=h[d+1],c[d+1]=h[d];break;case "u32":case "s32":case "f32":for(d=0;d<h.length;d+=4)c[d]=h[d+3],c[d+1]=h[d+2],c[d+2]=h[d+1],c[d+3]=h[d]}return new e(g)},ia=function(b,a,e){if(!(b&&0<b.length&&a&&e))return null;let m,f,c;const d=b[0].length,l=b.length,g=new Uint8Array(d);for(let t=0;t<l;t++)if(m=b[t],f=a[t],c=e[t],0===t)for(var h=0;h<d;h++)g[h]=m[h]<f||m[h]>c?0:1;else for(h=
0;h<d;h++)g[h]&&(g[h]=m[h]<f||m[h]>c?0:1);return g},ha=function(b){if(!b)return null;var a=b.match(/<Item(.*?)Item>/gi);if(!a||0===a.length)return null;b=new Map;var e;for(var m=0;m<a.length;m++){var f=a[m];var c=f.slice(6,f.indexOf("\x3e"));var d=f.indexOf("sample\x3d");-1<d&&(e=f.slice(d+8,f.indexOf('"',d+8)));d=f.indexOf("name\x3d");-1<d&&(c=f.slice(d+6,f.indexOf('"',d+6)));c&&(f=f.slice(f.indexOf("\x3e")+1,f.indexOf("\x3c/Item\x3e")).trim(),null!=e?b.has(c)?b.get(c)[e]=f:b.set(c,[f]):b.set(c,
f));e=null}a=b.get("STATISTICS_MINIMUM");c=b.get("STATISTICS_MAXIMUM");m=b.get("STATISTICS_MEAN");f=b.get("STATISTICS_STDDEV");e=null;if(a&&c)for(e=[],d=0;d<a.length;d++)e.push({min:parseFloat(a[d]),max:parseFloat(c[d]),avg:m&&parseFloat(m[d]),stddev:f&&parseFloat(f[d])});c=b.get("BandName");m=b.get("WavelengthMin");f=b.get("WavelengthMax");a=null;if(c)for(a=[],d=0;d<c.length;d++)a.push({BandName:c[d],WavelengthMin:m&&parseFloat(m[d]),WavelengthMax:f&&parseFloat(f[d])});c=b.get("DataType");return{statistics:e,
bandProperties:a,dataType:c,rawMetadata:b}};H.decode=function(b,a){a=a||Z(b);const {ifds:e,noData:m}=a;if(0===e.length)throw"no valid image file directory";var f=Y(a);if(f)throw f;var c=e[0];f=m?m[0]:null;if(a.tileWidth){var d=D(c,"TILEOFFSETS");if(void 0===d)c=null;else{var l=D(c,"TILEBYTECOUNTS"),g=a.tileWidth,h=a.tileHeight,{width:t,height:k,pixelType:x,isBSQ:n}=a,u=a.planes,z=t*k,p=D(c,"BITSPERSAMPLE")[0],w=L(x),q=[];for(var v=0;v<u;v++)q.push(new w(z));var r,F;z=Math.ceil(t/g);if(0===p%8)for(p=
0;p<d.length;p++){var E=Math.floor(p/z)*h;var B=p%z*g;v=E*t+B;w=ca(b,a.littleEndian,c,d[p],l[p]);var A=0;var G=v;B=Math.min(g,t-B);var C=Math.min(h,k-E);for(E=0;E<u;E++){var da=q[E];if(n)for(r=0;r<C;r++)for(G=v+r*t,A=g*h*E+r*g,F=0;F<B;F++,G++,A++)da[G]=w[A];else for(r=0;r<C;r++)for(G=v+r*t,A=r*g*u+E,F=0;F<B;F++,G++,A+=u)da[G]=w[A]}}c={width:t,height:k,pixelType:x,pixels:q}}}else if(d=a,G=T.isPlatformLittleEndian===d.littleEndian,A=D(c,"STRIPOFFSETS"),void 0===A)c=null;else{var {width:I,height:N,pixelType:K}=
d;a=d.planes;l=I*N;z=D(c,"BITSPERSAMPLE")[0];g=L(K);h=new g(l*a);p=D(c,"STRIPBYTECOUNTS");w=D(c,"ROWSPERSTRIP")[0];B=D(c,"COMPRESSION")?D(c,"COMPRESSION")[0]:1;r=w;if(0===z%8)for(c=0;c<A.length;c++){E=c*w*I*a;r=(c+1)*w>N?N-c*w:w;if("u8"===K||"s8"===K||G)8===B||32946===B?(q=new Uint8Array(b,A[c],p[c]),q=new O.Zlib(q),F=q.getBytes(),v=new ArrayBuffer(F.length),q=new Uint8Array(v),q.set(F),q.length!==r*I*a*z/8&&console.log("strip byte counts is different than expected")):6===B?(q=new Uint8Array(b,A[c],
p[c]),v=new R.Jpg,v.parse(q),r=v.getData(v.width,v.height,!0),v=new ArrayBuffer(r.length),q=new Uint8Array(v),q.set(r)):5===B?(q=S.decode(b,A[c],p[c],d.littleEndian),v=q.buffer):1===B&&(p[c]!==r*I*a*z/8&&console.log("strip byte counts is different than expected"),v=b.slice(A[c],A[c]+p[c]));else switch(6===B||8===B||32946===B?(q=new Uint8Array(b,A[c],p[c]),q=new O.Zlib(q),q=q.getBytes(),v=new ArrayBuffer(q.length),u=new Uint8Array(v),q.length!==r*I*a*z/8&&console.log("strip byte counts is different than expected")):
1===B&&(p[c]!==r*I*a*z/8&&console.log("strip byte counts is different than expected"),v=new ArrayBuffer(p[c]),q=new Uint8Array(b,A[c],p[c]),u=new Uint8Array(v)),K){case "u16":case "s16":for(r=0;r<q.length;r+=2)u[r]=q[r+1],u[r+1]=q[r];break;case "u32":case "s32":case "f32":for(r=0;r<q.length;r+=4)u[r]=q[r+3],u[r+1]=q[r+2],u[r+2]=q[r+1],u[r+3]=q[r]}r=new g(v);h.set(r,E)}q=[];if(1===a)q.push(h);else for(c=0;c<a;c++){u=new g(l);for(b=0;b<l;b++)u[b]=h[b*a+c];q.push(u)}c={width:I,height:N,pixelType:K,pixels:q}}if(null!==
f){c.mask=new Uint8Array(c.width*c.height);if(1E24<Math.abs(f))for(b=0;b<c.width*c.height;b++)c.mask[b]=1E-6>Math.abs((c.pixels[0][b]-f)/f)?0:1;else for(b=0;b<c.width*c.height;b++)c.mask[b]=c.pixels[0][b]===f?0:1;c.noDataValue=f}return c};H.decodeTileOrStrip=function(b,a){const {headerInfo:e,ifd:m}=a;var f=ca(b,e.littleEndian,m,a.offset||0,a.size||b.byteLength);const {pixelType:c,isBSQ:d,planes:l}=e;var g=L(c);b=f.length/l;const h=[];for(var t=0;t<l;t++){var k=new g(b);if(d)k=f.slice(b*t,b*(t+1));
else for(var x=0;x<b;x++)k[x]=f[x*l+t];h.push(k)}f=y(m,"TILEWIDTH");g=y(m,"TILELENGTH");k=e.noData?e.noData[0]:null;t=(x=e.metadata?e.metadata.statistics:null)?x.map(u=>u.min):null;x=x?x.map(u=>u.max):null;let n;if(null!=k)if(n=new Uint8Array(b),1E24<Math.abs(k))for(a=0;a<b;a++)n[a]=1E-6>Math.abs((h[0][a]-k)/k)?0:1;else for(a=0;a<b;a++)n[a]=h[0][a]===k?0:1;else t&&x&&a.applyMinMaxConstraint&&(n=ia(h,t,x));return{pixelType:c,width:f,height:g,pixels:h,mask:n,noDataValue:k}};H.getImageInfo=X;H.parseFieldValues=
V;H.parseHeader=Z;H.parseIFD=ba;H.parseSignature=aa;Object.defineProperty(H,"__esModule",{value:!0})});