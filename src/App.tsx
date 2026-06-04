import { useState, useEffect, useRef } from "react";

const BOOK_INFO = {
  '창세기': { color: '#6366f1', emoji: '📖', testament: 'OT', order: 1 },
  '출애굽기': { color: '#ec4899', emoji: '🌊', testament: 'OT', order: 2 },
  '레위기': { color: '#f59e0b', emoji: '🔥', testament: 'OT', order: 3 },
  '민수기': { color: '#10b981', emoji: '🏕️', testament: 'OT', order: 4 },
  '신명기': { color: '#3b82f6', emoji: '📜', testament: 'OT', order: 5 },
  '여호수아': { color: '#8b5cf6', emoji: '⚔️', testament: 'OT', order: 6 },
  '사사기': { color: '#a855f7', emoji: '🛡️', testament: 'OT', order: 7 },
  '룻기': { color: '#f472b6', emoji: '🌾', testament: 'OT', order: 8 },
  '사무엘상': { color: '#06b6d4', emoji: '👑', testament: 'OT', order: 9 },
  '사무엘하': { color: '#0891b2', emoji: '👑', testament: 'OT', order: 10 },
  '열왕기상': { color: '#0e7490', emoji: '🏛️', testament: 'OT', order: 11 },
  '열왕기하': { color: '#155e75', emoji: '🏛️', testament: 'OT', order: 12 },
  '역대상': { color: '#0d9488', emoji: '📚', testament: 'OT', order: 13 },
  '역대하': { color: '#0f766e', emoji: '📚', testament: 'OT', order: 14 },
  '에스라': { color: '#059669', emoji: '🔨', testament: 'OT', order: 15 },
  '느헤미야': { color: '#047857', emoji: '🧱', testament: 'OT', order: 16 },
  '에스더': { color: '#db2777', emoji: '👸', testament: 'OT', order: 17 },
  '욥기': { color: '#7c3aed', emoji: '😢', testament: 'OT', order: 18 },
  '시편': { color: '#9333ea', emoji: '🎵', testament: 'OT', order: 19 },
  '잠언': { color: '#c026d3', emoji: '💎', testament: 'OT', order: 20 },
  '전도서': { color: '#a21caf', emoji: '🍃', testament: 'OT', order: 21 },
  '아가': { color: '#be185d', emoji: '💐', testament: 'OT', order: 22 },
  '이사야': { color: '#dc2626', emoji: '🌟', testament: 'OT', order: 23 },
  '예레미야': { color: '#e74c3c', emoji: '📯', testament: 'OT', order: 24 },
  '예레미야애가': { color: '#c0392b', emoji: '😢', testament: 'OT', order: 25 },
  '에스겔': { color: '#b91c1c', emoji: '👁️', testament: 'OT', order: 26 },
  '다니엘': { color: '#991b1b', emoji: '🦁', testament: 'OT', order: 27 },
  '호세아': { color: '#7f1d1d', emoji: '💔', testament: 'OT', order: 28 },
  '요엘': { color: '#ea580c', emoji: '🌾', testament: 'OT', order: 29 },
  '아모스': { color: '#c2410c', emoji: '⚖️', testament: 'OT', order: 30 },
  '오바댜': { color: '#9a3412', emoji: '🏔️', testament: 'OT', order: 31 },
  '요나': { color: '#0369a1', emoji: '🐟', testament: 'OT', order: 32 },
  '미가': { color: '#0c4a6e', emoji: '⚖️', testament: 'OT', order: 33 },
  '나훔': { color: '#1e40af', emoji: '🌊', testament: 'OT', order: 34 },
  '하박국': { color: '#1e3a8a', emoji: '❓', testament: 'OT', order: 35 },
  '스바냐': { color: '#312e81', emoji: '🔥', testament: 'OT', order: 36 },
  '학개': { color: '#4338ca', emoji: '🏗️', testament: 'OT', order: 37 },
  '스가랴': { color: '#4f46e5', emoji: '🐎', testament: 'OT', order: 38 },
  '말라기': { color: '#5b21b6', emoji: '✉️', testament: 'OT', order: 39 },
  '마태복음': { color: '#dc2626', emoji: '✝️', testament: 'NT', order: 40 },
  '마가복음': { color: '#ea580c', emoji: '✝️', testament: 'NT', order: 41 },
  '누가복음': { color: '#d97706', emoji: '✝️', testament: 'NT', order: 42 },
  '요한복음': { color: '#65a30d', emoji: '✝️', testament: 'NT', order: 43 },
  '사도행전': { color: '#059669', emoji: '🕊️', testament: 'NT', order: 44 },
  '로마서': { color: '#0891b2', emoji: '📜', testament: 'NT', order: 45 },
  '고린도전서': { color: '#0e7490', emoji: '📜', testament: 'NT', order: 46 },
  '고린도후서': { color: '#155e75', emoji: '📜', testament: 'NT', order: 47 },
  '갈라디아서': { color: '#1e40af', emoji: '📜', testament: 'NT', order: 48 },
  '에베소서': { color: '#3730a3', emoji: '📜', testament: 'NT', order: 49 },
  '빌립보서': { color: '#4338ca', emoji: '📜', testament: 'NT', order: 50 },
  '골로새서': { color: '#5b21b6', emoji: '📜', testament: 'NT', order: 51 },
  '데살로니가전서': { color: '#6d28d9', emoji: '📜', testament: 'NT', order: 52 },
  '데살로니가후서': { color: '#7c3aed', emoji: '📜', testament: 'NT', order: 53 },
  '디모데전서': { color: '#9333ea', emoji: '📜', testament: 'NT', order: 54 },
  '디모데후서': { color: '#a855f7', emoji: '📜', testament: 'NT', order: 55 },
  '디도서': { color: '#c026d3', emoji: '📜', testament: 'NT', order: 56 },
  '빌레몬서': { color: '#db2777', emoji: '📜', testament: 'NT', order: 57 },
  '히브리서': { color: '#e11d48', emoji: '🙏', testament: 'NT', order: 58 },
  '야고보서': { color: '#dc2626', emoji: '🙏', testament: 'NT', order: 59 },
  '베드로전서': { color: '#b91c1c', emoji: '🙏', testament: 'NT', order: 60 },
  '베드로후서': { color: '#991b1b', emoji: '🙏', testament: 'NT', order: 61 },
  '베드로전후서': { color: '#b91c1c', emoji: '🙏', testament: 'NT', order: 60.5 },
  '요한일서': { color: '#7f1d1d', emoji: '💝', testament: 'NT', order: 62 },
  '요한이서': { color: '#7f1d1d', emoji: '💝', testament: 'NT', order: 63 },
  '요한삼서': { color: '#7f1d1d', emoji: '💝', testament: 'NT', order: 64 },
  '요한일이삼서': { color: '#7f1d1d', emoji: '💝', testament: 'NT', order: 62.5 },
  '유다서': { color: '#581c87', emoji: '⚖️', testament: 'NT', order: 65 },
  '요한계시록': { color: '#a21caf', emoji: '👑', testament: 'NT', order: 66 },
};

const getBookInfo = (book) => BOOK_INFO[book] || { color: '#6b7280', emoji: '📕', testament: 'OT', order: 999 };

// ── 데이터 구조 ──────────────────────────────────────────────
// 새 구조: { id, book, prompt, passage(null 가능), choices(배열|null), answer }
//   - prompt  : 실제 질문
//   - passage : 성경 구절 인용 (없으면 null) — 질문과 시각적으로 분리
//   - choices : 선택형 보기 배열 (번호는 앱이 붙임). 빈칸/단답형은 null
//   - answer  : 정답 (빈칸·단답형은 번호 없이, 선택형은 보기 내용)
//   - 빈칸은 □ 문자로 직접 표기
// 옛 구조({ q, a })도 화면에 그릴 때만 자동 변환해서 깨지지 않게 한다.
// (저장 데이터는 절대 덮어쓰지 않음 — 정규화는 렌더 시점에만)

// 옛 q 한 줄을 prompt/passage/choices 로 best-effort 분해 (호환용)
const parseLegacyQ = (raw) => {
  let s = (raw || '').trim();
  let passage = null;
  // 끝에 붙은 (구절) 추출 → passage
  const m = s.match(/\s*(\([가-힣][^)]*\))\s*$/);
  if (m) { passage = m[1].replace(/^\(|\)$/g, '').trim(); s = s.slice(0, s.length - m[0].length).trimEnd(); }
  // 보기(①②③④⑤) 분리
  let choices = [];
  const ci = s.indexOf('①');
  if (ci > -1) {
    const cText = s.slice(ci);
    s = s.slice(0, ci).trimEnd();
    choices = cText.split(/(?=[①②③④⑤])/).map(x => x.replace(/^[①②③④⑤]\s*/, '').trim()).filter(Boolean);
  }
  // 옛 빈칸 표기(___, ( )) → □ 로 통일
  const toBox = (x) => (x == null ? x : x.replace(/_{2,}/g, '□').replace(/\(\s*\)/g, '□'));
  return { prompt: toBox(s), passage: toBox(passage), choices };
};

// 어떤 형식이 들어와도 통일된 구조로 반환
const normalizeQ = (item) => {
  if (!item) return { prompt: '', passage: null, choices: [], answer: '', wordBank: [] };
  const wb = Array.isArray(item.wordBank) ? item.wordBank : (item.wordBank ? [item.wordBank] : []);
  // 이미 새 구조면 그대로 사용
  if ('prompt' in item || 'passage' in item || 'choices' in item || 'answer' in item) {
    return {
      ...item,
      prompt: item.prompt ?? '',
      passage: item.passage ?? null,
      choices: Array.isArray(item.choices) ? item.choices : [],
      answer: item.answer ?? item.a ?? '',
      wordBank: wb,
    };
  }
  // 옛 구조(q/a)
  return { ...item, ...parseLegacyQ(item.q), answer: item.a ?? '', wordBank: wb };
};

// 문제 유형 판별: 선택형 > 빈칸 > 단답형
const qType = (n) => {
  if (n.choices && n.choices.length > 0) return 'mc';
  if (/□/.test(n.prompt || '') || /□/.test(n.passage || '')) return 'fill';
  return 'short';
};

