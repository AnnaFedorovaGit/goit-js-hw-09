!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1,timerId=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor=e}),1e3)})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.a169e2eb.js.map