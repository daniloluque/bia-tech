const PptxGenJS = require("pptxgenjs");
const path = require("path");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 in

// ── Brand tokens ─────────────────────────────────────────────────
const D = {  // DARK theme
  red:    "CC092F", redD: "A00725",
  cyan:   "00BCD4", cyanD: "0097A7",
  bg:     "1A1A1A", surf:  "242424",
  surf2:  "2E2E2E", surf3: "383838",
  bord:   "363636", bordS: "2A2A2A",
  t1:     "F2F2F2", t2:   "999999",
  t3:     "4A4A4A",
};
const L = {  // LIGHT theme
  red:    "CC092F", redD: "A00725",
  cyan:   "0097A7", cyanD: "007B83",
  bg:     "FAFAFA", surf:  "FFFFFF",
  surf2:  "F0F0F0", surf3: "E8E8E8",
  bord:   "E0E0E0", bordS: "EBEBEB",
  t1:     "1A1A1A", t2:   "666666",
  t3:     "BBBBBB",
};

const BG = path.join(__dirname, "new", "BIA", "slides");

// ── Slide Masters ─────────────────────────────────────────────────
pptx.defineSlideMaster({
  title: "DARK",
  background: { path: path.join(BG, "bg-dark.png") },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.04, fill: { color: D.red } } },
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: D.t3 } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: D.t2, fontFace: "Inter", fontSize: 9 },
});

pptx.defineSlideMaster({
  title: "COVER",
  background: { path: path.join(BG, "bg-cover.png") },
  objects: [
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: D.t3 } } },
  ],
});

pptx.defineSlideMaster({
  title: "SECTION",
  background: { path: path.join(BG, "bg-section.png") },
  objects: [
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: D.t3 } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: D.t2, fontFace: "Inter", fontSize: 9 },
});

pptx.defineSlideMaster({
  title: "LIGHT",
  background: { path: path.join(BG, "bg-light.png") },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.04, fill: { color: L.red } } },
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: L.t3 } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: L.t2, fontFace: "Inter", fontSize: 9 },
});

pptx.defineSlideMaster({
  title: "LIGHT_COVER",
  background: { path: path.join(BG, "bg-light-cover.png") },
  objects: [
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: L.t3 } } },
  ],
});

pptx.defineSlideMaster({
  title: "LIGHT_SECTION",
  background: { path: path.join(BG, "bg-light.png") },
  objects: [
    { rect: { x: 0, y: 0, w: 0.06, h: "100%", fill: { color: L.red } } },
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: L.t3 } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: L.t2, fontFace: "Inter", fontSize: 9 },
});

// Sóbrios — sem glow
const SOBER_LINE = "D4D4D4";

pptx.defineSlideMaster({
  title: "WHITE",
  background: { path: path.join(BG, "bg-white.png") },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.04, fill: { color: L.red } } },
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: SOBER_LINE } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: "AAAAAA", fontFace: "Inter", fontSize: 9 },
});

pptx.defineSlideMaster({
  title: "GRAY",
  background: { path: path.join(BG, "bg-gray.png") },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.04, fill: { color: L.red } } },
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: SOBER_LINE } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: "AAAAAA", fontFace: "Inter", fontSize: 9 },
});

pptx.defineSlideMaster({
  title: "WHITE_GLOW",
  background: { path: path.join(BG, "bg-white-glow.png") },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.04, fill: { color: L.red } } },
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: SOBER_LINE } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: "AAAAAA", fontFace: "Inter", fontSize: 9 },
});

pptx.defineSlideMaster({
  title: "GRAY_GLOW",
  background: { path: path.join(BG, "bg-gray-glow.png") },
  objects: [
    { rect: { x: 0, y: 0, w: "100%", h: 0.04, fill: { color: L.red } } },
    { rect: { x: 0, y: 7.46, w: "100%", h: 0.04, fill: { color: SOBER_LINE } } },
  ],
  slideNumber: { x: 12.8, y: 7.2, color: "AAAAAA", fontFace: "Inter", fontSize: 9 },
});

// ── Helpers ───────────────────────────────────────────────────────
function addLogo(s, x, y, sz = 11, c = { bia: D.t1, tech: D.t2 }) {
  s.addText(
    [
      { text: "BIA",   options: { bold: true,  color: c.bia  } },
      { text: "  |  ", options: { bold: false, color: D.t3   } },
      { text: "Tech",  options: { bold: false, color: c.tech } },
    ],
    { x, y, w: 2.5, h: 0.35, fontFace: "Inter", fontSize: sz, charSpacing: 0.3 }
  );
}
function addLogoLight(s, x, y, sz = 11) {
  s.addText(
    [
      { text: "BIA",   options: { bold: true,  color: L.t1 } },
      { text: "  |  ", options: { bold: false, color: L.t3 } },
      { text: "Tech",  options: { bold: false, color: L.t2 } },
    ],
    { x, y, w: 2.5, h: 0.35, fontFace: "Inter", fontSize: sz, charSpacing: 0.3 }
  );
}

function card(s, x, y, w, h, clr) {
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    fill: { color: clr },
    line: { color: D.bord, width: 0.5 },
    rectRadius: 0.1,
  });
}
function cardL(s, x, y, w, h, clr = L.surf) {
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    fill: { color: clr },
    line: { color: L.bord, width: 0.5 },
    rectRadius: 0.1,
  });
}

function tag(s, label, x, y, color = D.red) {
  const tw = label.length * 0.085 + 0.28;
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w: tw, h: 0.22,
    fill: { color, transparency: 82 },
    line: { color, width: 0.5 },
    rectRadius: 0.05,
  });
  s.addText(label, { x, y, w: tw, h: 0.22, fontFace: "Inter", fontSize: 8, bold: true, color, align: "center", valign: "middle" });
}

function topbar(s, x, y, w, color) {
  s.addShape(pptx.ShapeType.rect, { x, y, w, h: 0.04, fill: { color }, line: { color, width: 0 } });
}

// ═════════════════════════════════════════════════════════════════
// ── DARK SLIDES ───────────────────────────────────────────────────
// ═════════════════════════════════════════════════════════════════

// ── LABEL DIVIDER ─────────────────────────────────────────────────
function sectionLabel(s, text, theme = "dark") {
  const c = theme === "dark" ? D : L;
  s.addText("— " + text, {
    x: 0.4, y: 0.1, w: 6, h: 0.25,
    fontFace: "Inter", fontSize: 7.5, bold: true,
    color: c.t2, charSpacing: 1.8,
  });
}

