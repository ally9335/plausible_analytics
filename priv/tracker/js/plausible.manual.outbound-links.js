!function(){"use strict";var s=window.location,a=window.document,i=a.currentScript,o=i.getAttribute("data-api")||new URL(i.src).origin+"/api/event";function l(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return l("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return l("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:s.href,n.d=i.getAttribute("data-domain"),n.r=a.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=new XMLHttpRequest;r.open("POST",o,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);function r(t){var e,n,r,a,i,o,l,c;function u(){l||(l=!0,window.location=a.href)}"auxclick"===t.type&&1!==t.button||((e=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target))&&e.href&&e.href.split("?")[0],(c=e)&&c.href&&c.host&&c.host!==s.host&&(n={url:e.href},o=n,l=!(i="Outbound Link: Click"),!function(t,e){if(!t.defaultPrevented){var n=!e.target||e.target.match(/^_(self|parent|top)$/i),r=!(t.ctrlKey||t.metaKey||t.shiftKey)&&"click"===t.type;return n&&r}}(r=t,a=e)?plausible(i,{props:o}):(plausible(i,{props:o,callback:u}),setTimeout(u,5e3),r.preventDefault())))}a.addEventListener("click",r),a.addEventListener("auxclick",r)}();