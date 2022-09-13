!function(){"use strict";var t,e,i,o=window.location,l=window.document,p=l.getElementById("plausible"),s=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function c(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var i={};i.n=t,i.u=o.href,i.d=p.getAttribute("data-domain"),i.r=l.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var n=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=i.p||{};n.forEach(function(t){var e=t.replace("event-",""),i=p.getAttribute(t);r[e]=r[e]||i}),i.p=r,i.h=1;var a=new XMLHttpRequest;a.open("POST",s,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var r=window.plausible&&window.plausible.q||[];window.plausible=n;for(var a,u=0;u<r.length;u++)n.apply(this,r[u]);function d(){a=o.pathname,n("pageview")}function f(t){var e,i,n;"auxclick"===t.type&&1!==t.button||(i=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(n=e)&&n.href&&n.host&&n.host!==o.host?w(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return b.some(function(t){return t===e})}(i)&&w(t,e,"File Download",{url:i}))}function w(t,e,i,n){var r=!1;function a(){r||(r=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&n}}(t,e)?plausible(i,{props:n}):(plausible(i,{props:n,callback:a}),setTimeout(a,5e3),t.preventDefault())}window.addEventListener("hashchange",d),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){a||"visible"!==l.visibilityState||d()}):d(),l.addEventListener("click",f),l.addEventListener("auxclick",f);var v=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],g=p.getAttribute("file-types"),h=p.getAttribute("add-file-types"),b=g&&g.split(",")||h&&h.split(",").concat(v)||v}();