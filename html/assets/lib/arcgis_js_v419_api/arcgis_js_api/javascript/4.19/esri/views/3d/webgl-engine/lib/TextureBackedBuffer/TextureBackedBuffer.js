// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../../../support/buffer/BufferView","../../../../webgl/Texture"],function(f,g,k){let n=function(){function h(a,b=1){this.rctx=a;this.fieldCount=b;this.textureWidth=4096;this.dirty=!0;this.texture=new k(this.rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:this.textureWidth,height:1,flipped:!1});this.data=new g.BufferViewVec4u8(new ArrayBuffer(4*this.textureWidth))}var c=h.prototype;c.dispose=function(){this.texture.dispose();this.data=this.texture=
void 0};c.setData=function(a,b,d,e,l,m){a=a*this.fieldCount+b;this.dirty=!0;this.data.set(a,0,d);this.data.set(a,1,e);this.data.set(a,2,l);this.data.set(a,3,m)};c.setDataElement=function(a,b,d,e){a=a*this.fieldCount+b;this.dirty=!0;this.data.set(a,d,e)};c.resizeToFit=function(a){a*=this.fieldCount;a>=this.data.count&&(a=new g.BufferViewVec4u8(new ArrayBuffer(Math.ceil((a+1)/this.textureWidth)*this.textureWidth*4)),a.typedBuffer.set(this.data.typedBuffer),this.data=a)};c.updateTexture=function(){if(this.dirty){var a=
this.texture.descriptor.width;this.data.count>a*this.texture.descriptor.height&&this.texture.resize(a,this.data.count/a);this.texture.setData(this.data.typedBuffer);this.dirty=!1}};c.bind=function(a,b){this.rctx.bindTexture(this.texture,b.unit);a.setUniform1i(b.texName,b.unit);a.setUniform2f(b.invDimName,1/this.texture.descriptor.width,1/this.texture.descriptor.height)};return h}();f.TextureBackedBuffer=n;Object.defineProperty(f,"__esModule",{value:!0})});