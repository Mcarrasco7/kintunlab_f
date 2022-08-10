/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import i from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import{substitute as o}from"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import s from"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import{v as n,D as l,g as a}from"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import{isNumericField as u,isStringField as p,isDateField as d,TypeValidationError as m,validateFieldValue as c,getFeatureEditFields as h,getFeatureGeometryFields as y,NumericRangeValidationError as g,getFieldRange as f}from"../../layers/support/fieldUtils.js";const v={type:"number"},j={type:"number",intlOptions:{notation:"scientific"}},b={type:"date",intlOptions:{day:"2-digit",month:"2-digit",year:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}};let _=class extends i{constructor(e){super(e),this.arcade=null,this.config=null,this.feature=null,this.field=null,this.initialFeature=null,this.layer=null,this.description=null,this.editorType=null,this.error=null,this.format=null,this.group=null,this.hint=null,this.messages=null,this.name=null}get compiledFunc(){var e;const{arcade:t}=this;return t&&t.arcadeUtils.createFunction(null==(e=this.config)?void 0:e.visibilityExpression)}get compiledRequiredFunc(){var e;const{arcade:t}=this;return t&&t.arcadeUtils.createFunction(null==(e=this.config)?void 0:e.requiredExpression)}get evaluatedRequirement(){const e=this.compiledRequiredFunc;if(!e)return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}get evaluatedVisibility(){const e=this.compiledFunc;if(!e)return null;const{arcade:t}=this;return t.arcadeUtils.executeFunction(e,t.arcadeUtils.createExecContext(this.feature))}get domain(){var e,t;const{typeIdField:i}=this.layer,r=i===this.name,o=null==(e=this.field)?void 0:e.domain;if(r&&!o)return new s({name:"__internal-type-based-coded-value-domain__",codedValues:this.layer.types.map((({id:e,name:t})=>({code:e,name:t})))});const{feature:n}=this,l=i&&this.layer.getFieldDomain(this.name,{feature:n})||o,a=null==(t=this.config)?void 0:t.domain;return this._isDomainCompatible(a)?a:l}get editable(){var e;return this.layer.capabilities.operations.supportsEditing&&this.field.editable&&!1!==(null==(e=this.config)?void 0:e.editable)}get errorMessage(){return this._toErrorMessage()}get includeTime(){var e;const t=null==(e=this.config)?void 0:e.includeTime;return void 0===t||t}get label(){var e;return(null==(e=this.config)?void 0:e.label)||this.field.alias||this.field.name}get maxLength(){var e,t;if("date"===this.type)return-1;const i=null==(e=this.field)?void 0:e.length,r=null==(t=this.config)?void 0:t.maxLength;return!isNaN(r)&&r>=-1&&(-1===i||r<=i)?r:i}get minLength(){var e,t;if("date"===this.type)return-1;const i=null==(e=this.field)?void 0:e.length,r=null==(t=this.config)?void 0:t.minLength;return!isNaN(r)&&r>=-1&&(-1===i||r<=i)?r:-1}get required(){var e,t;if(!this.editable)return!1;if(!(null==(e=this.field)?void 0:e.nullable))return!0;if("boolean"==typeof this.evaluatedRequirement)return this.evaluatedRequirement;return!0===(null==(t=this.config)?void 0:t.required)}get type(){const{field:e}=this;return u(e)?"number":p(e)?"text":d(e)?"date":"unsupported"}get valid(){const e=this.editable?this._validate():null;return this._set("error",e),null===e}get value(){return this._get("value")}set value(e){this.notifyChange("evaluatedVisibility"),this._set("value",e)}get visible(){if(this._isEditorField())return!1;return"boolean"==typeof this.evaluatedVisibility?this.evaluatedVisibility:!!this.config||this._shownByDefault()}_isDomainCompatible(e){const{field:t}=this;if("coded-value"===(null==e?void 0:e.type)){const i=typeof e.codedValues[0].code;if("string"===i&&p(t)||"number"===i&&u(t))return!0}return!!("range"===(null==e?void 0:e.type)&&u(t)||d(t))}_validate(){const{domain:e,field:t,initialFeature:i,minLength:r,required:o,type:s,value:l}=this,a=o&&null===l;return a||i.getAttribute(t.name)!==l?"text"===s&&r>-1&&"string"==typeof l&&l.length<r?"length-validation-error::too-short":e?null!==l||o?n(e,l):null:a?m.INVALID_TYPE:c(t,l):null}_shownByDefault(){var e;const t=null==(e=this.field)?void 0:e.type;return"oid"!==t&&"global-id"!==t&&!this._isGeometryField()}_isEditorField(){return h(this.layer).indexOf(this.name)>-1}_isGeometryField(){return y(this.layer).indexOf(this.name)>-1}_toErrorMessage(){const{domain:e,field:t,messages:i,minLength:r,value:s,required:n,type:u}=this,p=this.error;if(n&&null===s)return i.validationErrors.cannotBeNull;if(p===l.VALUE_OUT_OF_RANGE||p===g.OUT_OF_RANGE){const r=a(e)||f(t);return o(i.validationErrors.outsideRange,r,{format:{max:"date"===u?b:r.isInteger?v:j,min:"date"===u?b:r.isInteger?v:j}})}return p===l.INVALID_CODED_VALUE?i.validationErrors.invalidCodedValue:p===m.INVALID_TYPE?i.validationErrors.invalidType:"length-validation-error::too-short"===p?o(i.validationErrors.tooShort,{min:r}):null}};e([t()],_.prototype,"arcade",void 0),e([t()],_.prototype,"compiledFunc",null),e([t()],_.prototype,"compiledRequiredFunc",null),e([t()],_.prototype,"config",void 0),e([t()],_.prototype,"evaluatedRequirement",null),e([t()],_.prototype,"evaluatedVisibility",null),e([t()],_.prototype,"feature",void 0),e([t()],_.prototype,"field",void 0),e([t()],_.prototype,"initialFeature",void 0),e([t()],_.prototype,"layer",void 0),e([t({aliasOf:"config.description"})],_.prototype,"description",void 0),e([t()],_.prototype,"domain",null),e([t()],_.prototype,"editable",null),e([t({aliasOf:"config.editorType"})],_.prototype,"editorType",void 0),e([t({readOnly:!0})],_.prototype,"error",void 0),e([t({dependsOn:["error","messages","value"]})],_.prototype,"errorMessage",null),e([t({aliasOf:"config.format"})],_.prototype,"format",void 0),e([t()],_.prototype,"group",void 0),e([t({aliasOf:"config.hint"})],_.prototype,"hint",void 0),e([t()],_.prototype,"includeTime",null),e([t()],_.prototype,"label",null),e([t()],_.prototype,"maxLength",null),e([t()],_.prototype,"minLength",null),e([t()],_.prototype,"messages",void 0),e([t({aliasOf:"field.name"})],_.prototype,"name",void 0),e([t()],_.prototype,"required",null),e([t()],_.prototype,"type",null),e([t()],_.prototype,"valid",null),e([t({value:null})],_.prototype,"value",null),e([t()],_.prototype,"visible",null),_=e([r("esri.widgets.FeatureForm.InputField")],_);var k=_;export default k;