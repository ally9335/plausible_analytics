!function(){"use strict";var t,e,i,o=window.location,p=window.document,l=p.getElementById("plausible"),s=l.getAttribute("data-api")||(t=l.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function u(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return u("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return u("localStorage flag")}catch(t){}var i={};i.n=t,i.u=o.href,i.d=l.getAttribute("data-domain"),i.r=p.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var n=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=i.p||{};n.forEach(function(t){var e=t.replace("event-",""),i=l.getAttribute(t);a[e]=a[e]||i}),i.p=a;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,c=0;c<a.length;c++)n.apply(this,a[c]);function d(){r!==o.pathname&&(r=o.pathname,n("pageview"))}var f,w=window.history;function v(t){var e,i,n,a,r,o,p;function l(){p||(p=!0,window.location=a.href)}"auxclick"===t.type&&1!==t.button||function(t){if(!t)return!1;var e=t.split(".").pop();return b.some(function(t){return t===e})}(i=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0])&&(o={url:i},p=!(r="File Download"),!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&n}}(n=t,a=e)?plausible(r,{props:o}):(plausible(r,{props:o,callback:l}),setTimeout(l,5e3),n.preventDefault()))}w.pushState&&(f=w.pushState,w.pushState=function(){f.apply(this,arguments),d()},window.addEventListener("popstate",d)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){r||"visible"!==p.visibilityState||d()}):d(),p.addEventListener("click",v),p.addEventListener("auxclick",v);var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=l.getAttribute("file-types"),m=l.getAttribute("add-file-types"),b=h&&h.split(",")||m&&m.split(",").concat(g)||g}();