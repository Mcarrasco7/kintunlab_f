// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/Error ../core/urlUtils ../core/uuid ./support/resourceExtension ../core/JSONSupport ./PortalQueryParams".split(" "),function(n,d,b,u,q,e,v,r,m,w,x,y,t,k){b=function(p){function l(a){a=p.call(this,a)||this;a.access=null;a.created=null;a.description=null;a.id=null;
a.isInvitationOnly=!1;a.modified=null;a.owner=null;a.portal=null;a.snippet=null;a.sortField=null;a.sortOrder=null;a.tags=null;a.title=null;return a}n._inheritsLoose(l,p);var h=l.prototype;h.fetchCategorySchema=function(a){return this.portal._request(this.url+"/categorySchema",a).then(c=>{c=c.categorySchema||[];return c.some(g=>"contentCategorySetsGroupQuery.LivingAtlas"===g.source)?this._fetchCategorySchemaSet("LivingAtlas",a):c})};h.fetchMembers=function(a){return this.portal._request(this.url+"/users",
a)};h.getThumbnailUrl=function(a){let c=this.thumbnailUrl;c&&a&&(c+=`&w=${a}`);return c};h.toJSON=function(){throw new m("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");};h.queryItems=function(a,c){a=q.ensureType(k,a);if(5<parseFloat(this.portal.currentVersion))return a=a||new k,this.portal._queryPortal(`/content/groups/${this.id}/search`,a,"PortalItem",c);a=a?a.clone():new k;a.query="group:"+this.id+(a.query?" "+a.query:"");return this.portal.queryItems(a,c)};h._fetchCategorySchemaSet=
function(a,c){return this.portal._fetchSelf(this.portal.authMode,!0,c).then(g=>{if(g=g.contentCategorySetsGroupQuery){const f=new k;f.disableExtraQuery=!0;f.num=1;f.query=g;return this.portal.queryGroups(f,c)}throw new m("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found");}).then(g=>{if(g.total){g=g.results[0];const f=new k;f.num=1;f.query=`typekeywords:"${a}"`;return g.queryItems(f,c)}throw new m("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found");
}).then(g=>g.total?g.results[0].fetchData("json",c).then(f=>(f=f&&f.categorySchema)&&f.length?f:[]):[])};n._createClass(l,[{key:"thumbnailUrl",get:function(){const a=this.url,c=this.thumbnail;return a&&c?this.portal._normalizeUrl(`${a}/info/${c}?f=json`):null}},{key:"url",get:function(){const a=this.get("portal.restUrl");return a?a+"/community/groups/"+this.id:null}}]);return l}(t.JSONSupport);d.__decorate([e.property()],b.prototype,"access",void 0);d.__decorate([e.property({type:Date})],b.prototype,
"created",void 0);d.__decorate([e.property()],b.prototype,"description",void 0);d.__decorate([e.property()],b.prototype,"id",void 0);d.__decorate([e.property()],b.prototype,"isInvitationOnly",void 0);d.__decorate([e.property({type:Date})],b.prototype,"modified",void 0);d.__decorate([e.property()],b.prototype,"owner",void 0);d.__decorate([e.property()],b.prototype,"portal",void 0);d.__decorate([e.property()],b.prototype,"snippet",void 0);d.__decorate([e.property()],b.prototype,"sortField",void 0);
d.__decorate([e.property()],b.prototype,"sortOrder",void 0);d.__decorate([e.property()],b.prototype,"tags",void 0);d.__decorate([e.property()],b.prototype,"thumbnail",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"thumbnailUrl",null);d.__decorate([e.property()],b.prototype,"title",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"url",null);return b=d.__decorate([r.subclass("esri.portal.PortalGroup")],b)});