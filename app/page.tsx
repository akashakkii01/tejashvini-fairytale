"use client";

import { useMemo, useState } from "react";

const flowerNames = ["Daisy", "Tulip", "Cosmos", "Poppy", "Little star"];
const flowerArt = ["🌼", "🌷", "🌸", "🌺", "💮"];
const wishes = [
  "May your days be soft, sunny, and full of little reasons to smile.",
  "You deserve all the lovely things this world has tucked away.",
  "Keep being wonderfully, unapologetically you. That is your magic.",
  "A little reminder: you make ordinary moments feel special.",
  "May this year bring you gentle surprises and big happy dreams."
];

export default function Home() {
  const [chapter, setChapter] = useState(0);
  const [opened, setOpened] = useState(false);
  const [blooms, setBlooms] = useState<number[]>([]);
  const [gift, setGift] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);
  const [musicOn, setMusicOn] = useState(false);

  const progress = useMemo(() => Math.round((chapter / 3) * 100), [chapter]);

  function bloomFlower(index: number) {
    setBlooms((current) => current.includes(index) ? current : [...current, index]);
  }

  return (
    <main className="fairytale">
      <div className="paper-grid" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="A little fairytale home"><span className="wordmark-crown">♕</span> a little fairytale</a>
        <button className="sound-toggle" onClick={() => setMusicOn(!musicOn)} aria-label="Toggle music">
          <span>{musicOn ? "♫" : "♪"}</span> {musicOn ? "Sound on" : "Sound off"}
        </button>
      </header>

      <div className="progress-wrap" aria-label={`Story progress ${progress}%`}>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
        <span className="progress-label">A tiny story · {chapter + 1} of 4</span>
      </div>

      {chapter === 0 && (
        <section className="chapter opening">
          <div className="eyebrow"><span className="tiny-star">✦</span> a little something, just for you <span className="tiny-star">✦</span></div>
          <h1>For our very own<br /><em>Princess Tejashvini</em></h1>
          <p className="intro-copy">Some days deserve a little extra magic.<br />Today, this tiny corner of the internet is all yours.</p>
          <div className={`envelope-scene ${opened ? "is-open" : ""}`}>
            <div className="envelope-shadow" />
            <button className="envelope" onClick={() => setOpened(true)} aria-label="Open your royal letter">
              <span className="envelope-back" />
              <span className="letter-peek"><span>For you</span><b>♡</b></span>
              <span className="envelope-front" />
              <span className="envelope-flap" />
              <span className="seal">♕</span>
              <span className="envelope-spark spark-a">✧</span><span className="envelope-spark spark-b">✦</span>
            </button>
            <span className="envelope-hint">{opened ? "Your letter is waiting ♡" : "tap the envelope to open"}</span>
          </div>
          {opened && <button className="primary-button pop-in" onClick={() => setChapter(1)}>Read your letter <span>→</span></button>}
          <div className="side-doodle doodle-left">♡<small>made with<br />love</small></div>
          <div className="side-doodle doodle-right">✿</div>
        </section>
      )}

      {chapter === 1 && (
        <section className="chapter letter-chapter">
          <div className="eyebrow">chapter one · a note from the heart</div>
          <div className="letter-card">
            <span className="card-corner corner-one">✿</span><span className="card-corner corner-two">✿</span>
            <div className="letter-stamp">♡</div>
            <p className="script-kicker">To the girl who deserves a little magic,</p>
            <h2>Happy Princess Day<span>!</span></h2>
            <div className="letter-divider">✦ ───────── ✦</div>
            <p className="letter-body">I hope you never forget how special you are. May you always find flowers along your path, warmth in the little moments, and people who remind you how wonderful you are.</p>
            <p className="letter-body">You don't need a crown to be a princess. Your kindness, your smile, and the way you make the world brighter already say it all.</p>
            <p className="letter-sign">With a little love, <b>♡</b></p>
            <div className="letter-bottom">a little reminder, whenever you need it</div>
          </div>
          <button className="primary-button" onClick={() => setChapter(2)}>Come see your garden <span>→</span></button>
          <button className="text-button" onClick={() => setChapter(0)}>← back to the envelope</button>
        </section>
      )}

      {chapter === 2 && (
        <section className="chapter garden-chapter">
          <div className="eyebrow">chapter two · a garden that grows for you</div>
          <h2 className="section-title">A flower for every<br /><em>little lovely thing</em></h2>
          <p className="section-copy">Tap each little bud and watch your garden bloom.<br />This garden is growing just for you.</p>
          <div className="garden-card">
            <div className="garden-sky"><span className="garden-cloud cloud-a">☁</span><span className="garden-cloud cloud-b">☁</span><span className="garden-sun">☼</span></div>
            <div className="garden-bed">
              {flowerNames.map((name, i) => (
                <button key={name} className={`flower-plant plant-${i} ${blooms.includes(i) ? "bloomed" : ""}`} onClick={() => bloomFlower(i)} aria-label={`Bloom ${name}`}>
                  <span className="flower-head">{blooms.includes(i) ? flowerArt[i] : "✿"}</span>
                  <span className="flower-stem" /><span className="flower-leaf leaf-left" /><span className="flower-leaf leaf-right" />
                  <span className="flower-name">{name}</span>
                </button>
              ))}
            </div>
            <div className="garden-ground"><span>✧</span><span>♡</span><span>✿</span><span>♡</span><span>✧</span></div>
          </div>
          <div className="garden-progress"><span>{blooms.length === 5 ? "Your garden is in full bloom!" : `${blooms.length} of 5 flowers have bloomed`}</span><div className="mini-progress"><i style={{ width: `${blooms.length * 20}%` }} /></div></div>
          {blooms.length === 5 ? <p className="completion-note pop-in">Look what you made! A whole garden of happiness. 🌷</p> : <p className="tap-hint">Each flower is hiding a little wish for you ♡</p>}
          <button className="primary-button" onClick={() => setChapter(3)}>One last little surprise <span>→</span></button>
          <button className="text-button" onClick={() => setChapter(1)}>← back to your letter</button>
        </section>
      )}

      {chapter === 3 && (
        <section className="chapter finale-chapter">
          <div className="eyebrow">chapter three · a little gift</div>
          <h2 className="section-title">A tiny box of<br /><em>happy things</em></h2>
          <p className="section-copy">Because you deserve a surprise, even on an ordinary day.</p>
          <button className={`gift-box ${gift ? "gift-open" : ""}`} onClick={() => setGift(true)} aria-label="Open your gift">
            <span className="gift-glow">✦</span><span className="gift-lid" /><span className="gift-body" /><span className="gift-ribbon-v" /><span className="gift-ribbon-h" /><span className="gift-bow">♡</span>
            {gift && <span className="gift-burst">✧ ✦ ♡ ✦ ✧</span>}
          </button>
          <p className="tap-hint">{gift ? "A little happiness, just for you ♡" : "tap to unwrap your surprise"}</p>
          {gift && <div className="wish-card pop-in"><span className="wish-flower">✿</span><p className="wish-label">a little wish for you</p><p className="wish-text">{wishes[wishIndex]}</p><button className="wish-next" onClick={() => setWishIndex((wishIndex + 1) % wishes.length)}>another little wish ↻</button></div>}
          <div className="final-signoff"><span>♡</span><p>Keep shining, Princess Tejashvini.</p><small>Your fairytale is only just beginning.</small></div>
          <button className="text-button" onClick={() => { setChapter(0); setOpened(false); setGift(false); }}>↺ experience it again</button>
        </section>
      )}
      <footer className="footer"><span>♡</span> a little world made with love <span>♡</span></footer>
      <div className="floating-petals" aria-hidden="true"><i>✿</i><i>♡</i><i>✧</i><i>✿</i><i>·</i></div>
    </main>
  );
}
