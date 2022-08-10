/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../core/lang.js";import{L as t,b as s}from"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import i from"../core/Accessor.js";import{a,P as n}from"../core/scheduling.js";import{throwIfAborted as u,createAbortError as _,when as h}from"../core/promiseUtils.js";import"./ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import{init as d}from"../core/watchUtils.js";class l{constructor(){this._tasks=new Array}get length(){return this._tasks.length}push(e,t){return new Promise(((s,r)=>this._tasks.push(new E(s,r,e,t))))}unshift(e,t){return new Promise(((s,r)=>this._tasks.unshift(new E(s,r,e,t))))}process(){if(0===this._tasks.length)return!1;const e=this._tasks.shift();try{u(e.signal);const t=e.callback();t&&"object"==typeof t&&"then"in t&&"function"==typeof t.then?t.then(e.resolve,e.reject):e.resolve(t)}catch(t){e.reject(t)}return!0}cancelAll(){const e=_();for(const t of this._tasks)t.reject(e);this._tasks.length=0}}class E{constructor(e,t,s,r){this.resolve=e,this.reject=t,this.callback=s,this.signal=r}}let c=class extends i{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};e([r()],c.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),e([r()],c.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),c=e([o("esri.views.support.DebugFlags")],c);const T=new c,g=t.getLogger("esri.views.support.Scheduler");function p(e){return new A.Scheduler({nowFunc:e})}var I;!function(e){e.REMOTE_CLIENT="worker messages",e.SLIDE="slide",e.STAGE="stage",e.STREAM_DATA_LOADER="stream loader",e.ELEVATION_QUERY="elevation query",e.TERRAIN_SURFACE="terrain",e.SURFACE_GEOMETRY_UPDATES="surface geometry updates",e.GRAPHICS_CORE="Graphics3D",e.I3S_CONTROLLER="I3S",e.POINT_CLOUD_LAYER="point cloud",e.FEATURE_TILE_FETCHER="feature fetcher",e.LABELER="labeler",e.GRAPHICS_DECONFLICTOR="graphics deconflictor",e.FILTER_VISIBILITY="Graphics3D filter visibility",e.FEATURE_QUERY_ENGINE="feature query",e.SCALE_VISIBILITY="Graphics3D scale visibility",e.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",e.POINT_OF_INTEREST_FREQUENT="POI frequent",e.POINT_OF_INTEREST_INFREQUENT="POI infrequent",e.FEATURE_TILE_TREE="feature tile tree",e.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",e.ELEVATION_ALIGNMENT="elevation alignment",e.TEXT_TEXTURE_ATLAS="text texture atlas",e.TEXTURE_UNLOAD="texture unload",e.OVERLAY_MANAGER="overlay manager",e.LINE_OF_SIGHT_TOOL="line of sight tool",e.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",e.ELEVATION_PROFILE="elevation profile",e.SNAPPING="snapping",e[e.TEST_PRIO=1]="TEST_PRIO"}(I||(I={}));const R={[I.REMOTE_CLIENT]:0,[I.SLIDE]:0,[I.STREAM_DATA_LOADER]:0,[I.ELEVATION_QUERY]:0,[I.STAGE]:1,[I.TERRAIN_SURFACE]:1,[I.SURFACE_GEOMETRY_UPDATES]:1,[I.GRAPHICS_CORE]:2,[I.I3S_CONTROLLER]:2,[I.POINT_CLOUD_LAYER]:2,[I.FEATURE_TILE_FETCHER]:2,[I.LABELER]:8,[I.GRAPHICS_DECONFLICTOR]:4,[I.FILTER_VISIBILITY]:4,[I.FEATURE_QUERY_ENGINE]:8,[I.SCALE_VISIBILITY]:4,[I.FRUSTUM_VISIBILITY]:4,[I.POINT_OF_INTEREST_FREQUENT]:6,[I.POINT_OF_INTEREST_INFREQUENT]:30,[I.FEATURE_TILE_TREE]:16,[I.FEATURE_TILE_TREE_ACTIVE]:0,[I.ELEVATION_ALIGNMENT]:12,[I.TEXT_TEXTURE_ATLAS]:12,[I.TEXTURE_UNLOAD]:12,[I.OVERLAY_MANAGER]:12,[I.LINE_OF_SIGHT_TOOL]:16,[I.LINE_OF_SIGHT_TOOL_INTERACTIVE]:0,[I.SNAPPING]:0};function m(e){return e in R?R[e]:"number"==typeof e?e:1}var A,S;!function(t){let u=class extends i{constructor(e){super(e),this.updating=!0,this.performanceInfo={total:new a("total"),tasks:new Array},this._budget=null,this._state=1,this._tasks=new n,this._runQueue=new n,this._load=0,this._idleStateCallbacks=new n,this._idleUpdatesStartFired=!1,this._maxReschedule=U,this._forceTask=!1,this._debug=!1,this._debugHandle=d(T,"SCHEDULER_LOG_SLOW_TASKS",(e=>this._debug=e)),this._budget=new h(e.nowFunc),k.length=0;for(const e in I)b.set(I[e],this.performanceInfo.tasks.length),this.performanceInfo.tasks.push(new a(I[e])),k.push(0);let t;const r=this;this._test={get state(){return s(t)?r._state:t},set state(e){t=e},FRAME_SAFETY_BUDGET:6.5,INTERACTING_BUDGET:33.333333333333336,IDLE_BUDGET:100,get budget(){return r._budget.budget},usedBudget:0,updateTask:e=>this._updateTask(e),getState:e=>this._getState(e),getRuntime:e=>this._getRuntime(e),resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}destroy(){this._debugHandle&&this._debugHandle.remove()}registerTask(e,t,s){const r=m(e),i=new _(this,e,t,s,r);return this._tasks.push(i),i}registerIdleStateCallbacks(e,t){const s={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(s),2===this.state&&this._idleUpdatesStartFired&&s.idleBegin();const r=this;return{remove:()=>this._removeIdleStateCallbacks(s),set idleBegin(e){r._idleUpdatesStartFired&&(s.idleEnd(),2===r._state&&e()),s.idleBegin=e},set idleEnd(e){s.idleEnd=e}}}get now(){return this.nowFunc()}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,2!==this.state&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((e=>e.idleEnd()))))}get state(){return s(this._test.state)?this._state:this._test.state}updateBudget(e){this._test.usedBudget=0;let t=6.5,s=e.frameDuration,r=1;switch(this.state){case 2:t=0,s=Math.max(100,e.frameDuration),r=30;break;case 1:s=Math.max(33.333333333333336,e.frameDuration)}return s-=e.elapsedFrameTime+t,2!==this.state&&s<1&&!this._forceTask?(this._forceTask=!0,!1):(s=Math.max(s,r),this._budget.reset(s,this.state),this._maxReschedule=U,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this.state){case 2:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((e=>e.idleBegin()))),this._runIdle();break;case 1:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e)}_updateTask(e){this._tasks.forAll((t=>{t.name===e&&t.setPriority(e)}))}_getState(e){if(this._runQueue.some((t=>t.name===e)))return S.SCHEDULED;let t=S.IDLE;return this._tasks.forAll((s=>{s.name===e&&s.needsUpdate&&(s.schedulePriority<=1?t=S.READY:t!==S.READY&&(t=S.WAITING))})),t}_getRuntime(e){let t=0;return this._tasks.forAll((s=>{s.name===e&&(t+=s.runtime)})),t}_resetRuntimes(){this._tasks.forAll((e=>e.runtime=0))}_getRunning(){const e=new Map;if(this._tasks.forAll((t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;let t="";return e.forEach(((e,s)=>{t+=e>1?` ${e}x ${s}`:` ${s}`})),t}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const e=this._tasks.reduce(((e,t)=>t.needsUpdate?++e:e),0);this._load=.9*this._load+e*(1-.9)}_schedule(){if(this._maxReschedule<=0)return!1;for(this._runQueue.filterInPlace((e=>!!e.needsUpdate||(e.schedulePriority=e.priority,!1))),this._tasks.forAll((e=>{0===e.priority&&e.needsUpdate&&!this._runQueue.some((t=>t===e))&&this._runQueue.unshift(e)}));0===this._runQueue.length;){let e=!1,t=0;if(this._tasks.forAll((s=>{if(s.needsUpdate&&0!==s.schedulePriority&&0!==s.priority)switch(e=!0,t=Math.max(t,s.priority),s.schedulePriority){case 1:s.schedulePriority=0,this._runQueue.push(s);break;default:--s.schedulePriority}})),!e)return this.updating=!1,!1;this._maxReschedule===U&&(this._maxReschedule=t),--this._maxReschedule}return this.updating=!0,!0}_run(){const e=this._budget.now();for(let e=0;e<k.length;++e)k[e]=0;do{for(;this._runQueue.length>0;){const t=this._budget.now(),s=this._runQueue.pop();this._budget.resetProgress();try{s.update(this._budget)}catch(e){g.error(`Exception in task "${s.name}"`,e)}s.schedulePriority=s.priority;const r=this._budget.now()-t;if(s.runtime+=r,k[b.get(s.task)]+=r,this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",s.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return void this._recordFrameTaskTimes(k,this._budget.now()-e)}}while(this._schedule());this._recordFrameTaskTimes(k,this._budget.now()-e)}_recordFrameTaskTimes(e,t){for(let t=0;t<e.length;++t)this.performanceInfo.tasks[t].record(e[t]);this.performanceInfo.total.record(t)}get test(){return this._test}};e([r()],u.prototype,"updating",void 0),e([r()],u.prototype,"nowFunc",void 0),u=e([o("esri.views.support.Scheduler")],u),t.Scheduler=u;let _=class extends i{constructor(e,t,s,r,i){super({}),this._scheduler=e,this.name=t,this.update=s,this._needsUpdateCB=r,this._priority=i,this.runtime=0,this._queue=new l,this.updating=!1,this.schedulePriority=this._priority}normalizeCtorArgs(){return{}}remove(){this.processQueue(f),this._scheduler.removeTask(this),this.schedule=L.schedule,this.reschedule=L.reschedule}get priority(){return this._priority}setPriority(e){this.name=e;const t=m(e);0!==this._priority&&0===this.schedulePriority||(this.schedulePriority=t),this._priority=t}get task(){return this.name}set task(e){this.setPriority(e)}get needsUpdate(){return this.updating||this._needsUpdateCB()}schedule(e,t){return this.updating=!0,this._queue.push(e,t)}reschedule(e,t){return this.updating=!0,this._queue.unshift(e,t)}processQueue(e){for(;!e.done&&this._queue.process();)e.madeProgress();this.updating=this._queue.length>0}};e([r()],_.prototype,"updating",void 0),_=e([o("esri.views.support.SchedulerTask")],_);class h{constructor(e){this.now=e,this._begin=0,this._budget=0,this._state=2,this._didWork=!1,this._enabled=!0}run(e){return!this.done&&(!0===e()&&(this._didWork=!0),!0)}get done(){return this._didWork&&this.elapsed>=this._budget&&this._enabled}get budget(){return this._budget}madeProgress(){this._didWork=!0}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e}reset(e,t){this._begin=this.now(),this._budget=e,this._state=t,this._didWork=!1}get remaining(){return Math.max(this._budget-this.elapsed,0)}get elapsed(){return this.now()-this._begin}resetProgress(){this._didWork=!1}get hasProgressed(){return this._didWork}}t.Budget=h}(A||(A={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(S||(S={}));const f=(()=>{const e=new A.Budget((()=>performance.now()));return e.enabled=!1,e})();const L=new class{remove(){}processQueue(){}schedule(e){return h(e())}reschedule(e){return h(e())}},U=Number.MAX_SAFE_INTEGER,b=new Map,k=new Array;export{L as I,l as P,I as T,p as a,T as d,f as n};
