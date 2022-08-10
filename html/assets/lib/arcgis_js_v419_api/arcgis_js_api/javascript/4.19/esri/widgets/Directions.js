// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/events ../core/Collection ../intl/date ../intl/number ../intl/substitute ../intl ../core/Handles ../core/watchUtils ../intl/moment ./support/widgetUtils ./support/decorators/accessibleHandler ./support/decorators/messageBundle ../chunks/index ./Widget ../chunks/sortable.esm ./support/DatePicker ./Search ./Directions/support/directionsUtils ./Directions/DirectionsViewModel ./Directions/support/CostSummary ./Directions/support/maneuverUtils ./Directions/support/resources ./Directions/support/RouteSections ./support/TimePicker".split(" "),
function(N,n,l,ia,ja,x,t,ka,O,la,ma,na,A,P,Q,H,F,oa,R,u,S,pa,y,G,e,T,U,V,W,C,I,X,Y,c,Z,aa){function ba(r){r=r.getTimezoneOffset();const z=Math.abs(Math.floor(r)%60);return`GMT${0<r?"-":"+"}${H.formatNumber(Math.abs(Math.floor(r/60)),J)}${H.formatNumber(z,J)}`}function K(r){return!(null==r.composedPath||!r.composedPath().find(z=>{var f;return null==(f=z.classList)?void 0:f.contains("esri-search__suggestions-list")}))}const ca={hour:"numeric",minute:"numeric"},J={minimumIntegerDigits:2};l=function(r){function z(a,
d){var b=r.call(this,a,d)||this;b._autoStopRemovalDelay=100;b._costSummary=new X;b._departureTime="now";b._datePicker=new V;b._handles=new R;b._newPlaceholderStop=null;b._pointerPressedSearchSuggestionStop=null;b._routeSections=new Z;b._stops=new P([{},{}]);b._stopsToSearches=new Map;b._timePicker=new aa;b.apiKey=null;b.goToOverride=null;b.iconClass=c.CSS.widgetIcon;b.label=void 0;b.lastRoute=null;b.maxStops=null;b.messages=null;b.messagesCommon=null;b.messagesUnits=null;b.routeServiceUrl=void 0;
b.routeSymbol=null;b.searchProperties=null;b.stopSymbols=null;b.view=null;b.viewModel=new I;b._setUpDragAndDropStops=g=>{b._sortable=U.Sortable.create(g,{draggable:`.${c.CSS.validStopRow}`,ghostClass:c.CSS.stopRowGhost,handle:`.${c.CSS.stopHandle}`,onEnd:b._handleStopInputDragEnd})};b._handleDragHandlePointerDown=()=>b._stops.forEach(g=>b._acquireSearch(g).activeMenu="none");b._handleStopInputDragEnd=({oldIndex:g,newIndex:h,target:p})=>{if(g!==h){var {children:m}=p,k=m[g];p.insertBefore(m[h],0>h-
g?k.nextElementSibling:k);p=b._stops;p.reorder(p.getItemAt(g),h);b._processStops()}};return b}N._inheritsLoose(z,r);var f=z.prototype;f.loadLocale=async function(){this._moment=await S.loadMoment()};f.initialize=function(){this.own([u.init(this,"viewModel.lastRoute",()=>{this._routeSections.routePath=this.get("viewModel.directionLines");this._focusedManeuver=this._activeManeuver=null;this.scheduleRender()}),u.init(this,"viewModel.selectedTravelMode, viewModel.departureTime",()=>{1<this.get("viewModel.stops.length")&&
this.getDirections()}),u.when(this,"view",(a,d)=>{d&&(this._viewClickHandle=null,this._handles.remove(d));if(a){d=this._prepPointerDownUpClick();const b=this._prepViewClick();d.pause();b.pause();this._handles.add([A.on(a.surface,"mousedown",()=>this._autoStopRemovalDelay=500),A.on(a.surface,"mouseup",()=>this._autoStopRemovalDelay=100),d,b],this.view.surface);this._pointerDownUpHandle=d;this._viewClickHandle=b}}),u.whenOnce(this,"routeServiceUrl",()=>this.viewModel.load()),u.watch(this,"viewModel.stops.length",
a=>{0===a&&(this._stops.toArray().forEach(d=>this._removeStop(d,!0)),this._stops.addMany([{},{}]),this.scheduleRender())})])};f.destroy=function(){this._datePicker.destroy();this._timePicker.destroy();this._stopsToSearches.forEach(a=>a.destroy());this._sortable&&this._sortable.destroy()};f.getDirections=function(){return null};f.zoomToRoute=function(){};f.render=function(){return e.jsx("div",{class:this.classes(c.CSS.base,c.CSS.scroller)},this._renderPanelContent())};f._renderPanelContent=function(){var {viewModel:{state:a}}=
this,d="initializing"===a;const b="error"===a&&!this.viewModel.serviceDescription,g="unauthenticated"===a;a={[c.CSS.panelContentLoading]:d,[c.CSS.panelContentError]:b,[c.CSS.panelContentSignIn]:g};const h=d?"presentation":"group";d=g?this._renderSignIn():b?this._renderMessage(this._getErrorMessage()):d?this._renderLoader():this._renderReadyContent();return e.jsx("div",{class:this.classes(c.CSS.panelContent,a),role:h},d)};f._renderReadyContent=function(){return[this._renderStopsContainer(),this._renderTravelModeOptions(),
this._renderDepartureTimeControls(),this._renderSectionSplitter(),this._renderDirectionsContainer(),this._renderDisclaimer()]};f._renderSignIn=function(){return e.jsx("div",{key:"sign-in",class:c.CSS.signInContent},e.jsx("h2",{class:this.classes(c.CSS.heading,c.CSS.contentTitle)},this.messages.widgetLabel),this._renderPlaceholder(),e.jsx("h3",{class:c.CSS.heading},this.messages.signInRequired),e.jsx("button",{class:this.classes(c.CSS.button,c.CSS.buttonSecondary,c.CSS.signInButton),tabIndex:0,onclick:this._handleSignInClick,
bind:this,type:"button"},this.messagesCommon.auth.signIn))};f._handleSignInClick=function(){this.viewModel.load().catch(()=>{})};f._renderTravelModeOptions=function(){const {travelModes:a}=this.viewModel;if(0===a.length)return null;const {selectedTravelMode:d}=this.viewModel,b=d.name||this.messages.travelMode;return e.jsx("select",{"aria-label":b,bind:this,class:this.classes(c.CSS.travelModeSelect,c.CSS.select),key:"esri-directions__travel-mode-options",onchange:this._handleTravelModeChange,title:b},
a.map(g=>e.jsx("option",{key:g,"data-mode":g,selected:g.id===d.id,value:g.id},g.name)))};f._handleTravelModeChange=function(a){a=a.currentTarget;a=a.item(a.selectedIndex);this.viewModel.selectedTravelMode=a["data-mode"]};f._renderStopsContainer=function(){return e.jsx("div",{class:c.CSS.section,key:"esri-directions__stops-container",role:"group"},this._renderStops())};f._renderDepartureTimeControls=function(){const a=this._departureTime,{messages:d}=this,b=d.departureTime;return e.jsx("div",{class:c.CSS.departureTime,
key:"esri-directions__departure-time-controls",role:"group"},e.jsx("select",{"aria-label":b,bind:this,class:this.classes(c.CSS.departureTimeSelect,c.CSS.select),onchange:this._handleDepartureOptionChange,title:b},e.jsx("option",{value:"now",selected:"now"===a},d.leaveNow),e.jsx("option",{value:"depart-by",selected:"depart-by"===a},d.departBy),e.jsx("option",{value:"unspecified",selected:"unspecified"===a},d.timeUnspecified)),"depart-by"===a?this._renderTimeControls():null)};f._renderStops=function(){const a=
this._stops;let d=0;a.forEach(m=>{"none"!==this._acquireSearch(m).activeMenu&&(d+=1)});const b=a.toArray().map((m,k)=>{var q=a.length,v=1<k&&!m.result;const da={[c.CSS.stopsIcon]:0<=k&&k<q-1,[c.CSS.lastStopIcon]:k===q-1},ea={[c.CSS.lastStopIconContainer]:k===q-1},fa={[c.CSS.validStopRow]:!v};var w=a.getItemAt(q-1),B=w&&w.result;w=(w=a.getItemAt(k+1))&&w.result;var D=k===q-1,E=k===q-2;w=2===q&&0===k||2<q&&!D&&!E||2<q&&E&&w||2<q&&D&&!m.result;q=2===q||3===q&&!B||v;v=this._acquireSearch(m);({messages:B}=
this);const {removeStop:L,reverseStops:M,unlocated:ha}=B;B=F.substitute(B.stopLabelTemplate,{number:k+1,label:m.result?m.result.name:ha});D=`${this.id}__stop--${k}`;m=!!v.searchTerm&&!!v.selectedResult&&!!m.result&&v.selectedResult===m.result;E={zIndex:"none"!==v.activeMenu?`${d--}`:""};return e.jsx("li",{"aria-label":B,afterCreate:this._handleStopFieldCreation,bind:this,class:this.classes(c.CSS.stopRow,fa),id:D,key:k,"data-stop-index":k,styles:E},e.jsx("div",{class:c.CSS.stopHandle},e.jsx("span",
{"aria-hidden":"true",class:this.classes(c.CSS.stopIcon,c.CSS.handleIcon,c.CSS.stopHandleIcon,c.CSS.interactiveStopIcon),onpointerdown:this._handleDragHandlePointerDown}),e.jsx("div",{bind:this,"aria-labelledby":D,class:this.classes(c.CSS.stopIconContainer,ea),"data-stop-index":k,onclick:this._handleStopIconClick,onkeydown:this._handleStopIconClick,role:"button"},e.jsx("span",{class:this.classes(c.CSS.stopIcon,da),tabindex:m?"0":null}))),e.jsx("div",{class:c.CSS.stopInput},v.render()),e.jsx("div",
{class:c.CSS.stopOptions,role:"group"},e.jsx("div",{"aria-label":L,class:c.CSS.removeStopButton,bind:this,"data-stop-index":k,hidden:q,onkeydown:this._handleRemoveStop,onclick:this._handleRemoveStop,role:"button",tabIndex:0,title:L},e.jsx("span",{"aria-hidden":"true",class:this.classes(c.CSS.stopIcon,c.CSS.removeStop,c.CSS.removeStopIcon,c.CSS.interactiveStopIcon)}),e.jsx("span",{class:c.CSS.screenReaderText},"removeStopTitle")),e.jsx("div",{"aria-label":M,class:c.CSS.reverseStops,bind:this,hidden:w,
onkeydown:this._handleReverseStops,onclick:this._handleReverseStops,role:"button",tabIndex:0,title:M},e.jsx("span",{"aria-hidden":"true",class:this.classes(c.CSS.stopIcon,c.CSS.reverseStopIcon,c.CSS.interactiveStopIcon)}),e.jsx("span",{class:c.CSS.screenReaderText},"removeStopTitle"))))});var g=a.every(m=>{const k=this._stopsToSearches.get(m);return m.result&&k.selectedResult===m.result});const h=this._stops.length>=this.maxStops,p=this.messages.addStop;g=2<=a.length&&g&&!h?e.jsx("div",{"aria-label":p,
bind:this,class:c.CSS.addStop,key:"esri-directions__add-stop",onfocus:this._handleAddStopFocus,tabIndex:0},e.jsx("span",{"aria-hidden":"true",class:this.classes(c.CSS.addStopIcon,c.CSS.stopIcon,c.CSS.interactiveStopIcon)}),e.jsx("div",{"aria-hidden":"true",class:c.CSS.addStopText},p)):null;return e.jsx("div",null,e.jsx("ol",{class:c.CSS.stops,role:"group",afterCreate:this._setUpDragAndDropStops},b),g)};f._handleStopIconClick=function(a){(a=this._stops.getItemAt(a.currentTarget["data-stop-index"]))&&
a.result&&this._centerAtStop(a)};f._handleClearRouteClick=function(){this.viewModel.reset()};f._centerAtStop=function(a){this.viewModel.centerAt(a.result.feature)};f._handleStopFieldCreation=function(a){const d=this._newPlaceholderStop;if(d){a=this._stops.getItemAt(a["data-stop-index"]);if(d===a){const b=this._acquireSearch(a);b.when(()=>{this.renderNow();b.focus()})}this._newPlaceholderStop=null}};f._handleStopInputBlur=function(a,d){this._handles.remove("awaiting-view-click-stop");this.view.cursor=
this._previousCursor;a.selectedResult&&d.result&&a.selectedResult===d.result?this._pointerDownUpHandle.pause():"none"!==a.activeMenu||!a.searchTerm||a.selectedResult===d.result&&(a.selectedResult||d.result)?a.searchTerm||(this._viewClickHandle.resume(),clearTimeout(this._autoStopRemovalTimeoutId),this._autoStopRemovalTimeoutId=setTimeout(()=>{this.destroyed||(this._viewClickHandle.pause(),"searching"===a.viewModel.state?this._pointerDownUpHandle.pause():this._pointerPressedSearchSuggestionStop||(this._removeStop(d),
d.result&&(d.result=null,this._processStops()),this.scheduleRender()))},this._autoStopRemovalDelay)):(a.search(),this._pointerDownUpHandle.pause())};f._handleStopInputFocus=function(a,d){this._pointerDownUpHandle.resume();if(!this._handles.has("awaiting-view-click-stop")){var {view:b,view:{cursor:g}}=this;this._previousCursor=g;this._handles.add(u.init(a,"searchTerm",h=>{b.cursor=0===h.length?"copy":g}),"awaiting-view-click-stop");this._activeStop=d}};f._prepViewClick=function(){const a=this.get("viewModel.view"),
d=A.pausable(a,"click",this._handleViewClick.bind(this)),b=A.pausable(a.surface,"click",()=>{clearTimeout(this._autoStopRemovalTimeoutId);b.pause()});return{remove(){b.remove();d.remove()},pause(){b.pause();d.pause()},resume(){b.resume();d.resume()}}};f._prepPointerDownUpClick=function(){const a=A.pausable(document,"pointerdown",b=>{this._pointerPressedSearchSuggestionStop=K(b)?this._activeStop:null}),d=A.pausable(document,"pointerup",b=>{this._pointerDownUpHandle.pause();b=K(b);const g=this._activeStop;
b||g!==this._pointerPressedSearchSuggestionStop||this._removeStop(g);this.scheduleRender();this._pointerPressedSearchSuggestionStop=b?this._activeStop:null});return{remove(){d.remove();a.remove()},pause(){d.pause();a.pause()},resume(){a.resume()}}};f._handleViewClick=function(a){const d=this._stopsToSearches.get(this._activeStop);d&&!d.searchTerm&&(d.search(a.mapPoint).then(b=>{b=b.results[0].results[0];const g=this._activeStop;g.result=b;g.result.feature.attributes.Name=b.name;d.searchTerm=b.name}),
this.scheduleRender());this._viewClickHandle.pause();clearTimeout(this._autoStopRemovalTimeoutId)};f._handleAddStopFocus=function(){this._addNewPlaceholder()};f._addNewPlaceholder=function(){this._pointerDownUpHandle.pause();if(!this._newPlaceholderStop){var a={};this._stops.add(a);this._newPlaceholderStop=a}};f._handleReverseStops=function(){this._reverseStops()};f._reverseStops=function(){this._stops.reverse();this._processStops()};f._handleRemoveStop=function(a){this._removeStop(this._stops.getItemAt(a.currentTarget["data-stop-index"]));
this._processStops()};f._removeStop=function(a,d=!1){2>=this._stops.length&&!d||(this._disposeSearch(a),this._stops.remove(a))};f._handleDepartureOptionChange=function(a){a=a.currentTarget;a=a.item(a.selectedIndex);"now"===a.value?(this._departureTime="now",this.viewModel.departureTime="now",this._handles.remove("departure-time-controls")):"depart-by"===a.value?(this._departureTime="depart-by",this._handles.add([u.init(this._datePicker,"value",()=>this._updateDepartureTime()),u.init(this._timePicker,
"value",()=>this._updateDepartureTime())],"departure-time-controls")):(this._departureTime="unspecified",this.viewModel.departureTime=null)};f._updateDepartureTime=function(){var a=this._moment(this._datePicker.value);const d=this._moment(this._timePicker.value);a=this._moment({date:a.date(),month:a.month(),year:a.year(),hour:d.hour(),minute:d.minute()});this.viewModel.departureTime=a.toDate()};f._renderTimeControls=function(){return e.jsx("div",{class:c.CSS.departureTimeControls,key:"esri-directions__time-controls",
role:"group"},this._datePicker.render(),this._timePicker.render())};f._renderSectionSplitter=function(){return e.jsx("div",{class:c.CSS.sectionSplitter})};f._renderDisclaimer=function(){var {messages:a}=this;a=F.substitute(a.disclaimer,{esriTerms:`<a class="${c.CSS.anchor}" href="http://www.esri.com/legal/software-license" rel="noreferrer" target="_blank">${a.esriTerms}</a>`});return e.jsx("div",{class:c.CSS.disclaimer,innerHTML:a,key:"esri-directions__disclaimer"})};f._renderDirectionsContainer=
function(){return e.jsx("div",{class:this.classes(c.CSS.directionsSection,c.CSS.section),key:"esri-directions__container"},this._renderDirectionsContainerContent())};f._renderLoader=function(){return e.jsx("div",{class:c.CSS.loader,key:"loader"})};f._renderWarningCard=function(){return e.jsx("div",{class:c.CSS.warningCard,role:"alert"},e.jsx("div",{class:c.CSS.warningHeader},e.jsx("span",{class:c.CSS.warningIcon,"aria-hidden":"true"}),e.jsx("div",{class:this.classes(c.CSS.heading,c.CSS.warningHeading)},
this.messagesCommon.warning)),e.jsx("div",{class:c.CSS.warningMessage},this._getErrorMessage()))};f._renderDirectionsContainerContent=function(){const {lastRoute:a,state:d}=this.viewModel,b="routing"===d;return"error"===d?this._renderWarningCard():b?this._renderLoader():a?e.jsx("div",{class:c.CSS.summary,key:"esri-directions__summary",role:"group"},this._renderCosts(),this._renderRouteActions(),this._renderManeuverSections()):e.jsx("div",{key:"esri-directions__placeholder",class:c.CSS.emptyContent},
this._renderPlaceholder(),e.jsx("h3",{class:this.classes(c.CSS.message,c.CSS.heading)},this.messages.directionsPlaceholder))};f._renderPlaceholder=function(){return e.jsx("svg",{class:c.CSS.emptyIllustration,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},e.jsx("path",{fill:"currentcolor",d:"M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"}))};
f._renderMessage=function(a){return e.jsx("h3",null,a)};f._renderRouteActions=function(){return e.jsx("div",{class:c.CSS.routeActions},e.jsx("button",{"aria-label":this.messages.clearRoute,class:this.classes(c.CSS.clearRouteButton,c.CSS.button,c.CSS.buttonTertiary),tabIndex:0,onclick:this._handleClearRouteClick,bind:this,type:"button"},this.messages.clearRoute))};f._renderManeuverSections=function(){const {sections:a}=this._routeSections;return e.jsx("div",{class:c.CSS.maneuvers,role:"group"},a.map((d,
b)=>{const {open:g}=d;let h;0<d.maneuvers.length&&g&&(h=e.jsx("ol",{class:c.CSS.maneuverList},d.maneuvers.map(q=>this._renderManeuver(q))));var p=2<a.length;const m=b===a.length-1;b={[c.CSS.collapsibleSection]:p};const k={[c.CSS.openIcon]:!g,[c.CSS.closeIcon]:g};p&&!m?(p=g?this.messagesCommon.open:this.messagesCommon.close,d=e.jsx("header",{class:this.classes(c.CSS.maneuverSectionHeader,c.CSS.maneuverSectionToggle),key:"esri-directions__maneuver-section-header"},e.jsx("div",{"aria-expanded":g.toString(),
"aria-label":p,bind:this,class:c.CSS.maneuverSectionHeaderButton,"data-maneuver-section":d,onkeydown:this._handleSectionToggle,onclick:this._handleSectionToggle,role:"button",tabIndex:0,title:p},e.jsx("h2",{class:this.classes(c.CSS.heading,c.CSS.maneuverSectionTitle)},d.name),e.jsx("span",{"aria-hidden":"true",class:this.classes(k)})))):d=e.jsx("header",{class:c.CSS.maneuverSectionHeader,key:"esri-directions__maneuver-section-header"},e.jsx("h2",{class:this.classes(c.CSS.heading,c.CSS.maneuverSectionTitle)},
d.name));return e.jsx("section",{class:this.classes(c.CSS.maneuverSection,b)},d,h)}))};f._handleSectionToggle=function(a){a=a.currentTarget["data-maneuver-section"];a.open=!a.open};f._renderCosts=function(){var a=this.get("viewModel.directionLines"),d=new Date(a[a.length-1].attributes.arriveTimeUTC);a=this._costSummary.set({directionsViewModel:this.viewModel,messages:this.messages,messagesUnits:this.messagesUnits});var {messages:b}=this;const g=b.zoomToRoute;var h=Q.formatDate(d,ca);d=F.substitute(b.etaTemplate,
{time:`<strong>${h}</strong>`,gmt:`${ba(d)}`});h=b.primaryCosts;const p=b.secondaryCosts;b=b.eta;return e.jsx("div",{"aria-label":g,bind:this,class:c.CSS.directionCosts,onkeydown:this._handleSummaryInteraction,onclick:this._handleSummaryInteraction,role:"button",tabIndex:0,title:g},e.jsx("div",{class:c.CSS.costsDetails,role:"group"},e.jsx("div",{"aria-label":h,class:c.CSS.primaryCosts,title:h},a.primary),e.jsx("div",{class:c.CSS.verticalSplitter}),e.jsx("div",{"aria-label":p,class:c.CSS.secondaryCosts,
title:p},a.secondary)),e.jsx("div",{"aria-label":b,innerHTML:d,title:b}))};f._handleSummaryInteraction=function(){this._focusedManeuver=this._activeManeuver=null;this.viewModel.clearHighlights();this.zoomToRoute()};f._getErrorMessage=function(){const {messages:a}=this,{error:d}=this.viewModel;return"directions-view-model:unable-to-route"===d.name?a.errors.unableToRoute:"directions-view-model:service-metadata-unavailable"===d.name?a.errors.unableToLoadServiceMetadata:a.errors.unknownError};f._normalizeSearchSources=
function(a){this._overrideDefaultSources(a);this._ensureLocationTypeOnLocatorSources(a)};f._overrideDefaultSources=function(a){a.viewModel.defaultSources.forEach(d=>{d.autoNavigate=!1})};f._ensureLocationTypeOnLocatorSources=function({allSources:a}){0!==a.length&&a.forEach(d=>{"locator"in d&&d.locator&&null===d.locationType&&(d.locationType="street")})};f._acquireSearch=function(a){const d=this.get("viewModel.view");if(this._stopsToSearches.has(a)){const g=this._stopsToSearches.get(a);g.view=d;this._overrideDefaultSources(g);
return g}const b=new W({view:d,resultGraphicEnabled:!1,popupEnabled:!1,...this.searchProperties});this._normalizeSearchSources(b);this._handles.add([u.on(b,"allSources","change",()=>this._normalizeSearchSources(b)),b.on("select-result",()=>{a.result=b.selectedResult;a.result.feature.attributes.Name=b.selectedResult.name;this._processStops();this.scheduleRender()}),b.on("search-focus",()=>this._handleStopInputFocus(b,a)),b.on("search-blur",()=>this._handleStopInputBlur(b,a))],b);this._stopsToSearches.set(a,
b);return b};f._disposeSearch=function(a){this._stopsToSearches.get(a).destroy();this._stopsToSearches.delete(a)};f._processStops=function(){const a=this.viewModel;a.stops.removeAll();a.stops.addMany(this._stops.filter(d=>!!d.result).map(d=>d.result.feature));1<a.stops.length&&a.getDirections()};f._renderManeuver=function(a){let d;var {attributes:b}=a,g=this.get("viewModel.routeParameters.directionsLengthUnits");const {messages:h,messagesUnits:p}=this;g=C.formatDistance(h,p,b.length,{toUnits:g});
var m=C.formatTime(b.time),k=C.getAssociatedStop(a);C.useSpatiallyLocalTime(a,this.get("viewModel.routeParameters.startTime"))?d=C.toSpatiallyLocalTimeString(h,b.arriveTimeUTC,b.ETA,"now"===this._departureTime):g&&(d=m?`${g}&nbsp;&middot;&nbsp;${m}`:g);g=this._getFormattedManeuverText(a);b=this._getIconPath(b.maneuverType);if(k)return e.jsx("li",{class:c.CSS.maneuver,key:a},e.jsx("header",null,k.attributes.Name));k=`esri-directions__maneuver-${a.uid}`;m=`esri-directions__cumulative-costs-${a.uid}`;
const q=`esri-directions__intermediate-costs-${a.uid}`;return e.jsx("li",{"aria-labelledby":`${k} ${m} ${q}`,bind:this,class:this.classes(c.CSS.maneuver,{[c.CSS.maneuverActive]:this._activeManeuver===a}),"data-maneuver":a,key:a,onclick:this._handleManeuverClick,onkeydown:this._handleManeuverClick,onfocus:this._handleManeuverFocus,onmouseover:this._handleManeuverMouseOver,onmouseout:this._handleManeuverMouseOut,onblur:this._handleManeuverBlur,tabIndex:0},e.jsx("img",{alt:"",class:c.CSS.maneuverIcon,
src:b}),e.jsx("div",{class:c.CSS.maneuverCostsContainer},e.jsx("span",{id:k,innerHTML:g}),e.jsx("div",{class:c.CSS.maneuverCosts},e.jsx("div",{class:c.CSS.horizontalSplitter}),e.jsx("div",{id:m,"aria-label":h.cumulativeCosts,class:c.CSS.cumulativeCost,innerHTML:"",title:h.cumulativeCosts}),e.jsx("div",{id:q,"aria-label":h.intermediateCosts,class:c.CSS.intermediateCost,innerHTML:d,title:h.intermediateCosts}))))};f._getIconPath=function(a){a=Y.toIconName(a);const d=2===window.devicePixelRatio?"@2x":
"";return`${c.getManeuversIconDir()}${a}${d}.png`};f._handleManeuverClick=function(a){a=a.currentTarget["data-maneuver"];this._activeManeuver===a?(this._activeManeuver=null,this.zoomToRoute()):(this._activeManeuver=a,this.viewModel.centerAt(a),this.viewModel.highlightSegment(a))};f._handleManeuverMouseOver=function(a){this._activeManeuver||this._focusedManeuver||this.viewModel.highlightSegment(a.currentTarget["data-maneuver"])};f._handleManeuverMouseOut=function(){this._activeManeuver||this._focusedManeuver||
this.viewModel.clearHighlights()};f._handleManeuverBlur=function(){this._activeManeuver||(this._focusedManeuver=null,this.viewModel.clearHighlights())};f._handleManeuverFocus=function(a){this._activeManeuver||(this._focusedManeuver=a=a.currentTarget["data-maneuver"],this.viewModel.highlightSegment(a))};f._getFormattedManeuverText=function(a){const {attributes:{text:d},strings:b}=a;if(!b)return d;let g=d;b.forEach(h=>{g=g.replace(h.string,`<strong>${h.string}</strong>`)});return g};return z}(T);n.__decorate([t.aliasOf("viewModel.apiKey")],
l.prototype,"apiKey",void 0);n.__decorate([t.aliasOf("viewModel.goToOverride")],l.prototype,"goToOverride",void 0);n.__decorate([x.property()],l.prototype,"iconClass",void 0);n.__decorate([x.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],l.prototype,"label",void 0);n.__decorate([t.aliasOf("viewModel.lastRoute")],l.prototype,"lastRoute",void 0);n.__decorate([t.aliasOf("viewModel.maxStops")],l.prototype,"maxStops",void 0);n.__decorate([x.property(),G.messageBundle("esri/widgets/Directions/t9n/Directions")],
l.prototype,"messages",void 0);n.__decorate([x.property(),G.messageBundle("esri/t9n/common")],l.prototype,"messagesCommon",void 0);n.__decorate([x.property(),G.messageBundle("esri/core/t9n/Units")],l.prototype,"messagesUnits",void 0);n.__decorate([t.aliasOf("viewModel.routeServiceUrl")],l.prototype,"routeServiceUrl",void 0);n.__decorate([t.aliasOf("viewModel.routeSymbol")],l.prototype,"routeSymbol",void 0);n.__decorate([x.property()],l.prototype,"searchProperties",void 0);n.__decorate([t.aliasOf("viewModel.stopSymbols")],
l.prototype,"stopSymbols",void 0);n.__decorate([t.aliasOf("viewModel.view")],l.prototype,"view",void 0);n.__decorate([x.property({type:I})],l.prototype,"viewModel",void 0);n.__decorate([t.aliasOf("viewModel.getDirections")],l.prototype,"getDirections",null);n.__decorate([t.aliasOf("viewModel.zoomToRoute")],l.prototype,"zoomToRoute",null);n.__decorate([y.accessibleHandler()],l.prototype,"_handleStopIconClick",null);n.__decorate([y.accessibleHandler()],l.prototype,"_handleClearRouteClick",null);n.__decorate([y.accessibleHandler()],
l.prototype,"_handleReverseStops",null);n.__decorate([y.accessibleHandler()],l.prototype,"_handleRemoveStop",null);n.__decorate([y.accessibleHandler()],l.prototype,"_handleSectionToggle",null);n.__decorate([y.accessibleHandler()],l.prototype,"_handleSummaryInteraction",null);n.__decorate([y.accessibleHandler()],l.prototype,"_handleManeuverClick",null);return l=n.__decorate([O.subclass("esri.widgets.Directions")],l)});