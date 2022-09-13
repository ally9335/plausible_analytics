!function(){"use strict";var t,e,i,c=window.location,d=window.document,f=d.getElementById("plausible"),v=f.getAttribute("data-api")||(t=f.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function g(t){console.warn("Ignoring Event: "+t)}function a(t,e){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var i=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===t){var n=!i||i&&i.split(",").some(o),r=a&&a.split(",").some(o);if(!n||r)return g("exclusion rule")}function o(t){return c.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var p={};p.n=t,p.u=c.href,p.d=f.getAttribute("data-domain"),p.r=d.referrer||null,p.w=window.innerWidth,e&&e.meta&&(p.m=JSON.stringify(e.meta)),e&&e.props&&(p.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),u=p.p||{};l.forEach(function(t){var e=t.replace("event-",""),i=f.getAttribute(t);u[e]=u[e]||i}),p.p=u;var s=new XMLHttpRequest;s.open("POST",v,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(p)),s.onreadystatechange=function(){4===s.readyState&&e&&e.callback&&e.callback()}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var r,o=0;o<n.length;o++)a.apply(this,n[o]);function p(){r!==c.pathname&&(r=c.pathname,a("pageview"))}var l,u=window.history;function s(t){var e,i,a;"auxclick"===t.type&&1!==t.button||(i=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(a=e)&&a.href&&a.host&&a.host!==c.host?w(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return y.some(function(t){return t===e})}(i)&&w(t,e,"File Download",{url:i}))}function w(t,e,i,a){var n=!1;function r(){n||(n=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&a}}(t,e)?plausible(i,{props:a}):(plausible(i,{props:a,callback:r}),setTimeout(r,5e3),t.preventDefault())}u.pushState&&(l=u.pushState,u.pushState=function(){l.apply(this,arguments),p()},window.addEventListener("popstate",p)),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||p()}):p(),d.addEventListener("click",s),d.addEventListener("auxclick",s);var h=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],m=f.getAttribute("file-types"),b=f.getAttribute("add-file-types"),y=m&&m.split(",")||b&&b.split(",").concat(h)||h}();