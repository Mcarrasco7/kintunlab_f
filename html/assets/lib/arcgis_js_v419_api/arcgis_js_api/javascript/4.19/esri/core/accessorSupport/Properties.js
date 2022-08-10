// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../has ../lang ../Logger ./utils ./PropertyOrigin ../ObjectPool ./Property ./Store ./tracking".split(" "),function(v,t,w,p,x,q,y,m,z,k){p.getLogger("esri.core.accessorSupport.Properties");t=function(){function l(a){this.host=a;this.properties=new Map;this.ctorArgs=null;this.destroyed=!1;this.lifecycle=0;this.store=new z.Store;this._origin=6;const b=this.host.constructor.__accessorMetadata__,c=b.properties;for(const e in c){const f=new m.Property(a,e,
c[e]);this.properties.set(e,f)}this.metadatas=c;this._autoDestroy=b.autoDestroy}var d=l.prototype;d.initialize=function(){this.lifecycle=1};d.constructed=function(){this.lifecycle=2};d.destroy=function(){this.destroyed=!0;if(this._autoDestroy)for(const [b,c]of this.properties){var a=this.internalGet(b);a&&a&&"function"===typeof a.destroy&&(a.destroy(),~c.flags&8&&this._internalSet(c,null));c.destroy()}else for([,a]of this.properties)a.destroy()};d.get=function(a){return this.properties.get(a).metadata.get?
this.getterComputed(a):this.getterStatic(a)};d.getterStatic=function(a){const b=this.properties.get(a);if(void 0!==b)return k.trackAccess(b),this.store.has(a)?this.store.get(a):b.metadata.value};d.getterComputed=function(a){const b=this.properties.get(a);k.trackAccess(b);const c=this.store;var e=b.flags;const f=this.store.get(a);if(e&4||c.has(a)&&(~e&1||m.isInvalidating()))return f;b.flags|=4;const h=b.metadata.get;e&64?e=k.runTracked(b,h,this.host):(k.trackExplicitDependencies(this.host,b),e=h.call(this.host));
c.set(a,e,1);a=this.store.get(a);a===f?b.flags&=-2:b.commit();b.flags&=-5;return a};d.originOf=function(a){const b=this.store.originOf(a);return void 0===b&&(a=this.properties.get(a),void 0!==a&&a.flags&16)?"defaults":q.idToName(b)};d.has=function(a){return this.properties.has(a)?this.store.has(a):!1};d.keys=function(){return[...this.properties.keys()]};d.internalGet=function(a){const b=this.properties.get(a);if(void 0!==b)return this.store.has(a)?this.store.get(a):b.metadata.value};d.internalSet=
function(a,b){a=this.properties.get(a);void 0!==a&&this._internalSet(a,b)};d.getDependsInfo=function(a,b,c){const e=this.properties.get(b);if(void 0===e)return"";const f=new Set;var h=k.runTracked({onObservableAccessed:g=>f.add(g),onTrackingEnd:()=>{}},()=>{var g;return null==(g=e.metadata.get)?void 0:g.call(a)}),n=a.declaredClass.split(".").pop();b=`${c}${n}.${b}: ${h}\n`;if(0===f.size)return b;c+="  ";for(const g of f){if(!(g instanceof m.Property))continue;h=g.host;n=g.propertyName;const u=x.getProperties(h);
b=u?b+u.getDependsInfo(h,n,c):b+`${c}${n}: undefined\n`}return b};d.setAtOrigin=function(a,b,c){a=this.properties.get(a);if(void 0!==a)return this._setAtOrigin(a,b,c)};d.isOverridden=function(a){a=this.properties.get(a);return void 0!==a&&!!(a.flags&2)};d.clearOverride=function(a){a=this.properties.get(a);void 0!==a&&a.flags&2&&(a.flags&=-3,a.invalidate())};d.override=function(a,b){a=this.properties.get(a);if(!(void 0===a||null==b&&a.flags&8)){var c=a.metadata.cast;if(c){b=this._cast(c,b);const {valid:e,
value:f}=b;r.release(b);if(!e)return;b=f}a.flags|=2;this._internalSet(a,b)}};d.set=function(a,b){a=this.properties.get(a);if(!(void 0===a||null==b&&a.flags&8)){var c=a.metadata.cast;if(c){b=this._cast(c,b);const {valid:e,value:f}=b;r.release(b);if(!e)return;b=f}(c=a.metadata.set)?c.call(this.host,b):this._internalSet(a,b)}};d.setDefaultOrigin=function(a){this._origin=q.nameToId(a)};d.getDefaultOrigin=function(){return q.idToName(this._origin)};d.propertyInvalidated=function(a){a=this.properties.get(a);
void 0!==a&&a.invalidate()};d.propertyCommitted=function(a){a=this.properties.get(a);void 0!==a&&a.commit()};d._internalSet=function(a,b){this._setAtOrigin(a,b,0!==this.lifecycle?this._origin:0)};d._setAtOrigin=function(a,b,c){const e=this.store,f=a.propertyName;e.has(f,c)&&w.equals(b,e.get(f))&&~a.flags&2&&c===e.originOf(f)||(m.startInvalidating(),a.invalidate(),m.stopInvalidating(),e.set(f,b,c),a.commit(),k.initializeDependencyTracking(this.host,a))};d._cast=function(a,b){const c=r.acquire();c.valid=
!0;c.value=b;a&&(c.value=a.call(this.host,b,c));return c};v._createClass(l,[{key:"initialized",get:function(){return 0!==this.lifecycle}}]);return l}();p=function(){function l(){this.value=null;this.valid=!0}var d=l.prototype;d.acquire=function(){this.valid=!0};d.release=function(){this.value=null};return l}();const r=new y(p);return t});