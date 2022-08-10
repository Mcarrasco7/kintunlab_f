/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{clone as t}from"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{u as s,i as e}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import{r as p}from"../../chunks/reader.js";import{w as n}from"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import l from"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols.js";import"../../chunks/uid.js";import m from"../../Graphic.js";import"../../chunks/unitUtils.js";import"../../chunks/utils4.js";import"../../tasks/Task.js";import"../../chunks/scaleUtils.js";import{S as a,L as c,A as u}from"../../chunks/suggestLocations.js";import"../../tasks/support/AddressCandidate.js";import"../../chunks/commonProperties3.js";import y from"../../tasks/Locator.js";import j from"./SearchSource.js";import{c as d,s as h}from"../../chunks/geometryUtils3.js";function g(o,t){return o.location?function(o,t){const{source:s,spatialReference:e,location:r,sourceIndex:i,view:p}=o,{apiKey:n,locator:l,zoomScale:m,defaultZoomScale:a}=s,u=p&&p.scale,y=t&&t.signal,j=new c;j.location=r,n&&(j.apiKey=n);e&&(j.outSpatialReference=e);return l.locationToAddress(j,{signal:y}).then((o=>v([o],{sourceIndex:i,scale:u,view:p,zoomScale:m,defaultZoomScale:a})))}(o,t):function(o,t){const{source:e,suggestResult:r,spatialReference:i,view:p,maxResults:n,sourceIndex:l}=o,m=e&&e.zoomScale,a=e&&e.defaultZoomScale;if(!r.text.trim())return Promise.resolve(null);const c=!r.key&&e.prefix?e.prefix:"",y=!r.key&&e.suffix?e.suffix:"",j=`${c}${r.text}${y}`,d=new u,{apiKey:h,locator:g}=e,f=p&&p.scale,S=L(e,p),k=t&&t.signal;h&&(d.apiKey=h);if(!g)return Promise.resolve(null);e.categories&&(d.categories=e.categories);e.locationType&&(d.locationType=e.locationType);i&&(d.outSpatialReference=i);const x=b(p);x&&(d.location=x);d.maxLocations=n,S&&(d.searchExtent=s(S));e.countryCode&&(d.countryCode=e.countryCode);const{key:w}=r;w&&(d.magicKey=w);d.address={},d.address[e.singleLineFieldName||"Single Line Input"]=j,e.outFields&&(d.outFields=e.outFields);return g.addressToLocations(d,{signal:k}).then((o=>v(o,{key:w,scale:f,sourceIndex:l,view:p,zoomScale:m,defaultZoomScale:a})))}(o,t)}function b(o){const t=null==o?void 0:o.scale;return"number"==typeof t&&t<=3e5?o.get("extent.center"):null}function f(o,t){const{source:e,spatialReference:r,view:i,suggestTerm:p,maxSuggestions:n,sourceIndex:l}=o,m=new a,{apiKey:c,locator:u}=e,y=L(e,i),j=t&&t.signal;if(!u)return Promise.resolve(null);c&&(m.apiKey=c),e.categories&&(m.categories=e.categories),r&&(m.outSpatialReference=r);const d=b(i);d&&(m.location=d);if(!p.trim())return Promise.resolve(null);const{prefix:h="",suffix:g=""}=e,f=`${h}${p}${g}`;return m.text=f,y&&(m.searchExtent=s(y)),m.maxSuggestions=n,e.countryCode&&(m.countryCode=e.countryCode),u.suggestLocations(m,{signal:j}).then((o=>function(o,t){return o.map((o=>function(o,t){return{text:o.text,key:o.magicKey,sourceIndex:t}}(o,t)))}(o,l)))}function S(o){return!!o&&/(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(o)}function k(o){return!!o&&/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(o)}function x(o){return!!o&&/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(o)}function L(o,t){const{filter:s,withinViewEnabled:e}=o,r=t&&t.scale,i=t&&t.extent,p=s&&s.geometry;return d(p,t,r)||(e&&i?i:void 0)}function v(o,t){return o.map((o=>function(o,t){const{key:s,scale:r,sourceIndex:i,view:p,zoomScale:n,defaultZoomScale:a}=t,{attributes:c,extent:u,location:y,address:j}=o,g=new m({geometry:y,attributes:c}),b=u||y,f=d(b,p,r),S="number"==typeof n?h(f,p,n):"number"==typeof a&&"point"===b.type?h(f,p,a):f,k=y?`${y.x},${y.y}`:"",x=j||k,L=g.clone();return e(S)&&(L.geometry=l.fromExtent(S)),{extent:S,feature:g,target:L,key:s,name:x,sourceIndex:i}}(o,t)))}var w;let C=w=class extends j{constructor(){super(...arguments),this.apiKey=null,this.categories=null,this.countryCode=null,this.defaultZoomScale=null,this.locator=null,this.locationType=null,this.name="",this.placeholder="",this.searchTemplate="",this.singleLineFieldName=null,this.suggestionsEnabled=null,this.zoomScale=null,this.getResults=(o,t)=>g({source:this,...o},t),this.getSuggestions=(o,t)=>f({source:this,...o},t)}readLocator(o,t){const{url:s}=t;return s?new y({url:s}):null}writeLocator(o,t){t.url=o?o.url:null}clone(){return new w({apiKey:this.apiKey,autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?t(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?t(this.categories):null,countryCode:this.countryCode,locationType:this.locationType,locator:this.locator,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})}};o([r()],C.prototype,"apiKey",void 0),o([r()],C.prototype,"categories",void 0),o([r()],C.prototype,"countryCode",void 0),o([r({json:{write:!0}})],C.prototype,"defaultZoomScale",void 0),o([r({type:y})],C.prototype,"locator",void 0),o([p("locator",["url"])],C.prototype,"readLocator",null),o([n("locator")],C.prototype,"writeLocator",null),o([r()],C.prototype,"locationType",void 0),o([r({json:{write:!0}})],C.prototype,"name",void 0),o([r({json:{write:!0}})],C.prototype,"placeholder",void 0),o([r()],C.prototype,"searchTemplate",void 0),o([r({json:{write:!0}})],C.prototype,"singleLineFieldName",void 0),o([r({json:{read:{source:"suggest"},write:{target:"suggest"}}})],C.prototype,"suggestionsEnabled",void 0),o([r({json:{write:!0}})],C.prototype,"zoomScale",void 0),C=w=o([i("esri.widgets.Search.LocatorSearchSource")],C);var I=C;export default I;export{k as a,S as b,x as i};