!function(){"use strict";var s=window.location,r=window.document,i=r.currentScript,o=i.getAttribute("data-api")||new URL(i.src).origin+"/api/event";function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var n={};n.n=e,n.u=t&&t.u?t.u:s.href,n.d=i.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props);var a=new XMLHttpRequest;a.open("POST",o,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&t&&t.callback&&t.callback()}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n=0;n<t.length;n++)e.apply(this,t[n]);function a(e){var t,n,a,r,i,o,l,c;function u(){l||(l=!0,window.location=r.href)}"auxclick"===e.type&&1!==e.button||((t=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target))&&t.href&&t.href.split("?")[0],(c=t)&&c.href&&c.host&&c.host!==s.host&&(n={url:t.href},o=n,l=!(i="Outbound Link: Click"),!function(e,t){if(!e.defaultPrevented){var n=!t.target||t.target.match(/^_(self|parent|top)$/i),a=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return n&&a}}(a=e,r=t)?plausible(i,{props:o}):(plausible(i,{props:o,callback:u}),setTimeout(u,5e3),a.preventDefault())))}r.addEventListener("click",a),r.addEventListener("auxclick",a)}();