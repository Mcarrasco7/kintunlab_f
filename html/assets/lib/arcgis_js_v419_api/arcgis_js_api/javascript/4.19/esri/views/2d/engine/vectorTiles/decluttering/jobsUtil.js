// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define("exports ./core ./util ./jobs ./SymbolDeclutterer ./SymbolRepository".split(" "),function(e,h,k,l,m,n){e.declutterSingleTile=function(b,p){const c=[],f=new n.SymbolRepository(4096,c,()=>{const a=new h.VTLUniqueSymbol;a.show=!1;a.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1});a.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1});return a}),g=new m.SymbolDeclutterer(c,f,(a,d,q)=>new l.CollisionJob(a,d,q,b.styleRepository,b.key.level,0),(a,d)=>{k.writeOpacityToBuffers(a,
d,!1)},()=>0,a=>(a=p.getStyleLayerByUID(a).getLayoutProperty("visibility"))&&1===a.getValue()?!1:!0);c.push(b);f.add(b);g.setScreenSize(512,512);g.continue(Infinity)};Object.defineProperty(e,"__esModule",{value:!0})});