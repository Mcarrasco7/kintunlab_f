/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
import{r as e}from"./widgetUtils.js";const t="http://www.w3.org/2000/svg";let r,o=[],i=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t]})),t&&Object.keys(t).forEach((e=>{r[e]=t[e]})),r},n=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),l=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},p=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(n(e[o],t))return o;return-1},d=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let l=i.properties;if(!(l?void 0===l.key?l.bind:l.key:void 0))for(let l=0;l<e.length;l++)if(l!==t){let t=e[l];if(n(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},s=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties)}},a=[],c=!1,f=e=>{(e.children||[]).forEach(f),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},u=()=>{c=!1,a.forEach(f),a.length=0},h=e=>{a.push(e),c||(c=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(u,{timeout:16}):setTimeout(u,16))},v=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),h(e))};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),h(e))},m=(r,o,i)=>{if(!o)return;let n=i.eventHandlerInterceptor,p=Object.keys(o),d=p.length;for(let s=0;s<d;s++){let d=p[s],a=o[d];if("className"===d)throw new Error('Property "className" is not supported, use "class".');if("class"===d)N(r,a,!0);else if("classes"===d){let e=Object.keys(a),t=e.length;for(let o=0;o<t;o++){let t=e[o];a[t]&&r.classList.add(t)}}else if("styles"===d){let e=Object.keys(a),t=e.length;for(let o=0;o<t;o++){let t=e[o],n=a[t];n&&(l(n),i.styleApplyer(r,t,n))}}else if("key"!==d&&null!=a){let l=typeof a;"function"===l?(0===d.lastIndexOf("on",0)&&(n&&(a=n(d,a,r,o)),"oninput"===d&&function(){let e=a;a=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}()),r[d]=a):i.namespace===t?"href"===d?r.setAttributeNS("http://www.w3.org/1999/xlink",d,a):r.setAttribute(d,a):"string"===l&&"value"!==d?"innerHTML"===d?r[d]=e.sanitize(a):r.setAttribute(d,a):r[d]=a}}},y=(e,t,r)=>{((e,t,r)=>{if(t)for(let o of t)g(o,e,void 0,r)})(e,t.children,r),t.text&&(e.textContent=t.text),m(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children])},g=(e,r,o,n)=>{let l,p=0,d=e.vnodeSelector,s=r.ownerDocument;if(""===d)l=e.domNode=s.createTextNode(e.text),void 0!==o?r.insertBefore(l,o):r.appendChild(l);else{for(let a=0;a<=d.length;++a){let c=d.charAt(a);if(a===d.length||"."===c||"#"===c){let c=d.charAt(p-1),f=d.slice(p,a);"."===c?l.classList.add(f):"#"===c?l.id=f:("svg"===f&&(n=i(n,{namespace:t})),void 0!==n.namespace?l=e.domNode=s.createElementNS(n.namespace,f):(l=e.domNode=e.domNode||s.createElement(f),"input"===f&&e.properties&&void 0!==e.properties.type&&l.setAttribute("type",e.properties.type)),void 0!==o?r.insertBefore(l,o):l.parentNode!==r&&r.appendChild(l)),p=a+1}}y(l,e,n)}},N=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r)}))};r=(a,c,f)=>{let u=a.domNode,h=!1;if(a===c)return!1;let m=!1;if(""===c.vnodeSelector){if(c.text!==a.text){let e=u.ownerDocument.createTextNode(c.text);return u.parentNode.replaceChild(e,u),c.domNode=e,h=!0,h}c.domNode=u}else 0===c.vnodeSelector.lastIndexOf("svg",0)&&(f=i(f,{namespace:t})),a.text!==c.text&&(m=!0,void 0===c.text?u.removeChild(u.firstChild):u.textContent=c.text),c.domNode=u,m=((e,t,i,l,a)=>{if(i===l)return!1;l=l||o;let c,f=(i=i||o).length,u=l.length,h=0,m=0,y=!1;for(;m<u;){let o=h<f?i[h]:void 0,u=l[m];if(void 0!==o&&n(o,u))y=r(o,u,a)||y,h++;else{let o=p(i,u,h+1);if(o>=0){for(c=h;c<o;c++)v(i[c]),d(i,c,e,"removed");y=r(i[o],u,a)||y,h=o+1}else g(u,t,h<f?i[h].domNode:void 0,a),s(u),d(l,m,e,"added")}m++}if(f>h)for(c=h;c<f;c++)v(i[c]),d(i,c,e,"removed");return y})(c,u,a.children,c.children,f)||m,m=((r,o,i,n)=>{if(!i)return;let p=!1,d=Object.keys(i),s=d.length;for(let a=0;a<s;a++){let s=d[a],c=i[s],f=o[s];if("class"===s)f!==c&&(N(r,f,!1),N(r,c,!0));else if("classes"===s){let e=r.classList,t=Object.keys(c),o=t.length;for(let r=0;r<o;r++){let o=t[r],i=!!c[o];i!==!!f[o]&&(p=!0,i?e.add(o):e.remove(o))}}else if("styles"===s){let e=Object.keys(c),t=e.length;for(let o=0;o<t;o++){let t=e[o],i=c[t];i!==f[t]&&(p=!0,i?(l(i),n.styleApplyer(r,t,i)):n.styleApplyer(r,t,""))}}else if(c||"string"!=typeof f||(c=""),"value"===s){let e=r[s];e!==c&&(r["oninput-value"]?e===r["oninput-value"]:c!==f)&&(r[s]=c,r["oninput-value"]=void 0),c!==f&&(p=!0)}else if(c!==f){let o=typeof c;"function"===o&&n.eventHandlerInterceptor||(n.namespace===t?"href"===s?r.setAttributeNS("http://www.w3.org/1999/xlink",s,c):r.setAttribute(s,c):"string"===o?"innerHTML"===s?r[s]=e.sanitize(c):"role"===s&&""===c?r.removeAttribute(s):r.setAttribute(s,c):r[s]!==c&&(r[s]=c),p=!0)}}return p})(u,a.properties,c.properties,f)||m,c.properties&&c.properties.afterUpdate&&c.properties.afterUpdate.apply(c.properties.bind||c.properties,[u,f,c.vnodeSelector,c.properties,c.children]);return m&&c.properties&&c.properties.updateAnimation&&c.properties.updateAnimation(u,c.properties,a.properties),h};let w=(e,t)=>({getLastRender:()=>e,update:o=>{if(e.vnodeSelector!==o.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let i=e;e=o,r(i,o,t)},domNode:e.domNode});const b={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,r)=>{"-"===t.charAt(0)?e.style.setProperty(t,r):e.style[t]=r}};let A,x=e=>i(b,e),k=(e,t,r)=>(r=x(r),g(t,e,void 0,r),w(t,r)),S=(e,t,r)=>(r=x(r),g(t,e.parentNode,e,r),w(t,r)),E=(e,t,r)=>(r=x(r),t.domNode=e,y(e,t,r),w(t,r)),C=(e,t,r)=>(r=x(r),g(t,e.parentNode,e,r),e.parentNode.removeChild(e),w(t,r)),O=(e,t)=>{let r=[];for(;e&&e!==t;)r.push(e),e=e.parentNode;return r};A=Array.prototype.find?(e,t)=>e.find(t):(e,t)=>e.filter(t)[0];let L=(e,t)=>{let r=e;return t.forEach((e=>{r=r&&r.children?A(r.children,(t=>t.domNode===e)):void 0})),r},j=(e,t,r)=>{let o=function(o){r("domEvent",o);let i=t(),n=O(o.currentTarget,i.domNode);n.reverse();let l,p=L(i.getLastRender(),n);return e.scheduleRender(),p&&(l=p.properties[`on${o.type}`].apply(p.properties.bind||this,arguments)),r("domEventProcessed",o),l};return(e,t,r,i)=>o},I=e=>{let t,r,o=x(e),i=o.performanceLogger,n=!0,l=!1,p=[],d=[],s=(e,r,n)=>{let l;o.eventHandlerInterceptor=j(t,(()=>l),i),l=e(r,n(),o),p.push(l),d.push(n)},a=()=>{if(r=void 0,n){n=!1,i("renderStart",void 0);for(let e=0;e<p.length;e++){let t=d[e]();i("rendered",void 0),p[e].update(t),i("patched",void 0)}i("renderDone",void 0),n=!0}};return t={renderNow:a,scheduleRender:()=>{r||l||(r=requestAnimationFrame(a))},stop:()=>{r&&(cancelAnimationFrame(r),r=void 0),l=!0},resume:()=>{l=!1,n=!0,t.scheduleRender()},append:(e,t)=>{s(k,e,t)},insertBefore:(e,t)=>{s(S,e,t)},merge:(e,t)=>{s(E,e,t)},replace:(e,t)=>{s(C,e,t)},detach:e=>{for(let t=0;t<d.length;t++)if(d[t]===e)return d.splice(t,1),p.splice(t,1)[0];throw new Error("renderFunction was not found")}},t};export{I as c};
