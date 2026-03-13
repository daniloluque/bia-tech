# BIATech — Design System Prompt

> Adicione este arquivo ao contexto do seu agente (GitHub Copilot, Cursor, Claude, etc.) para que toda interface gerada siga automaticamente a identidade visual da BIATech.

---

## Identidade

**BIATech** é a plataforma de Inteligência Artificial dos times de TI do Bradesco. O produto é técnico, interno e voltado para engenheiros — a interface deve refletir isso: densa de informação, precisa, sem elementos decorativos supérfluos.

**Nome do produto:** `BIATech` (sem espaço, sem hífen)
**Tagline:** Bradesco Inteligência Artificial

---

## Paleta de cores

Use exclusivamente estas cores. **Nunca use laranja** (conflito Itaú) **nem roxo/violeta** (conflito Nubank).

```css
/* Tokens obrigatórios — copie para qualquer projeto */
:root {
  /* Primária — âncora institucional Bradesco */
  --bia-red:        #B91C1C;
  --bia-red-light:  #FEE2E2;
  --bia-red-dark:   #7F1D1D;

  /* IA — elementos de inteligência artificial ativa */
  --bia-cyan:       #06B6D4;
  --bia-cyan-light: #ECFEFF;
  --bia-cyan-dark:  #0E7490;

  /* Dark base — ambientes técnicos e dashboards */
  --bia-dark:       #0F172A;
  --bia-dark-2:     #1E293B;
  --bia-dark-3:     #334155;

  /* Suporte — dados e confiança */
  --bia-blue:       #1E40AF;
  --bia-blue-light: #EFF6FF;

  /* Neutros */
  --bia-slate:      #64748B;
  --bia-slate-light:#F1F5F9;
  --bia-white:      #F8FAFC;

  /* Texto */
  --bia-text:       #0F172A;
  --bia-text-2:     #475569;
  --bia-text-3:     #94A3B8;

  /* Semânticos — use apenas para status */
  --bia-success:    #16A34A;
  --bia-warning:    #F59E0B;
  --bia-danger:     #EF4444;
}
```

### Regras de uso das cores

| Cor | Usar para |
|-----|-----------|
| `--bia-red` | Logo, botões primários, badges críticos, âncora de marca |
| `--bia-cyan` | Progress bars de IA, estados ativos, destaques interativos |
| `--bia-dark` | Fundo de dashboards, sidebar, modo escuro |
| `--bia-blue` | Gráficos de dados, links, elementos informativos |
| `--bia-white` | Fundo de superfícies claras, cards em light mode |
| `--bia-danger` | Incidentes P1, erros críticos |
| `--bia-warning` | Incidentes P2, alertas médios |
| `--bia-success` | Resolvidos, aprovados, SLA ok |

---

## Tipografia

Três typefaces com papéis fixos. Importe via Google Fonts.

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Hierarquia

```css
/* Display — logotipo, títulos de página, números grandes */
.bia-display {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 0.95;
}

/* Heading H1 */
.bia-h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -1px;
}

/* Heading H2 */
.bia-h2 {
  font-family: 'Syne', sans-serif;
  font-size: 20px;
  font-weight: 600;
}

/* Corpo de texto */
.bia-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--bia-text-2);
}

/* Dados técnicos, labels, código, eyebrows */
.bia-mono {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 400;
}

/* Labels de seção (eyebrow) */
.bia-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bia-cyan);
}
```

### Escala rápida

| Role | Font | Size | Weight |
|------|------|------|--------|
| Display | Syne | 48–88px | 800 |
| H1 | Syne | 32–48px | 700 |
| H2 | Syne | 20–28px | 600 |
| H3 | Syne | 16–20px | 600 |
| Body | DM Sans | 14–16px | 400 |
| UI Label | DM Sans | 12–13px | 500 |
| Eyebrow | DM Mono | 9–11px | 500 |
| Code / Data | DM Mono | 11–13px | 400 |
| Metric | Syne | 24–32px | 700 |

---

## Componentes

### Card padrão

