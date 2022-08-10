/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import o from"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"./asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"./mathUtils2.js";import"./vec3f64.js";import"./colorUtils.js";import s from"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import{a as t,p as e}from"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols.js";import"./colorUtils2.js";import"./MemCache.js";import"./ItemCache.js";import"./utils3.js";import"../symbols/support/cimSymbolUtils.js";import{h as r,f as l,k as i}from"./utils2.js";import"./widgetUtils.js";import"./projector.js";import"./index.js";import"./mat2d.js";import"./mat2df32.js";import{s as m,v as a,i as p}from"./renderUtils.js";const n=document.createElement("canvas");function c(c,y){var j,u;const b=null!=(null==y?void 0:y.size)?t(y.size):null,d=null!=(null==y?void 0:y.maxSize)?t(y.maxSize):null,h=null!=(null==y?void 0:y.opacity)?y.opacity:null,f=null!=(null==y?void 0:y.rotation)?y.rotation:"angle"in c?c.angle:null,g=r(c);let S=l(c);if(g&&!S){const o="type"in g?null:new s(g);"#ffffff"===(o?o.toHex():null)&&(S={color:"#bdc3c7",width:.75})}const v={shape:null,fill:null,stroke:S,offset:[0,0]};null!=(j=S)&&j.width&&(S.width=Math.min(S.width,80));const M=(null==(u=S)?void 0:u.width)||0;let L=null!=b&&(null==(null==y?void 0:y.scale)||(null==y?void 0:y.scale)),D=0,w=0,x=!1;switch(c.type){case"simple-marker":{const o=c.style,s=Math.min(null!=b?b:t(c.size),d||120);switch(D=s,w=s,o){case"circle":v.shape={type:"circle",cx:0,cy:0,r:.5*s},L||(D+=M,w+=M);break;case"cross":v.shape={type:"path",path:[{command:"M",values:[0,.5*w]},{command:"L",values:[D,.5*w]},{command:"M",values:[.5*D,0]},{command:"L",values:[.5*D,w]}]};break;case"diamond":v.shape={type:"path",path:[{command:"M",values:[0,.5*w]},{command:"L",values:[.5*D,0]},{command:"L",values:[D,.5*w]},{command:"L",values:[.5*D,w]},{command:"Z",values:[]}]},L||(D+=M,w+=M);break;case"square":v.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[D,0]},{command:"L",values:[D,w]},{command:"L",values:[0,w]},{command:"Z",values:[]}]},L||(D+=M,w+=M),f&&(x=!0);break;case"triangle":v.shape={type:"path",path:[{command:"M",values:[.5*D,0]},{command:"L",values:[D,w]},{command:"L",values:[0,w]},{command:"Z",values:[]}]},L||(D+=M,w+=M),f&&(x=!0);break;case"x":v.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[D,w]},{command:"M",values:[D,0]},{command:"L",values:[0,w]}]},f&&(x=!0);break;case"path":v.shape={type:"path",path:c.path||""},L||(D+=M,w+=M),f&&(x=!0),L=!0}break}case"simple-line":{const o=Math.min(null!=b?b:M,d||80),s=o>22?2*o:40;S.width=o,D=s,w=o,v.shape={type:"path",path:[{command:"M",values:[0,w]},{command:"L",values:[D,w]}]};break}case"picture-fill":case"simple-fill":D=Math.min(null!=b?b:22,d||120)+M,w=D,L=!0,v.shape="object"==typeof(null==y?void 0:y.symbolConfig)&&null!=y&&y.symbolConfig.isSquareFill?m.squareFill[0]:m.fill[0];break;case"picture-marker":{let o=t(c.width),s=t(c.height);const e=Math.max(o,s),r=o/s;o=r<=1?Math.ceil(e*r):e,s=r<=1?e:Math.ceil(e/r),D=Math.min(null!=b?b:o,d||120),w=Math.min(null!=b?b:s,d||120),v.shape={type:"image",x:-Math.round(D/2),y:-Math.round(w/2),width:D,height:w,src:c.url||""},f&&(x=!0);break}case"text":{const o=c,s=o.text||"Aa",r=o.font,l=Math.min(null!=b?b:t(r.size),d||120),i=function(o,s){const t=n.getContext("2d"),e=[];return s&&(s.weight&&e.push(s.weight),s.size&&e.push(s.size+"px"),s.family&&e.push(s.family)),t.font=e.join(" "),t.measureText(o).width}(s,{weight:r.weight,size:l,family:r.family}),m=/[\uE600-\uE6FF]/.test(s);D=m?l:i,w=l;let a=.25*function(o){if(0===o.length)return 0;if(o.length>2){const s=e(1),t=parseFloat(o);switch(o.slice(-2)){case"px":return t;case"pt":return t*s;case"in":return 72*t*s;case"pc":return 12*t*s;case"mm":return 2.8346456692913384*t*s;case"cm":return 28.346456692913385*t*s}}return parseFloat(o)}((r?l:0).toString());m&&(a+=5),v.shape={type:"text",text:s,x:0,y:a,align:"middle",decoration:r&&r.decoration,rotated:o.rotated,kerning:o.kerning},v.font=r&&{size:l,style:r.style,decoration:r.decoration,weight:r.weight,family:r.family};break}}if(!v.shape)return Promise.reject(new o("symbolPreview: renderPreviewHTML2D","symbol not supported."));const k=g,P=c.color;let U=null;return k&&"pattern"===k.type&&P&&"picture-fill"!==c.type?U=i(k.src,P.toCss(!0)).then((o=>(k.src=o,v.fill=k,v))):(v.fill=g,U=Promise.resolve(v)),U.then((o=>{const s=[[o]];if("object"==typeof(null==y?void 0:y.symbolConfig)&&null!=y&&y.symbolConfig.applyColorModulation){const t=.6*D;s.unshift([{...o,offset:[-t,0],fill:a(g,-.3)}]),s.push([{...o,offset:[t,0],fill:a(g,.3)}]),D+=2*t}return p(s,[D,w],{node:y&&y.node,scale:L,opacity:h,rotation:f,useRotationSize:x})}))}export{c as previewSymbol2D};