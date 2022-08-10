/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../kernel.js";import"../../config.js";import{L as t}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import{e as i}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import r from"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import"../../core/Collection.js";import"../../chunks/Promise.js";import"../../core/urlUtils.js";import{aliasOf as o}from"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/resourceExtension.js";import"../../chunks/locale.js";import{g as n,a as l}from"../../chunks/number.js";import"../../intl.js";import"../../request.js";import"../../chunks/assets.js";import"../../core/Handles.js";import"../../core/watchUtils.js";import"../../chunks/domUtils.js";import{s as c,i as d}from"../../chunks/widgetUtils.js";import"../../chunks/projector.js";import{a as h}from"../../chunks/accessibleHandler.js";import{m as u}from"../../chunks/messageBundle.js";import{j as p}from"../../chunks/index.js";import _ from"../Widget.js";import{P as m}from"../../chunks/Popover.js";import"../../chunks/MomentElementViewModel.js";import k from"./DatePickerViewModel.js";import{l as y}from"../../chunks/moment.js";function v(e){const t=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];for(let s=0;s<10;s++)e=e.replace(t[s],s.toString());return Number(e)}function g(e){return new r(`could not parse date input, expecting the following format: ${l(Date.now(),e)}`)}const D="esri-date-picker",f="esri-date-picker__calendar",w="esri-date-picker__month-picker",b="esri-date-picker__day-picker",P="esri-date-picker__week-item",j="esri-date-picker__day-item--nearby-month",M="esri-date-picker__day-item--active",O="esri-date-picker__day-item--today",x="esri-date-picker__day-item--selected",I="esri-date-picker__day-item",N="esri-date-picker__day-item--header",B="esri-date-picker__year-picker",C="esri-date-picker__year-picker-item--selected",S="esri-date-picker__year-picker-item",A="esri-date-picker__month-dropdown",F="esri-date-picker__date",T="esri-date-picker__calendar-toggle",E="esri-date-picker__input",U="esri-date-picker__text-input",Y="esri-date-picker__icon--leading",L="esri-icon-left",$="esri-icon-right",K="esri-icon-calendar",q="esri-widget",H="esri-widget--button",W="esri-input",V="esri-select",R={year:"numeric",month:"2-digit",day:"2-digit"},z=[" ","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Enter","Home","PageDown","PageUp"],G=t.getLogger("esri.widgets.support.DatePicker"),J="onfocusout"in HTMLElement.prototype,Q="formatToParts"in Intl.DateTimeFormat.prototype;let X=class extends _{constructor(e,t){super(e,t),this._activeDate=null,this._calendarNode=null,this._calendarPopover=new m({owner:this,placement:"bottom-start",anchorElement:()=>this._rootNode,renderContentFunction:this._renderCalendar}),this._closedByUserAction=!1,this._isOpen=!1,this._requestDayPickerFocusOnCreate=!1,this._rootNode=null,this.dateInputEnabled=!1,this.label=void 0,this.messages=null,this.value=null,this.commitOnMonthChange=!1,this.viewModel=new k,this._handleDatePickerBlur=J?null:this._handleDatePickerBlurOrFocusOut,this._handleDatePickerFocusOut=J?this._handleDatePickerBlurOrFocusOut:null,this._toggle=this._toggle.bind(this)}async loadLocale(){this._moment=await y(),this._isOpen&&(this._activeDate=this._moment(this._activeDate.toDate()))}destroy(){this._calendarPopover.destroy()}render(){return p("div",{afterCreate:c,bind:this,class:this.classes(D,q),"data-node-ref":"_rootNode"},Q&&this.dateInputEnabled?this.renderInputAndButtonMode():this.renderButtonOnlyMode())}renderButtonOnlyMode(){const e=l(this.viewModel.value,R),{_isOpen:t,messages:s}=this;return p("div",{afterUpdate:this._focusSelectedOrClosed,"aria-controls":t?this._getCalendarId():null,"aria-expanded":t.toString(),"aria-haspopup":"true","aria-label":s.setDate,"aria-pressed":t.toString(),class:this.classes(H,V,T),onclick:this._toggle,onkeydown:this._toggle,role:"button",tabIndex:0},p("span",{class:F},e))}renderInputAndButtonMode(){const e=l(this.viewModel.value,R),{_isOpen:t,messages:s}=this;return p("div",{class:this.classes(E)},p("input",{"aria-controls":t?this._getCalendarId():null,"aria-haspopup":"true","aria-label":s.setDate,bind:this,class:this.classes(U,W),key:"date-input",onblur:this._handleDateInputBlur,onfocus:this._handleDateInputFocus,onkeydown:this._handleDateInputKeyDown,type:"text",value:e}),p("span",{"aria-hidden":"true",class:this.classes(Y,K)}))}_handleDateInputKeyDown(e){"Enter"===e.key&&this._handleDateText(e)}_handleDateInputBlur(e){this._handleDatePickerBlurOrFocusOut(e),this._isOpen||this._handleDateText(e)}_handleDateInputFocus(){this._open(this.viewModel.value,!1)}_handleDateText(e){const t=e.currentTarget;let s;try{s=function(e,t){const s=n(t),i=Date.now(),r=s.formatToParts(i),a=new Set;r.filter((({type:e})=>"literal"===e)).forEach((({value:e})=>a.add(e)));let o=0;const l={};for(;r.length>0;){const{type:t,value:s}=r.shift();for(let i=0;i<s.length;i++,o++){const s=e.charAt(o);if(a.has(s)){o++;break}if("literal"===t)break;l[t]||(l[t]=[]),l[t].push(s)}}const c={};try{c.day=v(l.day.join("")),c.month=v(l.month.join(""))-1,c.year=v((l.year||l.relatedYear).join(""))}catch(e){throw g(t)}if(isNaN(c.day)||isNaN(c.month)||isNaN(c.year))throw g(t);return c}(t.value,R)}catch(e){return G.warn(e),void(t.value=l(this.viewModel.value,R))}const i=this._moment(s);i.isValid()?(this.viewModel.value=i.toDate(),this._activeDate=i):t.value=l(this.viewModel.value,R)}_focusSelectedOrClosed(e){this._closedByUserAction&&(this._closedByUserAction=!1,e.focus())}_handleDatePickerKeydown(e){"Escape"===i(e)&&(this._closedByUserAction=!0,this._close(),e.preventDefault(),e.stopPropagation())}_renderCalendar(){const e=this._activeDate,t=this._moment(this.viewModel.value);return p("div",{afterCreate:c,bind:this,class:this.classes(f,q),"data-node-ref":"_calendarNode",id:this._getCalendarId(),key:"esri-date-picker__calendar",onkeydown:this._handleDatePickerKeydown},this._renderMonthPicker(e),this._renderDayPicker(e,t),this._renderYearPicker(e))}_getCalendarId(){return`date-picker__calendar--${this.id}`}_handleDatePickerBlurOrFocusOut(e){if(e.currentTarget!==e.target)return;const t=e.relatedTarget;this._calendarNode.contains(t)||this._rootNode.contains(t)||this._close()}_renderMonthPicker(e){const t=d(),s=t?$:L,i=t?L:$,r=this._moment.months().map(((t,s)=>{const i=e.month()===s;return p("option",{selected:i},t)})),{messages:a}=this;return p("div",{class:w},p("div",{"aria-label":a.goToPreviousMonth,bind:this,class:H,onblur:this._handleDatePickerBlur,onclick:this._setPreviousMonth,onfocusout:this._handleDatePickerFocusOut,onkeydown:this._setPreviousMonth,role:"button",tabIndex:0,title:a.goToPreviousMonth},p("span",{"aria-hidden":"true",class:s})),p("select",{"aria-live":"assertive","aria-label":a.selectMonth,bind:this,class:this.classes(A,V),id:`${this.id}__month-picker`,onblur:this._handleDatePickerBlur,onchange:this._setMonth,onfocusout:this._handleDatePickerFocusOut,onkeydown:this._setMonth,title:a.selectMonth},r),p("div",{"aria-label":a.goToNextMonth,bind:this,class:H,onblur:this._handleDatePickerBlur,onclick:this._setNextMonth,onfocusout:this._handleDatePickerFocusOut,onkeydown:this._setNextMonth,role:"button",tabIndex:0,title:a.goToNextMonth},p("span",{"aria-hidden":"true",class:i})))}_renderDayPicker(e,t){const s=e.clone().day(this._moment.localeData().firstDayOfWeek()),i=this._getWeekLabels(s),r=this._getDayId(e),a=this._renderMonth(e,t);return p("div",{afterCreate:this._handleDayPickerCreate,"aria-activedescendant":r,"aria-labelledby":`${this.id}__month-picker ${this.id}__selected-year`,bind:this,class:b,id:`${this.id}__day-picker`,onblur:this._handleDatePickerBlur,onfocusout:this._handleDatePickerFocusOut,onkeydown:this._handleDayPickerKeydown,role:"grid",tabIndex:0},p("div",{class:P,role:"row"},i.map((e=>p("div",{"aria-label":e.name,class:this.classes(I,N),role:"columnheader",title:e.name},e.abbr)))),a)}_getDayId(e){return`${this.id}__${l(e.valueOf(),R)}`}_handleDayPickerCreate(e){this._requestDayPickerFocusOnCreate&&(this._requestDayPickerFocusOnCreate=!1,e.focus())}_getWeekLabels(e){const t=[],s={weekday:"long"},i={weekday:"narrow"};for(let r=0;r<7;r++)t.push({name:l(e.valueOf(),s),abbr:l(e.valueOf(),i)}),e.add(1,"day");return t}_handleDayPickerKeydown(e){const{ctrlKey:t,shiftKey:s}=e,r=i(e),a=this._activeDate;if(-1!==z.indexOf(r)){if("ArrowLeft"===r)a.subtract(1,"day");else if("ArrowRight"===r)a.add(1,"day");else if("ArrowUp"===r)a.subtract(1,"week");else if("ArrowDown"===r)a.add(1,"week");else if("PageUp"===r){const e=s?"year":"month";a.subtract(1,e)}else if("PageDown"===r){const e=s?"year":"month";a.add(1,e)}else if("Home"===r){const e=t?"year":"month";a.startOf(e)}else if("End"===r){const e=t?"year":"month";a.endOf(e)}else"Enter"!==r&&" "!==r||(this.viewModel.value=a.toDate(),this._closedByUserAction=!0,this._close());e.preventDefault(),e.stopPropagation()}}_renderMonth(e,t){const s=this._moment(),i=e.clone().startOf("month"),r=e.clone().endOf("month"),a=i.clone().subtract(i.weekday(),"day"),o=[];for(let n=0;n<6;n++){const n=[];for(let o=0;o<7;o++){const o=a.date(),l=a.isSame(e,"day"),c=a.isSame(t,"day"),d=this._getDayId(a),h={[j]:!a.isBetween(i,r,null,"[]"),[O]:a.isSame(s,"day"),[M]:l,[x]:c};n.push(p("div",{"aria-label":o.toString(),"aria-selected":l.toString(),bind:this,class:this.classes(I,h),"data-iso-date":a.toISOString(),id:d,onclick:this._handleSelectedDate,onkeydown:this._handleSelectedDate,role:"gridcell"},o)),a.add(1,"day")}o.push(p("div",{class:P,role:"row"},n))}return o}_renderYearPicker(e){const t={year:"numeric"},s=e.clone(),i=l(s.valueOf(),t),r=l(s.add(1,"year").valueOf(),t),a=l(s.subtract(2,"year").valueOf(),t),{messages:o}=this;return p("div",{class:B},p("div",{"aria-label":o.goToPreviousYear,bind:this,class:S,onblur:this._handleDatePickerBlur,onclick:this._setPreviousYear,onfocusout:this._handleDatePickerFocusOut,onkeydown:this._setPreviousYear,tabIndex:0,title:o.goToPreviousYear},a),p("div",{class:this.classes(S,C),id:`${this.id}__selected-year`},i),p("div",{"aria-label":o.goToNextYear,bind:this,class:S,onblur:this._handleDatePickerBlur,onclick:this._setNextYear,onfocusout:this._handleDatePickerFocusOut,onkeydown:this._setNextYear,tabIndex:0,title:o.goToNextYear},r))}_toggle(){this._isOpen?this._close():this._open(this.viewModel.value)}_setMonth(e){const t=e.target.value;this._activeDate.month(t),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toDate())}_close(){this._activeDate=null,this._isOpen=!1,this._calendarPopover.open=!1}_open(e,t=!0){this._activeDate=this._moment(e),this._isOpen=!0,this._calendarPopover.open=!0,this._requestDayPickerFocusOnCreate=t}_setPreviousMonth(){this._activeDate.subtract(1,"month"),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toDate())}_setNextMonth(){this._activeDate.add(1,"month"),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toDate())}_setPreviousYear(){this._activeDate.subtract(1,"year")}_setNextYear(){this._activeDate.add(1,"year")}_handleSelectedDate(e){const t=e.target;this.viewModel.value=this._moment(t.getAttribute("data-iso-date")).toDate(),this._closedByUserAction=!0,this._close()}};e([s()],X.prototype,"dateInputEnabled",void 0),e([s({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],X.prototype,"label",void 0),e([s(),u("esri/widgets/support/t9n/DatePicker")],X.prototype,"messages",void 0),e([o("viewModel.value")],X.prototype,"value",void 0),e([s()],X.prototype,"commitOnMonthChange",void 0),e([s({type:k})],X.prototype,"viewModel",void 0),e([h()],X.prototype,"_toggle",null),e([h()],X.prototype,"_setPreviousMonth",null),e([h()],X.prototype,"_setNextMonth",null),e([h()],X.prototype,"_setPreviousYear",null),e([h()],X.prototype,"_setNextYear",null),e([h()],X.prototype,"_handleSelectedDate",null),X=e([a("esri.widgets.support.DatePicker")],X);var Z=X;export default Z;
