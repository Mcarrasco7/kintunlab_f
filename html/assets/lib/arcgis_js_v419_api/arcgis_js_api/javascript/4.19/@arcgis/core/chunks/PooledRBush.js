/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{a as t}from"./Logger.js";import{P as i,k as n,o as e}from"../core/scheduling.js";import{q as s}from"./quickselect.js";class h{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),g.prune(),M.prune(),X.prune(),Y.prune()}all(t){this._all(this.data,t)}search(t,i){let n=this.data;const e=this.toBBox;if(f(t,n))for(g.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;f(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):g.push(h))}n=g.pop()}}collides(t){let i=this.data;const n=this.toBBox;if(!f(t,i))return!1;for(g.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(f(t,h)){if(i.leaf||x(t,h))return!0;g.push(s)}}i=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){const t=this.data;this.data=i,i=t}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new _([]),this}remove(i){if(!i)return this;let e,s=this.data,h=null,a=0,r=!1;const o=this.toBBox(i);for(X.clear(),Y.clear();s||X.length>0;){var l;if(!s)s=t(X.pop()),h=X.data[X.length-1],a=null!=(l=Y.pop())?l:0,r=!0;if(s.leaf&&(e=n(s.children,i,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),X.push(s),this._condense(X),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(X.push(s),Y.push(a),a=0,h=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(M.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else M.pushArray(n.children);n=null!=(e=M.pop())?e:null}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new _(t.slice(i,n+1));return a(e,this.toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(e-1)));const r=new w([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));p(t,i,n,l,this.compareMinX);for(let s=i;s<=n;s+=l){const i=Math.min(s+l-1,n);p(t,s,i,o,this.compareMinY);for(let n=s;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1))}}return a(r,this.toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,a=1/0;for(let r=0,o=i.children.length;r<o;r++){const o=i.children[r],l=m(o),c=(s=t,h=o,(Math.max(h.maxX,s.maxX)-Math.min(h.minX,s.minX))*(Math.max(h.maxY,s.maxY)-Math.min(h.minY,s.minY))-l);c<a?(a=c,e=l<e?l:e,n=o):c===a&&l<e&&(e=l,n=o)}i=n||i.children[0]}var s,h;return i}_insert(t,i,n){const e=this.toBBox,s=n?t:e(t);X.clear();const h=this._chooseSubtree(s,this.data,i,X);for(h.children.push(t),o(h,s);i>=0&&X.data[i].children.length>this._maxEntries;)this._split(X,i),i--;this._adjustParentBBoxes(s,X,i)}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new _(r):new w(r);o.height=n.height,a(n,this.toBBox),a(o,this.toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this.data=new w([t,i]),this.data.height=t.height+1,a(this.data,this.toBBox)}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this.toBBox),o=r(t,a,n,this.toBBox),l=u(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a)}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this.toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=d(h)+d(a);for(let e=i;e<n-i;e++){const i=t.children[e];o(h,t.leaf?s(i):i),l+=d(h)}for(let e=n-i-1;e>=i;e--){const i=t.children[e];o(a,t.leaf?s(i):i),l+=d(a)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t)}_condense(t){for(let i=t.length-1;i>=0;i--){const e=t.data[i];if(0===e.children.length)if(i>0){const s=t.data[i-1],h=s.children;h.splice(n(h,e,h.length,s.indexHint),1)}else this.clear();else a(e,this.toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){r(t,0,t.children.length,i,t)}function r(t,i,n,e,s){s||(s=new _([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function u(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function f(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(i,n,e,h,a){const r=[n,e];for(;r.length;){const n=t(r.pop()),e=t(r.pop());if(n-e<=h)continue;const o=e+Math.ceil((n-e)/h/2)*h;s(i,o,e,n,a),r.push(e,o,o,n)}}const g=new i,M=new i,X=new i,Y=new i({deallocator:void 0});class B extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new e}}class _ extends B{constructor(t){super(),this.children=t,this.leaf=!0}}class w extends B{constructor(t){super(),this.children=t,this.leaf=!1}}export{h as P};