```html
<!-- Card dark mode (padrão) -->
<div style="
  background: #131D2E;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 1.25rem;
">
  <div style="font-family:'Syne',sans-serif; font-size:13px; font-weight:600; color:#F8FAFC;">
    Título do card
  </div>
</div>

<!-- Card light mode -->
<div style="
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
">
  <div style="font-family:'Syne',sans-serif; font-size:13px; font-weight:600; color:#0F172A;">
    Título do card
  </div>
</div>
```

### KPI card (métrica)

```html
<div style="background:#131D2E; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:1rem;">
  <div style="font-size:10px; color:#475569; font-family:'DM Mono',monospace; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:8px;">
    MTTR
  </div>
  <div style="font-family:'Syne',sans-serif; font-size:28px; font-weight:700; color:#06B6D4; line-height:1;">
    42<span style="font-size:14px; font-weight:400; color:#475569;">min</span>
  </div>
  <div style="font-size:11px; color:#475569; margin-top:4px;">tempo médio resolução</div>
  <div style="font-size:10px; color:#94A3B8; margin-top:6px;">
    <span style="color:#16A34A;">▼ 18%</span> com IA
  </div>
</div>
```

### Badge de severidade

```html
<!-- P1 -->
<span style="background:rgba(239,68,68,0.15); color:#EF4444; font-size:10px; font-weight:600; padding:2px 8px; border-radius:20px; font-family:'DM Mono',monospace;">P1</span>

<!-- P2 -->
<span style="background:rgba(245,158,11,0.15); color:#F59E0B; font-size:10px; font-weight:600; padding:2px 8px; border-radius:20px; font-family:'DM Mono',monospace;">P2</span>

<!-- P3 -->
<span style="background:rgba(6,182,212,0.15); color:#06B6D4; font-size:10px; font-weight:600; padding:2px 8px; border-radius:20px; font-family:'DM Mono',monospace;">P3</span>

<!-- Resolvido -->
<span style="background:rgba(22,163,74,0.15); color:#16A34A; font-size:10px; font-weight:600; padding:2px 8px; border-radius:20px; font-family:'DM Mono',monospace;">RESOLVIDO</span>

<!-- IA ativo -->
<span style="background:rgba(6,182,212,0.15); color:#06B6D4; font-size:10px; padding:2px 7px; border-radius:20px; font-family:'DM Mono',monospace;">IA ativo</span>
```

### Assinatura de IA — barra de progresso

Este é o elemento de movimento signature da BIATech. Aparece sempre que a IA está processando algo.

```html
<div style="background:#0F172A; border-radius:10px; padding:1.25rem 1.5rem;">
  <div style="font-size:12px; color:#94A3B8; margin-bottom:10px; font-family:'DM Mono',monospace; letter-spacing:0.06em;">
    ANALISANDO CHANGE #CR-4821...
  </div>
  <!-- Barra pulsante cyan = IA ativa -->
  <div style="height:3px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden;">
    <div style="height:100%; width:72%; background:#06B6D4; border-radius:2px; animation:biaPulse 2s ease-in-out infinite alternate;"></div>
  </div>
  <div style="display:flex; justify-content:space-between; margin-top:8px;">
    <span style="font-size:11px; color:#475569; font-family:'DM Mono',monospace;">Verificando dependências</span>
    <span style="font-size:11px; color:#06B6D4; font-family:'DM Mono',monospace; font-weight:500;">Em progresso</span>
  </div>
</div>

<style>
@keyframes biaPulse {
  from { width: 30%; opacity: 0.6; }
  to   { width: 90%; opacity: 1; }
}
</style>
```

### Linha de dados técnicos (mock row)

```html
<div style="display:flex; align-items:center; justify-content:space-between; padding:8px 10px; border-radius:8px; background:rgba(255,255,255,0.04); font-size:12px; margin-bottom:6px;">
  <span style="color:#94A3B8; font-family:'DM Mono',monospace;">change_id</span>
  <span style="color:#06B6D4; font-weight:500;">CR-4821</span>
</div>
```

### Topbar de janela (mockup de ferramenta)

