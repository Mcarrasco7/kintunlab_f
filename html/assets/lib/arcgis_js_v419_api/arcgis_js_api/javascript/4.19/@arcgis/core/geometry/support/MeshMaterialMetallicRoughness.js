/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import{i as s}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import r from"../../Color.js";import"../../chunks/screenshotUtils.js";import i from"./MeshTexture.js";import n from"./MeshMaterial.js";var l;let u=l=class extends n{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const o=s(e)?e.get(this):null;if(o)return o;const r=new l(this.clonePropertiesWithDeduplication(t));return s(e)&&e.set(this,r),r}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?this.emissiveColor.clone():null,emissiveTexture:this.emissiveTexture?this.emissiveTexture.cloneWithDeduplication(e):null,occlusionTexture:this.occlusionTexture?this.occlusionTexture.cloneWithDeduplication(e):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?this.metallicRoughnessTexture.cloneWithDeduplication(e):null}}};e([t({type:r,json:{write:!0}})],u.prototype,"emissiveColor",void 0),e([t({type:i,json:{write:!0}})],u.prototype,"emissiveTexture",void 0),e([t({type:i,json:{write:!0}})],u.prototype,"occlusionTexture",void 0),e([t({type:Number,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),e([t({type:Number,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),e([t({type:i,json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),u=l=e([o("esri.geometry.support.MeshMaterialMetallicRoughness")],u);var c=u;export default c;
