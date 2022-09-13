!function(){"use strict";var t,e,i,o=window.location,p=window.document,l=p.getElementById("plausible"),s=l.getAttribute("data-api")||(t=l.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function n(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var i={};i.n=t,i.u=o.href,i.d=l.getAttribute("data-domain"),i.r=p.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var n=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=i.p||{};n.forEach(function(t){var e=t.replace("event-",""),i=l.getAttribute(t);a[e]=a[e]||i}),i.p=a;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,u=0;u<a.length;u++)n.apply(this,a[u]);function c(){r!==o.pathname&&(r=o.pathname,n("pageview"))}var d,f=window.history;function v(t){var e,i,n;"auxclick"===t.type&&1!==t.button||(i=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(n=e)&&n.href&&n.host&&n.host!==o.host?w(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return m.some(function(t){return t===e})}(i)&&w(t,e,"File Download",{url:i}))}function w(t,e,i,n){var a=!1;function r(){a||(a=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&n}}(t,e)?plausible(i,{props:n}):(plausible(i,{props:n,callback:r}),setTimeout(r,5e3),t.preventDefault())}f.pushState&&(d=f.pushState,f.pushState=function(){d.apply(this,arguments),c()},window.addEventListener("popstate",c)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){r||"visible"!==p.visibilityState||c()}):c(),p.addEventListener("click",v),p.addEventListener("auxclick",v);var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=l.getAttribute("file-types"),b=l.getAttribute("add-file-types"),m=h&&h.split(",")||b&&b.split(",").concat(g)||g}();