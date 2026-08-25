# 🌐 Telegram.Meow — Portfolio Showcase & Landing Page

[![Hosting](https://img.shields.io/badge/Hosting-GitHub_Pages_%7C_Custom_Domain-22272E?style=for-the-badge&logo=githubpages)](https://anu69-web.github.io/main-site/)
[![Frontend](https://img.shields.io/badge/Frontend-Vanilla_HTML5_%7C_CSS3_%7C_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![Aesthetics](https://img.shields.io/badge/Design-Glassmorphism_%7C_Neobrutalism-6C5CE7?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Author](https://img.shields.io/badge/Author-anu69--web-blue?style=for-the-badge&logo=github)](https://github.com/anu69-web)

A responsive, dynamic showcase landing page presenting the entire ecosystem of **asynchronous Python Telegram bots**, **real-time peer-to-peer WebRTC HTML5 games**, and **developer utilities**.

---

## ✨ Features & Architecture

- 🎨 **Adaptive Multi-Theme Engine**:
  - 🖤 **Midnight Dark** (Default)
  - 🌊 **Cyber Cyan**
  - 💜 **Retro Violet**
  - 🌸 **Sakura Pink**
  - Persists selected theme in `localStorage` across user sessions.

- ⚡ **Real-Time Client-Side Search & Tag Filtering**:
  - Instant keyboard shortcut support (`Ctrl + K` / `Cmd + K` search focus).
  - Multi-category chips (`All`, `Telegram Bots`, `HTML5 Games`, `2-Player Multiplayer`, `Developer Tools`).

- 🔊 **Procedural Web Audio Sound Effects**:
  - Native procedural audio synthesis using `AudioContext` for UI clicks, card hover blips, modal opens, and sound toggles with zero external audio assets.

- 📱 **Interactive Project Modal Dialogs**:
  - Rich slide-out modals with technical deep-dives, feature lists, command references, and one-tap launch URLs.

- 🖼️ **Dynamic Fallback SVG Banner Generator**:
  - Automatically synthesizes custom gradient SVG artwork with embedded icons for cards without static screenshot assets.

---

## 📁 Image Asset Directory

Drop custom screenshots, banners, or logos directly into the following directories:

### 🤖 Telegram Bots (`assets/images/bots/`)
| Bot Name | Asset File Path |
| :--- | :--- |
| **PyBot & Console** | `assets/images/bots/pybot.png` |
| **Gaming Hub Bot** | `assets/images/bots/game-bot.png` |
| **GeoOps HUD Bot** | `assets/images/bots/hud-bot.png` |
| **Memory Match Bot** | `assets/images/bots/memory-bot.png` |
| **Price Tracker Bot** | `assets/images/bots/price-tracker.png` |
| **Quiz Quest Bot** | `assets/images/bots/quiz-bot.png` |
| **Shortener Bot** | `assets/images/bots/shortener-bot.png` |
| **TempMail Bot** | `assets/images/bots/tempmail-bot.png` |
| **Truth & Dare Bot** | `assets/images/bots/truth-dare.png` |

### 🎮 Web Games (`assets/images/games/`)
| Game Name | Asset File Path |
| :--- | :--- |
| **Chess Master SVG** | `assets/images/games/chess.png` |
| **Uno Duel 2-Player** | `assets/images/games/uno.png` |
| **Paddle Clash Duel** | `assets/images/games/paddle.png` |
| **Snakes & Ladders 3D** | `assets/images/games/snakes.png` |
| **Flappy Bird Arcade** | `assets/images/games/flappy-bird.png` |
| **Frog Fight Arena** | `assets/images/games/frog-fight.png` |
| **Heart Catcher** | `assets/images/games/heart-catcher.png` |
| **Helix Jump 3D** | `assets/images/games/helix-jump.png` |
| **Tower Builder 3D** | `assets/images/games/tower-builder.png` |

---

## 🚀 Deployment & Custom Domain

1. **Deploy to GitHub Pages**:
   - Push repository to `https://github.com/anu69-web/main-site.git`.
   - In repository Settings $\rightarrow$ Pages $\rightarrow$ Deploy from branch `main` (`/root`).

2. **Custom Domain Configuration**:
   - Add a `CNAME` file in the root directory containing your custom domain.
   - Point your DNS `CNAME` record to `anu69-web.github.io`.

3. **Run Locally**:
   ```bash
   npx serve .
   # or with Python
   python -m http.server 8000
   ```

---

## 📄 License
Crafted and maintained by [anu69-web](https://github.com/anu69-web).
