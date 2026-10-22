/* ==========================================================================
   BLOXQUEST 🎮 — Lógica do Questionário de 13 Fases, Sons 8-Bit & Analytics
   ========================================================================== */

const QUESTIONS = [
  {
    id: "q1",
    number: 1,
    title: "1. Qual é a sua idade?",
    subtitle: "Escolha o bloco da sua faixa de idade!",
    type: "single",
    options: [
      { label: "6 a 8 anos", emoji: "🐣" },
      { label: "9 a 11 anos", emoji: "⚡" },
      { label: "12 a 14 anos", emoji: "🔥" },
      { label: "15 a 17 anos", emoji: "👑" }
    ]
  },
  {
    id: "q2",
    number: 2,
    title: "2. Com que frequência você joga Roblox?",
    subtitle: "Quantas vezes você entra no Roblox para jogar?",
    type: "single",
    options: [
      { label: "Todos os dias", emoji: "🚀" },
      { label: "Algumas vezes por semana", emoji: "🎮" },
      { label: "Só nos finais de semana", emoji: "🎉" },
      { label: "Raramente", emoji: "🌙" }
    ]
  },
  {
    id: "q3",
    number: 3,
    title: "3. Quais jogos você mais gosta de jogar?",
    subtitle: "Pode marcar TODOS os seus favoritos!",
    type: "multi",
    hasOther: true,
    otherKey: "q3_other",
    options: [
      { label: "Brookhaven", emoji: "🏡" },
      { label: "Blox Fruits", emoji: "🏴‍☠️" },
      { label: "Adopt Me!", emoji: "🐶" },
      { label: "Dress to Impress", emoji: "👗" },
      { label: "Grow a Garden", emoji: "🌱" },
      { label: "99 Nights in the Forest", emoji: "🌲" },
      { label: "Outro", emoji: "✨" }
    ]
  },
  {
    id: "q4",
    number: 4,
    title: "4. O que você mais gosta de fazer nos jogos?",
    subtitle: "Pode escolher uma ou mais opções!",
    type: "multi",
    options: [
      { label: "Explorar e descobrir lugares", emoji: "🗺️" },
      { label: "Lutar e enfrentar desafios", emoji: "⚔️" },
      { label: "Construir e personalizar", emoji: "🧱" },
      { label: "Cuidar de animais ou personagens", emoji: "🐾" },
      { label: "Jogar com amigos", emoji: "🤝" },
      { label: "Completar missões e ganhar recompensas", emoji: "🏆" }
    ]
  },
  {
    id: "q5",
    number: 5,
    title: "5. Você prefere jogar:",
    subtitle: "Como é mais divertido para você?",
    type: "single",
    options: [
      { label: "Sozinho(a)", emoji: "🎧" },
      { label: "Com amigos", emoji: "👯" },
      { label: "Com outras pessoas online", emoji: "🌍" },
      { label: "Tanto faz", emoji: "😎" }
    ]
  },
  {
    id: "q6",
    number: 6,
    title: "6. O que faz você continuar jogando?",
    subtitle: "Pode marcar mais de uma opção!",
    type: "multi",
    options: [
      { label: "Ganhar itens e recompensas", emoji: "🎁" },
      { label: "Desbloquear novos lugares", emoji: "🔓" },
      { label: "Subir de nível", emoji: "⬆️" },
      { label: "Jogar com amigos", emoji: "💬" },
      { label: "Novidades e atualizações", emoji: "🌟" }
    ]
  },
  {
    id: "q7",
    number: 7,
    title: "7. O que mais te incomoda nos jogos do Roblox?",
    subtitle: "O que deixa o jogo chato? (Pode escolher mais de um)",
    type: "multi",
    hasOther: true,
    otherKey: "q7_other",
    options: [
      { label: "Jogos repetitivos", emoji: "🔁" },
      { label: "Demorar para evoluir", emoji: "🐢" },
      { label: "Ter que gastar Robux", emoji: "💸" },
      { label: "Muitos bugs", emoji: "🐛" },
      { label: "Poucas novidades", emoji: "😴" },
      { label: "Outro", emoji: "❗" }
    ]
  },
  {
    id: "q8",
    number: 8,
    title: "8. Qual tipo de jogo novo você gostaria de experimentar?",
    subtitle: "Escolha os estilos que você mais quer jogar!",
    type: "multi",
    hasOther: true,
    otherKey: "q8_other",
    options: [
      { label: "Aventura e mundo aberto", emoji: "🌍" },
      { label: "Mistério e investigação", emoji: "🕵️" },
      { label: "Simulador de vida", emoji: "🏠" },
      { label: "Sobrevivência", emoji: "🏕️" },
      { label: "Construção e criatividade", emoji: "🎨" },
      { label: "Competição e desafios", emoji: "🏁" },
      { label: "Outro", emoji: "🚀" }
    ]
  },
  {
    id: "q9",
    number: 9,
    title: "9. Você jogaria um jogo que misturasse vários estilos?",
    subtitle: "Por exemplo: aventura + cuidar de pets + mistério no mesmo jogo!",
    type: "single",
    options: [
      { label: "Sim, com certeza!", emoji: "🤩" },
      { label: "Talvez", emoji: "🤔" },
      { label: "Prefiro jogos de um estilo só", emoji: "🎯" }
    ]
  },
  {
    id: "q10",
    number: 10,
    title: "10. O que faria você experimentar um jogo novo?",
    subtitle: "Como você descobre jogos legais no Roblox?",
    type: "multi",
    options: [
      { label: "Indicação dos amigos", emoji: "🗣️" },
      { label: "Vídeo no TikTok ou YouTube", emoji: "📱" },
      { label: "Uma ideia diferente", emoji: "💡" },
      { label: "Personagens e cenários bonitos", emoji: "🌈" },
      { label: "Recompensas e eventos", emoji: "🎉" }
    ]
  },
  {
    id: "q11",
    number: 11,
    title: "11. Se você pudesse inventar um jogo no Roblox, como ele seria?",
    subtitle: "Use a imaginação! Conta sobre o mapa, poderes, missões ou personagens:",
    type: "open",
    placeholder: "Ex.: Seria um jogo onde a gente constrói uma base mágica com os amigos, cuida de dragões e enfrenta desafios à noite..."
  },
  {
    id: "q12",
    number: 12,
    title: "12. O que você gostaria que existisse nos jogos do Roblox, mas ainda não encontrou?",
    subtitle: "Algum poder, item, modo de jogo ou ideia que você nunca viu?",
    type: "open",
    placeholder: "Ex.: Queria que desse para juntar vários mundos diferentes ou ganhar roupas brilhantes fazendo missões em dupla..."
  },
  {
    id: "q13",
    number: 13,
    title: "13. O que faria você chamar seus amigos para jogar um jogo novo?",
    subtitle: "Última fase para ganhar seu Troféu de Criador Mestre! 🏆",
    type: "open",
    placeholder: "Ex.: Se tiver missões em equipe, presentes para quem entra com amigos e segredos escondidos no mapa!"
  }
];

