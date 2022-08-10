// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./core/has ./core/Logger ./core/accessorSupport/ensureType ./core/accessorSupport/decorators/property ./core/jsonMap ./core/accessorSupport/decorators/subclass ./core/urlUtils ./core/uuid ./portal/support/resourceExtension ./core/JSONSupport ./layers/support/timeUtils".split(" "),function(l,d,a,p,q,g,r,m,t,u,v,n,b){var e;a=e=function(h){function f(c){c=h.call(this,c)||this;c.value=0;c.unit="milliseconds";return c}l._inheritsLoose(f,h);
var k=f.prototype;k.toMilliseconds=function(){return this.value*b.millisecondsPerTimeUnit[this.unit]};k.clone=function(){return new e({value:this.value,unit:this.unit})};return f}(n.JSONSupport);d.__decorate([g.property({type:Number,json:{write:!0},nonNullable:!0})],a.prototype,"value",void 0);d.__decorate([g.property({type:b.timeUnitKebabDictionary.apiValues,json:{type:b.timeUnitKebabDictionary.jsonValues,read:b.timeUnitKebabDictionary.read,write:b.timeUnitKebabDictionary.write},nonNullable:!0})],
a.prototype,"unit",void 0);return a=e=d.__decorate([m.subclass("esri.TimeInterval")],a)});