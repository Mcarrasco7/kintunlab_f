// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../webgl-engine/lib/Object3DStateSet"],function(b,d){let f=function(){function c(a,e){this.stateType=a;this.objectIdField=e;this.objectStateSet=new d.Object3DStateSet;this.ids=new Set;this.paused=!1}c.prototype.hasGraphic=function(a){return this.objectIdField?this.ids.has(a.graphic.attributes[this.objectIdField]):this.ids.has(a.graphic.uid)};return c}();b.Graphics3DObjectStateSet=f;Object.defineProperty(b,"__esModule",{value:!0})});