// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/scheduling ../../../../core/Handles ../../../../core/watchUtils ../../../input/InputHandler ../../viewpointUtils ../../../navigation/gamepadAndKeyboardUtils".split(" "),function(l,n,p,q,r,g,m,h){g=function(e){function k(b){var a=e.call(this,!0)||this;a.view=b;a.frameTask=null;a.watchHandles=new q;a.currentDevice=null;a.transformation={translation:[0,0,0],heading:0,tilt:0,zoom:0};a.handle=a.registerIncoming("gamepad",c=>
a.handleEvent(c));a.handle.pause();return a}n._inheritsLoose(k,e);var f=k.prototype;f.onInstall=function(b){e.prototype.onInstall.call(this,b);this.watchHandles.add([r.init(this.view.navigation.gamepad,"enabled",a=>{a?(this.handle.resume(),this.frameTask||(this.frameTask=p.addFrameTask({update:c=>this.frameUpdate(c.deltaTime)}))):(this.handle.pause(),this.frameTask&&(this.frameTask.remove(),this.frameTask=null))})])};f.onUninstall=function(){this.watchHandles.removeAll();this.frameTask&&(this.frameTask.remove(),
this.frameTask=null);e.prototype.onUninstall.call(this)};f.handleEvent=function(b){const a=this.view.navigation.gamepad.device;a&&b.data.device!==a||this.currentDevice&&this.currentDevice!==b.data.device||("end"===b.data.action?(this.currentDevice=null,h.resetTransformation(this.transformation)):(this.currentDevice=b.data.device,h.extractTransformation(b.data,this.view.navigation.gamepad,this.transformation)))};f.frameUpdate=function(b){const a=this.transformation;if(!h.isZeroTransformation(a)){var c=
this.view.viewpoint.clone(),d=.7*this.view.navigation.gamepad.velocityFactor*b;m.translateBy(c,c,[a.translation[0]*d,-a.translation[1]*d]);d=this.view.size;m.scaleAndRotateBy(c,c,1+6E-4*a.translation[2]*b,this.view.constraints.rotationEnabled?.06*-a.heading*b:0,[d[0]/2,d[1]],d);b=this.view.constraints.constrain(c,this.view.viewpoint);this.view.viewpoint=b}};return k}(g.InputHandler);l.GamepadNavigation=g;Object.defineProperty(l,"__esModule",{value:!0})});