const SEED_FALLBACK = [
  {
    id: "resp-seed-1",
    playerNick: "LukiBlox_BR",
    avatarColor: "#00A2FF",
    createdAt: "22/10/2026 09:15",
    isSample: true,
    answers: {
      q1: "9 a 11 anos",
      q2: "Todos os dias",
      q3: ["Brookhaven", "Blox Fruits", "99 Nights in the Forest"],
      q4: ["Explorar e descobrir lugares", "Jogar com amigos", "Completar missões e ganhar recompensas"],
      q5: "Com amigos",
      q6: ["Ganhar itens e recompensas", "Jogar com amigos", "Novidades e atualizações"],
      q7: ["Ter que gastar Robux", "Demorar para evoluir"],
      q8: ["Aventura e mundo aberto", "Mistério e investigação", "Sobrevivência"],
      q9: "Sim, com certeza!",
      q10: ["Indicação dos amigos", "Vídeo no TikTok ou YouTube", "Recompensas e eventos"],
      q11: "Um jogo de acampamento secreto onde de dia a gente constrói cabanas e cuida de pets dragões, e de noite aparece um mistério na floresta para resolver em equipe!",
      q12: "Poder juntar construções dos amigos num mesmo mapa gigante sem precisar pagar Robux nos servidores privados.",
      q13: "Se tiver missões em dupla que dão itens brilhantes grátis para o avatar e segredos escondidos no mapa!"
    }
  },
  {
    id: "resp-seed-2",
    playerNick: "bia_starblocks",
    avatarColor: "#FF3E9D",
    createdAt: "22/10/2026 09:42",
    isSample: true,
    answers: {
      q1: "9 a 11 anos",
      q2: "Todos os dias",
      q3: ["Brookhaven", "Adopt Me!", "Dress to Impress", "Grow a Garden"],
      q4: ["Construir e personalizar", "Cuidar de animais ou personagens", "Jogar com amigos"],
      q5: "Com amigos",
      q6: ["Ganhar itens e recompensas", "Desbloquear novos lugares", "Novidades e atualizações"],
      q7: ["Ter que gastar Robux", "Muitos bugs"],
      q8: ["Simulador de vida", "Construção e criatividade", "Mistério e investigação"],
      q9: "Sim, com certeza!",
      q10: ["Vídeo no TikTok ou YouTube", "Personagens e cenários bonitos", "Indicação dos amigos"],
      q11: "Uma cidade colorida onde você cria sua loja de roupas e doces, adota bichinhos mágicos e tem desfiles com temas surpresa!",
      q12: "Mais roupas e acessórios fofos que a gente ganha fazendo missão em vez de comprar com Robux.",
      q13: "Poder morar na mesma casa ou abrir uma loja juntas dentro do jogo!"
    }
  },
  {
    id: "resp-seed-3",
    playerNick: "PedroGamer_77",
    avatarColor: "#00E676",
    createdAt: "22/10/2026 10:05",
    isSample: true,
    answers: {
      q1: "12 a 14 anos",
      q2: "Algumas vezes por semana",
      q3: ["Blox Fruits", "Grow a Garden", "99 Nights in the Forest"],
      q3_other: "Doors",
      q4: ["Lutar e enfrentar desafios", "Completar missões e ganhar recompensas", "Explorar e descobrir lugares"],
      q5: "Com amigos",
      q6: ["Subir de nível", "Ganhar itens e recompensas", "Novidades e atualizações"],
      q7: ["Jogos repetitivos", "Demorar para evoluir", "Ter que gastar Robux"],
      q8: ["Aventura e mundo aberto", "Sobrevivência", "Competição e desafios"],
      q9: "Sim, com certeza!",
      q10: ["Uma ideia diferente", "Indicação dos amigos", "Vídeo no TikTok ou YouTube"],
      q11: "Um jogo que mistura sobrevivência na ilha com poderes elementais e construção de fortalezas contra chefões.",
      q12: "Modo história cooperativo que não fique só repetindo a mesma missão mil vezes para subir de nível.",
      q13: "Batalhas de clãs ou desafios onde cada amigo tem um poder diferente para vencer o boss!"
    }
  },
  {
    id: "resp-seed-4",
    playerNick: "Manu_Kawaii08",
    avatarColor: "#FFB300",
    createdAt: "22/10/2026 10:30",
    isSample: true,
    answers: {
      q1: "6 a 8 anos",
      q2: "Só nos finais de semana",
      q3: ["Adopt Me!", "Brookhaven", "Dress to Impress"],
      q4: ["Cuidar de animais ou personagens", "Explorar e descobrir lugares", "Jogar com amigos"],
      q5: "Com amigos",
      q6: ["Ganhar itens e recompensas", "Desbloquear novos lugares"],
      q7: ["Ter que gastar Robux", "Poucas novidades"],
      q8: ["Simulador de vida", "Aventura e mundo aberto", "Construção e criatividade"],
      q9: "Sim, com certeza!",
      q10: ["Personagens e cenários bonitos", "Indicação dos amigos", "Recompensas e eventos"],
      q11: "Um parque de diversões gigante de pets onde os cachorrinhos e gatinhos voam e ganham poderes de arco-íris!",
      q12: "Mais minigames fáceis para brincar com os bichinhos.",
      q13: "Se tiver presentes surpresa quando a gente entra com um amigo!"
    }
  }
];

