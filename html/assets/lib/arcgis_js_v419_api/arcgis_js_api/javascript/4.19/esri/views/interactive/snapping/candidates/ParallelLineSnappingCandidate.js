// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec2 ../hints/LineSnappingHint ../hints/ParallelSnappingHint ./SnappingCandidate ../SnappingConstraint".split(" "),function(g,h,k,l,n,f,p){f=function(m){function d({coordinateHelper:a,referenceLine:b,lineStart:c,targetPoint:q}){const e=a.clone(c);k.subtract(e,k.add(e,e,b.right.pos),b.left.pos);a=m.call(this,a,q,new p.LineConstraint(a,c,e))||this;a._referenceLines=[{edge:b,fadeLeft:!0,fadeRight:!0}];return a}h._inheritsLoose(d,
m);d.prototype.addReferenceLine=function(a){const b={edge:a,fadeLeft:!0,fadeRight:!0};this._referenceLines.forEach(c=>{a.right.right===c.edge&&(c.fadeLeft=!1,b.fadeRight=!1);a.left.left===c.edge&&(c.fadeRight=!1,b.fadeLeft=!1)});this._referenceLines.push(b)};h._createClass(d,[{key:"hints",get:function(){return[new l.LineSnappingHint(0,this.constraint.start,this.targetPoint),new n.ParallelSnappingHint(this.constraint.start,this.targetPoint),...this._referenceLines.map(a=>new l.LineSnappingHint(1,a.edge.left.pos,
a.edge.right.pos,a.fadeLeft,a.fadeRight))]}}]);return d}(f.SnappingCandidate);g.ParallelLineSnappingCandidate=f;Object.defineProperty(g,"__esModule",{value:!0})});