// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){let g=function(){function f(){this.items=[]}var d=f.prototype;d.addObject=function(a,b){this.items.push({type:0,objectStateId:b,object:a})};d.addRenderGeometry=function(a,b,c){this.items.push({type:1,objectStateId:b,renderGeometry:a,owner:c})};d.addExternal=function(a,b){this.items.push({type:2,objectStateId:b,remove:a})};d.remove=function(a){for(let b=this.items.length-1;0<=b;--b){const c=this.items[b];c.objectStateId===a&&(this._removeObjectStateItem(c),this.items.splice(b,
1))}};d.removeObject=function(a){for(let b=this.items.length-1;0<=b;--b){const c=this.items[b];0===c.type&&c.object===a&&(this._removeObjectStateItem(c),this.items.splice(b,1))}};d.removeRenderGeometry=function(a){for(let b=this.items.length-1;0<=b;--b){const c=this.items[b];1===c.type&&c.renderGeometry===a&&(this._removeObjectStateItem(c),this.items.splice(b,1))}};d.removeAll=function(){this.items.forEach(a=>{this._removeObjectStateItem(a)});this.items=[]};d._removeObjectStateItem=function(a){switch(a.type){case 0:0===
a.objectStateId.channel?a.object.removeHighlight(a.objectStateId):1===a.objectStateId.channel&&a.object.removeOcclude(a.objectStateId);break;case 1:a.owner.removeRenderGeometryObjectState(a.renderGeometry,a.objectStateId);break;case 2:a.remove(a.objectStateId)}};return f}();e.Object3DStateSet=g;Object.defineProperty(e,"__esModule",{value:!0})});