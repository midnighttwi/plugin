window.__ModuleLoader__.load({
  id: '@local/dsh-theme-plum-snow',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const PLUGIN_ID = '@local/dsh-theme-plum-snow'
    const STORAGE_KEY = 'dsh-theme-plum-snow'
    const BODY_FLAG = 'data-mz-theme'

    /* assets are inlined by design/build_plugin.py */
    const BG_NIGHT = '__BG_NIGHT__'
    const BG_DAY = '__BG_DAY__'
    const EMBLEM = '__EMBLEM__'
    const BRAND = '__BRAND__'
    const SLIP = '__SLIP__'
    const SLIP_BOARD = '__SLIP_BOARD__'
    const BIRDS = '__BIRDS__'
    const SIDE_DAY = '__SIDE_DAY__'
    const SIDE_NIGHT = '__SIDE_NIGHT__'
    const AVATARS = ['__AV0__', '__AV1__', '__AV2__']
    const NAMES = ['霁川', '啸风', '阿依果']

    const TOKENS = {
      '--dsw-alias-bg-base': { light: 'rgba(250, 248, 243, 0.24)', dark: 'rgba(10, 10, 12, 0.20)' },
      '--dsw-alias-bg-layer-1': { light: '#FDFBF7', dark: '#1B1A18' },
      '--dsw-alias-bg-layer-2': { light: '#F7F3EC', dark: '#242220' },
      '--dsw-alias-bg-overlay': { light: '#FFFDF9', dark: '#1E1C1A' },
      '--dsw-alias-border-l1': { light: 'rgba(120, 84, 48, 0.20)', dark: 'rgba(201, 164, 104, 0.18)' },
      '--dsw-alias-border-l2': { light: 'rgba(120, 84, 48, 0.34)', dark: 'rgba(201, 164, 104, 0.32)' },
      '--dsw-alias-brand-primary': { light: '#A22F35', dark: '#C13A3A' },
      '--dsw-alias-label-primary': { light: '#241E19', dark: '#EEE7D8' },
      '--dsw-alias-label-secondary': { light: '#6B5B4B', dark: '#A8AAA6' },
      '--dsw-alias-state-error-primary': { light: '#B03A3A', dark: '#E0605E' },
      '--dsw-alias-state-idle-primary': { light: '#8B8378', dark: '#7A8688' },
      '--dsw-alias-state-success-primary': { light: '#4F7A63', dark: '#6E9C86' },
      '--dsw-alias-state-warn-primary': { light: '#8A651F', dark: '#D8A94A' },
      '--dsw-specific-sidebar-fill': { light: 'rgba(243, 239, 232, 0.34)', dark: 'rgba(9, 9, 10, 0.32)' },
      '--mz-gold': { light: '#8A6438', dark: '#C9A468' },
      '--mz-frame-line': { light: 'rgba(120, 84, 48, 0.34)', dark: 'rgba(201, 164, 104, 0.34)' },
      '--mz-corner': { light: 'rgba(120, 84, 48, 0.62)', dark: 'rgba(201, 164, 104, 0.66)' },
    }

    const CSS = `
body[data-mz-theme] {
  --mz-serif: "Songti SC", "STSong", "SimSun", "Noto Serif SC", serif;
  --mz-bg: url("${BG_DAY}");
  --mz-side-bg: url("${SIDE_DAY}");
  background-image: var(--mz-bg);
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  background-repeat: no-repeat;
  --dsw-alias-scrollbar-thumb: rgba(162, 47, 53, 0.38);
  --dsw-alias-scrollbar-thumb-hover: rgba(162, 47, 53, 0.60);
  --dsw-alias-bg-document-selection: rgba(162, 47, 53, 0.22);
  --dsw-focus-ring-color: #A22F35;
}
body[data-mz-theme][data-ds-dark-theme] {
  --mz-bg: url("${BG_NIGHT}");
  --mz-side-bg: url("${SIDE_NIGHT}");
  --dsw-alias-scrollbar-thumb: rgba(193, 58, 58, 0.45);
  --dsw-alias-scrollbar-thumb-hover: rgba(193, 58, 58, 0.70);
  --dsw-alias-bg-document-selection: rgba(193, 58, 58, 0.30);
  --dsw-focus-ring-color: #E08A85;
}
/* --- sidebar chrome (host class fragments verified against the maid skin) --- */
body[data-mz-theme] button[class*="newSession"] {
  background: color-mix(in srgb, var(--mz-gold) 10%, transparent) !important;
  border: 1px solid color-mix(in srgb, var(--mz-gold) 40%, transparent) !important;
  border-radius: 17px !important;
  min-height: 34px !important;
  box-shadow: none !important;
  color: var(--dsw-alias-label-primary) !important;
}
body[data-mz-theme] button[class*="newSession"]:hover {
  background: color-mix(in srgb, var(--mz-gold) 18%, transparent) !important;
}
body[data-mz-theme] [class*="brandName"],
body[data-mz-theme] [class*="fallbackBrandName"] {
  font-family: var(--mz-serif) !important;
  letter-spacing: 0.04em;
}
body[data-mz-theme] [class*="footArea"] {
  border-top: 1px solid color-mix(in srgb, var(--mz-gold) 25%, transparent) !important;
}

body[data-mz-theme] [role="treeitem"][class*="sessionRow"] {
  position: relative;
  border-radius: 8px !important;
  transition: background-color 140ms ease;
}
body[data-mz-theme] [role="treeitem"][class*="sessionRow"]:hover {
  background: color-mix(in srgb, var(--mz-gold) 8%, transparent) !important;
}
body[data-mz-theme] [role="treeitem"][class*="sessionRow"]::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  bottom: 9px;
  width: 2.2px;
  border-radius: 1px;
  background: transparent;
  pointer-events: none;
}
body[data-mz-theme] [role="treeitem"][class*="sessionRow"][aria-selected="true"],
body[data-mz-theme] [role="treeitem"][class*="sessionRow"][data-active="true"],
body[data-mz-theme] [role="treeitem"][class*="sessionRow"][class*="selected"] {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent) !important;
}
body[data-mz-theme] [role="treeitem"][class*="sessionRow"][aria-selected="true"]::before,
body[data-mz-theme] [role="treeitem"][class*="sessionRow"][data-active="true"]::before,
body[data-mz-theme] [role="treeitem"][class*="sessionRow"][class*="selected"]::before {
  background: var(--dsw-alias-brand-primary);
}

/* --- conversation bubbles (host chat-flow hooks) --- */
body[data-mz-theme] :is([data-chat-flow-kind="user"], [data-chat-flow-kind="steering"]) {
  --dsw-specific-bubble: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, var(--dsw-alias-bg-layer-2));
}
body[data-mz-theme] [class*="userRow"] [class*="bubble"]:not([role="tooltip"]),
body[data-mz-theme] [data-chat-flow-kind="user"] [class*="bubble"],
body[data-mz-theme] [data-chat-flow-kind="steering"] [class*="bubble"],
body[data-mz-theme] [data-question-reply] > [class*="bubble"] {
  border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 38%, transparent) !important;
  border-radius: 12px !important;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.10) !important;
}
body[data-mz-theme] [data-chat-flow-kind="assistant-step"] div[class*="markdown"] {
  background: var(--dsw-alias-bg-layer-1) !important;
  border: 1px solid color-mix(in srgb, var(--mz-gold) 28%, transparent) !important;
  border-radius: 12px !important;
  box-sizing: border-box !important;
  padding: 14px 18px !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07) !important;
}

/* --- composer as a paper strip (host data hooks) --- */
body[data-mz-theme] [data-composer-seat] {
  overflow: visible !important;
}
body[data-mz-theme] [data-composer-card] {
  position: relative !important;
  overflow: visible !important;
}
body[data-mz-theme] [data-composer-card]::before {
  content: "";
  position: absolute;
  left: auto;
  right: 40px;
  top: -30px;
  width: 60px;
  height: 38px;
  background-image: url("${BIRDS}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  pointer-events: none;
  transform-origin: 50% 100%;
  animation: mz-bob 6s ease-in-out infinite;
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.22));
  z-index: 2;
}
@keyframes mz-bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-1.5px) rotate(-1deg); }
}
@media (max-width: 1100px) {
  body[data-mz-theme] [data-composer-card]::before {
    width: 46px;
    height: 30px;
    left: auto;
    right: 16px;
    top: -24px;
  }
}
@media (prefers-reduced-motion: reduce) { body[data-mz-theme] [data-composer-card]::before { animation: none; } }

body[data-mz-theme] [data-composer-card] {
  background-image: linear-gradient(180deg,
    color-mix(in srgb, var(--mz-gold) 7%, var(--dsw-alias-bg-layer-2)) 0%,
    var(--dsw-alias-bg-layer-2) 62%) !important;
  border: 1px solid color-mix(in srgb, var(--mz-gold) 52%, transparent) !important;
  border-radius: 14px !important;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.16) !important;
}
body[data-mz-theme] [data-composer-card]::after {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid color-mix(in srgb, var(--mz-gold) 20%, transparent);
  border-radius: 10px;
  pointer-events: none;
}
body[data-mz-theme] [data-composer-input] {
  caret-color: var(--dsw-alias-brand-primary) !important;
}
body[data-mz-theme] [data-composer-input]::placeholder {
  color: color-mix(in srgb, var(--dsw-alias-label-secondary) 85%, transparent) !important;
  font-family: var(--mz-serif);
}
body[data-mz-theme] [data-composer-card] button:hover {
  background: color-mix(in srgb, var(--mz-gold) 14%, transparent) !important;
}
body[data-mz-theme] [data-composer-seat] {
  background: transparent !important;
}

body[data-mz-theme] [class*="sidebarCol"] {
  background-image:
    linear-gradient(180deg, rgba(252, 249, 243, 0.90) 0%, rgba(252, 249, 243, 0.62) 55%, rgba(252, 249, 243, 0.50) 100%),
    var(--mz-side-bg) !important;
  background-size: cover, auto 100% !important;
  background-position: center, right bottom !important;
  background-repeat: no-repeat !important;
}
body[data-mz-theme] [class*="sidebarCol"] > div { background: transparent !important; }
body[data-mz-theme][data-ds-dark-theme] [class*="sidebarCol"] {
  background-image:
    linear-gradient(180deg, rgba(10, 10, 12, 0.92) 0%, rgba(10, 10, 12, 0.72) 55%, rgba(10, 10, 12, 0.60) 100%),
    var(--mz-side-bg) !important;
}
.mz-frame, .mz-corner, .mz-slip, .mz-snow {
  position: fixed;
  pointer-events: none;
  box-sizing: border-box;
}
.mz-frame {
  inset: 9px;
  border: 1px solid var(--mz-frame-line);
  border-radius: 3px;
  z-index: 3;
}
.mz-frame::after {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid var(--mz-frame-line);
  opacity: 0.35;
  border-radius: 2px;
}
.mz-corner {
  width: 26px;
  height: 26px;
  border: 0 solid var(--mz-corner);
  z-index: 4;
}
.mz-corner.tl { top: 9px; left: 9px; border-top-width: 1.6px; border-left-width: 1.6px; }
.mz-corner.tr { top: 9px; right: 9px; border-top-width: 1.6px; border-right-width: 1.6px; }
.mz-corner.bl { bottom: 9px; left: 9px; border-bottom-width: 1.6px; border-left-width: 1.6px; }
.mz-corner.br { bottom: 9px; right: 9px; border-bottom-width: 1.6px; border-right-width: 1.6px; }

.mz-slip {
  position: fixed !important;
  right: 10px;
  top: 20%;
  width: 32px;
  height: auto !important;
  display: block;
  background: #D8BE8C;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.26);
  pointer-events: none;
  z-index: 4;
}
@media (max-width: 900px) { .mz-slip { display: none; } }

body[data-mz-theme][data-mz-font="kai"] { --dsw-font-family: "KaiTi", "STKaiti", "Kaiti SC", "楷体", "Songti SC", serif; }
body[data-mz-theme][data-mz-font="song"] { --dsw-font-family: "Songti SC", "STSong", "SimSun", "Noto Serif SC", serif; }

.mz-brand {
  width: 24px;
  height: 24px;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 0 4px rgba(193, 58, 58, 0.35));
}
.mz-bud {
  width: 16px;
  height: 16px;
  display: block;
  margin: 0 auto;
  pointer-events: none;
}

.mz-colophon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  height: 40px;
  pointer-events: none;
  user-select: none;
  overflow: hidden;
}
.mz-colophon img.mz-face {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--mz-gold);
  object-fit: cover;
  flex: none;
}
.mz-colophon .mz-rule {
  flex: 0 1 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--dsw-alias-border-l2));
}
.mz-colophon .mz-rule.r { background: linear-gradient(90deg, var(--dsw-alias-border-l2), transparent); }
.mz-colophon .mz-title {
  font-family: var(--mz-serif);
  font-size: 13px;
  letter-spacing: 7px;
  padding-left: 7px;
  color: var(--dsw-alias-label-secondary);
  white-space: nowrap;
}
.mz-colophon .mz-seal {
  width: 16px;
  height: 16px;
  background: var(--dsw-alias-brand-primary);
  border-radius: 1px;
  flex: none;
}
.mz-colophon img.mz-emblem { width: 30px; height: 30px; flex: none; }

.mz-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 0.5px solid var(--dsw-alias-border-l2);
}
.mz-row-text { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
.mz-row-title { color: var(--dsw-alias-label-primary); font-size: 14px; line-height: 22px; }
.mz-row-desc { color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; }
.mz-controls { display: flex; align-items: center; gap: 14px; flex: none; }
.mz-stack { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
.mz-seg { display: inline-flex; gap: 4px; }
.mz-seg-item {
  border: 1px solid var(--dsw-alias-border-l2);
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 11px;
  line-height: 16px;
  padding: 2px 9px;
  border-radius: 999px;
  cursor: pointer;
}
.mz-seg-item[data-on="true"] {
  background: var(--dsw-alias-brand-primary);
  border-color: transparent;
  color: #F2EADB;
}
.mz-control { display: flex; align-items: center; gap: 8px; }
.mz-control-label { color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 18px; white-space: nowrap; }
.mz-switch {
  position: relative;
  box-sizing: border-box;
  width: 34px;
  height: 20px;
  padding: 0;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 999px;
  corner-shape: round;
  background: var(--dsw-alias-bg-layer-2);
  cursor: pointer;
  transition: background-color 160ms ease, border-color 160ms ease;
}
.mz-switch[data-on="true"] { background: var(--dsw-alias-brand-primary); border-color: transparent; }
.mz-switch-thumb {
  position: absolute;
  top: 50%;
  left: 2px;
  width: 15px;
  height: 15px;
  margin-top: -7.5px;
  border-radius: 50%;
  corner-shape: round;
  background: var(--dsw-alias-switch-thumb, #FFFFFF);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);
  transition: transform 160ms ease;
}
.mz-switch[data-on="true"] .mz-switch-thumb { transform: translateX(14px); }
@media (prefers-reduced-motion: reduce) {
  .mz-switch, .mz-switch-thumb { transition: none; }
}
`

    const STRINGS = {
      zh: {
        title: '折梅听雪录',
        desc: '以《无期迷途》新春活动为题的双色主题：水墨背景、朱砂印章、官方局徽与角色小像、落雪浮层。',
        theme: '主题',
        snow: '落雪',
        font: '字体',
        kai: '楷体',
        song: '宋体',
        sans: '无衬线',
        scheme: '深浅',
        follow: '跟随',
        light: '浅色',
        dark: '深色',
      },
      en: {
        title: 'Plum in Snow',
        desc: 'A two-tone ink-wash theme after Path to Nowhere’s “Plum in Snow”: painted backdrop, cinnabar seals, MBCC emblem, character medallions and snowfall.',
        theme: 'Theme',
        snow: 'Snowfall',
        font: 'Typeface',
        kai: 'Kai',
        song: 'Serif',
        sans: 'Sans',
        scheme: 'Scheme',
        follow: 'Auto',
        light: 'Light',
        dark: 'Dark',
      },
    }

    /* ---------------- preferences ---------------- */
    const listeners = new Set()
    let state = loadPrefs()

    function loadPrefs() {
      const fallback = { enabled: true, snow: true, font: 'kai' }
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY)
        if (!raw) return fallback
        const parsed = JSON.parse(raw)
        if (!parsed || typeof parsed !== 'object') return fallback
        return {
          enabled: parsed.enabled !== false,
          snow: parsed.snow !== false,
          font: parsed.font === 'song' || parsed.font === 'sans' ? parsed.font : 'kai',
        }
      } catch (error) {
        return fallback
      }
    }

    function savePrefs(next) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch (error) {
        /* ignore */
      }
    }

    function getPrefs() { return state }

    function updatePrefs(patch) {
      state = Object.assign({}, state, patch)
      savePrefs(state)
      const snapshot = Array.from(listeners)
      for (let i = 0; i < snapshot.length; i += 1) snapshot[i]()
    }

    function subscribePrefs(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    }

    function usePrefs() {
      const [, force] = React.useReducer((tick) => tick + 1, 0)
      React.useEffect(() => subscribePrefs(force), [])
      return getPrefs()
    }

    /* ---------------- locale ---------------- */
    const runtime = { ctx: null }

    function activeLocale() {
      try {
        const ctx = runtime.ctx
        if (!ctx || typeof ctx.get !== 'function') return 'en'
        const locale = ctx.get('locale')
        if (!locale || typeof locale.getLocale !== 'function') return 'en'
        const snapshot = locale.getLocale()
        return (snapshot && snapshot.active) || 'en'
      } catch (error) {
        return 'en'
      }
    }

    function strings() {
      return /^zh/i.test(activeLocale()) ? STRINGS.zh : STRINGS.en
    }

    function useStrings() {
      const [, force] = React.useReducer((tick) => tick + 1, 0)
      React.useEffect(() => {
        const ctx = runtime.ctx
        if (!ctx || typeof ctx.on !== 'function') return undefined
        return ctx.on('locale/change', force)
      }, [])
      return strings()
    }

    /* ---------------- components ---------------- */
    function Frame() {
      const prefs = usePrefs()
      if (!prefs.enabled) return null
      return h(
        React.Fragment,
        null,
        h('div', { className: 'mz-frame', 'aria-hidden': 'true' }),
        h('div', { className: 'mz-corner tl', 'aria-hidden': 'true' }),
        h('div', { className: 'mz-corner tr', 'aria-hidden': 'true' }),
        h('div', { className: 'mz-corner bl', 'aria-hidden': 'true' }),
        h('div', { className: 'mz-corner br', 'aria-hidden': 'true' }),
        h('img', { className: 'mz-slip', src: SLIP_BOARD, alt: '', 'aria-hidden': 'true' }),
      )
    }

    function SnowLayer() {
      const prefs = usePrefs()
      const active = prefs.enabled && prefs.snow
      const canvasRef = React.useRef(null)

      React.useEffect(() => {
        if (!active) return undefined
        const canvas = canvasRef.current
        if (!canvas || typeof canvas.getContext !== 'function') return undefined
        const surface = canvas.getContext('2d')
        if (!surface) return undefined

        const media = typeof window.matchMedia === 'function'
          ? window.matchMedia('(prefers-reduced-motion: reduce)') : null
        let width = 0
        let height = 0
        let particles = []
        let frame = 0
        let previous = 0
        let paused = false

        const isDark = () => document.body.hasAttribute('data-ds-dark-theme')

        function particle(top) {
          const petal = Math.random() < 0.14
          return {
            petal,
            x: Math.random() * Math.max(width, 1),
            y: top ? -14 - Math.random() * 40 : Math.random() * Math.max(height, 1),
            radius: petal ? 2.2 + Math.random() * 1.6 : 0.7 + Math.random() * 1.5,
            fall: petal ? 14 + Math.random() * 22 : 12 + Math.random() * 30,
            sway: 4 + Math.random() * 10,
            phase: Math.random() * Math.PI * 2,
            angle: Math.random() * Math.PI,
            spin: petal ? (Math.random() - 0.5) * 1.6 : 0,
          }
        }

        function seed() {
          const count = Math.round((width * height) / 28000)
          const total = Math.max(30, Math.min(90, count))
          particles = []
          for (let i = 0; i < total; i += 1) particles.push(particle(false))
        }

        function resize() {
          const dpr = Math.min(window.devicePixelRatio || 1, 2)
          width = window.innerWidth
          height = window.innerHeight
          canvas.width = Math.max(1, Math.floor(width * dpr))
          canvas.height = Math.max(1, Math.floor(height * dpr))
          canvas.style.width = width + 'px'
          canvas.style.height = height + 'px'
          surface.setTransform(dpr, 0, 0, dpr, 0, 0)
          seed()
        }

        function paint(dt) {
          surface.clearRect(0, 0, width, height)
          const dark = isDark()
          surface.fillStyle = dark ? 'rgba(198, 86, 84, 0.50)' : 'rgba(158, 50, 56, 0.42)'
          for (let i = 0; i < particles.length; i += 1) {
            const p = particles[i]
            if (!p.petal) continue
            surface.save()
            surface.translate(p.x, p.y)
            surface.rotate(p.angle)
            surface.beginPath()
            surface.ellipse(0, 0, p.radius * 1.9, p.radius * 0.85, 0, 0, Math.PI * 2)
            surface.fill()
            surface.restore()
          }
          surface.fillStyle = dark ? 'rgba(236, 242, 244, 0.72)' : 'rgba(92, 110, 122, 0.30)'
          for (let i = 0; i < particles.length; i += 1) {
            const p = particles[i]
            if (p.petal) continue
            surface.beginPath()
            surface.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            surface.fill()
          }
          if (dt <= 0) return
          for (let i = 0; i < particles.length; i += 1) {
            const p = particles[i]
            p.phase += dt
            p.y += p.fall * dt
            p.x += Math.sin(p.phase * 0.7) * p.sway * dt
            p.angle += p.spin * dt
            if (p.y > height + 16) { p.y = -14; p.x = Math.random() * width }
            if (p.x < -24) p.x = width + 24
            else if (p.x > width + 24) p.x = -24
          }
        }

        function loop(timestamp) {
          frame = window.requestAnimationFrame(loop)
          const dt = previous === 0 ? 0 : Math.min((timestamp - previous) / 1000, 0.05)
          previous = timestamp
          if (!paused) paint(dt)
        }

        const onResize = () => { resize(); if (media && media.matches) paint(0) }
        const onVisibility = () => { paused = document.hidden }

        resize()
        if (media && media.matches) paint(0)
        else frame = window.requestAnimationFrame(loop)
        window.addEventListener('resize', onResize)
        document.addEventListener('visibilitychange', onVisibility)

        return () => {
          if (frame) window.cancelAnimationFrame(frame)
          window.removeEventListener('resize', onResize)
          document.removeEventListener('visibilitychange', onVisibility)
          surface.clearRect(0, 0, width, height)
        }
      }, [active])

      if (!active) return null
      return h('canvas', { ref: canvasRef, className: 'mz-snow', 'aria-hidden': 'true' })
    }

    function Overlay() {
      return h(React.Fragment, null, h(Frame, null), h(SnowLayer, null))
    }

    function BrandMark(props) {
      const prefs = usePrefs()
      if (!prefs.enabled) return null
      const size = props && typeof props.size === 'number' && props.size > 0 ? props.size : 24
      return h('img', {
        className: 'mz-brand',
        src: BRAND,
        alt: 'MBCC',
        'aria-hidden': 'true',
        style: { width: size + 'px', height: size + 'px' },
      })
    }

    function Blossom() {
      const prefs = usePrefs()
      if (!prefs.enabled) return null
      const petals = [0, 72, 144, 216, 288].map((deg) => {
        const rad = (deg * Math.PI) / 180
        return h('circle', {
          key: deg,
          cx: 8 + Math.cos(rad) * 3.4,
          cy: 8 + Math.sin(rad) * 3.4,
          r: 2.5,
          fill: 'var(--dsw-alias-brand-primary)',
          opacity: 0.85,
        })
      })
      return h('svg', { className: 'mz-bud', viewBox: '0 0 16 16', 'aria-hidden': 'true' },
        h('g', null, petals),
        h('circle', { cx: 8, cy: 8, r: 1.3, fill: 'var(--mz-gold)' }))
    }

    function Colophon() {
      const prefs = usePrefs()
      if (!prefs.enabled) return null
      const zh = /^zh/i.test(activeLocale())
      const title = zh ? '折梅听雪录' : 'PLUM IN SNOW'
      return h(
        'div',
        { className: 'mz-colophon', 'aria-hidden': 'true' },
        h('span', { className: 'mz-rule' }),
        AVATARS.map((src, i) => h('img', {
          key: 'av' + i,
          className: 'mz-face',
          src,
          alt: NAMES[i],
          title: NAMES[i],
        })),
        h('span', { className: 'mz-title' }, title),
        h('span', { className: 'mz-seal' }),
        h('span', { className: 'mz-rule r' }),
        h('img', { className: 'mz-emblem', src: EMBLEM, alt: 'MBCC', title: 'MBCC 管理局' }),
      )
    }

    function Switch(props) {
      return h(
        'div',
        { className: 'mz-control' },
        h('span', { className: 'mz-control-label' }, props.label),
        h('button', {
          type: 'button',
          role: 'switch',
          'aria-checked': props.checked ? 'true' : 'false',
          'aria-label': props.label,
          className: 'mz-switch',
          'data-on': props.checked ? 'true' : 'false',
          onClick: () => props.onChange(!props.checked),
        }, h('span', { className: 'mz-switch-thumb', 'aria-hidden': 'true' })),
      )
    }

    function Segmented(props) {
      return h('div', { className: 'mz-seg' },
        props.options.map((opt) => h('button', {
          key: opt.id,
          type: 'button',
          className: 'mz-seg-item',
          'data-on': props.value === opt.id ? 'true' : 'false',
          'aria-pressed': props.value === opt.id ? 'true' : 'false',
          onClick: () => props.onChange(opt.id),
        }, opt.label)))
    }

    function useScheme() {
      const [, force] = React.useReducer((tick) => tick + 1, 0)
      React.useEffect(() => {
        const ctx = runtime.ctx
        if (!ctx || typeof ctx.on !== 'function') return undefined
        return ctx.on('theme/change', force)
      }, [])
      try {
        const theme = runtime.ctx && runtime.ctx.theme
        const snap = theme && typeof theme.getTheme === 'function' ? theme.getTheme() : null
        return snap ? snap.preference : 'system'
      } catch (error) {
        return 'system'
      }
    }

    function setScheme(id) {
      try {
        const theme = runtime.ctx && runtime.ctx.theme
        if (theme && typeof theme.setTheme === 'function') theme.setTheme(id)
      } catch (error) {
        console.error('[plum-snow] could not switch scheme', error)
      }
    }

    function ThemeSettingsRow() {
      const prefs = usePrefs()
      const text = useStrings()
      const scheme = useScheme()
      return h(
        'div',
        { className: 'mz-row' },
        h('div', { className: 'mz-row-text' },
          h('div', { className: 'mz-row-title' }, text.title),
          h('div', { className: 'mz-row-desc' }, text.desc)),
        h('div', { className: 'mz-stack' },
          h('div', { className: 'mz-controls' },
            h(Switch, { label: text.theme, checked: prefs.enabled, onChange: (v) => updatePrefs({ enabled: v }) }),
            h(Switch, { label: text.snow, checked: prefs.snow, onChange: (v) => updatePrefs({ snow: v }) })),
          h('div', { className: 'mz-controls' },
            h('span', { className: 'mz-control-label' }, text.font),
            h(Segmented, {
              value: prefs.font,
              options: [
                { id: 'kai', label: text.kai },
                { id: 'song', label: text.song },
                { id: 'sans', label: text.sans },
              ],
              onChange: (v) => updatePrefs({ font: v }),
            }),
            h('span', { className: 'mz-control-label' }, text.scheme),
            h(Segmented, {
              value: scheme,
              options: [
                { id: 'system', label: text.follow },
                { id: 'light', label: text.light },
                { id: 'dark', label: text.dark },
              ],
              onChange: setScheme,
            }))),
      )
    }

    /* ---------------- apply ---------------- */
    function apply(ctx) {
      runtime.ctx = ctx

      ctx.effect(() => {
        const style = document.createElement('style')
        style.id = 'dsh-plum-snow-style'
        style.textContent = CSS
        document.head.appendChild(style)
        return () => { style.remove() }
      }, 'plum-snow stylesheet')

      ctx.effect(() => {
        let tokenLayer = null

        const applyTokens = (enabled) => {
          const theme = ctx.theme
          if (!theme || typeof theme.overrideTokens !== 'function') return
          if (enabled) {
            if (tokenLayer) return
            try {
              tokenLayer = theme.overrideTokens(PLUGIN_ID, TOKENS)
            } catch (error) {
              tokenLayer = null
              console.error('[plum-snow] token layer failed', error)
            }
          } else if (tokenLayer) {
            try { tokenLayer() } catch (error) { /* ignore */ }
            tokenLayer = null
          }
        }

        const sync = () => {
          const prefs = getPrefs()
          const body = document.body
          if (body) {
            if (prefs.enabled) body.setAttribute(BODY_FLAG, '')
            else body.removeAttribute(BODY_FLAG)
            if (prefs.enabled && prefs.font !== 'sans') body.setAttribute('data-mz-font', prefs.font)
            else body.removeAttribute('data-mz-font')
          }
          applyTokens(prefs.enabled)
        }

        sync()
        const unsubscribe = subscribePrefs(sync)
        return () => {
          unsubscribe()
          applyTokens(false)
          if (document.body) {
            document.body.removeAttribute(BODY_FLAG)
            document.body.removeAttribute('data-mz-font')
          }
        }
      }, 'plum-snow theme layer')

      const register = (slot, options, component) => {
        if (!ctx.slots) return
        try {
          ctx.slots.inject(slot, () => {
            try {
              return ctx.slots.register(Object.assign({ name: slot }, options), component)
            } catch (error) {
              console.error('[plum-snow] register failed ' + slot, error)
              return () => {}
            }
          })
        } catch (error) {
          console.error('[plum-snow] inject failed ' + slot, error)
        }
      }

      register('shell.overlay', { id: 'plum-snow', order: 25 }, Overlay)
      register('sidebar.brand.mark', { priority: 10 }, BrandMark)
      register('sidebar.session.row.leading', { id: 'plum-snow-blossom', order: 50 }, Blossom)
      register('conversation.composer.dock', { id: 'plum-snow-colophon', order: 50 }, Colophon)
      register('settings.general.item', { id: 'plum-snow', order: 13 }, ThemeSettingsRow)
    }

    return { inject: ['slots', 'theme'], apply }
  },
})
