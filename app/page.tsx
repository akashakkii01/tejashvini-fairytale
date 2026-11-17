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

  return (
    <main className="kingdom">
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
        <p className="royal-eyebrow">✦ a royal invitation ✦</p>
        <h1>Welcome to your<br /><em>little kingdom</em></h1>
        <p className="royal-copy">A tiny place made to celebrate someone<br />who deserves a little extra magic.</p>
        <div className="castle-stage">
          <div className="moon">☾</div>
          <div className="castle">
            <div className="castle-tower tower-left"><i /><b /></div>
            <div className="castle-tower tower-mid"><i /><b /></div>
            <div className="castle-tower tower-right"><i /><b /></div>
            <div className="castle-wing wing-left"><i /></div>
            <div className="castle-wing wing-right"><i /></div>
            <div className="castle-base"><span className="castle-door" /><span className="castle-window w-one" /><span className="castle-window w-two" /><span className="castle-window w-three" /></div>
            <div className="castle-flag f-one">⚑</div><div className="castle-flag f-two">⚑</div><div className="castle-flag f-three">⚑</div>
          </div>
          <div className="castle-platform"><span>✧</span><span>♡</span><span>✧</span></div>
          <div className="welcome-ribbon">Princess Tejashvini's Kingdom</div>
        </div>
        <p className="royal-small">Your royal adventure is ready whenever you are.</p>
        <button className="royal-button" onClick={() => setScene(1)}>Enter the kingdom <span>→</span></button>
      </section>}

      {scene === 1 && <section className="royal-scene princess-scene">
        <p className="royal-eyebrow">✦ a day made just for you ✦</p>
        <h2>Happy <em>Princess Day</em></h2>
        <div className="princess-art princess-art-refined" role="img" aria-label="A fairytale princess with long flowing hair, a jeweled crown and a lavender rose gown">
          <svg viewBox="0 0 360 430" className="princess-portrait" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dress" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f7b4ed"/><stop offset=".48" stopColor="#b65bc9"/><stop offset="1" stopColor="#713caa"/></linearGradient>
              <linearGradient id="hair" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7d426d"/><stop offset=".45" stopColor="#32183d"/><stop offset="1" stopColor="#170e2d"/></linearGradient>
              <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffe0d5"/><stop offset="1" stopColor="#f3b9b3"/></linearGradient>
              <radialGradient id="glow"><stop stopColor="#ffc5f2" stopOpacity=".7"/><stop offset="1" stopColor="#d56be9" stopOpacity="0"/></radialGradient>
              <filter id="softGlow"><feGaussianBlur stdDeviation="7"/></filter>
            </defs>
            <circle cx="180" cy="205" r="160" fill="url(#glow)"/>
            <circle cx="180" cy="185" r="144" fill="none" stroke="#fbd7ff" strokeOpacity=".65" strokeWidth="1.4"/>
            <circle cx="180" cy="185" r="151" fill="none" stroke="#f7b8ed" strokeOpacity=".25" strokeDasharray="2 8"/>
            <g fill="#ffe7b5"><path d="M42 105l5 12 12 5-12 5-5 12-5-12-12-5 12-5z"/><path d="M310 160l4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/><path d="M72 250l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/></g>
            <path d="M83 353c-9-55-3-124 19-181 12-31 32-52 67-58 56-10 100 25 111 76 10 47 3 118-7 163z" fill="url(#hair)"/>
            <path d="M111 323c-34-45-37-114-11-161 13-23 32-37 52-42-19 28-23 63-17 100 6 37-1 73-24 103z" fill="#4a2454"/>
            <path d="M250 323c31-41 34-105 15-151-9-22-26-39-47-49 20 31 23 68 17 102-5 34-1 69 15 98z" fill="#2a163d"/>
            <path d="M154 246h52v63h-52z" fill="url(#skin)"/>
            <path d="M89 430c5-63 31-112 69-132l22-11 24 1 26 10c40 21 59 69 63 132z" fill="url(#dress)"/>
            <path d="M143 294c14 14 26 20 37 20s24-6 38-20l24 18c-13 24-35 37-62 37s-49-13-62-37z" fill="#f7b4e7"/>
            <path d="M115 315c-21 13-37 34-48 65 23 13 46 18 67 12l30-58zM245 315c22 13 39 34 49 65-22 13-44 18-66 12l-30-58z" fill="#e9a1e5" stroke="#ffd2f3" strokeWidth="3"/>
            <path d="M113 365c32 20 100 28 137 0M101 395c51 24 108 24 159 0" fill="none" stroke="#ffd8f5" strokeOpacity=".75" strokeWidth="2"/>
            <g fill="#ffe4a9"><circle cx="145" cy="343" r="3"/><circle cx="162" cy="357" r="2.5"/><circle cx="205" cy="346" r="3"/><circle cx="224" cy="361" r="2.5"/><path d="M180 332c4-8 12-3 8 3-3 4-8 7-8 7s-5-3-8-7c-4-6 4-11 8-3z"/></g>
            <ellipse cx="180" cy="188" rx="62" ry="78" fill="url(#skin)"/>
            <path d="M118 187c-7-52 14-94 62-96 50-2 75 39 62 93-10-14-19-26-35-35-21 18-54 26-89 22z" fill="url(#hair)"/>
            <path d="M123 168c-14 35-7 83 12 111-23-7-40-35-39-70 1-29 11-52 27-68zM238 164c17 37 10 85-11 115 26-12 39-43 35-77-3-25-11-43-24-58z" fill="#32183e"/>
            <path d="M135 179c10-9 23-10 32-2M194 177c10-8 22-8 31 1" fill="none" stroke="#4a263f" strokeWidth="4" strokeLinecap="round"/>
            <ellipse cx="153" cy="190" rx="4.5" ry="7" fill="#38223b"/><ellipse cx="211" cy="190" rx="4.5" ry="7" fill="#38223b"/>
            <circle cx="154" cy="188" r="1.5" fill="#fff"/><circle cx="212" cy="188" r="1.5" fill="#fff"/>
            <ellipse cx="137" cy="211" rx="11" ry="5" fill="#ee8e9f" opacity=".48"/><ellipse cx="226" cy="211" rx="11" ry="5" fill="#ee8e9f" opacity=".48"/>
            <path d="M174 222c5 5 10 5 15 0" fill="none" stroke="#b45c78" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M124 158c-5-31 8-65 31-79 25-15 59-8 77 17 9 12 13 28 11 45-13-17-27-27-42-31-20 17-46 27-77 26z" fill="url(#hair)"/>
            <g fill="none" stroke="#a86b9d" strokeWidth="5" strokeLinecap="round"><path d="M124 161c-18 49-11 108 17 141"/><path d="M237 151c22 51 16 105-10 145"/><path d="M139 104c-17 21-23 44-20 66"/></g>
            <g transform="translate(180 93)">
              <path d="M-48 5l8-28 19 17 21-38 21 38 19-17 8 28z" fill="#f7c96e" stroke="#fff0bd" strokeWidth="3" strokeLinejoin="round"/>
              <path d="M-48 5h96" stroke="#fff0bd" strokeWidth="4"/>
              <g fill="#fff2c2"><circle cx="-40" cy="-19" r="4"/><circle cx="-21" cy="-11" r="4"/><circle cx="0" cy="-38" r="5"/><circle cx="21" cy="-11" r="4"/><circle cx="40" cy="-19" r="4"/></g>
              <path d="M0-30l4 8-4 8-4-8z" fill="#e78edc"/>
            </g>
            <g fill="none" stroke="#f8d9a0" strokeWidth="2"><path d="M126 246q-13 8-9 21"/><path d="M234 246q13 8 9 21"/></g>
            <g fill="#ffd9f5"><circle cx="117" cy="269" r="5"/><circle cx="243" cy="269" r="5"/></g>
            <path d="M144 304q36 20 72 0" fill="none" stroke="#ffe3f6" strokeWidth="2" opacity=".7"/>
          </svg>
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
        <div className="compliment-grid">{compliments.map(([icon, title, copy]) => <article className="compliment-card" key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
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

      <footer className="royal-footer"><span>✧</span> A little kingdom made with care <span>♡</span></footer>
    </main>
  );
}
