/**
 * ============================================================================
 * TELEGRAM.MEOW - Modern Responsive Engine
 * Multi-Theme, Real-Time Filtering, Audio Synthesizer & Interactive Modals
 * ============================================================================
 */

// Master Dataset (9 Bots + 9 Games)
const PROJECTS_DATA = [
  // --- TELEGRAM BOTS ---
  {
    id: "pybot",
    title: "PyBot & Python Console",
    subtitle: "Remote Sandbox & In-Browser IDE",
    type: "bot",
    categories: ["bot", "devtools"],
    badge: "💻 Dev Tools",
    icon: "🐍",
    themeColor: "#3b82f6",
    description: "Interactive Python execution bot and Web IDE running code in isolated subprocesses with dynamic input patching.",
    longDescription: "Run and test Python scripts directly within Telegram or via the companion web console. Features sandboxed subprocess execution, dynamic stdin patching for `input()` prompts, 10-second timeout safety nets, and real-time streaming output capture.",
    features: [
      "CPython 3.12 WebAssembly client-side engine (Pyodide)",
      "Isolated subprocess execution environment",
      "Dynamic input() prompt stream handling",
      "Paired with companion Web Python Console IDE"
    ],
    tech: ["Python", "Pyodide WASM", "PTB v20+", "CodeMirror"],
    commands: [
      "/run <code> - Execute arbitrary Python snippet",
      "/eval <expr> - Evaluate single expression",
      "/console - Open full-screen Web IDE",
      "/help - View execution constraints"
    ],
    launchUrl: "https://t.me/py_runbot",
    consoleUrl: "https://anu69-web.github.io/python-console/"
  },
  {
    id: "game-bot",
    title: "Gaming Hub Bot",
    subtitle: "Telegram Arcade Launcher",
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
      "@meoww_gamebot - Share game cards in any chat"
    ],
    launchUrl: "https://t.me/meoww_gamebot"
  },
  {
    id: "hud-bot",
    title: "LDR HUD Bot",
    subtitle: "Couple Distance & Weather HUD",
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
    launchUrl: "https://t.me/ldr_hudbot"
  },
  {
    id: "memory-bot",
    title: "Memory Magic Bot",
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
    launchUrl: "https://t.me/meow_mmbot"
  },
  {
    id: "price-tracker",
    title: "Deal Price Tracker",
    subtitle: "Amazon & Flipkart Price Alerts",
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
    launchUrl: "https://t.me/meow_pricebot"
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
    launchUrl: "https://t.me/meow_quizbot"
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
    launchUrl: "https://t.me/meow_linkbot"
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
    launchUrl: "https://t.me/meow_tempmailbot"
  },
  {
    id: "truth-dare",
    title: "Truth & Dare Bot",
    subtitle: "2-Player Party Prompts",
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
    launchUrl: "https://t.me/meow_tadbot"
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
let activeTheme = localStorage.getItem("telegram_meow_theme") || "dark";
let sfxEnabled = localStorage.getItem("telegram_meow_sfx") !== "false";
let currentCategoryFilter = "all";
let currentSearchQuery = "";

// Theme Palette Definitions
const THEMES = [
  { id: "dark", name: "🖤 Midnight Dark", dotColor: "#38bdf8" },
  { id: "pink", name: "🌸 Sakura Pink", dotColor: "#f43f5e" },
  { id: "cyan", name: "🌊 Cyber Cyan", dotColor: "#0284c7" },
  { id: "violet", name: "💜 Retro Violet", dotColor: "#9333ea" }
];

// Generate Themed SVG Banner for Each Card
function generateCardSVG(project) {
  const c = project.themeColor || "#f43f5e";
  return `
    <svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g-${project.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="60%" stop-color="${c}" stop-opacity="0.25" />
          <stop offset="100%" stop-color="${c}" stop-opacity="0.85" />
        </linearGradient>
        <pattern id="pat-${project.id}" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="300" height="140" fill="url(#g-${project.id})" />
      <rect width="300" height="140" fill="url(#pat-${project.id})" />
      
      <!-- Ambient Geometry -->
      <circle cx="260" cy="25" r="35" fill="${c}" opacity="0.25" />
      <circle cx="40" cy="115" r="28" fill="#ffffff" opacity="0.45" />
      
      <!-- Central Icon Shield -->
      <circle cx="150" cy="62" r="34" fill="#ffffff" stroke="#111111" stroke-width="2.5" />
      <text x="150" y="74" font-size="36" text-anchor="middle" font-family="sans-serif">${project.icon}</text>
      
      <!-- Bottom Strip -->
      <rect x="0" y="118" width="300" height="22" fill="#111111" />
      <text x="150" y="133" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="'JetBrains Mono', monospace" letter-spacing="1.5">
        ${project.tech[0].toUpperCase()} • ${project.type.toUpperCase()}
      </text>
    </svg>
  `;
}

// Web Audio API Synthesizer
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
    // Audio ignored if unsupported/blocked
  }
}

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(activeTheme, false);
  renderAllProjects();
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
  const themeDot = document.getElementById("themeIndicatorDot");
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

