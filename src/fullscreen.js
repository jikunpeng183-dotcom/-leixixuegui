// Keep every HUD and touch control in the full-screen root.
export function installFullscreen(notify,clearInput){
 const button=document.querySelector('#fullscreenBtn');let busy=false;
 const active=()=>document.fullscreenElement||document.webkitFullscreenElement;
 const update=()=>{button.textContent=active()?'退出全屏 ⤢':'全屏 ⛶';button.setAttribute('aria-pressed',String(!!active()));clearInput();window.dispatchEvent(new Event('resize'))};
 async function toggle(){if(busy)return;busy=true;try{if(active()){const exit=document.exitFullscreen||document.webkitExitFullscreen;if(exit)await exit.call(document)}else{const root=document.documentElement,enter=root.requestFullscreen||root.webkitRequestFullscreen;if(!enter){notify('此浏览器不支持页面全屏；手机可尝试添加到主屏幕后打开。');return}await enter.call(root)}}catch{notify('暂时无法进入全屏，请点击全屏按钮重试。')}finally{busy=false;update()}}
 button.onclick=toggle;document.addEventListener('fullscreenchange',update);document.addEventListener('webkitfullscreenchange',update);
 window.addEventListener('keydown',e=>{if(e.code==='KeyF'&&!e.repeat&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();toggle()}});update();return{toggle,active};
}
