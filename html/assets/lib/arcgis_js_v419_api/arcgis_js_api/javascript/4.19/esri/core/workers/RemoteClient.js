// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("../../support/revision ../maybe ../Error ../events ../promiseUtils ../../kernel ../../views/support/Scheduler ./registry ./utils".split(" "),function(w,u,x,C,r,D,E,F,k){const {CLOSE:y,ABORT:z,INVOKE:A,RESPONSE:t,OPEN_PORT:B,ON:G}=k.MessageType;let H=function(){function h(a){this._timer=null;this._cancelledJobIds=new Set;this._invokeMessages=[];this._invoke=a;this._timer=null;this._process=this._process.bind(this)}var e=h.prototype;e.push=function(a){a.type===k.MessageType.ABORT?this._cancelledJobIds.add(a.jobId):
(this._invokeMessages.push(a),null===this._timer&&(this._timer=setTimeout(this._process,0)))};e.clear=function(){this._invokeMessages.length=0;this._cancelledJobIds.clear();this._timer=null};e._process=function(){this._timer=null;for(const a of this._invokeMessages)this._cancelledJobIds.has(a.jobId)||this._invoke(a);this._cancelledJobIds.clear();this._invokeMessages.length=0};return h}(),v=function(){function h(a,c){this._port=a;this._outJobs=new Map;this._inJobs=new Map;this._invokeQueue=new H(b=>
this._onInvokeMessage(b));this._messageQueue=[];this._client=c.client;this._onMessage=this._onMessage.bind(this);this._channel=c.channel;u.isSome(c.scheduler)&&(this._frameTask=c.scheduler.registerTask(E.Task.REMOTE_CLIENT,b=>this._update(b),()=>0<this._messageQueue.length));this._port.addEventListener("message",this._onMessage);this._port.start()}h.connect=function(a){const c=new MessageChannel;a="function"===typeof a?new a:"default"in a&&"function"===typeof a.default?new a.default:a;const b=new h(c.port1,
{channel:c,client:a});"object"===typeof a&&"remoteClient"in a&&(a.remoteClient=b);h.clients.set(b,a);return c.port2};h.loadWorker=function(a){return(a=F.registry[a])?a():Promise.resolve(null)};var e=h.prototype;e.close=function(){this._post({type:y});this._close()};e.isBusy=function(){return 0<this._outJobs.size};e.invoke=function(a,c,b){const d=b&&b.signal,l=b&&b.transferList;if(!this._port)return Promise.reject(new x("worker:port-closed",`Cannot call invoke('${a}'), port is closed`,{methodName:a,
data:c}));const f=k.newJobId();return new Promise((m,n)=>{const q=r.onAbortOrThrow(d,()=>{var g;const p=this._outJobs.get(f);p&&(this._outJobs.delete(f),null==(g=p.abortHandle)?void 0:g.remove(),this._post({type:z,jobId:f}),n(r.createAbortError()))});this._outJobs.set(f,{resolve:m,reject:n,abortHandle:q,debugInfo:a});this._post({type:A,jobId:f,methodName:a,abortable:null!=d},c,l)})};e.on=function(a,c){function b(l){c(l.data)}const d=new MessageChannel;this._port.postMessage({type:k.MessageType.ON,
eventType:a,port:d.port2},[d.port2]);d.port1.addEventListener("message",b);d.port1.start();return{remove(){d.port1.postMessage({type:k.MessageType.CLOSE});d.port1.close();d.port1.removeEventListener("message",b)}}};e.openPort=function(){const a=new MessageChannel;this._post({type:B,port:a.port2});return a.port1};e._close=function(){this._channel&&(this._channel=null);this._port.removeEventListener("message",this._onMessage);this._port.close();this._outJobs.forEach(a=>{var c;null==(c=a.abortHandle)?
void 0:c.remove();a.reject(r.createAbortError(`Worker closing, aborting job calling '${a.debugInfo}'`))});this._inJobs.clear();this._outJobs.clear();this._invokeQueue.clear();this._port=this._client=null;this._frameTask=u.removeMaybe(this._frameTask)};e._onMessage=function(a){u.isSome(this._frameTask)?this._messageQueue.push(a):this._processMessage(a)};e._processMessage=function(a){if(a=k.receiveMessage(a))switch(a.type){case t:this._onResponseMessage(a);break;case A:this._invokeQueue.push(a);break;
case z:this._onAbortMessage(a);break;case y:this._onCloseMessage();break;case B:this._onOpenPortMessage(a);break;case G:this._onOnMessage(a)}};e._onAbortMessage=function(a){const c=this._inJobs,b=a.jobId,d=c.get(b);this._invokeQueue.push(a);d&&(d.controller&&d.controller.abort(),c.delete(b))};e._onCloseMessage=function(){const a=this._client;this._close();a&&"destroy"in a&&h.clients.get(this)===a&&a.destroy();h.clients.delete(this);a&&a.remoteClient&&(a.remoteClient=null)};e._onInvokeMessage=function(a){const {methodName:c,
jobId:b,data:d,abortable:l}=a;a=l?r.createAbortController():null;const f=this._inJobs;let m=this._client,n=m[c],q;try{if(!n&&c&&-1!==c.indexOf(".")){const g=c.split(".");for(let p=0;p<g.length-1;p++)m=m[g[p]],n=m[g[p+1]]}if("function"!==typeof n)throw new TypeError(`${c} is not a function`);q=n.call(m,d,{client:this,signal:a?a.signal:null})}catch(g){this._post({type:t,jobId:b,error:k.toInvokeError(g)});return}r.isPromiseLike(q)?(f.set(b,{controller:a,promise:q}),q.then(g=>{f.has(b)&&(f.delete(b),
this._post({type:t,jobId:b},g))},g=>{f.has(b)&&(f.delete(b),r.isAbortError(g)||this._post({type:t,jobId:b,error:k.toInvokeError(g||{message:`Error encountered at method ${c}`})}))})):this._post({type:t,jobId:b},q)};e._onOpenPortMessage=function(a){new h(a.port,{client:this._client})};e._onOnMessage=function(a){const {port:c}=a,b=this._client.on(a.eventType,l=>{c.postMessage(l)}),d=C.on(a.port,"message",l=>{k.receiveMessage(l).type===k.MessageType.CLOSE&&(d.remove(),b.remove(),c.close())})};e._onResponseMessage=
function(a){var c;const {jobId:b,error:d,data:l}=a;a=this._outJobs;if(a.has(b)){var f=a.get(b);a.delete(b);null==(c=f.abortHandle)?void 0:c.remove();d?f.reject(x.fromJSON(JSON.parse(d))):f.resolve(l)}};e._update=function(a){for(;!a.done&&0<this._messageQueue.length;)this._processMessage(this._messageQueue.shift()),a.madeProgress()};e._post=function(a,c,b){return k.postMessage(this._port,a,c,b)};return h}();v.kernelInfo={revision:w.commitHash,version:D.version,buildDate:w.buildDate};v.clients=new Map;
return v});