// 성경 참조 표기인지 판별
//  예) "애 5", "창 1:1", "시 23:1-6", "창 6, 9", "창 22, 대하 3", "출 2~3", "레 16, 23, 25"
const isBibleRef = (s) => {
  const t = (s || '').trim();
  if (!t || t.length > 30 || !/^[가-힣]/.test(t) || !/\d/.test(t)) return false;
  const segs = t.split(/\s*,\s*/);                 // 쉼표로 여러 인용 분리
  let hasBook = false;
  for (const seg of segs) {
    // (책약자)? 숫자 (장)? (~/-범위)? (:절(범위)?)? (절)?
    if (!/^(?:[가-힣]{1,7}\s*)?\d+\s*(?:장)?(?:\s*[~\-]\s*\d+)?(?:\s*[:]\s*\d+\s*(?:절)?(?:\s*[~\-]\s*\d+)?)?(?:\s*절)?$/.test(seg)) return false;
    if (/^[가-힣]/.test(seg)) hasBook = true;       // 적어도 한 조각엔 책 약자
  }
  return hasBook;
};

// prompt/passage 에서 성경 참조를 분리해 괄호로 따로 표시할 수 있게 한다.
// 반환: { prompt, passage(본문만), ref(참조 문자열|null) }
const extractRef = (n) => {
  let prompt = n.prompt || '';
  let passage = n.passage || '';
  let ref = null;
  if (passage.trim()) {
    const bare = passage.trim().replace(/^\(|\)$/g, '').trim();
    if (isBibleRef(bare)) { ref = bare; passage = ''; }           // passage 전체가 참조
    else {
      const m = passage.match(/\(\s*([^()]+?)\s*\)\s*$/);          // 끝에 (참조)
      if (m && isBibleRef(m[1])) { ref = m[1].trim(); passage = passage.slice(0, m.index).trim(); }
    }
  }
  if (!ref) {                                                      // prompt 끝의 (참조)
    const m2 = prompt.match(/\(\s*([^()]+?)\s*\)\s*$/);
    if (m2 && isBibleRef(m2[1])) { ref = m2[1].trim(); prompt = prompt.slice(0, m2.index).trim(); }
  }
  return { prompt, passage, ref };
};

// □ 를 시각적 빈칸 박스로 렌더 (없으면 텍스트 그대로)
const renderWithBlanks = (text, color) => {
  if (text == null || text === '') return null;
  const parts = String(text).split('□');
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && (
        <span style={{ display:'inline-block', minWidth:58, height:24, background:`${color}38`, border:`1px solid ${color}66`, borderRadius:6, margin:'0 5px', verticalAlign:'middle' }} />
      )}
    </span>
  ));
};

// 목록/검색용 평문 헬퍼
const qPreview = (item, len) => {
  const n = normalizeQ(item);
  const t = (n.prompt || n.passage || '').trim();
  return len && t.length > len ? t.slice(0, len) + '…' : t;
};
const qText = (item) => { const n = normalizeQ(item); return [n.prompt, n.passage, ...(n.choices || [])].filter(Boolean).join(' '); };
const aText = (item) => (normalizeQ(item).answer || '');


const SK = { QUESTIONS: 'questions_v1', BOOKMARKS: 'bookmarks_v1', FOLDERS: 'folders_v1' };
const NOTION_PAGE_ID = '36f01bdf-083b-8142-97da-ec83aedfae36';

// Notion에서 섹션 데이터 읽기
async function notionLoad(section) {
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        system: `You are a data retrieval assistant. Fetch the Notion page with ID "${NOTION_PAGE_ID}" using the notion-fetch tool and extract the JSON content inside the ## ${section} section's code block. Return ONLY the raw JSON string, nothing else.`,
        messages: [{ role: 'user', content: `Get the ${section} data from the Notion page.` }],
        mcp_servers: [{ type: 'url', url: 'https://mcp.notion.com/mcp', name: 'notion' }],
      })
    });
    const data = await res.json();
    const text = data.content?.filter(b => b.type === 'text').map(b => b.text).join('');
    if (!text) return null;
    const clean = text.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(clean);
  } catch(e) { return null; }
}

// Notion 페이지 섹션 업데이트
async function notionSave(section, data) {
  try {
    const json = JSON.stringify(data);
    await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are a data storage assistant. Update the Notion page with ID "${NOTION_PAGE_ID}" using the notion-update-page tool. Replace the content inside the ## ${section} section's code block with the new JSON data provided. Keep all other sections unchanged.`,
        messages: [{ role: 'user', content: `Update the ${section} section with this data: \`\`\`\n${json}\n\`\`\`` }],
        mcp_servers: [{ type: 'url', url: 'https://mcp.notion.com/mcp', name: 'notion' }],
      })
    });
    return true;
  } catch(e) { return false; }
}

async function loadQ() {
  // Notion에서 먼저 시도
  const notion = await notionLoad('questions');
  if (notion && Array.isArray(notion)) return notion;
  // fallback: localStorage
  try { const v = localStorage.getItem(SK.QUESTIONS); return v ? JSON.parse(v) : []; } catch(e) { return []; }
}
async function saveQ(qs) {
  try {
    const json = JSON.stringify(qs);
    if (new Blob([json]).size > 4.5*1024*1024) return { ok: false, message: '데이터가 너무 커요' };
    try { localStorage.setItem(SK.QUESTIONS, json); } catch(e) {}
    notionSave('questions', qs);
    return { ok: true };
  } catch(e) { return { ok: false, message: e.message }; }
}
async function sd(key) {
  try { localStorage.removeItem(key); } catch(e) {}
  const section = key === SK.QUESTIONS ? 'questions' : key === SK.BOOKMARKS ? 'bookmarks' : 'folders';
  const empty = key === SK.QUESTIONS ? [] : {};
  notionSave(section, empty);
}
async function loadO(key) {
  const section = key === SK.BOOKMARKS ? 'bookmarks' : 'folders';
  const notion = await notionLoad(section);
  if (notion) return notion;
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : {}; } catch(e) { return {}; }
}
async function saveO(key, obj) {
  const section = key === SK.BOOKMARKS ? 'bookmarks' : 'folders';
  try { localStorage.setItem(key, JSON.stringify(obj)); } catch(e) {}
  notionSave(section, obj);
}

