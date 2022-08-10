// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Error ../../../geometry/support/spatialReferenceUtils ../../../geometry/support/webMercatorUtils ../../../geometry/Point ../../../geometry/Extent ../../../geometry ../../../core/unitUtils ../../../geometry/projection".split(" "),function(v,B,z,K,w,R,T,L,r){function M(a,b,c,f=null){if(a.spatialReference.equals(b))return a;const g=C(a.spatialReference,b);if(g&&!r.isLoaded())throw new B("rasterprojectionhelper-projectResolution","projection engine is not loaded");c=c.center;
a=new R({xmin:c.x-a.x/2,xmax:c.x+a.x/2,ymin:c.y-a.y/2,ymax:c.y+a.y/2,spatialReference:a.spatialReference});b=g?r.project(a,b,f):K.project(a,b);return null==b?null:{x:b.xmax-b.xmin,y:b.ymax-b.ymin}}function N(a,b=.01){return L.getMetersPerUnitForSR(a)?b/L.getMetersPerUnitForSR(a):0}function E(a,b,c=null,f=!0){const g=a.spatialReference;if(g.equals(b))return a;const n=C(g,b);if(n&&!r.isLoaded())throw new B("rasterprojectionhelper-projectResolution","projection engine is not loaded");if((c=n?r.project(a,
b,c):K.project(a,b))&&f&&b.isGeographic){var p,k;const [d,e]=g.isWebMercator?z.getInfo(g).origin:null!=(p=null==(k=z.getInfo(g))?void 0:k.valid)?p:[];(b=N(g))&&null!=d&&null!=e&&(Math.abs(a.x-d)<b&&5E-4>Math.abs(180-c.x)?c.x-=360:Math.abs(a.x-e)<b&&5E-4>Math.abs(180+c.x)&&(c.x+=360))}return c}function O(a,b,c=null,f=!0){var g,n,p,k;const d=a.spatialReference;if(d.equals(b))return a;var e=C(d,b);if(e&&!r.isLoaded())throw new B("rasterprojectionhelper-projectExtent","projection engine is not loaded");
e=e?r.project(a,b,c):K.project(a,b);let [l,t]=null!=(g=null==(n=z.getInfo(d))?void 0:n.origin)?g:[];e&&f&&d.isWebMercator&&b.isGeographic&&null!=l&&null!=t&&(.001>Math.abs(a.xmin-l)&&1E3<Math.abs(t-a.xmax)&&5E-4>Math.abs(180-e.xmax)&&(e.xmin=-180,f=[],f.push(new w(a.xmax,a.ymin,d)),f.push(new w(a.xmax,(a.ymin+a.ymax)/2,d)),f.push(new w(a.xmax,a.ymax,d)),f=f.map(q=>E(q,b,c)).filter(q=>!isNaN(null==q?void 0:q.x)).map(q=>q.x),e.xmax=Math.max.apply(null,f)),.001>Math.abs(a.xmax-t)&&1E3<Math.abs(l-a.xmin)&&
5E-4>Math.abs(180+e.xmin)&&(e.xmax=180,f=[],f.push(new w(a.xmin,a.ymin,d)),f.push(new w(a.xmin,(a.ymin+a.ymax)/2,d)),f.push(new w(a.xmin,a.ymax,d)),a=f.map(q=>E(q,b,c)).filter(q=>!isNaN(null==q?void 0:q.x)).map(q=>q.x),e.xmin=Math.min.apply(null,a)));[l,t]=b.isWebMercator?z.getInfo(b).origin:null!=(p=null==(k=z.getInfo(b))?void 0:k.valid)?p:[];(p=N(b))&&null!=l&&null!=t&&(Math.abs(e.xmin-l)<p&&(e.xmin=l),Math.abs(e.xmax-t)<p&&(e.xmax=t));return e}const C=function(a,b){const c=(a.isWGS84||a.isWebMercator)&&
(b.isWGS84||b.isWebMercator);return!(a.equals(b)||c)};v.computeProjectedScales=function(a,b,c=512,f=!0){const {extent:g,spatialReference:n,pixelSize:p}=a,k=M(new w({x:p.x,y:p.y,spatialReference:n}),b,g);if(null==k)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};var d=(k.x+k.y)/2,e=L.getMetersPerUnitForSR(b);d=d*e*96*39.37;var l=b.isGeographic?512/c*2.958287637958547E8:512/c*5.91657527591555E8;c=!1;const t=O(g,b);f&&(b.isGeographic||b.isWebMercator)&&(c=0>t.xmin*
t.xmax);b=d;if(c)b=l,a=1128.497176*e,e=M(new w({x:.29858214164761665,y:.29858214164761665,spatialReference:{wkid:3857}}),n,t),e.x*=b/a,e.y*=b/a;else{e={x:p.x,y:p.y};a=Math.ceil(Math.log(Math.min(a.width,a.height)/32)/Math.LN2);for(f=0;b<.5005*l&&f<a;)f++,b*=2,e.x*=2,e.y*=2;1.001>=Math.max(b,l)/Math.min(b,l)&&(b=l)}a=[b];l=[{x:e.x,y:e.y}];for(d=Math.min(70.5310735,d)/1.001;b>=d;)b/=2,e.x/=2,e.y/=2,a.push(b),l.push({x:e.x,y:e.y});return{projectedPixelSize:k,scales:a,srcResolutions:l,isCustomTilingScheme:!c}};
v.defaultGridSpacing=32;v.getDefaultDatumTransformationForDataset=function(a,b,c){if(!C(a.spatialReference,b))return null;if(!r.isLoaded())throw new B("rasterprojectionhelper-projectResolution","projection engine is not loaded");return c?r.getTransformation(b,a.spatialReference,a):r.getTransformation(a.spatialReference,b,a)};v.getProjectionOffsetGrid=function(a,b,c,f=null,g=null,n=!1,p=[32,32]){var k,d;if(C(a.spatialReference,b.spatialReference)&&!r.isLoaded())throw new B("rasterprojectionhelper-projectResolution",
"projection engine is not loaded");if(!(a&&b&&c))return null;const {xmin:e,ymin:l,xmax:t,ymax:q}=a;var u=a.spatialReference,F=b.spatialReference;const [P,S]=null!=(k=null==(d=z.getInfo(u))?void 0:d.valid)?k:[];var G=p[0]*c.x,x=p[1]*c.y;c=Math.ceil((t-e)/G-.1)+1;k=Math.ceil((q-l)/x-.1)+1;d=[];a=!1;for(var A=0;A<c;A++){var D=[];for(var m=0;m<k;m++){var h=new w({x:e+G*A,y:q-x*m,spatialReference:u});h=E(h,F,f);g&&(h=g.inverseTransform(h));D.push(h);0<A&&n&&h&&y[m]&&null!=P&&h.x<y[m].x&&(h.x+=S-P);h?(d.push((h.x-
b.xmin)/(b.xmax-b.xmin)),d.push((b.ymax-h.y)/(b.ymax-b.ymin))):(d.push(NaN),d.push(NaN),a=!0)}var y=D}b=[Math.abs((d[0]+d[4]+d[4*c]+d[4*c+4])/4-d[2*k+2]),Math.abs((d[1]+d[5]+d[4*k+1]+d[4*k+5])/4-d[2*k+3])];f=new Float32Array((c-1)*(k-1)*12);g=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]);n=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(y=0;y<c-1;y++){for(u=0;u<k-1;u++){m=y*k*2+2*u;x=d[m];F=d[m+1];var H=d[m+2],I=d[m+3];m+=2*k;A=d[m];G=d[m+1];D=d[m+2];m=d[m+3];h=0;let J=12*(u*(c-1)+y);for(let Q=0;3>Q;Q++)f[J++]=
g[h++]*x+g[h++]*H+g[h++]*D;h=0;for(H=0;3>H;H++)f[J++]=g[h++]*F+g[h++]*I+g[h++]*m;h=0;for(I=0;3>I;I++)f[J++]=n[h++]*x+n[h++]*A+n[h++]*D;h=0;for(x=0;3>x;x++)f[J++]=n[h++]*F+n[h++]*G+n[h++]*m}if(a)for(u=0;u<f.length;u++)isNaN(f[u])&&(f[u]=-1)}return{offsets:d,error:b,coefficients:f,spacing:p,size:[c-1,k-1]}};v.load=async function(){if(r.isLoaded()||!r.isSupported())return null;await r.load()};v.projectExtent=O;v.projectPoint=E;v.projectResolution=M;v.snapPyramid=function(a,b,c){var f=Math.log(a.x/b.pixelSize.x)/
Math.LN2;const g=Math.log(a.y/b.pixelSize.y)/Math.LN2;a=b.storageInfo.maximumPyramidLevel||0;c="down"===c?Math.floor(Math.min(f,g)):"up"===c?Math.ceil(Math.max(f,g)):Math.round((f+g)/2);f=!1;0>c?c=0:c>a&&(f=c>a+3,c=a);a=2**c;b=new w({x:a*b.nativePixelSize.x,y:a*b.nativePixelSize.y,spatialReference:b.spatialReference});return{pyramidLevel:c,pyramidResolution:b,excessiveReading:f}};Object.defineProperty(v,"__esModule",{value:!0})});