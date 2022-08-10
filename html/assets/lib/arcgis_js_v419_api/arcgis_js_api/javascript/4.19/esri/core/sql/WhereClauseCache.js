// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../ItemCache","./WhereClause"],function(d,e,k){let l=function(){function f(a,b){this._cache=new e(a);this._invalidCache=new e(b)}f.prototype.get=function(a,b){const c=`${b.uid}:${a}`,g=this._cache.get(c);if(g)return g;if(void 0!==this._invalidCache.get(c))return null;try{const h=k.WhereClause.create(a,b);this._cache.put(c,h);return h}catch{return this._invalidCache.put(c,null),null}};return f}();d.WhereClauseCache=l;Object.defineProperty(d,"__esModule",{value:!0})});