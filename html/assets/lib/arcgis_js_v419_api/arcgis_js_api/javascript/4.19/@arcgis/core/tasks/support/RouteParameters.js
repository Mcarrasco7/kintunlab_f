/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{clone as t}from"../../core/lang.js";import"../../chunks/deprecate.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{a as s}from"../../chunks/JSONSupport.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/cast.js";import{J as o}from"../../chunks/jsonMap.js";import{r as n}from"../../chunks/reader.js";import{w as p}from"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import a from"../../geometry/SpatialReference.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import{a as u}from"../../chunks/commonProperties3.js";var l;const c=new o({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),m=new o({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),d=new o({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),y=new o({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),h=new o({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});let j=l=class extends s{constructor(e){super(e),this.accumulateAttributes=null,this.apiKey=null,this.attributeParameterValues=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsOutputType=null,this.directionsStyleName=null,this.directionsTimeAttribute=null,this.doNotLocateOnRestrictedElements=!0,this.findBestSequence=null,this.ignoreInvalidLocations=null,this.impedanceAttribute=null,this.outputGeometryPrecision=null,this.outputGeometryPrecisionUnits=null,this.outputLines="true-shape",this.outSpatialReference=null,this.pointBarriers=null,this.polygonBarriers=null,this.polylineBarriers=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.restrictionAttributes=null,this.restrictUTurns=null,this.returnBarriers=!1,this.returnDirections=!1,this.returnPolygonBarriers=!1,this.returnPolylineBarriers=!1,this.returnRoutes=!0,this.returnStops=!1,this.returnZ=!0,this.startTime=null,this.startTimeIsUTC=!0,this.stops=null,this.travelMode=null,this.useHierarchy=null,this.useTimeWindows=null}readStartTime(e,t){return null!=t.startTime?new Date(t.startTime):null}writeStartTime(e,t){t.startTime=e?e.getTime():null}clone(){return new l(t({accumulateAttributes:this.accumulateAttributes,apiKey:this.apiKey,attributeParameterValues:this.attributeParameterValues,directionsLanguage:this.directionsLanguage,directionsLengthUnits:this.directionsLengthUnits,directionsOutputType:this.directionsOutputType,directionsStyleName:this.directionsStyleName,directionsTimeAttribute:this.directionsTimeAttribute,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,findBestSequence:this.findBestSequence,ignoreInvalidLocations:this.ignoreInvalidLocations,impedanceAttribute:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:this.outputGeometryPrecisionUnits,outputLines:this.outputLines,outSpatialReference:this.outSpatialReference,pointBarriers:this.pointBarriers,polygonBarriers:this.polygonBarriers,polylineBarriers:this.polylineBarriers,preserveFirstStop:this.preserveFirstStop,preserveLastStop:this.preserveLastStop,restrictionAttributes:this.restrictionAttributes,restrictUTurns:this.restrictUTurns,returnBarriers:this.returnBarriers,returnDirections:this.returnDirections,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,returnRoutes:this.returnRoutes,returnStops:this.returnStops,returnZ:this.returnZ,startTime:this.startTime,startTimeIsUTC:this.startTimeIsUTC,stops:this.stops,travelMode:this.travelMode,useHierarchy:this.useHierarchy,useTimeWindows:this.useTimeWindows}))}};e([r({type:[String],json:{write:!0}})],j.prototype,"accumulateAttributes",void 0),e([r(u)],j.prototype,"apiKey",void 0),e([r({json:{write:!0}})],j.prototype,"attributeParameterValues",void 0),e([r({type:String,json:{write:!0}})],j.prototype,"directionsLanguage",void 0),e([r({type:m.apiValues,json:{read:m.read,write:m.write}})],j.prototype,"directionsLengthUnits",void 0),e([r({type:y.apiValues,json:{read:y.read,write:y.write}})],j.prototype,"directionsOutputType",void 0),e([r({type:String,json:{write:!0}})],j.prototype,"directionsStyleName",void 0),e([r({type:String,json:{write:!0}})],j.prototype,"directionsTimeAttribute",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"doNotLocateOnRestrictedElements",void 0),e([r({json:{write:!0}})],j.prototype,"findBestSequence",void 0),e([r({json:{write:!0}})],j.prototype,"ignoreInvalidLocations",void 0),e([r({type:String,json:{read:{source:"impedanceAttributeName"},write:{target:"impedanceAttributeName"}}})],j.prototype,"impedanceAttribute",void 0),e([r({type:Number,json:{write:!0}})],j.prototype,"outputGeometryPrecision",void 0),e([r({type:h.apiValues,json:{read:h.read,write:h.write}})],j.prototype,"outputGeometryPrecisionUnits",void 0),e([r({type:c.apiValues,json:{read:c.read,write:c.write}})],j.prototype,"outputLines",void 0),e([r({type:a,json:{write:!0}})],j.prototype,"outSpatialReference",void 0),e([r({json:{write:!0}})],j.prototype,"pointBarriers",void 0),e([r({json:{write:!0}})],j.prototype,"polygonBarriers",void 0),e([r({json:{write:!0}})],j.prototype,"polylineBarriers",void 0),e([r({json:{write:!0}})],j.prototype,"preserveFirstStop",void 0),e([r({json:{write:!0}})],j.prototype,"preserveLastStop",void 0),e([r({type:[String],json:{write:!0}})],j.prototype,"restrictionAttributes",void 0),e([r({type:d.apiValues,json:{read:d.read,write:d.write}})],j.prototype,"restrictUTurns",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"returnBarriers",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"returnDirections",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"returnPolygonBarriers",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"returnPolylineBarriers",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"returnRoutes",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"returnStops",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"returnZ",void 0),e([r({type:Date,json:{type:Number,write:!0}})],j.prototype,"startTime",void 0),e([n("startTime")],j.prototype,"readStartTime",null),e([p("startTime")],j.prototype,"writeStartTime",null),e([r({type:Boolean,json:{write:!0}})],j.prototype,"startTimeIsUTC",void 0),e([r({json:{write:!0}})],j.prototype,"stops",void 0),e([r({json:{write:!0}})],j.prototype,"travelMode",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"useHierarchy",void 0),e([r({type:Boolean,json:{write:!0}})],j.prototype,"useTimeWindows",void 0),j=l=e([i("esri.tasks.support.RouteParameters")],j);var w=j;export default w;
