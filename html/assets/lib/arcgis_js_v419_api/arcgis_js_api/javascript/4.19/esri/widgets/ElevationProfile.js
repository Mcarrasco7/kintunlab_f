// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/maybe ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/promiseUtils ../core/watchUtils ../core/memoize ./support/widgetUtils ./support/decorators/messageBundle ../chunks/index ./Widget ../chunks/ResizeObserver ./ElevationProfile/css ./ElevationProfile/support/constants ./ElevationProfile/ElevationProfileViewModel ./ElevationProfile/ElevationProfileVisibleElements ./ElevationProfile/components/Legend ./ElevationProfile/components/SettingsButton ./ElevationProfile/support/chartUtils".split(" "),
function(x,f,e,l,L,M,k,n,N,C,O,P,Q,D,y,u,R,v,m,E,F,g,p,z,A,G,H,I){const q=[{type:"select"},{type:"sketch"}],J={["none"]:null,["no-valid-input"]:"noProfile",["no-visible-profiles"]:"noProfile",["refined-but-no-chart-data"]:"noProfile",["too-complex"]:"tooComplex",["unknown-error"]:"unknown",["invalid-geometry"]:"invalidGeometry",["invalid-elevation-info"]:"invalidElevationInfo"};e=function(B){function t(a,c){var b=B.call(this,a,c)||this;b.viewModel=null;b.view=null;b.input=null;b.profiles=null;b.unitOptions=
[];b.unit="metric";b.geodesicDistanceThreshold=1E5;b.visibleElements=new A;b.iconClass=g.CSS.widgetIcon;b.label=void 0;b.messages=null;b.messagesCommon=null;b.messagesUnits=null;b._chartContainer=null;b._chart=null;b._resizeObserver=null;b._portrait=!1;b._zoomOutButtonVisible=!1;b._chartInitTask=null;b._getChartUpdateParamsMemoized=u.memoize((h,r,w,K)=>({chart:h,data:r,stationary:w,messages:K}));b._getDetailsPropsMemoized=u.memoize((h,r)=>({effectiveUnits:h,profiles:r}));b._getSettingsButtonPropsMemoized=
u.memoize((h,r,w)=>({unit:h,unitOptions:r,onUnitChange:w}));b._onUnitChange=h=>{b.unit=h};null!=a&&a.viewModel||(b._defaultViewModel=new z({view:null==a?void 0:a.view}),b.viewModel=b._defaultViewModel);return b}x._inheritsLoose(t,B);var d=t.prototype;d.initialize=function(){this._settingsButton=new H.SettingsButton(this._settingsButtonProps);this.own(this.watch("_detailsProps",a=>{this._legend.set(a)}));this._legend=new G.Legend(this._detailsProps);this.own(this.watch("_settingsButtonProps",a=>{this._settingsButton.set(a)}))};
d.postInitialize=function(){this.own([y.init(this,"_chartContainer",()=>{this._destroyChart();const a=this._chartContainer;l.isNone(a)||(this._chartInitTask=D.createTask(c=>this._initializeChart(a,c)))}),y.init(this,"_chartUpdateParams",()=>this._updateChart())])};d.destroy=function(){this._destroyChart();l.isSome(this._defaultViewModel)&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy();this._legend=l.destroyMaybe(this._legend);this._settingsButton=l.destroyMaybe(this._settingsButton);
l.isSome(this._resizeObserver)&&(this._resizeObserver.disconnect(),this._resizeObserver=null)};d.render=function(){const {viewModel:a,visible:c}=this;return m.jsx("div",{key:this,class:this.classes({[g.CSS.base]:c,[g.CSS.esriWidget]:c,[g.CSS.esriWidgetDisabled]:c&&"disabled"===a.state,[g.CSS.portrait]:this._portrait,[g.CSS.refined]:1===this.viewModel.progress}),bind:this,afterCreate:this._onAfterCreate,"aria-label":this.messages.widgetLabel},c&&this._renderContentForState())};d._renderContentForState=
function(){switch(this.viewModel.state){case p.ElevationProfileState.Ready:return this._renderContentForReadyState();case p.ElevationProfileState.Selecting:return this._renderContentForSelectingState();case p.ElevationProfileState.Creating:return this._renderContentForCreatingState();case p.ElevationProfileState.Selected:return this._renderContentForSelectedState();case p.ElevationProfileState.Created:return this._renderContentForCreatedState();case p.ElevationProfileState.Disabled:return this._renderContentForReadyState()}};
d._renderContentForReadyState=function(){const {sketchButton:a,selectButton:c}=this.visibleElements;var b=this.messages;if(a&&c)b=b.readyPrompt;else if(a)b=b.readyPromptCreateOnly;else if(c)b=b.readyPromptSelectOnly;else{var h;b=null==(h=b.errors)?void 0:h.noProfile}return this._renderContent({prompt:b,chart:!1,actions:q})};d._renderContentForSelectingState=function(){const a=this.view;return l.isNone(a)?null:this._renderContent({prompt:this.messages[`selectingPrompt-${a.type}`],chart:!1,actions:[{type:"select-cancel"}]})};
d._renderContentForCreatingState=function(){const {view:a,viewModel:c}=this;if(l.isNone(a))return null;const b=c.hasVertices?[{type:"sketch-cancel"},{type:"sketch-done",disabled:!c.tool.interaction.canStopCreating}]:[{type:"select"},{type:"sketch",disabled:!0}];if("no-valid-input"===c.errorState)return this._renderContent({chart:!1,actions:b,prompt:this.messages[`creatingPrompt-${a.type}`]});const h=this._getErrorMessage();return h?this._renderContent({chart:!1,actions:b,prompt:h}):this._renderContent({chart:!0,
actions:b})};d._renderContentForSelectedState=function(){const a=this._getErrorMessage();return a?this._renderContent({chart:!1,actions:q,prompt:a}):this._renderContent({chart:!0,actions:q})};d._renderContentForCreatedState=function(){const a=this._getErrorMessage();return a?this._renderContent({chart:!1,actions:q,prompt:a}):this._renderContent({chart:!0,actions:q})};d._getErrorMessage=function(){var a,c;const b=J[this.viewModel.errorState];return null==(a=this.messages)?void 0:null==(c=a.errors)?
void 0:c[b]};d._renderContent=function(a){const c=l.isSome(a.prompt)?this._renderPrompt(a.prompt):a.chart&&this._renderChart();return[m.jsx("header",{key:"header",class:g.CSS.header},this._zoomOutButtonVisible&&this._renderZoomOutButton(),this.visibleElements.settingsButton&&this._settingsButton.render()),m.jsx("div",{class:g.CSS.mainContainer},c),this.visibleElements.legend&&this._legend.render(),this._renderActions(a)]};d._renderZoomOutButton=function(){return m.jsx("button",{key:"zoom-out",class:g.CSS.zoomOutButton,
bind:this,onclick:this._onZoomOutButtonClick,title:this.messages.zoomOut})};d._onZoomOutButtonClick=function(){l.applySome(this._chart,a=>a.zoomOut())};d._renderPrompt=function(a){return[m.jsx("div",{key:"prompt-container",bind:this,class:g.CSS.promptContainer},m.jsx("p",null,a))]};d._renderChart=function(){if(!this.visibleElements.chart)return[m.jsx("div",{key:"empty-chart-container",class:g.CSS.chartContainer})];const {chartData:a,progress:c}=this.viewModel,b=this._canRenderChart(a);return b?[l.isSome(a)&&
0<c&&1>c&&this._renderSpinner({size:b?"small":"large"}),m.jsx("div",{key:"chart-container",bind:this,class:g.CSS.chartContainer,afterCreate:this._onChartContainerAfterCreate,afterRemoved:this._onChartContainerRemoved})]:[this._renderSpinner({size:"large"}),m.jsx("div",{key:"chart-container-empty",class:g.CSS.chartContainer})]};d._renderSpinner=function(a){return m.jsx("div",{key:"spinner",class:this.classes(g.CSS.chartSpinner,{[g.CSS.chartSpinnerSmall]:"small"===a.size}),enterAnimation:this._spinnerEnterAnimation,
exitAnimation:this._spinnerExitAnimation})};d._spinnerEnterAnimation=function(a){requestAnimationFrame(()=>a.classList.add(g.CSS.chartSpinnerVisible))};d._spinnerExitAnimation=function(a,c){a.classList.remove(g.CSS.chartSpinnerVisible);setTimeout(c,200)};d._canRenderChart=function(a){if(l.isNone(a))return!1;if(!this.viewModel.inputIsSketched)return a.fullyRefined;const c=a.lines.reduce((b,{samples:h})=>l.isSome(h)?b+h.length:b,0);return a.fullyRefined||c<=p.LARGE_CHART_SAMPLES};d._renderActions=function({actions:a}){a=
a.map(c=>{switch(c.type){case "sketch":return this.visibleElements.sketchButton&&this._renderAction({action:c,onClick:this._onSketchButtonClick,className:g.CSS.sketchButton,label:this.messages.sketchButtonLabel});case "sketch-cancel":return this.visibleElements.sketchButton&&this._renderAction({action:c,onClick:this._onCancelButtonClick,className:g.CSS.sketchCancelButton,label:this.messagesCommon.cancel});case "sketch-done":return this.visibleElements.sketchButton&&this._renderAction({action:c,onClick:this._onDoneButtonClick,
className:g.CSS.sketchDoneButton,label:this.messagesCommon.done});case "select":return this.visibleElements.selectButton&&this._renderAction({action:c,onClick:this._onSelectButtonClick,className:g.CSS.selectButton,label:this.messages.selectButtonLabel});case "select-cancel":return this.visibleElements.selectButton&&this._renderAction({action:c,onClick:this._onCancelButtonClick,className:g.CSS.selectCancelButton,label:this.messagesCommon.cancel})}}).filter(Boolean);return a.length?m.jsx("footer",{key:"footer",
class:g.CSS.footer},a):null};d._renderAction=function({action:a,onClick:c,className:b,label:h}){return m.jsx("button",{key:`action-${a.type}`,class:this.classes(g.CSS.actionButton,b,{[g.CSS.buttonDisabled]:a.disabled}),bind:this,disabled:a.disabled,onclick:c},h)};d._onSketchButtonClick=function(){this.viewModel.start({mode:"sketch"})};d._onSelectButtonClick=function(){this.viewModel.start({mode:"select"})};d._onCancelButtonClick=function(){this.viewModel.cancel()};d._onDoneButtonClick=function(){this.viewModel.stop()};
d._updateChart=function(){const a=this._chartUpdateParams;a.stationary&&l.isSome(a.chart)&&a.messages&&a.chart.update(a)};d._onChartContainerAfterCreate=function(a){this._chartContainer=a};d._onChartContainerRemoved=function(){this._chartContainer=null};d._initializeChart=async function(a,c){this._chart=await I.createChart({container:a,abortOptions:{signal:c},onRangeChange:b=>{this._zoomOutButtonVisible=1!==b},onCursorPositionChange:b=>{this.viewModel.hoveredChartPosition=b}});this._updateChart()};
d._destroyChart=function(){l.isSome(this._chartInitTask)&&(this._chartInitTask.abort(),this._chartInitTask=null);l.isSome(this._chart)&&(this._chart.destroy(),this._chart=null)};d._onAfterCreate=function(a){const c=()=>{this._portrait=a.getBoundingClientRect().width<p.PORTRAIT_MODE_PIXEL_BREAKPOINT};c();this._resizeObserver=new F.ResizeObserver(()=>c());this._resizeObserver.observe(a)};x._createClass(t,[{key:"_chartUpdateParams",get:function(){const a=this.view;return this._getChartUpdateParamsMemoized(this._chart,
this.viewModel.chartData,l.isSome(a)?a.stationary:!0,this._chartMessages)}},{key:"_chartMessages",get:function(){return{...this.messagesUnits,...this.messages}}},{key:"_detailsProps",get:function(){return this._getDetailsPropsMemoized(this.viewModel.effectiveUnits,this._profilesArray)}},{key:"_profilesArray",get:function(){return this.profiles.toArray()}},{key:"_settingsButtonProps",get:function(){return this._getSettingsButtonPropsMemoized(this.unit,this.unitOptions,this._onUnitChange)}}]);return t}(E);
f.__decorate([k.property({type:z})],e.prototype,"viewModel",void 0);f.__decorate([n.aliasOf("viewModel.view")],e.prototype,"view",void 0);f.__decorate([n.aliasOf("viewModel.input")],e.prototype,"input",void 0);f.__decorate([n.aliasOf("viewModel.profiles")],e.prototype,"profiles",void 0);f.__decorate([n.aliasOf("viewModel.unitOptions")],e.prototype,"unitOptions",void 0);f.__decorate([n.aliasOf("viewModel.unit")],e.prototype,"unit",void 0);f.__decorate([n.aliasOf("viewModel.geodesicDistanceThreshold")],
e.prototype,"geodesicDistanceThreshold",void 0);f.__decorate([k.property({type:A,nonNullable:!0})],e.prototype,"visibleElements",void 0);f.__decorate([k.property()],e.prototype,"iconClass",void 0);f.__decorate([n.aliasOf("messages.widgetLabel",{overridable:!0})],e.prototype,"label",void 0);f.__decorate([n.aliasOf("viewModel.visible")],e.prototype,"visible",void 0);f.__decorate([k.property(),v.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],e.prototype,"messages",void 0);f.__decorate([k.property(),
v.messageBundle("esri/t9n/common")],e.prototype,"messagesCommon",void 0);f.__decorate([k.property(),v.messageBundle("esri/core/t9n/Units")],e.prototype,"messagesUnits",void 0);f.__decorate([k.property()],e.prototype,"_chartContainer",void 0);f.__decorate([k.property()],e.prototype,"_chart",void 0);f.__decorate([k.property()],e.prototype,"_settingsButton",void 0);f.__decorate([k.property()],e.prototype,"_legend",void 0);f.__decorate([k.property()],e.prototype,"_portrait",void 0);f.__decorate([k.property()],
e.prototype,"_zoomOutButtonVisible",void 0);f.__decorate([k.property()],e.prototype,"_chartUpdateParams",null);f.__decorate([k.property()],e.prototype,"_chartMessages",null);f.__decorate([k.property()],e.prototype,"_detailsProps",null);f.__decorate([k.property()],e.prototype,"_profilesArray",null);f.__decorate([k.property()],e.prototype,"_settingsButtonProps",null);return e=f.__decorate([C.subclass("esri.widgets.ElevationProfile")],e)});