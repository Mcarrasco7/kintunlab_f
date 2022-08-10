// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["../../../../../chunks/_rollupPluginBabelHelpers","../enums","../materialKey/MaterialKey","../Utils","./WGLGeometryBrush"],function(q,r,t,u,v){return function(h){function e(){return h.apply(this,arguments)||this}q._inheritsLoose(e,h);var f=e.prototype;f.dispose=function(){};f.getGeometryType=function(){return r.WGLGeometryType.MARKER};f.drawGeometry=function(d,k,l,a){const {context:g,painter:m,rendererInfo:c,state:n}=d,b=t.MarkerMaterialKey.load(l.materialKey),{bufferLayouts:w,attributes:p}=
u.createProgramDescriptor(b.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffset",count:2,type:5122},{location:2,name:"a_texCoords",count:2,type:5123},{location:3,name:"a_bitSetAndDistRatio",count:2,type:5123},{location:4,name:"a_id",count:4,type:5121},{location:5,name:"a_color",count:4,type:5121,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:5121,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:5121}]});a=m.materialManager.getMaterialProgram(d,
b,"materials/icon",p,a);g.bindProgram(a);b.textureBinding&&m.textureManager.bindTextures(g,a,b,!0);this._setSharedUniforms(a,d,k);a.setUniformMatrix3fv("u_displayMat3",b.vvRotation?n.displayViewMat3:n.displayMat3);b.vvSizeMinMaxValue&&a.setUniform4fv("u_vvSizeMinMaxValue",c.vvSizeMinMaxValue);b.vvSizeScaleStops&&a.setUniform1f("u_vvSizeScaleStopsValue",c.vvSizeScaleStopsValue);b.vvSizeFieldStops&&(d=c.getSizeVVFieldStops(k.key.level),a.setUniform1fv("u_vvSizeFieldStopsValues",d.values),a.setUniform1fv("u_vvSizeFieldStopsSizes",
d.sizes));b.vvSizeUnitValue&&a.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",c.vvSizeUnitValueToPixelsRatio);b.vvColor&&(a.setUniform1fv("u_vvColorValues",c.vvColorValues),a.setUniform4fv("u_vvColors",c.vvColors));b.vvOpacity&&(a.setUniform1fv("u_vvOpacityValues",c.vvOpacityValues),a.setUniform1fv("u_vvOpacities",c.vvOpacities));b.vvRotation&&a.setUniform1f("u_vvRotationType","geographic"===c.vvMaterialParameters.vvRotationType?0:1);l.draw(g,w,p)};return e}(v)});