!function(){"use strict";var t,e,r,o=window.location,l=window.document,p=l.getElementById("plausible"),u=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],r=t[2],e+"//"+r+"/api/event");function a(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var r={};r.n=t,r.u=e&&e.u?e.u:o.href,r.d=p.getAttribute("data-domain"),r.r=l.referrer||null,r.w=window.innerWidth,e&&e.meta&&(r.m=JSON.stringify(e.meta)),e&&e.props&&(r.p=e.props);var a=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),n=r.p||{};a.forEach(function(t){var e=t.replace("event-",""),r=p.getAttribute(t);n[e]=n[e]||r}),r.p=n,r.h=1;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(r)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var i=0;i<n.length;i++)a.apply(this,n[i]);function c(t){var e,r,a,n,i,o,l;function p(){l||(l=!0,window.location=n.href)}"auxclick"===t.type&&1!==t.button||function(t){if(!t)return!1;var e=t.split(".").pop();return g.some(function(t){return t===e})}(r=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0])&&(o={url:r},l=!(i="File Download"),!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),a=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&a}}(a=t,n=e)?plausible(i,{props:o}):(plausible(i,{props:o,callback:p}),setTimeout(p,5e3),a.preventDefault()))}l.addEventListener("click",c),l.addEventListener("auxclick",c);var s=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],f=p.getAttribute("file-types"),d=p.getAttribute("add-file-types"),g=f&&f.split(",")||d&&d.split(",").concat(s)||s}();