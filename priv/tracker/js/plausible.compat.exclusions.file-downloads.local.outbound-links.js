!function(){"use strict";var t,e,i,s=window.location,u=window.document,c=u.getElementById("plausible"),d=c.getAttribute("data-api")||(t=c.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function f(t){console.warn("Ignoring Event: "+t)}function a(t,e){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var i=c&&c.getAttribute("data-include"),a=c&&c.getAttribute("data-exclude");if("pageview"===t){var n=!i||i&&i.split(",").some(o),r=a&&a.split(",").some(o);if(!n||r)return f("exclusion rule")}function o(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var p={};p.n=t,p.u=s.href,p.d=c.getAttribute("data-domain"),p.r=u.referrer||null,p.w=window.innerWidth,e&&e.meta&&(p.m=JSON.stringify(e.meta)),e&&e.props&&(p.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(p)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var r,o=0;o<n.length;o++)a.apply(this,n[o]);function p(){r!==s.pathname&&(r=s.pathname,a("pageview"))}var l,v=window.history;function g(t){var e,i,a;"auxclick"===t.type&&1!==t.button||(i=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(a=e)&&a.href&&a.host&&a.host!==s.host?w(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return y.some(function(t){return t===e})}(i)&&w(t,e,"File Download",{url:i}))}function w(t,e,i,a){var n=!1;function r(){n||(n=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var i=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return i&&a}}(t,e)?plausible(i,{props:a}):(plausible(i,{props:a,callback:r}),setTimeout(r,5e3),t.preventDefault())}v.pushState&&(l=v.pushState,v.pushState=function(){l.apply(this,arguments),p()},window.addEventListener("popstate",p)),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){r||"visible"!==u.visibilityState||p()}):p(),u.addEventListener("click",g),u.addEventListener("auxclick",g);var h=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],m=c.getAttribute("file-types"),b=c.getAttribute("add-file-types"),y=m&&m.split(",")||b&&b.split(",").concat(h)||h}();