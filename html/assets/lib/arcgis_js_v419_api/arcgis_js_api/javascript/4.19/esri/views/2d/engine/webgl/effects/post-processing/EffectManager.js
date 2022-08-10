// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,f){const k={colorize:async()=>new (await new Promise(function(c,b){d(["./Colorize"],c,b)})).Colorize,blur:async()=>new (await new Promise(function(c,b){d(["./Blur"],c,b)})).Blur,bloom:async()=>new (await new Promise(function(c,b){d(["./Bloom"],c,b)})).Bloom,opacity:async()=>new (await new Promise(function(c,b){d(["./Opacity"],c,b)})).Opacity,"drop-shadow":async()=>new (await new Promise(function(c,b){d(["./DropShadow"],c,b)})).DropShadow};let l=function(){function c(a){this._requestRender=
a;this._effectMap=new Map;this._effectPromiseMap=new Map}var b=c.prototype;b.dispose=function(){this._requestRender&&(this._requestRender=null);this._effectMap.forEach(a=>a.dispose());this._effectMap.clear();this._effectPromiseMap.clear()};b.getPostProcessingEffects=function(a){if(!a||0===a.length)return[];const e=[];for(const g of a){a:switch(a=g.type,a){case "bloom":case "blur":case "opacity":case "drop-shadow":break a;default:a="colorize"}const h=this._effectMap.get(a);h?e.push({postProcessingEffect:h,
effect:g}):this._enablePostProcessingEffect(a)}return e};b._enablePostProcessingEffect=async function(a){const e=await this._loadPostProcessingEffect(a);this._requestRender&&(this._effectMap.set(a,e),this._requestRender.requestRender())};b._loadPostProcessingEffect=async function(a){this._effectPromiseMap.has(a)||this._effectPromiseMap.set(a,k[a]());return this._effectPromiseMap.get(a)};return c}();f.EffectManager=l;Object.defineProperty(f,"__esModule",{value:!0})});