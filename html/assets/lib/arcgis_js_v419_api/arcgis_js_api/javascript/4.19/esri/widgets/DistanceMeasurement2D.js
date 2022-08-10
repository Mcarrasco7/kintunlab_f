// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/promiseUtils ../core/unitUtils ./support/widgetUtils ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../chunks/index ./Widget ./DistanceMeasurement2D/DistanceMeasurement2DViewModel".split(" "),
function(D,d,c,O,P,h,k,Q,E,R,S,T,F,G,U,v,w,a,H,x){c=function(y){function q(b,e){b=y.call(this,b,e)||this;b.iconClass="esri-icon-measure-line";b.label=void 0;b.messages=null;b.messagesUnits=null;b.unit=null;b.unitOptions=null;b.view=null;b.viewModel=new x;return b}D._inheritsLoose(q,y);var r=q.prototype;r.render=function(){const {id:b,messages:e,messagesUnits:z,viewModel:I,visible:J}=this,{active:A,isSupported:B,measurementLabel:K,state:m,unit:L,unitOptions:M}=I;var n="disabled"===m;const p="measuring"===
m||"measured"===m;var t=A&&"ready"===m?a.jsx("section",{key:"hint",class:"esri-distance-measurement-2d__hint"},a.jsx("p",{class:"esri-distance-measurement-2d__hint-text"},e.hint)):null;const N=B?null:a.jsx("section",{key:"unsupported",class:"esri-distance-measurement-2d__panel--error"},a.jsx("p",null,e.unsupported));var u=(f,l,C)=>l?a.jsx("div",{key:`${C}-enabled`,class:"esri-distance-measurement-2d__measurement-item"},a.jsx("span",{class:"esri-distance-measurement-2d__measurement-item-title"},f),
a.jsx("span",{class:"esri-distance-measurement-2d__measurement-item-value"},l)):a.jsx("div",{key:`${C}-disabled`,class:this.classes("esri-distance-measurement-2d__measurement-item","esri-distance-measurement-2d__measurement-item--disabled"),"aria-disabled":"true"},a.jsx("span",{class:"esri-distance-measurement-2d__measurement-item-title"},f));u=p?a.jsx("section",{key:"measurement",class:"esri-distance-measurement-2d__measurement"},u(e.distance,K,"distance")):null;var g=`${b}-units`;g=p?a.jsx("section",
{key:"units",class:"esri-distance-measurement-2d__units"},a.jsx("label",{class:"esri-distance-measurement-2d__units-label",for:g},e.unit),a.jsx("div",{class:"esri-distance-measurement-2d__units-select-wrapper"},a.jsx("select",{class:"esri-distance-measurement-2d__units-select esri-select",id:g,onchange:this._changeUnit,bind:this,value:L},M.map(f=>{var l;return a.jsx("option",{key:f,value:f},G.isMeasurementSystem(f)?z.systems[f]:null==(l=z.units[f])?void 0:l.pluralCapitalized)})))):null;g=p?a.jsx("div",
{key:"settings",class:"esri-distance-measurement-2d__settings"},g):null;n=!B||A&&!p?null:a.jsx("div",{class:"esri-distance-measurement-2d__actions"},a.jsx("button",{disabled:n,class:this.classes("esri-distance-measurement-2d__clear-button esri-button esri-button--primary",n&&"esri-button--disabled"),bind:this,onclick:this._newMeasurement,title:e.newMeasurement,"aria-label":e.newMeasurement,type:"button"},e.newMeasurement));t=J?a.jsx("div",{class:"esri-distance-measurement-2d__container"},N,t,g,u,
n):null;return a.jsx("div",{class:"esri-distance-measurement-2d esri-widget esri-widget--panel"},t)};r._newMeasurement=function(){F.ignoreAbortErrors(this.viewModel.start())};r._changeUnit=function(b){b=b.target;if(b=b.options[b.selectedIndex])this.viewModel.unit=b.value};return q}(H);d.__decorate([k.aliasOf("viewModel.active")],c.prototype,"active",void 0);d.__decorate([h.property()],c.prototype,"iconClass",void 0);d.__decorate([h.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],
c.prototype,"label",void 0);d.__decorate([h.property(),w.messageBundle("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],c.prototype,"messages",void 0);d.__decorate([h.property(),w.messageBundle("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0);d.__decorate([k.aliasOf("viewModel.unit")],c.prototype,"unit",void 0);d.__decorate([k.aliasOf("viewModel.unitOptions")],c.prototype,"unitOptions",void 0);d.__decorate([k.aliasOf("viewModel.view")],c.prototype,"view",void 0);d.__decorate([h.property({type:x})],
c.prototype,"viewModel",void 0);d.__decorate([k.aliasOf("viewModel.visible")],c.prototype,"visible",void 0);d.__decorate([v.accessibleHandler()],c.prototype,"_newMeasurement",null);d.__decorate([v.accessibleHandler()],c.prototype,"_changeUnit",null);return c=d.__decorate([E.subclass("esri.widgets.DistanceMeasurement2D")],c)});