// ─────────────────────────────────────────────────────────────────
// S01 — CAPA (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "COVER" });

  s.addText("BIA",  { x: 0.4, y: 2.85, w: 3.7, h: 1.0, fontFace: "Inter", fontSize: 60, bold: true, color: "FFFFFF", align: "left" });
  s.addText("Tech", { x: 0.4, y: 3.75, w: 3.7, h: 0.55, fontFace: "Inter", fontSize: 28, bold: false, color: "FFBBBE", align: "left" });
  s.addShape(pptx.ShapeType.line, { x: 0.4, y: 4.38, w: 3.4, h: 0, line: { color: "FFFFFF", width: 0.5, transparency: 60 } });
  s.addText("Ferramentas de IA para o SDLC", { x: 0.4, y: 4.52, w: 3.6, h: 0.35, fontFace: "Inter", fontSize: 11, color: "FFBBBE", align: "left" });

  s.addText("TÍTULO DA\nAPRESENTAÇÃO", { x: 5.0, y: 1.9, w: 8.0, h: 2.0, fontFace: "Inter", fontSize: 40, bold: true, color: D.t1, align: "left", charSpacing: -0.5 });
  s.addText("Subtítulo ou descrição do tema abordado nesta apresentação", { x: 5.0, y: 4.05, w: 7.8, h: 0.55, fontFace: "Inter", fontSize: 16, color: D.t2, align: "left" });
  s.addShape(pptx.ShapeType.line, { x: 5.0, y: 4.7, w: 7.0, h: 0, line: { color: D.bord, width: 0.5 } });
  s.addText("Apresentado por  •  Área / Tribo  •  Bradesco — " + new Date().toLocaleDateString("pt-BR"), { x: 5.0, y: 4.85, w: 7.8, h: 0.28, fontFace: "Inter", fontSize: 9.5, color: D.t3, align: "left" });
  // cyan accent dot
  s.addShape(pptx.ShapeType.ellipse, { x: 12.7, y: 0.18, w: 1.0, h: 1.0, fill: { color: "00BCD4", transparency: 72 }, line: { color: "00BCD4", width: 0 } });
}

// ─────────────────────────────────────────────────────────────────
// S02 — AGENDA (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);

  s.addText("Agenda", { x: 0.5, y: 0.55, w: 6, h: 0.7, fontFace: "Inter", fontSize: 30, bold: true, color: D.t1 });

  const items = ["Contexto e Objetivos", "Visão Geral da Plataforma", "Demonstração", "Métricas e Resultados", "Próximos Passos"];
  items.forEach((label, i) => {
    const y = 1.5 + i * 0.95;
    card(s, 0.5, y, 0.58, 0.58, D.surf2);
    s.addText(String(i + 1).padStart(2, "0"), { x: 0.5, y, w: 0.58, h: 0.58, fontFace: "Inter", fontSize: 13, bold: true, color: D.red, align: "center", valign: "middle" });
    s.addText(label, { x: 1.25, y: y + 0.1, w: 5.5, h: 0.38, fontFace: "Inter", fontSize: 15, color: D.t1 });
    if (i < items.length - 1) s.addShape(pptx.ShapeType.line, { x: 0.5, y: y + 0.68, w: 5.8, h: 0, line: { color: D.bord, width: 0.5 } });
  });

  card(s, 7.5, 0.55, 5.4, 6.45, D.surf);
  s.addText("SOBRE ESTA APRESENTAÇÃO", { x: 7.75, y: 0.78, w: 5.0, h: 0.28, fontFace: "Inter", fontSize: 8, bold: true, color: "00BCD4", charSpacing: 1.5 });
  s.addText("Parágrafo introdutório explicando o objetivo desta apresentação e o que o público pode esperar ao longo dos próximos slides.", { x: 7.75, y: 1.15, w: 4.9, h: 1.3, fontFace: "Inter", fontSize: 13, color: D.t2 });
  s.addShape(pptx.ShapeType.line, { x: 7.75, y: 2.55, w: 4.7, h: 0, line: { color: D.bord, width: 0.5 } });
  [["Duração", "~30 min"], ["Público", "Time de Engenharia"], ["Data", new Date().toLocaleDateString("pt-BR")]].forEach(([lbl, val], i) => {
    const y = 2.75 + i * 0.88;
    s.addText(lbl.toUpperCase(), { x: 7.75, y, w: 4.7, h: 0.22, fontFace: "Inter", fontSize: 8, color: D.t2, charSpacing: 1 });
    s.addText(val, { x: 7.75, y: y + 0.24, w: 4.7, h: 0.42, fontFace: "Inter", fontSize: 16, bold: true, color: D.t1 });
  });
}

