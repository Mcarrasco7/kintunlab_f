// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("./chunks/_rollupPluginBabelHelpers ./chunks/tslib.es6 ./core/has ./core/lang ./core/maybe ./core/Logger ./core/accessorSupport/ensureType ./core/accessorSupport/decorators/property ./core/jsonMap ./core/accessorSupport/decorators/subclass ./core/urlUtils ./core/uuid ./portal/support/resourceExtension ./core/JSONSupport ./geometry/support/jsonUtils ./geometry ./PopupTemplate ./symbols ./core/uid".split(" "),function(k,d,c,l,m,z,A,f,B,t,C,D,E,u,v,w,x,y,q){var n;c=n=function(r){function h(...a){a=
r.call(this,...a)||this;a.isAggregate=!1;a.layer=null;a.popupTemplate=null;a.sourceLayer=null;Object.defineProperty(k._assertThisInitialized(a),"uid",{value:q.generateUID(),configurable:!0});return a}k._inheritsLoose(h,r);var e=h.prototype;e.normalizeCtorArgs=function(a,b,g,p){return a&&!a.declaredClass?a:{geometry:a,symbol:b,attributes:g,popupTemplate:p}};e.getEffectivePopupTemplate=function(a=!1){return this.popupTemplate?this.popupTemplate:this.sourceLayer?"popupTemplate"in this.sourceLayer&&this.sourceLayer.popupTemplate?
this.sourceLayer.popupTemplate:a&&"defaultPopupTemplate"in this.sourceLayer&&m.isSome(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null};e.getAttribute=function(a){return this.attributes&&this.attributes[a]};e.setAttribute=function(a,b){if(this.attributes){const g=this.getAttribute(a);this.attributes[a]=b;this._notifyLayer("attributes",g,b,a)}else this.attributes={[a]:b},this._notifyLayer("attributes",void 0,b,a)};e.getObjectId=function(){return this.sourceLayer?
"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null:null};e.toJSON=function(){return{geometry:m.isSome(this.geometry)?this.geometry.toJSON():null,symbol:m.isSome(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}};e.clone=function(){return new n(this.cloneProperties())};e.cloneProperties=function(){return{attributes:l.clone(this.attributes),geometry:l.clone(this.geometry),
layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:l.clone(this.symbol),visible:this.visible}};e._notifyLayer=function(a,b,g,p){this.layer&&"graphicChanged"in this.layer&&(b={graphic:this,property:a,oldValue:b,newValue:g},"attributes"===a&&(b.attributeName=p),this.layer.graphicChanged(b))};k._createClass(h,[{key:"attributes",set:function(a){const b=this._get("attributes");b!==a&&(this._set("attributes",a),this._notifyLayer("attributes",
b,a))}},{key:"geometry",set:function(a){const b=this._get("geometry");b!==a&&(this._set("geometry",a),this._notifyLayer("geometry",b,a))}},{key:"symbol",set:function(a){const b=this._get("symbol");b!==a&&(this._set("symbol",a),this._notifyLayer("symbol",b,a))}},{key:"visible",set:function(a){const b=this._get("visible");b!==a&&(this._set("visible",a),this._notifyLayer("visible",b,a))}}]);return h}(u.JSONSupport);d.__decorate([f.property({value:null})],c.prototype,"attributes",null);d.__decorate([f.property({value:null,
types:w.geometryTypes,json:{read:v.fromJSON}})],c.prototype,"geometry",null);d.__decorate([f.property({type:Boolean})],c.prototype,"isAggregate",void 0);d.__decorate([f.property()],c.prototype,"layer",void 0);d.__decorate([f.property({type:x})],c.prototype,"popupTemplate",void 0);d.__decorate([f.property()],c.prototype,"sourceLayer",void 0);d.__decorate([f.property({value:null,types:y.symbolTypes})],c.prototype,"symbol",null);d.__decorate([f.property({type:Boolean,value:!0})],c.prototype,"visible",
null);c=n=d.__decorate([t.subclass("esri.Graphic")],c);(c||(c={})).generateUID=q.generateUID;return c});