```html
<div style="height:36px; background:#1E293B; border-radius:10px 10px 0 0; display:flex; align-items:center; padding:0 14px; gap:6px;">
  <div style="width:10px; height:10px; border-radius:50%; background:#EF4444;"></div>
  <div style="width:10px; height:10px; border-radius:50%; background:#F59E0B;"></div>
  <div style="width:10px; height:10px; border-radius:50%; background:#22C55E;"></div>
  <span style="font-size:11px; color:#475569; margin-left:8px; font-family:'DM Mono',monospace;">
    bia-tech / change-analysis
  </span>
</div>
```

### Eyebrow + título de seção

```html
<div style="font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.18em; color:#06B6D4; text-transform:uppercase; margin-bottom:4px; display:flex; align-items:center; gap:8px;">
  <span style="display:inline-block; width:20px; height:1px; background:#06B6D4;"></span>
  BIA Tech · Incident Intelligence
</div>
<div style="font-family:'Syne',sans-serif; font-size:22px; font-weight:700; color:#F8FAFC; letter-spacing:-0.5px;">
  Central de Incidentes
</div>
```

### Ícone modular (logotipo)

```html
<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect x="0" y="0" width="14" height="14" rx="4" fill="#B91C1C"/>
  <rect x="18" y="0" width="14" height="14" rx="4" fill="#06B6D4" opacity="0.7"/>
  <rect x="0" y="18" width="14" height="14" rx="4" fill="#06B6D4" opacity="0.35"/>
  <rect x="18" y="18" width="14" height="14" rx="4" fill="#B91C1C" opacity="0.3"/>
  <rect x="10" y="10" width="12" height="12" rx="3" fill="#0F172A"/>
  <rect x="13" y="13" width="6" height="6" rx="2" fill="#06B6D4"/>
</svg>
```

---

## Layouts

### Dashboard dark (padrão)

```
background: #0B1120
cards:       #131D2E  +  border: rgba(255,255,255,0.06)
grid gap:    12px
padding:     0 2rem
border-r:    14px
```

### Dashboard light

```
background: #F8FAFC
cards:       #FFFFFF   +  border: rgba(0,0,0,0.07)  +  box-shadow: 0 1px 4px rgba(0,0,0,0.06)
grid gap:    12px
padding:     0 2rem
border-r:    14px
```

### Sidebar de navegação

```
width:       260px
background:  #0B1120  (dark) | #F1F5F9 (light)
border-right: 1px solid rgba(255,255,255,0.06)
item hover:  rgba(255,255,255,0.04)
item active: rgba(255,255,255,0.06)
font:        DM Mono 12px
```

### Navbar global

```
height:      60px
background:  #0F172A  (dark) | #FFFFFF (light)
border-b:    1px solid rgba(6,182,212,0.2)
logo font:   Syne 700 18px
link font:   DM Sans 500 13px
link active: color #06B6D4 + border-bottom 2px #06B6D4
```

---

## Iconografia

- Estilo: **outline**, stroke 1.2–1.5px, `stroke-linecap: round`, `stroke-linejoin: round`
- Tamanho base: **16×16px** em UI, **20×20px** decorativo
- Nunca use ícones filled — quebram a consistência do traço fino
- Cor: herda do contexto. Estados semânticos: `#EF4444` erro, `#16A34A` ok, `#06B6D4` IA, `#F59E0B` aviso

---

## Tom de voz nas interfaces

O texto da interface deve ser **direto, técnico e baseado em dados**. Evite linguagem genérica.

| ✅ Correto | ❌ Evitar |
|-----------|----------|
| `Change CR-4821 · Risco alto · 3 serviços` | `Sua change foi analisada com sucesso!` |
| `MTTR 42min — ▼ 18% com IA` | `Desempenho melhorou` |
| `Analisando dependências...` | `Aguarde, estamos processando` |
| `auth-service · latência +340ms` | `Detectamos um problema no sistema` |
| `PRB aberto automaticamente` | `Criamos um registro para você` |

- Labels de campos: **DM Mono, uppercase, letter-spacing 0.1em**
- Valores: **Syne 700** para números grandes, **DM Mono** para IDs e dados técnicos
- Mensagens de status: sempre incluem contexto (`serviço + métrica + variação`)

---

