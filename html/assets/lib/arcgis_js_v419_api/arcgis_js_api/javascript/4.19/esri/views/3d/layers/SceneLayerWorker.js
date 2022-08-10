// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
require({cache:{"esri/libs/i3s/I3SModule":function(){define(["require","exports","../../assets"],function(q,t,G){function F(u){return G.getAssetUrl(`esri/libs/i3s/${u}`)}let z;t.get=function(){z||(z=(new Promise(u=>(new Promise(function(B,h){q(["../../chunks/i3s"],B,h)})).then(function(B){return B.i3s}).then(({default:B})=>{const h=B({locateFile:F,onRuntimeInitialized:()=>u(h)});delete h.then}))).catch(u=>Promise.reject(u)));return z};Object.defineProperty(t,"__esModule",{value:!0})})},"esri/assets":function(){define("exports ./config ./core/Logger ./core/Error ./core/urlUtils ./request".split(" "),
function(q,t,G,F,z,u){function B(w){if(!t.assetsPath)throw h.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new F("assets:path-not-set","config.assetsPath is not set");return z.join(t.assetsPath,w)}const h=G.getLogger("esri.assets");q.fetchAsset=function(w,x){return u(B(w),x)};q.getAssetUrl=B;Object.defineProperty(q,"__esModule",{value:!0})})},"esri/request":function(){define("require ./core/global ./core/has ./core/lang ./config ./core/maybe ./core/Error ./core/urlUtils ./core/promiseUtils ./kernel ./support/apiKeyUtils ./support/requestUtils".split(" "),
function(q,t,G,F,z,u,B,h,w,x,K,m){async function C(a,b){var c=h.isDataProtocol(a);const e=h.isBlobProtocol(a);e||c||(a=h.normalize(a));const f={url:a,requestOptions:{...u.unwrap(b)}};let g=h.getInterceptor(a);if(g){a=await U(g,f);if(null!=a)return{data:a,getHeader:J,requestOptions:f.requestOptions,url:f.url};g.after||g.error||(g=null)}a=f.url;b=f.requestOptions;if("image"===b.responseType){if(G("host-webworker")||G("host-node"))throw k("request:invalid-parameters",Error("responseType 'image' is not supported in Web Workers or Node environment"),
f);}else if(c)throw k("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+b.responseType),f);if("head"===b.method){if(b.body)throw k("request:invalid-parameters",Error("body parameter cannot be set when method is 'head'"),f);if(c||e)throw k("request:invalid-parameters",Error("data and blob URLs are not supported for method 'head'"),f);}await D();if(l)return l.execute(a,b);const E=w.createAbortController();w.onAbort(b,()=>E.abort());c=await Y({controller:E,credential:null,
credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:g,params:f,redoRequest:!1,useIdentity:r.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1});g&&g.after&&g.after(c);return c}function d(a){h.isBlobProtocol(a)||h.isDataProtocol(a)||(a=h.getOrigin(a))&&-1===C._corsServers.indexOf(a)&&C._corsServers.push(a)}function n(a){a=h.getOrigin(a);return!a||a.endsWith(".arcgis.com")||-1!==C._corsServers.indexOf(a)||h.isTrustedServer(a)}function k(a,b,c,e){let f="Error";const g={url:c.url,requestOptions:c.requestOptions,
getHeader:J,ssl:!1};if(b instanceof B)return b.details?(b.details=F.clone(b.details),b.details.url=c.url,b.details.requestOptions=c.requestOptions):b.details=g,b;if(b){c=e&&(p=>e.headers.get(p));const E=e&&e.status,v=b.message;v&&(f=v);c&&(g.getHeader=c);g.httpStatus=(null!=b.httpCode?b.httpCode:b.code)||E||0;g.subCode=b.subcode;g.messageCode=b.messageCode;g.messages="string"===typeof b.details?[b.details]:b.details}return w.isAbortError(b)?w.createAbortError():new B(a,f,g)}async function D(){G("host-webworker")?
l||(l=await new Promise(function(a,b){q(["./core/workers/request"],a,b)})):C._abortableFetch||(C._abortableFetch=t.fetch.bind(t))}async function A(){x.id||await new Promise(function(a,b){q(["./identity/IdentityManager"],function(c){a(Object.freeze({__proto__:null,"default":c}))},b)})}async function S(a){const b=a.params.url,c=a.params.requestOptions,e=a.controller.signal,f=c.body;let g=null,E=null,v=null;H&&"HTMLFormElement"in t&&(f instanceof FormData?g=f:f instanceof HTMLFormElement&&(E=f,g=new FormData(E)));
"string"===typeof f&&(v=f);a.fetchOptions={cache:c.cacheBust&&!C._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:c.headers||{},method:"head"===c.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:e};if(g||v)a.fetchOptions.body=g||v;"anonymous"===c.authMode&&(a.useIdentity=!1);a.hasToken=!!(/token=/i.test(b)||c.query&&c.query.token||g&&g.get&&g.get("token")||E&&E.elements.token);!a.hasToken&&z.apiKey&&K.supportsApiKey(b)&&(c.query||(c.query={}),c.query.token=z.apiKey,
a.hasToken=!0);if(a.useIdentity&&!a.hasToken&&!a.credentialToken&&!Q(b)&&!w.isAborted(e)){let p;"immediate"===c.authMode?(await A(),p=await x.id.getCredential(b,{signal:e}),a.credential=p):"no-prompt"===c.authMode?(await A(),p=await x.id.getCredential(b,{prompt:!1,signal:e}).catch(()=>{}),a.credential=p):x.id&&(p=x.id.findCredential(b));p&&(a.credentialToken=p.token,a.useSSL=!!p.ssl)}}function Q(a){return M.some(b=>b.test(a))}async function Z(a){let b=a.params.url;const c=a.params.requestOptions,
e=a.fetchOptions,f=h.isBlobProtocol(b)||h.isDataProtocol(b),g=c.responseType||"json",E=f?0:null!=c.timeout?c.timeout:r.timeout;var v=!1;if(!f){a.useSSL&&(b=h.toHTTPS(b));c.cacheBust&&"default"===e.cache&&(b=h.addQueryParameter(b,"request.preventCache",Date.now()));var p={...c.query};a.credentialToken&&(p.token=a.credentialToken);v=h.objectToQuery(p);G("esri-url-encodes-apostrophe")&&(v=v.replace(/'/g,"%27"));const N=b.length+1+v.length;v="delete"===c.method||"post"===c.method||"put"===c.method||!!c.body||
N>r.maxUrlLength;const R=c.useProxy||!!h.getProxyRule(b);if(R){const aa=h.getProxyUrl(b);var T=aa.path;!v&&T.length+1+N>r.maxUrlLength&&(v=!0);aa.query&&(p={...aa.query,...p})}if("HEAD"===e.method&&(v||R)){if(v){if(N>r.maxUrlLength)throw k("request:invalid-parameters",Error("URL exceeds maximum length"),a.params);throw k("request:invalid-parameters",Error("cannot use POST request when method is 'head'"),a.params);}if(R)throw k("request:invalid-parameters",Error("cannot use proxy when method is 'head'"),
a.params);}v?(e.method="delete"===c.method?"DELETE":"put"===c.method?"PUT":"POST",c.body?b=h.addQueryParameters(b,p):(e.body=h.objectToQuery(p),e.headers["Content-Type"]="application/x-www-form-urlencoded")):b=h.addQueryParameters(b,p);R&&(a.useProxy=!0,b=`${T}?${b}`);p.token&&H&&e.body instanceof FormData&&(T=e.body,T.set?T.set("token",p.token):T.append("token",p.token));c.hasOwnProperty("withCredentials")?a.withCredentials=c.withCredentials:h.hasSameOrigin(b,h.appUrl)||(h.isTrustedServer(b)?a.withCredentials=
!0:x.id&&(p=x.id.findServerInfo(b))&&p.webTierAuth&&(a.withCredentials=!0));a.withCredentials&&(e.credentials="include")}p=0;let ba=!1;0<E&&(p=setTimeout(()=>{ba=!0;a.controller.abort()},E));let P,y;try{if("image"!==c.responseType||"default"!==e.cache||"GET"!==e.method||v||V(c.headers)||!f&&!a.useProxy&&r.proxyUrl&&!n(b)){if(P=await C._abortableFetch(b,e),a.useProxy||d(b),P.ok&&"HEAD"!==e.method){switch(g){case "array-buffer":y=await P.arrayBuffer();break;case "blob":case "image":y=await P.blob();
break;default:y=await P.text()}p&&(clearTimeout(p),p=0);if("json"===g||"xml"===g||"document"===g)if(y)switch(g){case "json":y=JSON.parse(y);break;case "xml":y=W(y,"application/xml");break;case "document":y=W(y,"text/html")}else y=null;if(y){if("array-buffer"===g||"blob"===g){const N=P.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(N)&&750>=y["blob"===g?"size":"byteLength"])try{const R=await (new Response(y)).json();R.error&&(y=R)}catch{}}"image"===g&&y instanceof Blob&&(y=await L(URL.createObjectURL(y),
a,!0))}}}else y=await L(b,a)}catch(N){if("AbortError"===N.name){if(ba)throw Error("Timeout exceeded");throw w.createAbortError("Request canceled");}if(!P&&N instanceof TypeError&&r.proxyUrl&&!c.body&&"delete"!==c.method&&"head"!==c.method&&"post"!==c.method&&"put"!==c.method&&!a.useProxy)a.redoRequest=!0,h.addProxyRule({proxyUrl:r.proxyUrl,urlPrefix:h.removeFile(h.urlToObject(b).path)});else throw N;}finally{p&&clearTimeout(p)}return[P,y]}async function U(a,b){if(null!=a.responseData)return a.responseData;
a.headers&&(b.requestOptions.headers={...b.requestOptions.headers,...a.headers});a.query&&(b.requestOptions.query={...b.requestOptions.query,...a.query});if(a.before){let c,e;try{e=await a.before(b)}catch(f){c=k("request:interceptor",f,b)}if(e instanceof Error||e instanceof B)c=k("request:interceptor",e,b);if(c)throw a.error&&a.error(c),c;return e}}function V(a){if(a)for(const b of Object.getOwnPropertyNames(a))if(a[b])return!0;return!1}function W(a,b){let c;try{c=(new DOMParser).parseFromString(a,
b)}catch{}if(!c||c.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return c}async function Y(a){await S(a);let b;try{do[b,c]=await Z(a);while(!await O(a,b,c))}catch(g){var c=k("request:server",g,a.params,b);c.details.ssl=a.useSSL;a.interceptor&&a.interceptor.error&&a.interceptor.error(c);throw c;}var e=a.params.url;/\/sharing\/rest\/(accounts|portals)\/self/i.test(e)&&!a.hasToken&&!a.credentialToken&&c&&c.user&&c.user.username&&!h.isTrustedServer(e)&&(e=h.getOrigin(e,
!0))&&r.trustedServers.push(e);if((e=a.credential)&&x.id){var f=x.id.findServerInfo(e.server);if(f=f&&f.owningSystemUrl)f=f.replace(/\/?$/,"/sharing"),(e=x.id.findCredential(f,e.userId))&&-1===x.id._getIdenticalSvcIdx(f,e)&&e.resources.unshift(f)}return{data:c,getHeader:b?g=>b.headers.get(g):J,requestOptions:a.params.requestOptions,ssl:a.useSSL,url:a.params.url}}async function O(a,b,c){if(a.redoRequest)return a.redoRequest=!1;if(!b)return!0;if(!b.ok)throw Error(`Unable to load ${b.url} status: ${b.status}`);
let e;c&&c.error&&(e=Object.assign(Error(),c.error));let f,g,E;e&&(f=Number(e.code),g=e.hasOwnProperty("subcode")?Number(e.subcode):null,E=(E=e.messageCode)&&E.toUpperCase());b=a.params.requestOptions.authMode;if(403===f&&(4===g||e.message&&-1<e.message.toLowerCase().indexOf("ssl")&&-1===e.message.toLowerCase().indexOf("permission"))){if(!a.useSSL)return a.useSSL=!0,!1}else if(!a.hasToken&&a.useIdentity&&("no-prompt"!==b||498===f)&&-1!==I.indexOf(f)&&!Q(a.params.url)&&(403!==f||-1===X.indexOf(E)&&
(null==g||2===g&&a.credentialToken))){await A();try{const v=await x.id.getCredential(a.params.url,{error:k("request:server",e,a.params),prompt:"no-prompt"!==b,signal:a.controller.signal,token:a.credentialToken});a.credential=v;a.credentialToken=v.token;a.useSSL=a.useSSL||v.ssl;return!1}catch(v){if("no-prompt"===b)return a.credential=null,a.credentialToken=null,!1;e=v}}if(e)throw e;return!0}function L(a,b,c=!1){const e=b.controller.signal,f=new Image;f.crossOrigin=b.withCredentials?"use-credentials":
"anonymous";f.alt="";f.src=a;return m.loadImageAsync(f,a,c,e)}let l;const r=z.request,H="FormData"in t,I=[499,498,403,401],X=["COM_0056","COM_0057","SB_0008"],M=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],J=()=>null;C._abortableFetch=null;C._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];return C})},"esri/support/apiKeyUtils":function(){define(["exports","../core/urlUtils"],function(q,t){const G=["elevation3d.arcgis.com","js.arcgis.com",
"jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];q.isApiKey=function(F){return F&&4<F.length&&F.startsWith("AAPK")};q.supportsApiKey=function(F){const z=t.getOrigin(F,!0);return z&&z.endsWith(".arcgis.com")&&!G.includes(z)&&!F.endsWith("/sharing/rest/generateToken")};Object.defineProperty(q,"__esModule",{value:!0})})},"esri/support/requestUtils":function(){define(["exports","../core/has","../core/maybe","../core/promiseUtils"],function(q,t,G,F){function z(){try{return new DOMException("Aborted",
"AbortError")}catch{const u=Error();u.name="AbortError";return u}}q.loadImageAsync=function(u,B,h=!1,w){return new Promise((x,K)=>{if(F.isAborted(w))K(z());else{var m=()=>{n();K(Error(`Unable to load ${B}`))},C=()=>{const k=u;n();x(k)},d=()=>{if(u){var k=u;n();k.src="";K(z())}},n=()=>{t("esri-image-decode")||(u.removeEventListener("error",m),u.removeEventListener("load",C));u=C=m=null;G.isSome(w)&&w.removeEventListener("abort",d);d=null;h&&URL.revokeObjectURL(B)};G.isSome(w)&&w.addEventListener("abort",
d);t("esri-image-decode")?u.decode().then(C,m):(u.addEventListener("error",m),u.addEventListener("load",C))}})};Object.defineProperty(q,"__esModule",{value:!0})})},"*noref":1}});
define(["exports","../../../core/typedArrayUtil","../../../core/maybe","../../../libs/i3s/I3SModule"],function(q,t,G,F){function z(d){const n=d.modifications,k=m._malloc(8*n.length),D=new Float64Array(m.HEAPU8.buffer,k,n.length);for(let A=0;A<n.length;++A)D[A]=n[A];m.setModifications(d.context,k,n.length,d.isGeodetic);m._free(k)}function u(d,n){if(!m)return null;const {context:k,localOrigin:D,globalTrafo:A,mbs:S,obb:Q,elevationOffset:Z,geometryBuffer:U,geometryDescriptor:V,indexToVertexProjector:W,
vertexToRenderProjector:Y}=d;var O=m._malloc(U.byteLength),L=m._malloc(33*Float64Array.BYTES_PER_ELEMENT),l=new Uint8Array(m.HEAPU8.buffer,O,U.byteLength);l.set(new Uint8Array(U));var r=new Float64Array(m.HEAPU8.buffer,L,33);w(r,D);var H=r.byteOffset+3*r.BYTES_PER_ELEMENT,I=new Float64Array(r.buffer,H);w(I,A);H+=16*r.BYTES_PER_ELEMENT;I=new Float64Array(r.buffer,H);w(I,S);H+=4*r.BYTES_PER_ELEMENT;G.isSome(Q)&&(I=new Float64Array(r.buffer,H),w(I,Q.center),H+=3*r.BYTES_PER_ELEMENT,I=new Float64Array(r.buffer,
H),w(I,Q.halfSize),H+=3*r.BYTES_PER_ELEMENT,I=new Float64Array(r.buffer,H),w(I,Q.quaternion));r={isDraco:!1,isLegacy:!1,color:d.layouts.some(M=>M.some(J=>"color"===J.name)),normal:d.needNormals&&d.layouts.some(M=>M.some(J=>"normalCompressed"===J.name)),uv0:d.layouts.some(M=>M.some(J=>"uv0"===J.name)),uvRegion:d.layouts.some(M=>M.some(J=>"uvRegion"===J.name)),featureIndex:V.featureIndex};l=m.process(k,!!d.obb,O,l.byteLength,V,r,L,Z,W,Y,d.normalReferenceFrame);m._free(L);m._free(O);if(0<l.error.length)throw`i3s.wasm: ${l.error}`;
if(l.discarded)return null;O=0<l.componentOffsets.length?t.slice(l.componentOffsets):null;L=0<l.featureIds.length?t.slice(l.featureIds):null;r=t.slice(l.interleavedVertedData).buffer;H=1===l.indicesType?t.slice(new Uint16Array(l.indices.buffer,l.indices.byteOffset,l.indices.byteLength/2)):t.slice(new Uint32Array(l.indices.buffer,l.indices.byteOffset,l.indices.byteLength/4));I=t.slice(l.positions);const X=1===l.positionIndicesType?t.slice(new Uint16Array(l.positionIndices.buffer,l.positionIndices.byteOffset,
l.positionIndices.byteLength/2)):t.slice(new Uint32Array(l.positionIndices.buffer,l.positionIndices.byteOffset,l.positionIndices.byteLength/4));d={layout:d.layouts[0],interleavedVertexData:r,indices:H,hasColors:l.hasColors,hasModifications:l.hasModifications,positionData:{data:I,indices:X}};L&&n.push(L.buffer);O&&n.push(O.buffer);n.push(r);n.push(H.buffer);n.push(I.buffer);n.push(X.buffer);return{componentOffsets:O,featureIds:L,transformedGeometry:d,obb:l.obb}}function B(d){const {context:n,buffer:k}=
d;d=m._malloc(k.byteLength);const D=k.byteLength/Float64Array.BYTES_PER_ELEMENT,A=new Float64Array(m.HEAPU8.buffer,d,D),S=new Float64Array(k);A.set(S);m.filterOBBs(n,d,D);S.set(A);m._free(d)}function h(d){m&&m.destroy(d)}function w(d,n){for(let k=0;k<n.length;++k)d[k]=n[k]}function x(){if(m)return Promise.resolve();K||(K=F.get().then(d=>{m=d;K=null}));return K}let K,m;const C={transform:u,destroy:h};q.destroyContext=function(d){h(d)};q.dracoDecompressPointCloudData=async function(d){var n;await x();
const k=[d.geometryBuffer];var {geometryBuffer:D}=d,A=D.byteLength;d=m._malloc(A);A=new Uint8Array(m.HEAPU8.buffer,d,A);A.set(new Uint8Array(D));D=m.dracoDecompressPointCloudData(d,A.byteLength);m._free(d);if(0<D.error.length)throw`i3s.wasm: ${D.error}`;d=0<(null==(n=D.featureIds)?void 0:n.length)?t.slice(D.featureIds):null;n=t.slice(D.positions);d&&k.push(d.buffer);k.push(n.buffer);return{result:{positions:n,featureIds:d},transferList:k}};q.filterObbsForModifications=async function(d){await x();
B(d);d={buffer:d.buffer};return{result:d,transferList:[d.buffer]}};q.filterObbsForModificationsSync=B;q.initialize=x;q.interpretObbModificationResults=function(d){return 0===d?0:1===d?1:2===d?2:3};q.process=async function(d){await x();const n=[d.geometryBuffer];return{result:u(d,n),transferList:n}};q.setLegacySchema=async function(d){await x();m.setLegacySchema(d.context,d.jsonSchema)};q.setModifications=async function(d){await x();z(d)};q.setModificationsSync=z;q.test=C;Object.defineProperty(q,"__esModule",
{value:!0})});