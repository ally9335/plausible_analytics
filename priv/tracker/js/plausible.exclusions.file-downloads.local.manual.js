!function(){"use strict";var u=window.location,c=window.document,s=c.currentScript,d=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var r=s&&s.getAttribute("data-include"),a=s&&s.getAttribute("data-exclude");if("pageview"===t){var i=!r||r&&r.split(",").some(o),n=a&&a.split(",").some(o);if(!i||n)return f("exclusion rule")}function o(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=t,l.u=e&&e.u?e.u:u.href,l.d=s.getAttribute("data-domain"),l.r=c.referrer||null,l.w=window.innerWidth,e&&e.meta&&(l.m=JSON.stringify(e.meta)),e&&e.props&&(l.p=e.props);var p=new XMLHttpRequest;p.open("POST",d,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(l)),p.onreadystatechange=function(){4===p.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var r=0;r<e.length;r++)t.apply(this,e[r]);function a(t){var e,r,a,i,n,o,l;function p(){l||(l=!0,window.location=i.href)}"auxclick"===t.type&&1!==t.button||function(t){if(!t)return!1;var e=t.split(".").pop();return g.some(function(t){return t===e})}(r=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0])&&(o={url:r},l=!(n="File Download"),!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&a}}(a=t,i=e)?plausible(n,{props:o}):(plausible(n,{props:o,callback:p}),setTimeout(p,5e3),a.preventDefault()))}c.addEventListener("click",a),c.addEventListener("auxclick",a);var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],n=s.getAttribute("file-types"),o=s.getAttribute("add-file-types"),g=n&&n.split(",")||o&&o.split(",").concat(i)||i}();