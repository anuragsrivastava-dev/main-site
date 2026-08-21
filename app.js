/**
 * ============================================================================
 * TELEGRAM.MEOW - Ecosystem Showcase Engine
 * Interactive Catalog, Filtering, Search, Modal Dialogs & Fallback Assets
 * ============================================================================
 */

// Master Catalog Dataset
const PROJECTS_DATA = [
  // --- TELEGRAM BOTS ---
  {
    id: "meow-bot",
    title: "Meow Bot",
    subtitle: "AI Companion & Workflow Assistant",
    type: "bot",
    categories: ["bot", "ai-utility"],
    badge: "⚡ Groq LLM",
    icon: "🐱",
    image: "assets/images/bots/meow-bot.png",
    description: "Intelligent companion bot powered by Groq LLMs with persistent chat memory, prompt transformation pipelines, and reminders.",
    longDescription: "Meow Bot is a sophisticated personal AI assistant engineered with Groq's high-speed inference engine. It maintains long-term contextual memory via SQLite, supports dynamic prompt persona shifting, parses inline queries, and dispatches automated server reminders.",
    features: [
      "Groq OpenAI/GPT-OSS ultra-low latency streaming",
      "SQLite long-term memory extraction & recall",
      "Dynamic prompt transformation pipelines",
      "Wispbyte server uptime & task reminders",
      "Inline query mode for quick query answers in any chat"
    ],
    tech: ["Python", "Groq API", "SQLite", "PTB v20+", "Asyncio"],
    commands: [
      "/start - Initialize Meow companion session",
      "/remind <time> <task> - Set automated reminder",
      "/clear - Reset conversational short-term context",
      "@meow_bot <query> - Instant inline AI answers"
    ],
    launchUrl: "https://t.me/meow_companion_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/meow_bot.py"
  },
  {
    id: "pybot",
    title: "PyBot & Python Console",
    subtitle: "Remote Code Execution Engine",
    type: "bot",
    categories: ["bot", "devtools"],
    badge: "💻 Dev Tools",
    icon: "🐍",
    image: "assets/images/bots/pybot.png",
    description: "Interactive Python execution bot and Web Console running code in isolated subprocesses with dynamic input patching.",
    longDescription: "Run and test Python scripts directly within Telegram or via the web console. Features sandboxed subprocess execution, dynamic stdin patching for `input()` prompts, 10-second timeout safety nets, and real-time streaming output capture.",
    features: [
      "Isolated subprocess execution environment",
      "Dynamic input() prompt stream handling",
      "10-second CPU execution timeout protection",
      "Syntax highlighting and structured stdout/stderr reporting",
      "Paired with companion Web Python Console"
    ],
    tech: ["Python", "Subprocess Sandboxing", "PTB", "Web Console"],
    commands: [
      "/run <code> - Execute arbitrary Python snippet",
      "/eval <expr> - Evaluate single expression",
      "/help - View execution constraints & supported libs"
    ],
    launchUrl: "https://t.me/python_exec_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/bot.py"
  },
  {
    id: "game-bot",
    title: "Gaming Hub Bot",
    subtitle: "Arcade Launcher & Leaderboards",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🏆 Score Sync",
    icon: "🕹️",
    image: "assets/images/bots/game-bot.png",
    description: "Telegram gaming hub serving interactive HTML5 game cards, inline game queries, and synchronized group chat leaderboards.",
    longDescription: "The central launcher for the entire Telegram Web Games suite. Enables users to launch games inside Telegram WebApps or share inline game cards to group chats with automated score tracking via Telegram's getGameHighScores and setGameScore APIs.",
    features: [
      "Inline game card sharing (InlineQueryResultGame)",
      "High score synchronization via setGameScore API",
      "Group chat leaderboards with rank badges",
      "Seamless Telegram WebApp callback URL routing",
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
    subtitle: "Couple Status & Milestone Dashboard",
    type: "bot",
    categories: ["bot", "ai-utility", "multiplayer"],
    badge: "📍 Live Geo/Sync",
    icon: "💖",
    image: "assets/images/bots/hud-bot.png",
    description: "Long-distance relationship dashboard featuring live timezone offsets, Open-Meteo weather sync, Haversine distance, and countdowns.",
    longDescription: "A dedicated couple dashboard bot designed to bridge long distances. It automatically computes real-time timezone offsets, fetches live Open-Meteo weather data for both partners, calculates exact Haversine geographic separation, and tracks milestone countdowns.",
    features: [
      "Haversine geographic separation distance calculation",
      "Live weather & temperature sync via Open-Meteo",
      "Dynamic timezone offset calculation & time of day",
      "SQLite milestone countdowns & anniversary trackers",
      "Love counter & daily relationship check-in alerts"
    ],
    tech: ["Open-Meteo API", "Haversine Formula", "SQLite", "PTB"],
    commands: [
      "/hud - Generate live couple status dashboard",
      "/setlocation - Update current partner coordinates",
      "/milestones - View upcoming relationship milestones",
      "/countdown <event> <date> - Create milestone timer"
    ],
    launchUrl: "https://t.me/ldr_hud_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/hud_bot.py"
  },
  {
    id: "memory-bot",
    title: "Memory Match Bot",
    subtitle: "2-Player Inline Card Duel",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "👥 2-Player Duel",
    icon: "🎴",
    image: "assets/images/bots/memory-bot.png",
    description: "Turn-based couple card matching game played entirely through Telegram inline keyboards with concurrency locking and leaderboards.",
    longDescription: "A competitive 2-player memory card duel built on Telegram inline buttons. Features dynamic grid sizes (from 3x4 to 4x6), mismatch flip timeouts with asyncio concurrency locks to prevent race conditions, and persistent win/loss scoreboards.",
    features: [
      "Zero-latency Telegram inline keyboard interface",
      "Asyncio locks preventing double-tap race conditions",
      "Customizable grid sizes (3x4, 4x4, 4x5, 4x6)",
      "Automated turn switching & mismatch card flipping",
      "SQLite win-streak and speed leaderboard"
    ],
    tech: ["Python Asyncio", "Inline Keyboards", "SQLite", "PTB"],
    commands: [
      "/duel - Challenge a friend or partner to a duel",
      "/grid <size> - Select grid complexity",
      "/stats - View head-to-head matchup history"
    ],
    launchUrl: "https://t.me/memory_match_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/memory_bot.py"
  },
  {
    id: "price-tracker",
    title: "Price Tracker Bot",
    subtitle: "Amazon & Flipkart Deal Monitor",
    type: "bot",
    categories: ["bot", "ai-utility"],
    badge: "🛒 Automated Scraper",
    icon: "🏷️",
    image: "assets/images/bots/price-tracker.png",
    description: "E-commerce price monitor scraping Amazon and Flipkart with fallback Jina AI proxies and automated daily drop alerts.",
    longDescription: "Track product prices across Amazon and Flipkart effortlessly. Employs multi-tier scraping with fallback proxy rendering via Jina AI, SQLite price drop history graphs, and automated daily price checks scheduled at 12:00 PM IST.",
    features: [
      "Multi-store price extraction (Amazon, Flipkart)",
      "Resilient scraping with fallback Jina AI proxying",
      "Automated JobQueue daily price check alerts",
      "Historical price tracking & lowest price records",
      "Instant push notification on price drops"
    ],
    tech: ["BeautifulSoup4", "Jina AI Proxy", "JobQueue", "SQLite"],
    commands: [
      "/track <url> <target_price> - Add product to watchlist",
      "/list - View all currently monitored items",
      "/check - Trigger immediate manual price recheck",
      "/untrack <id> - Remove item from watchlist"
    ],
    launchUrl: "https://t.me/deal_price_tracker_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/price.py"
  },
  {
    id: "quiz-bot",
    title: "Quiz Quest Bot",
    subtitle: "Gamified Python Learning Course",
    type: "bot",
    categories: ["bot", "devtools", "ai-utility"],
    badge: "🎓 Quest Mode",
    icon: "📚",
    image: "assets/images/bots/quiz-bot.png",
    description: "Interactive Python mastery quest with chapter progression unlocks requiring 100% score and dynamic admin authoring.",
    longDescription: "Learn Python through interactive Telegram quizzes! Features a structured multi-chapter curriculum where subsequent modules unlock only upon achieving 100% mastery on prerequisite tests, accompanied by an admin CRUD question management suite.",
    features: [
      "Gamified mastery system with chapter unlock prerequisites",
      "Detailed explanations for correct and incorrect answers",
      "JSON-backed extensible course and progress tracking",
      "Admin CRUD commands for dynamic question authoring",
      "Learner certificate and progress badges"
    ],
    tech: ["Python", "JSON Storage", "PTB", "Interactive Polls"],
    commands: [
      "/learn - Open course map and available chapters",
      "/quiz - Start current chapter assessment",
      "/progress - View completed chapters and mastery score"
    ],
    launchUrl: "https://t.me/python_quiz_quest_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/quiz_bot.py"
  },
  {
    id: "shortener-bot",
    title: "Shortener & Safety Bot",
    subtitle: "Fast URL Minifier & Unshortener",
    type: "bot",
    categories: ["bot", "ai-utility"],
    badge: "🔗 Multi-Provider",
    icon: "⚡",
    image: "assets/images/bots/shortener-bot.png",
    description: "High-speed URL shortener, unshortener, and safety unwinder with multi-provider API routing (ulvis.net, da.gd) and QR generation.",
    longDescription: "Compress lengthy links or inspect suspicious shortened URLs before clicking. Routes requests dynamically across multiple provider APIs, unwinds redirect chains to reveal destination safety, and generates scannable QR codes on the fly.",
    features: [
      "Multi-provider API routing (ulvis.net, da.gd)",
      "Redirect chain unwinding to inspect target destination",
      "Instant high-resolution QR code generator",
      "Custom alias creation and click tracking",
      "Zero-latency Telegram command processing"
    ],
    tech: ["Httpx", "Redirect Resolver", "QR API", "PTB"],
    commands: [
      "/shorten <url> - Generate compact shortened link",
      "/unshorten <url> - Unwind redirect chain to inspect target",
      "/qr <url> - Generate instant scannable QR image"
    ],
    launchUrl: "https://t.me/fast_shortener_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/shortener_bot.py"
  },
  {
    id: "tempmail-bot",
    title: "TempMail Disposable Inbox",
    subtitle: "Temporary Email & OTP Extractor",
    type: "bot",
    categories: ["bot", "ai-utility"],
    badge: "📬 Auto-Polling",
    icon: "✉️",
    image: "assets/images/bots/tempmail-bot.png",
    description: "Disposable temporary inbox bot with multi-engine routing (Mail.tm, Mail.gw, Guerrilla Mail) and 15s auto-polling OTP extractor.",
    longDescription: "Protect your privacy with on-demand disposable email addresses. Routes across Mail.tm, Mail.gw, and Guerrilla Mail APIs with background polling every 15 seconds to automatically extract OTPs, activation links, and clean markdown email previews.",
    features: [
      "Multi-engine API support (Mail.tm, Mail.gw, Guerrilla)",
      "Background auto-polling every 15 seconds",
      "Automated OTP & verification code regex extraction",
      "Clean markdown email body rendering and attachments",
      "SQLite session persistence"
    ],
    tech: ["Mail.tm API", "Guerrilla API", "APScheduler", "SQLite"],
    commands: [
      "/gen - Create fresh disposable email address",
      "/inbox - Check messages in active inbox",
      "/otp - Instantly extract latest verification code",
      "/delete - Destroy active temporary inbox"
    ],
    launchUrl: "https://t.me/temp_disposable_mail_bot",
    sourceUrl: "https://github.com/anu69-web/telegram-bots/blob/main/tempmail_bot.py"
  },
  {
    id: "truth-dare-bot",
    title: "Truth & Dare Bot",
    subtitle: "2-Player Party & Romance Game",
    type: "bot",
    categories: ["bot", "game", "multiplayer"],
    badge: "🔥 Zero-Repeat Deck",
    icon: "🎲",
    image: "assets/images/bots/truth-dare.png",
    description: "2-Player spicy and romantic truth or dare engine with auto-refilling shuffled prompt decks and zero-repeat logic.",
    longDescription: "Liven up group chats or intimate date nights with an intelligent Truth or Dare engine. Features categorized prompt decks (Casual, Deep, Spicy, Extreme), zero-repeat memory tracking, and custom user prompt submission.",
    features: [
      "Categorized decks (Casual, Deep, Romantic, Spicy)",
      "Auto-refilling shuffled prompt deck with zero-repeat tracking",
      "2-Player duel mode with interactive turn passing",
      "Custom user prompt authoring and community deck",
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
    image: "assets/images/games/chess.png",
    description: "High-performance Staunton SVG chess engine with full move validation, live material calculation, themes, and P2P in-game chat.",
    longDescription: "A full-featured Staunton SVG chess game built for Telegram WebApp and browser play. Complete with en passant, castling, pawn promotion, check/checkmate detection, live material advantage tracking, custom board themes, and sub-50ms peer-to-peer multiplayer.",
    features: [
      "Complete chess rule engine (en passant, castling, promotion, stalemate)",
      "WebRTC P2P peer matchmaking via PeerJS",
      "Real-time material advantage calculator & move history log",
      "Multiple board themes and customizable piece sets",
      "Telegram getGameHighScores / setGameScore integration"
    ],
    tech: ["HTML5 SVG", "PeerJS WebRTC", "Web Audio API", "Telegram WebApp"],
    commands: [
      "Mouse / Touch: Drag or click piece to highlight valid moves",
      "Chat: Built-in low-latency P2P peer chat",
      "Score: Syncs match victories to Telegram leaderboard"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/chess/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/chess"
  },
  {
    id: "uno",
    title: "Uno Duel 2-Player",
    subtitle: "Real-Time Action Card Battler",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🃏 Multiplayer P2P",
    icon: "🎴",
    image: "assets/images/games/uno.png",
    description: "2-Player Uno duel with wild color pickers, skip/reverse mechanics, penalty stacking, and Web Audio sound effects.",
    longDescription: "Fast-paced, card-slapping Uno action optimized for mobile touch and desktop. Features real-time P2P synchronization, card penalty stacking (+2, +4), wild color wheels, call-out mechanics, and crisp Web Audio sound synthesis.",
    features: [
      "Real-time WebRTC 2-player state synchronization",
      "Action card mechanics (Wild, Draw +4, Skip, Reverse, Draw +2)",
      "Penalty card stacking rules support",
      "Custom card deal & draw physics animations",
      "Telegram match victory score syncing"
    ],
    tech: ["Vanilla JS", "PeerJS P2P", "Web Audio API", "CSS3 3D Transforms"],
    commands: [
      "Tap / Click: Play matching color/number card from hand",
      "Color Wheel: Select target color upon playing Wild card",
      "Uno Button: Call Uno when down to final card"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/uno/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/uno"
  },
  {
    id: "paddle",
    title: "Paddle Pong Duel",
    subtitle: "Inverted-Perspective Multiplayer Duel",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🏓 60 FPS P2P",
    icon: "🏓",
    image: "assets/images/games/paddle.png",
    description: "Real-time multiplayer Pong duel with inverted perspective rendering, 5-heart life bars, and rally counters.",
    longDescription: "High-octane arcade Pong duel rendered with inverted perspective so each player sees themselves defending the bottom paddle. Features heart-based life meters, rally speed multipliers, and sub-frame collision physics.",
    features: [
      "Inverted perspective rendering for intuitive local player alignment",
      "Sub-50ms WebRTC low-latency paddle position sync",
      "Dynamic ball speed acceleration based on rally count",
      "5-heart damage bar with particle smash effects",
      "Telegram high-score sync on match victory"
    ],
    tech: ["Canvas 2D", "PeerJS WebRTC", "Web Audio Synthesizer", "Particle Physics"],
    commands: [
      "Mouse / Touch: Drag horizontally to position paddle",
      "Keyboard: Left / Right Arrow or A / D keys",
      "Goal: Deflect ball past opponent to deplete their hearts"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/paddle/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/paddle"
  },
  {
    id: "snakes",
    title: "Snakes & Ladders 3D",
    subtitle: "Animated Dice Board Game",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🎲 3D Animation",
    icon: "🐍",
    image: "assets/images/games/snakes.png",
    description: "3D animated dice board game (100 tiles) with hop animation, slide/ladder physics, and single-turn extra roll on 6.",
    longDescription: "The classic 100-tile board game reimagined with smooth 3D CSS hop animations, fluid snake slides, ladder climbs, and rolling physics. Features multiplayer turn-taking and classic extra roll rules on rolling a six.",
    features: [
      "100-tile board with 3D perspective camera",
      "Physics-based 3D dice tumbling animation",
      "Smooth tile-by-tile piece hopping and sliding effects",
      "Single-turn extra roll rule when rolling a six",
      "Telegram leaderboards tracking fastest wins"
    ],
    tech: ["CSS 3D Engine", "PeerJS", "Web Audio API", "Telegram WebApp"],
    commands: [
      "Tap Dice: Roll the 3D dice to calculate moves",
      "Auto-Hop: Piece automatically navigates tiles and ladders",
      "Victory: Reach tile 100 first to claim victory"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/snakes/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/snakes"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird Arcade",
    subtitle: "Physics Runner & Power-Ups",
    type: "game",
    categories: ["game"],
    badge: "🚀 Particle Physics",
    icon: "🐦",
    image: "assets/images/games/flappy-bird.png",
    description: "Canvas-based arcade runner with particle physics, shield power-ups, bonus collectibles, and difficulty scaling.",
    longDescription: "A modern, responsive re-creation of the beloved Flappy Bird arcade game. Features particle propulsion trails, shield bubbles, coin multipliers, parallax cloud backgrounds, and instant Telegram leaderboard high score submission.",
    features: [
      "Smooth 60 FPS Canvas particle physics engine",
      "Shield power-ups allowing one obstacle collision pass",
      "Collectible star bonus coins and score multipliers",
      "Dynamic difficulty scaling with narrowing gaps",
      "Instant Telegram setGameScore API submission"
    ],
    tech: ["Canvas 2D", "Web Audio Synth", "Telegram Gaming API"],
    commands: [
      "Space / Click / Touch: Flap wings to ascend",
      "Collectibles: Grab shields and bonus multiplier gems",
      "High Score: Beat personal and group records"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/flappy-bird/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/flappy-bird"
  },
  {
    id: "frog-fight",
    title: "Frog Fight Arena",
    subtitle: "Arcade Brawler & Action Duel",
    type: "game",
    categories: ["game", "multiplayer"],
    badge: "🐸 Action Arcade",
    icon: "🐸",
    image: "assets/images/games/frog-fight.png",
    description: "Fast-paced arena brawler featuring tongue grappling physics, fly-catching buffs, and dynamic hazard stages.",
    longDescription: "Engage in fast-paced amphibian combat! Grapple across floating lily pads with your tongue, snap flies for speed and attack boosts, dodge falling hazards, and knock your rival into the pond.",
    features: [
      "Dynamic tongue grapple and bounce physics",
      "Fly buffs yielding temporary invulnerability & power",
      "Destructible lily pads and water current mechanics",
      "Multiplayer arena combat with instant matchmaking",
      "Retro 16-bit sound effects synthesized via Web Audio"
    ],
    tech: ["Canvas Physics", "PeerJS", "Web Audio API", "Telegram WebApp"],
    commands: [
      "Tap / Click: Grapple tongue towards target lily pad",
      "Swipe: Lunge attack toward enemy frog",
      "Collect: Snatch glowing fireflies for power boosts"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/frog-fight/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/frog-fight"
  },
  {
    id: "heart-catcher",
    title: "Heart Catcher",
    subtitle: "Romantic Arcade Catcher",
    type: "game",
    categories: ["game"],
    badge: "💖 Combo Arcade",
    icon: "🧺",
    image: "assets/images/games/heart-catcher.png",
    description: "Touch/mouse-controlled arcade catcher with bonus multipliers, romantic pastel aesthetics, and hazard avoidance.",
    longDescription: "Catch falling pastel hearts and stars while dodging stormy hazards. Features combo streak multipliers, gentle ambient synth music, magnetic basket power-ups, and Telegram chat score tracking.",
    features: [
      "Fluid touch-drag and mouse basket tracking",
      "Combo streak system rewarding consecutive catches",
      "Magnetic basket and slow-motion heart power-ups",
      "Storm hazard avoidance with penalty mechanics",
      "Telegram leaderboard synchronization"
    ],
    tech: ["HTML5 Canvas", "Web Audio Synthesizer", "Telegram WebApp"],
    commands: [
      "Touch / Mouse: Drag basket horizontally across screen",
      "Hearts: Catch pink (+10), golden (+50), and rainbow (+100)",
      "Hazards: Dodge dark thunderclouds"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/heart-catcher/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/heart-catcher"
  },
  {
    id: "helix-jump",
    title: "Helix Jump 3D",
    subtitle: "Spiral Tower Drop Challenge",
    type: "game",
    categories: ["game"],
    badge: "🌀 3D Dropper",
    icon: "🔮",
    image: "assets/images/games/helix-jump.png",
    description: "3D spiral tower drop arcade game with bouncy physics, combo break streaks, and fluid rotating platforms.",
    longDescription: "Drop through the spiral labyrinth! Rotate the helix tower to let the bouncing sphere fall through gaps. Build up momentum on multistory drops to smash straight through colored penalty tiles.",
    features: [
      "3D spiral cylinder projection with smooth rotation damping",
      "Bouncy ball physics with floor impact splatter decals",
      "Super-drop smash ability after falling through 3+ tiers",
      "Procedurally generated tower layers and penalty colors",
      "High score sync with Telegram gaming leaderboards"
    ],
    tech: ["Canvas 3D Projection", "Web Audio API", "Telegram WebApp"],
    commands: [
      "Swipe / Drag: Rotate helix tower left or right",
      "Drop: Align gaps under bouncing sphere",
      "Smash: Fall through 3+ floors to activate invulnerable smash"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/helix-jump/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/helix-jump"
  },
  {
    id: "tower-builder",
    title: "Tower Builder 3D",
    subtitle: "Precision Block Stacker",
    type: "game",
    categories: ["game"],
    badge: "🏗️ Precision Stacker",
    icon: "🏢",
    image: "assets/images/games/tower-builder.png",
    description: "Precision stacker game with slicing physics, rainbow color gradients, and rhythm-based combo bonuses.",
    longDescription: "Stack the tower as high as the sky! Time your taps perfectly to align moving blocks. Overhanging pieces are sliced off with realistic physics, while consecutive perfect alignments expand block dimensions with musical chord feedback.",
    features: [
      "Dynamic block slicing physics for overhang misalignments",
      "Consecutive perfect drop bonuses expanding block size",
      "Harmonic musical chord progression on perfect stacks",
      "Dynamic pastel & neon rainbow color cycle",
      "High score sync to Telegram chat leaderboards"
    ],
    tech: ["CSS 3D / Canvas", "Web Audio Chord Synthesis", "Telegram WebApp"],
    commands: [
      "Tap / Space: Drop current moving block onto stack",
      "Perfect Timing: Align exactly to trigger combo chime",
      "Goal: Build tallest skyscraper without running out of block surface"
    ],
    launchUrl: "https://anu69-web.github.io/telegram-games/tower-builder/",
    sourceUrl: "https://github.com/anu69-web/telegram-games/tree/main/tower-builder"
  }
];

// App State
let currentFilter = "all";
let searchQuery = "";

// DOM Elements
const projectsGrid = document.getElementById("projectsGrid");
const filterTabs = document.querySelectorAll(".filter-tab");
const searchInput = document.getElementById("projectSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchTriggerBtn = document.getElementById("searchTriggerBtn");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const projectModal = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalDynamicContent = document.getElementById("modalDynamicContent");
const toastNotification = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");
const siteHeader = document.getElementById("siteHeader");

/**
 * Initialize Showcase App
 */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  updateFilterCounts();
  setupEventListeners();
  animateStatsCounters();
  setupScrollHeader();
});

/**
 * Render Project Cards into Grid
 */
function renderProjects() {
  const filtered = PROJECTS_DATA.filter(project => {
    // Category Filter
    const matchesCategory = currentFilter === "all" || project.categories.includes(currentFilter);
    
    // Search Query Filter
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    const matchesTitle = project.title.toLowerCase().includes(q);
    const matchesSubtitle = project.subtitle.toLowerCase().includes(q);
    const matchesDesc = project.description.toLowerCase().includes(q);
    const matchesTech = project.tech.some(t => t.toLowerCase().includes(q));
    const matchesCategoryName = project.categories.some(c => c.toLowerCase().includes(q));

    return matchesTitle || matchesSubtitle || matchesDesc || matchesTech || matchesCategoryName;
  });

  // Update Result Count
  resultsCount.textContent = `Showing ${filtered.length} of ${PROJECTS_DATA.length} items`;

  // Handle Empty State
  if (filtered.length === 0) {
    projectsGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  // Generate Cards HTML
  projectsGrid.innerHTML = filtered.map(project => {
    const isBot = project.type === "bot";
    const pillClass = isBot ? "bot-pill" : "game-pill";
    const typeLabel = isBot ? "Telegram Bot" : "Web Game";
    const launchLabel = isBot ? "Launch Bot" : "Play Game";
    const launchClass = isBot ? "" : "game-launch";

    return `
      <article class="project-card" data-id="${project.id}">
        <div class="card-media-wrapper">
          <div class="card-type-pill ${pillClass}">
            <span>${isBot ? "🤖" : "🎮"}</span>
            <span>${typeLabel}</span>
          </div>
          
          <div class="card-status-badge">
            <span>${project.badge}</span>
          </div>

          <!-- Image with Fallback Styled Banner -->
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="card-image"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="card-fallback-banner" style="display: none;">
            <div class="fallback-icon">${project.icon}</div>
            <div class="fallback-title-badge">${project.title}</div>
          </div>
        </div>

        <div class="card-content">
          <div class="card-header-row">
            <h3 class="card-title">${project.title}</h3>
          </div>
          
          <p class="card-description">${project.description}</p>

          <div class="card-tags">
            ${project.tech.slice(0, 4).map(t => `<span class="tag-chip">${t}</span>`).join("")}
          </div>

          <div class="card-actions">
            <a href="${project.launchUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-launch ${launchClass}">
              <span>${launchLabel}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            
            <button class="btn-card-preview" onclick="openProjectModal('${project.id}')" aria-label="View Details for ${project.title}" title="Quick Preview">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Update Dynamic Tab Counts
 */
function updateFilterCounts() {
  const counts = {
    all: PROJECTS_DATA.length,
    bot: PROJECTS_DATA.filter(p => p.categories.includes("bot")).length,
    game: PROJECTS_DATA.filter(p => p.categories.includes("game")).length,
    multiplayer: PROJECTS_DATA.filter(p => p.categories.includes("multiplayer")).length,
    "ai-utility": PROJECTS_DATA.filter(p => p.categories.includes("ai-utility")).length,
    devtools: PROJECTS_DATA.filter(p => p.categories.includes("devtools")).length
  };

  Object.entries(counts).forEach(([key, val]) => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = val;
  });
}

/**
 * Filter by Category Programmatically
 */
function filterByCategory(category) {
  currentFilter = category;
  filterTabs.forEach(tab => {
    if (tab.getAttribute("data-filter") === category) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    }
  });

  renderProjects();
}

/**
 * Open Project Details Modal
 */
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const isBot = project.type === "bot";
  const launchLabel = isBot ? "Open in Telegram" : "Play Online Game";

  modalDynamicContent.innerHTML = `
    <div class="modal-hero-banner">
      <img 
        src="${project.image}" 
        alt="${project.title}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="card-fallback-banner" style="display: none; height: 100%;">
        <div class="fallback-icon" style="font-size: 4rem;">${project.icon}</div>
        <div class="fallback-title-badge" style="font-size: 1.1rem;">${project.title}</div>
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-header-block">
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-subtitle">${project.subtitle}</div>
      </div>

      <p class="modal-description">${project.longDescription}</p>

      <div class="modal-section-title">Core Capabilities & Architecture</div>
      <ul class="modal-feature-list">
        ${project.features.map(f => `
          <li class="modal-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${f}</span>
          </li>
        `).join("")}
      </ul>

      <div class="modal-section-title">${isBot ? "Supported Commands" : "Game Controls & Sync"}</div>
      <div class="modal-commands-box">
        ${project.commands.map(cmd => `<div>${cmd}</div>`).join("")}
      </div>

      <div class="modal-section-title">Technologies & Dependencies</div>
      <div class="card-tags" style="margin-bottom: 1.5rem;">
        ${project.tech.map(t => `<span class="tag-chip" style="font-size: 0.8rem; padding: 4px 10px;">${t}</span>`).join("")}
      </div>

      <div class="modal-footer-actions">
        <a href="${project.launchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <span>${launchLabel}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>

        ${project.sourceUrl ? `
          <a href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" title="View Source Code">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>Source</span>
          </a>
        ` : ''}

        <button class="btn btn-secondary" onclick="copyProjectLink('${project.launchUrl}')" title="Copy Direct Link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * Close Modal
 */
function closeProjectModal() {
  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/**
 * Copy Link to Clipboard with Toast Notification
 */
function copyProjectLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    showToast("Link copied to clipboard!");
  }).catch(() => {
    showToast("URL: " + url);
  });
}

/**
 * Show Toast Notification
 */
function showToast(message) {
  toastMessage.textContent = message;
  toastNotification.classList.add("active");
  setTimeout(() => {
    toastNotification.classList.remove("active");
  }, 3000);
}

/**
 * Animate Stats Number Counters
 */
function animateStatsCounters() {
  const statNumbers = document.querySelectorAll(".stat-number");
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute("data-target"), 10);
    let count = 0;
    const speed = 25;
    
    const updateCount = () => {
      const increment = Math.ceil(target / 20);
      if (count < target) {
        count += increment;
        if (count > target) count = target;
        stat.textContent = count + "+";
        setTimeout(updateCount, speed);
      } else {
        stat.textContent = target + "+";
      }
    };
    
    updateCount();
  });
}

/**
 * Header Scroll Appearance
 */
function setupScrollHeader() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  });
}

/**
 * Setup All Event Listeners
 */
function setupEventListeners() {
  // Filter Tabs Click
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      currentFilter = tab.getAttribute("data-filter");
      renderProjects();
    });
  });

  // Search Input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? "flex" : "none";
    renderProjects();
  });

  // Clear Search
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    renderProjects();
  });

  // Reset Filters from Empty State
  resetSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    filterByCategory("all");
  });

  // Header Search Shortcut Button
  searchTriggerBtn.addEventListener("click", () => {
    searchInput.focus();
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Global Keyboard Shortcuts
  document.addEventListener("keydown", (e) => {
    // Escape closes modal
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
      closeProjectModal();
    }
    // Ctrl+K or / focuses search
    if ((e.ctrlKey && e.key.toLowerCase() === "k") || (e.key === "/" && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  // Modal Close Events
  modalCloseBtn.addEventListener("click", closeProjectModal);
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}
