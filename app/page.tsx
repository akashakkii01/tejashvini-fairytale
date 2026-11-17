"use client";

import { useState } from "react";

const compliments = [
  ["♡", "Your Smile", "A little sunshine that can make an ordinary day feel special."],
  ["✿", "Your Kind Heart", "The thoughtful little things you do never go unnoticed."],
  ["✧", "Your Magic", "You have your own way of making moments feel brighter."],
  ["☾", "Your Dreams", "May you always have the courage and space to chase them."],
  ["♕", "Your Royal Energy", "A crown is optional when you carry yourself with grace."],
  ["🎀", "Simply You", "The best thing about you will always be that you're you."]
];

const gifts = [
  ["🌷", "A Bouquet of Roses", "A little reminder that you deserve beautiful things."],
  ["🍰", "A Sweet Treat", "May life always save its sweetest moments for you."],
  ["👑", "A Royal Crown", "For the princess of this little corner of the internet."],
  ["🧸", "A Warm Hug", "Sending a pocket-sized hug for whenever you need one."]
];

const complimentReveals = [
  "Keep sharing that light — it makes ordinary moments brighter.",
  "Your small acts of kindness can mean more than you realise.",
  "Never lose the little spark that makes you wonderfully you.",
  "One step at a time. Your dreams deserve your patience and courage.",
  "Your confidence and grace are your own kind of royal magic.",
  "There is no one else quite like you — and that is your superpower."
];

const wishes = [
  "May your days be filled with laughter, kind people and tiny unexpected joys.",
  "May you never run out of reasons to smile or dreams to look forward to.",
  "May life be gentle with you, and may all your good days find you.",
  "Keep being your lovely self. The world needs your kind of magic."
];

