!function(){"use strict";var t,e,n,o=window.location,l=window.document,p=l.getElementById("plausible"),u=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function s(t){console.warn("Ignoring Event: "+t)}function r(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=p.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=n.p||{};r.forEach(function(t){var e=t.replace("event-",""),n=p.getAttribute(t);i[e]=i[e]||n}),n.p=i,n.h=1;var a=new XMLHttpRequest;a.open("POST",u,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var i=window.plausible&&window.plausible.q||[];window.plausible=r;for(var a=0;a<i.length;a++)r.apply(this,i[a]);function c(t){var e,n,r;"auxclick"===t.type&&1!==t.button||(n=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(r=e)&&r.href&&r.host&&r.host!==o.host?f(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return v.some(function(t){return t===e})}(n)&&f(t,e,"File Download",{url:n}))}function f(t,e,n,r){var i=!1;function a(){i||(i=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var n=!e.target||e.target.match(/^_(self|parent|top)$/i),r=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return n&&r}}(t,e)?plausible(n,{props:r}):(plausible(n,{props:r,callback:a}),setTimeout(a,5e3),t.preventDefault())}l.addEventListener("click",c),l.addEventListener("auxclick",c);var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=p.getAttribute("file-types"),g=p.getAttribute("add-file-types"),v=w&&w.split(",")||g&&g.split(",").concat(d)||d}();