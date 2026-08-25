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
    title: "PyBot & Python Playground",
    subtitle: "Practice Python & Test Scripts Instantly",
    type: "bot",
    categories: ["bot", "devtools"],
    badge: "🐍 Study & Coding",
    icon: "🐍",
    themeColor: "#3b82f6",
    description: "A friendly Python sandbox and Web IDE to run code snippets, test assignments, and learn Python directly in chat or browser.",
    longDescription: "Made to help you easily test and execute Python code without installing complicated software. Run quick calculations, assignments, or full Python scripts in Telegram or via the companion web IDE.",
    features: [
      "Run Python snippets and homework assignments instantly",
      "Companion Web IDE with auto-complete and keyboard symbols",
      "Dynamic input() prompt handling for interactive scripts",
      "Safe execution environment with instant results"
    ],
    tech: ["Python", "Pyodide WASM", "PTB v20+", "CodeMirror"],
    commands: [
      "/run <code> - Run any Python code snippet",
      "/eval <expr> - Quickly calculate an expression",
      "/console - Open the full in-browser Web IDE",
      "/help - Learn how to use PyBot"
    ],
    launchUrl: "https://t.me/py_runbot",
    consoleUrl: "https://anuragsrivastava-dev.github.io/python-console/"
  },
  {
    id: "game-bot",
    title: "Gaming Hub Bot",
    subtitle: "Multiplayer Telegram Games Hub",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🕹️ Game Arcade",
    icon: "🕹️",
    themeColor: "#f59e0b",
    description: "The central gateway for multiplayer HTML5 games! Dispatches interactive game cards in chat, handles P2P matchmaking, and tracks live leaderboards.",
    longDescription: "An all-in-one gaming gateway for Telegram. Launches instant client-side WebRTC games, invites friends to matches, and syncs match scores via Telegram's Game API.",
    features: [
      "Instant game launcher inside Telegram",
      "Share interactive game cards directly to chat",
      "Keeps track of high scores and leaderboards",
      "Quick access to all 9 real-time multiplayer games"
    ],
    tech: ["Telegram Gaming API", "PTB", "SQLite", "WebGL"],
    commands: [
      "/games - Browse all available games",
      "/top <game> - Check high scores and records",
      "@meoww_gamebot - Share game cards into any chat"
    ],
    launchUrl: "https://t.me/meoww_gamebot"
  },
  {
    id: "hud-bot",
    title: "World Clock & GeoOps HUD",
    subtitle: "Global Clocks, Weather & Milestone HUD",
    type: "bot",
    categories: ["bot", "utility"],
    badge: "🌐 Operations HUD",
    icon: "🌐",
    themeColor: "#0284c7",
    description: "Multi-timezone synchronizer, Open-Meteo weather intelligence, Haversine geodesic distance calculator, and sprint milestone countdown engine.",
    longDescription: "An operations dashboard designed for distributed workflows. Displays live clocks across global tech hubs, compares live local weather, calculates geodesic distances between coordinates, and tracks project milestones.",
    features: [
      "Live clocks across international tech hubs",
      "Real-time weather data via Open-Meteo API",
      "Geodesic distance calculation via Haversine formula",
      "Project milestone and release deadline countdowns"
    ],
    tech: ["Python", "Open-Meteo API", "SQLite", "Haversine Math"],
    commands: [
      "/hud - Display live operations dashboard",
      "/events - View upcoming project countdowns",
      "/add <title> <date> - Add target milestone",
      "/del <id> - Delete a milestone"
    ],
    launchUrl: "https://t.me/ldr_hudbot"
  },
  {
    id: "memory-bot",
    title: "Memory Match Bot",
    subtitle: "2-Player Card Flip Duel",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🧠 Memory Duel",
    icon: "🧠",
    themeColor: "#8b5cf6",
    description: "A turn-based card-flipping memory match game inside Telegram. Flip cards, match symbols, and climb chat leaderboards.",
    longDescription: "A competitive turn-based memory match game played inside Telegram messages via dynamic inline keyboards. Includes concurrency locking to prevent rapid multi-tap race conditions and SQLite score tracking.",
    features: [
      "Interactive card flipping right in Telegram chat",
      "Turn-based 2-player duel mode with concurrency locks",
      "Adjustable grid sizes from 3x4 up to 4x6",
      "Score counters and win streak tracking"
    ],
    tech: ["Python", "Asyncio Locks", "PTB Inline Keyboards", "SQLite"],
    commands: [
      "/match - Start a new 2-player memory match",
      "/grid <3x4|4x4|4x6> - Choose board difficulty",
      "/stats - View win streaks and player scores"
    ],
    launchUrl: "https://t.me/meow_mmbot"
  },
  {
    id: "price-tracker",
    title: "Deal Price Tracker",
    subtitle: "Amazon & Flipkart Price Drop Watcher",
    type: "bot",
    categories: ["bot", "utility", "automation"],
    badge: "🛍️ Shopping Helper",
    icon: "📉",
    themeColor: "#10b981",
    description: "Never miss a sale! Send any product link from Amazon or Flipkart, and the bot will watch the price daily and alert you the second it drops.",
    longDescription: "A smart shopping helper created to help you save money. Paste any wishlist item from Amazon or Flipkart, set your desired price, and get instant notifications whenever prices drop.",
    features: [
      "Monitors prices on Amazon & Flipkart automatically",
      "Daily automated price checking at 12:00 PM",
      "Instant notification when an item drops in price",
      "Track your personal shopping wishlist in one place"
    ],
    tech: ["Python", "BeautifulSoup4", "JobQueue", "Jina AI Proxy"],
    commands: [
      "/track <url> [target_price] - Add item to price watchlist",
      "/list - View all products currently being tracked",
      "/checknow - Force an instant price check",
      "/untrack <id> - Remove item from watchlist"
    ],
    launchUrl: "https://t.me/meow_pricebot"
  },
  {
    id: "quiz-bot",
    title: "Quiz Quest Bot",
    subtitle: "Interactive Python Learning Journey",
    type: "bot",
    categories: ["bot", "devtools", "education"],
    badge: "🎓 Learning Quest",
    icon: "📜",
    themeColor: "#6366f1",
    description: "A fun coding study quest with chapter unlocks and quizzes to help you learn and practice Python step-by-step.",
    longDescription: "An engaging interactive quiz curriculum inside Telegram. Master programming concepts at your own pace with helpful explanations and chapter progress unlocking.",
    features: [
      "Bite-sized Python chapters and concepts",
      "Interactive multiple-choice quiz questions",
      "Chapter progression and mastery tracking",
      "Helpful explanations for every answer"
    ],
    tech: ["Python", "PTB v20+", "JSON Store", "Quiz Engine"],
    commands: [
      "/learn - Open the Python learning menu",
      "/progress - Check your unlocked chapters and score",
      "/reset - Restart chapters to practice again"
    ],
    launchUrl: "https://t.me/meow_quizbot"
  },
  {
    id: "shortener-bot",
    title: "Fast Link Shortener",
    subtitle: "Quick URL Shortener & Link Checker",
    type: "bot",
    categories: ["bot", "utility"],
    badge: "⚡ Quick Links",
    icon: "⚡",
    themeColor: "#06b6d4",
    description: "Instantly shortens long, cluttered links into tidy URLs, and unmasks mysterious shortened links to see where they really go.",
    longDescription: "A quick link assistant. Cleans up super long links for sharing with a single tap, or traces redirect paths to keep you safe from suspicious links.",
    features: [
      "One-tap link shortening with instant copy buttons",
      "Unwind redirects to reveal real destination URLs",
      "Clean URL formatting without tracking parameters",
      "Fast multi-service routing backends"
    ],
    tech: ["Python", "Httpx", "Asyncio", "REST APIs"],
    commands: [
      "/short <url> - Generate a clean short link",
      "/unshort <url> - Trace where a short link leads",
      "/help - View link shortening tips"
    ],
    launchUrl: "https://t.me/meow_linkbot"
  },
  {
    id: "tempmail-bot",
    title: "TempMail Inbox Bot",
    subtitle: "Disposable Email & Quick OTP Finder",
    type: "bot",
    categories: ["bot", "utility"],
    badge: "🛡️ Privacy Shield",
    icon: "📬",
    themeColor: "#14b8a6",
    description: "Creates disposable throwaway email inboxes instantly to protect you from spam and automatically extracts OTP verification codes in seconds.",
    longDescription: "A privacy helper for signing up to websites without sharing your real email. Generates temporary inboxes on demand and delivers incoming emails and OTP codes directly into your Telegram chat.",
    features: [
      "Instant disposable email generation on demand",
      "Auto-polls every 15s to deliver new incoming mail",
      "Smart detection to highlight OTP verification codes",
      "Keeps your real email clean and free of spam"
    ],
    tech: ["Python", "Mail.tm API", "Guerrilla Mail", "SQLite"],
    commands: [
      "/gen - Generate a new disposable email address",
      "/check - Check your temporary inbox for new mail",
      "/otp - Instantly grab verification codes from latest email",
      "/delete - Erase inbox and close session"
    ],
    launchUrl: "https://t.me/meow_tempmailbot"
  },
  {
    id: "truth-dare",
    title: "Truth & Dare Party Bot",
    subtitle: "Social Icebreaker & Challenge Deck",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🎲 Party Game",
    icon: "🎲",
    themeColor: "#f43f5e",
    description: "Interactive social icebreaker and party game bot with 200+ trivia, tech dilemma, funny storytelling, and creative dare prompts.",
    longDescription: "A lively social party bot for Telegram group chats and private sessions. Features auto-refilling zero-repeat shuffled prompt decks, one-tap inline draw buttons, and multi-player turn rotation.",
    features: [
      "200+ curated icebreaker & challenge prompts",
      "Zero-repeat prompt shuffling algorithm",
      "Interactive inline keyboard buttons",
      "Works seamlessly in group chats and DMs"
    ],
    tech: ["Python", "Deck Shuffler", "PTB", "Inline Buttons"],
    commands: [
      "/tnd - Spin up interactive game board",
      "/truth - Draw an engaging Truth prompt",
      "/dare - Draw a fun Dare challenge",
      "/random - Draw a random prompt"
    ],
    launchUrl: "https://t.me/meow_tadbot"
  },

  // --- WEB GAMES SUITE ---
  {
    id: "chess",
    title: "Chess Master SVG",
    subtitle: "Real-Time 2-Player Chess Duel",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "⚔️ 2-Player Live",
    icon: "♟️",
    themeColor: "#334155",
    description: "Play real-time chess with me anytime with move legal highlights, live piece advantages, and custom board themes.",
    longDescription: "A full-featured Staunton SVG chess game built for Telegram WebApp and browser play. Complete with move validation, piece advantage tracking, board themes, and instant peer-to-peer multiplayer.",
    features: [
      "Complete chess rule engine with move highlights",
      "Instant peer-to-peer live multiplayer connection",
      "Material advantage piece counter",
      "In-game chat and sound effects"
    ],
    tech: ["Vanilla JS", "SVG Staunton", "PeerJS WebRTC", "Web Audio API"],
    commands: [
      "Share Room Code / QR to play peer-to-peer",
      "Toggle Theme: Classic Wood, Neon Cyber, Midnight Obsidian",
      "Click pieces to view legal moves and attack vectors"
    ],
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/chess/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/chess"
  },
  {
    id: "uno",
    title: "Uno Duel 2-Player",
    subtitle: "Fast & Chaotic Card Battle",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🎴 Real-Time Card Duel",
    icon: "🎴",
    themeColor: "#ef4444",
    description: "Fast-paced 2-player Uno card duel with Wild color pickers, skip/reverse cards, and stacking +4 penalties!",
    longDescription: "A sleek, colorful recreation of the classic Uno duel. Features smooth card draw animations, wild color selection wheels, +2 and +4 penalty stacking, and real-time state syncing.",
    features: [
      "Complete Uno rule set with action card mechanics",
      "+2 and +4 card stacking penalty mechanics",
      "Wild color picker wheel dialog",
      "Fast real-time action synchronization"
    ],
    tech: ["HTML5 Canvas", "CSS3 3D", "PeerJS", "Web Audio"],
    commands: [
      "Tap cards matching active color or number",
      "Select color from popup wheel when playing Wild cards",
      "Click UNO button before discarding penultimate card"
    ],
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/uno/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/uno"
  },
  {
    id: "paddle",
    title: "Paddle Pong Duel",
    subtitle: "Fast-Paced 2-Player Ping Pong",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🏓 2-Player Arcade",
    icon: "🏓",
    themeColor: "#0284c7",
    description: "Retro multiplayer Pong duel where each player defends their goal with 5 heart lives, spin curves, and rally streaks.",
    longDescription: "Fast-paced arcade pong duel where both players see their paddle on their home side. Features particle sparks, curve ball physics, and heart health bars.",
    features: [
      "Dual perspective so you always control the bottom paddle",
      "Paddle deflection and spin curve physics",
      "5-Heart health system with rally streak multipliers",
      "Particle collision bursts and retro sound effects"
    ],
    tech: ["HTML5 2D Canvas", "WebRTC DataChannels", "Web Audio API"],
    commands: [
      "Touch & drag or move mouse/finger to position paddle",
      "Hit ball with paddle corners for aggressive angled returns",
      "Defend your goal line until opponent hearts deplete"
    ],
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/paddle/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/paddle"
  },
  {
    id: "snakes",
    title: "Snakes & Ladders 3D",
    subtitle: "Animated 3D Board Game",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🎲 3D Board Game",
    icon: "🐍",
    themeColor: "#16a34a",
    description: "3D animated 100-tile board game with dice physics, player hopping animations, sliding snakes, and climbing ladders.",
    longDescription: "The timeless board game brought to life with animated 3D tokens and isometric board views. Smooth piece hopping, ladder climbing, snake sliding traps, and bonus rolls on rolling a 6!",
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
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/snakes/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/snakes"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird Arcade",
    subtitle: "Cute Physics Runner & High Scores",
    type: "game",
    categories: ["game", "arcade"],
    badge: "🐤 Single & Multi",
    icon: "🐤",
    themeColor: "#eab308",
    description: "Addictive arcade runner with smooth flap physics, protective shield bubbles, bonus stars, and score records.",
    longDescription: "A polished recreation of the classic arcade runner. Features fluid particle jump trails, shield bubbles, coin collection multipliers, and high score saving.",
    features: [
      "Precision jump gravity physics with smooth flaps",
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
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/flappy-bird/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/flappy-bird"
  },
  {
    id: "frog-fight",
    title: "Frog Fight Arena",
    subtitle: "Cute Pond Strategy & Brawling",
    type: "game",
    categories: ["game", "multiplayer", "arcade"],
    badge: "🐸 Pond Battle",
    icon: "🐸",
    themeColor: "#84cc16",
    description: "Cute tactical pond game where funny frogs hop across sinking lilypads, grapple flies with tongues, and outsmart each other.",
    longDescription: "An action-packed arcade duel set on a pond of sinking lilypads. Use tongue whips to snatch dragonflies, make water ripples, and jump between pads to stay dry!",
    features: [
      "Dynamic pond simulation with sinking lilypads",
      "Tongue grapple mechanics to snatch flies and strike rivals",
      "Fun power-ups: Golden Dragonfly, Super Leap, Water Splash",
      "Real-time 2-player multiplayer connection"
    ],
    tech: ["HTML5 Canvas", "Sprite Physics", "PeerJS WebRTC"],
    commands: [
      "Tap adjacent lilypad to hop",
      "Aim and fire tongue grapple to snatch flies or strike opponent",
      "Stay on dry lilypads to avoid sinking into pond"
    ],
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/frog-fight/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/frog-fight"
  },
  {
    id: "heart-catcher",
    title: "Heart Catcher",
    subtitle: "Catch Glowing Gems & Stars",
    type: "game",
    categories: ["game", "arcade"],
    badge: "💖 Fast Reflexes",
    icon: "❤️",
    themeColor: "#f43f5e",
    description: "Catch falling gems and sparkling stars with your basket while dodging hazards to build huge combos!",
    longDescription: "A fast-paced reflex arcade game. Guide your basket to catch glowing gems and stars, rack up streak multipliers, and enjoy satisfying chime sounds.",
    features: [
      "Smooth touch, mouse, and arrow key basket motion",
      "Combo streak multiplier system (x2, x4, x8 frenzy mode)",
      "Sparkle particle bursts and chime sounds",
      "High score persistence and leaderboard sync"
    ],
    tech: ["Vanilla JavaScript", "Canvas 2D", "Web Audio API"],
    commands: [
      "Move basket left/right with mouse, touch, or Arrow keys",
      "Catch pink and gold hearts to increase score streak",
      "Dodge black lightning bolts to protect your 3 lives"
    ],
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/heart-catcher/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/heart-catcher"
  },
  {
    id: "helix-jump",
    title: "Helix Jump 3D",
    subtitle: "Satisfying 3D Ball Tower Drop",
    type: "game",
    categories: ["game", "arcade"],
    badge: "🌀 3D Helix Drop",
    icon: "🌀",
    themeColor: "#06b6d4",
    description: "Rotate the 3D spiral tower to drop your bouncing ball through open gaps with colorful splatter effects and stage clears.",
    longDescription: "Spin the colorful helix tower to guide your bouncing ball through gaps down the skyscraper. Avoid hazardous red sectors, trigger speed boosts, and smash through platforms!",
    features: [
      "Real-time 3D cylinder slice projection and rotation controls",
      "Continuous bounce physics with momentum speed breaks",
      "Hazardous red zones with instant retry checkpoints",
      "Satisfying visual paint splash decals on platform landings"
    ],
    tech: ["HTML5 Canvas 3D Projection", "Physics Engine", "Web Audio"],
    commands: [
      "Drag left/right to spin the helix tower cylinder",
      "Guide bouncing ball through gaps without touching red hazard tiles",
      "Fall through 3+ consecutive gaps to trigger power smash mode"
    ],
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/helix-jump/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/helix-jump"
  },
  {
    id: "tower-builder",
    title: "Tower Builder 3D",
    subtitle: "Stack the Tower to the Sky",
    type: "game",
    categories: ["game", "arcade"],
    badge: "🏢 Pastel Stacking",
    icon: "🏗️",
    themeColor: "#a855f7",
    description: "Stack moving pastel building blocks with precision timing. Build the skyscraper as high into the sky as you can!",
    longDescription: "Stack oscillating building blocks with pinpoint precision. Overhanging segments slice off with realistic gravity. Land perfect alignments to expand your blocks and reach the clouds!",
    features: [
      "Dynamic block slicing physics with falling debris particles",
      "Pastel chroma gradient transitions as the tower ascends",
      "Perfect placement combo sound chords and block expansion",
      "Perspective camera climbing as tower height grows"
    ],
    tech: ["Isometric Canvas 2D", "Dynamic Color Gradients", "Web Audio API"],
    commands: [
      "Tap screen or press Spacebar to drop the moving block",
      "Align blocks perfectly with layer below to avoid trimming",
      "Chain 5 perfect drops to trigger block expansion bonus"
    ],
    launchUrl: "https://anuragsrivastava-dev.github.io/telegram-games/tower-builder/",
    sourceUrl: "https://github.com/anuragsrivastava-dev/telegram-games/tree/main/tower-builder"
  }
];

