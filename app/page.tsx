"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Music2, Pause, Sparkles, Heart, Gift, Crown } from "lucide-react";

const floaters = ["✦", "♡", "✧", "✿", "✦"];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [playing, setPlaying] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [track, setTrack] = useState("");

  const chooseTrack = () => inputRef.current?.click();
  const onTrack = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !audioRef.current) return;
    audioRef.current.src = URL.createObjectURL(file);
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    setTrack(file.name);
  };
  const toggleMusic = async () => {
    if (!audioRef.current?.src) return chooseTrack();
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { try { await audioRef.current.play(); setPlaying(true); } catch { setPlaying(false); } }
  };

  return <main className="fairytale-shell">
    <div className="glow glow-a" /><div className="glow glow-b" />
    <div className="floating-layer" aria-hidden="true">{floaters.map((symbol, i) =>
      <motion.span key={i} className="floater" style={{left:`${8+i*21}%`}} initial={{y:"110vh",opacity:0}} animate={{y:"-15vh",opacity:[0,.8,.8,0],rotate:[-15,15]}} transition={{duration:7+i%3,delay:i*1.1,repeat:Infinity,ease:"linear"}}>{symbol}</motion.span>
    )}</div>
    <header className="topbar">
      <a className="brand" href="#"><span>♕</span> LITTLE ROYAL WORLD</a>
      <button className="music-button" onClick={toggleMusic}>{playing ? <Pause size={15}/> : <Music2 size={15}/>} {playing ? "Pause music" : track ? "Play music" : "Add your music"}</button>
      <input ref={inputRef} className="hidden-input" type="file" accept="audio/*" onChange={onTrack}/><audio ref={audioRef} loop/>
    </header>

    <section className="hero">
      <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.85}}>
        <div className="eyebrow"><Sparkles size={14}/> A LITTLE DAY OF MAGIC <Sparkles size={14}/></div>
        <p className="pretitle">A special little celebration for</p>
        <h1>Tejashvini<span>✧</span></h1>
        <p className="subtitle">Because every princess deserves her own little fairytale.</p>
        <div className="ornament"><i/><Crown size={17}/><i/></div>
        <p className="intro">Once upon a time, a lovely soul made ordinary days a little brighter…</p>
        <motion.button className="primary-button" onClick={()=>setLetterOpen(true)} whileHover={{y:-3,scale:1.025}} whileTap={{scale:.97}}>Open your royal surprise <span>✦</span></motion.button>
        <p className="tiny-note">made with a little sparkle & lots of good wishes</p>
      </motion.div>
      <motion.div className="castle-scene" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}} aria-label="A dreamy fairytale castle">
        <div className="moon"/><b className="scene-star s1">✦</b><b className="scene-star s2">✧</b><b className="scene-star s3">✦</b>
        <div className="cloud cloud-left"/><div className="cloud cloud-right"/>
        <div className="castle">
          <div className="tower tower-left"><i/><b/></div><div className="tower tower-right"><i/><b/></div>
          <div className="castle-center"><div className="roof"/><div className="window"/><div className="door"/></div><div className="flag">♡</div>
        </div>
        <div className="hill hill-back"/><div className="hill hill-front"/>
        <motion.div className="bunny" animate={{y:[0,-5,0]}} transition={{duration:2.4,repeat:Infinity,ease:"easeInOut"}}>
          <span className="ear ear-left"/><span className="ear ear-right"/><span className="bunny-crown">♛</span>
          <span className="bunny-face"><i/><i/><b>ᴗ</b><em>♡</em></span>
        </motion.div>
        <div className="scene-caption">her own little kingdom</div>
      </motion.div>
    </section>

    <section className="wish-strip"><div><Heart size={16} fill="currentColor"/> more smiles</div><span>✦</span><div><Sparkles size={16}/> little adventures</div><span>✦</span><div><Gift size={16}/> sweet surprises</div></section>
    <footer className="footer">THE WORLD IS A LITTLE MORE MAGICAL WITH YOU IN IT <span>✿</span></footer>

    {letterOpen && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} onClick={()=>setLetterOpen(false)}>
      <motion.div className="letter-card" initial={{opacity:0,y:22,scale:.94}} animate={{opacity:1,y:0,scale:1}} onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="letter-title">
        <button className="close-letter" onClick={()=>setLetterOpen(false)} aria-label="Close">×</button>
        <div className="letter-seal">♡</div><p className="letter-kicker">A LITTLE NOTE FOR YOU</p>
        <h2 id="letter-title">Dear Tejashvini,</h2>
        <p>Wishing you a day filled with the kind of happiness that makes you smile for no reason, little surprises that make you go “aww”, and memories you’ll want to keep forever.</p>
        <p>Keep being curious, keep sharing your stories, and keep making the world brighter in your own lovely way.</p>
        <p className="signoff">Stay magical, always <span>♡</span></p>
        <button className="secondary-button" onClick={()=>setLetterOpen(false)}>Back to my little kingdom</button>
      </motion.div>
    </motion.div>}
  </main>;
}