// ─────────────────────────────────────────────────────────────────
// S03 — DIVISOR DE SEÇÃO (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "SECTION" });
  addLogo(s, 0.4, 0.1);

  s.addText("01", { x: 0.4, y: 1.2, w: 4.5, h: 1.8, fontFace: "Inter", fontSize: 120, bold: true, color: D.red, transparency: 18 });
  s.addShape(pptx.ShapeType.line, { x: 0.5, y: 3.18, w: 5.5, h: 0, line: { color: D.red, width: 1.5 } });
  s.addText("TÍTULO DA SEÇÃO", { x: 0.5, y: 3.35, w: 9, h: 0.7, fontFace: "Inter", fontSize: 32, bold: true, color: D.t1, charSpacing: -0.2 });
  s.addText("Breve descrição do que será abordado nesta seção da apresentação.", { x: 0.5, y: 4.12, w: 7.5, h: 0.5, fontFace: "Inter", fontSize: 14, color: D.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S04 — CONTEÚDO COM BULLETS (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  tag(s, "CONTEXTO", 0.5, 0.58, D.red);

  s.addText("Título do Slide", { x: 0.5, y: 0.88, w: 7.5, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: D.t1 });

  const bullets = [
    ["Ponto principal de discussão", "Detalhamento adicional que contextualiza e explica o ponto acima"],
    ["Segundo ponto relevante",      "Complemento ao contexto apresentado com dado ou evidência"],
    ["Terceiro ponto técnico",       "Informação técnica ou de negócio pertinente ao tema do slide"],
    ["Conclusão ou próximo passo",   "O que este bloco de informação implica ou requer de ação"],
  ];

  bullets.forEach(([title, sub], i) => {
    const y = 1.72 + i * 1.1;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: y + 0.07, w: 0.12, h: 0.12, fill: { color: D.red }, line: { color: D.red, width: 0 } });
    s.addText(title, { x: 0.75, y, w: 7, h: 0.4, fontFace: "Inter", fontSize: 14, bold: true, color: D.t1 });
    s.addText(sub,   { x: 0.75, y: y + 0.44, w: 7, h: 0.4, fontFace: "Inter", fontSize: 12, color: D.t2 });
  });

  card(s, 8.5, 0.55, 4.4, 6.55, D.surf);
  topbar(s, 8.5, 0.55, 4.4, "00BCD4");
  s.addText("NOTA DE APOIO", { x: 8.75, y: 0.75, w: 3.9, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: "00BCD4", charSpacing: 1.5 });
  s.addText("Adicione aqui dados, prints, gráficos ou informações complementares que apoiam o conteúdo dos bullets à esquerda.", { x: 8.75, y: 1.1, w: 3.9, h: 1.4, fontFace: "Inter", fontSize: 12, color: D.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S05 — DUAS COLUNAS (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  tag(s, "COMPARATIVO", 0.5, 0.58, "00BCD4");
  s.addText("Título Comparativo", { x: 0.5, y: 0.88, w: 12.3, h: 0.6, fontFace: "Inter", fontSize: 26, bold: true, color: D.t1 });

  [
    { x: 0.5,  color: D.red,  label: "COLUNA A", title: "Situação Atual",     items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
    { x: 7.0,  color: "00BCD4", label: "COLUNA B", title: "Situação Desejada", items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
  ].forEach(({ x, color, label, title, items }) => {
    card(s, x, 1.65, 6.0, 5.45, D.surf);
    topbar(s, x, 1.65, 6.0, color);
    s.addText(label, { x: x + 0.2, y: 1.85, w: 5.6, h: 0.28, fontFace: "Inter", fontSize: 9, bold: true, color, charSpacing: 1.5 });
    s.addText(title, { x: x + 0.2, y: 2.2,  w: 5.6, h: 0.5,  fontFace: "Inter", fontSize: 19, bold: true, color: D.t1 });
    items.forEach((t, i) =>
      s.addText("— " + t, { x: x + 0.2, y: 2.9 + i * 0.7, w: 5.6, h: 0.45, fontFace: "Inter", fontSize: 13, color: D.t2 })
    );
  });
}

// ─────────────────────────────────────────────────────────────────
// S06 — MÉTRICAS (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  tag(s, "RESULTADOS", 0.5, 0.58, D.red);
  s.addText("Métricas e Resultados", { x: 0.5, y: 0.88, w: 12, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: D.t1 });

  const metrics = [
    { val: "47%",  label: "Redução de tempo",  desc: "em code review",          color: D.red   },
    { val: "3.2×", label: "Velocidade",         desc: "na geração de testes",    color: "00BCD4" },
    { val: "89%",  label: "Satisfação NPS",     desc: "entre devs ativos",       color: D.red   },
    { val: "12k",  label: "Commits analisados", desc: "no último trimestre",     color: "00BCD4" },
  ];
  metrics.forEach((m, i) => {
    const x = 0.5 + i * 3.15;
    card(s, x, 1.75, 2.9, 4.2, D.surf);
    topbar(s, x, 1.75, 2.9, m.color);
    s.addText(m.val, { x: x + 0.2, y: 2.1,  w: 2.5, h: 1.3, fontFace: "Inter", fontSize: 54, bold: true, color: m.color });
    s.addText(m.label, { x: x + 0.2, y: 3.5, w: 2.5, h: 0.38, fontFace: "Inter", fontSize: 13, bold: true, color: D.t1 });
    s.addText(m.desc,  { x: x + 0.2, y: 3.9, w: 2.5, h: 0.35, fontFace: "Inter", fontSize: 11, color: D.t2 });
  });

  card(s, 0.5, 6.1, 12.35, 1.1, D.surf2);
  s.addText("Período: Q1 2025 – Q1 2026  •  Base: 420 engenheiros ativos  •  Fonte: BIA Analytics Dashboard", { x: 0.75, y: 6.38, w: 11.8, h: 0.35, fontFace: "Inter", fontSize: 10, color: D.t2, align: "center" });
}

// ─────────────────────────────────────────────────────────────────
// S07 — ROADMAP / TIMELINE (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  tag(s, "ROADMAP", 0.5, 0.58, "00BCD4");
  s.addText("Próximos Passos & Roadmap", { x: 0.5, y: 0.88, w: 12, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: D.t1 });

  s.addShape(pptx.ShapeType.line, { x: 0.8, y: 3.8, w: 11.7, h: 0, line: { color: D.bord, width: 1.5 } });

  const steps = [
    { quarter: "Q2 2025", label: "Agentix v2",    desc: "Multi-agent com orquestração paralela",         status: "done"    },
    { quarter: "Q3 2025", label: "Code Review IA", desc: "Revisão automática com contexto de repo",       status: "done"    },
    { quarter: "Q4 2025", label: "BIA Hub",        desc: "Portal unificado de ferramentas",               status: "active"  },
    { quarter: "Q1 2026", label: "Risk Analyzer",  desc: "Análise preditiva de riscos em PRs",            status: "next"    },
    { quarter: "Q2 2026", label: "IDE Plugin",     desc: "Extensão VSCode + IntelliJ nativa",             status: "planned" },
  ];
  steps.forEach((step, i) => {
    const x = 0.8 + i * 2.4;
    const dotColor = step.status === "done" ? D.red : step.status === "active" ? "00BCD4" : D.t3;
    s.addShape(pptx.ShapeType.ellipse, { x: x + 0.66, y: 3.67, w: 0.26, h: 0.26, fill: { color: dotColor }, line: { color: dotColor, width: 0 } });
    s.addText(step.quarter, { x, y: 3.28, w: 2.2, h: 0.3, fontFace: "Inter", fontSize: 9, bold: true, color: dotColor, align: "center" });
    card(s, x + 0.05, 4.1, 2.18, 2.8, step.status === "active" ? D.surf2 : D.surf);
    if (step.status === "active") topbar(s, x + 0.05, 4.1, 2.18, "00BCD4");
    s.addText(step.label, { x: x + 0.2, y: 4.25, w: 1.88, h: 0.4,  fontFace: "Inter", fontSize: 13, bold: true, color: D.t1 });
    s.addText(step.desc,  { x: x + 0.2, y: 4.7,  w: 1.88, h: 0.85, fontFace: "Inter", fontSize: 10, color: D.t2 });
    const statusText = step.status === "done" ? "Entregue" : step.status === "active" ? "Em curso" : "Planejado";
    tag(s, statusText, x + 0.2, 5.7, dotColor);
  });
}

// ─────────────────────────────────────────────────────────────────
// S08 — CITAÇÃO / DESTAQUE (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  s.addText("\u201C", { x: 0.2, y: 0.7, w: 2, h: 2.5, fontFace: "Inter", fontSize: 200, bold: true, color: D.red, transparency: 72 });
  s.addText("A IA não substitui o engenheiro — ela remove o atrito para que o engenheiro faça o que só ele pode fazer.", {
    x: 1.2, y: 1.7, w: 10.5, h: 2.8, fontFace: "Inter", fontSize: 28, bold: false, color: D.t1, charSpacing: -0.2,
  });
  s.addShape(pptx.ShapeType.line, { x: 1.2, y: 4.62, w: 3.5, h: 0, line: { color: D.red, width: 1.5 } });
  s.addText("Nome do Autor  •  Cargo / Área", { x: 1.2, y: 4.82, w: 6, h: 0.35, fontFace: "Inter", fontSize: 13, color: D.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S09 — CÓDIGO / TERMINAL (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  tag(s, "DEMO TÉCNICA", 0.5, 0.58, D.red);
  s.addText("Exemplo de Uso — Agentix API", { x: 0.5, y: 0.88, w: 12, h: 0.6, fontFace: "Inter", fontSize: 26, bold: true, color: D.t1 });

  card(s, 0.5, 1.72, 7.9, 5.4, "0D1117");
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.72, w: 7.9, h: 0.38, fill: { color: "161B22" }, line: { color: D.bord, width: 0 } });
  [D.red, "F9A825", "2E7D32"].forEach((col, i) =>
    s.addShape(pptx.ShapeType.ellipse, { x: 0.75 + i * 0.23, y: 1.84, w: 0.11, h: 0.11, fill: { color: col }, line: { color: col, width: 0 } })
  );
  s.addText("agentix — bash", { x: 0.5, y: 1.8, w: 7.9, h: 0.22, fontFace: "JetBrains Mono", fontSize: 9, color: D.t2, align: "center" });

  [
    { t: "# Invocar agente de code review",                         c: "4A4A4A" },
    { t: "$ bia agentix run code-review \\",                        c: D.t1    },
    { t: "    --repo bradesco/platform-core --pr 1847",             c: D.t1    },
    { t: "",                                                         c: D.t1    },
    { t: "✓ Analisando 23 arquivos alterados...",                   c: "2EA04F" },
    { t: "✓ Verificando cobertura de testes (67% → 84%)",          c: "2EA04F" },
    { t: "⚠ 2 vulnerabilidades potenciais detectadas",             c: "F9A825" },
    { t: "✓ Relatório gerado — review.md",                         c: "2EA04F" },
  ].forEach(({ t, c }, i) =>
    s.addText(t, { x: 0.75, y: 2.28 + i * 0.48, w: 7.4, h: 0.42, fontFace: "JetBrains Mono", fontSize: 11, color: c })
  );

  card(s, 8.75, 1.72, 4.6, 5.4, D.surf);
  topbar(s, 8.75, 1.72, 4.6, "00BCD4");
  s.addText("O QUE ACONTECE", { x: 9.0, y: 1.92, w: 4.1, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: "00BCD4", charSpacing: 1.5 });
  [
    ["01", "Agente clona e indexa o PR"],
    ["02", "LLM analisa diff com contexto do repo"],
    ["03", "Verifica padrões OWASP / boas práticas"],
    ["04", "Gera relatório estruturado em Markdown"],
    ["05", "Abre comentários no GitHub automaticamente"],
  ].forEach(([num, text], i) => {
    const y = 2.4 + i * 0.82;
    s.addText(num,  { x: 9.0,  y, w: 0.45, h: 0.38, fontFace: "Inter", fontSize: 11, bold: true, color: D.red });
    s.addText(text, { x: 9.5,  y, w: 3.6,  h: 0.38, fontFace: "Inter", fontSize: 11, color: D.t1 });
  });
}

// ─────────────────────────────────────────────────────────────────
// S10 — GRID DE FEATURES (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  tag(s, "PLATAFORMA", 0.5, 0.58, "00BCD4");
  s.addText("Ferramentas da BIA Tech", { x: 0.5, y: 0.88, w: 12, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: D.t1 });

  [
    { tag: "AGENTIX", title: "Agentes IA",    desc: "Orquestração multi-agente para tarefas complexas do ciclo de desenvolvimento.", color: D.red },
    { tag: "CHAT",    title: "BIA Chat",      desc: "Interface conversacional com contexto de codebase e memória de projeto.",     color: "00BCD4" },
    { tag: "REVIEW",  title: "Code Review",   desc: "Análise automática de PRs com sugestões contextuais e detecção de falhas.",   color: D.red },
    { tag: "HUB",     title: "BIA Hub",       desc: "Portal central para acesso a todas as ferramentas, métricas e integrações.",  color: "00BCD4" },
  ].forEach((f, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.5 + col * 6.5, y = 1.75 + row * 2.7;
    card(s, x, y, 6.15, 2.45, D.surf);
    topbar(s, x, y, 6.15, f.color);
    s.addText(f.tag,  { x: x + 0.22, y: y + 0.2,  w: 5.7, h: 0.24, fontFace: "Inter", fontSize: 8,  bold: true, color: f.color, charSpacing: 1.5 });
    s.addText(f.title,{ x: x + 0.22, y: y + 0.52, w: 5.7, h: 0.48, fontFace: "Inter", fontSize: 19, bold: true, color: D.t1 });
    s.addText(f.desc, { x: x + 0.22, y: y + 1.08, w: 5.7, h: 0.9,  fontFace: "Inter", fontSize: 12, color: D.t2 });
  });
}

// ─────────────────────────────────────────────────────────────────
// S11 — IMAGEM / SCREENSHOT (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "DARK" });
  addLogo(s, 0.4, 0.1);
  tag(s, "DEMONSTRAÇÃO", 0.5, 0.58, D.red);
  s.addText("Screenshot / Print de Tela", { x: 0.5, y: 0.88, w: 12, h: 0.6, fontFace: "Inter", fontSize: 26, bold: true, color: D.t1 });
  card(s, 0.5, 1.72, 9.1, 5.5, D.surf);
  s.addText("[ Insira aqui screenshot,\nprint ou gravação ]", { x: 0.5, y: 1.72, w: 9.1, h: 5.5, fontFace: "Inter", fontSize: 18, color: D.t3, align: "center", valign: "middle" });
  card(s, 9.95, 1.72, 3.4, 2.55, D.surf);
  topbar(s, 9.95, 1.72, 3.4, D.red);
  s.addText("PONTO DE ATENÇÃO", { x: 10.15, y: 1.92, w: 3.0, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: D.red, charSpacing: 1.5 });
  s.addText("Descreva o que o observador deve notar nesta imagem.", { x: 10.15, y: 2.28, w: 3.0, h: 0.8, fontFace: "Inter", fontSize: 12, color: D.t2 });
  card(s, 9.95, 4.55, 3.4, 2.67, D.surf);
  topbar(s, 9.95, 4.55, 3.4, "00BCD4");
  s.addText("CONTEXTO", { x: 10.15, y: 4.75, w: 3.0, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: "00BCD4", charSpacing: 1.5 });
  s.addText("Informação complementar ou instrução de uso relacionada à imagem.", { x: 10.15, y: 5.1, w: 3.0, h: 0.88, fontFace: "Inter", fontSize: 12, color: D.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S12 — ENCERRAMENTO (dark)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "COVER" });
  s.addText("BIA",  { x: 0.4, y: 2.85, w: 3.7, h: 1.0, fontFace: "Inter", fontSize: 60, bold: true, color: "FFFFFF" });
  s.addText("Tech", { x: 0.4, y: 3.75, w: 3.7, h: 0.55, fontFace: "Inter", fontSize: 28, bold: false, color: "FFBBBE" });
  s.addText("Obrigado!", { x: 5.0, y: 2.1, w: 7.8, h: 1.1, fontFace: "Inter", fontSize: 52, bold: true, color: D.t1 });
  s.addText("Dúvidas? Vamos conversar.", { x: 5.0, y: 3.3, w: 7.8, h: 0.52, fontFace: "Inter", fontSize: 18, color: D.t2 });
  s.addShape(pptx.ShapeType.line, { x: 5.0, y: 4.0, w: 7.2, h: 0, line: { color: D.bord, width: 0.5 } });
  [["Nome do Apresentador", true, D.t1], ["cargo@bradesco.com.br", false, D.t2], ["Teams: @handle", false, D.t2]].forEach(([txt, bold, c], i) =>
    s.addText(txt, { x: 5.0, y: 4.22 + i * 0.44, w: 7.8, h: 0.36, fontFace: "Inter", fontSize: 13, bold, color: c })
  );
  s.addText("bia.bradesco.com.br", { x: 5.0, y: 7.0, w: 7.8, h: 0.28, fontFace: "Inter", fontSize: 10, color: "00BCD4" });
}


// ═════════════════════════════════════════════════════════════════
// ── LIGHT SLIDES ──────────────────────────────────────────────────
// ═════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────
// S13 — CAPA (light)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "LIGHT_COVER" });
  s.addText("BIA",  { x: 0.4, y: 2.85, w: 3.7, h: 1.0, fontFace: "Inter", fontSize: 60, bold: true, color: "FFFFFF" });
  s.addText("Tech", { x: 0.4, y: 3.75, w: 3.7, h: 0.55, fontFace: "Inter", fontSize: 28, bold: false, color: "FFBBBE" });
  s.addShape(pptx.ShapeType.line, { x: 0.4, y: 4.38, w: 3.4, h: 0, line: { color: "FFFFFF", width: 0.5, transparency: 60 } });
  s.addText("Ferramentas de IA para o SDLC", { x: 0.4, y: 4.52, w: 3.6, h: 0.35, fontFace: "Inter", fontSize: 11, color: "FFBBBE" });
  s.addText("TÍTULO DA\nAPRESENTAÇÃO", { x: 5.0, y: 1.9, w: 8.0, h: 2.0, fontFace: "Inter", fontSize: 40, bold: true, color: L.t1, charSpacing: -0.5 });
  s.addText("Subtítulo ou descrição do tema abordado nesta apresentação", { x: 5.0, y: 4.05, w: 7.8, h: 0.55, fontFace: "Inter", fontSize: 16, color: L.t2 });
  s.addShape(pptx.ShapeType.line, { x: 5.0, y: 4.7, w: 7.0, h: 0, line: { color: L.bord, width: 0.5 } });
  s.addText("Apresentado por  •  Área / Tribo  •  Bradesco — " + new Date().toLocaleDateString("pt-BR"), { x: 5.0, y: 4.85, w: 7.8, h: 0.28, fontFace: "Inter", fontSize: 9.5, color: L.t3 });
  s.addShape(pptx.ShapeType.ellipse, { x: 12.7, y: 0.18, w: 1.0, h: 1.0, fill: { color: "0097A7", transparency: 70 }, line: { color: "0097A7", width: 0 } });
}