let allResponses = [];
let currentStep = 0;
let playerNick = "";
let avatarColor = "#00A2FF";
let currentAnswers = {};
let soundEnabled = true;

const MAX_ANSWERS_PER_IP = 2;
let detectedClientIp = "local-device";
let serverRemainingForIp = MAX_ANSWERS_PER_IP;
let isAdminUnlocked = sessionStorage.getItem("bloxquest_admin_unlocked") === "true";

// URL opcional do Firebase Realtime Database para GitHub Pages (pode ser preenchida aqui ou no painel)
const DEFAULT_CLOUD_DB_URL = "";

function getCloudDbUrl() {
  const raw = (localStorage.getItem("bloxquest_cloud_db_url") || DEFAULT_CLOUD_DB_URL).trim();
  return raw ? raw.replace(/\/+$/, "") : "";
}

/* ==========================================================================
   EFEITOS SONOROS DE VIDEOGAME / ROBLOX (WEB AUDIO API — ZERO ARQUIVOS EXTERNOS)
   ========================================================================== */
function playGameSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === "click") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.09);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === "next") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(587.33, now + 0.07);
      osc.frequency.setValueAtTime(880, now + 0.14);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "victory") {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.setValueAtTime(freq, now + idx * 0.1);
        g.gain.setValueAtTime(0.16, now + idx * 0.1);
        g.gain.linearRampToValueAtTime(0.01, now + idx * 0.1 + 0.22);
        o.start(now + idx * 0.1);
        o.stop(now + idx * 0.1 + 0.22);
      });
    }
  } catch (_) {}
}

function showBloxToast(msg) {
  const el = document.getElementById("bloxToast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 3200);
}

/* ==========================================================================
   CONTROLE DE LIMITE DE 2 RESPOSTAS POR IP + DISPOSITIVO
   ========================================================================== */
async function detectPublicIp() {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    if (res.ok) {
      const data = await res.json();
      if (data.ip) detectedClientIp = data.ip;
    }
  } catch (_) {}
}

function getIpUsageCount() {
  const ipMap = JSON.parse(localStorage.getItem("bloxquest_ip_counts") || "{}");
  const localCount = Number(ipMap[detectedClientIp] || 0);
  const dbCount = allResponses.filter((r) => !r.isSample && r.clientIp === detectedClientIp).length;
  return Math.max(localCount, dbCount);
}

function incrementLocalIpUsage() {
  const ipMap = JSON.parse(localStorage.getItem("bloxquest_ip_counts") || "{}");
  ipMap[detectedClientIp] = (Number(ipMap[detectedClientIp]) || 0) + 1;
  localStorage.setItem("bloxquest_ip_counts", JSON.stringify(ipMap));
}

