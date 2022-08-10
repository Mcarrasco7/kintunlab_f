// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/lang ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/Error ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/arrayUtils ../../../core/Accessor ../../../core/Collection ../../../Graphic ../../../tasks/support/AttachmentQuery ../../../tasks/support/Query".split(" "),
function(A,g,f,C,D,K,k,L,E,t,M,N,O,u,F,w,G,H,x){function y(v,n,d){I.error(new t(v,n,d))}const I=D.getLogger("esri.widgets.FeatureTable.support.FeatureStore");f=function(v){function n(a){a=v.call(this,a)||this;a._loaded=!1;a._loadError=!1;a._loading=!1;a._editOperationQueue=[];a._queryOperationQueue=[];a._objectIds=new w;a._hasStaleCache=!1;a.count=0;a.failures=new w;a.itemCache=new w;a.relatedRecordsEnabled=!1;return a}A._inheritsLoose(n,v);var d=n.prototype;d.destroy=function(){this.layer=null;this.itemCache&&
this.itemCache.destroy();this.failures&&this.failures.destroy();this._set("itemCache",null)};d.load=async function(){this._reset();const {layer:a}=this;if(!a)return Promise.resolve();this._loading=!0;this.notifyChange("state");try{await a.when(),await this._syncLayerInfo(),this._loading=!1,this._loaded=!0,this.notifyChange("state")}catch(b){throw this._reset(),this._loadError=!0,this.notifyChange("state"),y("store:load-error","An error ocurred.",{error:b}),b;}};d.addItems=async function(a){};d.fetchItems=
async function(a){const {page:b,pageSize:c}=a;a=b*c;const e=a+c,{layer:h,state:m}=this;if(!h||"loaded"!==m)return Promise.resolve([]);this.notifyChange("querying");a=await this._query({start:a,num:e,page:b,pageSize:c});this.notifyChange("state");return a};d.query=async function(a){const {layer:b,state:c}=this;if(!b||"loaded"!==c)return[];this.notifyChange("querying");a=await this._query(a);this.notifyChange("state");return a};d.removeItemAt=async function(a){};d.reset=async function(){this._reset()};
d.updateItem=async function(a){return this._update(a)};d.getItemByObjectId=function(a){const {itemCache:b,layer:{objectIdField:c}}=this;return b.find(e=>e.feature.attributes[c]===a)};d.getLocalItemAt=function(a){return this.itemCache.getItemAt(a)};d.getItemAt=function(a){return Promise.resolve(this.itemCache.getItemAt(a))};d.getObjectIdIndex=function(a){const {itemCache:b,layer:{objectIdField:c}}=this;return b.findIndex(e=>e.feature.attributes[c]===a)};d._reset=function(){this.itemCache.removeAll();
this.failures.removeAll();this._editOperationQueue=[];this._queryOperationQueue=[];this._loadError=this._loaded=this._loading=this._hasStaleCache=!1;this._set("count",0);this._objectIds.removeAll();this.notifyChange("querying");this.notifyChange("syncing");this.notifyChange("state")};d._getIdsFromFeatures=function(a){return a.map(b=>b.attributes[this.layer.objectIdField])};d._toFeatureData=function(a,b){const {layer:{objectIdField:c}}=this;return a.map(e=>{var {attributes:h}=e;h=h[c];return{objectId:h,
feature:e,attachments:b?b[h]:null,relatedRecords:null}})};d._update=async function(a){const {layer:b}=this,{operations:c}=b.capabilities;if(!c.supportsUpdate)throw new t("store:update-error","Update is not supported.");const {index:e,name:h,value:m}=a;a=await this.getItemAt(e);if(!a||!a.feature)throw new t("store:update-error","Feature with provided 'objectId' not found.");const {feature:l}=a,p=C.clone(l.attributes);p[h]=m;a=new G({attributes:p});const r=b.applyEdits({updateFeatures:[a]}).then(q=>
{const {updateFeatureResults:z}=q,B=z.find(J=>!!J.error);if(B)throw B.error;-1<this._editOperationQueue.indexOf(()=>r)&&z&&z.length&&(l.attributes=p);return q});return this._queueEditOperation(()=>r)};d._query=async function(a){const {refresh:b}=a;if(!0===b)return this.itemCache.removeAll(),this._syncLayerInfo().then(()=>this._queryFeatureData(a));this._hasStaleCache&&(await this._updateIds(),this._hasStaleCache=!1);return this._queryFeatureData(a)};d._queryFeatureData=async function(a){return this._queueQueryOperation(async()=>
{const {features:b}=await this._queryFeatures(a);var c=this._getIdsFromFeatures(b);c=await this._queryAttachments(c);return this._toFeatureData(b,c)||[]})};d._syncLayerInfo=async function(){await this._updateCount();await this._updateIds()};d._updateCount=async function(){await this._queryCount().then(a=>this._set("count",a))};d._updateIds=async function(){var a,b,c;null!=(a=this.layer)&&null!=(b=a.capabilities)&&null!=(c=b.query)&&c.supportsPagination||(this._objectIds.removeAll(),await this._queryObjectIds().then(e=>
this._objectIds.addMany(e)))};d._queryCount=function(){const {filterGeometry:a,layer:b,returnGeometry:c}=this;return b.queryFeatureCount(new x({geometry:a,returnGeometry:c,where:this._getWhere()}))};d._queryObjectIds=function(){const {filterGeometry:a,layer:b,orderByFields:c,returnGeometry:e}=this,{capabilities:{query:{supportsCacheHint:h,supportsOrderBy:m}}}=b,l=new x({geometry:a,outFields:[b.objectIdField],returnGeometry:e,where:this._getWhere()});m&&(l.orderByFields=c);h&&(l.cacheHint=!0);return b.queryObjectIds(l)};
d._queryFeatures=async function(a){const {layer:b}=this;if(!b.capabilities.operations.supportsQuery)return Promise.reject(new t("store:query-error","Layer does not support query operation."));const {filterGeometry:c,layer:{capabilities:{query:{supportsCacheHint:e,supportsOrderBy:h,supportsPagination:m}}},orderByFields:l,returnGeometry:p}=this,{start:r,pageSize:q}=a;a=new x({returnGeometry:p,outFields:["*"]});m?(a.start=r,a.num=q,a.where=this._getWhere()):a.objectIds=this._getObjectIdsForPage(r,q);
h&&(a.orderByFields=l);c&&(a.geometry=c);e&&(a.cacheHint=!0);return b.queryFeatures(a)};d._getObjectIdsForPage=function(a,b){const c=this._objectIds.toArray();return c.length>=a+b?c.slice(a,a+b):c.slice(a)};d._queryAttachments=function(a){const {attachmentsEnabled:b,layer:c}=this,{capabilities:{data:{supportsAttachment:e},operations:{supportsQueryAttachments:h}}}=c;return b&&e&&h?c.queryAttachments(new H({objectIds:a,where:this._getWhere()})):Promise.resolve(null)};d._queueQueryOperation=function(a){this._queryOperationQueue.push(a);
this.notifyChange("querying");return a().then(b=>-1<this._queryOperationQueue.indexOf(a)?(this.itemCache.addMany(b),b):[]).catch(b=>{y("store:query-error","An error ocurred.",{error:b});const c={error:b,retry:()=>{this.failures.remove(c);this._queueQueryOperation(a)},cancel:()=>this.failures.remove(c)};this.failures.add(c);return[]}).then(b=>{u.remove(this._queryOperationQueue,a);this.notifyChange("querying");return b})};d._queueEditOperation=function(a){this._editOperationQueue.push(a);this.notifyChange("syncing");
return a().then(()=>{u.remove(this._editOperationQueue,a);this.notifyChange("syncing")}).catch(b=>{y("store:edit-error","An error ocurred.",{error:b});const c={error:b,retry:()=>{this.failures.remove(c);this._queueEditOperation(a)},cancel:()=>this.failures.remove(c)};this.failures.add(c);u.remove(this._editOperationQueue,a);this.notifyChange("syncing");throw b;})};d._getWhere=function(){return this.where||this.layer.definitionExpression||"1\x3d1"};A._createClass(n,[{key:"attachmentsEnabled",set:function(a){this._reset();
this._set("attachmentsEnabled",a);this.notifyChange("state")}},{key:"filterGeometry",set:function(a){this._reset();this._set("filterGeometry",a);this.notifyChange("state")}},{key:"layer",get:function(){return this._get("layer")||null},set:function(a){this._reset();this._set("layer",a);this.notifyChange("state")}},{key:"orderByFields",get:function(){return this._get("orderByFields")||[]},set:function(a){u.equals(a,this.orderByFields)||(this.itemCache.removeAll(),this._hasStaleCache=!0,this._set("orderByFields",
a))}},{key:"querying",get:function(){return 0<this._queryOperationQueue.length}},{key:"returnGeometry",set:function(a){this._reset();this._set("returnGeometry",a);this.notifyChange("state")}},{key:"state",get:function(){const {layer:a,_loaded:b,_loadError:c,_loading:e}=this;return c?"error":!a||this.get("layer.loadError")?"disabled":e?"loading":"loaded"===this.get("layer.loadStatus")&&b?"loaded":"ready"}},{key:"syncing",get:function(){return 0<this._editOperationQueue.length}},{key:"where",get:function(){return this._get("where")||
null},set:function(a){this._reset();this._set("where",a);this.notifyChange("state")}}]);return n}(F);g.__decorate([k.property()],f.prototype,"attachmentsEnabled",null);g.__decorate([k.property({readOnly:!0})],f.prototype,"count",void 0);g.__decorate([k.property({readOnly:!0})],f.prototype,"failures",void 0);g.__decorate([k.property()],f.prototype,"filterGeometry",null);g.__decorate([k.property({readOnly:!0})],f.prototype,"itemCache",void 0);g.__decorate([k.property()],f.prototype,"layer",null);g.__decorate([k.property()],
f.prototype,"orderByFields",null);g.__decorate([k.property({readOnly:!0})],f.prototype,"querying",null);g.__decorate([k.property()],f.prototype,"relatedRecordsEnabled",void 0);g.__decorate([k.property()],f.prototype,"returnGeometry",null);g.__decorate([k.property({readOnly:!0})],f.prototype,"state",null);g.__decorate([k.property({readOnly:!0})],f.prototype,"syncing",null);g.__decorate([k.property()],f.prototype,"where",null);return f=g.__decorate([E.subclass("esri.widgets.FeatureTable.support.FeatureStore")],
f)});