// Render Project Card Component
function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("data-id", project.id);

  const techHtml = project.tech.slice(0, 3).map(t => `<span class="tech-chip">${t}</span>`).join("");
  const launchText = project.type === "game" ? "🎮 Play Game" : "🚀 Open Bot";

  card.innerHTML = `
    <div class="card-media-banner">
      ${generateCardSVG(project)}
      <span class="card-type-tag">${project.badge}</span>
    </div>
    
    <div class="card-content-body">
      <div class="card-heading-group">
        <h3 class="card-main-title">${project.title}</h3>
        <span class="card-sub-title">${project.subtitle}</span>
      </div>

      <p class="card-desc-snippet">${project.description}</p>

      <div class="card-tech-chips">
        ${techHtml}
      </div>

      <div class="card-actions-bar">
        ${project.id === "pybot" ? `
          <a href="${project.launchUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-launch" title="Open Telegram Bot (@py_runbot)" onclick="playSound('launch')">
            <span>🚀</span>
          </a>
          <a href="${project.consoleUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-launch" style="background: var(--bg-surface); border: 2px solid var(--border-color);" title="Launch Python Web Console IDE" onclick="playSound('launch')">
            <span>💻</span>
          </a>
        ` : `
          <a href="${project.launchUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-launch" onclick="playSound('launch')">
            <span>${launchText}</span>
            <span>↗</span>
          </a>
        `}
        <button class="btn-card-details" title="View details and commands" aria-label="Details">
          <span>ℹ️</span>
        </button>
      </div>
    </div>
  `;

  const detailsBtn = card.querySelector(".btn-card-details");
  if (detailsBtn) {
    detailsBtn.addEventListener("click", () => openModal(project));
  }

  card.addEventListener("dblclick", () => openModal(project));

  return card;
}

// Master Render Function for Grids
function renderAllProjects() {
  const botsContainer = document.getElementById("botsGridContainer");
  const gamesContainer = document.getElementById("gamesGridContainer");
  const botsSection = document.getElementById("sectionBotsContainer");
  const gamesSection = document.getElementById("sectionGamesContainer");

  const query = currentSearchQuery.toLowerCase().trim();

  // Filter items based on Category & Search Query
  const matchesSearch = (p) => {
    if (!query) return true;
    return p.title.toLowerCase().includes(query) ||
           p.subtitle.toLowerCase().includes(query) ||
           p.description.toLowerCase().includes(query) ||
           p.tech.some(t => t.toLowerCase().includes(query)) ||
           p.commands.some(c => c.toLowerCase().includes(query));
  };

  const matchesCategory = (p) => {
    if (currentCategoryFilter === "all") return true;
    if (currentCategoryFilter === "bot") return p.type === "bot";
    if (currentCategoryFilter === "game") return p.type === "game";
    if (currentCategoryFilter === "multiplayer") return p.categories.includes("multiplayer");
    if (currentCategoryFilter === "devtools") return p.categories.includes("devtools");
    return true;
  };

  const filteredBots = PROJECTS_DATA.filter(p => p.type === "bot" && matchesSearch(p) && matchesCategory(p));
  const filteredGames = PROJECTS_DATA.filter(p => p.type === "game" && matchesSearch(p) && matchesCategory(p));

  // Update Bots Grid
  if (botsContainer) {
    botsContainer.innerHTML = "";
    if (filteredBots.length === 0 && currentCategoryFilter !== "game") {
      botsContainer.innerHTML = `<div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted); font-weight: 700;">No bots matched "${query}".</div>`;
    } else {
      filteredBots.forEach(bot => botsContainer.appendChild(createProjectCard(bot)));
    }
  }

  // Update Games Grid
  if (gamesContainer) {
    gamesContainer.innerHTML = "";
    if (filteredGames.length === 0 && currentCategoryFilter !== "bot") {
      gamesContainer.innerHTML = `<div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted); font-weight: 700;">No games matched "${query}".</div>`;
    } else {
      filteredGames.forEach(game => gamesContainer.appendChild(createProjectCard(game)));
    }
  }

  // Section Visibility based on Category filter
  if (botsSection) {
    botsSection.style.display = (currentCategoryFilter === "game" || (filteredBots.length === 0 && query)) ? "none" : "flex";
  }
  if (gamesSection) {
    gamesSection.style.display = (currentCategoryFilter === "bot" || (filteredGames.length === 0 && query)) ? "none" : "flex";
  }

  // Update Counters
  const botsBadge = document.getElementById("botsCountBadge");
  const gamesBadge = document.getElementById("gamesCountBadge");
  if (botsBadge) botsBadge.textContent = `${filteredBots.length} Active Bots`;
  if (gamesBadge) gamesBadge.textContent = `${filteredGames.length} WebRTC Games`;
}

