// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/support/buffer/math/common"],function(u,G){function H(b,c,a){if(b.count!==c.count)G.logger.error("source and destination buffers need to have the same number of elements");else{var n=b.count,d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],D=a[5],E=a[6],F=a[7],p=a[8],q=a[9],l=a[10],r=a[11],t=a[12],v=a[13],w=a[14];a=a[15];var m=b.typedBuffer;b=b.typedBufferStride;var x=c.typedBuffer;c=c.typedBufferStride;for(let y=0;y<n;y++){const z=y*b;var k=y*c;const A=x[k],B=x[k+1],C=x[k+2];k=x[k+
3];m[z]=d*A+h*B+p*C+t*k;m[z+1]=e*A+D*B+q*C+v*k;m[z+2]=f*A+E*B+l*C+w*k;m[z+3]=g*A+F*B+r*C+a*k}}}function I(b,c,a){if(b.count!==c.count)G.logger.error("source and destination buffers need to have the same number of elements");else{var n=b.count,d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],D=a[5],E=a[6],F=a[7];a=a[8];var p=b.typedBuffer;b=b.typedBufferStride;var q=c.typedBuffer;c=c.typedBufferStride;for(let r=0;r<n;r++){const t=r*b;var l=r*c;const v=q[l],w=q[l+1],m=q[l+2];l=q[l+3];p[t]=d*v+g*w+E*m;p[t+1]=e*v+
h*w+F*m;p[t+2]=f*v+D*w+a*m;p[t+3]=l}}}function J(b,c,a){const n=Math.min(b.count,c.count),d=b.typedBuffer;b=b.typedBufferStride;const e=c.typedBuffer;c=c.typedBufferStride;for(let f=0;f<n;f++){const g=f*b,h=f*c;d[g]=a*e[h];d[g+1]=a*e[h+1];d[g+2]=a*e[h+2];d[g+3]=a*e[h+3]}}function K(b,c,a){const n=Math.min(b.count,c.count),d=b.typedBuffer;b=b.typedBufferStride;const e=c.typedBuffer;c=c.typedBufferStride;for(let f=0;f<n;f++){const g=f*b,h=f*c;d[g]=e[h]>>a;d[g+1]=e[h+1]>>a;d[g+2]=e[h+2]>>a;d[g+3]=e[h+
3]>>a}}var L=Object.freeze({__proto__:null,transformMat4:H,transformMat3:I,scale:J,shiftRight:K});u.scale=J;u.shiftRight=K;u.transformMat3=I;u.transformMat4=H;u.vec4=L});