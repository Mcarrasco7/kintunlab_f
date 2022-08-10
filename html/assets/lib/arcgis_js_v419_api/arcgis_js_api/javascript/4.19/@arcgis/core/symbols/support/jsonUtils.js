/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import o from"../../core/Error.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../Symbol.js";import"../CIMSymbol.js";import"../Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../edges/Edges3D.js";import"../edges/SketchEdges3D.js";import"../edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../ExtrudeSymbol3DLayer.js";import"../LineSymbol.js";import"../LineSymbolMarker.js";import"../SimpleLineSymbol.js";import"../FillSymbol.js";import"../patterns/StylePattern3D.js";import"../FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../Font.js";import"../IconSymbol3DLayer.js";import"../LineSymbol3DLayer.js";import"../ObjectSymbol3DLayer.js";import"../PathSymbol3DLayer.js";import"../TextSymbol3DLayer.js";import"../WaterSymbol3DLayer.js";import s from"../Symbol3D.js";import"../../chunks/Thumbnail.js";import"../callouts/Callout3D.js";import"../callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../LabelSymbol3D.js";import"../LineSymbol3D.js";import"../MarkerSymbol.js";import"../MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../PictureFillSymbol.js";import"../PictureMarkerSymbol.js";import"../PointSymbol3D.js";import"../PolygonSymbol3D.js";import"../SimpleFillSymbol.js";import"../SimpleMarkerSymbol.js";import"../TextSymbol.js";import r from"../WebStyleSymbol.js";import{readSymbol as t}from"../../symbols.js";import{t as e}from"../../chunks/symbolConversion.js";function i(t,i,m,p){const l=function(t,i,m){if(!t)return null;if(m&&"web-scene"===m.origin&&!(t instanceof s)&&!(t instanceof r)){const s="cim"!==t.type?e(t):{symbol:null,error:new o("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:t})};return s.symbol?s.symbol.write(i,m):(m.messages&&m.messages.push(new o("symbol:unsupported",`Symbols of type '${t.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:t,context:m,error:s.error})),null)}if(m&&"web-map"===m.origin&&"web-style"===t.type)return m.messages&&m.messages.push(new o("symbol:unsupported",`Symbols of type '${t.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:t,context:m})),null;return t.write(i,m)}(t,{},p);l&&(i[m]=l)}function m(o,s){return t(o,null,s)}export{m as fromJSON,i as write};
