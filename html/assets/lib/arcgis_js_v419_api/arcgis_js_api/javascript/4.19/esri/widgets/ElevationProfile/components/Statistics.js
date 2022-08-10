// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/unitFormatUtils ../../../core/throttle ../../support/widgetUtils ../../support/decorators/messageBundle ../../../chunks/index ../../Widget ../css ../support/constants".split(" "),
function(d,w,k,B,r,C,D,m,E,x,F,G,H,n,y,I,t,g,z,h,l){d.Statistics=function(u){function p(a,c){a=u.call(this,a,c)||this;a._messagesUnits=null;a._updateLayout=b=>{const e=b.parentElement,A=b.style.display;e.removeChild(b);document.body.appendChild(b);b.style.display="block";let q=80;for(const v of b.childNodes)v instanceof HTMLElement&&(q=Math.max(q,v.offsetWidth));document.body.removeChild(b);e.appendChild(b);b.style.display=A;b.style.setProperty("--max-width",`${q}px`)};a._updateLayoutThrottled=y.throttle(a._updateLayout,
100);return a}w._inheritsLoose(p,u);var f=p.prototype;f.initialize=function(){this.own(this._updateLayoutThrottled)};f.render=function(){return g.jsx("div",{bind:this,class:h.STATISTICS_CSS.base,afterCreate:this._updateLayout,afterUpdate:this._updateLayoutThrottled},this._renderStatistics())};f._renderStatistics=function(){var a;const c=null==(a=this._messages)?void 0:a.statistics;return c?[this._renderDistanceStatistic("maxDistance",c.maxDistance),this._renderElevationStatistic("elevationGain",c.gain),
this._renderElevationStatistic("elevationLoss",c.loss),this._renderElevationStatistic("minElevation",c.minElevation),this._renderElevationStatistic("maxElevation",c.maxElevation),this._renderElevationStatistic("avgElevation",c.avgElevation),this._renderSlopeStatistic("maxPositiveSlope","maxNegativeSlope",c.maxSlope),this._renderSlopeStatistic("avgPositiveSlope","avgNegativeSlope",c.avgSlope)]:[]};f._renderDistanceStatistic=function(a,c){a=this._renderValue(a,b=>n.formatDecimal(this._messagesUnits,
b,this.effectiveUnits.distance,l.FORMAT_PRECISION));return this._renderStatistic(c,a)};f._renderElevationStatistic=function(a,c){a=this._renderValue(a,b=>n.formatDecimal(this._messagesUnits,b,this.effectiveUnits.elevation,l.FORMAT_PRECISION));return this._renderStatistic(c,a)};f._renderSlopeStatistic=function(a,c,b){a=g.jsx("div",{key:"slope-up",class:h.STATISTICS_CSS.slopeValue},g.jsx("div",{class:h.STATISTICS_CSS.slopeUpIcon}),this._renderValue(a,e=>n.formatAngleDegrees(e,"degrees",l.FORMAT_PRECISION)),
g.jsx("div",{class:h.STATISTICS_CSS.slopeDownIcon}),this._renderValue(c,e=>n.formatAngleDegrees(e,"degrees",l.FORMAT_PRECISION)));return this._renderStatistic(b,a)};f._renderStatistic=function(a,c){return g.jsx("div",{class:h.STATISTICS_CSS.statistic},g.jsx("label",{class:h.STATISTICS_CSS.statisticLabel},a),g.jsx("div",{class:h.STATISTICS_CSS.statisticValue},c))};f._renderValue=function(a,c){var b=this.line;b=r.applySome(1===b.progress?b.statistics:null,e=>e[a]);return r.isSome(b)?c(b):l.NOT_AVAILABLE};
return p}(z);k.__decorate([m.property()],d.Statistics.prototype,"effectiveUnits",void 0);k.__decorate([m.property()],d.Statistics.prototype,"line",void 0);k.__decorate([m.property(),t.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],d.Statistics.prototype,"_messages",void 0);k.__decorate([m.property(),t.messageBundle("esri/core/t9n/Units")],d.Statistics.prototype,"_messagesUnits",void 0);d.Statistics=k.__decorate([x.subclass("esri.widgets.ElevationProfile.Statistics")],d.Statistics);
Object.defineProperty(d,"__esModule",{value:!0})});