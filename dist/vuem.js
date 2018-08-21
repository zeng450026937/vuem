(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["Vuem"]=t():e["Vuem"]=t()})(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var u;function c(e){var t=e||"^2.5.10",n=t.split(".",3).map(function(e){return Number.parseInt(e.replace(/\D/g,""),10)}),o=u.version.split(".",3).map(function(e){return Number.parseInt(e,10)}),r=o[0]===n[0]&&(o[1]>n[1]||o[1]===n[1]&&o[2]>=n[2]);a(r,"Vuem requires Vue version ".concat(t,"."))}function a(e,t){if(!e)throw new Error("[Vuem] ".concat(t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=/[^\w.$]/;function l(e){if(!f.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e["$".concat(t[n])]}return e}}}function s(e){return e instanceof u&&e._isVuem}var p=function(){function e(t){return o(this,e),!u&&"undefined"!==typeof window&&window.Vue&&e.install(window.Vue),a(u,"must call Vue.use(Vuem) before creating a Vuem instance."),c(),d(t)}return i(e,null,[{key:"install",value:function(e){if(!u||e!==u){u=e,c(),u.prototype.$prevent=function(e){this._prevented=Boolean(e)};var t=u.prototype.$emit;u.prototype.$emit=function(){if(this._prevented)return this;for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.apply(this,n)},u.mixin({beforeCreate:o})}function o(){this.$rootModel=r(this.$options),this.$model=i(this.$options)||this.$rootModel}function r(e){var t="function"===typeof e.model?e.model():s(e.model)?e.model:null;return e.parent&&e.parent.$rootModel&&(t=e.parent.$rootModel),t}function i(e){var t;if(e.parent&&e.parent.$rootModel&&(t=e.parent.$rootModel),!e.model||s(e.model))return t;if("string"===typeof e.model)t=""===e.model?t:l(e.model)(t);else if(Array.isArray(e.model))if(e.model.length){var o={};e.model.forEach(function(e){o[e]=l(e)(t)}),t=o}else t=this.$rootModel;else if("object"===n(e.model)){var r={};Object.keys(e.model).forEach(function(n){r[n]=l(e.model[n])(t)}),t=r}return t}}}]),e}();function d(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({mixins:[{methods:{$dispatch:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];function r(){return this.$actions[e].apply(this,n)}var i=[];return i.push(r.call(this)),this.$children.forEach(function(e){i.push(r.call(e))}),Promise.all(i)},$broadcast:function(e){for(var t,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(t=this.$root).$emit.apply(t,[e].concat(o)),this}}}],computed:{},models:{},actions:{},broadcast:{}},t),o=new u(n),r={enumerable:!0,get:function(){},set:function(){}};return Object.keys(n.models).forEach(function(e){var t=d(Object.assign({parent:o},n.models[e]));r.get=function(){return t},Object.defineProperty(o,"$".concat(e),r)}),r.get=function(){return n.actions},Object.defineProperty(o,"$actions",r),Object.keys(n.broadcast).forEach(function(t){e.$root.$on(t,n.broadcast[t].bind(o))}),o._isVuem=!0,o}var m=p;t.default=m}])});