/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{clone as o}from"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import s from"../core/Error.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import i from"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import{e as m}from"../chunks/enumeration.js";import"../chunks/reader.js";import{w as l}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import"./Symbol.js";import"./Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"./edges/Edges3D.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"./ExtrudeSymbol3DLayer.js";import"./patterns/StylePattern3D.js";import"./FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"./Font.js";import p from"./IconSymbol3DLayer.js";import"./LineSymbol3DLayer.js";import a from"./ObjectSymbol3DLayer.js";import"./PathSymbol3DLayer.js";import n from"./TextSymbol3DLayer.js";import"./WaterSymbol3DLayer.js";import c from"./Symbol3D.js";import"../chunks/Thumbnail.js";import"./callouts/Callout3D.js";import"./callouts/LineCallout3D.js";import{h as y,a as u,b as j,c as b}from"../chunks/Symbol3DVerticalOffset.js";var h;const f=i.ofType({base:null,key:"type",typeMap:{icon:p,object:a,text:n}}),k=i.ofType({base:null,key:"type",typeMap:{icon:p,object:a}});let S=h=class extends c{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.symbolLayers=new f,this.type="point-3d"}writeSymbolLayers(t,o,r,e){const i=t.filter((t=>"text"!==t.type));if(e&&e.messages&&i.length<t.length){const o=t.find((t=>"text"===t.type));e.messages.push(new s("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:o}))}o[r]=i.map((t=>t.write({},e))).toArray()}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return!1;for(const t of this.symbolLayers.items)switch(t.type){case"icon":case"text":case"object":continue;default:return!1}return!0}hasVisibleCallout(){return y(this)}hasVisibleVerticalOffset(){return u(this)}clone(){return new h({verticalOffset:o(this.verticalOffset),callout:o(this.callout),styleOrigin:o(this.styleOrigin),symbolLayers:o(this.symbolLayers),thumbnail:o(this.thumbnail)})}static fromSimpleMarkerSymbol(t){return new h({symbolLayers:[p.fromSimpleMarkerSymbol(t)]})}static fromPictureMarkerSymbol(t){return new h({symbolLayers:[p.fromPictureMarkerSymbol(t)]})}static fromCIMSymbol(t){if(t.data&&t.data.symbol){const o=t.data.symbol;if("CIMPointSymbol"===o.type&&o.callout)return new h({symbolLayers:[p.fromCIMSymbol(t)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}})}return new h({symbolLayers:[p.fromCIMSymbol(t)]})}static fromTextSymbol(t){return new h({symbolLayers:[n.fromTextSymbol(t)]})}};t([r({type:j,json:{write:!0}})],S.prototype,"verticalOffset",void 0),t([r(b)],S.prototype,"callout",void 0),t([r({type:f,json:{type:k,origins:{"web-scene":{type:k}}}})],S.prototype,"symbolLayers",void 0),t([l("web-scene","symbolLayers")],S.prototype,"writeSymbolLayers",null),t([m({PointSymbol3D:"point-3d"},{readOnly:!0})],S.prototype,"type",void 0),S=h=t([e("esri.symbols.PointSymbol3D")],S);var d=S;export default d;
