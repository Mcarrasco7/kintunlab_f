// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../CIMPlacements"],function(n,q){let p=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(e,b,a){return new r(e,b,a)};return d}();p.instance=null;let r=function(){function d(b,a,c){this._currentY=this._currentX=this._yMax=this._yMin=this._xMax=this._xMin=0;this._stepX=(void 0!==a.stepX?Math.abs(a.stepX):16)*c;this._stepY=(void 0!==a.stepY?Math.abs(a.stepY):16)*c;if(0!==this._stepX&&0!==this._stepY&&b&&
void 0!==b.rings&&b.rings){this._gridType=void 0!==a.gridType?a.gridType:"Fixed";if("Random"===this._gridType)this._randomness=void 0!==a.randomness?a.randomness/100:1,this._gridAngle=0,this._shiftOddRows=!1,this._cosAngle=1,this._offsetY=this._offsetX=this._sinAngle=0;else{this._randomness=0;this._gridAngle=void 0!==a.gridAngle?a.gridAngle:0;this._shiftOddRows=void 0!==a.shiftOddRows?a.shiftOddRows:!1;this._offsetX=void 0!==a.offsetX?a.offsetX*c:0;this._offsetY=void 0!==a.offsetY?a.offsetY*c:0;this._cosAngle=
Math.cos(this._gridAngle/180*Math.PI);this._sinAngle=-Math.sin(this._gridAngle/180*Math.PI);if(this._stepX)if(0>this._offsetX)for(;this._offsetX<-.5*this._stepX;)this._offsetX+=this._stepX;else for(;this._offsetX>=.5*this._stepX;)this._offsetX-=this._stepX;if(this._stepY)if(0>this._offsetY)for(;this._offsetY<-.5*this._stepY;)this._offsetY+=this._stepY;else for(;this._offsetY>=.5*this._stepY;)this._offsetY-=this._stepY}this._graphicOriginY=this._graphicOriginX=0;this._internalPlacement=new q.Placement;
this._calculateMinMax(b);this._geometry=b}}var e=d.prototype;e.next=function(){return this._geometry?this._nextInside():null};e._calculateMinMax=function(b){this._yMax=this._yMin=this._xMax=this._xMin=0;let a,c,f,g,h;c=f=Number.MAX_VALUE;g=h=-Number.MAX_VALUE;for(const l of b.rings){const t=l?l.length:0;for(let m=0;m<t;++m){var k=l[m][0]-this._graphicOriginX-this._offsetX;a=l[m][1]-this._graphicOriginY-this._offsetY;b=this._cosAngle*k-this._sinAngle*a;k=this._sinAngle*k+this._cosAngle*a;c=Math.min(c,
b);g=Math.max(g,b);f=Math.min(f,k);h=Math.max(h,k)}}c+=this._graphicOriginX;g+=this._graphicOriginX;f+=this._graphicOriginY;h+=this._graphicOriginY;this._xMin=Math.round(c/this._stepX);this._xMax=Math.round(g/this._stepX);this._yMin=Math.round(f/this._stepY);this._yMax=Math.round(h/this._stepY);this._currentX=this._xMax+1;this._currentY=this._yMin-1};e._nextInside=function(){for(;;){if(this._currentX>this._xMax){this._currentY++;if(this._currentY>this._yMax)return null;this._currentX=this._xMin;this._shiftOddRows&&
this._currentY%2&&this._currentX--}var b=this._currentX*this._stepX+this._offsetX;this._shiftOddRows&&this._currentY%2&&(b+=.5*this._stepX);const a=this._currentY*this._stepY+this._offsetY;this._currentX++;let c;"Random"===this._gridType?(c=this._graphicOriginX+b+this._stepX*this._randomness*(.5-Math.random())*2/3,b=this._graphicOriginY+a+this._stepY*this._randomness*(.5-Math.random())*2/3):(c=this._graphicOriginX+this._cosAngle*b+this._sinAngle*a,b=this._graphicOriginY-this._sinAngle*b+this._cosAngle*
a);this._internalPlacement.setTranslate(c,b);return this._internalPlacement}};return d}();n.PlacementInsidePolygon=p;Object.defineProperty(n,"__esModule",{value:!0})});