// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../PopupTemplate","../../intl/messages","./support/utils"],function(g,k,l,m,e){async function n(a){const {layer:b,renderer:c}=a;await b.load();a=c||b.renderer;if("simple"!==a.type)throw new k("simple-popup:invalid-parameters","renderer.type must be 'simple'");return{layer:b,renderer:a}}async function h(a,b,c="divide"){const {fieldInfos:d,expressionInfos:f}=await e.getFieldAndExpressionInfos({renderer:a,layer:b,normFieldExpressionTemplate:c});return new l({content:await e.getContentFromFieldInfos(b,
{fieldInfos:d,expressionInfos:f}),expressionInfos:f,fieldInfos:d})}g.getTemplates=async function(a){const [{renderer:b,layer:c},d]=await Promise.all([n(a),m.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);a=[];if(!e.getPrimaryVisualVariables(b).length)return null;const f={name:"simple",title:d.simple,value:await h(b,c)};e.hasNormalizedField(b)&&a.push({name:"simple-percent",title:d.simpleNormFieldAsPercent,value:await h(b,c,"percentage")});return{primaryTemplate:f,secondaryTemplates:a}};
Object.defineProperty(g,"__esModule",{value:!0})});