// Open Detail Modal Dialog
function openModal(project) {
  const modal = document.getElementById("projectDetailModal");
  const headerTitle = document.getElementById("modalHeaderTitle");
  const scrollArea = document.getElementById("modalScrollArea");
  const primaryLaunchBtn = document.getElementById("modalPrimaryLaunchBtn");
  const launchLabel = document.getElementById("modalLaunchLabel");
  const secondaryActionBtn = document.getElementById("modalSecondaryActionBtn");
  const secondaryIcon = document.getElementById("modalSecondaryIcon");
  const secondaryLabel = document.getElementById("modalSecondaryLabel");

  if (!modal || !scrollArea) return;

  if (headerTitle) headerTitle.textContent = project.title;
  
  if (primaryLaunchBtn) {
    primaryLaunchBtn.href = project.launchUrl;
    if (launchLabel) {
      if (project.id === "pybot") {
        launchLabel.textContent = "Open @py_runbot";
      } else if (project.type === "game") {
        launchLabel.textContent = "Launch Web Game";
      } else {
        launchLabel.textContent = "Open Telegram Bot";
      }
    }
  }

  // Handle Secondary Action Button
  if (secondaryActionBtn) {
    if (project.id === "pybot") {
      secondaryActionBtn.style.display = "flex";
      secondaryActionBtn.href = project.consoleUrl;
      if (secondaryIcon) secondaryIcon.textContent = "💻";
      if (secondaryLabel) secondaryLabel.textContent = "Launch In-Browser Python IDE";
    } else if (project.type === "game" && project.sourceUrl) {
      secondaryActionBtn.style.display = "flex";
      secondaryActionBtn.href = project.sourceUrl;
      if (secondaryIcon) secondaryIcon.textContent = "📂";
      if (secondaryLabel) secondaryLabel.textContent = "Games Repo";
    } else {
      secondaryActionBtn.style.display = "none";
    }
  }

  const featuresHtml = project.features.map(f => `<li>${f}</li>`).join("");
  const techHtml = project.tech.map(t => `<span class="tech-chip">${t}</span>`).join("");
  const commandsHtml = project.commands.map(cmd => `
    <div class="cmd-clickable-row" onclick="copyCommand('${cmd.replace(/'/g, "\\'")}')" title="Click to copy">
      <span>${cmd}</span>
      <span style="opacity: 0.6; font-size: 0.72rem;">[COPY]</span>
    </div>
  `).join("");

  scrollArea.innerHTML = `
    <div class="modal-hero-badge">
      <div class="modal-hero-icon">${project.icon}</div>
      <div>
        <div class="modal-hero-title">${project.title}</div>
        <div class="modal-hero-sub">${project.subtitle} • <strong style="color:var(--text-main);">by @anu69-web</strong></div>
      </div>
    </div>

    <div>
      <div class="modal-section-h">Overview</div>
      <p class="modal-body-text">${project.longDescription || project.description}</p>
    </div>

    <div>
      <div class="modal-section-h">Key Features</div>
      <ul class="modal-caps-list">
        ${featuresHtml}
      </ul>
    </div>

    <div>
      <div class="modal-section-h">Technologies</div>
      <div class="modal-tech-list">
        ${techHtml}
      </div>
    </div>

    <div>
      <div class="modal-section-h">Interactive Commands & Controls</div>
      <div class="modal-cmd-box">
        ${commandsHtml}
      </div>
    </div>
  `;

  modal.classList.add("active");
  playSound("launch");
}

function closeModal() {
  const modal = document.getElementById("projectDetailModal");
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

// Toast Notification
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toastMsgBox");
  const text = document.getElementById("toastMsgText");
  if (!toast) return;
  if (text) text.textContent = msg;

  toast.classList.add("active");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("active");
  }, 2200);
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme Switcher Button
  const themeBtn = document.getElementById("themeSwitchBtn");
  if (themeBtn) themeBtn.addEventListener("click", cycleTheme);

  // SFX Toggle Button
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

  // Random Discovery Pick Button
  const randomPickBtn = document.getElementById("randomPickHeaderBtn");
  if (randomPickBtn) {
    randomPickBtn.addEventListener("click", () => {
      const randomItem = PROJECTS_DATA[Math.floor(Math.random() * PROJECTS_DATA.length)];
      openModal(randomItem);
      showToast(`Selected: ${randomItem.title}`);
    });
  }

  // Search Input
  const searchInput = document.getElementById("mainSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderAllProjects();
    });
  }

  // Category Filter Chips
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategoryFilter = chip.getAttribute("data-filter") || "all";
      renderAllProjects();
      playSound("click");
    });
  });

  // Modal Close Handlers
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  const modalOverlay = document.getElementById("projectDetailModal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

// Global Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const searchInput = document.getElementById("mainSearchInput");
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
