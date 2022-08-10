/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import{L as t}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import s from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{E as o}from"../../chunks/Evented.js";import"../../core/Collection.js";import{a as n}from"../../chunks/Promise.js";import"../../core/urlUtils.js";import"../../chunks/resourceExtension.js";import{I as l}from"../../chunks/Identifiable.js";import"../../core/Handles.js";import"../../core/watchUtils.js";import{HandleOwnerMixin as a}from"../../core/HandleOwner.js";let p=class extends(a(l(n(o.EventedMixin(s))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const r=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";throw t.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${r}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};e([r()],p.prototype,"fullOpacity",null),e([r()],p.prototype,"layer",void 0),e([r()],p.prototype,"parent",void 0),e([r({readOnly:!0})],p.prototype,"suspended",null),e([r({readOnly:!0})],p.prototype,"suspendInfo",null),e([r({readOnly:!0})],p.prototype,"legendEnabled",null),e([r({type:Boolean,readOnly:!0})],p.prototype,"updating",null),e([r()],p.prototype,"visible",null),p=e([i("esri.views.layers.LayerView")],p);var d=p;export default d;
