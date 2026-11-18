"use client";

import { useState } from "react";

const compliments = [
  ["♫", "Your Voice", "There is something so lovely about the way you speak — your words have a warmth all their own."],
  ["✿", "Your Kind Heart", "The thoughtful little things you do never go unnoticed."],
  ["✧", "Your Magic", "You have your own way of making moments feel brighter."],
  ["☾", "Your Dreams", "May you always have the courage and space to chase them."],
  ["👸", "Your Royal Energy", "A crown is optional when you carry yourself with grace."],
  ["🎀", "Simply You", "The best thing about you will always be that you're you."]
];

const gifts = [
  ["🌷", "A Bouquet of Roses", "A little reminder that you deserve beautiful things."],
  ["🍰", "A Sweet Treat", "May life always save its sweetest moments for you."],
  ["👸", "A Royal Crown", "For the princess of this little corner of the internet."],
  ["🧸", "A Warm Hug", "Sending a pocket-sized hug for whenever you need one."]
];

const complimentReveals = [
  "Never stop sharing your thoughts. Your voice has a warmth that can make even an ordinary moment feel special.",
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
  const [activeCompliment, setActiveCompliment] = useState(0);
  const [trainStop, setTrainStop] = useState(0);
  const [openDestination, setOpenDestination] = useState(-1);
  const [destinationChoice, setDestinationChoice] = useState(0);
  const [activeGift, setActiveGift] = useState(-1);

  return (
    <main className={`kingdom ${scene === 0 ? "kingdom-welcome" : ""}`}>
      <div className="night-sky" aria-hidden="true">
        {Array.from({ length: 34 }, (_, i) => <i key={i} className="sky-star" style={{ left: `${(i * 37 + 9) % 100}%`, top: `${(i * 23 + 4) % 78}%`, animationDelay: `${(i % 7) * .4}s` }}>✦</i>)}
      </div>
      <header className="royal-nav">
        <span className="royal-mark">👸 <b>YOUR LITTLE KINGDOM</b></span>
        <span className="music-chip">♡ made with care</span>
      </header>

      <div className="royal-progress"><span style={{ width: `${(scene + 1) * (100 / 6)}%` }} /></div>
      <div className="scene-count">A LITTLE FAIRYTALE · {scene + 1} / 6</div>

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
        <div className="compliment-constellation" aria-label="Choose a star to discover a compliment">
          <div className="constellation-orbit" aria-hidden="true"><span>👸</span><small>TEJASHVINI</small></div>
          <div className="constellation-line constellation-line-one" />
          <div className="constellation-line constellation-line-two" />
          <div className="constellation-line constellation-line-three" />
          {compliments.map(([icon, title], index) => <button type="button" key={title} className={`constellation-star ${activeCompliment === index ? "is-selected" : ""}`} onClick={() => setActiveCompliment(index)} aria-label={`Discover: ${title}`} aria-pressed={activeCompliment === index}>
            <span className="constellation-star-icon">{icon}</span><span className="constellation-star-name">{title}</span>
          </button>)}
        </div>
        <div className="constellation-message" key={activeCompliment} aria-live="polite">
          {activeCompliment === -1 ? <>
            <span className="constellation-message-kicker">A LITTLE CONSTELLATION FOR YOU</span>
            <p>Six little things that make you shine.</p>
            <span className="constellation-message-hint">Choose any star above ✦</span>
          </> : <>
            <span className="constellation-message-kicker">{compliments[activeCompliment][0]} &nbsp; A LITTLE THING WE LOVE</span>
            <h3>{compliments[activeCompliment][1]}</h3>
            <p>{compliments[activeCompliment][2]}</p>
            <span className="constellation-message-note">{complimentReveals[activeCompliment]}</span>
          </>}
        </div>
        <button className="royal-button" onClick={() => setScene(3)}>Take the Adventure Express <span>→</span></button>
        <button className="royal-back" onClick={() => setScene(1)}>← Back</button>
      </section>}

      {scene === 3 && <section className="royal-scene train-scene">
        {openDestination === -1 ? <>
          <p className="royal-eyebrow">✦ all aboard, Princess ✦</p>
          <h2>Your Adventure<br /><em>Express 🚂</em></h2>
          <p className="royal-copy">Choose a stop and step into a little world made just for you.</p>
          <div className="train-landscape" aria-label="A magical train journey">
            <div className="train-moon">☾</div><div className="train-cloud train-cloud-one">☁</div><div className="train-cloud train-cloud-two">☁</div>
            <div className="train-hills"><i></i><i></i></div><div className="train-track"><span></span><span></span><span></span><span></span><span></span></div>
            <div className="storybook-train"><span className="train-smoke">✧</span><span className="train-engine">🚂</span><span className="train-car">🎀</span><span className="train-car">🌷</span><span className="train-wheel">●</span></div>
          </div>
          <div className="train-stops">
            {[["🌸","The Flower Shop","A garden of little blooms"],["⭐","The Starlight Stop","A sky full of wishes"],["🏰","The Royal Castle","A royal surprise awaits"]].map(([icon,title,subtitle],index)=><button type="button" key={title} className={"train-stop "+(trainStop===index?"train-stop-active":"")} onClick={()=>{setTrainStop(index);setDestinationChoice(0);setOpenDestination(index);}} aria-label={"Open "+title}><span>{icon}</span><b>{title}</b><small>{subtitle}</small><i>Enter destination →</i></button>)}
          </div>
          <button className="royal-button train-continue-gifts" onClick={()=>{setOpenDestination(-1);setScene(4);}}>Continue to Gifts <span>→</span></button>
          <button className="royal-back" onClick={()=>setScene(2)}>← Back to compliments</button>
        </> : <div className={"destination-world destination-world-"+openDestination}>
          <p className="royal-eyebrow">✦ destination {openDestination+1} of 3 ✦</p>
          <div className="destination-hero-icon">{["🌸","⭐","🏰"][openDestination]}</div>
          <h2>{["The Flower Shop","The Starlight Stop","The Royal Castle"][openDestination]}</h2>
          <p className="destination-subtitle">{["Welcome to a tiny boutique filled with flowers chosen just for you.","Welcome to a little corner of the night sky. Pick a star and make a wish.","The castle gates are open. Your royal surprise is waiting inside."][openDestination]}</p>
          {openDestination===0 && <><div className="destination-display flower-display"><span>🌷</span><span>🌸</span><span>💐</span><span>🌹</span><span>🌻</span></div><h3 className="destination-prompt">Choose your favourite bouquet</h3><div className="destination-choices">{["Tulip Bouquet","Blush Garden","Royal Roses"].map((name,i)=><button key={name} className={destinationChoice===i?"choice-active":""} onClick={()=>setDestinationChoice(i)}><span>{["🌷","🌸","🌹"][i]}</span><b>{name}</b></button>)}</div><div className="destination-reveal"><b>{["A little bunch of joy","A garden wrapped with care","A bouquet fit for royalty"][destinationChoice]}</b><p>{["May every day bring you a fresh reason to smile.","A reminder that lovely things grow in their own time.","Because you deserve all the beautiful things life can offer."][destinationChoice]}</p></div></>}
          {openDestination===1 && <><div className="destination-display star-display"><span>✦</span><span>✧</span><span>★</span><span>✧</span><span>✦</span></div><h3 className="destination-prompt">Pick a star for your wish</h3><div className="destination-choices">{["Dreams","Happiness","Magic"].map((name,i)=><button key={name} className={destinationChoice===i?"choice-active":""} onClick={()=>setDestinationChoice(i)}><span>{["🌠","💫","✨"][i]}</span><b>{name}</b></button>)}</div><div className="destination-reveal"><b>{["A wish for your dreams","A wish for happiness","A wish for everyday magic"][destinationChoice]}</b><p>{["May you always find the courage to chase what makes your heart happy.","May laughter, peace and lovely people find you wherever you go.","May ordinary days surprise you with extraordinary little moments."][destinationChoice]}</p></div></>}
          {openDestination===2 && <><div className="destination-display castle-display"><span>🕯️</span><span>👸</span><span>🕯️</span></div><h3 className="destination-prompt">The royal hall has a surprise</h3><div className="castle-surprise"><span>👸</span><b>A crown made of kindness</b><p>For a princess whose warmth, dreams and little acts of kindness make her kingdom brighter.</p></div><button className="castle-blessing" onClick={()=>setDestinationChoice(destinationChoice===0?1:0)}>{destinationChoice===0?"Receive your royal blessing ✨":"Your blessing is yours to keep ♡"}</button></>}
          <button className="destination-return" onClick={()=>setOpenDestination(-1)}>← Return to the Adventure Express</button>
          <button className="royal-button train-continue-gifts" onClick={()=>{setOpenDestination(-1);setScene(4);}}>Continue to Gifts <span>→</span></button>
        </div>}
      </section>}

      {scene === 4 && <section className="royal-scene gifts-scene">
        <p className="royal-eyebrow">✦ specially picked for a princess ✦</p>
        <h2>Your Princess Day<br /><em>Gift Is Here 🎁</em></h2>
        <p className="gift-instruction">Tap each little present to unwrap its wish ♡</p>
        <div className="gift-list">{gifts.map(([icon, title, copy], index) => <button type="button" className={`gift-row ${activeGift === index ? "gift-row-open" : ""}`} key={title} onClick={() => setActiveGift(activeGift === index ? -1 : index)} aria-expanded={activeGift === index}>
          <span className="gift-row-icon">{icon}</span><div className="gift-row-copy"><h3>{title}</h3><p>{copy}</p>{activeGift === index && <div className="gift-unwrapped"><b>{["A bouquet of happiness","A little sweetness for your day","A crown for your kind heart","A hug whenever you need one"][index]}</b><small>{["May your days keep blooming with laughter, friendship and beautiful surprises.","I hope life brings you countless sweet moments and lovely memories.","Keep shining in your own way. Your grace is your very own crown.","Even on a difficult day, remember that someone is wishing you well."][index]}</small></div>}</div><b className="gift-row-mark">{activeGift === index ? "−" : "+"}</b>
        </button>)}</div>
        <div className="royal-note"><span>✧ A little note for you ✧</span><p>These gifts may be imaginary, but the wish behind them is real: I hope your day is as lovely as you are.</p></div>
        <button className="royal-button" onClick={() => setScene(5)}>One last thing, Princess <span>→</span></button>
        <button className="royal-back" onClick={() => setScene(3)}>← Back</button>
      </section>}

      {scene === 5 && <section className="royal-scene finale-scene">
        <p className="royal-eyebrow">✦ sealed with a little love ✦</p>
        <h2>A Little Letter<br /><em>Just for You</em> 💌</h2>
        <p className="letter-intro">One last little surprise before your fairytale ends.</p>
        <div className={`royal-envelope ${opened ? "letter-open" : ""}`} onClick={() => setOpened(true)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpened(true); }} aria-label="Open the Princess Day letter" aria-expanded={opened}>
          <div className="envelope-paper">
            <span className="letter-paper-kicker">A LITTLE NOTE, WITH WARM WISHES</span>
            <span className="letter-dear">Dear Tejashvini,</span>
            <p>I hope today brings you the kind of happiness that stays with you long after the day is over — the easy laughter, the lovely surprises and the little moments that make you smile for no particular reason.</p>
            <p>Keep being curious, keep chasing the dreams that make your eyes light up, and never feel you have to be anyone other than yourself. Your kindness, your voice and the way you bring your own colour to ordinary moments are worth celebrating.</p>
            <p>May the days ahead be gentle, your plans exciting, and your heart always full of reasons to smile.</p>
            <b>Happy Princess Day! ♡</b>
            <small>With warm wishes, always ✨</small>
          </div>
          <div className="envelope-pocket" /><div className="envelope-seal">👸</div>
        </div>
        {!opened && <p className="tap-envelope">Tap the envelope to unfold your little letter ♡</p>}
        {opened && <p className="letter-open-caption">A little reminder: you deserve all the good things coming your way. ♡</p>}
        <div className="final-gift-wrap">
          <button className={`final-gift ${giftOpened ? "unwrapped" : ""}`} onClick={() => setGiftOpened(true)} aria-label="Open a final little gift"><span>🎀</span><b>?</b></button>
          {giftOpened && <div className="wish-reveal"><p>{wishes[wishIndex]}</p><button onClick={() => setWishIndex((wishIndex + 1) % wishes.length)}>Another little wish ↻</button></div>}
        </div>
        <p className="final-signoff">Keep shining, Princess. <span>♡</span></p>
        <button className="royal-back" onClick={() => { setScene(0); setOpened(false); setGiftOpened(false); }}>↺ Visit your kingdom again</button>
      </section>}

      <footer className="royal-footer">
        <div className="royal-footer-main"><span>✧</span> A little kingdom made with care <span>♡</span></div>
        <div className="footer-wish"><span className="footer-crown">👸</span><span className="footer-wish-line">May your little world always sparkle</span><span className="footer-stars">✦　✧　✦</span></div>
      </footer>
    </main>
  );
}
