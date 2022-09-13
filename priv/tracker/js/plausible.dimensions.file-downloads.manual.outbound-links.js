!function(){"use strict";var o=window.location,l=window.document,p=l.currentScript,u=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function c(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var r={};r.n=t,r.u=e&&e.u?e.u:o.href,r.d=p.getAttribute("data-domain"),r.r=l.referrer||null,r.w=window.innerWidth,e&&e.meta&&(r.m=JSON.stringify(e.meta)),e&&e.props&&(r.p=e.props);var n=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=r.p||{};n.forEach(function(t){var e=t.replace("event-",""),r=p.getAttribute(t);i[e]=i[e]||r}),r.p=i;var a=new XMLHttpRequest;a.open("POST",u,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(r)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var r=0;r<e.length;r++)t.apply(this,e[r]);function n(t){var e,r,n;"auxclick"===t.type&&1!==t.button||(r=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(n=e)&&n.href&&n.host&&n.host!==o.host?i(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return d.some(function(t){return t===e})}(r)&&i(t,e,"File Download",{url:r}))}function i(t,e,r,n){var i=!1;function a(){i||(i=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&n}}(t,e)?plausible(r,{props:n}):(plausible(r,{props:n,callback:a}),setTimeout(a,5e3),t.preventDefault())}l.addEventListener("click",n),l.addEventListener("auxclick",n);var a=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],s=p.getAttribute("file-types"),f=p.getAttribute("add-file-types"),d=s&&s.split(",")||f&&f.split(",").concat(a)||a}();