// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ./TextInput".split(" "),function(g,e,a,m,n,h,p,k,q,r,t,l){var c;a=c=function(f){function d(b){b=f.call(this,b)||this;b.type="text-box";return b}
g._inheritsLoose(d,f);d.prototype.clone=function(){return new c({maxLength:this.maxLength,minLength:this.minLength})};return d}(l);e.__decorate([h.property({type:["text-box"],json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=c=e.__decorate([k.subclass("esri.form.elements.inputs.TextBoxInput")],a)});