export default function Home() {
  const [scene, setScene] = useState(0);
  const [opened, setOpened] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);
  const [activeCompliment, setActiveCompliment] = useState(-1);

  return (
    <main className={`kingdom ${scene === 0 ? "kingdom-welcome" : ""}`}>
      <div className="night-sky" aria-hidden="true">
        {Array.from({ length: 34 }, (_, i) => <i key={i} className="sky-star" style={{ left: `${(i * 37 + 9) % 100}%`, top: `${(i * 23 + 4) % 78}%`, animationDelay: `${(i % 7) * .4}s` }}>✦</i>)}
      </div>
      <header className="royal-nav">
        <span className="royal-mark">♕ <b>YOUR LITTLE KINGDOM</b></span>
        <span className="music-chip">♡ made with care</span>
      </header>

      <div className="royal-progress"><span style={{ width: `${(scene + 1) * 20}%` }} /></div>
      <div className="scene-count">A LITTLE FAIRYTALE · {scene + 1} / 5</div>

      {scene === 0 && <section className="royal-scene welcome-scene">
        <button
          className="castle-poster-button"
          onClick={() => setScene(1)}
          aria-label="Enter Princess Tejashvini's Kingdom"
        >
          <img
            className="castle-artwork-full"
            src="/priness-castle-hero.png"
            alt="Welcome to your Little Kingdom: Princess Tejashvini's Kingdom, with an Enter the Kingdom invitation"
          />
        </button>
      </section>}

      {scene === 1 && <section className="royal-scene princess-scene">
        <p className="royal-eyebrow">✦ a day made just for you ✦</p>
        <h2>Happy <em>Princess Day</em></h2>
        <div className="princess-art princess-art-refined">
          <img
            src="/princess-tejashvini-web.jpg"
            alt="Princess Tejashvini in a fairytale royal portrait"
            className="princess-portrait-image"
          />
        </div>
        <h3 className="royal-quote">Royalty isn't about a crown.<br /><em>It's the happiness you bring.</em></h3>
        <p className="royal-copy">Today, the kingdom is celebrating you.<br />Ready to see what's waiting inside?</p>
        <button className="royal-button" onClick={() => setScene(2)}>Explore your royal surprises <span>→</span></button>
        <button className="royal-back" onClick={() => setScene(0)}>← Back to the castle</button>
      </section>}

      {scene === 2 && <section className="royal-scene compliments-scene">
        <p className="royal-eyebrow">✦ little things worth celebrating ✦</p>
        <h2>Do you know how<br /><em>special you are?</em></h2>
        <p className="royal-copy">A few tiny reminders, because you deserve to hear them.</p>
        <div className="compliment-grid">{compliments.map(([icon, title, copy], index) => <button type="button" className={`compliment-card ${activeCompliment === index ? "compliment-card-open" : ""}`} key={title} onClick={() => setActiveCompliment(activeCompliment === index ? -1 : index)} aria-expanded={activeCompliment === index}>
          <span className="compliment-icon">{icon}</span><h3>{title}</h3><p>{copy}</p>
          <small className="compliment-tap">{activeCompliment === index ? "A little reminder for you" : "Tap to reveal ✦"}</small>
          {activeCompliment === index && <p className="compliment-reveal">{complimentReveals[index]}</p>}
        </button>)}</div>
        <p className="compliment-progress">{activeCompliment === -1 ? "Choose a little reminder to open" : "One little reminder opened · tap again to close"}</p>
        <button className="royal-button" onClick={() => setScene(3)}>See your royal surprises <span>→</span></button>
        <button className="royal-back" onClick={() => setScene(1)}>← Back</button>
      </section>}

      {scene === 3 && <section className="royal-scene gifts-scene">
        <p className="royal-eyebrow">✦ specially picked for a princess ✦</p>
        <h2>Your Princess Day<br /><em>Gift Is Here 🎁</em></h2>
        <div className="gift-list">{gifts.map(([icon, title, copy]) => <article className="gift-row" key={title}><span>{icon}</span><div><h3>{title}</h3><p>{copy}</p></div><b>♡</b></article>)}</div>
        <div className="royal-note"><span>✧ A little note for you ✧</span><p>These gifts may be imaginary, but the wish behind them is real: I hope your day is as lovely as you are.</p></div>
        <button className="royal-button" onClick={() => setScene(4)}>One last thing, Princess <span>→</span></button>
        <button className="royal-back" onClick={() => setScene(2)}>← Back</button>
      </section>}

      {scene === 4 && <section className="royal-scene finale-scene">
        <p className="royal-eyebrow">✦ sealed with a little love ✦</p>
        <h2>A Little Letter from<br /><em>Your Biggest Admirer</em> 💌</h2>
        <div className={`royal-envelope ${opened ? "letter-open" : ""}`} onClick={() => setOpened(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpened(true); }} aria-label="Open the princess day letter">
          <div className="envelope-paper"><span>Dear Princess Tejashvini,</span><p>I hope you have a day filled with smiles, sweet surprises and all the happiness you deserve. Never forget how wonderful you are, and never stop being the person who makes little moments brighter.</p><p>Keep dreaming big, laughing often and shining in your own way. The world is a little more lovely with you in it.</p><b>Happy Princess Day! ♡</b><small>— From someone wishing you the very best</small></div>
          <div className="envelope-pocket" /><div className="envelope-seal">♕</div>
        </div>
        {!opened && <p className="tap-envelope">Tap the envelope to open your letter ♡</p>}
        <div className="final-gift-wrap">
          <button className={`final-gift ${giftOpened ? "unwrapped" : ""}`} onClick={() => setGiftOpened(true)} aria-label="Open a final little gift"><span>🎀</span><b>?</b></button>
          {giftOpened && <div className="wish-reveal"><p>{wishes[wishIndex]}</p><button onClick={() => setWishIndex((wishIndex + 1) % wishes.length)}>Another little wish ↻</button></div>}
        </div>
        <p className="final-signoff">Keep shining, Princess. <span>♡</span></p>
        <button className="royal-back" onClick={() => { setScene(0); setOpened(false); setGiftOpened(false); }}>↺ Visit your kingdom again</button>
      </section>}

      <footer className="royal-footer">
        <div className="royal-footer-main"><span>✧</span> A little kingdom made with care <span>♡</span></div>
        <div className="footer-wish"><span className="footer-crown">♕</span><span className="footer-wish-line">May your little world always sparkle</span><span className="footer-stars">✦　✧　✦</span></div>
      </footer>
    </main>
  );
}
