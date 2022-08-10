// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Evented","../../../core/MapUtils","./GraphicsMap"],function(n,l,m,p,q){m=function(g){function d(a){var b=g.call(this)||this;b._limit=a;b._all=new q.GraphicsMap;b._active=new r(l._assertThisInitialized(b));b._pending=new Map;b._handle=b._all.on("change",e=>b._handleChanges(e));return b}l._inheritsLoose(d,g);var c=d.prototype;c.destroy=function(){this._handle.remove()};c.toArray=function(){return this._active.toArray()};c.find=
function(a){return this._active.find(a)};c.forEach=function(a){this._active.forEach(a)};c.addMany=function(a){this._all.addMany(a)};c.removeManyByObjectId=function(a){this._all.removeManyByObjectId(a)};c._handleChanges=function(a){let b=a.removed;if(0<this._pending.size){b=[];for(var e of a.removed)this._pending.delete(e.objectId)||b.push(e)}e=this._limit-this._active.length+b.length;e<a.added.length&&(this._active.removeMany(b),b=[],h.reset(1-this._limit/(this._active.length+a.added.length)),this._active.forEach(f=>
{h.sample()&&(b.push(f),this._pending.set(f.objectId,f))}),e=this._limit-this._active.length+b.length);let k=a.added;if(e<a.added.length){k=[];h.reset(e/a.added.length);for(const f of a.added)h.sample()?k.push(f):this._pending.set(f.objectId,f)}a=e-k.length;0<a&&0<this._pending.size&&(h.reset(a/this._pending.size),this._pending.forEach(f=>{h.sample()&&(k.push(f),this._pending.delete(f.objectId))}));this._active.addAndRemove(k,b)};l._createClass(d,[{key:"length",get:function(){return this._active.length}}]);
return d}(m);const h=new (function(){function g(){this.percentage=1;this.last=-1;this.index=0}var d=g.prototype;d.reset=function(c){this.percentage=c;this.last=-1};d.sample=function(){const c=Math.floor(this.index*this.percentage);++this.index;if(c===this.last)return!1;this.last=c;return!0};return g}());let r=function(){function g(c){this._parent=c;this._map=new Map}var d=g.prototype;d.forEach=function(c){this._map.forEach(a=>c(a))};d.find=function(c){let a;p.someMap(this._map,b=>c(b)?(a=b,!0):!1);
return a};d.toArray=function(){return[...this._map.values()]};d.addAndRemove=function(c,a){for(const b of c)this._map.set(b.objectId,b);for(const b of a)this._map.delete(b.objectId);(0<c.length||0<a.length)&&this._parent.emit("change",{added:c,removed:a})};d.removeMany=function(c){for(const a of c)this._map.delete(a.objectId);0<c.length&&this._parent.emit("change",{added:[],removed:c})};l._createClass(g,[{key:"length",get:function(){return this._map.size}}]);return g}();n.LimitGraphicsMap=m;Object.defineProperty(n,
"__esModule",{value:!0})});