function updateIpStatusUI() {
  const used = getIpUsageCount();
  const remaining = Math.max(0, MAX_ANSWERS_PER_IP - used);
  const badge = document.getElementById("ipStatusBadge");
  const startBtn = document.getElementById("startMissionBtn");
  if (!badge || !startBtn) return;

  if (remaining === 0) {
    badge.classList.add("blocked");
    badge.innerHTML = `🛑 <strong>Limite atingido neste IP (${detectedClientIp}):</strong> As 2 respostas permitidas já foram enviadas!`;
    startBtn.innerHTML = `<span>🔒 MISSÃO JÁ CONCLUÍDA (2/2 RESPOSTAS)</span>`;
    startBtn.style.opacity = "0.75";
  } else {
    badge.classList.remove("blocked");
    badge.innerHTML = `🛡️ <strong>Proteção por IP (${detectedClientIp}):</strong> Você ainda pode enviar <strong>${remaining} de ${MAX_ANSWERS_PER_IP}</strong> respostas.`;
    startBtn.innerHTML = `<span>▶ COMEÇAR MISSÃO AGORA! (${remaining}/2 restantes)</span>`;
    startBtn.style.opacity = "1";
  }
}

/* ==========================================================================
   CARREGAMENTO E SALVAMENTO DE RESPOSTAS (SERVIDOR LOCAL + FALLBACK NUVEM/LOCAL)
   ========================================================================== */
async function fetchAllResponses() {
  await detectPublicIp();

  // 1. Se houver Banco na Nuvem configurado (Ideal para GitHub Pages!)
  const cloudDb = getCloudDbUrl();
  if (cloudDb) {
    try {
      const res = await fetch(`${cloudDb}/responses.json`);
      if (res.ok) {
        const data = await res.json();
        const cloudList = data ? Object.values(data).reverse() : [];
        allResponses = cloudList.length > 0 ? cloudList : [...SEED_FALLBACK];
        localStorage.setItem("bloxquest_responses_backup", JSON.stringify(allResponses));
        updateBadgeCount();
        updateIpStatusUI();
        return;
      }
    } catch (_) {}
  }

  // 2. Servidor Ruby Local (/api/responses)
  try {
    const res = await fetch(`/api/responses?ip=${encodeURIComponent(detectedClientIp)}`);
    if (res.ok) {
      const data = await res.json();
      allResponses = data.responses || [];
      if (data.clientIp) detectedClientIp = data.clientIp;
      localStorage.setItem("bloxquest_responses_backup", JSON.stringify(allResponses));
      updateBadgeCount();
      updateIpStatusUI();
      return;
    }
  } catch (_) {}

  // 3. Fallback LocalStorage
  const local = localStorage.getItem("bloxquest_responses_backup");
  if (local) {
    try {
      allResponses = JSON.parse(local);
    } catch (_) {
      allResponses = [...SEED_FALLBACK];
    }
  } else {
    allResponses = [...SEED_FALLBACK];
    localStorage.setItem("bloxquest_responses_backup", JSON.stringify(allResponses));
  }
  updateBadgeCount();
  updateIpStatusUI();
}

function updateBadgeCount() {
  const badge = document.getElementById("totalResponsesBadge");
  if (badge) badge.textContent = allResponses.length;
}