export default function App() {
  const [view, setView] = useState('home');
  const [questions, setQuestions] = useState([]);
  const [bm, setBm] = useState({});
  const [folders, setFolders] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [queue, setQueue] = useState([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showList, setShowList] = useState(false);
  const [slideAnim, setSlideAnim] = useState(null);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const barRef = useRef(null);
  const [dragIdx, setDragIdx] = useState(null);
  const swipeRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    (async () => {
      const qs = await loadQ();
      const b = await loadO(SK.BOOKMARKS);
      const f = await loadO(SK.FOLDERS);
      const sorted = [...qs].sort((a, b) => {
        const ao = BOOK_INFO[a.book]?.order ?? 999;
        const bo = BOOK_INFO[b.book]?.order ?? 999;
        return ao !== bo ? ao - bo : a.id.localeCompare(b.id);
      });
      setQuestions(sorted); setBm(b); setFolders(f); setLoaded(true);
      if (qs.length === 0) setView('import');
    })();
  }, []);

  const toggleBm = async (id) => {
    const n = { ...bm, [id]: !bm[id] };
    setBm(n); await saveO(SK.BOOKMARKS, n);
  };

  const startStudy = (qs) => {
    if (!qs || qs.length === 0) { alert('학습할 문제가 없어요'); return; }
    const final = shuffleOn ? [...qs].sort(() => Math.random() - 0.5) : qs;
    setQueue(final); setIdx(0); setFlipped(false); setView('study');
  };

  const animGo = (dir, action) => {
    setSlideAnim(dir);
    setTimeout(() => { action(); setFlipped(false); setSlideAnim(null); }, 220);
  };
  const prevQ = () => { if (idx > 0) animGo('right', () => setIdx(i => i - 1)); };
  const nextQ = () => { if (idx < queue.length - 1) animGo('left', () => setIdx(i => i + 1)); else setView('done'); };
  const jumpTo = (i) => { animGo(i > idx ? 'left' : 'right', () => setIdx(i)); setShowList(false); };
  const shuffleNow = () => {
    const cur = queue[idx];
    const others = queue.filter((_,i) => i !== idx).sort(() => Math.random() - 0.5);
    setQueue([cur, ...others]); setIdx(0); setFlipped(false);
  };

  useEffect(() => {
    if (view !== 'study' || showList) return;
    const onKey = (e) => {
      const tag = (e.target.tagName||'').toLowerCase();
      if (tag==='input'||tag==='textarea'||tag==='select') return;
      if (e.key==='ArrowLeft') { e.preventDefault(); prevQ(); }
      else if (e.key==='ArrowRight') { e.preventDefault(); nextQ(); }
      else if (e.key===' '||e.key==='Enter') { e.preventDefault(); setFlipped(f=>!f); }
      else if (e.key==='b'||e.key==='B'||e.key==='ㅠ') { e.preventDefault(); if (queue[idx]) toggleBm(queue[idx].id); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [view, showList, idx, queue, bm]);

  const getBarIdx = (clientX) => {
    if (!barRef.current) return 0;
    const rect = barRef.current.getBoundingClientRect();
    return Math.round(Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)) * (queue.length - 1));
  };

  const usedBooks = [...new Set(questions.map(q => q.book))].sort((a,b) => getBookInfo(a).order - getBookInfo(b).order);
  const card = queue[idx];
  const progress = queue.length > 0 ? Math.round((idx / queue.length) * 100) : 0;

  const S = {
    app: { minHeight: '100vh', background: '#0f0f14', color: '#f0f0f5', fontFamily: 'system-ui,-apple-system,sans-serif', paddingBottom: 72, userSelect: 'none', WebkitUserSelect: 'none' },
    tag: (c) => ({ background: `${c}30`, color: c, borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 600, display: 'inline-block' }),
    btn: (bg, txt) => ({ background: bg, color: txt, border: 'none', borderRadius: 12, padding: '12px 20px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }),
    pill: (active) => ({ background: active ? '#6366f1' : '#1e1e2e', color: active ? '#fff' : '#888', border: `1px solid ${active ? '#6366f1' : '#2a2a3e'}`, borderRadius: 20, padding: '6px 14px', fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap' }),
  };

  if (!loaded) return (
    <div style={{ ...S.app, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ textAlign:'center' }}><div style={{ fontSize:32, marginBottom:12 }}>📖</div><div style={{ color:'#888' }}>로딩 중...</div></div>
    </div>
  );

  if (view === 'import') return <ImportView questions={questions} setQuestions={setQuestions} setView={setView} />;
  if (view === 'manage') return <ManageView questions={questions} setQuestions={setQuestions} setView={setView} bm={bm} setBm={setBm} folders={folders} setFolders={setFolders} />;
  if (view === 'bookmarks') return <BookmarkView questions={questions} bm={bm} setBm={setBm} folders={folders} setFolders={setFolders} startStudy={startStudy} setView={setView} />;

  if (view === 'done') return (
    <div style={{ ...S.app, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ fontSize:56, marginBottom:16 }}>🎉</div>
      <div style={{ fontSize:22, fontWeight:700, marginBottom:8 }}>완료!</div>
      <div style={{ color:'#888', marginBottom:32 }}>{queue.length}문제를 모두 풀었어요</div>
      <button style={{ ...S.btn('#6366f1','#fff'), width:'100%', maxWidth:280 }} onClick={() => setView('home')}>홈으로</button>
      <button style={{ ...S.btn('#1e1e2e','#888'), width:'100%', maxWidth:280, marginTop:10 }} onClick={() => startStudy(queue)}>다시 풀기</button>
    </div>
  );

  if (view === 'study') {
    if (!card) return null;
    const bc = getBookInfo(card.book).color;
    const isBm = bm[card.id];
    const n = normalizeQ(card);
    const type = qType(n);
    const isFill = type === 'fill';
    const isMC = type === 'mc';
    const typeLabel = isFill ? '✏️ 빈칸' : isMC ? '📋 선택형' : '💬 단답형';
    const typeBg = isFill ? '#f59e0b' : isMC ? bc : '#10b981';

    // 참조(애 5 등)는 질문 옆 괄호로 분리, 실제 구절 본문만 박스에 표시
    const { prompt: qPrompt, passage: qPassage, ref: qRef } = extractRef(n);

    const refTag = qRef ? <span style={{ color:'#7a7f99', fontSize:14, fontWeight:500, marginLeft:6, whiteSpace:'nowrap' }}>({qRef})</span> : null;

    // 성경 구절 본문: 질문과 시각적으로 분리된 인용 박스 (참조만 있을 땐 표시 안 함)
    const renderPassage = () => qPassage ? (
      <div style={{ borderLeft:`3px solid ${bc}66`, background:'#ffffff08', borderRadius:'0 10px 10px 0', padding:'12px 14px', marginTop:12, fontSize:15.5, lineHeight:2.0, color:'#cfd3ea' }}>
        {renderWithBlanks(qPassage, typeBg)}
      </div>
    ) : null;

    // 〈보기〉 단어묶음: 질문 속에 제시되는 보기 항목들을 박스로 분리 표시
    const renderWordBank = () => (n.wordBank && n.wordBank.length > 0) ? (
      <div style={{ marginTop:12, borderLeft:`3px solid ${bc}66`, background:'#ffffff08', borderRadius:'0 10px 10px 0', padding:'11px 14px' }}>
        <div style={{ display:'inline-block', background:`${bc}22`, color:bc, fontSize:11, fontWeight:700, borderRadius:6, padding:'2px 9px', marginBottom:8 }}>보기</div>
        <div style={{ fontSize:15, color:'#cfd3ea', lineHeight:1.95, display:'flex', flexWrap:'wrap', gap:'4px 16px' }}>
          {n.wordBank.map((w,i) => <span key={i}>{w}</span>)}
        </div>
      </div>
    ) : null;

    const renderFront = () => {
      if (isMC) {
        return (
          <div>
            {(qPrompt || qRef) && <div style={{ fontSize:16, color:'#e0e3f5', lineHeight:1.85 }}><span style={{ color:'#fff', marginRight:6 }}>▶</span>{renderWithBlanks(qPrompt, typeBg)}{refTag}</div>}
            {renderPassage()}
            {renderWordBank()}
            {/* 선택지: 카드 스타일 */}
            <div style={{ display:'flex', flexDirection:'column', gap:8, marginTop:14 }}>
              {n.choices.map((c,i) => (
                <div key={i} style={{ background:'#0b0b1e', border:'1px solid #1e1e38', borderRadius:10, padding:'9px 13px', display:'flex', gap:11, alignItems:'flex-start' }}>
                  <span style={{ color:'#fff', fontWeight:700, fontSize:15, flexShrink:0, marginTop:2 }}>{i+1}.</span>
                  <span style={{ fontSize:15, color:'#d0d2e8', lineHeight:1.7, flex:1 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }
      // 빈칸 / 단답형
      return (
        <div>
          {(qPrompt || qRef) && <div style={{ fontSize:16, color:'#e0e3f5', lineHeight:isFill?2.1:1.9 }}><span style={{ color:'#fff', marginRight:6 }}>▶</span>{renderWithBlanks(qPrompt, typeBg)}{refTag}</div>}
          {renderPassage()}
          {renderWordBank()}
        </div>
      );
    };

    const renderBack = () => {
      if (isMC) {
        const ci = n.choices.findIndex(c => String(c).trim() === String(n.answer).trim());
        return (
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            {ci >= 0 && <span style={{ background:'#10b98128', color:'#10b981', borderRadius:'50%', width:30, height:30, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:700, flexShrink:0 }}>{ci+1}</span>}
            <span style={{ fontSize:18, color:'#b8ffe0', fontWeight:600, lineHeight:1.7 }}>{n.answer}</span>
          </div>
        );
      }
      if (isFill) {
        const parts = String(n.answer).split(/\s*\/\s*/).filter(Boolean);
        return (
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {parts.map((p,i) => (
              <div key={i} style={{ display:'flex', gap:12, alignItems:'center' }}>
                <span style={{ background:'#10b98128', color:'#10b981', borderRadius:'50%', width:28, height:28, display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, flexShrink:0 }}>{i+1}</span>
                <span style={{ fontSize:17, color:'#b8ffe0', fontWeight:600 }}>{p}</span>
              </div>
            ))}
          </div>
        );
      }
      return <div style={{ fontSize:18, color:'#b8ffe0', fontWeight:600, lineHeight:1.9, whiteSpace:'pre-wrap' }}>{n.answer}</div>;
    };

    if (showList) return (
      <div style={S.app}>
        <div style={{ padding:'14px 16px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid #1e1e2e' }}>
          <button onClick={() => setShowList(false)} style={{ background:'none', border:'none', color:'#6366f1', fontSize:14, cursor:'pointer', fontWeight:600 }}>← 카드로</button>
          <span style={{ flex:1, fontWeight:600, fontSize:14, color:'#ddd' }}>목록 ({idx+1}/{queue.length})</span>
          <button onClick={shuffleNow} style={{ background:'#6366f120', border:'1px solid #6366f140', borderRadius:8, color:'#6366f1', fontSize:12, cursor:'pointer', padding:'6px 10px', fontWeight:600 }}>🔀 섞기</button>
        </div>
        <div style={{ padding:'12px 16px 80px' }}>
          {queue.map((q,i) => (
            <div key={q.id} onClick={() => jumpTo(i)} style={{ background:i===idx?'#6366f115':'#1a1a28', border:`1px solid ${i===idx?'#6366f180':'transparent'}`, borderRadius:10, padding:'11px 14px', marginBottom:8, cursor:'pointer' }}>
              <div style={{ display:'flex', gap:6, alignItems:'center', marginBottom:5, flexWrap:'wrap' }}>
                <span style={{ color:i===idx?'#6366f1':'#555', fontSize:12, fontWeight:700, minWidth:28 }}>#{i+1}</span>
                <span style={{ background:`${getBookInfo(q.book).color}22`, color:getBookInfo(q.book).color, borderRadius:20, padding:'1px 8px', fontSize:10, fontWeight:700 }}>{q.book}</span>
                {bm[q.id] && <span style={{ fontSize:11 }}>⭐</span>}
                {i===idx && <span style={{ color:'#6366f1', fontSize:10, fontWeight:700 }}>▶ 현재</span>}
              </div>
              <div style={{ fontSize:13, color:i===idx?'#c0c0e8':'#777', lineHeight:1.5 }}>{qPreview(q,65)}</div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div style={S.app}>
        <div style={{ padding:'12px 16px 0', position:'relative', overflow:'hidden' }}
          onTouchStart={(e) => { swipeRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - swipeRef.current.x;
            const dy = e.changedTouches[0].clientY - swipeRef.current.y;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) { if (dx < 0) nextQ(); else prevQ(); }
          }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left, w = rect.width;
            if (x < w*0.28) prevQ();
            else if (x > w*0.72) nextQ();
            else setFlipped(f => !f);
          }}>
          <div style={{ position:'absolute', inset:'12px 16px 0', display:'flex', pointerEvents:'none', zIndex:5, borderRadius:20, overflow:'hidden' }}>
            <div style={{ width:'28%', background:'linear-gradient(to right, #ffffff08, transparent)', display:'flex', alignItems:'center', paddingLeft:10 }}><span style={{ color:'#ffffff18', fontSize:22 }}>‹</span></div>
            <div style={{ flex:1 }} />
            <div style={{ width:'28%', background:'linear-gradient(to left, #ffffff08, transparent)', display:'flex', alignItems:'center', justifyContent:'flex-end', paddingRight:10 }}><span style={{ color:'#ffffff18', fontSize:22 }}>›</span></div>
          </div>
          <div style={{ height:420, userSelect:'none', touchAction:'pan-y', position:'relative', transform:slideAnim==='left'?'translateX(-110%)':slideAnim==='right'?'translateX(110%)':'translateX(0)', opacity:slideAnim?0:1, transition:slideAnim?'transform 0.2s ease-in, opacity 0.2s ease-in':'none' }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(155deg,#181828 0%,#11111e 100%)', border:`1.5px solid ${bc}30`, borderRadius:20, padding:'18px 18px 14px', display:'flex', flexDirection:'column', opacity:flipped?0:1, transition:'opacity 0.15s', pointerEvents:flipped?'none':'auto' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14, flexShrink:0 }}>
                <span style={{ color:'#444', fontSize:11, fontWeight:600 }}>Q.{card.id}</span>
                <span style={{ background:`${typeBg}20`, color:typeBg, fontSize:10, fontWeight:700, borderRadius:20, padding:'3px 10px' }}>{typeLabel}</span>
              </div>
              <div style={{ flex:1, overflowY:'auto', WebkitOverflowScrolling:'touch' }}>{renderFront()}</div>
            </div>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(155deg,#0c1a10 0%,#09130c 100%)', border:'1.5px solid #10b98128', borderRadius:20, padding:'18px 18px 14px', display:'flex', flexDirection:'column', opacity:flipped?1:0, transition:'opacity 0.15s', pointerEvents:flipped?'auto':'none' }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18, flexShrink:0 }}>
                <span style={{ background:'#10b98122', color:'#10b981', fontSize:10, fontWeight:700, borderRadius:20, padding:'3px 12px' }}>✓ 정답</span>
              </div>
              <div style={{ flex:1, overflowY:'auto', WebkitOverflowScrolling:'touch' }}>{renderBack()}</div>
            </div>
          </div>
        </div>
        <div style={{ padding:'10px 16px 0', display:'flex', alignItems:'center', gap:6 }}>
          <button onClick={() => setView('home')} style={{ background:'#1e1e2e', border:'1px solid #2a2a3e', borderRadius:10, color:'#aaa', fontSize:13, fontWeight:700, cursor:'pointer', padding:'7px 14px', display:'flex', alignItems:'center', gap:5, flexShrink:0 }}>🏠 홈</button>
          <div style={{ flex:1, padding:'8px 0', cursor:'pointer', position:'relative', touchAction:'none', userSelect:'none' }}
            onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); setDragIdx(getBarIdx(e.clientX)); }}
            onPointerMove={(e) => { if (e.buttons===0) return; setDragIdx(getBarIdx(e.clientX)); }}
            onPointerUp={(e) => { setDragIdx(null); jumpTo(getBarIdx(e.clientX)); }}
            onPointerCancel={() => setDragIdx(null)}>
            {dragIdx !== null && (
              <div style={{ position:'absolute', bottom:'calc(100% + 2px)', left:`clamp(28px, ${Math.round(dragIdx/Math.max(1,queue.length-1)*100)}%, calc(100% - 28px))`, transform:'translateX(-50%)', pointerEvents:'none', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center' }}>
                <div style={{ background:bc, color:'#fff', borderRadius:8, padding:'5px 12px', fontSize:13, fontWeight:700, whiteSpace:'nowrap' }}>{dragIdx+1}번 · {queue[dragIdx]?.book}</div>
                <div style={{ width:0, height:0, borderLeft:'6px solid transparent', borderRight:'6px solid transparent', borderTop:`6px solid ${bc}` }} />
              </div>
            )}
            <div ref={barRef} style={{ background:'#2a2a40', borderRadius:8, height:7, position:'relative' }}>
              <div style={{ width:`${dragIdx!==null?Math.round(dragIdx/Math.max(1,queue.length-1)*100):progress}%`, height:'100%', background:bc, borderRadius:8, transition:dragIdx!==null?'none':'width 0.2s' }} />
              <div style={{ position:'absolute', left:`clamp(8px, ${dragIdx!==null?Math.round(dragIdx/Math.max(1,queue.length-1)*100):progress}%, calc(100% - 8px))`, top:'50%', transform:'translate(-50%,-50%)', width:dragIdx!==null?20:16, height:dragIdx!==null?20:16, borderRadius:'50%', background:bc, boxShadow:`0 0 0 ${dragIdx!==null?5:3}px ${bc}${dragIdx!==null?'55':'40'}`, transition:dragIdx!==null?'none':'left 0.2s', pointerEvents:'none' }} />
            </div>
          </div>
          <button onClick={shuffleNow} style={{ background:'none', border:'none', fontSize:16, cursor:'pointer', padding:'4px 5px', color:'#666' }}>🔀</button>
          <button onClick={() => setShowList(true)} style={{ background:'none', border:'none', fontSize:18, cursor:'pointer', padding:'4px 5px', color:'#666' }}>☰</button>
          <button onClick={() => toggleBm(card.id)} style={{ background:'none', border:'none', fontSize:20, cursor:'pointer', padding:'4px 5px' }}>{isBm?'⭐':'☆'}</button>
        </div>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:8, padding:'6px 0 8px' }}>
          <span style={{ fontSize:14, color:'#aaa', fontWeight:600 }}>{idx+1}</span>
          <span style={{ fontSize:12, color:'#555' }}>/ {queue.length}</span>
          <span style={S.tag(bc)}>{card.book}</span>
        </div>
      </div>
    );
  }

  // ===== 홈 =====
  const toggleBook = (book) => setSelectedBooks(prev => prev.includes(book) ? prev.filter(b=>b!==book) : [...prev, book]);

  return (
    <div style={S.app}>
      <div style={{ padding:'20px 16px 12px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <div style={{ fontSize:22, fontWeight:800, letterSpacing:'-0.5px' }}>📖 KMC 2025성경문제집</div>
          <div style={{ fontSize:12, color:'#888', marginTop:2 }}>{questions.length}문제 · {usedBooks.length}권</div>
        </div>
        <button onClick={() => setView('manage')} style={{ background:'#1e1e2e', border:'1px solid #2a2a3e', borderRadius:10, color:'#aaa', fontSize:13, padding:'8px 12px', cursor:'pointer', fontWeight:600 }}>⚙️ 관리</button>
      </div>
      {questions.length === 0 ? (
        <div style={{ padding:'40px 24px', textAlign:'center' }}>
          <div style={{ fontSize:56, marginBottom:16 }}>📚</div>
          <div style={{ fontSize:18, fontWeight:700, marginBottom:8 }}>문제가 없어요</div>
          <div style={{ color:'#888', fontSize:14, marginBottom:24, lineHeight:1.6 }}>JSON 데이터를 가져오거나<br />직접 문제를 추가해 시작하세요</div>
          <button style={{ ...S.btn('#6366f1','#fff'), width:'100%', maxWidth:280 }} onClick={() => setView('import')}>📥 문제 가져오기</button>
        </div>
      ) : (
        <>
          <div style={{ padding:'0 16px 10px', display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
            <button style={S.pill(shuffleOn)} onClick={() => setShuffleOn(v=>!v)}>🔀 섞기 {shuffleOn?'ON':'OFF'}</button>
            <button style={S.pill(false)} onClick={() => startStudy(questions)}>전체 학습</button>
            {selectMode && selectedBooks.length > 0 && (
              <button style={{ background:'#10b981', color:'#fff', border:'none', borderRadius:20, padding:'6px 14px', fontSize:13, cursor:'pointer', fontWeight:700 }}
                onClick={() => { startStudy(questions.filter(q=>selectedBooks.includes(q.book))); setSelectMode(false); setSelectedBooks([]); }}>
                ▶ {selectedBooks.length}권 ({questions.filter(q=>selectedBooks.includes(q.book)).length}문제) 시작
              </button>
            )}
          </div>
          <div style={{ padding:'0 16px 8px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ fontSize:12, color:'#888', fontWeight:600 }}>성경 권별</div>
            <button onClick={() => { setSelectMode(v=>!v); setSelectedBooks([]); }}
              style={{ background:selectMode?'#6366f120':'transparent', border:`1px solid ${selectMode?'#6366f1':'#2a2a3e'}`, borderRadius:8, color:selectMode?'#6366f1':'#666', fontSize:12, padding:'4px 10px', cursor:'pointer', fontWeight:600 }}>
              {selectMode ? '✕ 취소' : '☑ 선택'}
            </button>
          </div>
          <div style={{ padding:'0 16px' }}>
            {usedBooks.map(book => {
              const info = getBookInfo(book);
              const total = questions.filter(q=>q.book===book).length;
              const isSel = selectedBooks.includes(book);
              return (
                <div key={book}
                  style={{ background:isSel?`${info.color}25`:`${info.color}18`, border:`1px solid ${isSel?info.color:info.color+'40'}`, borderRadius:14, padding:'14px 16px', cursor:'pointer', marginBottom:10, transition:'all 0.15s' }}
                  onClick={() => selectMode ? toggleBook(book) : startStudy(questions.filter(q=>q.book===book))}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      {selectMode && (
                        <div style={{ width:20, height:20, borderRadius:6, border:`2px solid ${isSel?info.color:'#444'}`, background:isSel?info.color:'transparent', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                          {isSel && <span style={{ color:'#fff', fontSize:12, fontWeight:700 }}>✓</span>}
                        </div>
                      )}
                      <span style={{ fontSize:18 }}>{info.emoji}</span>
                      <span style={{ fontWeight:700, fontSize:16 }}>{book}</span>
                      <span style={{ color:'#666', fontSize:13 }}>{total}문제</span>
                    </div>
                    {!selectMode && (
                      <button style={{ background:`${info.color}20`, border:`1px solid ${info.color}40`, borderRadius:8, color:info.color, fontSize:11, padding:'4px 10px', cursor:'pointer', fontWeight:600, flexShrink:0 }}
                        onClick={e => { e.stopPropagation(); startStudy(questions.filter(q=>q.book===book&&bm[q.id])); }}>⭐ 북마크</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      <BottomNav view={view} setView={setView} />
    </div>
  );
}

function BottomNav({ view, setView }) {
  const tabs = [{ id:'home', icon:'🏠', label:'홈' }, { id:'bookmarks', icon:'⭐', label:'북마크' }, { id:'manage', icon:'⚙️', label:'관리' }];
  return (
    <div style={{ position:'fixed', bottom:0, left:0, right:0, background:'#0f0f14', borderTop:'1px solid #1e1e2e', display:'flex', zIndex:100 }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => setView(t.id)} style={{ flex:1, background:'none', border:'none', color:view===t.id?'#6366f1':'#555', padding:'10px 0', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', gap:2 }}>
          <span style={{ fontSize:20 }}>{t.icon}</span>
          <span style={{ fontSize:10, fontWeight:view===t.id?700:400 }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

function BookmarkView({ questions, bm, setBm, folders, setFolders, startStudy, setView }) {
  const [tab, setTab] = useState('all');
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [selectMode, setSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [showMoveMenu, setShowMoveMenu] = useState(false);
  const [folderMenu, setFolderMenu] = useState(null); // { fid, name, x, y } | null
  const [editingFolder, setEditingFolder] = useState(null); // { fid, name } | null
  const longPressTimer = useRef(null);

  const bmCards = questions.filter(q => bm[q.id]);
  const folderList = Object.entries(folders);
  const currentCards = tab === 'all' ? bmCards : bmCards.filter(q => (folders[tab]?.ids||[]).includes(q.id));

  const handleToggleBm = async (id) => {
    const n = { ...bm, [id]: !bm[id] };
    setBm(n); await saveO(SK.BOOKMARKS, n);
    const newF = { ...folders };
    Object.keys(newF).forEach(fid => { newF[fid] = { ...newF[fid], ids: (newF[fid].ids||[]).filter(x=>x!==id) }; });
    setFolders(newF); await saveO(SK.FOLDERS, newF);
  };

  const createFolder = async () => {
    if (!newFolderName.trim()) return;
    const id = 'f_' + Date.now();
    const newF = { ...folders, [id]: { name: newFolderName.trim(), ids: [] } };
    setFolders(newF); await saveO(SK.FOLDERS, newF);
    setNewFolderName(''); setShowNewFolder(false); setTab(id);
  };

  const deleteFolder = async (fid) => {
    const newF = { ...folders }; delete newF[fid];
    setFolders(newF); await saveO(SK.FOLDERS, newF);
    if (tab === fid) setTab('all');
    setFolderMenu(null);
  };

  const renameFolder = async (fid, newName) => {
    if (!newName.trim()) return;
    const newF = { ...folders, [fid]: { ...folders[fid], name: newName.trim() } };
    setFolders(newF); await saveO(SK.FOLDERS, newF);
    setEditingFolder(null); setFolderMenu(null);
  };

  const moveToFolder = async (fid) => {
    const newF = { ...folders };
    if (fid === 'remove') {
      Object.keys(newF).forEach(f => { newF[f] = { ...newF[f], ids: (newF[f].ids||[]).filter(x=>!selectedIds.includes(x)) }; });
    } else {
      const cur = newF[fid]?.ids || [];
      newF[fid] = { ...newF[fid], ids: [...new Set([...cur, ...selectedIds])] };
    }
    setFolders(newF); await saveO(SK.FOLDERS, newF);
    setSelectedIds([]); setSelectMode(false); setShowMoveMenu(false);
  };

  return (
    <div style={{ minHeight:'100vh', background:'#0f0f14', color:'#f0f0f5', fontFamily:'system-ui,-apple-system,sans-serif', paddingBottom:72, userSelect:'none', WebkitUserSelect:'none' }}>
      <div style={{ padding:'20px 16px 12px', borderBottom:'1px solid #1e1e2e' }}>
        <div style={{ fontSize:20, fontWeight:700 }}>⭐ 북마크</div>
        <div style={{ fontSize:12, color:'#888', marginTop:4 }}>{bmCards.length}개 저장됨</div>
      </div>
      <div style={{ display:'flex', gap:6, padding:'10px 16px', overflowX:'auto', scrollbarWidth:'none', borderBottom:'1px solid #1a1a28' }}>
        <button onClick={() => setTab('all')} style={{ background:tab==='all'?'#6366f1':'#1e1e2e', color:tab==='all'?'#fff':'#888', border:`1px solid ${tab==='all'?'#6366f1':'#2a2a3e'}`, borderRadius:20, padding:'6px 14px', fontSize:12, cursor:'pointer', fontWeight:600, whiteSpace:'nowrap' }}>전체 {bmCards.length}</button>
        {folderList.map(([fid, f]) => (
          <button key={fid}
            onClick={() => { if (!folderMenu) setTab(fid); }}
            onTouchStart={(e) => { const r = e.currentTarget.getBoundingClientRect(); longPressTimer.current = setTimeout(() => setFolderMenu({ fid, name: f.name, x: r.left, y: r.bottom + 6 }), 500); }}
            onTouchEnd={() => clearTimeout(longPressTimer.current)}
            onTouchMove={() => clearTimeout(longPressTimer.current)}
            onMouseDown={(e) => { const r = e.currentTarget.getBoundingClientRect(); longPressTimer.current = setTimeout(() => setFolderMenu({ fid, name: f.name, x: r.left, y: r.bottom + 6 }), 600); }}
            onMouseUp={() => clearTimeout(longPressTimer.current)}
            onMouseLeave={() => clearTimeout(longPressTimer.current)}
            style={{ background:tab===fid?'#6366f1':'#1e1e2e', color:tab===fid?'#fff':'#888', border:`1px solid ${tab===fid?'#6366f1':'#2a2a3e'}`, borderRadius:20, padding:'6px 12px', fontSize:12, cursor:'pointer', fontWeight:600, whiteSpace:'nowrap', userSelect:'none', WebkitUserSelect:'none', WebkitTouchCallout:'none' }}>
            📁 {f.name} {(f.ids||[]).filter(id=>bm[id]).length}
          </button>
        ))}
        <button onClick={() => setShowNewFolder(true)} style={{ background:'transparent', border:'1px dashed #2a2a3e', borderRadius:20, color:'#555', padding:'6px 12px', fontSize:12, cursor:'pointer', whiteSpace:'nowrap' }}>+ 새 폴더</button>
      </div>

      {/* 폴더 롱프레스 메뉴 */}
      {folderMenu && (
        <>
          <div style={{ position:'fixed', inset:0, zIndex:199 }} onClick={() => { setFolderMenu(null); setEditingFolder(null); }} />
          <div style={{ position:'fixed', left: Math.min(folderMenu.x, window.innerWidth - 200), top: folderMenu.y, zIndex:200, background:'#1e1e2e', border:'1px solid #2a2a3e', borderRadius:12, overflow:'hidden', width:190, boxShadow:'0 8px 24px #00000080' }}>
            {editingFolder?.fid === folderMenu.fid ? (
              <div style={{ padding:10, display:'flex', flexDirection:'column', gap:6 }}>
                <input value={editingFolder.name} onChange={e => setEditingFolder(v => ({ ...v, name: e.target.value }))}
                  onKeyDown={e => e.key==='Enter' && renameFolder(folderMenu.fid, editingFolder.name)}
                  autoFocus style={{ padding:'8px 10px', background:'#0f0f14', color:'#ddd', border:'1px solid #6366f1', borderRadius:8, fontSize:13, width:'100%', boxSizing:'border-box' }} />
                <div style={{ display:'flex', gap:6 }}>
                  <button onClick={() => setEditingFolder(null)} style={{ flex:1, padding:'7px', background:'#0f0f14', border:'1px solid #2a2a3e', borderRadius:7, color:'#888', fontSize:12, cursor:'pointer' }}>취소</button>
                  <button onClick={() => renameFolder(folderMenu.fid, editingFolder.name)} style={{ flex:2, padding:'7px', background:'#6366f1', border:'none', borderRadius:7, color:'#fff', fontSize:12, cursor:'pointer', fontWeight:700 }}>저장</button>
                </div>
              </div>
            ) : (
              <>
                <button onClick={() => setEditingFolder({ fid: folderMenu.fid, name: folderMenu.name })}
                  style={{ display:'block', width:'100%', padding:'12px 16px', background:'none', border:'none', borderBottom:'1px solid #2a2a3e', color:'#ddd', fontSize:13, cursor:'pointer', textAlign:'left' }}>✏️ 이름 편집</button>
                <button onClick={() => deleteFolder(folderMenu.fid)}
                  style={{ display:'block', width:'100%', padding:'12px 16px', background:'none', border:'none', color:'#f87171', fontSize:13, cursor:'pointer', textAlign:'left' }}>🗑️ 폴더 삭제</button>
              </>
            )}
          </div>
        </>
      )}
      {showNewFolder && (
        <div style={{ padding:'10px 16px', display:'flex', gap:8, borderBottom:'1px solid #1a1a28' }}>
          <input value={newFolderName} onChange={e=>setNewFolderName(e.target.value)} onKeyDown={e=>e.key==='Enter'&&createFolder()} placeholder="폴더 이름" autoFocus
            style={{ flex:1, padding:'8px 12px', background:'#1a1a28', color:'#ddd', border:'1px solid #2a2a3e', borderRadius:8, fontSize:13 }} />
          <button onClick={createFolder} style={{ background:'#6366f1', border:'none', borderRadius:8, color:'#fff', fontSize:13, padding:'8px 14px', cursor:'pointer', fontWeight:600 }}>만들기</button>
          <button onClick={() => { setShowNewFolder(false); setNewFolderName(''); }} style={{ background:'#1e1e2e', border:'1px solid #2a2a3e', borderRadius:8, color:'#888', fontSize:13, padding:'8px 12px', cursor:'pointer' }}>취소</button>
        </div>
      )}
      {currentCards.length > 0 && (
        <div style={{ padding:'8px 16px', display:'flex', flexDirection:'column', gap:6 }}>
          <div style={{ display:'flex', gap:8, alignItems:'center' }}>
            <button onClick={() => startStudy(currentCards)} style={{ background:'#6366f120', border:'1px solid #6366f140', borderRadius:8, color:'#6366f1', fontSize:12, padding:'6px 12px', cursor:'pointer', fontWeight:600 }}>▶ {currentCards.length}문제 학습</button>
            <div style={{ flex:1 }} />
            <button onClick={() => { setSelectMode(v=>!v); setSelectedIds([]); setShowMoveMenu(false); }}
              style={{ background:selectMode?'#6366f120':'transparent', border:`1px solid ${selectMode?'#6366f1':'#2a2a3e'}`, borderRadius:8, color:selectMode?'#6366f1':'#666', fontSize:12, padding:'6px 10px', cursor:'pointer', fontWeight:600 }}>
              {selectMode ? '✕ 취소' : '☑ 선택'}
            </button>
          </div>
          {selectMode && selectedIds.length > 0 && (
            <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
              {tab !== 'all' && (
                <button onClick={() => moveToFolder('remove')}
                  style={{ background:'#dc262620', border:'1px solid #dc262640', borderRadius:8, color:'#f87171', fontSize:12, padding:'6px 12px', cursor:'pointer', fontWeight:600 }}>
                  🗑️ 폴더에서 제거 ({selectedIds.length})
                </button>
              )}
              {tab === 'all' && (
                <button onClick={() => setShowMoveMenu(v=>!v)}
                  style={{ background:'#6366f120', border:'1px solid #6366f140', borderRadius:8, color:'#a5b4fc', fontSize:12, padding:'6px 12px', cursor:'pointer', fontWeight:600 }}>
                  📁 폴더 이동 ({selectedIds.length})
                </button>
              )}
              <button onClick={async () => {
                const newBm = { ...bm };
                selectedIds.forEach(id => { delete newBm[id]; });
                setBm(newBm); await saveO(SK.BOOKMARKS, newBm);
                const newF = { ...folders };
                Object.keys(newF).forEach(fid => { newF[fid] = { ...newF[fid], ids: (newF[fid].ids||[]).filter(x => !selectedIds.includes(x)) }; });
                setFolders(newF); await saveO(SK.FOLDERS, newF);
                setSelectedIds([]); setSelectMode(false);
              }} style={{ background:'#f59e0b20', border:'1px solid #f59e0b40', borderRadius:8, color:'#f59e0b', fontSize:12, padding:'6px 12px', cursor:'pointer', fontWeight:600 }}>
                ☆ 북마크 취소 ({selectedIds.length})
              </button>
            </div>
          )}
        </div>
      )}
      {showMoveMenu && tab === 'all' && (
        <div style={{ margin:'0 16px 8px', background:'#1a1a28', border:'1px solid #2a2a3e', borderRadius:10, overflow:'hidden' }}>
          {folderList.map(([fid,f]) => (
            <button key={fid} onClick={() => moveToFolder(fid)} style={{ display:'block', width:'100%', padding:'10px 14px', background:'none', border:'none', borderBottom:'1px solid #1e1e2e', color:'#ccc', fontSize:13, cursor:'pointer', textAlign:'left' }}>📁 {f.name}으로 이동</button>
          ))}
        </div>
      )}
      <div style={{ padding:'8px 16px 80px' }}>
        {currentCards.length === 0 ? (
          <div style={{ textAlign:'center', padding:'48px 0', color:'#555' }}>
            <div style={{ fontSize:40, marginBottom:12 }}>☆</div>
            <div>{tab==='all' ? '북마크한 문제가 없어요' : '이 폴더에 문제가 없어요'}</div>
            {tab!=='all' && <div style={{ fontSize:12, marginTop:8, color:'#444' }}>전체 탭에서 선택해 이동하세요</div>}
          </div>
        ) : currentCards.map(q => {
          const isSel = selectedIds.includes(q.id);
          return (
            <div key={q.id}
              style={{ background:isSel?'#6366f115':'#1a1a28', border:`1px solid ${isSel?'#6366f180':'transparent'}`, borderRadius:10, padding:'12px 14px', marginBottom:8, cursor:selectMode?'pointer':'default' }}
              onClick={() => selectMode && setSelectedIds(prev => prev.includes(q.id) ? prev.filter(x=>x!==q.id) : [...prev, q.id])}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                  {selectMode && <div style={{ width:18, height:18, borderRadius:5, border:`2px solid ${isSel?'#6366f1':'#444'}`, background:isSel?'#6366f1':'transparent', display:'flex', alignItems:'center', justifyContent:'center' }}>{isSel&&<span style={{ color:'#fff', fontSize:10, fontWeight:700 }}>✓</span>}</div>}
                  <span style={{ background:`${getBookInfo(q.book).color}30`, color:getBookInfo(q.book).color, borderRadius:20, padding:'2px 10px', fontSize:11, fontWeight:600 }}>{q.book}</span>
                </div>
                {!selectMode && <button onClick={() => handleToggleBm(q.id)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:16 }}>⭐</button>}
              </div>
              <div style={{ fontSize:13, color:'#ccc', lineHeight:1.5 }}>{qPreview(q)}</div>
            </div>
          );
        })}
      </div>
      <BottomNav view="bookmarks" setView={setView} />
    </div>
  );
}

function ImportView({ questions, setQuestions, setView }) {
  const [jsonText, setJsonText] = useState('');
  const [mode, setMode] = useState('merge');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [previewCount, setPreviewCount] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (files) => {
    if (!files || files.length === 0) return;
    const fileArray = Array.from(files);
    const invalid = fileArray.find(f => !f.name.endsWith('.json') && f.type !== 'application/json');
    if (invalid) { setError(`"${invalid.name}"은 JSON 파일이 아니에요`); return; }

    const results = [];
    let done = 0;
    fileArray.forEach((file, i) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        results[i] = e.target.result;
        done++;
        if (done === fileArray.length) {
          try {
            const merged = results.flatMap(text => JSON.parse(text));
            merged.sort((a, b) => {
              const ao = (BOOK_INFO[a.book]?.order ?? 999);
              const bo = (BOOK_INFO[b.book]?.order ?? 999);
              return ao !== bo ? ao - bo : a.id.localeCompare(b.id);
            });
            setJsonText(JSON.stringify(merged, null, 2));
          } catch(e) { setError('파일 파싱 오류: ' + e.message); }
        }
      };
      reader.onerror = () => { setError(`"${file.name}" 읽기 오류`); };
      reader.readAsText(file, 'UTF-8');
    });
  };

  useEffect(() => {
    if (!jsonText.trim()) { setPreviewCount(0); setError(''); return; }
    try {
      const data = JSON.parse(jsonText);
      if (!Array.isArray(data)) { setError('JSON은 배열 형식이어야 합니다'); setPreviewCount(0); return; }
      const inv = data.findIndex(item => {
        if (!item || typeof item !== 'object' || !item.id || !item.book) return true;
        const ans = item.answer ?? item.a;                                   // 정답 필수
        const hasQ = item.prompt || item.q || item.passage || (Array.isArray(item.choices) && item.choices.length); // 질문/구절/보기 중 하나
        return !ans || !hasQ;
      });
      if (inv >= 0) { setError(`${inv+1}번째 항목 필드 누락 (id·book·answer 와 prompt/passage/choices 중 하나는 필수)`); setPreviewCount(0); return; }
      setError(''); setPreviewCount(data.length);
    } catch(e) { setError('JSON 오류: ' + e.message); setPreviewCount(0); }
  }, [jsonText]);

  const handleImport = async () => {
    try {
      const data = JSON.parse(jsonText);
      const sortByBible = (arr) => [...arr].sort((a, b) => {
        const ao = BOOK_INFO[a.book]?.order ?? 999;
        const bo = BOOK_INFO[b.book]?.order ?? 999;
        return ao !== bo ? ao - bo : a.id.localeCompare(b.id);
      });
      let newQ;
      if (mode === 'replace') { newQ = sortByBible(data); }
      else {
        const eIds = new Set(questions.map(q=>q.id));
        const toAdd = data.filter(q=>!eIds.has(q.id));
        const uMap = new Map(data.filter(q=>eIds.has(q.id)).map(q=>[q.id,q]));
        newQ = sortByBible([...questions.map(q=>uMap.get(q.id)||q), ...toAdd]);
      }
      const result = await saveQ(newQ);
      if (result.ok) { setQuestions(newQ); setSuccess(`✓ ${data.length}개 ${mode==='replace'?'교체':'추가'}됨`); setJsonText(''); setTimeout(()=>setView('home'),1500); }
      else setError('저장 실패: ' + result.message);
    } catch(e) { setError('가져오기 실패: ' + e.message); }
  };

  const handleExport = () => {
    const json = JSON.stringify(questions, null, 2);
    navigator.clipboard.writeText(json).then(()=>{setSuccess('✓ 복사됨'); setTimeout(()=>setSuccess(''),3000);}).catch(()=>{
      const ta=document.createElement('textarea'); ta.value=json; document.body.appendChild(ta); ta.select();
      try{document.execCommand('copy'); setSuccess('✓ 복사됨');}catch(e){setError('복사 실패');} document.body.removeChild(ta); setTimeout(()=>setSuccess(''),3000);
    });
  };

  const S = { app:{minHeight:'100vh',background:'#0f0f14',color:'#f0f0f5',fontFamily:'system-ui,-apple-system,sans-serif',paddingBottom:80,userSelect:'none',WebkitUserSelect:'none'}, btn:(bg,txt)=>({background:bg,color:txt,border:'none',borderRadius:12,padding:'12px 20px',fontSize:15,fontWeight:600,cursor:'pointer'}) };

  return (
    <div style={S.app}>
      <div style={{ padding:'14px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #1e1e2e' }}>
        <button onClick={() => setView('home')} style={{ background:'none', border:'none', color:'#888', fontSize:22, cursor:'pointer' }}>←</button>
        <span style={{ fontWeight:700, fontSize:17 }}>📥 가져오기 / 내보내기</span>
      </div>
      <div style={{ padding:16 }}>
        <input ref={fileInputRef} type="file" accept=".json,application/json" multiple onChange={e=>{handleFile(e.target.files); e.target.value='';}} style={{ display:'none' }} />
        <div onClick={()=>fileInputRef.current?.click()} onDragOver={e=>{e.preventDefault();setDragOver(true);}} onDragLeave={()=>setDragOver(false)} onDrop={e=>{e.preventDefault();setDragOver(false);handleFile(e.dataTransfer.files);}}
          style={{ border:`2px dashed ${dragOver?'#6366f1':'#2a2a3e'}`, borderRadius:14, padding:'24px 16px', marginBottom:14, textAlign:'center', cursor:'pointer', background:dragOver?'#6366f110':'#0f0f1a' }}>
          <div style={{ fontSize:32, marginBottom:8 }}>📂</div>
          <div style={{ fontSize:14, fontWeight:700, color:'#a5b4fc', marginBottom:4 }}>JSON 파일 선택 (여러 개 가능)</div>
          <div style={{ fontSize:12, color:'#555' }}>클릭하거나 드래그해서 놓으세요 · 여러 파일은 자동으로 합쳐져요</div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
          <div style={{ flex:1, height:1, background:'#1e1e2e' }} /><span style={{ color:'#444', fontSize:12 }}>또는 직접 붙여넣기</span><div style={{ flex:1, height:1, background:'#1e1e2e' }} />
        </div>
        <div style={{ background:'#1a1a28', borderRadius:12, padding:14, marginBottom:16, border:'1px solid #2a2a3e' }}>
          <div style={{ fontSize:13, fontWeight:700, marginBottom:8, color:'#a5b4fc' }}>💡 JSON 형식</div>
          <pre style={{ fontSize:11, color:'#888', margin:0, lineHeight:1.6, overflow:'auto' }}>{`[
  {
    "id": "g01", "book": "창세기",
    "prompt": "빈칸에 들어갈 말은?",
    "passage": "태초에 하나님이 □를 창조하시니라",
    "choices": null,
    "answer": "천지"
  },
  {
    "id": "g02", "book": "창세기",
    "prompt": "사람을 무엇으로 지으셨습니까?",
    "passage": null,
    "choices": ["흙", "물", "불", "빛"],
    "answer": "흙"
  }
]`}</pre>
          <div style={{ fontSize:11, color:'#555', marginTop:8, lineHeight:1.7 }}>· 빈칸은 <span style={{ color:'#f59e0b' }}>□</span> 문자로 직접 표기<br/>· 구절 없으면 passage: null · 단답/빈칸이면 choices: null<br/>· 빈칸 정답 여러 개는 / 로 구분 · 선택형 정답은 보기 내용 그대로</div>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:12 }}>
          <button onClick={()=>setMode('merge')} style={{ flex:1, padding:'10px', borderRadius:10, cursor:'pointer', background:mode==='merge'?'#6366f1':'#1e1e2e', color:mode==='merge'?'#fff':'#888', border:`1px solid ${mode==='merge'?'#6366f1':'#2a2a3e'}`, fontWeight:600, fontSize:13 }}>➕ 추가</button>
          <button onClick={()=>setMode('replace')} style={{ flex:1, padding:'10px', borderRadius:10, cursor:'pointer', background:mode==='replace'?'#dc2626':'#1e1e2e', color:mode==='replace'?'#fff':'#888', border:`1px solid ${mode==='replace'?'#dc2626':'#2a2a3e'}`, fontWeight:600, fontSize:13 }}>🔄 교체</button>
        </div>
        <textarea value={jsonText} onChange={e=>setJsonText(e.target.value)} placeholder='[ { "id":"...", "book":"...", "prompt":"...", "passage":null, "choices":null, "answer":"..." } ]'
          style={{ width:'100%', minHeight:160, padding:12, background:'#0a0a14', color:'#ddd', border:'1px solid #2a2a3e', borderRadius:10, fontSize:12, fontFamily:'monospace', resize:'vertical', boxSizing:'border-box' }} />
        {error && <div style={{ background:'#2d1515', color:'#ff6b6b', padding:'10px 14px', borderRadius:8, fontSize:13, marginTop:10, border:'1px solid #4a1f1f' }}>⚠️ {error}</div>}
        {success && <div style={{ background:'#122a1a', color:'#4ade80', padding:'10px 14px', borderRadius:8, fontSize:13, marginTop:10 }}>{success}</div>}
        {previewCount>0&&!error && <div style={{ background:'#1a1a28', color:'#a5b4fc', padding:'10px 14px', borderRadius:8, fontSize:13, marginTop:10 }}>✓ {previewCount}개 인식됨</div>}
        <button onClick={handleImport} disabled={!jsonText.trim()||!!error} style={{ ...S.btn(jsonText.trim()&&!error?'#6366f1':'#1e1e2e', jsonText.trim()&&!error?'#fff':'#555'), width:'100%', marginTop:12, cursor:jsonText.trim()&&!error?'pointer':'not-allowed' }}>{mode==='replace'?'🔄 교체':'➕ 가져오기'}</button>
        <div style={{ marginTop:28, paddingTop:20, borderTop:'1px solid #1e1e2e' }}>
          <div style={{ fontSize:14, fontWeight:700, marginBottom:8, color:'#aaa' }}>📤 내보내기</div>
          <button onClick={handleExport} disabled={questions.length===0} style={{ ...S.btn(questions.length>0?'#10b981':'#1e1e2e', questions.length>0?'#fff':'#555'), width:'100%', cursor:questions.length>0?'pointer':'not-allowed' }}>📋 클립보드에 복사 ({questions.length}개)</button>
        </div>
      </div>
    </div>
  );
}

function ManageView({ questions, setQuestions, setView, bm, setBm, folders, setFolders }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const usedBooks = [...new Set(questions.map(q=>q.book))].sort((a,b)=>getBookInfo(a).order-getBookInfo(b).order);
  const filtered = questions
    .filter(q=>filter==='all'||q.book===filter)
    .filter(q=>!search||qText(q).includes(search)||aText(q).includes(search)||q.id.includes(search))
    .sort((a,b)=>{ const ao=getBookInfo(a.book).order,bo=getBookInfo(b.book).order; return ao!==bo?ao-bo:a.id.localeCompare(b.id); });

  const handleDelete = async (id) => {
    if (!confirm('이 문제를 삭제할까요?')) return;
    const newQ = questions.filter(q=>q.id!==id);
    await saveQ(newQ); setQuestions(newQ);
    const nb = {...bm}; delete nb[id]; setBm(nb); await saveO(SK.BOOKMARKS, nb);
    const nf = {...folders}; Object.keys(nf).forEach(fid=>{nf[fid]={...nf[fid],ids:(nf[fid].ids||[]).filter(x=>x!==id)};});
    setFolders(nf); await saveO(SK.FOLDERS, nf);
  };

  const handleSave = async (q) => {
    const isNew = !questions.find(x=>x.id===q.id);
    const newQ = isNew ? [...questions, q] : questions.map(x=>x.id===q.id?q:x);
    const r = await saveQ(newQ);
    if (r.ok) { setQuestions(newQ); setEditing(null); } else alert('저장 실패: '+r.message);
  };

  const handleReset = async () => {
    await sd(SK.QUESTIONS); await sd(SK.BOOKMARKS); await sd(SK.FOLDERS);
    setQuestions([]); setBm({}); setFolders({}); setShowResetConfirm(false); setView('home');
  };

  const S = { app:{minHeight:'100vh',background:'#0f0f14',color:'#f0f0f5',fontFamily:'system-ui,-apple-system,sans-serif',paddingBottom:80,userSelect:'none',WebkitUserSelect:'none'}, btn:(bg,txt)=>({background:bg,color:txt,border:'none',borderRadius:12,padding:'12px 20px',fontSize:15,fontWeight:600,cursor:'pointer'}), pill:(a,c='#6366f1')=>({background:a?c:'#1e1e2e',color:a?'#fff':'#888',border:`1px solid ${a?c:'#2a2a3e'}`,borderRadius:20,padding:'6px 12px',fontSize:12,cursor:'pointer',whiteSpace:'nowrap',fontWeight:600}) };

  if (editing) return <EditView question={editing==='new'?null:editing} questions={questions} onSave={handleSave} onCancel={()=>setEditing(null)} />;

  return (
    <div style={S.app}>
      <div style={{ padding:'14px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #1e1e2e' }}>
        <button onClick={()=>setView('home')} style={{ background:'none', border:'none', color:'#888', fontSize:22, cursor:'pointer' }}>←</button>
        <span style={{ fontWeight:700, fontSize:17, flex:1 }}>⚙️ 문제 관리</span>
        <button onClick={()=>setEditing('new')} style={{ background:'#6366f1', border:'none', borderRadius:10, color:'#fff', fontSize:13, padding:'7px 14px', cursor:'pointer', fontWeight:700 }}>+ 추가</button>
      </div>
      <div style={{ padding:16 }}>
        <button onClick={()=>setView('import')} style={{ ...S.btn('#1e1e2e','#a5b4fc'), width:'100%', fontSize:13, padding:'10px', border:'1px solid #2a2a3e', marginBottom:16 }}>📥 가져오기 / 내보내기</button>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 ID, 문제, 정답 검색..."
          style={{ width:'100%', padding:10, marginBottom:12, background:'#1a1a28', color:'#ddd', border:'1px solid #2a2a3e', borderRadius:10, fontSize:13, boxSizing:'border-box' }} />
        <div style={{ display:'flex', gap:6, overflowX:'auto', marginBottom:12, scrollbarWidth:'none', paddingBottom:4 }}>
          <button onClick={()=>setFilter('all')} style={S.pill(filter==='all')}>전체 ({questions.length})</button>
          {usedBooks.map(book=><button key={book} onClick={()=>setFilter(book)} style={S.pill(filter===book,getBookInfo(book).color)}>{book} ({questions.filter(q=>q.book===book).length})</button>)}
        </div>
        <div style={{ fontSize:12, color:'#666', marginBottom:8 }}>{filtered.length}개</div>
        {filtered.slice(0,100).map(q=>(
          <div key={q.id} style={{ background:'#1a1a28', borderRadius:10, padding:'11px 13px', marginBottom:7, border:'1px solid #20202e' }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:6, flexWrap:'wrap' }}>
              <span style={{ background:`${getBookInfo(q.book).color}22`, color:getBookInfo(q.book).color, borderRadius:20, padding:'1px 8px', fontSize:10, fontWeight:700 }}>{q.book}</span>
              <span style={{ color:'#555', fontSize:11, fontFamily:'monospace' }}>{q.id}</span>
              <div style={{ flex:1 }} />
              <button onClick={()=>setEditing(q)} style={{ background:'none', border:'none', color:'#888', cursor:'pointer', fontSize:12, padding:'2px 6px' }}>✏️</button>
              <button onClick={()=>handleDelete(q.id)} style={{ background:'none', border:'none', color:'#666', cursor:'pointer', fontSize:12, padding:'2px 6px' }}>🗑️</button>
            </div>
            <div style={{ fontSize:13, color:'#bbb', lineHeight:1.5, marginBottom:4 }}>{qPreview(q,80)}</div>
            <div style={{ fontSize:12, color:'#10b981a0' }}>→ {aText(q).slice(0,60)}{aText(q).length>60?'…':''}</div>
          </div>
        ))}
        {filtered.length>100&&<div style={{ textAlign:'center', color:'#555', fontSize:13, padding:16 }}>상위 100개만 표시</div>}
        {filtered.length===0&&<div style={{ textAlign:'center', padding:40, color:'#555' }}>{questions.length===0?'문제가 없어요':'검색 결과 없음'}</div>}
        <div style={{ marginTop:32, paddingTop:20, borderTop:'1px solid #1e1e2e' }}>
          <div style={{ fontSize:13, color:'#888', marginBottom:10, fontWeight:600 }}>⚠️ 위험 구역</div>
          {!showResetConfirm ? (
            <button onClick={()=>setShowResetConfirm(true)} style={{ ...S.btn('#1e1e2e','#dc2626'), width:'100%', fontSize:13, border:'1px solid #4a1f1f' }}>🗑️ 모든 데이터 초기화</button>
          ) : (
            <div style={{ background:'#2d1515', borderRadius:10, padding:14, border:'1px solid #4a1f1f' }}>
              <div style={{ color:'#ff6b6b', fontSize:13, marginBottom:10, fontWeight:600 }}>모든 문제·북마크·폴더를 삭제할까요?</div>
              <div style={{ display:'flex', gap:8 }}>
                <button onClick={handleReset} style={{ ...S.btn('#dc2626','#fff'), flex:1, fontSize:13 }}>네, 초기화</button>
                <button onClick={()=>setShowResetConfirm(false)} style={{ ...S.btn('#1e1e2e','#888'), flex:1, fontSize:13 }}>취소</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EditView({ question, questions, onSave, onCancel }) {
  const init = question ? normalizeQ(question) : null;
  const [id, setId] = useState(question?.id||'');
  const [book, setBook] = useState(question?.book||'창세기');
  const [prompt, setPrompt] = useState(init?.prompt||'');
  const [passage, setPassage] = useState(init?.passage||'');
  const [choicesText, setChoicesText] = useState((init?.choices||[]).join('\n'));
  const [wordBankText, setWordBankText] = useState((init?.wordBank||[]).join('\n'));
  const [answer, setAnswer] = useState(init?.answer||'');
  const [error, setError] = useState('');
  const passageRef = useRef(null);
  const isNew = !question;

  const choices = choicesText.split('\n').map(s=>s.trim()).filter(Boolean);
  const wordBank = wordBankText.split('\n').map(s=>s.trim()).filter(Boolean);
  const isMC = choices.length > 0;
  const hasBlank = /□/.test(prompt) || /□/.test(passage);
  const type = isMC ? '📋 선택형' : hasBlank ? '✏️ 빈칸' : '💬 단답형';

  // 커서 위치에 □ 삽입 (구절칸)
  const insertBox = () => {
    const el = passageRef.current;
    if (!el) { setPassage(p=>p+'□'); return; }
    const s = el.selectionStart ?? passage.length, e = el.selectionEnd ?? passage.length;
    const next = passage.slice(0,s) + '□' + passage.slice(e);
    setPassage(next);
    requestAnimationFrame(()=>{ el.focus(); el.setSelectionRange(s+1, s+1); });
  };

  const handleSave = () => {
    if (!id.trim()) { setError('ID를 입력하세요'); return; }
    if (!prompt.trim() && !passage.trim()) { setError('질문이나 성경 구절 중 하나는 입력하세요'); return; }
    if (!answer.trim()) { setError('정답을 입력하세요'); return; }
    if (isNew && questions.find(x=>x.id===id.trim())) { setError(`ID "${id.trim()}"가 이미 존재합니다`); return; }
    if (isMC && !choices.some(c=>c===answer.trim())) { setError('선택형은 정답이 보기 중 하나와 정확히 일치해야 합니다'); return; }
    onSave({
      id: id.trim(),
      book,
      prompt: prompt.trim(),
      passage: passage.trim() || null,
      wordBank: wordBank.length ? wordBank : null,
      choices: isMC ? choices : null,
      answer: answer.trim(),
    });
  };

  const allBooks = Object.keys(BOOK_INFO).sort((a,b)=>BOOK_INFO[a].order-BOOK_INFO[b].order);
  const S = { app:{minHeight:'100vh',background:'#0f0f14',color:'#f0f0f5',fontFamily:'system-ui,-apple-system,sans-serif',paddingBottom:80,userSelect:'none',WebkitUserSelect:'none'}, btn:(bg,txt)=>({background:bg,color:txt,border:'none',borderRadius:12,padding:'12px 20px',fontSize:15,fontWeight:600,cursor:'pointer'}), label:{fontSize:12,color:'#888',marginBottom:6,fontWeight:600,display:'block'}, input:{width:'100%',padding:11,background:'#1a1a28',color:'#ddd',border:'1px solid #2a2a3e',borderRadius:10,fontSize:14,boxSizing:'border-box',marginBottom:14}, hint:{fontSize:11,color:'#555',marginTop:-8,marginBottom:14,lineHeight:1.6} };

  return (
    <div style={S.app}>
      <div style={{ padding:'14px 16px', display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid #1e1e2e' }}>
        <button onClick={onCancel} style={{ background:'none', border:'none', color:'#888', fontSize:22, cursor:'pointer' }}>←</button>
        <span style={{ fontWeight:700, fontSize:17, flex:1 }}>{isNew?'+ 문제 추가':'✏️ 문제 편집'}</span>
        <span style={{ background:'#1e1e2e', color:'#a5b4fc', fontSize:11, fontWeight:700, borderRadius:20, padding:'4px 10px' }}>{type}</span>
      </div>
      <div style={{ padding:16 }}>
        <label style={S.label}>ID</label>
        <input value={id} onChange={e=>setId(e.target.value)} placeholder="예: g01" disabled={!isNew} style={{ ...S.input, opacity:isNew?1:0.5 }} />
        <label style={S.label}>책 이름</label>
        <select value={book} onChange={e=>setBook(e.target.value)} style={S.input}>
          <optgroup label="── 구약 ──">{allBooks.filter(b=>BOOK_INFO[b].testament==='OT').map(b=><option key={b} value={b}>{BOOK_INFO[b].emoji} {b}</option>)}</optgroup>
          <optgroup label="── 신약 ──">{allBooks.filter(b=>BOOK_INFO[b].testament==='NT').map(b=><option key={b} value={b}>{BOOK_INFO[b].emoji} {b}</option>)}</optgroup>
        </select>

        <label style={S.label}>질문 (prompt)</label>
        <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="예: 다음 빈칸에 들어갈 말은 무엇입니까?" style={{ ...S.input, minHeight:64, resize:'vertical', fontFamily:'inherit' }} />

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
          <label style={{ ...S.label, marginBottom:0 }}>성경 구절 (passage · 선택)</label>
          <button onClick={insertBox} style={{ background:'#f59e0b20', border:'1px solid #f59e0b55', borderRadius:8, color:'#f59e0b', fontSize:12, padding:'4px 10px', cursor:'pointer', fontWeight:700 }}>□ 빈칸 삽입</button>
        </div>
        <textarea ref={passageRef} value={passage} onChange={e=>setPassage(e.target.value)} placeholder="예: 태초에 하나님이 □를 창조하시니라  (없으면 비워두세요)" style={{ ...S.input, minHeight:64, resize:'vertical', fontFamily:'inherit' }} />
        <div style={S.hint}>· 질문과 별도로 표시돼요. 빈칸은 <span style={{ color:'#f59e0b' }}>□</span> 문자로 직접 넣으세요.<br/>· "애 5", "창 1:1" 같은 짧은 성경 참조만 적으면 질문 옆 괄호로 표시돼요.</div>

        <label style={S.label}>보기 〈단어묶음〉 (한 줄에 하나 · 선택)</label>
        <textarea value={wordBankText} onChange={e=>setWordBankText(e.target.value)} placeholder={"㉮ 피\n㉯ 눈\n㉰ 재\n(없으면 비워두세요)"} style={{ ...S.input, minHeight:wordBankText?72:44, resize:'vertical', fontFamily:'inherit' }} />
        <div style={S.hint}>· 질문 속 〈보기〉로 제시되는 항목들이에요. 박스로 따로 표시됩니다. (선택지와 다름)</div>

        <label style={S.label}>선택지 (choices · 한 줄에 하나, 비우면 단답/빈칸)</label>
        <textarea value={choicesText} onChange={e=>setChoicesText(e.target.value)} placeholder={"흙\n물\n불\n빛"} style={{ ...S.input, minHeight:choicesText?80:48, resize:'vertical', fontFamily:'inherit' }} />
        {isMC && <div style={S.hint}>· 번호(1·2·3…)는 앱이 자동으로 붙여요.</div>}

        <label style={S.label}>정답 (answer)</label>
        <textarea value={answer} onChange={e=>setAnswer(e.target.value)} placeholder={isMC ? '선택지 내용 그대로 (예: 흙)' : '빈칸 여러 개는 / 로 구분 (예: 천지 / 땅)'} style={{ ...S.input, minHeight:60, resize:'vertical', fontFamily:'inherit' }} />

        {error && <div style={{ background:'#2d1515', color:'#ff6b6b', padding:'10px 14px', borderRadius:8, fontSize:13, marginBottom:12, border:'1px solid #4a1f1f' }}>⚠️ {error}</div>}
        <div style={{ display:'flex', gap:10, marginTop:8 }}>
          <button onClick={onCancel} style={{ ...S.btn('#1e1e2e','#888'), flex:1 }}>취소</button>
          <button onClick={handleSave} style={{ ...S.btn('#6366f1','#fff'), flex:2 }}>{isNew?'추가':'저장'}</button>
        </div>
      </div>
    </div>
  );
}
