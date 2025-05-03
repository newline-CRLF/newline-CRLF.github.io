const THEME_KEY = 'theme';
const selector = document.getElementById('theme-selector');

// 初期テーマ設定
function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === 'auto') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    root.setAttribute('data-theme', mode);
  }
}

// ローカルストレージから読み込み、なければauto
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'auto';
  applyTheme(saved);
  if (selector) selector.value = saved;
}

// イベントリスナー設定
if (selector) {
  selector.addEventListener('change', () => {
    const selected = selector.value;
    localStorage.setItem(THEME_KEY, selected);
    applyTheme(selected);
  });
}

// 初期化実行
initTheme();

// ダークモード設定が変わったときも自動で切り替える（auto時のみ）
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (localStorage.getItem(THEME_KEY) === 'auto') {
    applyTheme('auto');
  }
});
