/**
 * Gera backgrounds PNG para os slides BIA Tech
 * - bg-dark.png   : fundo escuro (#1A1A1A) + grid + glows
 * - bg-section.png: fundo escuro + acento lateral cyan
 * - bg-light.png  : fundo claro (#FAFAFA) + grid sutil + glows suaves
 * - bg-cover.png  : capa escura com painel vermelho
 */

const fs   = require("fs");
const path = require("path");
const { PNG } = require("pngjs");

const OUT = path.join(__dirname, "new", "BIA", "slides");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

// 16:9 — 1280 × 720
const W = 1280, H = 720;

// ── helpers ──────────────────────────────────────────────────────
function hex(h) {
  const n = parseInt(h.replace("#",""), 16);
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

function createPNG(w, h) {
  const png = new PNG({ width: w, height: h, filterType: -1 });
  png.data = Buffer.alloc(w * h * 4, 0);
  return png;
}

function setPixel(png, x, y, r, g, b, a) {
  if (x < 0 || x >= png.width || y < 0 || y >= png.height) return;
  const idx = (y * png.width + x) * 4;
  // alpha-blend over existing
  const ea = png.data[idx + 3] / 255;
  const na = a / 255;
  const oa = na + ea * (1 - na);
  if (oa === 0) return;
  png.data[idx    ] = Math.round((r * na + png.data[idx    ] * ea * (1 - na)) / oa);
  png.data[idx + 1] = Math.round((g * na + png.data[idx + 1] * ea * (1 - na)) / oa);
  png.data[idx + 2] = Math.round((b * na + png.data[idx + 2] * ea * (1 - na)) / oa);
  png.data[idx + 3] = Math.round(oa * 255);
}

function fillRect(png, x0, y0, w, h, r, g, b, a = 255) {
  for (let y = y0; y < y0 + h; y++)
    for (let x = x0; x < x0 + w; x++)
      setPixel(png, x, y, r, g, b, a);
}

function drawGrid(png, cellPx, lineA, bgR, bgG, bgB) {
  for (let x = 0; x < png.width; x += cellPx)
    for (let y = 0; y < png.height; y++)
      setPixel(png, x, y, 255, 255, 255, lineA);
  for (let y = 0; y < png.height; y += cellPx)
    for (let x = 0; x < png.width; x++)
      setPixel(png, x, y, 255, 255, 255, lineA);
}

function drawGridDark(png, cellPx, lineA) {
  for (let x = 0; x < png.width; x += cellPx)
    for (let y = 0; y < png.height; y++)
      setPixel(png, x, y, 255, 255, 255, lineA);
  for (let y = 0; y < png.height; y += cellPx)
    for (let x = 0; x < png.width; x++)
      setPixel(png, x, y, 255, 255, 255, lineA);
}

function drawGridLight(png, cellPx, lineA) {
  for (let x = 0; x < png.width; x += cellPx)
    for (let y = 0; y < png.height; y++)
      setPixel(png, x, y, 0, 0, 0, lineA);
  for (let y = 0; y < png.height; y += cellPx)
    for (let x = 0; x < png.width; x++)
      setPixel(png, x, y, 0, 0, 0, lineA);
}

function drawRadial(png, cx, cy, radius, r, g, b, maxA) {
  const x0 = Math.max(0, Math.floor(cx - radius));
  const x1 = Math.min(png.width - 1, Math.ceil(cx + radius));
  const y0 = Math.max(0, Math.floor(cy - radius));
  const y1 = Math.min(png.height - 1, Math.ceil(cy + radius));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist >= radius) continue;
      const t = dist / radius;          // 0=centre 1=edge
      const falloff = 1 - t * t;        // quadratic, softer than linear
      const a = Math.round(maxA * falloff);
      if (a < 1) continue;
      setPixel(png, x, y, r, g, b, a);
    }
  }
}

function savePNG(png, name) {
  const buf = PNG.sync.write(png);
  const out = path.join(OUT, name);
  fs.writeFileSync(out, buf);
  console.log(`✓ ${name}`);
}

// ── brand colors ─────────────────────────────────────────────────
const RED  = [204,  9, 47];
const CYAN = [  0,188,212];

// ─────────────────────────────────────────────────────────────────
// BG DARK
// background: #1A1A1A  grid + 4 glows
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  // base fill #1A1A1A
  fillRect(p, 0, 0, W, H, 26, 26, 26, 255);
  // grid — 48px cell, alpha 14
  drawGridDark(p, 48, 14);
  // glows
  drawRadial(p,  W * 1.05, H * -0.1,  520, ...RED,   90);   // top-right red
  drawRadial(p, -W * 0.05, H *  0.55, 420, ...CYAN,  60);   // mid-left cyan
  drawRadial(p,  W * 0.85, H *  0.85, 400, ...RED,   65);   // bottom-right red
  drawRadial(p,  W * 0.35, H *  1.0,  360, ...CYAN,  50);   // bottom-center cyan
  savePNG(p, "bg-dark.png");
}

// ─────────────────────────────────────────────────────────────────
// BG SECTION (cyan left accent)
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  fillRect(p, 0, 0, W, H, 22, 22, 22, 255);
  drawGridDark(p, 48, 12);
  // cyan glow center-left
  drawRadial(p,  W * 0.0,  H * 0.5,  500, ...CYAN,  55);
  drawRadial(p,  W * 1.0,  H * 0.5,  380, ...RED,   50);
  drawRadial(p,  W * 0.6,  H * 1.1,  380, ...CYAN,  40);
  // left accent bar (6px wide, full height, cyan)
  fillRect(p, 0, 0, 6, H, ...CYAN, 255);
  savePNG(p, "bg-section.png");
}

