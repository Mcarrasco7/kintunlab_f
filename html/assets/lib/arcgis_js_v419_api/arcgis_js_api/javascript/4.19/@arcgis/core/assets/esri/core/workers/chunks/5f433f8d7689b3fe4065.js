self.webpackChunkRemoteClient([85],{33:function(e,t,i){"use strict";i.r(t);i(11),i(17),i(1),i(19),i(4),i(18),i(6),i(0),i(9),i(3),i(7),i(15),i(16),i(12),i(2),i(10);var s=i(8),n=(i(5),i(13),i(68),i(42),i(14),i(48),i(43),i(47),i(45),i(44),i(21),i(46)),r=(i(27),i(69),i(51),i(52),i(49),i(54),i(50),i(53),i(200),i(247),i(223),i(65),i(63),i(62),i(60),i(61),i(67),i(59)),a=(i(64),i(78),i(71),i(79),i(80),i(82),i(95),i(89)),l=(i(90),i(216),i(201),i(198),i(306),i(20),i(173)),u=(i(255),i(283),i(183),i(284),i(280),i(285),i(281),i(22),i(271),i(129),i(219),i(211)),d=(i(348),i(199),i(196)),o=(i(252),i(429)),c=i(343),f=(i(312),i(311),i(344)),p=(i(272),i(286),i(313),i(359)),y=(i(334),i(373)),h=(i(349),i(455));const b=n.a,m={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:n.a},g={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function j(e){return Object(r.f)(e)?null!=e.z:!!e.hasZ}function I(e){return Object(r.f)(e)?null!=e.m:!!e.hasM}t.default=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],d=null!=e.hasM?e.hasM:n.hasM,h=null!=e.hasZ?e.hasZ:n.hasZ,j=!e.spatialReference&&!n.spatialReference,I=j?b:e.spatialReference||n.spatialReference,F=j?m:null,O=e.geometryType||n.geometryType,_=!O;let E=e.objectIdField||n.objectIdField,x=e.timeInfo;if(!_&&(j&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!O))throw new s.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!E)throw new s.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&E!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${E}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),E=n.objectIdField),E&&!n.objectIdField){let e=null;r.some(t=>t.name===E&&(e=t,!0))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.a("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===E&&(e.type="esriFieldTypeOID"),-1===l.a.jsonValues.indexOf(e.type))throw new s.a("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const T={};this._requiredFields=[];for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=Object(a.i)(e);e.nullable||void 0!==t?T[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new u.a(r),this._createDefaultAttributes=Object(c.b)(T,E),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const q={warnings:t,featureErrors:[],layerDefinition:{...g,drawingInfo:Object(c.c)(O),templates:Object(c.a)(T),extent:F,geometryType:O,objectIdField:E,fields:r,hasZ:!!h,hasM:!!d,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new y.a({fields:r,geometryType:O,hasM:d,hasZ:h,objectIdField:E,spatialReference:I,featureStore:new p.b({geometryType:O,hasM:d,hasZ:h}),timeInfo:x,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=o.b,q;const R=Object(o.a)(E,i);return this._nextObjectId=R+1,await Object(f.b)(i,I),this._loadInitialFeatures(q,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([Object(h.c)(t,i),Object(f.b)(e.adds,t),Object(f.b)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,n=null,a=null,l=null;for(const t of e){const e=t.geometry;if(e&&(n||(n=Object(r.c)(e)),a||(a=e.spatialReference),null==i&&(i=j(e)),null==s&&(s=I(e)),n&&a&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some(t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s})&&(l=e.name)}return{geometryType:n,spatialReference:a,objectIdField:l,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:a,spatialReference:l,featureStore:u}=this._queryEngine,o=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==Object(r.c)(s.geometry)){e.featureErrors.push(Object(h.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=Object(h.d)(this._fieldsIndex,this._requiredFields,t,s.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[a]),s.geometry&&(s.geometry=Object(f.c)(s.geometry,s.geometry.spatialReference,l)),o.push(s))}if(u.addMany(Object(d.k)([],o,i,n,s,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push(Object(h.b)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:a,objectIdField:l,spatialReference:u,featureStore:o}=this._queryEngine,c=[];for(const n of t){if(n.geometry&&s!==Object(r.c)(n.geometry)){i.push(Object(h.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=Object(h.d)(this._fieldsIndex,this._requiredFields,t,n.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[l];e.uidToObjectId[n.uid]=t}n.geometry&&(n.geometry=Object(f.c)(Object(h.e)(n.geometry,u),n.geometry.spatialReference,u)),c.push(n),i.push(Object(h.b)(n.attributes[l]))}}o.addMany(Object(d.k)([],c,s,a,n,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:a,spatialReference:l,featureStore:u}=this._queryEngine;for(const o of t){const{attributes:t,geometry:c}=o,p=t&&t[a];if(null==p){e.push(Object(h.a)(`Identifier field ${a} missing`));continue}if(!u.has(p)){e.push(Object(h.a)(`Feature with object id ${p} missing`));continue}const y=Object(d.l)(u.getFeature(p),i,n,s);if(c){if(i!==Object(r.c)(c)){e.push(Object(h.a)("Incorrect geometry type."));continue}y.geometry=Object(f.c)(Object(h.e)(c,l),c.spatialReference,l)}if(t){const i=Object(h.d)(this._fieldsIndex,this._requiredFields,y.attributes,t);if(i){e.push(i);continue}}u.add(Object(d.m)(y,i,n,s,a)),e.push(Object(h.b)(p))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},429:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s}));const s=1;function n(e,t){let i=0;for(const n of t){var s;const t=null==(s=n.attributes)?void 0:s[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}}});