// App State
let activeTheme = localStorage.getItem("telegram_meow_theme") || "pink";
let sfxEnabled = localStorage.getItem("telegram_meow_sfx") !== "false";
let currentCategoryFilter = "all";
let currentSearchQuery = "";

// Theme Palette Definitions
const THEMES = [
  { id: "pink", name: "🌸 Sakura Pink", dotColor: "#f43f5e" },
  { id: "dark", name: "🖤 Midnight Dark", dotColor: "#38bdf8" },
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
  const launchText = project.type === "game" ? "🎮 Play Game" : "✈️ Open Bot";

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
            <span>✈️</span>
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
  const launchIcon = document.getElementById("modalLaunchIcon");
  const launchLabel = document.getElementById("modalLaunchLabel");
  const secondaryActionBtn = document.getElementById("modalSecondaryActionBtn");
  const secondaryIcon = document.getElementById("modalSecondaryIcon");
  const secondaryLabel = document.getElementById("modalSecondaryLabel");

  if (!modal || !scrollArea) return;

  if (headerTitle) headerTitle.textContent = project.title;
  
  if (primaryLaunchBtn) {
    primaryLaunchBtn.href = project.launchUrl;
    if (launchIcon) {
      launchIcon.textContent = project.type === "game" ? "🎮" : "✈️";
    }
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
        <div class="modal-hero-sub">${project.subtitle} • <strong style="color:var(--text-main);">by @anuragsrivastava-dev</strong></div>
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
