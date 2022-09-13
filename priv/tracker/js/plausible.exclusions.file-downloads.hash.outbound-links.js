!function(){"use strict";var s=window.location,c=window.document,u=c.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var i=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===t){var a=!i||i&&i.split(",").some(p),r=n&&n.split(",").some(p);if(!a||r)return f("exclusion rule")}var o={};o.n=t,o.u=s.href,o.d=u.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function p(t){var e=s.pathname;return(e+=s.hash).match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,n=0;n<e.length;n++)t.apply(this,e[n]);function a(){i=s.pathname,t("pageview")}function r(t){var e,i,n;"auxclick"===t.type&&1!==t.button||(i=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(n=e)&&n.href&&n.host&&n.host!==s.host?o(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return v.some(function(t){return t===e})}(i)&&o(t,e,"File Download",{url:i}))}function o(t,e,i,n){var a=!1;function r(){a||(a=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&n}}(t,e)?plausible(i,{props:n}):(plausible(i,{props:n,callback:r}),setTimeout(r,5e3),t.preventDefault())}window.addEventListener("hashchange",a),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){i||"visible"!==c.visibilityState||a()}):a(),c.addEventListener("click",r),c.addEventListener("auxclick",r);var l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],p=u.getAttribute("file-types"),w=u.getAttribute("add-file-types"),v=p&&p.split(",")||w&&w.split(",").concat(l)||l}();