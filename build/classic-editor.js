!function(){"use strict";var n={d:function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r:function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{VERSION:function(){return u},after:function(){return Pt},all:function(){return rr},allKeys:function(){return gn},any:function(){return er},assign:function(){return Pn},before:function(){return Nt},bind:function(){return xt},bindAll:function(){return At},chain:function(){return jt},chunk:function(){return Lr},clone:function(){return qn},collect:function(){return Gt},compact:function(){return kr},compose:function(){return It},constant:function(){return Y},contains:function(){return ur},countBy:function(){return br},create:function(){return Ln},debounce:function(){return Bt},default:function(){return Vr},defaults:function(){return Nn},defer:function(){return Mt},delay:function(){return Ot},detect:function(){return $t},difference:function(){return Mr},drop:function(){return Er},each:function(){return Jt},escape:function(){return at},every:function(){return rr},extend:function(){return In},extendOwn:function(){return Pn},filter:function(){return nr},find:function(){return $t},findIndex:function(){return Ft},findKey:function(){return Lt},findLastIndex:function(){return Vt},findWhere:function(){return Kt},first:function(){return Sr},flatten:function(){return Or},foldl:function(){return Yt},foldr:function(){return Zt},forEach:function(){return Jt},functions:function(){return Tn},get:function(){return zn},groupBy:function(){return yr},has:function(){return Hn},head:function(){return Sr},identity:function(){return $n},include:function(){return ur},includes:function(){return ur},indexBy:function(){return gr},indexOf:function(){return zt},initial:function(){return xr},inject:function(){return Yt},intersection:function(){return Dr},invert:function(){return Bn},invoke:function(){return ir},isArguments:function(){return J},isArray:function(){return H},isArrayBuffer:function(){return N},isBoolean:function(){return k},isDataView:function(){return z},isDate:function(){return T},isElement:function(){return O},isEmpty:function(){return fn},isEqual:function(){return yn},isError:function(){return I},isFinite:function(){return G},isFunction:function(){return q},isMap:function(){return En},isMatch:function(){return ln},isNaN:function(){return X},isNull:function(){return E},isNumber:function(){return B},isObject:function(){return S},isRegExp:function(){return D},isSet:function(){return kn},isString:function(){return C},isSymbol:function(){return P},isTypedArray:function(){return un},isUndefined:function(){return A},isWeakMap:function(){return An},isWeakSet:function(){return On},iteratee:function(){return Yn},keys:function(){return an},last:function(){return Ar},lastIndexOf:function(){return Ht},map:function(){return Gt},mapObject:function(){return nt},matcher:function(){return Kn},matches:function(){return Kn},max:function(){return ar},memoize:function(){return kt},methods:function(){return Tn},min:function(){return fr},mixin:function(){return Fr},negate:function(){return Dt},noop:function(){return tt},now:function(){return it},object:function(){return Nr},omit:function(){return _r},once:function(){return Rt},pairs:function(){return Cn},partial:function(){return _t},partition:function(){return mr},pick:function(){return Qr},pluck:function(){return or},property:function(){return Jn},propertyOf:function(){return rt},random:function(){return ut},range:function(){return Rr},reduce:function(){return Yt},reduceRight:function(){return Zt},reject:function(){return tr},rest:function(){return Er},restArguments:function(){return x},result:function(){return gt},sample:function(){return pr},select:function(){return nr},shuffle:function(){return vr},size:function(){return jr},some:function(){return er},sortBy:function(){return hr},sortedIndex:function(){return Ut},tail:function(){return Er},take:function(){return Sr},tap:function(){return Fn},template:function(){return yt},templateSettings:function(){return lt},throttle:function(){return Ct},times:function(){return et},toArray:function(){return sr},toPath:function(){return Vn},transpose:function(){return Ir},unescape:function(){return ft},union:function(){return Tr},uniq:function(){return Br},unique:function(){return Br},uniqueId:function(){return mt},unzip:function(){return Ir},values:function(){return Mn},where:function(){return cr},without:function(){return Cr},wrap:function(){return Tt},zip:function(){return Pr}});var r=function(){var n=jQuery(document.getElementById("wp-content-wrap"));(n.hasClass("tmce-active")||n.hasClass("tinymce-active")?jQuery("#content_ifr").contents().find(".js-icw-is-insecure"):jQuery("<div>").append(jQuery.parseHTML(jQuery("#content").val())).find(".js-icw-is-insecure")).removeClass("js-icw-is-insecure"),jQuery(".js-icw-is-insecure").removeClass("js-icw-is-insecure")},e=window.wp.i18n,u="1.13.6",i="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},o=Array.prototype,c=Object.prototype,a="undefined"!=typeof Symbol?Symbol.prototype:null,f=o.push,l=o.slice,s=c.toString,p=c.hasOwnProperty,v="undefined"!=typeof ArrayBuffer,h="undefined"!=typeof DataView,d=Array.isArray,y=Object.keys,g=Object.create,b=v&&ArrayBuffer.isView,m=isNaN,j=isFinite,w=!{toString:null}.propertyIsEnumerable("toString"),Q=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],_=Math.pow(2,53)-1;function x(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}}function S(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function E(n){return null===n}function A(n){return void 0===n}function k(n){return!0===n||!1===n||"[object Boolean]"===s.call(n)}function O(n){return!(!n||1!==n.nodeType)}function M(n){var t="[object "+n+"]";return function(n){return s.call(n)===t}}var C=M("String"),B=M("Number"),T=M("Date"),D=M("RegExp"),I=M("Error"),P=M("Symbol"),N=M("ArrayBuffer"),R=M("Function"),L=i.document&&i.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof L&&(R=function(n){return"function"==typeof n||!1});var q=R,F=M("Object"),V=h&&F(new DataView(new ArrayBuffer(8))),U="undefined"!=typeof Map&&F(new Map),W=M("DataView"),z=V?function(n){return null!=n&&q(n.getInt8)&&N(n.buffer)}:W,H=d||M("Array");function $(n,t){return null!=n&&p.call(n,t)}var K=M("Arguments");!function(){K(arguments)||(K=function(n){return $(n,"callee")})}();var J=K;function G(n){return!P(n)&&j(n)&&!isNaN(parseFloat(n))}function X(n){return B(n)&&m(n)}function Y(n){return function(){return n}}function Z(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=_}}function nn(n){return function(t){return null==t?void 0:t[n]}}var tn=nn("byteLength"),rn=Z(tn),en=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,un=v?function(n){return b?b(n)&&!z(n):rn(n)&&en.test(s.call(n))}:Y(!1),on=nn("length");function cn(n,t){t=function(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return!0===t[n]},push:function(r){return t[r]=!0,n.push(r)}}}(t);var r=Q.length,e=n.constructor,u=q(e)&&e.prototype||c,i="constructor";for($(n,i)&&!t.contains(i)&&t.push(i);r--;)(i=Q[r])in n&&n[i]!==u[i]&&!t.contains(i)&&t.push(i)}function an(n){if(!S(n))return[];if(y)return y(n);var t=[];for(var r in n)$(n,r)&&t.push(r);return w&&cn(n,t),t}function fn(n){if(null==n)return!0;var t=on(n);return"number"==typeof t&&(H(n)||C(n)||J(n))?0===t:0===on(an(n))}function ln(n,t){var r=an(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function sn(n){return n instanceof sn?n:this instanceof sn?void(this._wrapped=n):new sn(n)}function pn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,tn(n))}sn.VERSION=u,sn.prototype.value=function(){return this._wrapped},sn.prototype.valueOf=sn.prototype.toJSON=sn.prototype.value,sn.prototype.toString=function(){return String(this._wrapped)};var vn="[object DataView]";function hn(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return!1;if(n!=n)return t!=t;var u=typeof n;return("function"===u||"object"===u||"object"==typeof t)&&dn(n,t,r,e)}function dn(n,t,r,e){n instanceof sn&&(n=n._wrapped),t instanceof sn&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;if(V&&"[object Object]"==u&&z(n)){if(!z(t))return!1;u=vn}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object Symbol]":return a.valueOf.call(n)===a.valueOf.call(t);case"[object ArrayBuffer]":case vn:return dn(pn(n),pn(t),r,e)}var i="[object Array]"===u;if(!i&&un(n)){if(tn(n)!==tn(t))return!1;if(n.buffer===t.buffer&&n.byteOffset===t.byteOffset)return!0;i=!0}if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,c=t.constructor;if(o!==c&&!(q(o)&&o instanceof o&&q(c)&&c instanceof c)&&"constructor"in n&&"constructor"in t)return!1}e=e||[];for(var f=(r=r||[]).length;f--;)if(r[f]===n)return e[f]===t;if(r.push(n),e.push(t),i){if((f=n.length)!==t.length)return!1;for(;f--;)if(!hn(n[f],t[f],r,e))return!1}else{var l,p=an(n);if(f=p.length,an(t).length!==f)return!1;for(;f--;)if(!$(t,l=p[f])||!hn(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0}function yn(n,t){return hn(n,t)}function gn(n){if(!S(n))return[];var t=[];for(var r in n)t.push(r);return w&&cn(n,t),t}function bn(n){var t=on(n);return function(r){if(null==r)return!1;var e=gn(r);if(on(e))return!1;for(var u=0;u<t;u++)if(!q(r[n[u]]))return!1;return n!==xn||!q(r[mn])}}var mn="forEach",jn=["clear","delete"],wn=["get","has","set"],Qn=jn.concat(mn,wn),xn=jn.concat(wn),Sn=["add"].concat(jn,mn,"has"),En=U?bn(Qn):M("Map"),An=U?bn(xn):M("WeakMap"),kn=U?bn(Sn):M("Set"),On=M("WeakSet");function Mn(n){for(var t=an(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function Cn(n){for(var t=an(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e}function Bn(n){for(var t={},r=an(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function Tn(n){var t=[];for(var r in n)q(n[r])&&t.push(r);return t.sort()}function Dn(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),c=o.length,a=0;a<c;a++){var f=o[a];t&&void 0!==r[f]||(r[f]=i[f])}return r}}var In=Dn(gn),Pn=Dn(an),Nn=Dn(gn,!0);function Rn(n){if(!S(n))return{};if(g)return g(n);var t=function(){};t.prototype=n;var r=new t;return t.prototype=null,r}function Ln(n,t){var r=Rn(n);return t&&Pn(r,t),r}function qn(n){return S(n)?H(n)?n.slice():In({},n):n}function Fn(n,t){return t(n),n}function Vn(n){return H(n)?n:[n]}function Un(n){return sn.toPath(n)}function Wn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function zn(n,t,r){var e=Wn(n,Un(t));return A(e)?r:e}function Hn(n,t){for(var r=(t=Un(t)).length,e=0;e<r;e++){var u=t[e];if(!$(n,u))return!1;n=n[u]}return!!r}function $n(n){return n}function Kn(n){return n=Pn({},n),function(t){return ln(t,n)}}function Jn(n){return n=Un(n),function(t){return Wn(t,n)}}function Gn(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}}function Xn(n,t,r){return null==n?$n:q(n)?Gn(n,t,r):S(n)&&!H(n)?Kn(n):Jn(n)}function Yn(n,t){return Xn(n,t,1/0)}function Zn(n,t,r){return sn.iteratee!==Yn?sn.iteratee(n,t):Xn(n,t,r)}function nt(n,t,r){t=Zn(t,r);for(var e=an(n),u=e.length,i={},o=0;o<u;o++){var c=e[o];i[c]=t(n[c],c,n)}return i}function tt(){}function rt(n){return null==n?tt:function(t){return zn(n,t)}}function et(n,t,r){var e=Array(Math.max(0,n));t=Gn(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e}function ut(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}sn.toPath=Vn,sn.iteratee=Yn;var it=Date.now||function(){return(new Date).getTime()};function ot(n){var t=function(t){return n[t]},r="(?:"+an(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}}var ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},at=ot(ct),ft=ot(Bn(ct)),lt=sn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},st=/(.)^/,pt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},vt=/\\|'|\r|\n|\u2028|\u2029/g;function ht(n){return"\\"+pt[n]}var dt=/^\s*(\w|\$)+\s*$/;function yt(n,t,r){!t&&r&&(t=r),t=Nn({},t,sn.templateSettings);var e=RegExp([(t.escape||st).source,(t.interpolate||st).source,(t.evaluate||st).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,(function(t,r,e,o,c){return i+=n.slice(u,c).replace(vt,ht),u=c+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t})),i+="';\n";var o,c=t.variable;if(c){if(!dt.test(c))throw new Error("variable is not a bare identifier: "+c)}else i="with(obj||{}){\n"+i+"}\n",c="obj";i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{o=new Function(c,"_",i)}catch(n){throw n.source=i,n}var a=function(n){return o.call(this,n,sn)};return a.source="function("+c+"){\n"+i+"}",a}function gt(n,t,r){var e=(t=Un(t)).length;if(!e)return q(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=q(i)?i.call(n):i}return n}var bt=0;function mt(n){var t=++bt+"";return n?n+t:t}function jt(n){var t=sn(n);return t._chain=!0,t}function wt(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=Rn(n.prototype),o=n.apply(i,u);return S(o)?o:i}var Qt=x((function(n,t){var r=Qt.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),c=0;c<i;c++)o[c]=t[c]===r?arguments[u++]:t[c];for(;u<arguments.length;)o.push(arguments[u++]);return wt(n,e,this,this,o)};return e}));Qt.placeholder=sn;var _t=Qt,xt=x((function(n,t,r){if(!q(n))throw new TypeError("Bind must be called on a function");var e=x((function(u){return wt(n,e,t,this,r.concat(u))}));return e})),St=Z(on);function Et(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=1/0;for(var u=e.length,i=0,o=on(n);i<o;i++){var c=n[i];if(St(c)&&(H(c)||J(c)))if(t>1)Et(c,t-1,r,e),u=e.length;else for(var a=0,f=c.length;a<f;)e[u++]=c[a++];else r||(e[u++]=c)}return e}var At=x((function(n,t){var r=(t=Et(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=xt(n[e],n)}return n}));function kt(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return $(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r}var Ot=x((function(n,t,r){return setTimeout((function(){return n.apply(null,r)}),t)})),Mt=_t(Ot,sn,1);function Ct(n,t,r){var e,u,i,o,c=0;r||(r={});var a=function(){c=!1===r.leading?0:it(),e=null,o=n.apply(u,i),e||(u=i=null)},f=function(){var f=it();c||!1!==r.leading||(c=f);var l=t-(f-c);return u=this,i=arguments,l<=0||l>t?(e&&(clearTimeout(e),e=null),c=f,o=n.apply(u,i),e||(u=i=null)):e||!1===r.trailing||(e=setTimeout(a,l)),o};return f.cancel=function(){clearTimeout(e),c=0,e=u=i=null},f}function Bt(n,t,r){var e,u,i,o,c,a=function(){var f=it()-u;t>f?e=setTimeout(a,t-f):(e=null,r||(o=n.apply(c,i)),e||(i=c=null))},f=x((function(f){return c=this,i=f,u=it(),e||(e=setTimeout(a,t),r&&(o=n.apply(c,i))),o}));return f.cancel=function(){clearTimeout(e),e=i=c=null},f}function Tt(n,t){return _t(t,n)}function Dt(n){return function(){return!n.apply(this,arguments)}}function It(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}}function Pt(n,t){return function(){if(--n<1)return t.apply(this,arguments)}}function Nt(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}var Rt=_t(Nt,2);function Lt(n,t,r){t=Zn(t,r);for(var e,u=an(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e}function qt(n){return function(t,r,e){r=Zn(r,e);for(var u=on(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}var Ft=qt(1),Vt=qt(-1);function Ut(n,t,r,e){for(var u=(r=Zn(r,e,1))(t),i=0,o=on(n);i<o;){var c=Math.floor((i+o)/2);r(n[c])<u?i=c+1:o=c}return i}function Wt(n,t,r){return function(e,u,i){var o=0,c=on(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+c,o):c=i>=0?Math.min(i+1,c):i+c+1;else if(r&&i&&c)return e[i=r(e,u)]===u?i:-1;if(u!=u)return(i=t(l.call(e,o,c),X))>=0?i+o:-1;for(i=n>0?o:c-1;i>=0&&i<c;i+=n)if(e[i]===u)return i;return-1}}var zt=Wt(1,Ft,Ut),Ht=Wt(-1,Vt);function $t(n,t,r){var e=(St(n)?Ft:Lt)(n,t,r);if(void 0!==e&&-1!==e)return n[e]}function Kt(n,t){return $t(n,Kn(t))}function Jt(n,t,r){var e,u;if(t=Gn(t,r),St(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=an(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n}function Gt(n,t,r){t=Zn(t,r);for(var e=!St(n)&&an(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var c=e?e[o]:o;i[o]=t(n[c],c,n)}return i}function Xt(n){return function(t,r,e,u){var i=arguments.length>=3;return function(t,r,e,u){var i=!St(t)&&an(t),o=(i||t).length,c=n>0?0:o-1;for(u||(e=t[i?i[c]:c],c+=n);c>=0&&c<o;c+=n){var a=i?i[c]:c;e=r(e,t[a],a,t)}return e}(t,Gn(r,u,4),e,i)}}var Yt=Xt(1),Zt=Xt(-1);function nr(n,t,r){var e=[];return t=Zn(t,r),Jt(n,(function(n,r,u){t(n,r,u)&&e.push(n)})),e}function tr(n,t,r){return nr(n,Dt(Zn(t)),r)}function rr(n,t,r){t=Zn(t,r);for(var e=!St(n)&&an(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0}function er(n,t,r){t=Zn(t,r);for(var e=!St(n)&&an(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1}function ur(n,t,r,e){return St(n)||(n=Mn(n)),("number"!=typeof r||e)&&(r=0),zt(n,t,r)>=0}var ir=x((function(n,t,r){var e,u;return q(t)?u=t:(t=Un(t),e=t.slice(0,-1),t=t[t.length-1]),Gt(n,(function(n){var i=u;if(!i){if(e&&e.length&&(n=Wn(n,e)),null==n)return;i=n[t]}return null==i?i:i.apply(n,r)}))}));function or(n,t){return Gt(n,Jn(t))}function cr(n,t){return nr(n,Kn(t))}function ar(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=St(n)?n:Mn(n)).length;c<a;c++)null!=(e=n[c])&&e>i&&(i=e);else t=Zn(t,r),Jt(n,(function(n,r,e){((u=t(n,r,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i}function fr(n,t,r){var e,u,i=1/0,o=1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var c=0,a=(n=St(n)?n:Mn(n)).length;c<a;c++)null!=(e=n[c])&&e<i&&(i=e);else t=Zn(t,r),Jt(n,(function(n,r,e){((u=t(n,r,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)}));return i}var lr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function sr(n){return n?H(n)?l.call(n):C(n)?n.match(lr):St(n)?Gt(n,$n):Mn(n):[]}function pr(n,t,r){if(null==t||r)return St(n)||(n=Mn(n)),n[ut(n.length-1)];var e=sr(n),u=on(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var c=ut(o,i),a=e[o];e[o]=e[c],e[c]=a}return e.slice(0,t)}function vr(n){return pr(n,1/0)}function hr(n,t,r){var e=0;return t=Zn(t,r),or(Gt(n,(function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}})).sort((function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index})),"value")}function dr(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=Zn(e,u),Jt(r,(function(t,u){var o=e(t,u,r);n(i,t,o)})),i}}var yr=dr((function(n,t,r){$(n,r)?n[r].push(t):n[r]=[t]})),gr=dr((function(n,t,r){n[r]=t})),br=dr((function(n,t,r){$(n,r)?n[r]++:n[r]=1})),mr=dr((function(n,t,r){n[r?0:1].push(t)}),!0);function jr(n){return null==n?0:St(n)?n.length:an(n).length}function wr(n,t,r){return t in r}var Qr=x((function(n,t){var r={},e=t[0];if(null==n)return r;q(e)?(t.length>1&&(e=Gn(e,t[1])),t=gn(n)):(e=wr,t=Et(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],c=n[o];e(c,o,n)&&(r[o]=c)}return r})),_r=x((function(n,t){var r,e=t[0];return q(e)?(e=Dt(e),t.length>1&&(r=t[1])):(t=Gt(Et(t,!1,!1),String),e=function(n,r){return!ur(t,r)}),Qr(n,e,r)}));function xr(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function Sr(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:xr(n,n.length-t)}function Er(n,t,r){return l.call(n,null==t||r?1:t)}function Ar(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:Er(n,Math.max(0,n.length-t))}function kr(n){return nr(n,Boolean)}function Or(n,t){return Et(n,t,!1)}var Mr=x((function(n,t){return t=Et(t,!0,!0),nr(n,(function(n){return!ur(t,n)}))})),Cr=x((function(n,t){return Mr(n,t)}));function Br(n,t,r,e){k(t)||(e=r,r=t,t=!1),null!=r&&(r=Zn(r,e));for(var u=[],i=[],o=0,c=on(n);o<c;o++){var a=n[o],f=r?r(a,o,n):a;t&&!r?(o&&i===f||u.push(a),i=f):r?ur(i,f)||(i.push(f),u.push(a)):ur(u,a)||u.push(a)}return u}var Tr=x((function(n){return Br(Et(n,!0,!0))}));function Dr(n){for(var t=[],r=arguments.length,e=0,u=on(n);e<u;e++){var i=n[e];if(!ur(t,i)){var o;for(o=1;o<r&&ur(arguments[o],i);o++);o===r&&t.push(i)}}return t}function Ir(n){for(var t=n&&ar(n,on).length||0,r=Array(t),e=0;e<t;e++)r[e]=or(n,e);return r}var Pr=x(Ir);function Nr(n,t){for(var r={},e=0,u=on(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r}function Rr(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u}function Lr(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(l.call(n,e,e+=t));return r}function qr(n,t){return n._chain?sn(t).chain():t}function Fr(n){return Jt(Tn(n),(function(t){var r=sn[t]=n[t];sn.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),qr(this,r.apply(sn,n))}})),sn}Jt(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=o[n];sn.prototype[n]=function(){var r=this._wrapped;return null!=r&&(t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0]),qr(this,r)}})),Jt(["concat","join","slice"],(function(n){var t=o[n];sn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=t.apply(n,arguments)),qr(this,n)}}));var Vr=sn,Ur=Fr(t);Ur._=Ur;var Wr=function(n){r();var t=jQuery(document.getElementById("wp-content-wrap"));jQuery("#publish").removeClass("disabled");var u=function(n){var t=[],r=0;return Jt(n,(function(n){if("object"!==zn(n,"dataset.mceObject")){if(n.src&&"https://"!==n.src.substr(0,8)){r+=1;var e=n.src.split("?")[0];t.push(e)}if(n.srcset&&"https://"!==n.srcset.substr(0,8)){r+=1;var u=n.srcset.split("?")[0];t.push(u)}if("object"===n.nodeName.toLowerCase()&&n.data&&"http://"===n.data.substr(0,7)){r+=1;var i=n.data.split("?")[0];t.push(i)}}else if(n.dataset.mcePData&&"http://"===n.dataset.mcePData.substr(0,7)){r+=1;var o=n.dataset.mcePData.split("?")[0];t.push(o)}})),{insecureElementURLs:t,insecure:r}}(t.hasClass("tmce-active")||t.hasClass("tinymce-active")?jQuery("#content_ifr").contents().find("*"):jQuery("<div>").append(jQuery.parseHTML(jQuery("#content").val())).find("*")),i=u.insecure,o=u.insecureElementURLs,c=jQuery("#major-publishing-actions");if(i>0){n.preventDefault(),jQuery("#publish").addClass("disabled"),c.next().remove();for(var a=jQuery("<div>",{class:"error js-icw-error",text:(0,e.sprintf)(
// translators: %d: Single insecure element found, %d: Multiple insecure elements found.
(0,e._nx)("%d insecure element found.","%d insecure elements found.",i,"number of insecure elements","insecure-content-warning"),parseInt(i,10))}),f=jQuery("<ol />"),l=0,s=o.length;l<s;l++){var p=jQuery("<li>",{class:"icw-list-item"}),v=jQuery("<br />"),h=jQuery("<a>",{class:"js-icw-view","data-check":o[l],href:"",text:(0,e.__)("View element","insecure-content-warning")}),d=jQuery("<a>",{class:"js-icw-check","data-check":o[l],href:"",text:(0,e.__)("Fix this","insecure-content-warning")}),y=jQuery("<img>",{src:insecureContentAdmin.spinner,class:"js-icw-spinner",style:"display: none"}),g=jQuery("<code>",{class:"icw-list-item-description",text:o[l]}),b=jQuery("<span>",{class:"js-icw-fixed",style:"display: none; color: forestgreen; font-weight: bolder",text:(0,e.__)("Success!","insecure-content-warning")}),m=jQuery("<span>",{class:"error js-icw-error",style:"display: none; color: #950e0d; font-weight: bolder",text:(0,e.__)("Unable to find https:// equivalent. Please replace manually.","insecure-content-warning")});p.append(g),p.append(v),p.append(h),p.append(d),p.append(y),p.append(b),p.append(m),f.append(p)}var j=jQuery("<p>"),w=jQuery("<label>",{for:"icw-force-checkbox",text:(0,e.__)("Publish with insecure assets","insecure-content-warning")}),Q=jQuery("<input>",{type:"checkbox",id:"icw-force-checkbox",class:"js-icw-force-checkbox"});w.prepend(Q),j.append(w),a.css({display:"block",padding:"16px",margin:"0"}),a.append(f).append(j),c.after(a)}else jQuery(".js-icw-error").remove()};function zr(n){return zr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zr(n)}jQuery(document).on("click","#publish",(function(n){r(),jQuery(n.target).hasClass("disabled")||!0===jQuery(".js-icw-force-checkbox").prop("checked")||Wr(n)})),jQuery(document).on("change","#icw-force-checkbox",(function(){r(),jQuery(this).is(":checked")?jQuery("#publish").removeClass("disabled"):jQuery("#publish").addClass("disabled")})),jQuery(document).on("click","#post-preview",(function(){r(),document.querySelector(".js-icw-error")&&(wp.autosave?(wp.autosave.server.resume(),wp.autosave.enableButtons()):jQuery(document).trigger("autosave-enable-buttons"),jQuery("#major-publishing-actions .spinner").removeClass("is-active"))})),jQuery(document).on("click",".js-icw-check",(function(n){var t=this;n.preventDefault(),r();var e=jQuery(this).next(".js-icw-spinner"),u=jQuery(this).data("check");e.show(),wp.apiRequest({path:"/icw/v1/check?url=".concat(u)}).then((function(r){if(e.hide(),!0!==r)throw jQuery(t).nextAll(".js-icw-error").show(),new Error("No https equivalent found.");jQuery(t).nextAll(".js-icw-fixed").show(),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=n.replace("http://","https://"),r=new RegExp(n,"g");if(jQuery("#wp-content-wrap").hasClass("html-active")){var e=document.getElementById("content"),u=e.value;e.value=u.replace(r,t)}else if("object"===("undefined"==typeof tinyMCE?"undefined":zr(tinyMCE)))if(tinyMCE.activeEditor){var i=tinyMCE.activeEditor.getContent().replace(r,t);tinyMCE.activeEditor.setContent(i)}else{var o=wp.data.select("core/editor").getEditedPostAttribute("content").replace(r,t);wp.data.dispatch("core/block-editor").resetBlocks(wp.blocks.parse(o)),setTimeout((function(){jQuery(document).trigger("recheck-contents")}),1e3)}}(u),setTimeout((function(){Wr(n)}),1e3)}),(function(n){return n}))})),jQuery(document).on("click",".js-icw-view",(function(n){n.preventDefault(),r();var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=jQuery(document.getElementById("wp-content-wrap"));return(t.length?jQuery(t):r.hasClass("tmce-active")||r.hasClass("tinymce-active")?jQuery("#content_ifr").contents().find("*"):jQuery("<div>").append(jQuery.parseHTML(jQuery("#content").val())).find("*")).filter((function(t,r){return!!("object"===zn(r,"dataset.mceObject")&&r.dataset.mcePData&&r.dataset.mcePData.substr(0,n.length)===n||r.src&&r.src.substr(0,n.length)===n||r.srcset&&r.srcset.substr(0,n.length)===n||"object"===r.nodeName.toLowerCase()&&r.data&&r.data.substr(0,n.length)===n)}))}(jQuery(this).data("check"));if(t.length){var e=jQuery(t[0]);jQuery("html, body").animate({scrollTop:e.offset().top},0),e.addClass("js-icw-is-insecure")}}))}();