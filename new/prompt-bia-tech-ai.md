# Contexto do Projeto: BIA Tech Ecosystem
Você está atuando no ecossistema "BIA Tech", uma plataforma corporativa e minimalista voltada para times de inovação, dados e TI (incluindo ferramentas como dashboards de incidentes, hub central, chat, e playgrounds de IA). O design system foca em sofisticação, minimalismo, contraste muito bem definido, acessibilidade e interfaces ultra limpas.

# Pilares da Interface e Design (Regras Estritas)

1. TECNOLOGIA BASE
- Utilize primariamente HTML semântico, JavaScript baunilha e CSS puro (com variáveis). 
- Não inclua dependências de CSS como Bootstrap ou Tailwind a menos que estritamente solicitado.

2. CORES E TEMA (Variáveis Obrigatórias)
- A aplicação utiliza alternância de temas Light/Dark via atributo `data-theme`.
- Cores de marca em tons sólidos:
  - Cyan (Primária Tech): `#00BCD4`
  - Red (Primária Ação): `#CC092F`
  - Warning: `#F9A825`
  - Success: `#2E7D32`
- Esquema "Dark Theme" (`data-theme="dark"`):
  - Background principal: `#1E1E1E`
  - Background de superfícies/cards: `#252525` a `#2A2A2A`
  - Topbar: `#1E1E1E`
  - Textos: Primário `#F0F0F0`, Secundário `#888`, Muted/Tags `#444`
  - Bordas: `rgba(255,255,255,0.07)`
- Esquema "Light Theme" (`data-theme="light"`):
  - Background principal: `#FFFFFF`
  - Background de superfícies/cards: `#FFFFFF` a `#F8F8F8`
  - Topbar: `#FFFFFF`
  - Textos: Primário `#1A1A1A`, Secundário `#666`, Muted/Tags `#AAA`
  - Bordas: `rgba(0,0,0,0.09)`

3. TIPOGRAFIA COMPORTAMENTAL
- Fonte de Texto Geral: `Inter` (sans-serif) para legibilidade, com peso base 400 e títulos variando de 500 a 700. Letras levemente condensadas (`letter-spacing: -0.01em` em títulos grandes).
- Fonte Monospaced/Técnica: `JetBrains Mono` para códigos, metadados de sistema, números de dashboard, chaves (keys), badges técnicos e hints visuais (como timestamps). Quando usar JetBrains Mono em labels, aplicar text-transform uppercase e amplo letter-spacing (ex: `0.1em`).

4. ICONOGRAFIA (SEM EMOJIS)
- NUNCA utilize emojis estáticos de texto (ex: 🚀, 💬, ⚙️). 
- Utilize APENAS ícones em vetor (inline SVG).
- Os SVGs devem ter a propriedade `fill="none"` e receber `stroke="currentColor"` e `stroke-width="1.5"` a `1.8`, garantindo que incorporem nativamente a cor do seu respectivo container sem sujar o código com hexadecimais fixos.

5. GEOMETRIA E INTERAÇÃO DOS CARDS
- Cards sempre possuem fundos neutros (`var(--surf)`) e recebem destaque de cor apenas em pequenos "badges", contornos de state ou nos glyphs vetoriais.
- Bordas devem possuir border-radius variando de `6px` a `16px` para bordas suaves mas profissionais.
- Em interações de `:hover`, implementar o efeito de levitação com `transform: translateY(-2px)` junto da troca de cor da borda sutil.

6. TOM DO CÓDIGO
- Nomeie classes de modo sucinto e utilitário (ex: `topbar`, `hub-card`, `btn-primary`, `kpi-card`).
- Evite aninhamentos supérfluos no HTML.
- Mantenha funções flexíveis (ex: as atualizações de DOM devem ser centralizadas em funções render).

No seu comportamento e nas saídas do código, priorize a "Qualidade de Design UX/UI Premium". Entregue designs com hierarquia visual incontestável, animações fluidas (transitions de 0.2s) e aparência altamente refinada, com extremo foco aos detalhes. Nunca entregue blocos cinzas genéricos ou listagens brutas de dados sem diagramação premium de dashboard tecnológico.

7. INSTRUÇÃO EXTRA PARA ANGULAR MATERIAL (SE APLICÁVEL)
Caso o projeto utilize o ecosistema `@angular/material`, você deve sobrescrever ativamente os padrões visuais dos componentes (Material Design). É mandatório:
- Remover rigorosamente as box-shadows (elevation) dos `<mat-card>`, botões nativos e modais.
- Neutralizar/zerar as cores de background sujas (greyish) preenchidas automaticamente nos `<mat-form-field>`.
- Forçar que todos esses componentes sigam EXATAMENTE a estrutura visual descrita acima: ultra-flat, sem sombra, sem ripples complexos e utilizando unicamente as variáveis de borda sutil de 1px estabelecidas pela paleta da BIA Tech.