// ─────────────────────────────────────────────────────────────────
// BG COVER (painel vermelho à esquerda)
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  // base
  fillRect(p, 0, 0, W, H, 22, 22, 22, 255);
  drawGridDark(p, 48, 10);
  // cyan glow top-right
  drawRadial(p, W, 0, 420, ...CYAN, 50);
  drawRadial(p, W * 0.7, H, 380, ...RED, 55);

  // left red panel (34% of width)
  const panelW = Math.round(W * 0.34);
  fillRect(p, 0, 0, panelW, H, ...RED, 255);
  // subtle noise/texture on panel via darker grid
  for (let x = 0; x < panelW; x += 48)
    for (let y = 0; y < H; y++)
      setPixel(p, x, y, 255, 255, 255, 12);
  for (let y = 0; y < H; y += 48)
    for (let x = 0; x < panelW; x++)
      setPixel(p, x, y, 255, 255, 255, 12);
  // soft right-edge shadow on panel
  for (let x = panelW - 40; x < panelW; x++) {
    const t = (x - (panelW - 40)) / 40;
    const a = Math.round(t * 80);
    for (let y = 0; y < H; y++)
      setPixel(p, x, y, 0, 0, 0, a);
  }
  savePNG(p, "bg-cover.png");
}

// ─────────────────────────────────────────────────────────────────
// BG LIGHT
// background: #F5F5F5, grid dark, glows super-soft
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  fillRect(p, 0, 0, W, H, 245, 245, 245, 255);
  // grid — 48px, alpha 18
  drawGridLight(p, 48, 18);
  // very soft glows
  drawRadial(p,  W * 1.05, H * -0.1,  480, ...RED,   38);
  drawRadial(p, -W * 0.05, H *  0.55, 400, ...CYAN,  28);
  drawRadial(p,  W * 0.85, H *  0.95, 380, ...RED,   30);
  drawRadial(p,  W * 0.35, H *  1.05, 340, ...CYAN,  24);
  savePNG(p, "bg-light.png");
}

// ─────────────────────────────────────────────────────────────────
// BG LIGHT COVER (painel vermelho, fundo claro)
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  fillRect(p, 0, 0, W, H, 245, 245, 245, 255);
  drawGridLight(p, 48, 16);
  drawRadial(p, W, 0, 380, ...CYAN, 28);
  drawRadial(p, W * 0.7, H, 350, ...RED, 30);

  const panelW = Math.round(W * 0.34);
  fillRect(p, 0, 0, panelW, H, ...RED, 255);
  for (let x = 0; x < panelW; x += 48)
    for (let y = 0; y < H; y++)
      setPixel(p, x, y, 255, 255, 255, 12);
  for (let y = 0; y < H; y += 48)
    for (let x = 0; x < panelW; x++)
      setPixel(p, x, y, 255, 255, 255, 12);
  for (let x = panelW - 40; x < panelW; x++) {
    const t = (x - (panelW - 40)) / 40;
    const a = Math.round(t * 60);
    for (let y = 0; y < H; y++)
      setPixel(p, x, y, 0, 0, 0, a);
  }
  savePNG(p, "bg-light-cover.png");
}

// ─────────────────────────────────────────────────────────────────
// BG WHITE — fundo branco puro, grid bem sutil, sem glow
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  fillRect(p, 0, 0, W, H, 255, 255, 255, 255);
  drawGridLight(p, 48, 22);
  savePNG(p, "bg-white.png");
}

// ─────────────────────────────────────────────────────────────────
// BG GRAY — cinza neutro #EFEFEF, grid sutil, sem glow
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  fillRect(p, 0, 0, W, H, 235, 235, 235, 255);
  drawGridLight(p, 48, 20);
  savePNG(p, "bg-gray.png");
}

// ─────────────────────────────────────────────────────────────────
// BG WHITE GLOW — branco puro, sem grid, glow discreto no canto
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  fillRect(p, 0, 0, W, H, 255, 255, 255, 255);
  // glow vermelho no canto superior direito — muito suave
  drawRadial(p, W * 1.02, H * -0.05, 420, ...RED,  22);
  // glow cyan no canto inferior esquerdo — ainda mais suave
  drawRadial(p, W * -0.02, H * 1.05, 360, ...CYAN, 16);
  savePNG(p, "bg-white-glow.png");
}

// ─────────────────────────────────────────────────────────────────
// BG GRAY GLOW — cinza neutro, sem grid, glow discreto no canto
// ─────────────────────────────────────────────────────────────────
{
  const p = createPNG(W, H);
  fillRect(p, 0, 0, W, H, 235, 235, 235, 255);
  // glow vermelho no canto superior direito
  drawRadial(p, W * 1.02, H * -0.05, 420, ...RED,  26);
  // glow cyan no canto inferior esquerdo
  drawRadial(p, W * -0.02, H * 1.05, 360, ...CYAN, 20);
  savePNG(p, "bg-gray-glow.png");
}

console.log("\nTodos os backgrounds gerados em:", OUT);
