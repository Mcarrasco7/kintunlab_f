// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/Logger","../../../../../core/Error"],function(g,e,h,k){const f=h.getLogger("esri.views.2d.layers.features.support.whereUtils"),l={getAttribute(c,d){return c.field(d)}};e.createWhereClause=async function(c,d){const m=await new Promise(function(b,a){g(["../../../../../core/sql/WhereClause"],b,a)});try{const b=m.WhereClause.create(c,d);if(!b.isStandardized){const a=new k("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",
b);f.error(a)}return a=>{a=a.readArcadeFeature();return b.testFeature(a,l)}}catch(b){return f.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",c),a=>!0}};Object.defineProperty(e,"__esModule",{value:!0})});