// ─────────────────────────────────────────────────────────────────
// S14 — AGENDA (light)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "LIGHT" });
  addLogoLight(s, 0.4, 0.1);
  s.addText("Agenda", { x: 0.5, y: 0.55, w: 6, h: 0.7, fontFace: "Inter", fontSize: 30, bold: true, color: L.t1 });

  const items = ["Contexto e Objetivos", "Visão Geral da Plataforma", "Demonstração", "Métricas e Resultados", "Próximos Passos"];
  items.forEach((label, i) => {
    const y = 1.5 + i * 0.95;
    cardL(s, 0.5, y, 0.58, 0.58, L.surf2);
    s.addText(String(i + 1).padStart(2, "0"), { x: 0.5, y, w: 0.58, h: 0.58, fontFace: "Inter", fontSize: 13, bold: true, color: L.red, align: "center", valign: "middle" });
    s.addText(label, { x: 1.25, y: y + 0.1, w: 5.5, h: 0.38, fontFace: "Inter", fontSize: 15, color: L.t1 });
    if (i < items.length - 1) s.addShape(pptx.ShapeType.line, { x: 0.5, y: y + 0.68, w: 5.8, h: 0, line: { color: L.bord, width: 0.5 } });
  });

  cardL(s, 7.5, 0.55, 5.4, 6.45);
  s.addText("SOBRE ESTA APRESENTAÇÃO", { x: 7.75, y: 0.78, w: 5.0, h: 0.28, fontFace: "Inter", fontSize: 8, bold: true, color: L.cyan, charSpacing: 1.5 });
  s.addText("Parágrafo introdutório explicando o objetivo desta apresentação e o que o público pode esperar.", { x: 7.75, y: 1.15, w: 4.9, h: 1.3, fontFace: "Inter", fontSize: 13, color: L.t2 });
  s.addShape(pptx.ShapeType.line, { x: 7.75, y: 2.55, w: 4.7, h: 0, line: { color: L.bord, width: 0.5 } });
  [["Duração", "~30 min"], ["Público", "Time de Engenharia"], ["Data", new Date().toLocaleDateString("pt-BR")]].forEach(([lbl, val], i) => {
    const y = 2.75 + i * 0.88;
    s.addText(lbl.toUpperCase(), { x: 7.75, y, w: 4.7, h: 0.22, fontFace: "Inter", fontSize: 8, color: L.t2, charSpacing: 1 });
    s.addText(val, { x: 7.75, y: y + 0.24, w: 4.7, h: 0.42, fontFace: "Inter", fontSize: 16, bold: true, color: L.t1 });
  });
}

