// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../hints/LineSnappingHint","../hints/RightAngleSnappingHint","./SnappingCandidate"],function(d,e,f,l,b){b=function(g){function c({coordinateHelper:a,targetPoint:m,constraint:h,previousVertex:k,centerVertex:n}){a=g.call(this,a,m,h)||this;a.previousVertex=k;a.centerVertex=n;a.referenceLine=new f.LineSnappingHint(1,k,h.start);return a}e._inheritsLoose(c,g);e._createClass(c,[{key:"hints",get:function(){return[new f.LineSnappingHint(0,this.constraint.start,
this.targetPoint),this.referenceLine,new l.RightAngleSnappingHint(this.previousVertex,this.centerVertex,this.targetPoint)]}}]);return c}(b.SnappingCandidate);d.RightAngleSnappingCandidate=b;Object.defineProperty(d,"__esModule",{value:!0})});