!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(x,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function x(){var e=p();if(O(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-l);return d?v(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&r?y(e):(r=o=void 0,u)}function h(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(x,t),y(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},h.flush=function(){return void 0===f?u:T(p())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j,O="feedback-form-state",x={email:"",message:""},T={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),textarea:document.querySelector("textarea")};T.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===x.email||""===x.message)return alert("Please enter a valid email address");localStorage.getItem(O)&&console.log(localStorage.getItem(O)),e.currentTarget.reset(),localStorage.removeItem(O)})),T.email.addEventListener("input",e(t)((function(e){x.email=e.target.value,localStorage.setItem(O,JSON.stringify(x))}),500)),T.textarea.addEventListener("input",e(t)((function(e){x.message=e.target.value,localStorage.setItem(O,JSON.stringify(x))}),500)),(j=JSON.parse(localStorage.getItem(O)))&&(x.email=j.email,x.message=j.message,T.email.value=x.email,T.textarea.value=x.message)}();
//# sourceMappingURL=03-feedback.71d04a0f.js.map
