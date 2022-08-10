/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../core/lang.js";import"../chunks/deprecate.js";import"../chunks/object.js";import"../kernel.js";import"../config.js";import{i as t}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/Promise.js";import"../core/urlUtils.js";import{aliasOf as i}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/resourceExtension.js";import"../chunks/locale.js";import"../chunks/number.js";import{substitute as a}from"../intl.js";import"../request.js";import"../chunks/assets.js";import"../core/Handles.js";import"../core/watchUtils.js";import"../chunks/domUtils.js";import{s as o}from"../chunks/widgetUtils.js";import"../chunks/projector.js";import{m as n}from"../chunks/messageBundle.js";import{j as l}from"../chunks/index.js";import d from"./Widget.js";import u from"./Histogram/HistogramViewModel.js";var c;const h="esri-histogram",p="esri-histogram--horizontal",m="esri-histogram--vertical",g="esri-histogram__content",b="esri-histogram__svg",v="esri-histogram__bar",_="esri-histogram__bars",f="esri-histogram__label",j="esri-histogram__data-lines",L="esri-histogram__data-lines-subgroup",y="esri-histogram__data-line",x="esri-histogram__average-label",C="esri-histogram__average-data-line",w="esri-histogram__average-symbol",k="esri-widget",F="esri-disabled";let M=c=class extends d{constructor(e,t){super(e,t),this._containerNode=null,this._defaultBarColor="#d8d8d8",this.average=null,this.barCreatedFunction=null,this.bins=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.dataLineUpdatedFunction=null,this.label=void 0,this.labelFormatFunction=null,this.max=null,this.messages=null,this.min=null,this.state=null,this.viewModel=new u}set layout(e){"vertical"!==e&&(e="horizontal"),this._set("layout",e)}static fromHistogramResult(e){const{bins:t,maxValue:s,minValue:r}=e;return new c({bins:t,max:s,min:r})}render(){const{label:e,layout:t,state:s}=this,r=this.classes(h,k,"horizontal"===t?p:m,"disabled"===s?F:null);return l("div",{"aria-label":e,afterCreate:o,bind:this,class:r,"data-node-ref":"_containerNode"},"ready"===s?this.renderContent():null)}renderContent(){if(this._containerNode)return l("div",{class:g},l("svg",{class:b,xmlns:"http://www.w3.org/2000/svg"},this.renderBarsGroup(),this.renderLinesGroup()))}renderBarsGroup(){return l("g",{class:this.classes(_)},this.renderBars())}renderBars(){const{layout:e,viewModel:{binRange:t,range:s}}=this;if(!t||!s)return;const r=t/s,[i,a]=this._getContainerDimensions();if(0===i&&0===a)return;if(0===i&&0!==a)return void this.scheduleRender();const[o,n]="vertical"===e?[i*r,a]:[i,a*r];return this._getBarDimensions(o,n).map((([e,t],s)=>this.renderBar(s,e,t)))}renderBar(e,t,s){const{bins:r,layout:i,max:o,messages:n,viewModel:{range:d}}=this,[u,c]=this._getContainerDimensions(),h=r.slice()[e],{count:p,maxValue:m,minValue:g}=h,b=o-m,[_,f]="vertical"===i?[0,b*(u/d)]:[c-s-b*(c/d),u-t],j=a(n.barLabel,{count:p,maxValue:m,minValue:g});return l("rect",{"aria-label":j,afterCreate:this._afterBarCreate,bind:this,class:v,"data-index":e,fill:this._defaultBarColor,height:t,role:"img","shape-rendering":"crispEdges","stroke-width":"0",width:s,x:_,y:f})}renderLinesGroup(){return l("g",{class:this.classes(j)},this.renderAverageLine(),this.renderCustomLines())}renderAverageLine(){const{average:e}=this;if(!t(e))return;const s=[l("tspan",{class:this.classes(w)},"x̄ "),l("tspan",{class:this.classes(x)},this.labelFormatFunction?this.labelFormatFunction(e,"average"):e)];return l("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(L)},this.renderLine(e,this.classes(C)),this.renderLabel(e,s))}renderCustomLines(){if(this.dataLines&&this.dataLines.length)return this.dataLines.map((({value:e,label:t},s)=>this.renderLineSubgroup(s,e,t)))}renderLineSubgroup(e,t,s){return l("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(L),"data-index":e},this.renderLine(t),this.renderLabel(t,s))}renderLine(e,t){const[s,r,i,a]=this._getLinePosition(e);return l("line",{class:this.classes(y,t),x1:s,x2:r,y1:i,y2:a,"shape-rendering":"crispEdges"})}renderLabel(e,t,s){const[r,i]=this._getLabelPosition(e);return l("text",{class:this.classes(f,s),"text-anchor":"end",transform:"horizontal"===this.layout?"rotate(270)":null,x:r,y:i-2},t)}_afterBarCreate(e){if(this.barCreatedFunction){const t=e.dataset?parseInt(e.dataset.index,10):e.getAttribute("data-index")?parseInt(e.getAttribute("data-index"),10):null;this.barCreatedFunction(isNaN(t)?null:t,e)}}_afterLinesSubgroupCreate(e){if(this.dataLineCreatedFunction){const t=e.dataset?parseInt(e.dataset.index,10):e.getAttribute("data-index")?parseInt(e.getAttribute("data-index"),10):null,s=e.childNodes[0],r=e.childNodes[1]?e.childNodes[1]:null;this.dataLineCreatedFunction(s,r,isNaN(t)?null:t)}}_afterLinesSubgroupUpdate(e){if(this.dataLineUpdatedFunction){const t=e.dataset?parseInt(e.dataset.index,10):e.getAttribute("data-index")?parseInt(e.getAttribute("data-index"),10):null,s=e.childNodes[0],r=e.childNodes[1]?e.childNodes[1]:null;this.dataLineUpdatedFunction(s,r,isNaN(t)?null:t)}}_getContainerDimensions(){const{_containerNode:e}=this;return e?[e.offsetHeight,e.offsetWidth]:[0,0]}_getBarDimensions(e,t){const{bins:s,layout:r}=this,i=s?s.map((e=>e.count)):[],a=Math.max.apply(Math,i);return i.map((s=>"vertical"===r?[e/i.length,0!==a?s/a*t:0]:[0!==a?s/a*e:0,t/i.length]))}_getLinePosition(e){const{layout:t,min:s,viewModel:{range:r}}=this,i=Math.round((e-s)/r*100)/100,[a,o]=this._getContainerDimensions(),[n,l]=[i*o||1,a-i*a||1];return"vertical"===t?[0,"100%",l,l]:[n,n,"100%",0]}_getLabelPosition(e){const{layout:t,min:s,viewModel:{range:r}}=this,i=Math.round((e-s)/r*100)/100,[a,o]=this._getContainerDimensions();return"vertical"===t?[o,a-i*a]:[0,i*o]}};e([i("viewModel.average")],M.prototype,"average",void 0),e([s()],M.prototype,"barCreatedFunction",void 0),e([i("viewModel.bins")],M.prototype,"bins",void 0),e([s()],M.prototype,"dataLines",void 0),e([s()],M.prototype,"dataLineCreatedFunction",void 0),e([s()],M.prototype,"dataLineUpdatedFunction",void 0),e([s({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],M.prototype,"label",void 0),e([i("viewModel.labelFormatFunction")],M.prototype,"labelFormatFunction",void 0),e([s({value:"horizontal"})],M.prototype,"layout",null),e([i("viewModel.max")],M.prototype,"max",void 0),e([s(),n("esri/widgets/Histogram/t9n/Histogram")],M.prototype,"messages",void 0),e([i("viewModel.min")],M.prototype,"min",void 0),e([i("viewModel.state")],M.prototype,"state",void 0),e([s()],M.prototype,"viewModel",void 0),M=c=e([r("esri.widgets.Histogram")],M);var N=M;export default N;