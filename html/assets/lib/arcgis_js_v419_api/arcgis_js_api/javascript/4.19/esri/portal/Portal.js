// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../config ../core/maybe ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/Error ../core/urlUtils ../core/uuid ./support/resourceExtension ../core/promiseUtils ../core/JSONSupport ../geometry/Extent ../intl/locale ../kernel ../request ../intl ../core/Loadable ./PortalQueryParams ./PortalQueryResult ./PortalUser".split(" "),
function(p,D,c,b,B,G,Q,H,e,R,w,I,y,S,T,U,v,J,K,E,z,L,V,M,C,N,O){function q(r){return Object.freeze({__proto__:null,"default":r})}var m;let A;const F={PortalGroup:()=>new Promise(function(r,n){p(["./PortalGroup"],function(h){r(q(h))},n)}),PortalItem:()=>new Promise(function(r,n){p(["./PortalItem"],function(h){r(q(h))},n)}),PortalUser:()=>new Promise(function(r,n){p(["./PortalUser"],function(h){r(q(h))},n)})};b=m=function(r){function n(a){a=r.call(this,a)||this;a.access=null;a.allSSL=!1;a.authMode=
"auto";a.authorizedCrossOriginDomains=null;a.basemapGalleryGroupQuery=null;a.bingKey=null;a.canListApps=!1;a.canListData=!1;a.canListPreProvisionedItems=!1;a.canProvisionDirectPurchase=!1;a.canSearchPublic=!0;a.canShareBingPublic=!1;a.canSharePublic=!1;a.canSignInArcGIS=!1;a.canSignInIDP=!1;a.colorSetsGroupQuery=null;a.commentsEnabled=!1;a.created=null;a.culture=null;a.customBaseUrl=null;a.defaultBasemap=null;a.defaultExtent=null;a.defaultVectorBasemap=null;a.description=null;a.eueiEnabled=null;a.featuredGroups=
null;a.featuredItemsGroupQuery=null;a.galleryTemplatesGroupQuery=null;a.livingAtlasGroupQuery=null;a.hasCategorySchema=!1;a.helperServices=null;a.homePageFeaturedContent=null;a.homePageFeaturedContentCount=null;a.httpPort=null;a.httpsPort=null;a.id=null;a.ipCntryCode=null;a.isPortal=!1;a.isReadOnly=!1;a.layerTemplatesGroupQuery=null;a.maxTokenExpirationMinutes=null;a.modified=null;a.name=null;a.portalHostname=null;a.portalMode=null;a.portalProperties=null;a.region=null;a.rotatorPanels=null;a.showHomePageDescription=
!1;a.sourceJSON=null;a.supportsHostedServices=!1;a.symbolSetsGroupQuery=null;a.templatesGroupQuery=null;a.units=null;a.url=B.portalUrl;a.urlKey=null;a.user=null;a.useStandardizedQuery=!1;a.useVectorBasemaps=!1;a.vectorBasemapGalleryGroupQuery=null;return a}D._inheritsLoose(n,r);var h=n.prototype;h.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a};h.destroy=function(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=
null)};h.readAuthorizedCrossOriginDomains=function(a){if(a)for(const d of a)-1===B.request.trustedServers.indexOf(d)&&B.request.trustedServers.push(d);return a};h.readDefaultBasemap=function(a){return a?(a=A.fromJSON(a),a.portalItem={portal:this},a):null};h.readDefaultVectorBasemap=function(a){return a?(a=A.fromJSON(a),a.portalItem={portal:this},a):null};h.readUrlKey=function(a){return a?a.toLowerCase():a};h.readUser=function(a){let d=null;a&&(d=O.fromJSON(a),d.portal=this);return d};h.load=function(a){const d=
(new Promise(function(f,g){p(["../Basemap"],function(k){f(q(k))},g)})).then(({default:f})=>{v.throwIfAborted(a);A=f}).then(()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,a)).then(f=>{if(z.id){const g=z.id;this.credential=g.findCredential(this.restUrl);this.credential||this.authMode!==m.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=g.on("credential-create",()=>{g.findCredential(this.restUrl)&&this._signIn()}))}this.sourceJSON=f;this.read(f)});this.addResolvingPromise(d);
return Promise.resolve(this)};h.createClosestFacilityTask=async function(){await this.load();const a=this._getHelperServiceUrl("closestFacility");return new (await new Promise(function(d,f){p(["../tasks/ClosestFacilityTask"],function(g){d(q(g))},f)})).default(a)};h.createElevationLayers=async function(){await this.load();const a=this._getHelperService("defaultElevationLayers"),d=(await new Promise(function(f,g){p(["../layers/ElevationLayer"],function(k){f(q(k))},g)})).default;return a?a.map(f=>new d({id:f.id,
url:f.url})):[]};h.createGeometryService=async function(){await this.load();const a=this._getHelperServiceUrl("geometry");return new (await new Promise(function(d,f){p(["../tasks/GeometryService"],function(g){d(q(g))},f)})).default({url:a})};h.createPrintTask=async function(){await this.load();const a=this._getHelperServiceUrl("printTask");return new (await new Promise(function(d,f){p(["../tasks/PrintTask"],function(g){d(q(g))},f)})).default(a)};h.createRouteTask=async function(){await this.load();
const a=this._getHelperServiceUrl("route");return new (await new Promise(function(d,f){p(["../tasks/RouteTask"],function(g){d(q(g))},f)})).default(a)};h.createServiceAreaTask=async function(){await this.load();const a=this._getHelperServiceUrl("serviceArea");return new (await new Promise(function(d,f){p(["../tasks/ServiceAreaTask"],function(g){d(q(g))},f)})).default(a)};h.fetchBasemaps=function(a,d){const f=new C;f.query=a||(this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery);
f.disableExtraQuery=!0;return this.queryGroups(f,d).then(g=>{f.num=100;f.query='type:"Web Map" -type:"Web Application"';return g.total?(g=g.results[0],f.sortField=g.sortField||"name",f.sortOrder=g.sortOrder||"desc",g.queryItems(f,d)):null}).then(g=>g&&g.total?g.results.filter(k=>"Web Map"===k.type).map(k=>new A({portalItem:k})):[])};h.fetchCategorySchema=function(a){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",a).then(d=>d.categorySchema):v.isAborted(a)?
Promise.reject(v.createAbortError()):Promise.resolve([])};h.fetchFeaturedGroups=function(a){const d=this.featuredGroups,f=new C;f.num=100;f.sortField="title";if(d&&d.length){const g=[];for(const k of d)g.push(`(title:"${k.title}" AND owner:${k.owner})`);f.query=g.join(" OR ");return this.queryGroups(f,a).then(k=>k.results)}return v.isAborted(a)?Promise.reject(v.createAbortError()):Promise.resolve([])};h.fetchRegions=function(a){const d=this.user&&this.user.culture||this.culture||E.getLocale();return this._request(this.restUrl+
"/portals/regions",{...a,query:{culture:d}})};n.getDefault=function(){if(!m._default||m._default.destroyed)m._default=new m;return m._default};h.queryGroups=function(a,d){return this._queryPortal("/community/groups",a,"PortalGroup",d)};h.queryItems=function(a,d){return this._queryPortal("/search",a,"PortalItem",d)};h.queryUsers=function(a,d){a.sortField||(a.sortField="username");return this._queryPortal("/community/users",a,"PortalUser",d)};h.toJSON=function(){throw new y("internal:not-yet-implemented",
"Portal.toJSON is not yet implemented");};n.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");return new m({sourceJSON:a})};h._getHelperService=function(a){const d=this.helperServices&&this.helperServices[a];if(!d)throw new y("portal:service-not-found",`The \`helperServices\` do not include an entry named "${a}"`);return d};h._getHelperServiceUrl=function(a){const d=this._getHelperService(a);if(!d.url)throw new y("portal:service-url-not-found",
`The \`helperServices\` entry "${a}" does not include a \`url\` value`);return d.url};h._fetchSelf=function(a=this.authMode,d=!1,f){const g=this.restUrl+"/portals/self";a={authMode:a,query:{culture:E.getLocale().toLowerCase()},...f};"auto"===a.authMode&&(a.authMode="no-prompt");d&&(a.query.default=!0);return this._request(g,a)};h._queryPortal=function(a,d,f,g){const k=H.ensureType(C,d),l=x=>this._request(this.restUrl+a,{...k.toRequestOptions(this),...g}).then(t=>{const u=k.clone();u.start=t.nextStart;
return new N({nextQueryParams:u,queryParams:k,total:t.total,results:m._resultsToTypedArray(x,{portal:this},t,g)})}).then(t=>Promise.all(t.results.map(u=>"function"===typeof u.when?u.when():t)).then(()=>t,u=>{v.throwIfAbortError(u);return t}));return f&&F[f]?F[f]().then(({default:x})=>{v.throwIfAborted(g);return l(x)}):l()};h._signIn=function(){if(this.authMode===m.AUTH_MODE_ANONYMOUS)return Promise.reject(new y("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`));if("failed"===
this.loadStatus)return Promise.reject(this.loadError);const a=d=>Promise.resolve().then(()=>{if("not-loaded"===this.loadStatus)return d||(this.authMode="immediate"),this.load().then(()=>null);if("loading"===this.loadStatus)return this.load().then(()=>{if(this.credential)return null;this.credential=d;return this._fetchSelf("immediate")});if(this.user&&this.credential===d)return null;this.credential=d;return this._fetchSelf("immediate")}).then(f=>{f&&(this.sourceJSON=f,this.read(f))});return z.id?z.id.getCredential(this.restUrl).then(d=>
a(d)):a(this.credential)};h._normalizeSSL=function(a){return a.replace(/^http:/i,"https:").replace(":7080",":7443")};h._normalizeUrl=function(a){const d=this.credential&&this.credential.token;return this._normalizeSSL(d?a+(-1<a.indexOf("?")?"\x26":"?")+"token\x3d"+d:a)};h._requestToTypedArray=function(a,d,f){return this._request(a,d).then(g=>{const k=m._resultsToTypedArray(f,{portal:this},g);return Promise.all(k.map(l=>"function"===typeof l.when?l.when():g)).then(()=>k,()=>k)})};h._request=function(a,
d={}){const f={f:"json",...d.query},{authMode:g=this.authMode===m.AUTH_MODE_ANONYMOUS?"anonymous":"auto",body:k=null,cacheBust:l=!1,method:x="auto",responseType:t="json",signal:u}=d;d={authMode:g,body:k,cacheBust:l,method:x,query:f,responseType:t,timeout:0,signal:u};return L(this._normalizeSSL(a),d).then(P=>P.data)};n._resultsToTypedArray=function(a,d,f,g){if(f){const k=G.isSome(g)?g.signal:null;f=f.listings||f.notifications||f.userInvitations||f.tags||f.items||f.groups||f.comments||f.provisions||
f.results||f.relatedItems||f;if(a||d)f=f.map(l=>{l=Object.assign(a?a.fromJSON(l):l,d);"function"===typeof l.load&&l.load(k);return l})}else f=[];return f};D._createClass(n,[{key:"extraQuery",get:function(){const a=!(this.user&&this.user.orgId)||this.canSearchPublic;return this.id&&!a?` AND orgid:${this.id}`:null}},{key:"isOrganization",get:function(){return!!this.access}},{key:"restUrl",get:function(){let a=this.url;if(a){const d=a.indexOf("/sharing");a=0<d?a.substring(0,d):this.url.replace(/\/+$/,
"");a+="/sharing/rest"}return a}},{key:"thumbnailUrl",get:function(){const a=this.restUrl,d=this.thumbnail;return a&&d?this._normalizeSSL(a+"/portals/self/resources/"+d):null}}]);return n}(J.JSONSupportMixin(M));b.AUTH_MODE_ANONYMOUS="anonymous";b.AUTH_MODE_AUTO="auto";b.AUTH_MODE_IMMEDIATE="immediate";c.__decorate([e.property()],b.prototype,"access",void 0);c.__decorate([e.property()],b.prototype,"allSSL",void 0);c.__decorate([e.property()],b.prototype,"authMode",void 0);c.__decorate([e.property()],
b.prototype,"authorizedCrossOriginDomains",void 0);c.__decorate([w.reader("authorizedCrossOriginDomains")],b.prototype,"readAuthorizedCrossOriginDomains",null);c.__decorate([e.property()],b.prototype,"basemapGalleryGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"bingKey",void 0);c.__decorate([e.property()],b.prototype,"canListApps",void 0);c.__decorate([e.property()],b.prototype,"canListData",void 0);c.__decorate([e.property()],b.prototype,"canListPreProvisionedItems",void 0);c.__decorate([e.property()],
b.prototype,"canProvisionDirectPurchase",void 0);c.__decorate([e.property()],b.prototype,"canSearchPublic",void 0);c.__decorate([e.property()],b.prototype,"canShareBingPublic",void 0);c.__decorate([e.property()],b.prototype,"canSharePublic",void 0);c.__decorate([e.property()],b.prototype,"canSignInArcGIS",void 0);c.__decorate([e.property()],b.prototype,"canSignInIDP",void 0);c.__decorate([e.property()],b.prototype,"colorSetsGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"commentsEnabled",
void 0);c.__decorate([e.property({type:Date})],b.prototype,"created",void 0);c.__decorate([e.property()],b.prototype,"credential",void 0);c.__decorate([e.property()],b.prototype,"culture",void 0);c.__decorate([e.property()],b.prototype,"currentVersion",void 0);c.__decorate([e.property()],b.prototype,"customBaseUrl",void 0);c.__decorate([e.property()],b.prototype,"defaultBasemap",void 0);c.__decorate([w.reader("defaultBasemap")],b.prototype,"readDefaultBasemap",null);c.__decorate([e.property({type:K})],
b.prototype,"defaultExtent",void 0);c.__decorate([e.property()],b.prototype,"defaultVectorBasemap",void 0);c.__decorate([w.reader("defaultVectorBasemap")],b.prototype,"readDefaultVectorBasemap",null);c.__decorate([e.property()],b.prototype,"description",void 0);c.__decorate([e.property()],b.prototype,"eueiEnabled",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"extraQuery",null);c.__decorate([e.property()],b.prototype,"featuredGroups",void 0);c.__decorate([e.property()],b.prototype,
"featuredItemsGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"galleryTemplatesGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"livingAtlasGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"hasCategorySchema",void 0);c.__decorate([e.property()],b.prototype,"helpBase",void 0);c.__decorate([e.property()],b.prototype,"helperServices",void 0);c.__decorate([e.property()],b.prototype,"helpMap",void 0);c.__decorate([e.property()],b.prototype,"homePageFeaturedContent",void 0);
c.__decorate([e.property()],b.prototype,"homePageFeaturedContentCount",void 0);c.__decorate([e.property()],b.prototype,"httpPort",void 0);c.__decorate([e.property()],b.prototype,"httpsPort",void 0);c.__decorate([e.property()],b.prototype,"id",void 0);c.__decorate([e.property()],b.prototype,"ipCntryCode",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"isOrganization",null);c.__decorate([e.property()],b.prototype,"isPortal",void 0);c.__decorate([e.property()],b.prototype,"isReadOnly",
void 0);c.__decorate([e.property()],b.prototype,"layerTemplatesGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"maxTokenExpirationMinutes",void 0);c.__decorate([e.property({type:Date})],b.prototype,"modified",void 0);c.__decorate([e.property()],b.prototype,"name",void 0);c.__decorate([e.property()],b.prototype,"portalHostname",void 0);c.__decorate([e.property()],b.prototype,"portalMode",void 0);c.__decorate([e.property()],b.prototype,"portalProperties",void 0);c.__decorate([e.property()],
b.prototype,"region",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"restUrl",null);c.__decorate([e.property()],b.prototype,"rotatorPanels",void 0);c.__decorate([e.property()],b.prototype,"showHomePageDescription",void 0);c.__decorate([e.property()],b.prototype,"sourceJSON",void 0);c.__decorate([e.property()],b.prototype,"staticImagesUrl",void 0);c.__decorate([e.property()],b.prototype,"stylesGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"supportsHostedServices",void 0);
c.__decorate([e.property()],b.prototype,"symbolSetsGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"templatesGroupQuery",void 0);c.__decorate([e.property()],b.prototype,"thumbnail",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"thumbnailUrl",null);c.__decorate([e.property()],b.prototype,"units",void 0);c.__decorate([e.property()],b.prototype,"url",void 0);c.__decorate([e.property()],b.prototype,"urlKey",void 0);c.__decorate([w.reader("urlKey")],b.prototype,"readUrlKey",
null);c.__decorate([e.property()],b.prototype,"user",void 0);c.__decorate([w.reader("user")],b.prototype,"readUser",null);c.__decorate([e.property()],b.prototype,"useStandardizedQuery",void 0);c.__decorate([e.property()],b.prototype,"useVectorBasemaps",void 0);c.__decorate([e.property()],b.prototype,"vectorBasemapGalleryGroupQuery",void 0);return b=m=c.__decorate([I.subclass("esri.portal.Portal")],b)});