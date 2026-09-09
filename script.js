const WA_NUMBER = '919920169168';
// FireCut lead-generation behaviour.
const messages={natural:'I am looking for natural diamonds',lab:'I am looking for lab grown diamond',gems:'I am looking for gemstones',jewellery:'I am looking for jewellery',general:'Hello FireCut, I am looking for diamonds / jewellery. Please help me with options and price.'};
document.querySelectorAll('[data-wa]').forEach(el=>{el.addEventListener('click',e=>{e.preventDefault();const key=el.dataset.wa||'general';const url='https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(messages[key]||messages.general);window.open(url,'_blank','noopener');});});

/* Cinematic opening: the supplied FireCut brand film plays first on every page. */
(function(){
  const overlay=document.createElement('div');
  overlay.className='cinematic-intro';
  overlay.innerHTML=`
    <div class="cinematic-video-wrap">
      <video class="cinematic-video" autoplay muted playsinline preload="auto">
        <source src="assets/firecut-opening-new.mp4" type="video/mp4">
      </video>
      <div class="cinematic-shade"></div>
      <div class="cinematic-copy">
        <div class="cinematic-kicker">FIRECUT • DIAMONDS &amp; JEWELLERY</div>
        <div class="cinematic-title">BY BHAVESH JHA</div>
        <div class="cinematic-line"></div>
      </div>
      <button class="cinematic-skip" type="button">ENTER SITE <span>→</span></button>
    </div>`;
  document.body.prepend(overlay);
  document.documentElement.classList.add('cinematic-loading');
  const video=overlay.querySelector('.cinematic-video');
  let closed=false;
  function closeIntro(){
    if(closed) return; closed=true;
    overlay.classList.add('is-closing');
    document.documentElement.classList.remove('cinematic-loading');
    setTimeout(()=>overlay.remove(),950);
  }
  video.addEventListener('ended',closeIntro,{once:true});
  overlay.querySelector('.cinematic-skip').addEventListener('click',closeIntro);
  // If autoplay is blocked or the file fails, don't trap visitors on the intro.
  video.addEventListener('error',()=>setTimeout(closeIntro,700),{once:true});
  setTimeout(()=>{ if(video.readyState<2) closeIntro(); },12000);
})();

/* Site-wide cinematic 3D falling diamonds, gemstones, rings & earrings. */
(function(){
  const rain=document.createElement('div'); rain.className='jewel-rain'; rain.setAttribute('aria-hidden','true');
  const types=['diamond','diamond','gem ruby','gem emerald','gem sapphire','ring','earring','diamond','gem ruby','ring','earring','diamond'];
  types.forEach((type)=>{
    const item=document.createElement('span'); item.className='falling-jewel '+type;
    item.style.setProperty('--x',(4+Math.random()*92)+'vw');
    item.style.setProperty('--s',(18+Math.random()*38)+'px');
    item.style.setProperty('--dur',(10+Math.random()*9)+'s');
    item.style.setProperty('--delay',(-Math.random()*18)+'s');
    item.style.setProperty('--spin',(5+Math.random()*5)+'s');
    item.style.setProperty('--drift',(-12+Math.random()*24)+'vw');
    item.style.setProperty('--o',(0.18+Math.random()*0.3).toFixed(2));
    const obj=document.createElement('span'); obj.className='object';
    const spark=document.createElement('i'); spark.className='spark';
    obj.appendChild(spark); item.appendChild(obj); rain.appendChild(item);
  });
  document.body.prepend(rain);
})();