async function submitFinalQuiz() {
  await fetchAllResponses();
  if (getIpUsageCount() >= MAX_ANSWERS_PER_IP) {
    showBloxToast("🛑 Limite de 2 respostas por IP já foi atingido!");
    updateIpStatusUI();
    return false;
  }

  const newEntry = {
    id: `resp-${Date.now()}`,
    playerNick: playerNick || "Jogador Blox",
    avatarColor: avatarColor,
    clientIp: detectedClientIp,
    createdAt: new Date().toLocaleString("pt-BR").slice(0, 16),
    isSample: false,
    answers: currentAnswers
  };

  const payload = {
    action: "submit",
    playerNick: newEntry.playerNick,
    avatarColor: newEntry.avatarColor,
    clientIp: detectedClientIp,
    answers: currentAnswers
  };

  let savedSomewhere = false;

  // 1. Salva no Banco em Nuvem (Firebase Realtime DB para GitHub Pages)
  const cloudDb = getCloudDbUrl();
  if (cloudDb) {
    try {
      const res = await fetch(`${cloudDb}/responses.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
      });
      if (res.ok) {
        incrementLocalIpUsage();
        await fetchAllResponses();
        savedSomewhere = true;
      }
    } catch (_) {}
  }

  // 2. Tenta salvar no Servidor Local Ruby (se estiver rodando local)
  if (!savedSomewhere) {
    try {
      const res = await fetch("/api/responses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.status === 429) {
        showBloxToast("🛑 Este IP já respondeu 2 vezes!");
        updateIpStatusUI();
        return false;
      }
      if (res.ok) {
        incrementLocalIpUsage();
        await fetchAllResponses();
        savedSomewhere = true;
      }
    } catch (_) {}
  }

  // 3. Fallback LocalStorage
  if (!savedSomewhere) {
    incrementLocalIpUsage();
    allResponses.unshift(newEntry);
    localStorage.setItem("bloxquest_responses_backup", JSON.stringify(allResponses));
    updateBadgeCount();
    updateIpStatusUI();
  }

  // 4. Se houver Webhook configurado (Formspree / E-mail), envia cópia também
  const webhookUrl = localStorage.getItem("bloxquest_cloud_webhook");
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry)
    }).catch(() => {});
  }
  return true;
}

/* ==========================================================================
   NAVEGAÇÃO DE TELAS E LÓGICA DO OBBY QUIZ
   ========================================================================== */
function switchScreen(screenId) {
  document.querySelectorAll(".game-screen").forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateHudProgress() {
  const total = QUESTIONS.length;
  const completed = currentStep;
  const pct = Math.round((completed / total) * 100);
  const coins = completed * 100;

  let rank = "🌟 NÍVEL 1 — INICIANTE";
  if (completed >= 4) rank = "⚡ NÍVEL 2 — EXPLORADOR OBBY";
  if (completed >= 8) rank = "🔥 NÍVEL 3 — MESTRE BLOX";
  if (completed >= 12) rank = "👑 NÍVEL MÁXIMO — CRIADOR LENDÁRIO";

  document.getElementById("hudLevelText").textContent = rank;
  document.getElementById("hudCoinsText").textContent = `🪙 ${coins} BloxCoins`;
  document.getElementById("hudXpFill").style.width = `${pct}%`;
}

function renderCheckpointsBar() {
  const bar = document.getElementById("obbyCheckpointsBar");
  bar.innerHTML = QUESTIONS.map((q, idx) => {
    let cls = "checkpoint-step";
    if (idx < currentStep) cls += " done";
    else if (idx === currentStep) cls += " current";
    return `<div class="${cls}" data-step="${idx}" title="Fase ${q.number}">${idx < currentStep ? "✔" : q.number}</div>`;
  }).join("");

  bar.querySelectorAll(".checkpoint-step").forEach((el) => {
    el.addEventListener("click", () => {
      const targetIdx = Number(el.getAttribute("data-step"));
      if (targetIdx <= currentStep) {
        currentStep = targetIdx;
        renderCurrentQuestion();
      }
    });
  });
}

function renderCurrentQuestion() {
  const q = QUESTIONS[currentStep];
  renderCheckpointsBar();
  updateHudProgress();

  document.getElementById("questionPhaseBadge").textContent = `FASE ${q.number} DE ${QUESTIONS.length}`;
  document.getElementById("questionHintBadge").textContent =
    q.type === "multi"
      ? "✨ Pode escolher várias opções!"
      : q.type === "single"
      ? "🎯 Escolha 1 opção"
      : "💡 Resposta Criativa Aberta";

  document.getElementById("questionTitle").textContent = q.title;
  document.getElementById("questionSubtitle").textContent = q.subtitle || "";

  const container = document.getElementById("optionsContainer");
  const otherWrap = document.getElementById("otherInputWrap");
  const otherInput = document.getElementById("otherTextInput");

  otherWrap.hidden = true;

  if (q.type === "open") {
    const val = currentAnswers[q.id] || "";
    container.innerHTML = `
      <div class="open-question-box">
        <textarea id="openAnswerTextarea" class="open-question-textarea" placeholder="${q.placeholder}">${val}</textarea>
      </div>
    `;
    const textarea = document.getElementById("openAnswerTextarea");
    textarea.addEventListener("input", () => {
      currentAnswers[q.id] = textarea.value;
    });
  } else {
    const selectedVal = currentAnswers[q.id] || (q.type === "multi" ? [] : "");

    container.innerHTML = q.options.map((opt) => {
      const isSelected = q.type === "multi"
        ? Array.isArray(selectedVal) && selectedVal.includes(opt.label)
        : selectedVal === opt.label;

      return `
        <button type="button" class="blox-option-btn ${isSelected ? "selected" : ""}" data-value="${opt.label}">
          <span class="opt-emoji">${opt.emoji}</span>
          <span class="opt-label">${opt.label}</span>
          <span class="opt-check">${isSelected ? "✔" : ""}</span>
        </button>
      `;
    }).join("");

    // Se "Outro" estiver marcado, exibe o campo extra
    if (q.hasOther) {
      const hasOutro = Array.isArray(selectedVal) ? selectedVal.includes("Outro") : selectedVal === "Outro";
      otherWrap.hidden = !hasOutro;
      otherInput.value = currentAnswers[q.otherKey] || "";
      otherInput.oninput = () => {
        currentAnswers[q.otherKey] = otherInput.value;
      };
    }

    container.querySelectorAll(".blox-option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        playGameSound("click");
        const val = btn.getAttribute("data-value");

        if (q.type === "single") {
          currentAnswers[q.id] = val;
        } else {
          if (!Array.isArray(currentAnswers[q.id])) currentAnswers[q.id] = [];
          const arr = currentAnswers[q.id];
          const idx = arr.indexOf(val);
          if (idx >= 0) arr.splice(idx, 1);
          else arr.push(val);
        }
        renderCurrentQuestion();
      });
    });
  }

  // Botões de Rodapé
  const prevBtn = document.getElementById("prevQuestionBtn");
  const nextBtn = document.getElementById("nextQuestionBtn");

  prevBtn.style.visibility = currentStep === 0 ? "hidden" : "visible";
  nextBtn.innerHTML =
    currentStep === QUESTIONS.length - 1
      ? "🏆 FINALIZAR MISSÃO & GANHAR TROFÉU!"
      : "Próxima Fase (+100 XP) ➡";
}

function validateCurrentStep() {
  const q = QUESTIONS[currentStep];
  const ans = currentAnswers[q.id];

  if (q.type === "single" && !ans) {
    showBloxToast("⚠️ Escolha pelo menos 1 bloco para avançar de fase!");
    return false;
  }
  if (q.type === "multi" && (!Array.isArray(ans) || ans.length === 0)) {
    showBloxToast("⚠️ Marque pelo menos 1 opção que você gosta!");
    return false;
  }
  if (q.type === "open" && (!ans || ans.trim().length < 3)) {
    showBloxToast("✍️ Escreva sua ideia (mesmo que curtinha) para ganhar o XP desta fase!");
    return false;
  }
  return true;
}

/* ==========================================================================
   PAINEL DE ANÁLISE DE MERCADO (LEVANTAMENTO ESTATÍSTICO & GRÁFICOS)
   ========================================================================== */
function renderAnalyticsDashboard() {
  const total = allResponses.length;
  document.getElementById("kpiTotalResponses").textContent = total;

  const sampleCount = allResponses.filter((r) => r.isSample).length;
  document.getElementById("kpiSampleNotice").textContent =
    sampleCount > 0
      ? `${total - sampleCount} reais + ${sampleCount} exemplos de demonstração`
      : `100% respostas reais coletadas`;

  if (total === 0) {
    document.getElementById("kpiTopAge").textContent = "—";
    document.getElementById("kpiTopGame").textContent = "—";
    document.getElementById("kpiHybridRate").textContent = "—";
    document.getElementById("autoMarketSummary").textContent = "Ainda não há respostas registradas.";
    document.getElementById("chartsGridContainer").innerHTML = "";
    document.getElementById("openIdeasList").innerHTML = "";
    return;
  }

  // Função auxiliar para contar frequência de respostas de uma pergunta
  function tallyQuestion(q) {
    const counts = {};
    (q.options || []).forEach((o) => { counts[o.label] = 0; });

    allResponses.forEach((resp) => {
      const val = resp.answers ? resp.answers[q.id] : null;
      if (!val) return;
      if (Array.isArray(val)) {
        val.forEach((item) => {
          counts[item] = (counts[item] || 0) + 1;
        });
      } else {
        counts[val] = (counts[val] || 0) + 1;
      }
    });

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }

  const ageRank = tallyQuestion(QUESTIONS[0]);
  const gameRank = tallyQuestion(QUESTIONS[2]);
  const activityRank = tallyQuestion(QUESTIONS[3]);
  const painRank = tallyQuestion(QUESTIONS[6]);
  const newGenreRank = tallyQuestion(QUESTIONS[7]);
  const hybridRank = tallyQuestion(QUESTIONS[8]);
  const discoveryRank = tallyQuestion(QUESTIONS[9]);

  const topAge = ageRank[0] ? ageRank[0][0] : "—";
  const topGame = gameRank[0] ? gameRank[0][0] : "—";

  const yesHybridCount = allResponses.filter(
    (r) => r.answers && (r.answers.q9 === "Sim, com certeza!" || r.answers.q9 === "Talvez")
  ).length;
  const hybridPct = Math.round((yesHybridCount / total) * 100);

  document.getElementById("kpiTopAge").textContent = topAge;
  document.getElementById("kpiTopGame").textContent = topGame;
  document.getElementById("kpiHybridRate").textContent = `${hybridPct}% aprovam`;

  // Diagnóstico Automático Inteligente
  const topGenre1 = newGenreRank[0] ? newGenreRank[0][0] : "Aventura";
  const topGenre2 = newGenreRank[1] ? newGenreRank[1][0] : "Mistério";
  const topActivity = activityRank[0] ? activityRank[0][0] : "Jogar com amigos";
  const topPain = painRank[0] ? painRank[0][0] : "Ter que gastar Robux";
  const topChannel = discoveryRank[0] ? discoveryRank[0][0] : "Indicação dos amigos";

  document.getElementById("autoMarketSummary").innerHTML = `
    Com base nas <strong>${total} respostas</strong> analisadas, o público principal tem entre <strong>${topAge}</strong> e tem como maior referência <strong>${topGame}</strong>.
    As crianças demonstram forte interesse em experimentar um jogo novo que combine <strong>${topGenre1}</strong> com <strong>${topGenre2}</strong> (<strong>${hybridPct}%</strong> aprovam misturar estilos!), focado principalmente em <strong>"${topActivity}"</strong>.<br><br>
    🎯 <strong>Oportunidade de Diferenciação:</strong> A maior reclamação atual nos jogos do Roblox é <strong>"${topPain}"</strong>. Criar um jogo com progressão justa, recompensas desbloqueáveis em equipe e divulgação via <strong>${topChannel}</strong> tem o maior potencial de retenção e viralização!
  `;

  // Renderiza Gráficos das Perguntas 1 a 10
  const chartsGrid = document.getElementById("chartsGridContainer");
  chartsGrid.innerHTML = QUESTIONS.slice(0, 10).map((q) => {
    const sorted = tallyQuestion(q);
    const barsHtml = sorted.map(([label, count]) => {
      const pct = Math.round((count / total) * 100);
      return `
        <div class="bar-row">
          <div class="bar-label-line">
            <span>${label}</span>
            <span>${count} voto(s) • ${pct}%</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="chart-card">
        <h3>${q.title}</h3>
        ${barsHtml}
      </div>
    `;
  }).join("");

  // Renderiza Mural de Ideias (Perguntas 11, 12 e 13)
  const ideasContainer = document.getElementById("openIdeasList");
  ideasContainer.innerHTML = allResponses.map((resp) => {
    const a = resp.answers || {};
    const initial = (resp.playerNick || "J")[0].toUpperCase();
    return `
      <div class="idea-player-card" style="border-top-color: ${resp.avatarColor || '#00A2FF'}">
        <div class="idea-player-top">
          <div class="player-badge">
            <div class="mini-avatar-dot" style="background: ${resp.avatarColor || '#00A2FF'}">${initial}</div>
            <div>
              <strong>${resp.playerNick || "Jogador Blox"}</strong>
              <small style="display:block; color:#8B9CC7; font-size:0.76rem;">
                ${a.q1 || ""} • ${resp.createdAt || ""} ${resp.isSample ? "(Exemplo)" : ""}
              </small>
            </div>
          </div>
          <button type="button" class="delete-resp-btn" data-del-id="${resp.id}">Excluir</button>
        </div>

        <div class="idea-qa-item">
          <small>💡 11. Como seria o jogo que você inventaria?</small>
          <p>${a.q11 || "—"}</p>
        </div>
        <div class="idea-qa-item">
          <small>🔍 12. O que você gostaria que existisse e ainda não encontrou?</small>
          <p>${a.q12 || "—"}</p>
        </div>
        <div class="idea-qa-item">
          <small>🤝 13. O que faria você chamar seus amigos?</small>
          <p>${a.q13 || "—"}</p>
        </div>
      </div>
    `;
  }).join("");

  ideasContainer.querySelectorAll("[data-del-id]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-del-id");
      try {
        await fetch("/api/responses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "delete_one", id })
        });
      } catch (_) {}
      allResponses = allResponses.filter((r) => r.id !== id);
      localStorage.setItem("bloxquest_responses_backup", JSON.stringify(allResponses));
      updateBadgeCount();
      renderAnalyticsDashboard();
      showBloxToast("🗑️ Resposta removida!");
    });
  });
}

/* ==========================================================================
   EXPORTAÇÃO PARA EXCEL (CSV) E BACKUP JSON
   ========================================================================== */
function exportToCsv() {
  if (allResponses.length === 0) {
    showBloxToast("Não há respostas para exportar.");
    return;
  }

  const headers = [
    "ID", "Jogador", "Data", "1. Idade", "2. Frequência", "3. Jogos Favoritos",
    "4. O que gosta de fazer", "5. Prefere jogar", "6. O que faz continuar",
    "7. O que incomoda", "8. Tipo de jogo novo", "9. Misturar estilos",
    "10. O que faria experimentar", "11. Jogo que inventaria",
    "12. O que ainda não encontrou", "13. O que faria chamar amigos"
  ];

  const escapeCsv = (val) => {
    if (Array.isArray(val)) val = val.join("; ");
    const str = String(val || "").replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = allResponses.map((r) => {
    const a = r.answers || {};
    return [
      r.id, r.playerNick, r.createdAt,
      a.q1, a.q2, a.q3, a.q4, a.q5, a.q6, a.q7, a.q8, a.q9, a.q10,
      a.q11, a.q12, a.q13
    ].map(escapeCsv).join(",");
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `levantamento_pesquisa_roblox_${Date.now()}.csv`;
  a.click();
  showBloxToast("📥 Planilha Excel/CSV baixada com sucesso!");
}

/* ==========================================================================
   INICIALIZAÇÃO DE EVENTOS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", async () => {
  await fetchAllResponses();

  // Escolha de cor do Avatar Roblox no Lobby
  document.querySelectorAll("#avatarColorSwatches .swatch").forEach((swatch) => {
    swatch.addEventListener("click", () => {
      playGameSound("click");
      document.querySelectorAll("#avatarColorSwatches .swatch").forEach((s) => s.classList.remove("active"));
      swatch.classList.add("active");
      avatarColor = swatch.getAttribute("data-color");
      document.getElementById("avatarTorsoColor").style.background = avatarColor;
    });
  });

  // Botão de Som
  const soundBtn = document.getElementById("toggleSoundBtn");
  soundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundBtn.textContent = soundEnabled ? "🔊 Som: ON" : "🔇 Som: OFF";
  });

  // Iniciar Missão (Lobby -> Fase 1)
  document.getElementById("startMissionBtn").addEventListener("click", () => {
    if (getIpUsageCount() >= MAX_ANSWERS_PER_IP) {
      showBloxToast("🛑 Este IP já enviou o limite máximo de 2 respostas!");
      updateIpStatusUI();
      return;
    }
    playGameSound("next");
    playerNick = document.getElementById("playerNickInput").value.trim() || "Aventureiro(a) Blox";
    currentStep = 0;
    currentAnswers = {};
    renderCurrentQuestion();
    switchScreen("screenQuiz");
  });

  // Voltar Fase
  document.getElementById("prevQuestionBtn").addEventListener("click", () => {
    if (currentStep > 0) {
      playGameSound("click");
      currentStep--;
      renderCurrentQuestion();
    }
  });

  // Próxima Fase / Finalizar
  document.getElementById("nextQuestionBtn").addEventListener("click", async () => {
    if (!validateCurrentStep()) return;

    if (currentStep < QUESTIONS.length - 1) {
      playGameSound("next");
      currentStep++;
      renderCurrentQuestion();
    } else {
      const ok = await submitFinalQuiz();
      if (!ok) return;
      playGameSound("victory");
      document.getElementById("hudXpFill").style.width = "100%";
      document.getElementById("hudCoinsText").textContent = "🪙 1.300 BloxCoins";
      document.getElementById("victoryPlayerName").textContent = playerNick;
      switchScreen("screenVictory");
    }
  });

  // Jogar Novamente (Outra Criança)
  document.getElementById("playAgainBtn").addEventListener("click", () => {
    playGameSound("click");
    document.getElementById("playerNickInput").value = "";
    currentStep = 0;
    currentAnswers = {};
    updateHudProgress();
    switchScreen("screenLobby");
  });

  // Ir para Home clicando no Logo
  document.getElementById("goHomeBtn").addEventListener("click", () => {
    switchScreen("screenLobby");
  });

  // Abrir Painel de Análise de Mercado (Protegido por Senha para Crianças não mexerem)
  const pinModal = document.getElementById("adminPinModal");
  const openAnalytics = () => {
    playGameSound("click");
    if (isAdminUnlocked) {
      renderAnalyticsDashboard();
      switchScreen("screenAnalytics");
    } else {
      pinModal.classList.add("open");
    }
  };
  document.getElementById("openAnalyticsBtn").addEventListener("click", openAnalytics);

  document.getElementById("closePinModalBtn").addEventListener("click", () => {
    pinModal.classList.remove("open");
  });

  document.getElementById("adminPinForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const pass = document.getElementById("adminPinInput").value.trim();
    if (pass === "123456" || pass === "admin") {
      isAdminUnlocked = true;
      sessionStorage.setItem("bloxquest_admin_unlocked", "true");
      pinModal.classList.remove("open");
      renderAnalyticsDashboard();
      switchScreen("screenAnalytics");
      showBloxToast("🔓 Painel da Pesquisadora desbloqueado!");
    } else {
      showBloxToast("❌ Senha incorreta! (Use 123456)");
    }
  });

  document.getElementById("backToQuizBtn").addEventListener("click", () => {
    switchScreen("screenLobby");
  });

  // Exportar CSV
  document.getElementById("exportCsvBtn").addEventListener("click", exportToCsv);

  // Liberar IP do Admin para novos testes
  const resetIpBtn = document.getElementById("resetIpLimitBtn");
  if (resetIpBtn) {
    resetIpBtn.addEventListener("click", async () => {
      localStorage.removeItem("bloxquest_ip_counts");
      try {
        await fetch("/api/responses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "reset_ip_limits" })
        });
      } catch (_) {}
      await fetchAllResponses();
      showBloxToast("🔓 Limite de IP liberado para novos testes!");
    });
  }

  // Limpar Exemplos Iniciais
  document.getElementById("clearSamplesBtn").addEventListener("click", async () => {
    try {
      await fetch("/api/responses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "clear_samples" })
      });
    } catch (_) {}
    allResponses = allResponses.filter((r) => !r.isSample);
    localStorage.setItem("bloxquest_responses_backup", JSON.stringify(allResponses));
    updateBadgeCount();
    renderAnalyticsDashboard();
    showBloxToast("🧹 Exemplos de teste removidos! Agora só entram respostas reais.");
  });

  // Exportar Backup JSON
  document.getElementById("exportJsonBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(allResponses, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `respostas_roblox_backup.json`;
    a.click();
  });

  // Importar Backup JSON
  document.getElementById("importJsonInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (Array.isArray(parsed)) {
          allResponses = parsed;
          localStorage.setItem("bloxquest_responses_backup", JSON.stringify(allResponses));
          try {
            await fetch("/api/responses", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ action: "import_all", responses: parsed })
            });
          } catch (_) {}
          updateBadgeCount();
          renderAnalyticsDashboard();
          showBloxToast("✅ Respostas importadas com sucesso!");
        }
      } catch (_) {
        showBloxToast("Arquivo JSON inválido.");
      }
    };
    reader.readAsText(file);
  });

  // Modal de Hospedagem Gratuita sem Domínio
  const hostModal = document.getElementById("hostingModal");
  document.getElementById("openFreeHostingGuideBtn").addEventListener("click", () => {
    document.getElementById("cloudDbUrlInput").value = localStorage.getItem("bloxquest_cloud_db_url") || DEFAULT_CLOUD_DB_URL;
    document.getElementById("cloudWebhookInput").value = localStorage.getItem("bloxquest_cloud_webhook") || "";
    hostModal.classList.add("open");
  });
  document.getElementById("closeHostingModalBtn").addEventListener("click", () => hostModal.classList.remove("open"));

  document.getElementById("saveWebhookBtn").addEventListener("click", async () => {
    const dbVal = document.getElementById("cloudDbUrlInput").value.trim();
    const hookVal = document.getElementById("cloudWebhookInput").value.trim();
    localStorage.setItem("bloxquest_cloud_db_url", dbVal);
    localStorage.setItem("bloxquest_cloud_webhook", hookVal);
    await fetchAllResponses();
    renderAnalyticsDashboard();
    hostModal.classList.remove("open");
    showBloxToast("✅ Conexões de Nuvem salvas com sucesso!");
  });
});
