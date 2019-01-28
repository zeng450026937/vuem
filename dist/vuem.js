(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e(require("vue")):"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["Vuem"]=e(require("vue")):t["Vuem"]=e(t["Vue"])})(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function i(t){if(!Array.isArray(t))throw new TypeError("Middleware stack must be an array!");return t.forEach(function(t){if("function"!==typeof t)throw new TypeError("Middleware must be composed of functions!")}),function(e,n){var r=-1;return o(0);function o(i){if(i<=r)return Promise.reject(new Error("next() called multiple times"));r=i;var u=t[i];if(i===t.length&&(u=n),!u)return Promise.resolve();try{return Promise.resolve(u(e,o.bind(null,i+1)))}catch(a){return Promise.reject(a)}}}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var s=function(){function t(){u(this,t)}return c(t,[{key:"toJSON",value:function(){return{ns:this.ns,method:this.method,payload:this.payload}}}]),t}();function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];f(this,t),this.ns=e,this.middleware=[]}return h(t,[{key:"match",value:function(t){return!this.ns||this.ns===t}},{key:"use",value:function(t){if("function"!==typeof t)throw new TypeError("middleware must be a function!");return this.middleware.push(t),this}},{key:"register",value:function(t,e){var n=this;if("undefined"===typeof e)return e=t,t=null,this.use(e);var r=function(r,o){return!1===r.ns||n.ns.startsWith(r.ns)?r.method!==t?o():e.call(n.vm,r,o):o()};return r.method=t,this.use(r)}},{key:"callback",value:function(){var t=this;return function(e,n){if(!1!==e.ns&&!t.match(e.ns))return n?n():Promise.resolve();e.model=e.layer=t;var r=i(t.middleware);return r(e,n)}}},{key:"dispatch",value:function(t,e,n){return n=n||this.createContext(),n.method=t,n.payload=e||{},this.callback()(n)}},{key:"createContext",value:function(){var t=new s;return t.layer=this,t.ns=this.ns,t}}]),t}();function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function b(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e,n){return g="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=O(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},g(t,e,n||t)}function O(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=k(t),null===t)break;return t}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function j(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}var P,_=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return d(this,e),t=b(this,k(e).call(this,n)),t.root=null,t.parent=null,t.submodel={},t.mixins=[],t.data={},t.computed={},t.watch={},t.vm=null,t}return j(e,t),m(e,[{key:"initialized",value:function(){return!!this.vm}},{key:"model",value:function(t){if(!t)return this;var n=t;!1!==this.ns&&(t="".concat(this.ns,".").concat(t));var r=this.submodel[n];return r||(r=new e(t),r.parent=this,r.root=this.root,this.submodel[n]=r),r}},{key:"up",value:function(){return this.parent||this}},{key:"provide",value:function(t,e){return t&&"undefined"===typeof e&&(this.mixins.push(t),t=null),t?(this.computed[t]&&console.warn("duplicate provided key"),"function"===typeof e?this.computed[t]=e:this.data[t]=e,this):this}},{key:"hook",value:function(t,e){return this.initialized()?(this.vm.$watch(t,e),this):(this.watch[t]=this.watch[t]||[],this.watch[t].push(e),this)}},{key:"genVM",value:function(t){return new o.a({parent:t,mixins:this.mixins,data:this.data,computed:this.computed,watch:this.watch})}},{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.initialized()||e){this.vm&&(this.middleware=this.middleware.filter(function(t){return!t.method}));var n=Object.keys(this.submodel);n.forEach(function(e){t.data[e]=t.data[e]}),this.vm=this.genVM(this.parent&&this.parent.vm);var r=this.vm.$options.methods;return r&&Object.keys(r).forEach(function(e){return t.register(e,r[e])}),n.forEach(function(e){var n=t.submodel[e];n.init(),t.use(n.callback()),t.data[e]=n.vm}),this}}},{key:"match",value:function(t){return g(k(e.prototype),"match",this).call(this,t)||t.startsWith(this.ns)||this.ns.startsWith(t)}},{key:"dispatch",value:function(t,n,r){var o=-1;t&&(o=t.lastIndexOf(".")),"undefined"===typeof r&&-1!==o&&(r=t.substring(0,o),t=t.substring(o+1));var i=this.createContext(r||!1);return g(k(e.prototype),"dispatch",this).call(this,t,n,i)}},{key:"createContext",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.ns;t&&this.ns&&!t.startsWith(this.ns)&&(t="".concat(this.ns,".").concat(t));var n=g(k(e.prototype),"createContext",this).call(this);return n.model=this,n.vm=this.vm,n.ns=t,n}}]),e}(p);function S(t){return S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $(t,e){return!e||"object"!==S(e)&&"function"!==typeof e?q(t):e}function C(t,e,n){return C="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=T(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},C(t,e,n||t)}function T(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=M(t),null===t)break;return t}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function V(t,e,n){return e&&R(t.prototype,e),n&&R(t,n),t}function W(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}function z(t,e){return z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},z(t,e)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"default",function(){return A}),n.d(e,"Model",function(){return _}),n.d(e,"Layer",function(){return p});var A=function(t){function e(){var t;return E(this,e),t=$(this,M(e).call(this)),t.root=q(q(t)),t.d={},t.env="production",t}return W(e,t),V(e,null,[{key:"install",value:function(t){P&&P===t||(P=t,P.mixin({beforeCreate:function(){var t=this.$options,n=t.kom||t.parent&&t.parent.$kom;if(n){var r=n instanceof e;if(!r)return console.warn("only kom is accepted.");n.init(),this.$kom=n,this.$model=n.vm,this.$dispatch=n.dispatch.bind(n),this.$broadcast=n.vm.$emit.bind(n.vm),this.$subscribe=n.vm.$on.bind(n.vm),this.$unsubscribe=n.vm.$off.bind(n.vm)}}}))}}]),V(e,[{key:"get",value:function(t){return this.d[t]}},{key:"set",value:function(t,e){this.d[t]=e}},{key:"createContext",value:function(t){var n=C(M(e.prototype),"createContext",this).call(this,t);return delete n.model,delete n.layer,n.kom=this,n}}]),e}(_)}])});