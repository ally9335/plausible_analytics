!function(){"use strict";var t,e,a,i=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(t=o.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function p(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||"file:"===i.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:i.href,a.d=o.getAttribute("data-domain"),a.r=r.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props),a.h=1;var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}}var s=window.plausible&&window.plausible.q||[];window.plausible=n;for(var c=0;c<s.length;c++)n.apply(this,s[c]);function u(t){var e,a,n,i,r,o,l;function p(){l||(l=!0,window.location=i.href)}"auxclick"===t.type&&1!==t.button||function(t){if(!t)return!1;var e=t.split(".").pop();return g.some(function(t){return t===e})}(a=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0])&&(o={url:a},l=!(r="File Download"),!function(t,e){if(!t.defaultPrevented){var a=!e.target||e.target.match(/^_(self|parent|top)$/i),n=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return a&&n}}(n=t,i=e)?plausible(r,{props:o}):(plausible(r,{props:o,callback:p}),setTimeout(p,5e3),n.preventDefault()))}r.addEventListener("click",u),r.addEventListener("auxclick",u);var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],f=o.getAttribute("file-types"),w=o.getAttribute("add-file-types"),g=f&&f.split(",")||w&&w.split(",").concat(d)||d}();