!function(){var t,e=document.querySelector("body"),a=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");a.addEventListener("click",(function(){a.disabled=!0,d.disabled=!1,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));e.style.backgroundColor=t}),1e3)})),d.addEventListener("click",(function(){a.disabled=!1,d.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.e0d9745c.js.map