window.log=function(t){0==arguments.length?Logger.print(""):Logger.print(t)},window.Logger=function(){let t=null,e=null,n=null,o=!0,i=!1,r=!0,l=0,d=200,a=function(){let t=new Date,e="0"+t.getHours();e=e.substring(e.length-2);let n="0"+t.getMinutes();n=n.substring(n.length-2);let o="0"+t.getSeconds();return o=o.substring(o.length-2),e+":"+n+":"+o},s=function(){let t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.webkitRequestAnimationFrame;return t?function(e){return t(e)}:function(t){return setTimeout(t,16)}};return{init:function(){if(t)return!0;if(!(document&&document.createElement&&document.body&&document.body.appendChild))return!1;let o="loggerContainer";if(t=document.getElementById(o),!t){t=document.createElement("div"),t.id=o,t.setAttribute("style","width:100%;margin:0;padding:0;text-align:left;box-sizing:border-box;position:fixed;left:0;z-index:9999;bottom:-215px;"),e=document.createElement("div"),e.id="loggerTab",e.appendChild(document.createTextNode("LOG")),e.setAttribute("style","width:40px;box-sizing:border-box;overflow:hidden;font:bold 10px verdana,helvetica,sans-serif;line-height:19px;color:#fff;position:absolute;left:20px;top:-20px;margin:0; padding:0;text-align:center;border:1px solid #aaa;border-bottom:none;background:rgba(0,0,0,0.8);border-top-right-radius:8px;border-top-left-radius:8px;"),e.onmouseover=function(){this.style.cursor="pointer",this.style.textShadow="0 0 1px #fff, 0 0 2px #0f0, 0 0 6px #0f0"},e.onmouseout=function(){this.style.cursor="auto",this.style.textShadow="none"},e.onclick=function(){Logger.toggle(),this.style.textShadow="none"},n=document.createElement("div"),n.id="logger",n.setAttribute("style","font:12px monospace;height: 215px;box-sizing:border-box;color:#fff;overflow-x:hidden;overflow-y:scroll;visibility:hidden;position:relative;bottom:0px;margin:0px;padding:5px;background:rgba(0,0,0,0.8);border-top:1px solid #aaa;");let i=document.createElement("span");i.style.color="#afa",i.style.fontWeight="bold";let r="===== Log Started at "+function(){let t=new Date,e=""+t.getFullYear(),n="0"+(t.getMonth()+1);n=n.substring(n.length-2);let o="0"+t.getDate();return o=o.substring(o.length-2),e+"-"+n+"-"+o}()+", "+a()+", (Logger version 1.19) =====";i.appendChild(document.createTextNode(r)),n.appendChild(i),n.appendChild(document.createElement("br")),n.appendChild(document.createElement("br")),t.appendChild(e),t.appendChild(n),document.body.appendChild(t)}return!0},print:function(e){if(!r)return;if(!t){if(!this.init())return}let o=!0;void 0===e?(e="undefined",o=!1):"function"==typeof e?(e="function",o=!1):null===e?(e="null",o=!1):e instanceof Array?e=this.arrayToString(e):e instanceof Object?e=e.toString():e+="";let i=e.split(/\r\n|\r|\n/);for(let t=0,e=i.length;t<e;++t){let e=document.createElement("div");e.setAttribute("style","color:#999;float:left;");let r=document.createTextNode(a()+" ");e.appendChild(r);let l=document.createElement("div");l.setAttribute("style","word-wrap:break-word;margin-left:6.0em;"),o||(l.style.color="#afa");let d=i[t].replace(/ /g," "),s=document.createTextNode(d);l.appendChild(s);let u=document.createElement("div");u.setAttribute("style","clear:both;"),n.appendChild(e),n.appendChild(l),n.appendChild(u),n.scrollTop=n.scrollHeight}},toggle:function(){i?this.close():this.open()},open:function(){if(!this.init())return;if(!o)return;if(i)return;n.style.visibility="visible",l=Date.now();let e=s();e((function n(){let o=Date.now()-l;if(o>=d)return t.style.bottom=0,void(i=!0);let r=Math.round(-215*(1-.5*(1-Math.cos(Math.PI*o/d))));t.style.bottom=r+"px",e(n)}))},close:function(){if(!this.init())return;if(!o)return;if(!i)return;l=Date.now();let e=s();e((function o(){let r=Date.now()-l;if(r>=d)return t.style.bottom="-215px",n.style.visibility="hidden",void(i=!1);let a=Math.round(-107.5*(1-Math.cos(Math.PI*r/d)));t.style.bottom=a+"px",e(o)}))},show:function(){this.init()&&(t.style.display="block",o=!0)},hide:function(){this.init()&&(t.style.display="none",o=!1)},enable:function(){this.init()&&(r=!0,e.style.color="#fff",n.style.color="#fff")},disable:function(){this.init()&&(r=!1,e.style.color="#666",n.style.color="#666")},clear:function(){this.init()&&(n.innerHTML="")},arrayToString:function(t){let e="[";for(let n=0,o=t.length;n<o;++n)t[n]instanceof Array?e+=this.arrayToString(t[n]):e+=t[n],n<o-1&&(e+=", ");return e+="]",e}}}();
