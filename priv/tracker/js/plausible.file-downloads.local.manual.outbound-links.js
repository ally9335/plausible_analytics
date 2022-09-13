!function(){"use strict";var a=window.location,i=window.document,o=i.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var r={};r.n=t,r.u=e&&e.u?e.u:a.href,r.d=o.getAttribute("data-domain"),r.r=i.referrer||null,r.w=window.innerWidth,e&&e.meta&&(r.m=JSON.stringify(e.meta)),e&&e.props&&(r.p=e.props);var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(r)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var r=0;r<e.length;r++)t.apply(this,e[r]);function n(t){var e,r,n;"auxclick"===t.type&&1!==t.button||(r=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(n=e)&&n.href&&n.host&&n.host!==a.host?p(t,e,"Outbound Link: Click",{url:e.href}):function(t){if(!t)return!1;var e=t.split(".").pop();return d.some(function(t){return t===e})}(r)&&p(t,e,"File Download",{url:r}))}function p(t,e,r,n){var a=!1;function i(){a||(a=!0,window.location=e.href)}!function(t,e){if(!t.defaultPrevented){var r=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return r&&n}}(t,e)?plausible(r,{props:n}):(plausible(r,{props:n,callback:i}),setTimeout(i,5e3),t.preventDefault())}i.addEventListener("click",n),i.addEventListener("auxclick",n);var u=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=o.getAttribute("file-types"),s=o.getAttribute("add-file-types"),d=c&&c.split(",")||s&&s.split(",").concat(u)||u}();