// ─────────────────────────────────────────────────────────────────
// S15 — DIVISOR DE SEÇÃO (light)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "LIGHT_SECTION" });
  addLogoLight(s, 0.4, 0.1);
  s.addText("01", { x: 0.4, y: 1.2, w: 4.5, h: 1.8, fontFace: "Inter", fontSize: 120, bold: true, color: L.red, transparency: 18 });
  s.addShape(pptx.ShapeType.line, { x: 0.5, y: 3.18, w: 5.5, h: 0, line: { color: L.red, width: 1.5 } });
  s.addText("TÍTULO DA SEÇÃO", { x: 0.5, y: 3.35, w: 9, h: 0.7, fontFace: "Inter", fontSize: 32, bold: true, color: L.t1 });
  s.addText("Breve descrição do que será abordado nesta seção da apresentação.", { x: 0.5, y: 4.12, w: 7.5, h: 0.5, fontFace: "Inter", fontSize: 14, color: L.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S16 — CONTEÚDO COM BULLETS (light)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "LIGHT" });
  addLogoLight(s, 0.4, 0.1);
  tag(s, "CONTEXTO", 0.5, 0.58, L.red);
  s.addText("Título do Slide", { x: 0.5, y: 0.88, w: 7.5, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: L.t1 });

  [
    ["Ponto principal de discussão", "Detalhamento adicional que contextualiza e explica o ponto acima"],
    ["Segundo ponto relevante",      "Complemento ao contexto apresentado com dado ou evidência"],
    ["Terceiro ponto técnico",       "Informação técnica ou de negócio pertinente ao tema do slide"],
    ["Conclusão ou próximo passo",   "O que este bloco de informação implica ou requer de ação"],
  ].forEach(([title, sub], i) => {
    const y = 1.72 + i * 1.1;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: y + 0.07, w: 0.12, h: 0.12, fill: { color: L.red }, line: { color: L.red, width: 0 } });
    s.addText(title, { x: 0.75, y, w: 7, h: 0.4, fontFace: "Inter", fontSize: 14, bold: true, color: L.t1 });
    s.addText(sub,   { x: 0.75, y: y + 0.44, w: 7, h: 0.4, fontFace: "Inter", fontSize: 12, color: L.t2 });
  });

  cardL(s, 8.5, 0.55, 4.4, 6.55);
  s.addShape(pptx.ShapeType.rect, { x: 8.5, y: 0.55, w: 4.4, h: 0.04, fill: { color: L.cyan }, line: { color: L.cyan, width: 0 } });
  s.addText("NOTA DE APOIO", { x: 8.75, y: 0.75, w: 3.9, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: L.cyan, charSpacing: 1.5 });
  s.addText("Adicione dados, prints, gráficos ou informações complementares que apoiam o conteúdo à esquerda.", { x: 8.75, y: 1.1, w: 3.9, h: 1.4, fontFace: "Inter", fontSize: 12, color: L.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S17 — MÉTRICAS (light)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "LIGHT" });
  addLogoLight(s, 0.4, 0.1);
  tag(s, "RESULTADOS", 0.5, 0.58, L.red);
  s.addText("Métricas e Resultados", { x: 0.5, y: 0.88, w: 12, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: L.t1 });

  [
    { val: "47%",  label: "Redução de tempo",  desc: "em code review",       color: L.red  },
    { val: "3.2×", label: "Velocidade",         desc: "na geração de testes", color: L.cyan },
    { val: "89%",  label: "Satisfação NPS",     desc: "entre devs ativos",    color: L.red  },
    { val: "12k",  label: "Commits analisados", desc: "no último trimestre",  color: L.cyan },
  ].forEach((m, i) => {
    const x = 0.5 + i * 3.15;
    cardL(s, x, 1.75, 2.9, 4.2);
    s.addShape(pptx.ShapeType.rect, { x, y: 1.75, w: 2.9, h: 0.04, fill: { color: m.color }, line: { color: m.color, width: 0 } });
    s.addText(m.val, { x: x + 0.2, y: 2.1,  w: 2.5, h: 1.3, fontFace: "Inter", fontSize: 54, bold: true, color: m.color });
    s.addText(m.label, { x: x + 0.2, y: 3.5, w: 2.5, h: 0.38, fontFace: "Inter", fontSize: 13, bold: true, color: L.t1 });
    s.addText(m.desc,  { x: x + 0.2, y: 3.9, w: 2.5, h: 0.35, fontFace: "Inter", fontSize: 11, color: L.t2 });
  });
  cardL(s, 0.5, 6.1, 12.35, 1.1, L.surf2);
  s.addText("Período: Q1 2025 – Q1 2026  •  Base: 420 engenheiros ativos  •  Fonte: BIA Analytics Dashboard", { x: 0.75, y: 6.38, w: 11.8, h: 0.35, fontFace: "Inter", fontSize: 10, color: L.t2, align: "center" });
}

