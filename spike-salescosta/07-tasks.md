# 07. Tasks · Checklist de Desenvolvimento e Implementação

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-09-01  
> **Status:** Revisado e Mapeado com as Diretrizes de Responsividade por Componente ([06-visual-layout.md](06-visual-layout.md))

---

## 1. Roadmap em 7 Épicos de Desenvolvimento (Foco em Adaptabilidade Universal)

O plano de execução está estruturado em **7 Épicos funcionais**, cobrindo o desenvolvimento e os testes de responsividade dos **10 componentes visuais** mapeados no layout de referência.

---

## 2. Épico 1: Setup do Projeto & Design Tokens Responsivos (Dia 1)

- [ ] **Task 1.1 — Estruturação de Pastas e Configuração de Viewport**
  - **Arquivos:** `index.html`, `css/reset.css`, `css/variables.css`, `css/components.css`, `css/sections.css`, `js/main.js`, `js/animations.js`
  - **Descrição:** Criar diretórios e incluir `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
  - **Aceite:** Viewport configurado corretamente impedindo distorção de escala em dispositivos móveis.

- [ ] **Task 1.2 — Tokens de Tipografia e Layout Fluido (`css/variables.css`)**
  - **Arquivos:** `css/variables.css`
  - **Descrição:** Declarar funções CSS `clamp()` para tipografia fluida (ex: `font-size: clamp(2rem, 5vw, 4rem)`) e variáveis de breakpoints (`320px`, `480px`, `768px`, `1024px`, `1280px`).
  - **Aceite:** Textos e títulos ajustam-se suavemente à largura da tela.

- [ ] **Task 1.3 — Reset CSS e Prevenção de Rolagem Horizontal**
  - **Arquivos:** `css/reset.css`
  - **Descrição:** Aplicar `html, body { overflow-x: hidden; width: 100%; }` e `img { max-width: 100%; height: auto; }`.
  - **Aceite:** Zero rolagem horizontal (`0px` overflow-x) em qualquer resolução.

---

## 3. Épico 2: Componente 1 — Header & Sticky Navigation Responsiva (Dia 1-2)

- [ ] **Task 2.1 — Navbar Desktop & Drawer Mobile**
  - **Arquivos:** `index.html`, `css/components.css`, `js/main.js`
  - **Descrição:** Implementar navbar desktop com 6 links e menu hambúrguer com drawer lateral滑动 (*slide-out*) para telas `< 1024px`.
  - **Aceite:** Colapso automático da navegação em telas pequenas.

- [ ] **Task 2.2 — Áreas de Toque Confortáveis ($\ge 44\text{px}$)**
  - **Arquivos:** `css/components.css`
  - **Descrição:** Aplicar padding e dimensões mínimas de $44 \times 44\text{px}$ nos alvos de clique da navbar no mobile.
  - **Aceite:** Navegação tátil sem erros de clique.

---

## 4. Épico 3: Componentes 1 e 2 — Hero Banner & Comunicado ao Mercado (Dia 2)

- [ ] **Task 3.1 — Componente 1: Hero Banner Responsivo**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Desenvolver Hero Section com `min-height: 100vh`, H1 em `font-size: clamp(2rem, 5vw, 4rem)` e CTAs empilhados em 1 coluna no mobile (`width: 100%`).
  - **Aceite:** Leitura limpa e botões confortáveis em telas de 320px a 2560px.

- [ ] **Task 3.2 — Componente 2: Comunicado ao Mercado Responsivo**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Ajustar parágrafos e marca d'água "S" para que no mobile a marca d'água permaneça no fundo sem comprometer o contraste do texto.
  - **Aceite:** Container de texto com padding lateral de `20px` e leitura confortável.

---

## 5. Épico 4: Componentes 3 e 5 — Seções Institucionais Responsivas (Dia 2-3)

- [ ] **Task 4.1 — Componente 3: Sobre o Escritório (Migração 2Col -> 1Col)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Configurar grid de 2 colunas no desktop que migra para 1 coluna empilhada em telas `< 768px`, adicionando divisores horizontais nos 3 pilares.
  - **Aceite:** Pilares (*Comprometimento*, *Confidencialidade*, *Excelência*) empilhados com clareza no mobile.

- [ ] **Task 4.2 — Componente 5: Por Que Sales Costa (Diferenciais)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Configurar as 4 caixas de diferenciais para exibição em 4 colunas (desktop), 2x2 (tablet) e 1 coluna (mobile).
  - **Aceite:** Nenhuma caixa estoura a largura do container.

---

## 6. Épico 5: Componentes 4, 6, 7 e 8 — Módulos Funcionais Multi-Tela (Dia 3-4)

- [ ] **Task 5.1 — Componente 4: Grid de Áreas de Atuação (Grid 3x2 -> 1x6)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Implementar grid responsivo com `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` para as 6 especialidades.
  - **Aceite:** Reordenamento automático para 1 coluna no mobile e links *Saiba mais →* com alvos táteis ($\ge 44\text{px}$).

- [ ] **Task 5.2 — Componente 6: Banner Em Números (Métricas Grid 2x2)**
  - **Arquivos:** `index.html`, `css/sections.css`, `js/animations.js`
  - **Descrição:** Dispor os 4 números em linha no desktop (com divisores verticais) e em grid 2x2 no mobile (sem divisores).
  - **Aceite:** Números centralizados e legíveis.

- [ ] **Task 5.3 — Componente 7: Depoimentos com Touch Swipe Gestures**
  - **Arquivos:** `index.html`, `css/sections.css`, `js/main.js`
  - **Descrição:** Adicionar handlers `touchstart` e `touchend` para permitir deslizamento de depoimentos com o dedo em smartphones.
  - **Aceite:** Transição de depoimentos via gesto tátil e dots de controle ($\ge 44\text{px}$).

- [ ] **Task 5.4 — Componente 8: Nossa Equipe (Cards dos Sócios 1Col Mobile)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Cards dos sócios (*AS*, *CC*, *FR*, *LM*) em 1 coluna no mobile com preservação de proporção de avatar `aspect-ratio: 1/1`.
  - **Aceite:** Avatares sem distorção em qualquer resolução.

---

## 7. Épico 6: Componentes 9 e 10 — Formulário & Rodapé Responsivos (Dia 4-5)

- [ ] **Task 6.1 — Componente 9: Fale Conosco (Prevenção de Auto-Zoom iOS)**
  - **Arquivos:** `index.html`, `css/sections.css`, `js/main.js`
  - **Descrição:** Formatar formulário para empilhamento vertical no mobile com inputs em `font-size: 16px` para evitar auto-zoom no Safari iOS. Botão de envio com `width: 100%`.
  - **Aceite:** Digitação confortável no teclado virtual sem desconfigurar o viewport.

- [ ] **Task 6.2 — Componente 10: Rodapé Institucional Alinhado**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Rodapé `#2B2D30` com alinhamento vertical centralizado do logo e links em smartphones.
  - **Aceite:** Links e marca organizados no mobile.

---

## 8. Épico 7: Polimento, Testes Multi-Dispositivo & Qualidade (Dia 5-6)

- [ ] **Task 7.1 — Testes em Matriz de Dispositivos Reais/Simulados**
  - **Arquivos:** Todo o projeto
  - **Descrição:** Testar em 320px (iPhone SE), 375px (iPhone 12), 768px (iPad portrait), 1024px (iPad landscape), 1440px (Laptop) e 2560px (Ultra-wide).
  - **Aceite:** Zero erros de layout ou rolagem lateral em todas as telas.

- [ ] **Task 7.2 — Auditoria Google Lighthouse Mobile & Desktop**
  - **Arquivos:** Todo o projeto
  - **Descrição:** Executar o Lighthouse em modo Mobile (com throttling 4G e CPU 4x) e garantir notas $\ge 90$ em Performance, Acessibilidade e SEO.
  - **Aceite:** Relatório aprovado com notas $\ge 90$ em ambas as auditorias.
