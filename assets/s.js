const $=s=>document.querySelector(s),nav=$('#nav'),mb=$('#menu');
function setNav(o){nav.hidden=!o;mb.setAttribute('aria-expanded',o);try{localStorage.setItem('nigunNav',o?'1':'0')}catch(e){}}
setNav(localStorage.getItem('nigunNav')==='1');mb.onclick=()=>setNav(nav.hidden);
$('#tts').onclick=()=>{const s=speechSynthesis;if(s.speaking){s.cancel();return}const u=new SpeechSynthesisUtterance($('main').innerText);u.lang='he-IL';s.speak(u)};
const g=$('#gate');if(g){const show=()=>{$('#tc').innerHTML=decodeURIComponent(escape(atob($('#td').textContent.trim())));$('#tc').hidden=false;g.hidden=true};
if(sessionStorage.getItem('nigunT')==='1')show();g.onsubmit=e=>{e.preventDefault();if($('#pw').value.trim()==='1010'){sessionStorage.setItem('nigunT','1');show()}else $('#err').hidden=false}}
const qz=$('#quiz');if(qz)qz.onsubmit=e=>{e.preventDefault();let n=0;qz.querySelectorAll('.qq').forEach(f=>{const c=f.querySelector('input:checked');const ok=c&&c.value===f.dataset.a;f.className='qq '+(ok?'ok':'bad');if(ok)n++});$('#qres').textContent=`${n} מתוך ${qz.querySelectorAll('.qq').length} נכונות`};
const mc=$('#mchk');if(mc)mc.onclick=()=>{let n=0;document.querySelectorAll('#match select').forEach(s=>{const ok=s.value===s.dataset.a;s.parentNode.className='m '+(ok?'ok':'bad');if(ok)n++});$('#mres').textContent=`${n} מתוך 5`};
const od=$('#ord');if(od){const ok=JSON.parse(od.dataset.ok);let a=[...ok].reverse();a=[a[1],a[3],a[0],a[2]];let sel=null;
const draw=()=>{od.innerHTML='';a.forEach((t,i)=>{const li=document.createElement('li');li.textContent=t;li.tabIndex=0;if(sel===i)li.className='sel';li.onclick=()=>{if(sel===null)sel=i;else{[a[sel],a[i]]=[a[i],a[sel]];sel=null}draw()};od.appendChild(li)})};draw();
$('#ochk').onclick=()=>{$('#ores').textContent=a.every((t,i)=>t===ok[i])?'✔ נכון! זה סולם ההסלמה':'עוד לא, נסו שוב'}}