## Dark mode × Light mode

Implemente suporte a ambos os modos usando CSS custom properties. A troca deve ser `transition: 0.3s`.

```css
/* Tokens de tema — declare no elemento raiz ou em data-theme */

[data-theme="dark"] {
  --surface-bg:     #0B1120;
  --card-bg:        #131D2E;
  --card-border:    rgba(255,255,255,0.06);
  --title-color:    #F8FAFC;
  --label-color:    #475569;
  --muted-color:    #94A3B8;
  --grid-color:     rgba(255,255,255,0.05);
  --tick-color:     #475569;
}

[data-theme="light"] {
  --surface-bg:     #F8FAFC;
  --card-bg:        #FFFFFF;
  --card-border:    rgba(0,0,0,0.07);
  --title-color:    #0F172A;
  --label-color:    #64748B;
  --muted-color:    #94A3B8;
  --grid-color:     rgba(0,0,0,0.05);
  --tick-color:     #94A3B8;
}
```

O botão de toggle segue este padrão:

```html
<button onclick="toggleTheme()" style="
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 5px 14px; cursor: pointer;
  font-family: 'DM Mono', monospace; font-size: 11px; color: #94A3B8;
">
  <span id="themeIcon">☀</span>
  <span id="themeLabel">Modo claro</span>
</button>
```

---

## Gráficos (Chart.js)

Quando usar gráficos, siga esta paleta de cores e configuração base:

```js
// Paleta de cores para gráficos
const BIA_CHART_COLORS = {
  red:     '#B91C1C',
  cyan:    '#06B6D4',
  blue:    '#1E40AF',
  amber:   '#F59E0B',
  green:   '#16A34A',
  danger:  '#EF4444',
  slate:   '#94A3B8',
};

// Configuração base de tema (dark)
const biaDarkTheme = {
  grid:    'rgba(255,255,255,0.05)',
  tick:    '#475569',
  tooltip: {
    backgroundColor: '#1E293B',
    borderColor:     'rgba(6,182,212,0.3)',
    borderWidth:     1,
    titleColor:      '#F8FAFC',
    bodyColor:       '#94A3B8',
    padding:         10,
    titleFont: { family: 'DM Mono', size: 11 },
    bodyFont:  { family: 'DM Mono', size: 11 },
  }
};

// Configuração base de tema (light)
const biaLightTheme = {
  grid:    'rgba(0,0,0,0.05)',
  tick:    '#94A3B8',
  tooltip: {
    backgroundColor: '#FFFFFF',
    borderColor:     'rgba(6,182,212,0.3)',
    borderWidth:     1,
    titleColor:      '#0F172A',
    bodyColor:       '#64748B',
    padding:         10,
    titleFont: { family: 'DM Mono', size: 11 },
    bodyFont:  { family: 'DM Mono', size: 11 },
  }
};

// Opções base para todos os charts
const biaChartBase = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
};
```

---

## Arquétipos — como a IA deve falar

A BIATech tem três arquétipos que definem o tom de todo texto gerado:

**O Sábio (primário):** Analítico, preciso, explica o raciocínio. Nunca especula sem dado.
**O Criador (primário):** Orientado a output, construtivo, entrega artefatos de qualidade.
**O Governante (secundário):** Confiável, auditável, respeita compliance e regras do banco.

---

## Checklist para o agente

Antes de entregar qualquer interface, verifique:

- [ ] Fontes importadas: Syne + DM Sans + DM Mono via Google Fonts
- [ ] Paleta respeitada: sem laranja, sem roxo
- [ ] Nome do produto: `BIATech` (junto, sem espaço)
- [ ] Labels técnicos: DM Mono, uppercase, letter-spacing
- [ ] Números/métricas: Syne 700
- [ ] Cards com `border-radius: 14px` e borda `0.5–1px`
- [ ] Ícones outline, stroke 1.2–1.5px, rounded caps
- [ ] Suporte a dark/light mode com CSS custom properties
- [ ] Assinatura de IA (barra cyan pulsante) em estados de processamento
- [ ] Tom de voz direto e técnico — sem linguagem genérica ou de assistente pessoal
