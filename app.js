/**
 * ============================================================================
 * TELEGRAM.MEOW - Neobrutalist Dashboard Engine
 * Multi-Theme, Interactive Shelves, Audio Synthesizer & Quick Launcher
 * ============================================================================
 */

// Master Dataset (9 Bots + 9 Games)
const PROJECTS_DATA = [
  // --- TELEGRAM BOTS ---
  {
    id: "pybot",
    title: "PyBot & Console",
    subtitle: "Remote Python Sandbox",
    type: "bot",
    categories: ["bot", "devtools"],
    badge: "💻 Dev Tools",
    icon: "🐍",
    themeColor: "#3b82f6",
    description: "Interactive Python execution bot and Web Console running code in isolated subprocesses with dynamic input patching.",
    longDescription: "Run and test Python scripts directly within Telegram or via the web console. Features sandboxed subprocess execution, dynamic stdin patching for `input()` prompts, 10-second timeout safety nets, and real-time streaming output capture.",
    features: [
      "Isolated subprocess execution environment",
      "Dynamic input() prompt stream handling",
      "10-second CPU execution timeout protection",
      "Paired with companion Web Python Console"
    ],
    tech: ["Python", "Subprocess", "PTB v20+", "Web Console"],
    commands: [
      "/run <code> - Execute arbitrary Python snippet",
      "/eval <expr> - Evaluate single expression",
      "/help - View execution constraints"
    ],
    launchUrl: "https://t.me/python_exec_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/bot.py"
  },
  {
    id: "game-bot",
    title: "Gaming Hub Bot",
    subtitle: "Arcade Card Launcher",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🏆 Score Sync",
    icon: "🕹️",
    themeColor: "#f59e0b",
    description: "Telegram gaming hub serving interactive HTML5 game cards, inline game queries, and synchronized group chat leaderboards.",
    longDescription: "The central launcher for the entire Telegram Web Games suite. Enables users to launch games inside Telegram WebApps or share inline game cards to group chats with automated score tracking via Telegram's getGameHighScores and setGameScore APIs.",
    features: [
      "Inline game card sharing (InlineQueryResultGame)",
      "High score synchronization via setGameScore API",
      "Group chat leaderboards with rank badges",
      "Direct integration with 9+ WebRTC multiplayer games"
    ],
    tech: ["Telegram Gaming API", "PTB", "SQLite", "WebGL"],
    commands: [
      "/games - Browse available game catalog",
      "/top <game> - Display global and group high scores",
      "@game_hub_bot - Share game cards in any chat"
    ],
    launchUrl: "https://t.me/meow_game_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/game_bot.py"
  },
  {
    id: "hud-bot",
    title: "LDR HUD Bot",
    subtitle: "Live Couple Dashboard",
    type: "bot",
    categories: ["bot", "utility", "multiplayer"],
    badge: "📍 Geo/Weather",
    icon: "💖",
    themeColor: "#ec4899",
    description: "Long-distance couple HUD computing live time offsets, real-time Open-Meteo weather metrics, and Haversine separation distance.",
    longDescription: "Designed for couples in different time zones. Computes live geographic separation using the Haversine spherical formula, pulls real-time weather and temperature differentials via Open-Meteo API, and tracks milestone countdowns in SQLite.",
    features: [
      "Haversine separation distance calculation (km/mi)",
      "Live time-zone clock synchronization",
      "Real-time Open-Meteo weather & forecast integration",
      "SQLite relationship countdown milestones"
    ],
    tech: ["Python", "Open-Meteo API", "SQLite", "Haversine Math"],
    commands: [
      "/hud - Render live couple status dashboard",
      "/distance - Calculate exact geographical separation",
      "/weather - Compare dual-city live weather",
      "/milestone <date> <event> - Add milestone countdown"
    ],
    launchUrl: "https://t.me/ldr_hud_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/hud_bot.py"
  },
  {
    id: "memory-bot",
    title: "Memory Match Bot",
    subtitle: "2-Player Card Flip Duel",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🃏 2-Player Duel",
    icon: "🧠",
    themeColor: "#8b5cf6",
    description: "Multiplayer Telegram card-flipping game with concurrency locks, variable grid sizes, mismatch timeouts, and SQLite leaderboards.",
    longDescription: "A real-time card memory battle playable entirely via Telegram inline keyboard buttons. Supports 3x4 to 4x6 grid difficulties, concurrency mutex locking to prevent simultaneous taps, and persistent win streak stats.",
    features: [
      "Interactive Telegram inline keyboard card grid",
      "Turn-based concurrency lock mechanisms",
      "Adjustable grid configurations (3x4 up to 4x6)",
      "Auto-flip mismatch countdowns and scoring"
    ],
    tech: ["Python", "Asyncio Locks", "PTB Inline Keyboards", "SQLite"],
    commands: [
      "/play - Start new solo or 2-player memory match",
      "/grid <3x4|4x4|4x6> - Set custom grid dimension",
      "/stats - View win streaks and leaderboard"
    ],
    launchUrl: "https://t.me/memory_match_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/memory_bot.py"
  },
  {
    id: "price-tracker",
    title: "Deal Price Tracker",
    subtitle: "Amazon & Flipkart Monitor",
    type: "bot",
    categories: ["bot", "utility", "automation"],
    badge: "🏷️ Daily Cron",
    icon: "📉",
    themeColor: "#10b981",
    description: "Automated e-commerce price monitor with daily scheduled checks, Jina AI proxy fallbacks, and instant price-drop alerts.",
    longDescription: "Tracks product price shifts on Amazon and Flipkart. Features automated daily price checks at 12:00 PM IST via APScheduler JobQueue, fallback web scraping via Jina AI reader proxy, and target price alerts.",
    features: [
      "Multi-platform scraping (Amazon & Flipkart)",
      "Fallback proxy scraping via Jina AI Reader API",
      "Automated daily 12:00 PM IST JobQueue checks",
      "Custom target threshold price-drop alerts"
    ],
    tech: ["Python", "BeautifulSoup4", "JobQueue", "Jina AI Proxy"],
    commands: [
      "/track <url> [target_price] - Add item to watchlist",
      "/list - View all currently tracked products",
      "/checknow - Force instant price re-scrape",
      "/untrack <id> - Remove product from tracking"
    ],
    launchUrl: "https://t.me/deal_price_tracker_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/price.py"
  },
  {
    id: "quiz-bot",
    title: "Quiz Quest Bot",
    subtitle: "Python Curriculum Mastery",
    type: "bot",
    categories: ["bot", "devtools", "education"],
    badge: "🎓 100% Mastery",
    icon: "📜",
    themeColor: "#6366f1",
    description: "Interactive Python mastery quest with chapter progression unlocks requiring 100% score and dynamic admin authoring.",
    longDescription: "An interactive coding curriculum directly inside Telegram. Features progressive chapter unlocking (requiring 100% mastery to advance), structured explanations, and admin CRUD commands for adding questions.",
    features: [
      "Strict progression logic requiring 100% chapter mastery",
      "Interactive multiple-choice inline quiz engine",
      "Persistent user chapter state in python_progress.json",
      "Admin CRUD commands for dynamic question authoring"
    ],
    tech: ["Python", "PTB v20+", "JSON Store", "Quiz Engine"],
    commands: [
      "/learn - Open Python curriculum quest menu",
      "/progress - Check mastery status and unlocked chapters",
      "/reset - Reset progress and restart course"
    ],
    launchUrl: "https://t.me/python_quiz_quest_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/quiz_bot.py"
  },
  {
    id: "shortener-bot",
    title: "Fast Shortener Bot",
    subtitle: "Multi-Engine URL Routing",
    type: "bot",
    categories: ["bot", "utility"],
    badge: "🔗 Instant API",
    icon: "⚡",
    themeColor: "#06b6d4",
    description: "Lightweight URL shortening and unshortening engine with multi-provider failover routing (ulvis.net, da.gd) and redirect unwinding.",
    longDescription: "A high-speed URL utility bot. Shrinks long links through multi-provider failover APIs and unwinds obscure shortened links to reveal real landing URLs, safety redirects, and HTTP status headers.",
    features: [
      "Multi-provider shortening API routing (ulvis.net, da.gd)",
      "Instant redirect unwinding for safety analysis",
      "Automatic URL syntax validation & clean output formatting",
      "Single-tap copy buttons for shortened links"
    ],
    tech: ["Python", "Httpx", "Asyncio", "REST APIs"],
    commands: [
      "/short <url> - Generate shortened URL",
      "/unshort <short_url> - Trace redirects to original URL",
      "/help - View supported provider backends"
    ],
    launchUrl: "https://t.me/fast_shortener_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/shortener_bot.py"
  },
  {
    id: "tempmail-bot",
    title: "TempMail Bot",
    subtitle: "Disposable Inbox & OTP",
    type: "bot",
    categories: ["bot", "utility"],
    badge: "📬 15s Poller",
    icon: "🛡️",
    themeColor: "#14b8a6",
    description: "Disposable temporary email bot with multi-provider routing (Mail.tm, Guerrilla Mail) and background polling for OTP verification.",
    longDescription: "Creates throwaway temporary inboxes on demand. Regularly polls mail servers every 15 seconds to deliver verification codes, OTPs, and email messages straight to your Telegram chat.",
    features: [
      "Multi-engine API support (Mail.tm, Mail.gw, Guerrilla Mail)",
      "Background inbox polling every 15 seconds",
      "Smart Regex OTP and activation link extraction",
      "SQLite session persistence for active inboxes"
    ],
    tech: ["Python", "Mail.tm API", "Guerrilla Mail", "SQLite"],
    commands: [
      "/gen - Generate new temporary disposable email address",
      "/check - Manually poll inbox for incoming messages",
      "/otp - Instantly extract verification codes from latest mail",
      "/delete - Terminate current inbox session"
    ],
    launchUrl: "https://t.me/temp_disposable_mail_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/tempmail_bot.py"
  },
  {
    id: "truth-dare",
    title: "Truth & Dare Bot",
    subtitle: "Spicy & Romantic Duels",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🌶️ Zero-Repeat",
    icon: "🎲",
    themeColor: "#f43f5e",
    description: "2-Player Truth or Dare party game with auto-refilling shuffled prompt decks and categorized modes (Casual, Deep, Spicy).",
    longDescription: "An engaging 2-player social game. Uses a zero-repeat auto-shuffling prompt algorithm, categorized deck intensity selectors, and pass-and-play turn switching.",
    features: [
      "Categorized decks (Casual, Deep, Romantic, Spicy)",
      "Auto-refilling shuffled prompt deck with zero-repeat tracking",
      "2-Player duel mode with interactive turn passing",
      "Inline keyboard prompt picking"
    ],
    tech: ["Python", "Deck Shuffler", "PTB", "Inline Buttons"],
    commands: [
      "/truth - Draw random categorized truth prompt",
      "/dare - Draw random categorized dare prompt",
      "/mode <casual|spicy|deep> - Set game intensity level",
      "/duel - Launch 2-player pass-and-play duel"
    ],
    launchUrl: "https://t.me/truth_dare_meow_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/truth_dare_bot.py"
  },

  // --- WEB GAMES SUITE ---
  {
    id: "chess",
    title: "Chess Master SVG",
    subtitle: "Staunton Engine & WebRTC Duel",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "⚔️ WebRTC P2P",
    icon: "♟️",
    themeColor: "#334155",
    description: "High-performance Staunton SVG chess engine with full move validation, live material calculation, themes, and P2P in-game chat.",
    longDescription: "A full-featured Staunton SVG chess game built for Telegram WebApp and browser play. Complete with en passant, castling, pawn promotion, check/checkmate detection, live material advantage tracking, custom board themes, and sub-50ms peer-to-peer multiplayer.",
    features: [
      "Complete chess rule engine (en passant, castling, promotion, checkmate)",
      "PeerJS WebRTC peer-to-peer real-time networking",
      "Live material advantage differential counter",
      "In-game chat and audio synthesis sound effects"
    ],
    tech: ["Vanilla JS", "SVG Staunton", "PeerJS WebRTC", "Web Audio API"],
    commands: [
      "Share Room Code / QR to play peer-to-peer",
      "Toggle Theme: Classic Wood, Neon Cyber, Midnight Obsidian",
      "Click pieces to view legal moves and attack vectors"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/chess/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/chess"
  },
  {
    id: "uno",
    title: "Uno Duel 2-Player",
    subtitle: "Card Battler & Penalties",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🃏 Real-Time Duel",
    icon: "🎴",
    themeColor: "#ef4444",
    description: "Fast-paced 2-player Uno card duel with wild color pickers, skip/reverse mechanics, penalty stacking, and WebRTC syncing.",
    longDescription: "A sleek HTML5 recreation of the classic Uno duel. Features card draw animation, wild card color picking modal, +2 and +4 penalty stacking rules, and instant game state synchronization over WebRTC.",
    features: [
      "Complete standard Uno rule set with action card mechanics",
      "+2 and +4 card stacking penalty mechanics",
      "Wild color picker wheel dialog",
      "Sub-50ms WebRTC action state synchronization"
    ],
    tech: ["HTML5 Canvas", "CSS3 3D", "PeerJS", "Web Audio"],
    commands: [
      "Tap cards matching active color or number",
      "Select color from popup wheel when playing Wild cards",
      "Click UNO button before discarding penultimate card"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/uno/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/uno"
  },
  {
    id: "paddle",
    title: "Paddle Pong Duel",
    subtitle: "Inverted Perspective Pong",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🏓 60 FPS Canvas",
    icon: "🏓",
    themeColor: "#0284c7",
    description: "High-octane multiplayer Pong duel with inverted perspective rendering, 5-heart life bars, dynamic ball spin, and rally streaks.",
    longDescription: "Fast-paced retro arcade pong duel with inverted dual perspective so each player sees their paddle on the home side. Features particle collision sparks, acceleration physics, and life bar depletion.",
    features: [
      "Inverted perspective coordinate mapping across peers",
      "Dynamic paddle edge deflection & spin curve physics",
      "5-Heart health system with rally streak multipliers",
      "Collision particle burst effects and retro beep synthesizer"
    ],
    tech: ["HTML5 2D Canvas", "WebRTC DataChannels", "Web Audio API"],
    commands: [
      "Touch & drag or move mouse/finger to position paddle",
      "Hit ball with paddle corners for aggressive angled returns",
      "Defend your goal line until opponent hearts deplete"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/paddle/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/paddle"
  },
  {
    id: "snakes",
    title: "Snakes & Ladders 3D",
    subtitle: "Isometric Board Quest",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🎲 3D Board Game",
    icon: "🐍",
    themeColor: "#16a34a",
    description: "3D animated 100-tile board game with dice physics, player hop animation, sliding ladders, and single-turn roll-again mechanics.",
    longDescription: "The timeless board game brought to life with animated 3D tokens and isometric board rendering. Features smooth piece hopping, physics-based ladder climbing, sliding snake traps, and bonus turns on rolling a 6.",
    features: [
      "Animated tile-by-tile piece hopping transitions",
      "Smooth glide animations for snake slides and ladder climbs",
      "Dice roll physics with extra roll bonus on rolling 6",
      "Synchronized multiplayer turn rotation"
    ],
    tech: ["CSS 3D Transforms", "Canvas Animation", "PeerJS WebRTC"],
    commands: [
      "Tap the 3D dice to roll your turn (1-6)",
      "Watch token automatically navigate board tiles",
      "First player to land exactly on tile 100 wins match"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/snakes/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/snakes"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird Arcade",
    subtitle: "Physics Runner & High Scores",
    type: "game",
    categories: ["game", "arcade"],
    badge: "🕹️ Single/Multi",
    icon: "🐤",
    themeColor: "#eab308",
    description: "Addictive canvas arcade runner with particle physics, shield power-ups, bonus collectibles, and difficulty scaling.",
    longDescription: "A polished recreation of the classic arcade runner. Features fluid particle jump trails, shield bubbles, coin collection multipliers, dynamic pipe gap scaling, and high score saving.",
    features: [
      "Precision jump gravity physics with flap velocity smoothing",
      "Collectable power-up shields and bonus score stars",
      "Progressive pipe gap and velocity difficulty scaling",
      "Instant restart with local and Telegram leaderboard sync"
    ],
    tech: ["Canvas 2D Engine", "Web Audio API", "LocalStorage Cache"],
    commands: [
      "Tap screen or press Spacebar to flap wings",
      "Fly through green pipes without touching borders",
      "Collect floating shield gems for invulnerability"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/flappy-bird/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/flappy-bird"
  },
  {
    id: "frog-fight",
    title: "Frog Fight Arena",
    subtitle: "Lilypad Strategy Brawler",
    type: "game",
    categories: ["game", "multiplayer", "arcade"],
    badge: "🐸 Tactical Arena",
    icon: "🐸",
    themeColor: "#84cc16",
    description: "Grid-based tactical arena brawler where players tongue-grapple flies, jump between sinking lilypads, and outmaneuver rivals.",
    longDescription: "An action-packed arcade duel set on an unstable pond of sinking lilypads. Players use tongue whips to collect insects, place water ripples to nudge opponents, and fight for survival as pads submerge.",
    features: [
      "Dynamic pond simulation with sinking lilypad physics",
      "Tongue grapple grappling mechanics with projectile hitboxes",
      "Interactive power-ups: Golden Dragonfly, Super Leap, Splash Shockwave",
      "Peer-to-peer multiplayer match synchronization"
    ],
    tech: ["HTML5 Canvas", "Sprite Physics", "PeerJS WebRTC"],
    commands: [
      "Tap adjacent lilypad to hop",
      "Aim and fire tongue grapple to snatch flies or strike opponent",
      "Stay on dry lilypads to avoid sinking into pond"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/frog-fight/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/frog-fight"
  },
  {
    id: "heart-catcher",
    title: "Heart Catcher",
    subtitle: "Rhythm Drop & Hazard Dodge",
    type: "game",
    categories: ["game", "arcade"],
    badge: "💖 Fast Reflexes",
    icon: "❤️",
    themeColor: "#f43f5e",
    description: "Touch and mouse-controlled arcade catcher featuring bonus multipliers, falling hazard avoidance, and combo streaks.",
    longDescription: "A vibrant reflex and rhythm catcher game. Catch falling hearts and golden stars while dodging broken glass and thunderstorm hazards to build up high score combos.",
    features: [
      "Smooth touch, mouse, and arrow key basket motion",
      "Combo streak multiplier system (x2, x4, x8 frenzy mode)",
      "Floating sparkle particles and satisfying pop chime sounds",
      "High score persistence and Telegram leaderboard integration"
    ],
    tech: ["Vanilla JavaScript", "Canvas 2D", "Web Audio API"],
    commands: [
      "Move basket left/right with mouse, touch, or Arrow keys",
      "Catch pink and gold hearts to increase score streak",
      "Dodge black lightning bolts to protect your 3 lives"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/heart-catcher/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/heart-catcher"
  },
  {
    id: "helix-jump",
    title: "Helix Jump 3D",
    subtitle: "Tower Drop & Physics",
    type: "game",
    categories: ["game", "arcade"],
    badge: "🌀 3D Helix Drop",
    icon: "🌀",
    themeColor: "#06b6d4",
    description: "3D tower descent game with rotating helix platforms, bouncy ball physics, obstacle avoidance, and stage clear streaks.",
    longDescription: "Rotate the cylindrical helix tower to drop your bouncing ball through open slits down the skyscraper. Avoid hazardous red sectors, trigger speed boosts, and shatter through platforms.",
    features: [
      "Real-time 3D cylinder slice projection and rotation controls",
      "Continuous bounce physics with momentum speed-drop breaks",
      "Hazardous red zones with instant retry checkpoints",
      "Satisfying visual splash splatter decals on platform landings"
    ],
    tech: ["HTML5 Canvas 3D Projection", "Physics Engine", "Web Audio"],
    commands: [
      "Drag left/right to spin the helix tower cylinder",
      "Guide bouncing ball through gaps without touching red hazard tiles",
      "Fall through 3+ consecutive gaps to trigger power smash mode"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/helix-jump/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/helix-jump"
  },
  {
    id: "tower-builder",
    title: "Tower Builder 3D",
    subtitle: "Precision Stacking Engine",
    type: "game",
    categories: ["game", "arcade"],
    badge: "🏢 Isometric Stack",
    icon: "🏗️",
    themeColor: "#a855f7",
    description: "Isometric tower stacking game with slice physics, dynamic pastel color gradients, perfect-drop combo bonuses, and height scoring.",
    longDescription: "Stack oscillating building blocks with pinpoint precision. Overhanging block segments slice off and tumble down with realistic gravity. Land perfect alignments to expand your block dimensions and achieve sky-high records.",
    features: [
      "Dynamic block slicing physics with falling debris particles",
      "Chroma gradient generation that transitions as tower ascends",
      "Perfect placement combo sound chords and block expansion",
      "Perspective camera climbing as tower height grows"
    ],
    tech: ["Isometric Canvas 2D", "Dynamic Color Gradients", "Web Audio API"],
    commands: [
      "Tap screen or press Spacebar to drop the moving block",
      "Align blocks perfectly with layer below to avoid trimming",
      "Chain 5 perfect drops to trigger block expansion bonus"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/tower-builder/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/tower-builder"
  }
];

// App State
let activeTheme = localStorage.getItem("telegram_meow_theme") || "pink";
let sfxEnabled = localStorage.getItem("telegram_meow_sfx") !== "false";
let currentSelectedProject = PROJECTS_DATA[0];

// Themes Configuration
const THEMES = [
  { id: "pink", name: "🌸 Sakura Pink", dotColor: "#f9849b" },
  { id: "cyan", name: "🌊 Cyber Cyan", dotColor: "#00b4d8" },
  { id: "violet", name: "💜 Retro Violet", dotColor: "#c084fc" },
  { id: "dark", name: "🖤 Midnight Dark", dotColor: "#38bdf8" }
];

// Generate Thematic SVG Graphic for Every Project Card
function generateCardSVG(project) {
  const c = project.themeColor || "#f43f5e";
  return `
    <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
      <defs>
        <linearGradient id="grad-${project.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="50%" stop-color="${c}" stop-opacity="0.25" />
          <stop offset="100%" stop-color="${c}" stop-opacity="0.85" />
        </linearGradient>
        <pattern id="grid-${project.id}" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="200" height="130" fill="url(#grad-${project.id})" />
      <rect width="200" height="130" fill="url(#grid-${project.id})" />
      
      <!-- Outer Decorative Shapes -->
      <circle cx="170" cy="20" r="30" fill="${c}" opacity="0.2" />
      <circle cx="30" cy="110" r="22" fill="#ffffff" opacity="0.4" />
      <rect x="140" y="85" width="45" height="30" rx="6" fill="#111111" opacity="0.08" />
      
      <!-- Center Icon Graphic -->
      <circle cx="100" cy="55" r="32" fill="#ffffff" stroke="#111111" stroke-width="2" />
      <text x="100" y="66" font-size="34" text-anchor="middle" font-family="sans-serif">${project.icon}</text>
      
      <!-- Bottom Badge Strip -->
      <rect x="0" y="108" width="200" height="22" fill="#111111" />
      <text x="100" y="123" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="'JetBrains Mono', monospace" letter-spacing="1">
        ${project.tech[0].toUpperCase()} • ${project.type.toUpperCase()}
      </text>
    </svg>
  `;
}

// Web Audio API Retro Sound Effects
let audioCtx = null;
function playSound(type = "click") {
  if (!sfxEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "launch") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.2);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === "theme") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    // Audio ignored if blocked
  }
}

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(activeTheme, false);
  renderAllShelves();
  renderQueueList();
  selectProject(PROJECTS_DATA[0], false);
  setupEventListeners();
  setupKeyboardShortcuts();
});

// Theme Management
function applyTheme(themeId, triggerSfx = true) {
  activeTheme = themeId;
  document.documentElement.setAttribute("data-theme", themeId);
  localStorage.setItem("telegram_meow_theme", themeId);

  const themeObj = THEMES.find(t => t.id === themeId) || THEMES[0];
  const themeLabel = document.getElementById("themeNameLabel");
  const themeDot = document.getElementById("currentThemeDot");
  if (themeLabel) themeLabel.textContent = themeObj.name;
  if (themeDot) themeDot.style.background = themeObj.dotColor;

  if (triggerSfx) playSound("theme");
}

function cycleTheme() {
  const currentIndex = THEMES.findIndex(t => t.id === activeTheme);
  const nextIndex = (currentIndex + 1) % THEMES.length;
  applyTheme(THEMES[nextIndex].id, true);
  showToast(`Theme: ${THEMES[nextIndex].name}`);
}

// Shelf Horizontal Scrolling Helper
function scrollShelf(trackId, delta) {
  const track = document.getElementById(trackId);
  if (track) {
    track.scrollBy({ left: delta, behavior: "smooth" });
    playSound("click");
  }
}

// Render Project Card Element
function createCardElement(project) {
  const card = document.createElement("div");
  card.className = "neo-card";
  if (currentSelectedProject && currentSelectedProject.id === project.id) {
    card.classList.add("active-selected");
  }
  card.setAttribute("data-id", project.id);

  card.innerHTML = `
    <div class="neo-card-media">
      ${generateCardSVG(project)}
      <span class="card-badge-pill">${project.badge}</span>
    </div>
    <div class="neo-card-body">
      <div class="neo-card-title" title="${project.title}">${project.title}</div>
      <div class="neo-card-subtitle">${project.subtitle}</div>
      <div class="neo-card-footer">
        <span class="neo-card-tech-tag">${project.tech[0]}</span>
        <div class="neo-card-action-btn" title="View Details">ℹ️</div>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    selectProject(project);
    if (e.target.closest(".neo-card-action-btn")) {
      openModal(project);
    }
  });

  card.addEventListener("dblclick", () => {
    openModal(project);
  });

  return card;
}

// Render All Shelves
function renderAllShelves() {
  const botsTrack = document.getElementById("botsTrack");
  const gamesTrack = document.getElementById("gamesTrack");
  const utilsTrack = document.getElementById("utilsTrack");

  if (botsTrack) {
    botsTrack.innerHTML = "";
    PROJECTS_DATA.filter(p => p.type === "bot").forEach(p => {
      botsTrack.appendChild(createCardElement(p));
    });
  }

  if (gamesTrack) {
    gamesTrack.innerHTML = "";
    PROJECTS_DATA.filter(p => p.type === "game").forEach(p => {
      gamesTrack.appendChild(createCardElement(p));
    });
  }

  if (utilsTrack) {
    utilsTrack.innerHTML = "";
    const picks = PROJECTS_DATA.filter(p => 
      p.id === "pybot" || p.id === "chess" || p.id === "tempmail-bot" || p.id === "uno" || p.id === "price-tracker" || p.id === "paddle"
    );
    picks.forEach(p => {
      utilsTrack.appendChild(createCardElement(p));
    });
  }
}

// Local Filter for Cards in Shelf
function filterShelfTrack(trackId, query) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const cards = track.querySelectorAll(".neo-card");
  const cleanQ = query.trim().toLowerCase();

  cards.forEach(card => {
    const id = card.getAttribute("data-id");
    const proj = PROJECTS_DATA.find(p => p.id === id);
    if (!proj) return;
    const match = proj.title.toLowerCase().includes(cleanQ) ||
                  proj.subtitle.toLowerCase().includes(cleanQ) ||
                  proj.tech.some(t => t.toLowerCase().includes(cleanQ));
    card.style.display = match ? "flex" : "none";
  });
}

// Render Right Sidebar Quick Launcher List
function renderQueueList() {
  const container = document.getElementById("queueListContainer");
  if (!container) return;
  container.innerHTML = "";

  PROJECTS_DATA.forEach(project => {
    const row = document.createElement("div");
    row.className = "queue-item-row";
    row.setAttribute("data-id", project.id);

    row.innerHTML = `
      <div class="queue-item-thumb">
        <span>${project.icon}</span>
      </div>
      <div class="queue-item-meta">
        <div class="queue-item-title">${project.title}</div>
        <div class="queue-item-sub">${project.type === "game" ? "WebRTC Game" : "Telegram Bot"}</div>
      </div>
      <span class="queue-item-badge">${project.tech[0]}</span>
    `;

    row.addEventListener("click", () => {
      selectProject(project);
      openModal(project);
    });

    container.appendChild(row);
  });
}

// Select Project (Sync with Banner & Dock)
function selectProject(project, triggerSfx = true) {
  currentSelectedProject = project;

  // Active Outline in Cards
  document.querySelectorAll(".neo-card").forEach(card => {
    if (card.getAttribute("data-id") === project.id) {
      card.classList.add("active-selected");
    } else {
      card.classList.remove("active-selected");
    }
  });

  // Right Queue Banner
  const queueThumb = document.getElementById("queueActiveThumb");
  const queueTitle = document.getElementById("queueActiveTitle");
  const queueSub = document.getElementById("queueActiveSub");
  const queueBadge = document.getElementById("queueActiveBadge");

  if (queueThumb) queueThumb.textContent = project.icon;
  if (queueTitle) queueTitle.textContent = project.title;
  if (queueSub) queueSub.textContent = project.subtitle;
  if (queueBadge) queueBadge.textContent = project.type.toUpperCase();

  // Bottom Dock
  const dockEmoji = document.getElementById("dockThumbEmoji");
  const dockTitle = document.getElementById("dockCurrentTitle");
  const dockType = document.getElementById("dockCurrentType");
  const dockLaunchBtn = document.getElementById("dockLaunchBtn");
  const dockLaunchLabel = document.getElementById("dockLaunchLabel");

  if (dockEmoji) dockEmoji.textContent = project.icon;
  if (dockTitle) dockTitle.textContent = project.title;
  if (dockType) dockType.textContent = project.type === "game" ? "HTML5 Web Game" : "Telegram Bot";
  
  if (dockLaunchBtn) {
    dockLaunchBtn.href = project.launchUrl;
    if (dockLaunchLabel) {
      dockLaunchLabel.textContent = project.type === "game" ? "Play Web Game" : "Open Telegram Bot";
    }
  }

  if (triggerSfx) playSound("click");
}

// Open Detail Modal
function openModal(project) {
  const modal = document.getElementById("detailModal");
  const headerTitle = document.getElementById("modalHeaderTitle");
  const scrollBody = document.getElementById("modalScrollBody");
  const launchBtn = document.getElementById("modalLaunchBtn");
  const sourceBtn = document.getElementById("modalSourceBtn");

  if (!modal || !scrollBody) return;

  if (headerTitle) headerTitle.textContent = project.title;
  if (launchBtn) {
    launchBtn.href = project.launchUrl;
    launchBtn.innerHTML = `<span>🚀</span><span>Launch ${project.type === "game" ? "Web Game" : "Telegram Bot"}</span>`;
  }
  if (sourceBtn) {
    sourceBtn.href = project.sourceUrl;
  }

  const featuresHtml = project.features.map(f => `<li>${f}</li>`).join("");
  const techHtml = project.tech.map(t => `<span class="modal-tech-pill">${t}</span>`).join("");
  const commandsHtml = project.commands.map(cmd => `
    <div class="cmd-line" onclick="copyCommand('${cmd.replace(/'/g, "\\'")}')" title="Click to copy">
      <span>${cmd}</span>
      <span style="opacity: 0.5; font-size: 0.72rem;">[COPY]</span>
    </div>
  `).join("");

  scrollBody.innerHTML = `
    <div class="modal-hero-banner">
      <div class="modal-banner-icon">${project.icon}</div>
      <div>
        <div class="modal-banner-title">${project.title}</div>
        <div class="modal-banner-sub">${project.subtitle} • <strong style="color: var(--text-main);">by @anu69-web</strong></div>
      </div>
    </div>

    <div>
      <div class="modal-section-title">Description</div>
      <p class="modal-desc-text">${project.longDescription || project.description}</p>
    </div>

    <div>
      <div class="modal-section-title">Key Capabilities</div>
      <ul class="modal-features-list">
        ${featuresHtml}
      </ul>
    </div>

    <div>
      <div class="modal-section-title">Built With</div>
      <div class="modal-tech-pills">
        ${techHtml}
      </div>
    </div>

    <div>
      <div class="modal-section-title">Interactive Commands & Controls</div>
      <div class="modal-commands-box">
        ${commandsHtml}
      </div>
    </div>
  `;

  modal.classList.add("active");
  playSound("launch");
}

function closeModal() {
  const modal = document.getElementById("detailModal");
  if (modal) {
    modal.classList.remove("active");
    playSound("click");
  }
}

// Copy Command to Clipboard
function copyCommand(cmdText) {
  const cleanCmd = cmdText.split(" - ")[0].trim();
  navigator.clipboard.writeText(cleanCmd).then(() => {
    showToast(`Copied "${cleanCmd}"!`);
    playSound("click");
  }).catch(() => {
    showToast(`Copied to clipboard!`);
  });
}

// Toast
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toastBox");
  const msg = document.getElementById("toastMsg");
  if (!toast) return;
  if (msg) msg.textContent = message;
  toast.classList.add("active");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 2000);
}

// Event Handlers Setup
function setupEventListeners() {
  // Theme Toggle Button
  const themeBtn = document.getElementById("themeSwitchBtn");
  if (themeBtn) themeBtn.addEventListener("click", cycleTheme);
  const navThemeToggle = document.getElementById("navThemeToggle");
  if (navThemeToggle) navThemeToggle.addEventListener("click", cycleTheme);

  // Top Nav History Buttons
  const navPrevBtn = document.getElementById("navPrevBtn");
  if (navPrevBtn) {
    navPrevBtn.addEventListener("click", () => {
      const idx = PROJECTS_DATA.findIndex(p => p.id === currentSelectedProject.id);
      const prevIdx = (idx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
      selectProject(PROJECTS_DATA[prevIdx]);
    });
  }
  const navNextBtn = document.getElementById("navNextBtn");
  if (navNextBtn) {
    navNextBtn.addEventListener("click", () => {
      const idx = PROJECTS_DATA.findIndex(p => p.id === currentSelectedProject.id);
      const nextIdx = (idx + 1) % PROJECTS_DATA.length;
      selectProject(PROJECTS_DATA[nextIdx]);
    });
  }

  // SFX Toggle
  const sfxBtn = document.getElementById("sfxToggleBtn");
  if (sfxBtn) {
    sfxBtn.addEventListener("click", () => {
      sfxEnabled = !sfxEnabled;
      localStorage.setItem("telegram_meow_sfx", sfxEnabled);
      const icon = document.getElementById("sfxIcon");
      const status = document.getElementById("sfxStatus");
      if (icon) icon.textContent = sfxEnabled ? "🔊" : "🔇";
      if (status) status.textContent = sfxEnabled ? "SFX: ON" : "SFX: OFF";
      showToast(sfxEnabled ? "Sound enabled" : "Sound muted");
      if (sfxEnabled) playSound("click");
    });
  }

  // Modal Close
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  const modalOverlay = document.getElementById("detailModal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Global Search Input
  const globalSearch = document.getElementById("globalSearchInput");
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      filterShelfTrack("botsTrack", q);
      filterShelfTrack("gamesTrack", q);
      filterShelfTrack("utilsTrack", q);
    });
  }

  // Shelf Local Filter Inputs
  const filterBots = document.getElementById("filterBotsInput");
  if (filterBots) filterBots.addEventListener("input", (e) => filterShelfTrack("botsTrack", e.target.value));
  const filterGames = document.getElementById("filterGamesInput");
  if (filterGames) filterGames.addEventListener("input", (e) => filterShelfTrack("gamesTrack", e.target.value));
  const filterUtils = document.getElementById("filterUtilsInput");
  if (filterUtils) filterUtils.addEventListener("input", (e) => filterShelfTrack("utilsTrack", e.target.value));

  // Dock Controls
  const dockInfoBtn = document.getElementById("dockInfoBtn");
  if (dockInfoBtn) {
    dockInfoBtn.addEventListener("click", () => {
      if (currentSelectedProject) openModal(currentSelectedProject);
    });
  }

  const dockPrevBtn = document.getElementById("dockPrevBtn");
  if (dockPrevBtn) {
    dockPrevBtn.addEventListener("click", () => {
      const idx = PROJECTS_DATA.findIndex(p => p.id === currentSelectedProject.id);
      const prevIdx = (idx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
      selectProject(PROJECTS_DATA[prevIdx]);
    });
  }

  const dockNextBtn = document.getElementById("dockNextBtn");
  if (dockNextBtn) {
    dockNextBtn.addEventListener("click", () => {
      const idx = PROJECTS_DATA.findIndex(p => p.id === currentSelectedProject.id);
      const nextIdx = (idx + 1) % PROJECTS_DATA.length;
      selectProject(PROJECTS_DATA[nextIdx]);
    });
  }

  const dockShuffleBtn = document.getElementById("dockShuffleBtn");
  const randomPickBtn = document.getElementById("randomPickBtn");
  function pickRandom() {
    const randomIdx = Math.floor(Math.random() * PROJECTS_DATA.length);
    selectProject(PROJECTS_DATA[randomIdx]);
    showToast(`Selected: ${PROJECTS_DATA[randomIdx].title}`);
  }
  if (dockShuffleBtn) dockShuffleBtn.addEventListener("click", pickRandom);
  if (randomPickBtn) randomPickBtn.addEventListener("click", pickRandom);

  // Clear Search
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (globalSearch) globalSearch.value = "";
      if (filterBots) filterBots.value = "";
      if (filterGames) filterGames.value = "";
      if (filterUtils) filterUtils.value = "";
      renderAllShelves();
      showToast("Filters reset");
      playSound("click");
    });
  }

  // Left Sidebar Nav Buttons
  const navBots = document.getElementById("navBots");
  if (navBots) {
    navBots.addEventListener("click", () => {
      document.getElementById("sectionBots")?.scrollIntoView({ behavior: "smooth" });
      playSound("click");
    });
  }

  const navGames = document.getElementById("navGames");
  if (navGames) {
    navGames.addEventListener("click", () => {
      document.getElementById("sectionGames")?.scrollIntoView({ behavior: "smooth" });
      playSound("click");
    });
  }

  const navUtilities = document.getElementById("navUtilities");
  if (navUtilities) {
    navUtilities.addEventListener("click", () => {
      document.getElementById("sectionUtilities")?.scrollIntoView({ behavior: "smooth" });
      playSound("click");
    });
  }

  const navMultiplayer = document.getElementById("navMultiplayer");
  if (navMultiplayer) {
    navMultiplayer.addEventListener("click", () => {
      filterShelfTrack("gamesTrack", "multiplayer");
      document.getElementById("sectionGames")?.scrollIntoView({ behavior: "smooth" });
      playSound("click");
    });
  }

  const navDashboard = document.getElementById("navDashboard");
  if (navDashboard) {
    navDashboard.addEventListener("click", () => {
      document.getElementById("dashboardContentArea")?.scrollTo({ top: 0, behavior: "smooth" });
      playSound("click");
    });
  }
}

// Global Keyboard Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const globalSearch = document.getElementById("globalSearchInput");
      if (globalSearch) {
        globalSearch.focus();
        globalSearch.select();
      }
    }
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
