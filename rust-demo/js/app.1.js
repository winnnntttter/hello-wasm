(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,n,t){"use strict";t.r(n);var r=t(4),c=t(2);t.d(n,"__wbg_set_wasm",(function(){return c.b})),t.d(n,"greet",(function(){return c.c})),t.d(n,"__wbg_alert_8755b7883b6ce0ef",(function(){return c.a})),Object(c.b)(r)},function(e,n,t){"use strict";(function(e){let r;function c(e){r=e}t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return b}));let o=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let i=null;function u(){return null!==i&&0!==i.byteLength||(i=new Uint8Array(r.memory.buffer)),i}let f=0;let l=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const d="function"==typeof l.encodeInto?function(e,n){return l.encodeInto(e,n)}:function(e,n){const t=l.encode(e);return n.set(t),{read:e.length,written:t.length}};function a(e){const n=function(e,n,t){if(void 0===t){const t=l.encode(e),r=n(t.length);return u().subarray(r,r+t.length).set(t),f=t.length,r}let r=e.length,c=n(r);const o=u();let i=0;for(;i<r;i++){const n=e.charCodeAt(i);if(n>127)break;o[c+i]=n}if(i!==r){0!==i&&(e=e.slice(i)),c=t(c,r,r=i+3*e.length);const n=u().subarray(c+i,c+r);i+=d(e,n).written}return f=i,c}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),t=f;r.greet(n,t)}function b(e,n){var t,r;alert((t=e,r=n,o.decode(u().subarray(t,t+r))))}}).call(this,t(3)(e))},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},function(e,n,t){"use strict";var r=t.w[e.i];for(var c in t.r(n),r)"__webpack_init__"!=c&&(n[c]=r[c]);t(2);r.__webpack_init__()}]]);