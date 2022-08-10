// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../geometry/Geometry ../../geometry/Point ../../geometry/Extent ../../geometry/Multipoint ../../geometry/support/coordsUtils ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils ../ImmutablePointArray ../../chunks/languageUtils ../Dictionary ../Feature ./centroid".split(" "),function(y,x,q,z,u,A,v,w,r,B,c,m,k,t){y.registerFunctions=function(n,p){n.ringisclockwise=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,1,1);b=[];let h=f=!1;if(null===a[0])return!1;
if(c.isArray(a[0])){for(const e of a[0])if(e instanceof q)b.push(e.hasZ?e.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]);else throw Error("Invalid Argument");0<b.length&&(f=a[0][0].hasZ,h=a[0][0].hasM)}else if(a[0]instanceof B)b=a[0]._elements,0<b.length&&(f=a[0]._hasZ,h=a[0]._hasM);else if(c.isImmutableArray(a[0])){for(const e of a[0].toArray())if(e instanceof q)b.push(e.hasZ?e.hasM?[e.x,e.y,e.z,e.m]:[e.x,e.y,e.z]:[e.x,e.y]);else throw Error("Invalid Argument");0<b.length&&(f=a[0].get(0).hasZ,h=
a[0].get(0).hasM)}else throw Error("Invalid Argument");return 3>b.length?!1:A.isClockwise(b,h,f)})};n.polygon=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,1,1);b=null;if(a[0]instanceof m){if(b=c.fixSpatialReference(k.parseGeometryFromDictionary(a[0]),d.spatialReference),!1===b instanceof v)throw Error("Illegal Parameter");}else b=a[0]instanceof v?r.fromJSON(a[0].toJSON()):c.fixSpatialReference(new v(JSON.parse(a[0])),d.spatialReference);if(null!==b&&!1===b.spatialReference.equals(d.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return c.fixNullGeometry(b)})};n.polyline=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,1,1);b=null;if(a[0]instanceof m){if(b=c.fixSpatialReference(k.parseGeometryFromDictionary(a[0]),d.spatialReference),!1===b instanceof w)throw Error("Illegal Parameter");}else b=a[0]instanceof w?r.fromJSON(a[0].toJSON()):c.fixSpatialReference(new w(JSON.parse(a[0])),d.spatialReference);if(null!==b&&!1===b.spatialReference.equals(d.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return c.fixNullGeometry(b)})};n.point=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,1,1);b=null;if(a[0]instanceof m){if(b=c.fixSpatialReference(k.parseGeometryFromDictionary(a[0]),d.spatialReference),!1===b instanceof q)throw Error("Illegal Parameter");}else b=a[0]instanceof q?r.fromJSON(a[0].toJSON()):c.fixSpatialReference(new q(JSON.parse(a[0])),d.spatialReference);if(null!==b&&!1===b.spatialReference.equals(d.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return c.fixNullGeometry(b)})};n.multipoint=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,1,1);b=null;if(a[0]instanceof m){if(b=c.fixSpatialReference(k.parseGeometryFromDictionary(a[0]),d.spatialReference),!1===b instanceof u)throw Error("Illegal Parameter");}else b=a[0]instanceof u?r.fromJSON(a[0].toJSON()):c.fixSpatialReference(new u(JSON.parse(a[0])),d.spatialReference);if(null!==b&&!1===b.spatialReference.equals(d.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");
return c.fixNullGeometry(b)})};n.extent=function(d,g){return p(d,g,function(b,f,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);b=null;a[0]instanceof m?b=c.fixSpatialReference(k.parseGeometryFromDictionary(a[0]),d.spatialReference):a[0]instanceof q?(b={xmin:a[0].x,ymin:a[0].y,xmax:a[0].x,ymax:a[0].y,spatialReference:a[0].spatialReference.toJSON()},a=a[0],a.hasZ?(b.zmin=a.z,b.zmax=a.z):a.hasM&&(b.mmin=a.m,b.mmax=a.m),b=r.fromJSON(b)):b=a[0]instanceof v?r.fromJSON(a[0].extent.toJSON()):a[0]instanceof
w?r.fromJSON(a[0].extent.toJSON()):a[0]instanceof u?r.fromJSON(a[0].extent.toJSON()):a[0]instanceof z?r.fromJSON(a[0].toJSON()):c.fixSpatialReference(new z(JSON.parse(a[0])),d.spatialReference);if(null!==b&&!1===b.spatialReference.equals(d.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return c.fixNullGeometry(b)})};n.geometry=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,1,1);b=null;b=a[0]instanceof k?c.fixSpatialReference(a[0].geometry(),
d.spatialReference):a[0]instanceof m?c.fixSpatialReference(k.parseGeometryFromDictionary(a[0]),d.spatialReference):c.fixSpatialReference(r.fromJSON(JSON.parse(a[0])),d.spatialReference);if(null!==b&&!1===b.spatialReference.equals(d.spatialReference))throw Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return c.fixNullGeometry(b)})};n.setgeometry=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,2,2);if(a[0]instanceof k){if(!0===a[0].immutable)throw Error("Feature is Immutable");
if(a[1]instanceof x||null===a[1])a[0]._geometry=a[1];else throw Error("Illegal Argument");}else throw Error("Illegal Argument");return c.voidOperation})};n.feature=function(d,g){return p(d,g,function(b,f,a){if(0===a.length)throw Error("Missing Parameters");b=null;if(1===a.length)if(c.isString(a[0]))b=k.fromJson(JSON.parse(a[0]));else if(a[0]instanceof k)b=k.createFromArcadeFeature(a[0]);else if(a[0]instanceof x)b=k.createFromGraphicLikeObject(a[0],null,null);else if(a[0]instanceof m)b=a[0].hasField("geometry")?
a[0].field("geometry"):null,a=a[0].hasField("attributes")?a[0].field("attributes"):null,null!==b&&b instanceof m&&(b=k.parseGeometryFromDictionary(b)),null!==a&&(a=k.parseAttributesFromDictionary(a)),b=k.createFromGraphicLikeObject(b,a,null);else throw Error("Illegal Argument");else if(2===a.length){f=b=null;if(null!==a[0])if(a[0]instanceof x)b=a[0];else if(b instanceof m)b=k.parseGeometryFromDictionary(a[0]);else throw Error("Illegal Argument");if(null!==a[1])if(a[1]instanceof m)f=k.parseAttributesFromDictionary(a[1]);
else throw Error("Illegal Argument");b=k.createFromGraphicLikeObject(b,f,null)}else{b=null;f={};if(null!==a[0])if(a[0]instanceof x)b=a[0];else if(b instanceof m)b=k.parseGeometryFromDictionary(a[0]);else throw Error("Illegal Argument");for(let h=1;h<a.length;h+=2){const e=c.toString(a[h]),l=a[h+1];if(null===l||void 0===l||c.isString(l)||isNaN(l)||c.isDate(l)||c.isNumber(l)||c.isBoolean(l)){if(c.isFunctionParameter(l)||!1===c.isSimpleType(l))throw Error("Illegal Argument");f[e]=l===c.voidOperation?
null:l}else throw Error("Illegal Argument");}b=k.createFromGraphicLikeObject(b,f,null)}b._geometry=c.fixSpatialReference(b.geometry(),d.spatialReference);b.immutable=!1;return b})};n.dictionary=function(d,g){return p(d,g,function(b,f,a){if(0===a.length)return a=new m,a.immutable=!1,a;if(1===a.length&&c.isString(a[0]))try{var h=JSON.parse(a[0]),e=m.convertObjectToArcadeDictionary(h);e.immutable=!1;return e}catch(l){throw Error("Missing Parameters or Illegal Json");}if(0!==a.length%2)throw Error("Missing Parameters");
b={};for(f=0;f<a.length;f+=2)if(h=c.toString(a[f]),e=a[f+1],null===e||void 0===e||c.isString(e)||isNaN(e)||c.isDate(e)||c.isNumber(e)||c.isBoolean(e)||c.isArray(e)||c.isImmutableArray(e)){if(c.isFunctionParameter(e))throw Error("Illegal Argument");b[h]=e===c.voidOperation?null:e}else throw Error("Illegal Argument");a=new m(b);a.immutable=!1;return a})};n.haskey=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,2,2);b=c.toString(a[1]);if(a[0]instanceof k||a[0]instanceof m)return a[0].hasField(b);
throw Error("Illegal Argument");})};n.indexof=function(d,g){return p(d,g,function(b,f,a){c.pcCheck(a,2,2);b=a[1];if(c.isArray(a[0])){for(f=0;f<a[0].length;f++)if(c.equalityTest(b,a[0][f]))return f;return-1}if(c.isImmutableArray(a[0])){f=a[0].length();for(let h=0;h<f;h++)if(c.equalityTest(b,a[0].get(h)))return h;return-1}throw Error("Illegal Argument");})};n.angle=function(d,g){return p(d,g,function(b,f,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(!(a[0]instanceof q))throw Error("Illegal Argument");
if(!(a[1]instanceof q))throw Error("Illegal Argument");if(2<a.length&&!(a[2]instanceof q))throw Error("Illegal Argument");return 2===a.length?t.angle2D(a[0],a[1]):t.angleBetween2D(a[0],a[1],a[2])})};n.bearing=function(d,g){return p(d,g,function(b,f,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,2,3);if(!(a[0]instanceof q))throw Error("Illegal Argument");if(!(a[1]instanceof q))throw Error("Illegal Argument");if(2<a.length&&!(a[2]instanceof q))throw Error("Illegal Argument");return 2===a.length?t.bearing2D(a[0],
a[1]):t.bearingBetween2D(a[0],a[1],a[2])})};n.isselfintersecting=function(d,g){return p(d,g,function(b,f,a){a=c.autoCastFeatureToGeometry(a);c.pcCheck(a,1,1);b=a[0];if(b instanceof v)return b.isSelfIntersecting;if(b instanceof w)return b=b.paths,t.pathsSelfIntersecting(b);if(b instanceof u)for(f=b.points,a=0;a<f.length;a++)for(let h=0;h<f.length;h++)if(h!==a){let e=!0;for(let l=0;l<f[a].length;l++)if(f[a][l]!==f[h][l]){e=!1;break}if(!0===e)return!0}return c.isArray(b)||c.isImmutableArray(b)?(b=c.autoCastArrayOfPointsToPolyline(b,
d.spatialReference),null!==b&&(b=b.paths),t.pathsSelfIntersecting(b)):!1})}};Object.defineProperty(y,"__esModule",{value:!0})});