// ─────────────────────────────────────────────────────────────────
// S18 — DUAS COLUNAS (light)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "LIGHT" });
  addLogoLight(s, 0.4, 0.1);
  tag(s, "COMPARATIVO", 0.5, 0.58, L.cyan);
  s.addText("Título Comparativo", { x: 0.5, y: 0.88, w: 12.3, h: 0.6, fontFace: "Inter", fontSize: 26, bold: true, color: L.t1 });

  [
    { x: 0.5, color: L.red,  label: "COLUNA A", title: "Situação Atual",     items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
    { x: 7.0, color: L.cyan, label: "COLUNA B", title: "Situação Desejada",  items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
  ].forEach(({ x, color, label, title, items }) => {
    cardL(s, x, 1.65, 6.0, 5.45);
    s.addShape(pptx.ShapeType.rect, { x, y: 1.65, w: 6.0, h: 0.04, fill: { color }, line: { color, width: 0 } });
    s.addText(label, { x: x + 0.2, y: 1.85, w: 5.6, h: 0.28, fontFace: "Inter", fontSize: 9, bold: true, color, charSpacing: 1.5 });
    s.addText(title, { x: x + 0.2, y: 2.2,  w: 5.6, h: 0.5,  fontFace: "Inter", fontSize: 19, bold: true, color: L.t1 });
    items.forEach((t, i) => s.addText("— " + t, { x: x + 0.2, y: 2.9 + i * 0.7, w: 5.6, h: 0.45, fontFace: "Inter", fontSize: 13, color: L.t2 }));
  });
}

// ─────────────────────────────────────────────────────────────────
// S19 — ENCERRAMENTO (light)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "LIGHT_COVER" });
  s.addText("BIA",  { x: 0.4, y: 2.85, w: 3.7, h: 1.0, fontFace: "Inter", fontSize: 60, bold: true, color: "FFFFFF" });
  s.addText("Tech", { x: 0.4, y: 3.75, w: 3.7, h: 0.55, fontFace: "Inter", fontSize: 28, bold: false, color: "FFBBBE" });
  s.addText("Obrigado!", { x: 5.0, y: 2.1, w: 7.8, h: 1.1, fontFace: "Inter", fontSize: 52, bold: true, color: L.t1 });
  s.addText("Dúvidas? Vamos conversar.", { x: 5.0, y: 3.3, w: 7.8, h: 0.52, fontFace: "Inter", fontSize: 18, color: L.t2 });
  s.addShape(pptx.ShapeType.line, { x: 5.0, y: 4.0, w: 7.2, h: 0, line: { color: L.bord, width: 0.5 } });
  [["Nome do Apresentador", true, L.t1], ["cargo@bradesco.com.br", false, L.t2], ["Teams: @handle", false, L.t2]].forEach(([txt, bold, c], i) =>
    s.addText(txt, { x: 5.0, y: 4.22 + i * 0.44, w: 7.8, h: 0.36, fontFace: "Inter", fontSize: 13, bold, color: c })
  );
  s.addText("bia.bradesco.com.br", { x: 5.0, y: 7.0, w: 7.8, h: 0.28, fontFace: "Inter", fontSize: 10, color: L.cyan });
}

// ═════════════════════════════════════════════════════════════════
// ── SÓBRIOS — sem pontos de luz ───────────────────────────────────
// ═════════════════════════════════════════════════════════════════

// Tokens sóbrios
const S = {
  red:  "CC092F", cyan: "0097A7",
  t1:   "1A1A1A", t2:  "555555", t3: "BBBBBB",
  bord: "DDDDDD", surf: "FFFFFF", surf2: "F5F5F5",
};

function addLogoSober(s, x, y, sz = 11) {
  s.addText(
    [
      { text: "BIA",   options: { bold: true,  color: S.t1 } },
      { text: "  |  ", options: { bold: false, color: "CCCCCC" } },
      { text: "Tech",  options: { bold: false, color: S.t2 } },
    ],
    { x, y, w: 2.5, h: 0.35, fontFace: "Inter", fontSize: sz, charSpacing: 0.3 }
  );
}

function cardS(s, x, y, w, h, clr = S.surf) {
  s.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    fill: { color: clr },
    line: { color: S.bord, width: 0.5 },
    rectRadius: 0.1,
  });
}

function tagS(s, label, x, y, color = S.red) {
  const tw = label.length * 0.085 + 0.28;
  s.addShape(pptx.ShapeType.roundRect, { x, y, w: tw, h: 0.22, fill: { color, transparency: 88 }, line: { color, width: 0.5 }, rectRadius: 0.05 });
  s.addText(label, { x, y, w: tw, h: 0.22, fontFace: "Inter", fontSize: 8, bold: true, color, align: "center", valign: "middle" });
}

