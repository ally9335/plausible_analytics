!function(){"use strict";var s=window.location,f=window.document,d=f.currentScript,w=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function g(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var r=d&&d.getAttribute("data-include"),n=d&&d.getAttribute("data-exclude");if("pageview"===t){var i=!r||r&&r.split(",").some(c),a=n&&n.split(",").some(c);if(!i||a)return g("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:s.href,o.d=d.getAttribute("data-domain"),o.r=f.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=d.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),p=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),r=d.getAttribute(t);p[e]=p[e]||r}),o.p=p;var u=new XMLHttpRequest;u.open("POST",w,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&e&&e.callback&&e.callback()}}function c(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var r=0;r<e.length;r++)t.apply(this,e[r]);function n(t){var e,r,n;"auxclick"===t.type&&1!==t.button||(r=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(n=e)&&n.href&&n.host&&n.host!==s.host?i(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return p.some(function(t){return t===e})}(r)&&i(t,e,"File Download",{url:r}))}function i(t,e,r,n){var i=!1;function a(){i||(i=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&n}}(t,e)?plausible(r,{props:n}):(plausible(r,{props:n,callback:a}),setTimeout(a,5e3),t.preventDefault())}f.addEventListener("click",n),f.addEventListener("auxclick",n);var a=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],o=d.getAttribute("file-types"),l=d.getAttribute("add-file-types"),p=o&&o.split(",")||l&&l.split(",").concat(a)||a}();