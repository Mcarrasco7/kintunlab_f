// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../support/widgetUtils ../../../chunks/index ../../Widget".split(" "),function(b,h,c,p,k,q,r,d,t,l,u,v,w,x,e,
m){b.Label=function(g){function f(a,n){a=g.call(this,a,n)||this;a.level=null;a.active=!1;a.hovering=!1;a.messages={clearLevel:"",selectLevel:""};a.onClear=()=>{};return a}h._inheritsLoose(f,g);f.prototype.render=function(){if(k.isNone(this.level))return e.jsx("div",{class:"esri-building-level-picker-label--empty",title:this.messages.selectLevel},this.messages.selectLevel);const a=this.messages.clearLevel;return e.jsx("div",{bind:this,class:this.classes("esri-building-level-picker-label",{["esri-building-level-picker-label--active"]:this.active,
["esri-building-level-picker-label--hover"]:this.hovering}),onclick:this.onClear,title:a,"aria-label":a},e.jsx("span",null,this.level),e.jsx("button",{bind:this,class:this.classes("esri-building-level-picker-label__clear-button","esri-icon-close"),disabled:!this.active,onclick:this.onClear,type:"button"}))};return f}(m);c.__decorate([d.property()],b.Label.prototype,"level",void 0);c.__decorate([d.property({nonNullable:!0})],b.Label.prototype,"active",void 0);c.__decorate([d.property({nonNullable:!0})],
b.Label.prototype,"hovering",void 0);c.__decorate([d.property()],b.Label.prototype,"messages",void 0);c.__decorate([d.property({nonNullable:!0})],b.Label.prototype,"onClear",void 0);b.Label=c.__decorate([l.subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.Label")],b.Label);Object.defineProperty(b,"__esModule",{value:!0})});