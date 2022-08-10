// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../layers/support/fieldUtils ../../../popup/content/Content ../../../popup/content/AttachmentsContent ../../../popup/content/CustomContent ../../../popup/FieldInfo ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/TextContent ../../../popup/ExpressionInfo ../../../intl/substitute ../../../intl/messages ../../../renderers/visualVariables/support/visualVariableUtils ../../../renderers/support/utils".split(" "),
function(m,t,x,F,G,H,u,y,I,z,A,p,v,B,C){function w(a){return"hasVisualVariables"in a&&a.hasVisualVariables()?a.visualVariables.filter(b=>B.viewScaleRE.test(b.valueExpression)||"target"in b&&"outline"===b.target?!1:!0):[]}function n(a,b){let k=null;"popupTemplate"in a&&a.popupTemplate&&(k=a.popupTemplate.fieldInfos);const c=a.getField(b);let f=null;k&&k.some(e=>e&&e.fieldName.toLowerCase()===c.name.toLowerCase()?(f=e.clone(),!0):!1);f||(a=-1<x.numericTypes.indexOf(c.type),b="integer"===c.type||"small-integer"===
c.type,f=new u({fieldName:c.name,isEditable:c.editable,visible:!0,format:a?{places:b?0:2,digitSeparator:!0}:null}));f.label||(f.label=c.alias);return f}function q(a){const {expression:b,title:k,returnType:c}=a;return new A({name:`expr${D++}`,expression:b,title:k,returnType:c})}function r(a){return new u({fieldName:`${"expression/"}${a.name}`,visible:!0,format:"number"===a.returnType?{places:2,digitSeparator:!0}:null})}let D=0;m.expressionFieldPrefix="expression/";m.getContentFromFieldInfos=async function(a,
b){const {fieldInfos:k,expressionInfos:c}=b;b=await v.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");if(2<k.length)return[new y({fieldInfos:k})];const f=[];for(const g of k){const h=g.fieldName;let d=g.label;if(!d){var e=a.getField(h);if(e)d=e.alias||h;else if(c){const l=h.split("expression/")[1];(e=c[c.findIndex(E=>E.name===l)])&&(d=e.title||e.name)}}f.push(new z({text:p.substitute(b.fieldInfo,{fieldLabel:d,fieldValue:`{${h}}`})}))}return f};m.getExpressionInfo=q;m.getFieldAndExpressionInfos=
async function(a){const b=await v.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),{renderer:k,layer:c,normFieldExpressionTemplate:f}=a;a=[];const e=[];var g=C.getAttributes(k,w);for(const d of g)if("field"===d.type)a.push(n(c,d.field));else if("normalized-field"===d.type){var h=c.getField(d.field);const l=c.getField(d.normalizationField);g=`
      $feature["${h.name}"];
      $feature["${l.name}"];
      ${"percentage"===f?`($feature["${h.name}"] / $feature["${l.name}"]) * 100;`:`$feature["${h.name}"] / $feature["${l.name}"];`}
      `;h="percentage"===f?p.substitute(b.normFieldLabelAsPercent,{expression1:h.alias,expression2:l.alias}):p.substitute(b.normFieldLabel,{expression1:h.alias,expression2:l.alias});g=q({type:"expression",expression:g,title:h,returnType:"number"});a.push(r(g),n(c,d.field),n(c,d.normalizationField));e.push(g)}else"expression"===d.type&&(g=q(d),a.push(r(g)),e.push(g));return{fieldInfos:t.unique(a,(d,l)=>d.fieldName===l.fieldName),expressionInfos:t.unique(e,(d,l)=>d.expression===l.expression)}};m.getFieldInfo=
n;m.getFieldInfoFromExpressionInfo=r;m.getPrimaryVisualVariables=w;m.hasNormalizedField=function(a){return"normalizationField"in a&&a.normalizationField?!0:"hasVisualVariables"in a&&a.hasVisualVariables()&&a.visualVariables.some(b=>!!("normalizationField"in b&&b.normalizationField))};Object.defineProperty(m,"__esModule",{value:!0})});