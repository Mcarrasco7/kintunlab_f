// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../chunks/_rollupPluginBabelHelpers","../../core/has","../../core/maybe","./ShaderTranspiler"],function(m,p,l,n){function k(e,f){if(l.isNone(e)||e.length!==f.length)return!0;for(let b=0;b<e.length;++b)if(e[b]!==f[b])return!0;return!1}return function(){function e(b,a,c,d,g={}){this._glName=this._context=null;this._locations={};this._initialized=!1;this._fShader=this._vShader=null;this._defines={};this._nameToUniformLocation={};this._nameToAttribLocation={};this._nameToUniform1={};this._nameToUniform1v=
{};this._nameToUniform2={};this._nameToUniform3={};this._nameToUniform4={};this._nameToUniformMatrix3={};this._nameToUniformMatrix4={};b||console.error("RenderingContext isn't initialized!");0===a.length&&console.error("Shaders source should not be empty!");b.instanceCounter.increment(3,this);this._context=b;this._vertexShaderSource=a;this._fragmentShaderSource=c;if(Array.isArray(g))for(const h of g)this._defines[h]="1";else this._defines=g;this._locations=d}var f=e.prototype;f.getDefine=function(b){return this._defines[b]};
f.dispose=function(){if(this._context){var b=this._context.gl;this._vShader&&(b.deleteShader(this._vShader),this._vShader=null);this._fShader&&(b.deleteShader(this._fShader),this._fShader=null);this._glName&&(b.deleteProgram(this._glName),this._glName=null);this._context.instanceCounter.decrement(3,this);this._context=null}};f.initialize=function(){if(!this._initialized){this._vShader=this._loadShader(35633);this._fShader=this._loadShader(35632);this._vShader&&this._fShader||console.error("Error loading shaders!");
var b=this._context.gl,a=b.createProgram();b.attachShader(a,this._vShader);b.attachShader(a,this._fShader);for(const c in this._locations)b.bindAttribLocation(a,this._locations[c],c);b.linkProgram(a);this._glName=a;this._initialized=!0}};f.getUniformLocation=function(b){this.initialize();void 0===this._nameToUniformLocation[b]&&(this._nameToUniformLocation[b]=this._context.gl.getUniformLocation(this._glName,b));return this._nameToUniformLocation[b]};f.hasUniform=function(b){return null!==this.getUniformLocation(b)};
f.getAttribLocation=function(b){this.initialize();void 0===this._nameToAttribLocation[b]&&(this._nameToAttribLocation[b]=this._context.gl.getAttribLocation(this._glName,b));return this._nameToAttribLocation[b]};f.setUniform1i=function(b,a){const c=this._nameToUniform1[b];if(void 0===c||a!==c)this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(b),a),this._nameToUniform1[b]=a};f.setUniform1iv=function(b,a){const c=this._nameToUniform1v[b];k(c,a)&&(this._context.bindProgram(this),
this._context.gl.uniform1iv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform1v[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniform2iv=function(b,a){const c=this._nameToUniform2[b];k(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform2[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniform3iv=function(b,a){const c=this._nameToUniform3[b];k(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(b),
a),void 0===c?this._nameToUniform3[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniform4iv=function(b,a){const c=this._nameToUniform4[b];k(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform4[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniform1f=function(b,a){const c=this._nameToUniform1[b];if(void 0===c||a!==c)this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(b),a),this._nameToUniform1[b]=
a};f.setUniform1fv=function(b,a){const c=this._nameToUniform1v[b];k(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform1v[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniform2f=function(b,a,c){const d=this._nameToUniform2[b];if(void 0===d||a!==d[0]||c!==d[1])this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(b),a,c),void 0===d?this._nameToUniform2[b]=[a,c]:(d[0]=a,d[1]=c)};f.setUniform2fv=
function(b,a){const c=this._nameToUniform2[b];k(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform2[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniform3f=function(b,a,c,d){const g=this._nameToUniform3[b];if(void 0===g||a!==g[0]||c!==g[1]||d!==g[2])this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(b),a,c,d),void 0===g?this._nameToUniform3[b]=[a,c,d]:(g[0]=a,g[1]=c,g[2]=d)};f.setUniform3fv=
function(b,a){const c=this._nameToUniform3[b];k(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform3[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniform4f=function(b,a,c,d,g){const h=this._nameToUniform4[b];if(void 0===h||a!==h[0]||c!==h[1]||d!==h[2]||g!==h[3])this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(b),a,c,d,g),void 0===h?this._nameToUniform4[b]=[a,c,d,g]:(h[0]=a,h[1]=c,h[2]=d,
h[3]=g)};f.setUniform4fv=function(b,a){const c=this._nameToUniform4[b];k(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform4[b]=e._arrayCopy(a):e._arrayAssign(a,c))};f.setUniformMatrix3fv=function(b,a,c=!1){const d=this._nameToUniformMatrix3[b];var g=l.isNone(d)?!0:9!==d.length?k(d,a):9!==d.length||d[0]!==a[0]||d[1]!==a[1]||d[2]!==a[2]||d[3]!==a[3]||d[4]!==a[4]||d[5]!==a[5]||d[6]!==a[6]||d[7]!==a[7]||d[8]!==a[8];g&&(this._context.bindProgram(this),
this._context.gl.uniformMatrix3fv(this.getUniformLocation(b),c,a),void 0===d?this._nameToUniformMatrix3[b]=e._arrayCopy(a):e._arrayAssign(a,d))};f.setUniformMatrix4fv=function(b,a,c=!1){const d=this._nameToUniformMatrix4[b];var g=l.isNone(d)?!0:16!==d.length?k(d,a):16!==d.length||d[0]!==a[0]||d[1]!==a[1]||d[2]!==a[2]||d[3]!==a[3]||d[4]!==a[4]||d[5]!==a[5]||d[6]!==a[6]||d[7]!==a[7]||d[8]!==a[8]||d[9]!==a[9]||d[10]!==a[10]||d[11]!==a[11]||d[12]!==a[12]||d[13]!==a[13]||d[14]!==a[14]||d[15]!==a[15];g&&
(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(b),c,a),void 0===d?this._nameToUniformMatrix4[b]=e._arrayCopy(a):e._arrayAssign(a,d))};f.assertCompatibleVertexAttributeLocations=function(b){(b=b.locations===this.locations)||console.error("VertexAttributeLocations are incompatible");return b};e._padToThree=function(b){let a=b.toString();1E3>b&&(a=("  "+b).slice(-3));return a};f._addLineNumbers=function(b){let a=2;return b.replace(/\n/g,()=>"\n"+e._padToThree(a++)+
":")};f._loadShader=function(b){var a=35633===b,c=a?this._vertexShaderSource:this._fragmentShaderSource;let d="";for(const g in this._defines)d+=`#define ${g} ${this._defines[g]}\n`;c=d+c;"webgl2"===this._context.contextVersion&&(c=n.transpileShader(c,a?"vertex":"fragment"));a=this._context.gl;b=a.createShader(b);a.shaderSource(b,c);a.compileShader(b);return b};e._arrayCopy=function(b){const a=[];for(let c=0;c<b.length;++c)a.push(b[c]);return a};e._arrayAssign=function(b,a){for(let c=0;c<b.length;++c)a[c]=
b[c]};m._createClass(e,[{key:"glName",get:function(){return this._glName}},{key:"locations",get:function(){return this._locations}}]);return e}()});