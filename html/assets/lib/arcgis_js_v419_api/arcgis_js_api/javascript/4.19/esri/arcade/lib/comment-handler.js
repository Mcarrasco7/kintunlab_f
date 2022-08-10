// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","./syntax"],function(g,h){let l=function(){function k(){this.attach=!1;this.comments=[];this.stack=[];this.leading=[];this.trailing=[]}var e=k.prototype;e.insertInnerComments=function(a,d){if(a.type===h.Syntax.BlockStatement&&0===a.body.length){const b=[];for(let c=this.leading.length-1;0<=c;--c){const f=this.leading[c];d.end.offset>=f.start&&(b.unshift(f.comment),this.leading.splice(c,1),this.trailing.splice(c,1))}b.length&&(a.innerComments=b)}};e.findTrailingComments=function(a){let d=
[];if(0<this.trailing.length){for(var b=this.trailing.length-1;0<=b;--b){var c=this.trailing[b];c.start>=a.end.offset&&d.unshift(c.comment)}this.trailing.length=0;return d}(b=this.stack[this.stack.length-1])&&b.node.trailingComments&&(c=b.node.trailingComments[0])&&c.range[0]>=a.end.offset&&(d=b.node.trailingComments,delete b.node.trailingComments);return d};e.findLeadingComments=function(a){const d=[];for(var b;0<this.stack.length;){var c=this.stack[this.stack.length-1];if(c&&c.start>=a.start.offset)b=
c.node,this.stack.pop();else break}if(b){c=b.leadingComments?b.leadingComments.length:0;for(--c;0<=c;--c){const f=b.leadingComments[c];f.range[1]<=a.start.offset&&(d.unshift(f),b.leadingComments.splice(c,1))}b.leadingComments&&0===b.leadingComments.length&&delete b.leadingComments;return d}for(b=this.leading.length-1;0<=b;--b)c=this.leading[b],c.start<=a.start.offset&&(d.unshift(c.comment),this.leading.splice(b,1));return d};e.visitNode=function(a,d){if(!(a.type===h.Syntax.Program&&0<a.body.length)){this.insertInnerComments(a,
d);var b=this.findTrailingComments(d),c=this.findLeadingComments(d);0<c.length&&(a.leadingComments=c);0<b.length&&(a.trailingComments=b);this.stack.push({node:a,start:d.start.offset})}};e.visitComment=function(a,d){const b="L"===a.type[0]?"Line":"Block",c={type:b,value:a.value};a.range&&(c.range=a.range);a.loc&&(c.loc=a.loc);this.comments.push(c);this.attach&&(d={comment:{type:b,value:a.value,range:[d.start.offset,d.end.offset]},start:d.start.offset},a.loc&&(d.comment.loc=a.loc),a.type=b,this.leading.push(d),
this.trailing.push(d))};e.visit=function(a,d){"LineComment"===a.type?this.visitComment(a,d):"BlockComment"===a.type?this.visitComment(a,d):this.attach&&this.visitNode(a,d)};return k}();g.CommentHandler=l;Object.defineProperty(g,"__esModule",{value:!0})});