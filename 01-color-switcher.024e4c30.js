const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,timerId=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;e.style.backgroundColor=t}),1e3)})),d.addEventListener("click",(()=>{t.disabled=!1,d.disabled=!0,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.024e4c30.js.map
