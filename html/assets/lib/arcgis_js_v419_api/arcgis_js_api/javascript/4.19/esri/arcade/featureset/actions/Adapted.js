// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/promiseUtils ../../../geometry/SpatialReference ../../../Graphic ../support/shared ../../kernel ../support/IdSet ../../../core/sql/WhereClause ../support/sqlUtils ../support/FeatureSet".split(" "),function(u,v,r,E,F,w,G,y,z,p,A){let x=function(){function n(){this.sqlRewritable=!1}n.prototype.postInitialization=function(f,m){};return n}(),B=function(n){function f(a){var b=n.call(this)||this;b.field=a;b.sqlRewritable=!0;return b}
v._inheritsLoose(f,n);var m=f.prototype;m.extractValue=function(a){return a.attributes[this.field.name]};m.rewriteSql=function(a){return{rewritten:this.sqlRewritable,where:a}};return f}(x),C=function(n){function f(a,b,c){var e=n.call(this)||this;e.originalField=a;e.sqlRewritable=!0;e.field=w.cloneField(a);e.field.name=b;e.field.alias=c;return e}v._inheritsLoose(f,n);var m=f.prototype;m.rewriteSql=function(a,b){return{rewritten:this.sqlRewritable,where:p.reformulateWithoutField(a,this.field.name,this.originalField.name,
b.getFieldsIndex())}};m.extractValue=function(a){return a.attributes[this.originalField.name]};return f}(x),D=function(n){function f(a,b,c){var e=n.call(this)||this;e.field=a;e.codefield=b;e.lkp=c;e.reverseLkp={};for(const d in c)e.reverseLkp[c[d]]=d;e.sqlRewritable=!0;return e}v._inheritsLoose(f,n);var m=f.prototype;m.rewriteSql=function(a,b){const c=this.evaluateNodeToWhereClause(a.parseTree,w.FeatureServiceDatabaseType.Standardised,this.field.name,this.codefield instanceof z.WhereClause?p.toWhereClause(this.codefield,
w.FeatureServiceDatabaseType.Standardised):this.codefield,a.parameters);return 0<=c.indexOf(f.BADNESS)?{rewritten:!1,where:a}:{rewritten:this.sqlRewritable,where:z.WhereClause.create(c,b._parent.getFieldsIndex())}};m.evaluateNodeToWhereClause=function(a,b,c=null,e=null,d){var g;switch(a.type){case "interval":return p.convertIntervalToSql(this.evaluateNodeToWhereClause(a.value,b,c,e,d),a.qualifier,a.op);case "case_expression":e=" CASE ";"simple"===a.format&&(e+=this.evaluateNodeToWhereClause(a.operand,
b,c,f.BADNESS,d));for(g=0;g<a.clauses.length;g++)e+=" WHEN "+this.evaluateNodeToWhereClause(a.clauses[g].operand,b,c,f.BADNESS,d)+" THEN "+this.evaluateNodeToWhereClause(a.clauses[g].value,b,c,f.BADNESS,d);null!==a.else&&(e+=" ELSE "+this.evaluateNodeToWhereClause(a.else,b,c,f.BADNESS,d));return e+=" END ";case "param":c=d[a.value.toLowerCase()];if("string"===typeof c)return"'"+d[a.value.toLowerCase()].toString().replace(/'/g,"''")+"'";if(c instanceof Date)return p.makeDateString(c,b);if(c instanceof
Array){a=[];for(d=0;d<c.length;d++)"string"===typeof c[d]?a.push("'"+c[d].toString().replace(/'/g,"''")+"'"):c[d]instanceof Date?a.push(p.makeDateString(c[d],b)):a.push(c[d].toString());return a}return c.toString();case "expr_list":g=[];for(k of a.value)g.push(this.evaluateNodeToWhereClause(k,b,c,e,d));return g;case "unary_expr":return" ( NOT "+this.evaluateNodeToWhereClause(a.expr,b,c,f.BADNESS,d)+" ) ";case "binary_expr":switch(a.operator){case "AND":return" ("+this.evaluateNodeToWhereClause(a.left,
b,c,e,d)+" AND "+this.evaluateNodeToWhereClause(a.right,b,c,e,d)+") ";case "OR":return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" OR "+this.evaluateNodeToWhereClause(a.right,b,c,e,d)+") ";case "IS":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" IS NULL )";case "ISNOT":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" IS NOT NULL )";case "IN":var k=
[];if("expr_list"===a.right.type){if("column_ref"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){var l=[];k=!0;for(g of a.right.value)if("string"===g.type)if(void 0!==this.lkp[g.value])l.push(this.lkp[g.value].toString());else{k=!1;break}else{k=!1;break}if(k)return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" IN ("+l.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,b,c,e,d);return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" IN ("+k.join(",")+")) "}g=
this.evaluateNodeToWhereClause(a.right,b,c,e,d);return g instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" IN ("+g.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" IN ("+g+")) ";case "NOT IN":k=[];if("expr_list"===a.right.type){if("column_ref"===a.left.type&&a.left.column.toUpperCase()===this.field.name.toUpperCase()){g=[];k=!0;for(l of a.right.value)if("string"===l.type)if(void 0!==this.lkp[l.value])g.push(this.lkp[l.value].toString());else{k=!1;break}else{k=
!1;break}if(k)return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" NOT IN ("+g.join(",")+")) "}k=this.evaluateNodeToWhereClause(a.right,b,c,e,d);return" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" NOT IN ("+k.join(",")+")) "}g=this.evaluateNodeToWhereClause(a.right,b,c,e,d);return g instanceof Array?" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" NOT IN ("+g.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,e,d)+" NOT IN ("+g+")) ";case "BETWEEN":return e=this.evaluateNodeToWhereClause(a.right,
b,c,f.BADNESS,d)," ("+this.evaluateNodeToWhereClause(a.left,b,c,f.BADNESS,d)+" BETWEEN "+e[0]+" AND "+e[1]+" ) ";case "NOTBETWEEN":return e=this.evaluateNodeToWhereClause(a.right,b,c,f.BADNESS,d)," ("+this.evaluateNodeToWhereClause(a.left,b,c,f.BADNESS,d)+" NOT BETWEEN "+e[0]+" AND "+e[1]+" ) ";case "LIKE":return""!==a.escape?" ("+this.evaluateNodeToWhereClause(a.left,b,c,f.BADNESS,d)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,f.BADNESS,d)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,
b,c,f.BADNESS,d)+" LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,f.BADNESS,d)+") ";case "NOT LIKE":return""!==a.escape?" ("+this.evaluateNodeToWhereClause(a.left,b,c,f.BADNESS,d)+" NOT LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,f.BADNESS,d)+" ESCAPE '"+a.escape+"') ":" ("+this.evaluateNodeToWhereClause(a.left,b,c,f.BADNESS,d)+" NOT LIKE "+this.evaluateNodeToWhereClause(a.right,b,c,f.BADNESS,d)+") ";case "\x3c\x3e":case "\x3d":if("column_ref"===a.left.type&&"string"===a.right.type){if(a.left.column.toUpperCase()===
this.field.name.toUpperCase()&&void 0!==this.lkp[a.right.value.toString()])return" ("+e+" "+a.operator+" "+this.lkp[a.right.value.toString()].toString()+") "}else if("column_ref"===a.right.type&&"string"===a.left.type&&a.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[a.right.value.toString()].toString()+" "+a.operator+" "+e+") ";return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f.BADNESS,d)+" "+a.operator+" "+this.evaluateNodeToWhereClause(a.right,b,c,f.BADNESS,
d)+") ";case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "*":case "-":case "+":case "/":return" ("+this.evaluateNodeToWhereClause(a.left,b,c,f.BADNESS,d)+" "+a.operator+" "+this.evaluateNodeToWhereClause(a.right,b,c,f.BADNESS,d)+") "}throw Error("Not Supported Operator "+a.operator);case "null":return"null";case "bool":return!0===a.value?"1":"0";case "string":return"'"+a.value.toString().replace(/'/g,"''")+"'";case "timestamp":return p.makeDateString(a.value,b);case "date":return p.makeDateString(a.value,
b);case "number":return a.value.toString();case "current_time":return p.makeToday("date"===a.mode,b);case "column_ref":return c&&c.toLowerCase()===a.column.toLowerCase()?"("+e+")":a.column;case "function":return d=this.evaluateNodeToWhereClause(a.args,b,c,f.BADNESS,d),p.translateFunctionToDatabaseSpecific(a.name,d,b)}throw Error("Unsupported sql syntax "+a.type);};m.extractValue=function(a){return this.codefield instanceof z.WhereClause?this.reverseLkp[this.codefield.calculateValueCompiled(a)]:this.reverseLkp[a.attributes[this.codefield]]};
return f}(x);D.BADNESS="_!!!_BAD_LKP_!!!!";let H=function(n){function f(a,b){var c=n.call(this)||this;c.field=a;c.sql=b;return c}v._inheritsLoose(f,n);var m=f.prototype;m.rewriteSql=function(a,b){return{rewritten:!0,where:p.reformulateWithoutField(a,this.field.name,p.toWhereClause(this.sql,w.FeatureServiceDatabaseType.Standardised),b.getFieldsIndex())}};m.extractValue=function(a){return this.sql.calculateValueCompiled(a)};return f}(x);A=function(n){function f(a){var b=n.call(this,a)||this;b._calcFunc=
null;b.declaredClass="esri.arcade.featureset.actions.Adapted";b.adaptedFields=null;b._extraFilter=null;b._extraFilter=a.extraFilter;b._parent=a.parentfeatureset;b._maxProcessing=30;b.adaptedFields=a.adaptedFields;return b}v._inheritsLoose(f,n);f.findField=function(a,b){for(const c of a)if(c.name.toLowerCase()===b.toString().toLowerCase())return c;return null};var m=f.prototype;m._initialiseFeatureSet=function(){null!==this._parent?(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,
this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new E({wkid:4326}),this.globalIdField=this.objectIdField="",this.geometryType=w.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null);this.fields=[];for(const a of this.adaptedFields)a.postInitialization(this,this._parent),this.fields.push(a.field)};
m._getSet=function(a){return null===this._wset?this._ensureLoaded().then(()=>this._extraFilter?this._getFilteredSet("",null,null,null,a):this._parent._getSet(a)).then(b=>{this._checkCancelled(a);return this._wset=new y(b._candidates.slice(0),b._known.slice(0),b._ordered,this._clonePageDefinition(b.pagesDefinition))}):r.resolve(this._wset)};m._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};m._getFeatures=function(a,b,c,e){const d=[];-1!==b&&void 0===this._featureCache[b]&&d.push(b);
const g=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,g))return this._expandPagedSet(a,g,0,0,e).then(()=>this._getFeatures(a,b,c,e));let k=0;for(let h=a._lastFetchedIndex;h<a._known.length&&!(k++,k<=c&&(a._lastFetchedIndex+=1),void 0===this._featureCache[a._known[h]]&&(a._known[h]!==b&&d.push(a._known[h]),d.length>=g-1));h++);if(0===d.length)return r.resolve("success");a=new y([],d,a._ordered,null);const l=Math.min(d.length,c);return this._parent._getFeatures(a,-1,l,e).then(()=>
{this._checkCancelled(e);var h=[];for(let q=0;q<l;q++){const t=this._parent._featureFromCache(d[q]);void 0!==t&&h.push({geometry:t.geometry,attributes:t.attributes,id:d[q]})}for(const q of h){h=[];for(const t of this.adaptedFields)h[t.field.name]=t.extractValue(q);this._featureCache[q.id]=new F({attributes:h,geometry:G.cloneGeometry(q.geometry)})}return"success"})};m._fetchAndRefineFeatures=function(){return r.reject(Error("Fetch and Refine should not be called in this featureset"))};m._getFilteredSet=
function(a,b,c,e,d){let g=!1;var k=this.reformulateWithoutAdaptions(c);g=k.cannot;c=k.where;let l=!1;if(null!==e){l=!0;k=[];for(const h of this.adaptedFields)if(!(h instanceof B)&&!0===e.scanForField(h.field.name))if(h instanceof C)k.push({field:h.field.name,newfield:h.originalField.name});else{e=null;l=!1;break}e&&0<k.length&&(e=e.replaceFields(k))}null!==c?null!==this._extraFilter&&(c=p.combine(this._extraFilter,c)):c=this._extraFilter;return this._ensureLoaded().then(()=>this._parent._getFilteredSet(a,
b,c,e,d)).then(h=>{this._checkCancelled(d);return!0===g?new y(h._candidates.slice(0).concat(h._known.slice(0)),[],!0===l?h._ordered:!1,this._clonePageDefinition(h.pagesDefinition)):new y(h._candidates.slice(0),h._known.slice(0),!0===l?h._ordered:!1,this._clonePageDefinition(h.pagesDefinition))})};m.reformulateWithoutAdaptions=function(a){const b={cannot:!1,where:a};if(null!==a)for(const c of this.adaptedFields)if(!0===p.scanForField(a,c.field.name)){const e=c.rewriteSql(a,this);if(!0===e.rewritten)b.where=
e.where;else{b.cannot=!0;b.where=null;break}}return b};m._stat=function(a,b,c,e,d,g,k){let l=!1,h=this.reformulateWithoutAdaptions(b);l=h.cannot;b=h.where;h=this.reformulateWithoutAdaptions(d);l=l||h.cannot;d=h.where;null!==d?null!==this._extraFilter&&(d=p.combine(this._extraFilter,d)):d=this._extraFilter;return!0===l?null===d&&""===c&&null===e?this._manualStat(a,b,g,k):r.resolve({calculated:!1}):this._parent._stat(a,b,c,e,d,g,k).then(q=>!1===q.calculated?null===d&&""===c&&null===e?this._manualStat(a,
b,g,k):{calculated:!1}:q)};m._canDoAggregates=function(a,b,c,e,d){if(null===this._parent)return r.resolve(!1);for(var g=0;g<a.length;g++)for(var k of this.adaptedFields)if(a[g].toLowerCase()===k.field.name.toLowerCase()&&!(k instanceof B))return r.resolve(!1);g=[];for(k=0;k<b.length;k++){var l=b[k];if(null!==l.workingexpr){const h=this.reformulateWithoutAdaptions(l.workingexpr);if(h.cannot)return r.resolve(!1);l=l.clone();l.workingexpr=h.where;g.push(l)}else g.push(l)}b=this.reformulateWithoutAdaptions(d);
if(b.cannot)return r.resolve(!1);d=b.where;null!==d?null!==this._extraFilter&&(d=p.combine(this._extraFilter,d)):d=this._extraFilter;return this._parent._canDoAggregates(a,g,c,e,d)};m._getAggregatePagesDataSourceDefinition=function(a,b,c,e,d,g,k){if(null===this._parent)return r.reject(Error("Should never be called"));const l=[];for(let q=0;q<b.length;q++){var h=b[q];if(null!==h.workingexpr){const t=this.reformulateWithoutAdaptions(h.workingexpr);if(t.cannot)return r.reject(Error("Should never be called"));
h=h.clone();h.workingexpr=t.where;l.push(h)}else l.push(h)}b=this.reformulateWithoutAdaptions(d);if(b.cannot)return r.reject(Error("Should never be called"));d=b.where;null!==d?null!==this._extraFilter&&(d=p.combine(this._extraFilter,d)):d=this._extraFilter;return this._parent._getAggregatePagesDataSourceDefinition(a,l,c,e,d,g,k)};return f}(A);u.AdaptedFeatureSet=A;u.AdaptedField=x;u.FieldRename=C;u.OriginalField=B;u.SqlExpressionAdapted=H;u.StringToCodeAdapted=D;Object.defineProperty(u,"__esModule",
{value:!0})});