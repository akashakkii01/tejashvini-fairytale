"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, Pause, Play, Sparkles, Heart, Gift, Crown, TrainFront, ChevronDown, X, RotateCcw, Menu, BookOpen, FlaskConical } from "lucide-react";

const wishes = [
  "May your days be full of tiny surprises and big smiles.",
  "Never lose that curiosity that makes every little thing an adventure.",
  "Keep telling your stories — your chapad-chapad is part of the magic!",
  "Here's to new places, lovely people, and window-seat train journeys.",
  "A reminder: you deserve all the kindness you give to the world."
];
const memories = [
  { no:"01", title:"The window seat", text:"For the joy of watching the world roll by, one station at a time.", icon:"☁️" },
  { no:"02", title:"Little discoveries", text:"Every new place has a story waiting to be found.", icon:"🌷" },
  { no:"03", title:"Stories in between", text:"The funny conversations, random thoughts, and stories that make a day.", icon:"📖" },
];
const stars = Array.from({length:12},(_,i)=>({id:i,left:8+(i*37)%84,top:12+(i*23)%72,delay:(i%5)*.13}));

export default function Home() {
  const [letterOpen,setLetterOpen]=useState(false);
  const [giftOpen,setGiftOpen]=useState(false);
  const [message,setMessage]=useState("");
  const [caught,setCaught]=useState<number[]>([]);
  const [musicOn,setMusicOn]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  const [storyOpen,setStoryOpen]=useState(false);
  const [potionMade,setPotionMade]=useState(false);
  const [animationsPaused,setAnimationsPaused]=useState(false);
  const [trackName,setTrackName]=useState("");
  const audioRef=useRef<HTMLAudioElement>(null);
  const inputRef=useRef<HTMLInputElement>(null);
  const objectUrlRef=useRef<string | null>(null);

  useEffect(()=>()=>{ if(objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current); },[]);
  useEffect(()=>{
    const onKeyDown=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){setGiftOpen(false);setLetterOpen(false);setStoryOpen(false);setMenuOpen(false);}
    };
    window.addEventListener("keydown",onKeyDown);
    return ()=>window.removeEventListener("keydown",onKeyDown);
  },[]);

  const pickMusic=()=>inputRef.current?.click();
  const loadMusic=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0]; if(!file||!audioRef.current)return;
    if(objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current=URL.createObjectURL(file);
    audioRef.current.src=objectUrlRef.current;
    audioRef.current.play().then(()=>setMusicOn(true)).catch(()=>setMusicOn(false));
    setTrackName(file.name);
  };
  const toggleMusic=async()=>{
    if(!audioRef.current?.src){pickMusic();return;}
    if(musicOn){audioRef.current.pause();setMusicOn(false);}
    else{try{await audioRef.current.play();setMusicOn(true);}catch{setMusicOn(false);}}
  };
  const surprise=()=>setMessage(wishes[Math.floor(Math.random()*wishes.length)]);
  const jump=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

  return <main className={`fairytale-shell ${animationsPaused?"motion-paused":""}`}>
    <button className="motion-toggle" onClick={()=>setAnimationsPaused(v=>!v)} aria-pressed={animationsPaused}>{animationsPaused?<Play size={14}/>:<Pause size={14}/>}<span>{animationsPaused?"Play animations":"Pause animations"}</span></button>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="site-header">
      <a className="brand" href="#home"><span className="brand-crown">♕</span><span>TEJASHVINI'S LITTLE WORLD</span></a>
      <nav className="desktop-nav"><a href="#welcome">Welcome</a><a href="#little-things">Little things</a><a href="#express">Adventure</a><a href="#magic-room">Magic room</a><a href="#finale">The wish</a></nav>
      <button className="mobile-menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-label={menuOpen?"Close navigation":"Open navigation"} aria-expanded={menuOpen}><Menu size={18}/></button>
      <button className="music-control" onClick={toggleMusic}>{musicOn?<Pause size={15}/>:<Music2 size={15}/>}<span>{musicOn?"Pause":"Add music"}</span></button>
      {menuOpen&&<nav className="mobile-nav" aria-label="Mobile navigation"><a onClick={()=>setMenuOpen(false)} href="#welcome">Welcome</a><a onClick={()=>setMenuOpen(false)} href="#little-things">Little things</a><a onClick={()=>setMenuOpen(false)} href="#express">Adventure Express</a><a onClick={()=>setMenuOpen(false)} href="#magic-room">Magic room</a><a onClick={()=>setMenuOpen(false)} href="#finale">The grand wish</a></nav>}
      <input ref={inputRef} className="file-input" type="file" accept="audio/*" onChange={loadMusic}/><audio ref={audioRef} loop/>
    </header>

    <section className="hero section-wrap" id="home">
      <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
        <div className="eyebrow"><Sparkles size={14}/> A LITTLE DAY OF MAGIC <Sparkles size={14}/></div>
        <p className="pretitle">A special little celebration for</p>
        <h1>Tejashvini<span className="name-star">✧</span></h1>
        <p className="hero-subtitle">Every princess deserves her own little fairytale.</p>
        <div className="ornament"><i/><Crown size={17}/><i/></div>
        <p className="hero-intro">A tiny world made of happy thoughts, little adventures, and all the lovely things that make you, you.</p>
        <button className="primary-button" onClick={()=>jump("welcome")}>Enter your fairytale <span>✦</span></button>
        <p className="tiny-note">crafted with care, just for your special day</p>
      </motion.div>
      <motion.div className="castle-art" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}}>
        <div className="moon"/><span className="art-star a1">✦</span><span className="art-star a2">✧</span><span className="art-star a3">✦</span>
        <div className="soft-cloud cloud-a"/><div className="soft-cloud cloud-b"/>
        <div className="storybook-castle"><div className="turret t-left"><i/><b/></div><div className="turret t-right"><i/><b/></div><div className="castle-body"><div className="castle-roof"/><div className="castle-window"/><div className="castle-door"/></div><span className="castle-flag">♡</span></div>
        <div className="rolling-hill hill-a"/><div className="rolling-hill hill-b"/>
        <motion.div className="royal-bunny" animate={{y:[0,-6,0]}} transition={{duration:2.6,repeat:Infinity,ease:"easeInOut"}}><i className="bunny-ear left"/><i className="bunny-ear right"/><span className="bunny-tiara">♛</span><div className="bunny-head"><i/><i/><b>ᴗ</b><em>♡</em></div></motion.div>
        <span className="castle-caption">your own little kingdom</span>
      </motion.div>
    </section>

    <button className="scroll-cue" onClick={()=>jump("welcome")}><span>SCROLL TO EXPLORE</span><ChevronDown size={15}/></button>

    <section className="welcome-section section-wrap" id="welcome">
      <div className="section-heading"><span className="section-kicker">CHAPTER ONE · THE INVITATION</span><h2>Welcome to your<br/><em>magical little world</em></h2><p>Today, the crown is yours. Take a little wander — there are sweet things tucked around every corner.</p></div>
      <div className="welcome-card">
        <div className="welcome-seal"><Crown size={28}/></div>
        <div><span className="card-overline">ROYAL NOTICE</span><h3>Dear Princess Tejashvini,</h3><p>Your official permission to smile, daydream, explore, and enjoy every little bit of magic is hereby granted. No responsibilities in this kingdom except having a lovely day.</p><span className="card-sign">With warm wishes, your fairytale friend ♡</span></div>
        <div className="card-flower">✿</div>
      </div>
    </section>

    <section className="appreciation-section section-wrap" id="little-things">
      <div className="section-heading"><span className="section-kicker">CHAPTER TWO · THE LITTLE THINGS</span><h2>Things that make you<br/><em>wonderfully you</em></h2><p>Some things deserve a little appreciation — especially the little details that make someone special.</p></div>
      <div className="quality-grid">
        <article className="quality-card blush"><span className="quality-icon">💬</span><h3>The storyteller</h3><p>There is never a shortage of stories, random updates, or enthusiastic chapad-chapad. And honestly, that's a lovely thing.</p><span className="quality-number">01</span></article>
        <article className="quality-card lilac"><span className="quality-icon">🦋</span><h3>The curious mind</h3><p>Always ready to wonder, ask, learn, and find something interesting in the smallest moments.</p><span className="quality-number">02</span></article>
        <article className="quality-card butter"><span className="quality-icon">🌈</span><h3>The bright energy</h3><p>A little laugh, a little kindness, and a way of making an ordinary conversation feel lighter.</p><span className="quality-number">03</span></article>
        <article className="quality-card mint"><span className="quality-icon">🚂</span><h3>The explorer</h3><p>For the love of journeys, new views, train windows, and the excitement of somewhere new.</p><span className="quality-number">04</span></article>
      </div>
    </section>

    <section className="express-section section-wrap" id="express">
      <div className="section-heading"><span className="section-kicker">CHAPTER THREE · THE ADVENTURE EXPRESS</span><h2>Next stop:<br/><em>somewhere wonderful</em></h2><p>A tiny scrapbook for the journeys, views, and stories still waiting to happen.</p></div>
      <div className="train-window">
        <div className="window-sky"><span className="sun-disc"/><span className="sky-bird bird-one">⌁</span><span className="sky-bird bird-two">⌁</span><div className="distant-hills"/><div className="near-hills"/></div>
        <div className="train-frame"><div className="train-topline"><TrainFront size={18}/> THE ADVENTURE EXPRESS <span>NO. 001</span></div><div className="memory-rail">{memories.map((item)=><article className="memory-stop" key={item.no}><span className="stop-icon">{item.icon}</span><span className="stop-no">STOP {item.no}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="rail-line"><i/><i/><i/></div><p className="train-ticket">ONE WAY · ENDLESS POSSIBILITIES <span>✦</span></p></div>
      </div>
    </section>

    <section className="magic-section section-wrap" id="magic-room">
      <div className="section-heading"><span className="section-kicker">CHAPTER FOUR · THE MAGIC ROOM</span><h2>A room full of<br/><em>tiny surprises</em></h2><p>Pick a little activity. The magic is in the small things.</p></div>
      <div className="magic-grid">
        <article className="magic-card gift-card"><div className="magic-illustration gift-illustration"><span>🎁</span><Sparkles/></div><span className="card-overline">A MYSTERY BOX</span><h3>A little something for you</h3><p>There might be a happy thought hiding inside.</p><button className="text-button" onClick={()=>setGiftOpen(true)}>Open the gift <span>↗</span></button></article>
        <article className="magic-card wish-card"><div className="magic-illustration wish-illustration"><span>💌</span><Heart/></div><span className="card-overline">HAPPINESS POST</span><h3>A random happy note</h3><p>{message||"Tap below whenever you need a tiny reminder."}</p><button className="text-button" onClick={surprise}>Get a happy note <span>↗</span></button></article>
        <article className="magic-card potion-card"><div className="magic-illustration potion-illustration"><span>🧪</span><Sparkles/></div><span className="card-overline">A HAPPINESS POTION</span><h3>{potionMade?"Potion ready!":"Brew a little joy"}</h3><p>{potionMade?"A tiny reminder to take a breath, smile, and be kind to yourself.":"Mix a few ingredients: kindness, laughter, and a sprinkle of courage."}</p><button className="text-button" onClick={()=>setPotionMade(v=>!v)}>{potionMade?"Make another potion":"Mix the potion"} <span>✧</span></button></article>
        <article className="magic-card story-card"><div className="magic-illustration story-illustration"><span>📚</span><BookOpen/></div><span className="card-overline">A SECRET STORYBOOK</span><h3>A page just for you</h3><p>There is a tiny story tucked away in this little kingdom.</p><button className="text-button" onClick={()=>setStoryOpen(true)}>Turn the page <span>↗</span></button></article>
        <article className="magic-card star-card"><div className="magic-illustration star-illustration"><span>⭐</span><Sparkles/></div><span className="card-overline">A MINI GAME</span><h3>Catch the little stars</h3><p>Tap the stars to collect a pocketful of sparkle.</p><div className="star-game"><div className="game-sky">{stars.map(s=><button key={s.id} className={`game-star ${caught.includes(s.id)?"caught":""}`} style={{left:`${s.left}%`,top:`${s.top}%`,animationDelay:`${s.delay}s`}} onClick={()=>setCaught(old=>old.includes(s.id)?old:[...old,s.id])} aria-label="Catch star">✦</button>)}</div><div className="game-score">Stars collected: <b>{caught.length}/12</b><button onClick={()=>setCaught([])} aria-label="Reset game"><RotateCcw size={13}/></button></div></div></article>
      </div>
    </section>

    <section className="finale-section section-wrap" id="finale">
      <div className="finale-stars" aria-hidden="true">✦　　✧　　 ✦　　♡　　✧</div>
      <span className="section-kicker">CHAPTER FIVE · THE GRAND WISH</span>
      <div className="finale-crown">♕</div><h2>And the magic<br/>goes on <em>and on…</em></h2>
      <p>May this year bring you beautiful places, kind people, unexpected laughter, and a thousand little reasons to feel happy.</p>
      <button className="primary-button finale-button" onClick={()=>setLetterOpen(true)}>Read your little letter <span>♡</span></button>
      <div className="finale-footnote">HAPPY PRINCESS DAY, TEJASHVINI <span>✦</span></div>
    </section>

    <footer className="site-footer"><span>MADE WITH CARE & A LITTLE BIT OF FAIRY DUST</span><span>♡</span><span>YOUR LITTLE FAIRYTALE · 2026</span></footer>

    <AnimatePresence>
      {storyOpen&&<motion.div className="overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setStoryOpen(false)}><motion.div className="popup-card" initial={{y:20,scale:.94}} animate={{y:0,scale:1}} exit={{y:15,scale:.96}} onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="story-title"><button className="popup-close" onClick={()=>setStoryOpen(false)} aria-label="Close"><X/></button><div className="popup-emoji">🌙</div><span className="card-overline">A TINY FAIRYTALE</span><h2 id="story-title">The girl who collected little wonders</h2><p>Once upon a time, there was a girl who found magic in ordinary things — a new view from a train window, a story shared at just the right moment, and the joy of discovering something unexpected.</p><p>And wherever her curiosity took her, the world seemed a little brighter. The end? Not quite. Her next adventure was just beginning. ♡</p><button className="secondary-button" onClick={()=>setStoryOpen(false)}>Keep exploring</button></motion.div></motion.div>}
      {giftOpen&&<motion.div className="overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setGiftOpen(false)}><motion.div className="popup-card" initial={{y:20,scale:.94}} animate={{y:0,scale:1}} exit={{y:15,scale:.96}} onClick={e=>e.stopPropagation()}><button className="popup-close" onClick={()=>setGiftOpen(false)} aria-label="Close"><X/></button><div className="popup-emoji">🎀</div><span className="card-overline">A LITTLE GIFT</span><h2>One wish, wrapped just for you</h2><p>May you always find a reason to laugh, a place that feels like an adventure, and people who make you feel appreciated. Keep your sparkle, princess.</p><button className="secondary-button" onClick={()=>setGiftOpen(false)}>Aww, thank you ♡</button></motion.div></motion.div>}
      {letterOpen&&<motion.div className="overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setLetterOpen(false)}><motion.div className="popup-card letter-popup" initial={{y:20,scale:.94}} animate={{y:0,scale:1}} exit={{y:15,scale:.96}} onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="letter-title"><button className="popup-close" onClick={()=>setLetterOpen(false)} aria-label="Close"><X/></button><div className="letter-seal">♡</div><span className="card-overline">A LITTLE NOTE FOR YOU</span><h2 id="letter-title">Dear Tejashvini,</h2><p>Wishing you a day filled with the kind of happiness that makes you smile for no reason, little surprises that make you go “aww”, and memories you’ll want to keep forever.</p><p>Keep being curious, keep sharing your stories, keep exploring new places, and keep making the world brighter in your own lovely way.</p><p className="letter-signoff">Stay magical, always <span>♡</span></p><button className="secondary-button" onClick={()=>setLetterOpen(false)}>Back to my little world</button></motion.div></motion.div>}
    </AnimatePresence>
  </main>;
}