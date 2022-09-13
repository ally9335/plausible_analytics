!function(){"use strict";var i=window.location,a=window.document,o=a.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function p(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||"file:"===i.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:i.href,n.d=o.getAttribute("data-domain"),n.r=a.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=new XMLHttpRequest;r.open("POST",l,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);function r(t){var e,n,r,i,a,o,l;function p(){l||(l=!0,window.location=i.href)}"auxclick"===t.type&&1!==t.button||function(t){if(!t)return!1;var e=t.split(".").pop();return d.some(function(t){return t===e})}(n=(e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0])&&(o={url:n},l=!(a="File Download"),!function(t,e){if(!t.defaultPrevented){var n=!e.target||e.target.match(/^_(self|parent|top)$/i),r=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return n&&r}}(r=t,i=e)?plausible(a,{props:o}):(plausible(a,{props:o,callback:p}),setTimeout(p,5e3),r.preventDefault()))}a.addEventListener("click",r),a.addEventListener("auxclick",r);var c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],s=o.getAttribute("file-types"),u=o.getAttribute("add-file-types"),d=s&&s.split(",")||u&&u.split(",").concat(c)||c}();