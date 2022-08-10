/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import s from"../core/Error.js";import{b as i}from"./enums.js";import{i as r}from"./Utils10.js";const l=e.getLogger("esri.views.2d.engine.webgl");function a(e){return r(e.minDataValue)&&r(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?i.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?i.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?i.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?i.SIZE_UNIT_VALUE:(l.error(new s("mapview-bad-type","Found invalid size VisualVariable",e)),i.NONE)}export{a as g};
