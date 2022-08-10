/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{clone as t}from"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{a as o}from"../chunks/JSONSupport.js";import"../core/urlUtils.js";import{cast as p}from"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as n}from"../chunks/reader.js";import{w as i}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import m from"./ExpressionInfo.js";import"./elements/FieldElement.js";import{ensureType as l,fromJSON as u,toJSON as c,buildTypeMaps as j}from"./support/elements.js";import"./elements/inputs/Input.js";import"./elements/inputs/TextInput.js";import"./elements/inputs/BarcodeScannerInput.js";import"./elements/inputs/ComboBoxInput.js";import"./elements/inputs/DateTimePickerInput.js";import"./elements/inputs/RadioButtonsInput.js";import"./elements/inputs/TextAreaInput.js";import"./elements/inputs/TextBoxInput.js";import"./elements/support/inputs.js";import a from"./elements/GroupElement.js";var d;const h=j(a);let f=d=class extends o{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.title=null}castElements(e){return l(e,h)}readElements(e,t){return u(t.formElements,h)}writeElements(e,t){t.formElements=c(e,h)}clone(){return new d({description:this.description,expressionInfos:t(this.expressionInfos),elements:t(this.elements),title:this.title})}};e([s({type:String,json:{write:!0}})],f.prototype,"description",void 0),e([s({json:{write:!0}})],f.prototype,"elements",void 0),e([p("elements")],f.prototype,"castElements",null),e([n("elements",["formElements"])],f.prototype,"readElements",null),e([i("elements")],f.prototype,"writeElements",null),e([s({type:[m],json:{write:!0}})],f.prototype,"expressionInfos",void 0),e([s({type:String,json:{write:!0}})],f.prototype,"title",void 0),f=d=e([r("esri.form.FormTemplate")],f);var k=f;export default k;