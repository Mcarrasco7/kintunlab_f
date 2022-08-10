/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"../core/lang.js";import"./deprecate.js";import"./object.js";import"../kernel.js";import"../config.js";import{i as e}from"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{whenOrAbort as t,throwIfAbortError as i,eachAlways as o}from"../core/promiseUtils.js";import"./Message.js";import s from"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./JSONSupport.js";import{r as l}from"./asyncUtils.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"../geometry/SpatialReference.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import n from"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./zmUtils.js";import a from"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import r from"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import{a as c}from"./unitUtils.js";import"./mat4.js";import"./pe.js";import{u as p,c as m,q as u}from"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import{initializeProjection as h,project as d}from"../geometry/projection.js";import{MultiTileElevationSampler as f}from"../layers/support/ElevationSampler.js";class y{constructor(e,t){if(this.tile=e,!t)return void(this.samplerData=null);const i=this.tile.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}sample(e,t){if(this.samplerData)return function(e,t,i){const{safeWidth:o,width:s,pixelData:l,noDataValue:n}=e,a=T(e.dy*(e.y1-i),0,o),r=T(e.dx*(t-e.x0),0,o),c=Math.floor(a),p=Math.floor(r),m=c*s+p,u=m+s,h=l[m],d=l[u],f=l[m+1],y=l[u+1];if(h!==n&&d!==n&&f!==n&&y!==n){const e=r-p,t=h+(f-h)*e;return t+(d+(y-d)*e-t)*(a-c)}return}(this.samplerData,e,t)}}function T(e,t,i){return e<t?t:e>i?i:e}class g{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const o=x.fromGeometry(t);let l=!1;i&&i.returnSampleInfo||(l=!0);const n={...E,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],o,n),r=await this._queryAllContinue(e,a,n);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof x)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new s("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const o={...E,...i},l=new w(e,t.spatialReference,o),n=o.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(l,t,n),await this._selectTiles(l,n),await this._populateElevationTiles(l,n),this._sampleGeometryWithElevation(l),this._createQueryResult(l,n)}async createSampler(e,t,i){if(!e)throw new s("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s("elevation-query:invalid-extent","Invalid or undefined extent");const o={...E,...i};return this._createSampler(e,t,o)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s("elevation-query:invalid-extent","Invalid or undefined extent");const o={...E,...i,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,o);return this._createSamplerAllContinue(e,t,l,o)}async _createSampler(e,t,i,o){const s=i.signal;await e.load({signal:s});const l=t.spatialReference,n=e.tileInfo.spatialReference;l.equals(n)||(await h([{source:l,dest:n}],{signal:s}),t=d(t,n));const a=new _(e,t,i,o);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new f(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,o){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>p(e.extent))),l=await this._createSampler(e[e.length-1],t,o,s);if(0===l.samplers.length)return i;const n=i.samplers.concat(l.samplers),a=new f(n,o.noDataValue);return this._createSamplerAllContinue(e,t,a,o)}async _queryAllContinue(e,t,i){const o=e.pop(),s=t.geometry.coordinates,l=[],n=[];for(let i=0;i<s.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=o):e.length&&(l.push(s[i]),n.push(i))}if(!e.length||0===l.length)return t;const a=t.geometry.clone(l),r=await this.query(e[e.length-1],a,i);return n.forEach(((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let o;const l=e.layer.tileInfo.spatialReference;if(t instanceof x?o=await t.project(l,i):(await h([{source:t.spatialReference,dest:l}],{signal:i}),o=d(t,l)),!o)throw new s("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=x.fromGeometry(o)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new s("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){const t=new y(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const o=e.x,s=e.y;(o<i.xmin||o>i.xmax||s<i.ymin||s>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/c(e.spatialReference);let o=e.lods[0],s=0;for(let t=1;t<e.lods.length;t++){const l=e.lods[t];Math.abs(l.resolution-i)<Math.abs(o.resolution-i)&&(o=l,s=t)}return s}async _selectTilesFinestContiguous(e,t){const i=j(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,o,l){const n=e.layer;if(e.selectTilesAtLOD(o),o<0)return;const a=n.tilemapCache,r=e.getTilesToFetch();try{if(a)await t(Promise.all(r.map((e=>a.fetchAvailability(e.level,e.row,e.col,{signal:l})))),l);else if(await this._populateElevationTiles(e,l),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s("elevation-query:has-unavailable-tiles")}catch(t){i(t),await this._selectTilesFinestContiguousAt(e,o-1,l)}}async _populateElevationTiles(i,s){const l=i.getTilesToFetch(),n={},a=i.options.cache,r=i.options.noDataValue,c=l.map((async t=>{const o=`${i.layer.uid}:${t.id}:${r}`,l=e(a)?a.get(o):null,c=e(l)?l:await i.layer.fetchTile(t.level,t.row,t.col,{noDataValue:r,signal:s});e(a)&&a.put(o,c),n[t.id]=new y(t,c)}));await t(o(c),s),i.populateElevationTiles(n)}async _selectTilesAuto(e,o){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const s=e.layer.tilemapCache;if(!s)return this._selectTilesAutoPrefetchUpsample(e,o);const n=e.getTilesToFetch(),a={},r=n.map((async e=>{const t={id:null,level:0,row:0,col:0,extent:m()},n=await l(s.fetchAvailabilityUpsample(e.level,e.row,e.col,t,{signal:o}));!1===n.ok?i(n.error):a[e.id]=t}));await t(Promise.all(r),o),e.remapTiles(a)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const o={},s=e=>{e.id in o?o[e.id]++:(o[e.id]=1,i++)},l=e=>{const t=o[e.id];1===t?(delete o[e.id],i--):o[e.id]=t-1};e.forEachTileToFetch(s,l);let n=!0;for(;n&&(n=!1,e.forEachTileToFetch((o=>{i<=e.options.maximumAutoTileRequests||(l(o),t.upsampleTile(o)&&(n=!0),s(o))}),l),n););}_selectTilesAutoFinest(e){const t=j(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let o=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?o=!0:t()})),o&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let o=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);void 0!==e?o=e:t.elevationTile=null}t.z=o}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=c(t.spatialReference);return e.geometry.coordinates.map((o=>{let s=-1;if(o.elevationTile&&o.elevationTile!==e.outsideExtentTile){s=t.lodAt(o.elevationTile.tile.level).resolution*i}return{demResolution:s}}))}}class x{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new x;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await h([{source:this.spatialReference,dest:e}],{signal:t});const i=new a({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),o=d(i,e);if(!o)return null;const s=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=o.points[t];return i.x=s[0],i.y=s[1],i})),l=this.clone(s);return l.spatialReference=e,l}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new x;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof x)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const o=e.clone(t);return o.spatialReference=i,o};else switch(e.type){case"point":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:o?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new n(t[0].x,t[0].y,t[0].z,t[0].m,i):new n(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):o?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):s?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new a({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new a(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,o=[],s=[],{hasZ:l,hasM:n}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,l&&n)for(const t of e)o.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(l)for(const t of e)o.push({x:t[0],y:t[1],z:t[2]});else if(n)for(const t of e)o.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)o.push({x:t[0],y:t[1]});t.coordinates=o,t._exporter=(t,i)=>{const o=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=s.map((e=>o.slice(e[0],e[1])));return new r({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class v{constructor(e,t){this.layer=e,this.options=t}}class w extends v{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const o=i.tile;i.elevationTile||!i.tile||e[o.id]||(e[o.id]=o,t.push(o))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class _ extends v{constructor(e,t,i,o){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=o}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),o=Math.min(i,e);o<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(o)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;for(let o=t.lods.length-1;o>=0;o--){const s=t.lods[o],l=s.resolution*t.size[0],n=s.resolution*t.size[1];if(Math.ceil(i.width/l)*Math.ceil(i.height/n)<=e)return o}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let o=!1;e(i,(()=>o=!0)),o?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},o=[];for(const s of e)i[s.id]?t&&t(s):(i[s.id]=s,o.push(s));const s=o.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let o=0;o<i;o++)if(u(s[o].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.layer.tileInfo,i=t.lods[e],o=this.extent,s=t.tileAt(i.level,o.xmin,o.ymin),l=i.resolution*t.size[0],n=i.resolution*t.size[1],a=Math.ceil((o.xmax-s.extent[0])/l),r=Math.ceil((o.ymax-s.extent[1])/n);for(let e=0;e<r;e++)for(let i=0;i<a;i++){const o={id:null,level:s.level,row:s.row-e,col:s.col+i};t.updateTileInfo(o),this._tileIsMasked(o)||this.candidateTiles.push(o)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>u(t,e.extent)))}}function j(e,t){let i=e.lods.length-1;if(t>0){const o=e.lods.findIndex((e=>e.resolution<t));0===o?i=0:o>0&&(i=o-1)}return i}const E={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export default g;export{g as ElevationQuery,x as GeometryDescriptor,j as getFinestLodIndex};
