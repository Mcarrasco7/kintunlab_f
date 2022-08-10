/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"./lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import{b as s}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as t,v as n}from"./accessorSupport/decorators/property.js";import r,{r as d}from"./Accessor.js";import"../chunks/PropertyOrigin.js";import{schedule as i}from"./scheduling.js";import"./promiseUtils.js";import"../chunks/Message.js";import"./Error.js";import"../chunks/ensureType.js";import{subclass as a}from"./accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"./Collection.js";import o from"./Handles.js";import{init as h,on as l}from"./watchUtils.js";let c=class extends r{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new o,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,s,t,n=0){const r=0!=(1&n),d=++this.handleId;r||this.installSyncUpdatingWatch(e,s,d);const i=0!=(2&n)?h(e,s,t,r):e.watch(s,t,r);return this.handles.add(i,d),{remove:()=>{this.handles.remove(d)}}}addOnCollectionPropertyChange(e,s,t,n=0){const r=0!=(2&n),d=++this.handleId;return this.handles.add([l(e,s,"after-changes",this.createSyncUpdatingCallback()),l(e,s,"change",t,r?e=>{t({added:e.items,removed:[],moved:[],target:e})}:void 0)],d),{remove:()=>{this.handles.remove(d)}}}addOnCollectionChange(e,s,t=0){const n=0!=(2&t),r=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",s)],r),n&&s({added:e.items,removed:[],moved:[],target:e}),{remove:()=>{this.handles.remove(r)}}}addPromise(e){if(s(e))return e;const t=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0);const n=()=>this.handles.remove(t);return e.then(n,n),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}installSyncUpdatingWatch(e,s,t){const r=this.createSyncUpdatingCallback(),i=d((()=>n(e,s)),r);return this.handles.add(i,t),i}createSyncUpdatingCallback(){return()=>{this.handles.remove(p),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(i((()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p))})),p)}}};e([t({readOnly:!0})],c.prototype,"updating",void 0),c=e([a("esri.views.support.WatchUpdatingTracking")],c);const p=-42,m=s=>{let n=class extends s{destroy(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy())}get handles(){return this._get("handles")||new o}get updatingHandles(){return this._get("updatingHandles")||new c}};return e([t({readOnly:!0})],n.prototype,"handles",null),e([t({readOnly:!0})],n.prototype,"updatingHandles",null),n=e([a("esri.core.HandleOwner")],n),n};let g=class extends(m(r)){};g=e([a("esri.core.HandleOwner")],g);export{g as HandleOwner,m as HandleOwnerMixin,c as W};