// ─────────────────────────────────────────────────────────────────
// S20 — CONTEÚDO (branco)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "WHITE" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "CONTEXTO", 0.5, 0.58, S.red);
  s.addText("Título do Slide", { x: 0.5, y: 0.88, w: 7.5, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: S.t1 });

  [
    ["Ponto principal de discussão", "Detalhamento adicional que contextualiza e explica o ponto acima"],
    ["Segundo ponto relevante",      "Complemento ao contexto apresentado com dado ou evidência"],
    ["Terceiro ponto técnico",       "Informação técnica ou de negócio pertinente ao tema do slide"],
    ["Conclusão ou próximo passo",   "O que este bloco de informação implica ou requer de ação"],
  ].forEach(([title, sub], i) => {
    const y = 1.72 + i * 1.1;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: y + 0.07, w: 0.12, h: 0.12, fill: { color: S.red }, line: { color: S.red, width: 0 } });
    s.addText(title, { x: 0.75, y, w: 7, h: 0.4, fontFace: "Inter", fontSize: 14, bold: true, color: S.t1 });
    s.addText(sub,   { x: 0.75, y: y + 0.44, w: 7, h: 0.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
  });

  cardS(s, 8.5, 0.55, 4.4, 6.55, S.surf2);
  s.addShape(pptx.ShapeType.rect, { x: 8.5, y: 0.55, w: 4.4, h: 0.04, fill: { color: S.cyan }, line: { color: S.cyan, width: 0 } });
  s.addText("NOTA DE APOIO", { x: 8.75, y: 0.75, w: 3.9, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: S.cyan, charSpacing: 1.5 });
  s.addText("Adicione dados, prints, gráficos ou informações complementares que apoiam o conteúdo à esquerda.", { x: 8.75, y: 1.1, w: 3.9, h: 1.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S21 — DUAS COLUNAS (branco)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "WHITE" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "COMPARATIVO", 0.5, 0.58, S.cyan);
  s.addText("Título Comparativo", { x: 0.5, y: 0.88, w: 12.3, h: 0.6, fontFace: "Inter", fontSize: 26, bold: true, color: S.t1 });

  [
    { x: 0.5, color: S.red,  label: "COLUNA A", title: "Situação Atual",    items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
    { x: 7.0, color: S.cyan, label: "COLUNA B", title: "Situação Desejada", items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
  ].forEach(({ x, color, label, title, items }) => {
    cardS(s, x, 1.65, 6.0, 5.45, S.surf2);
    s.addShape(pptx.ShapeType.rect, { x, y: 1.65, w: 6.0, h: 0.04, fill: { color }, line: { color, width: 0 } });
    s.addText(label, { x: x + 0.2, y: 1.85, w: 5.6, h: 0.28, fontFace: "Inter", fontSize: 9, bold: true, color, charSpacing: 1.5 });
    s.addText(title, { x: x + 0.2, y: 2.2,  w: 5.6, h: 0.5,  fontFace: "Inter", fontSize: 19, bold: true, color: S.t1 });
    items.forEach((t, i) => s.addText("— " + t, { x: x + 0.2, y: 2.9 + i * 0.7, w: 5.6, h: 0.45, fontFace: "Inter", fontSize: 13, color: S.t2 }));
  });
}

// ─────────────────────────────────────────────────────────────────
// S22 — MÉTRICAS (branco)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "WHITE" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "RESULTADOS", 0.5, 0.58, S.red);
  s.addText("Métricas e Resultados", { x: 0.5, y: 0.88, w: 12, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: S.t1 });

  [
    { val: "47%",  label: "Redução de tempo",  desc: "em code review",       color: S.red  },
    { val: "3.2×", label: "Velocidade",         desc: "na geração de testes", color: S.cyan },
    { val: "89%",  label: "Satisfação NPS",     desc: "entre devs ativos",    color: S.red  },
    { val: "12k",  label: "Commits analisados", desc: "no último trimestre",  color: S.cyan },
  ].forEach((m, i) => {
    const x = 0.5 + i * 3.15;
    cardS(s, x, 1.75, 2.9, 4.2, S.surf2);
    s.addShape(pptx.ShapeType.rect, { x, y: 1.75, w: 2.9, h: 0.04, fill: { color: m.color }, line: { color: m.color, width: 0 } });
    s.addText(m.val,   { x: x + 0.2, y: 2.1,  w: 2.5, h: 1.3,  fontFace: "Inter", fontSize: 54, bold: true, color: m.color });
    s.addText(m.label, { x: x + 0.2, y: 3.5,  w: 2.5, h: 0.38, fontFace: "Inter", fontSize: 13, bold: true, color: S.t1 });
    s.addText(m.desc,  { x: x + 0.2, y: 3.9,  w: 2.5, h: 0.35, fontFace: "Inter", fontSize: 11, color: S.t2 });
  });
  cardS(s, 0.5, 6.1, 12.35, 1.1, S.surf2);
  s.addText("Período: Q1 2025 – Q1 2026  •  Base: 420 engenheiros ativos  •  Fonte: BIA Analytics Dashboard", { x: 0.75, y: 6.38, w: 11.8, h: 0.35, fontFace: "Inter", fontSize: 10, color: S.t2, align: "center" });
}

// ─────────────────────────────────────────────────────────────────
// S23 — CONTEÚDO (cinza)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "GRAY" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "CONTEXTO", 0.5, 0.58, S.red);
  s.addText("Título do Slide", { x: 0.5, y: 0.88, w: 7.5, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: S.t1 });

  [
    ["Ponto principal de discussão", "Detalhamento adicional que contextualiza e explica o ponto acima"],
    ["Segundo ponto relevante",      "Complemento ao contexto apresentado com dado ou evidência"],
    ["Terceiro ponto técnico",       "Informação técnica ou de negócio pertinente ao tema do slide"],
    ["Conclusão ou próximo passo",   "O que este bloco de informação implica ou requer de ação"],
  ].forEach(([title, sub], i) => {
    const y = 1.72 + i * 1.1;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: y + 0.07, w: 0.12, h: 0.12, fill: { color: S.red }, line: { color: S.red, width: 0 } });
    s.addText(title, { x: 0.75, y, w: 7, h: 0.4, fontFace: "Inter", fontSize: 14, bold: true, color: S.t1 });
    s.addText(sub,   { x: 0.75, y: y + 0.44, w: 7, h: 0.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
  });

  cardS(s, 8.5, 0.55, 4.4, 6.55); // branco puro no card para contraste no fundo cinza
  s.addShape(pptx.ShapeType.rect, { x: 8.5, y: 0.55, w: 4.4, h: 0.04, fill: { color: S.cyan }, line: { color: S.cyan, width: 0 } });
  s.addText("NOTA DE APOIO", { x: 8.75, y: 0.75, w: 3.9, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: S.cyan, charSpacing: 1.5 });
  s.addText("Adicione dados, prints, gráficos ou informações complementares que apoiam o conteúdo à esquerda.", { x: 8.75, y: 1.1, w: 3.9, h: 1.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S24 — DUAS COLUNAS (cinza)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "GRAY" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "COMPARATIVO", 0.5, 0.58, S.cyan);
  s.addText("Título Comparativo", { x: 0.5, y: 0.88, w: 12.3, h: 0.6, fontFace: "Inter", fontSize: 26, bold: true, color: S.t1 });

  [
    { x: 0.5, color: S.red,  label: "COLUNA A", title: "Situação Atual",    items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
    { x: 7.0, color: S.cyan, label: "COLUNA B", title: "Situação Desejada", items: ["Item de destaque", "Segundo ponto", "Terceiro item", "Dado de suporte"] },
  ].forEach(({ x, color, label, title, items }) => {
    cardS(s, x, 1.65, 6.0, 5.45); // branco no card para respirar no cinza
    s.addShape(pptx.ShapeType.rect, { x, y: 1.65, w: 6.0, h: 0.04, fill: { color }, line: { color, width: 0 } });
    s.addText(label, { x: x + 0.2, y: 1.85, w: 5.6, h: 0.28, fontFace: "Inter", fontSize: 9, bold: true, color, charSpacing: 1.5 });
    s.addText(title, { x: x + 0.2, y: 2.2,  w: 5.6, h: 0.5,  fontFace: "Inter", fontSize: 19, bold: true, color: S.t1 });
    items.forEach((t, i) => s.addText("— " + t, { x: x + 0.2, y: 2.9 + i * 0.7, w: 5.6, h: 0.45, fontFace: "Inter", fontSize: 13, color: S.t2 }));
  });
}

// ─────────────────────────────────────────────────────────────────
// S25 — MÉTRICAS (cinza)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "GRAY" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "RESULTADOS", 0.5, 0.58, S.red);
  s.addText("Métricas e Resultados", { x: 0.5, y: 0.88, w: 12, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: S.t1 });

  [
    { val: "47%",  label: "Redução de tempo",  desc: "em code review",       color: S.red  },
    { val: "3.2×", label: "Velocidade",         desc: "na geração de testes", color: S.cyan },
    { val: "89%",  label: "Satisfação NPS",     desc: "entre devs ativos",    color: S.red  },
    { val: "12k",  label: "Commits analisados", desc: "no último trimestre",  color: S.cyan },
  ].forEach((m, i) => {
    const x = 0.5 + i * 3.15;
    cardS(s, x, 1.75, 2.9, 4.2); // card branco no fundo cinza
    s.addShape(pptx.ShapeType.rect, { x, y: 1.75, w: 2.9, h: 0.04, fill: { color: m.color }, line: { color: m.color, width: 0 } });
    s.addText(m.val,   { x: x + 0.2, y: 2.1,  w: 2.5, h: 1.3,  fontFace: "Inter", fontSize: 54, bold: true, color: m.color });
    s.addText(m.label, { x: x + 0.2, y: 3.5,  w: 2.5, h: 0.38, fontFace: "Inter", fontSize: 13, bold: true, color: S.t1 });
    s.addText(m.desc,  { x: x + 0.2, y: 3.9,  w: 2.5, h: 0.35, fontFace: "Inter", fontSize: 11, color: S.t2 });
  });
  cardS(s, 0.5, 6.1, 12.35, 1.1);
  s.addText("Período: Q1 2025 – Q1 2026  •  Base: 420 engenheiros ativos  •  Fonte: BIA Analytics Dashboard", { x: 0.75, y: 6.38, w: 11.8, h: 0.35, fontFace: "Inter", fontSize: 10, color: S.t2, align: "center" });
}

// ─────────────────────────────────────────────────────────────────
// S26 — CONTEÚDO (branco + glow discreto, sem grid)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "WHITE_GLOW" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "CONTEXTO", 0.5, 0.58, S.red);
  s.addText("Título do Slide", { x: 0.5, y: 0.88, w: 7.5, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: S.t1 });

  [
    ["Ponto principal de discussão", "Detalhamento adicional que contextualiza e explica o ponto acima"],
    ["Segundo ponto relevante",      "Complemento ao contexto apresentado com dado ou evidência"],
    ["Terceiro ponto técnico",       "Informação técnica ou de negócio pertinente ao tema do slide"],
    ["Conclusão ou próximo passo",   "O que este bloco de informação implica ou requer de ação"],
  ].forEach(([title, sub], i) => {
    const y = 1.72 + i * 1.1;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: y + 0.07, w: 0.12, h: 0.12, fill: { color: S.red }, line: { color: S.red, width: 0 } });
    s.addText(title, { x: 0.75, y, w: 7, h: 0.4, fontFace: "Inter", fontSize: 14, bold: true, color: S.t1 });
    s.addText(sub,   { x: 0.75, y: y + 0.44, w: 7, h: 0.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
  });

  cardS(s, 8.5, 0.55, 4.4, 6.55, S.surf2);
  s.addShape(pptx.ShapeType.rect, { x: 8.5, y: 0.55, w: 4.4, h: 0.04, fill: { color: S.cyan }, line: { color: S.cyan, width: 0 } });
  s.addText("NOTA DE APOIO", { x: 8.75, y: 0.75, w: 3.9, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: S.cyan, charSpacing: 1.5 });
  s.addText("Adicione dados, prints, gráficos ou informações complementares que apoiam o conteúdo à esquerda.", { x: 8.75, y: 1.1, w: 3.9, h: 1.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
}

// ─────────────────────────────────────────────────────────────────
// S27 — CONTEÚDO (cinza + glow discreto, sem grid)
// ─────────────────────────────────────────────────────────────────
{
  const s = pptx.addSlide({ masterName: "GRAY_GLOW" });
  addLogoSober(s, 0.4, 0.1);
  tagS(s, "CONTEXTO", 0.5, 0.58, S.red);
  s.addText("Título do Slide", { x: 0.5, y: 0.88, w: 7.5, h: 0.65, fontFace: "Inter", fontSize: 28, bold: true, color: S.t1 });

  [
    ["Ponto principal de discussão", "Detalhamento adicional que contextualiza e explica o ponto acima"],
    ["Segundo ponto relevante",      "Complemento ao contexto apresentado com dado ou evidência"],
    ["Terceiro ponto técnico",       "Informação técnica ou de negócio pertinente ao tema do slide"],
    ["Conclusão ou próximo passo",   "O que este bloco de informação implica ou requer de ação"],
  ].forEach(([title, sub], i) => {
    const y = 1.72 + i * 1.1;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: y + 0.07, w: 0.12, h: 0.12, fill: { color: S.red }, line: { color: S.red, width: 0 } });
    s.addText(title, { x: 0.75, y, w: 7, h: 0.4, fontFace: "Inter", fontSize: 14, bold: true, color: S.t1 });
    s.addText(sub,   { x: 0.75, y: y + 0.44, w: 7, h: 0.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
  });

  cardS(s, 8.5, 0.55, 4.4, 6.55); // card branco sobre cinza
  s.addShape(pptx.ShapeType.rect, { x: 8.5, y: 0.55, w: 4.4, h: 0.04, fill: { color: S.cyan }, line: { color: S.cyan, width: 0 } });
  s.addText("NOTA DE APOIO", { x: 8.75, y: 0.75, w: 3.9, h: 0.26, fontFace: "Inter", fontSize: 8, bold: true, color: S.cyan, charSpacing: 1.5 });
  s.addText("Adicione dados, prints, gráficos ou informações complementares que apoiam o conteúdo à esquerda.", { x: 8.75, y: 1.1, w: 3.9, h: 1.4, fontFace: "Inter", fontSize: 12, color: S.t2 });
}

// ─────────────────────────────────────────────────────────────────
// WRITE
// ─────────────────────────────────────────────────────────────────
pptx.writeFile({ fileName: "c:/Users/danil/Downloads/workspace/bia-tech/new/BIA-Tech-Template.pptx" })
  .then(() => console.log("✓ BIA-Tech-Template.pptx gerado — 27 slides"))
  .catch(err => console.error("✗ Erro:", err));
