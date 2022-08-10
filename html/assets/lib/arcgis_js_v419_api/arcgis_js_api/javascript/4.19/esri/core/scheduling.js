// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ./maybe ./nextTick ./PerformanceSampler ./PooledArray ./promiseUtils".split(" "),function(c,G,v,w,x,p){function y(){const a=performance.now();l=null;l=0<e.length?requestAnimationFrame(y):null;g.executeFrameTasks(a)}function z(){e.forAll(a=>{a.removed&&m.push(a)});e.removeUnorderedMany(m.data,m.length);m.clear()}function A(){for(;q.length;){const a=G.assumeNonNull(q.shift());a.isActive&&a.callback()}g.willDispatch=!1}let H=function(a){this.phases=a;this.paused=!1;this.ticks=-1;this.removed=
!1},I=function(){function a(b){this.callback=b;this.isActive=!0}a.prototype.remove=function(){this.isActive=!1};return a}(),r=0,t=0;const h={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},u=["prepare","preRender","render","postRender","update"],q=[],e=new x;let B=function(){function a(d){this._task=d}var b=a.prototype;b.remove=function(){this._task.removed=!0};b.pause=function(){this._task.paused=!0};b.resume=function(){this._task.paused=!1};return a}();const g={frameTasks:e,willDispatch:!1,
clearFrameTasks:function(a=!1){e.forAll(b=>{b.removed=!0});a&&z()},dispatch:A,executeFrameTasks:function(a){const b=a-r;r=a;const d=0<t?t:1E3/60,n=Math.max(0,b-d);for(let k=0;k<u.length;k++){const J=performance.now(),C=u[k];e.forAll(f=>{var D;f.paused||f.removed||(0===k&&f.ticks++,f.phases[C]&&(h.time=a,h.deltaTime=0===f.ticks?0:b,h.elapsedFrameTime=performance.now()-a,h.frameDuration=d-n,null==(D=f.phases[C])?void 0:D.call(f,h)))});E[k].record(performance.now()-J)}z();F.record(performance.now()-
a)}};let l=null;const m=new x,E=u.map(a=>new w(a)),F=new w("total");c.FrameTaskHandle=B;c.addFrameTask=function(a){a=new H(a);e.push(a);null==l&&(r=performance.now(),l=requestAnimationFrame(y));return new B(a)};c.debug=g;c.performanceInfo=E;c.performanceTotal=F;c.schedule=function(a){a=new I(a);q.push(a);g.willDispatch||(g.willDispatch=!0,v(A));return a};c.setFrameDuration=function(a){t=Math.max(0,a)};c.waitTicks=function(a=1,b){const d=p.createResolver(),n=()=>{p.isAborted(b)?d.reject(p.createAbortError()):
0===a?d():(--a,v(()=>n()))};n();return d.promise};Object.defineProperty(c,"__esModule",{value:!0})});