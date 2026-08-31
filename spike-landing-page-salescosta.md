# Spike: Landing Page — Sales Costa Advogados

> **Baseado em:** skill `spike-solucao` (`.claude/skills/spike-solucao/`)  
> **Data:** 2026-08-31  
> **Status:** Exploração completa → pronto para implementação

---

## 1. Contexto e Objetivo

### O que existe hoje
O projeto contém apenas ativos de marca (logos e paleta cromática) no diretório `images/`. Não há código de landing page.

### O que está sendo avaliado
Definir a arquitetura visual, estrutura de seções, sistema de design, e stack técnica para construir uma **landing page one-page profissional** para o escritório **Sales Costa Advogados**, com:

- **Visual de referência de qualidade:** [Lefosse](https://lefosse.com/) — escritório full-service, tipografia sofisticada, transições suaves, linguagem premium
- **Estrutura de seções:** [Higasi Sales](https://www.higasisales.com.br/) — single-page com Hero, Sobre, Serviços, Diferenciais, Números, Depoimentos, Equipe, Contato, Rodapé

---

## 2. Ativos de Marca Mapeados

### 2.1 Paleta Cromática (do Padrão Cromático Oficial)

| Nome | Significado | HEX | RGB | Uso |
|---|---|---|---|---|
| Personalização | Cor principal da marca | `#AA9B8F` | `170, 155, 143` | Headers, destaques, CTAs primários, textos de acento |
| Solidez | Cor secundária | `#53565A` | `83, 86, 90` | Fundos de seção escura, texto principal, navbar dark |
| Inovação/Sagacidade | Acento/energia | `#E4FF8F` | `228, 255, 143` | Hover states, badges, destaques pontuais, animações |

**Paleta de apoio derivada (para harmonizar o design):**
```
--color-primary:    #AA9B8F   /* Taupe — identidade */
--color-dark:       #53565A   /* Cinza chumbo — solidez */
--color-accent:     #E4FF8F   /* Lima — sagacidade */
--color-white:      #FFFFFF
--color-off-white:  #F8F6F4   /* Derivado do taupe, quase branco quente */
--color-text-dark:  #2B2B2B   /* Preto suave para leitura */
--color-text-mid:   #6B6460   /* Cinza quente para textos secundários */
--color-border:     #D9D3CE   /* Linha sutil, derivada do taupe */
```

### 2.2 Logos Disponíveis

| Arquivo | Descrição | Uso recomendado |
|---|---|---|
| `260701_sales_costa_marca_PREFERENCIAL_temp.png` | Wordmark horizontal **SALESCOSTA** (taupe) | Navbar e Rodapé (fundo claro) |
| `260701_sales_costa_marca_ASSINATURA_temp.png` | Assinatura **SALESCOSTA Advogados** | Hero ou seções de destaque |
| `260701_sales_costa_marca_BRASAO_COR_temp.png` | Brasão "S" com quadrado lima | Ícone favicon, seções dark |
| `260701_sales_costa_marca_BRASAO_temp.png` | Brasão mono | Variação monocromática |

> [!IMPORTANT]
> Os arquivos atuais têm sufixo `_temp` — indicam que são versões provisórias. O arquivo final pode ser diferente. A estrutura HTML deve usar caminhos relativos (`images/`) e nomes de arquivo parametrizáveis para facilitar a troca quando chegarem os finais.

---

## 3. Análise dos Sites de Referência

### 3.1 Lefosse — Linguagem Visual

| Elemento | Como Lefosse faz | Adaptação para Sales Costa |
|---|---|---|
| **Navbar** | Fundo transparente → sticky com fundo ao scroll; logo SVG em duas versões (positivo/negativo) | Navbar transparente sobre hero → sticky `#53565A`; logo muda entre versão clara e escura |
| **Tipografia** | Font personalizada Mont (Book, Regular, SemiBold, Bold) | Google Fonts: **Cormorant Garamond** (headings, serifada, luxo) + **DM Sans** (corpo, legibilidade) |
| **Tom visual** | Premium, minimalista, muita respiração (whitespace), imagens editoriais em P&B/sépia | Idem — espaços generosos, fotografia profissional sugerida como placeholder |
| **Animações** | Sticky navbar com `uk-animation-slide-top`, fade-in de seções | Intersection Observer → `fadeInUp` em elementos ao entrar no viewport |
| **Cor de texto** | Dois logos (positivo claro/negativo escuro) para contraste com background | Variação de logo: taupe em fundo claro, branco em fundo escuro |
| **CTAs** | Bordas finas, sem radius; texto uppercase espaçado | Botões com `border: 1px solid #AA9B8F`, uppercase, letter-spacing 2px |

### 3.2 Higasi Sales — Estrutura de Seções

Mapeamento de seções do Higasi Sales para o contexto jurídico:

| # | Seção Higasi | Equivalente Sales Costa | Conteúdo |
|---|---|---|---|
| 1 | **Hero / Banner** | Hero | Slogan, sub-headline, CTA "Fale Conosco" |
| 2 | **Sobre** | Sobre o Escritório | História, missão, valores |
| 3 | **Serviços/Áreas** | Áreas de Atuação | Cards de especialidades |
| 4 | **Diferenciais** | Por que Sales Costa | Ícones + texto, diferenciação |
| 5 | **Números** | Em Números | Contadores animados (casos, anos, clientes) |
| 6 | **Depoimentos** | Depoimentos | Carousel de clientes |
| 7 | **Equipe** | Nossa Equipe | Cards dos sócios/advogados |
| 8 | **Contato** | Fale Conosco | Formulário + mapa ou dados de contato |
| 9 | **Rodapé** | Rodapé | Links, redes sociais, endereço |

---

## 4. Arquitetura Técnica

### 4.1 Stack Recomendada

**Opção A — HTML/CSS/JS Puro (recomendado para este projeto)**
```
landing-page/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css        ← design tokens (cores, tipografia, espaçamentos)
│   ├── components.css       ← navbar, cards, botões, formulário
│   └── sections.css         ← estilos por seção
├── js/
│   ├── main.js              ← sticky navbar, smooth scroll
│   └── animations.js        ← Intersection Observer, contadores
├── images/
│   └── (logos e assets de marca)
└── fonts/                   ← (opcional, se não usar Google Fonts CDN)
```

> [!NOTE]
> Justificativa: O projeto é uma landing page estática one-page. HTML/CSS/JS puro tem: zero dependências, carregamento mais rápido, facilidade de hospedagem (GitHub Pages, Netlify, qualquer servidor), e facilidade de manutenção para um escritório de advocacia.

**Opção B — Next.js / React (se houver planos de escalar)**
- Adiciona complexidade desnecessária para uma landing page estática
- Só faz sentido se houver integração futura com CMS (Sanity, Contentful) ou formulário via API

### 4.2 Fontes

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Heading principal | Cormorant Garamond | 300 Light | H1 do Hero |
| Heading seção | Cormorant Garamond | 400 Regular | H2s |
| Heading destaque | Cormorant Garamond | 600 SemiBold + itálico | Pulls, citações |
| Corpo | DM Sans | 400 Regular | Parágrafos |
| Labels, nav | DM Sans | 300/500 | Navegação, legendas |

### 4.3 Design Tokens (variables.css)

```css
:root {
  /* === CORES === */
  --color-primary:    #AA9B8F;
  --color-dark:       #53565A;
  --color-accent:     #E4FF8F;
  --color-white:      #FFFFFF;
  --color-off-white:  #F8F6F4;
  --color-text-dark:  #2B2B2B;
  --color-text-mid:   #6B6460;
  --color-border:     #D9D3CE;
  --color-overlay:    rgba(83, 86, 90, 0.82);

  /* === TIPOGRAFIA === */
  --font-serif:   'Cormorant Garamond', Georgia, serif;
  --font-sans:    'DM Sans', Arial, sans-serif;

  --text-xs:    0.75rem;   /* 12px */
  --text-sm:    0.875rem;  /* 14px */
  --text-base:  1rem;      /* 16px */
  --text-lg:    1.125rem;  /* 18px */
  --text-xl:    1.375rem;  /* 22px */
  --text-2xl:   1.75rem;   /* 28px */
  --text-3xl:   2.25rem;   /* 36px */
  --text-4xl:   3rem;      /* 48px */
  --text-5xl:   4rem;      /* 64px */

  /* === ESPAÇAMENTOS === */
  --space-xs:   0.5rem;
  --space-sm:   1rem;
  --space-md:   2rem;
  --space-lg:   4rem;
  --space-xl:   6rem;
  --space-2xl:  8rem;

  /* === LAYOUT === */
  --max-width:     1200px;
  --max-width-md:  860px;

  /* === TRANSIÇÕES === */
  --transition-fast:   150ms ease;
  --transition-base:   300ms ease;
  --transition-slow:   600ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 5. Especificação por Seção

### 5.1 Navbar

```
[Layout]
├── Logo (esquerda) — SALESCOSTA Advogados
├── Links de ancoragem (centro/direita) — Sobre | Áreas | Equipe | Contato
└── CTA button — "Fale Conosco" (borda taupe, sem fill)

[Comportamento]
- Inicial: transparente, logo versão escura (taupe)
- Após scroll 80px: background #53565A, logo versão clara (branco)
- Transition: background 300ms ease, color 300ms ease
- Mobile: hambúrguer → drawer lateral com links empilhados

[CSS hint]
.navbar { position: fixed; top: 0; width: 100%; z-index: 100; transition: background var(--transition-base); }
.navbar.scrolled { background: var(--color-dark); }
```

### 5.2 Hero

```
[Layout]
├── Background: imagem de escritório/cidade (overlay #53565A a 70%), ou fundo sólido #53565A com textura sutil
├── Conteúdo centralizado (max-width: 860px)
│   ├── Tag/eyebrow: "SALES COSTA ADVOGADOS" — DM Sans 12px, letter-spacing 4px, cor: #AA9B8F
│   ├── H1: "Junto nas decisões que constroem o futuro." — Cormorant Garamond Light 64px, cor: #FFFFFF
│   ├── Subtítulo: 1-2 linhas de posicionamento — DM Sans 18px, cor: rgba(255,255,255,0.80)
│   └── CTAs: [Conheça o Escritório] [Fale Conosco]
└── Scroll indicator (seta animada para baixo)

[Altura]
100vh (viewport completo)

[Animação]
- Eyebrow: fadeInUp 0.4s delay 0.2s
- H1: fadeInUp 0.6s delay 0.4s
- Subtítulo: fadeInUp 0.6s delay 0.6s
- CTAs: fadeInUp 0.6s delay 0.8s
```

### 5.3 Sobre o Escritório

```
[Layout — duas colunas]
├── Coluna esquerda (40%):
│   ├── Eyebrow: "SOBRE NÓS"
│   ├── H2: "Advocacia com propósito e excelência"
│   └── Brasão/monograma S grande (decorativo)
└── Coluna direita (60%):
    ├── Texto sobre o escritório (2-3 parágrafos)
    ├── Linha separadora (1px solid #AA9B8F)
    └── 3 valores em linha: [Comprometimento] [Confidencialidade] [Excelência]

[Background] #F8F6F4 (off-white quente)
[Padding] 120px vertical

[Animação]
- Coluna esquerda: slideInLeft ao entrar no viewport
- Coluna direita: slideInRight com delay 0.2s
```

### 5.4 Áreas de Atuação

```
[Layout — grid de cards]
├── Header da seção (centralizado)
│   ├── Eyebrow: "NOSSAS ESPECIALIDADES"
│   └── H2: "Atuação estratégica em múltiplas frentes jurídicas"
└── Grid de áreas (3 colunas desktop, 2 tablet, 1 mobile)
    └── Card de área:
        ├── Ícone SVG (linha fina, cor: #AA9B8F)
        ├── Nome da área (DM Sans 500, 16px)
        ├── Descrição curta (DM Sans 300, 14px)
        └── Link "Saiba mais →" (cor: #AA9B8F)

[Áreas sugeridas — confirmar com cliente]
Direito Empresarial | Direito Tributário | Direito Civil
Direito Imobiliário | Contratos | Fusões e Aquisições

[Background] #FFFFFF
[Padding] 100px vertical

[Hover de card]
- Border-bottom: 2px solid #AA9B8F (animated width 0 → 100%)
- Ícone: cor muda para #E4FF8F com background #53565A (círculo)
```

### 5.5 Por Que Sales Costa (Diferenciais)

```
[Layout — fundo escuro, texto claro]
├── Background: #53565A
├── Header:
│   ├── Eyebrow: "NOSSOS DIFERENCIAIS" (cor: #E4FF8F)
│   └── H2: "O que nos torna únicos" (cor: #FFFFFF)
└── Grid 2x2 de diferenciais (ou lista horizontal 4 colunas):
    ├── [Ícone + Título + Texto] × 4
    └── Exemplos:
        ① Atendimento Personalizado
        ② Equipe Especializada
        ③ Resultados Comprovados
        ④ Ética e Transparência

[Padding] 100px vertical
[Ícones] SVG linha fina, cor #AA9B8F (taupe sobre cinza chumbo)
```

### 5.6 Em Números

```
[Layout — linha de 4 contadores]
├── Background: #AA9B8F (cor primária da marca)
├── 4 métricas em linha:
│   ├── [Número grande] + [Descrição]
│   └── Exemplos:
│       ① "+15 anos de experiência"
│       ② "+500 clientes atendidos"
│       ③ "+300 casos concluídos"
│       ④ "5 áreas de especialização"
└── Separadores verticais: 1px solid rgba(255,255,255,0.3)

[Tipografia dos números]
Cormorant Garamond 600 72px, cor: #FFFFFF

[Animação]
Counter-up quando a seção entra no viewport (JavaScript)

[Padding] 80px vertical
```

### 5.7 Depoimentos

```
[Layout — carousel]
├── Background: #F8F6F4
├── Header: H2 "O que dizem nossos clientes"
└── Carousel de 3-5 depoimentos:
    └── Card de depoimento:
        ├── Aspas decorativas (Cormorant Garamond 120px, #D9D3CE)
        ├── Texto do depoimento (Cormorant Garamond Italic 20px)
        ├── Nome do cliente (DM Sans 500, 14px, uppercase)
        └── Empresa/setor (DM Sans 300, 12px, #6B6460)

[Navegação do carousel]
Setas laterais SVG linha fina + dots indicadores

[Autoplay] 5s com pausa no hover
```

### 5.8 Nossa Equipe

```
[Layout — grid de cards de pessoa]
├── Background: #FFFFFF
├── Header: H2 "Nossa Equipe"
└── Grid de cards (4 desktop, 2 tablet, 1 mobile):
    └── Card de advogado:
        ├── Foto quadrada (aspect-ratio 1:1) com overlay #AA9B8F no hover
        ├── Nome: DM Sans 500, 16px
        ├── OAB / cargo: DM Sans 300, 12px, #6B6460
        ├── Especialidade: tag pequena com background #F8F6F4
        └── LinkedIn icon (link externo)

[Hover do card]
- Foto: overlay com leve vinheta #AA9B8F 30%
- Ícone do LinkedIn aparece (fadeIn)
```

### 5.9 Fale Conosco

```
[Layout — duas colunas]
├── Background: #53565A
├── Coluna esquerda (40%):
│   ├── H2: "Entre em contato" (cor: #FFFFFF)
│   ├── Subtítulo (cor: rgba(255,255,255,0.8))
│   ├── Endereço com ícone
│   ├── Telefone com ícone
│   ├── E-mail com ícone
│   └── Redes sociais: [LinkedIn] [Instagram]
└── Coluna direita (60%):
    └── Formulário de contato:
        ├── Nome (input)
        ├── E-mail (input)
        ├── Telefone (input)
        ├── Área de interesse (select)
        ├── Mensagem (textarea)
        └── CTA: "Enviar Mensagem" — background #AA9B8F, cor #FFFFFF

[Estilos de form]
input, select, textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.4);
  color: #FFFFFF;
  padding: 12px 0;
  transition: border-color 300ms;
}
input:focus { border-bottom-color: #AA9B8F; }

[Validação]
HTML5 nativo (required, type="email", pattern) — sem biblioteca externa

[Backend]
❓ Pergunta em aberto — ver Seção 8
```

### 5.10 Rodapé

```
[Layout]
├── Background: #2B2B2B
├── Linha superior:
│   ├── Logo (SALESCOSTA Advogados — versão clara)
│   └── Links de navegação: Sobre | Áreas | Equipe | Contato
├── Linha do meio:
│   ├── Endereço completo
│   ├── Telefone / WhatsApp
│   └── E-mail
├── Linha inferior:
│   ├── © 2025 Sales Costa Advogados. Todos os direitos reservados.
│   └── [Política de Privacidade] [Termos de Uso]
└── Redes sociais: ícones SVG alinhados à direita
```

---

## 6. Comportamentos Globais (JavaScript)

### 6.1 Sticky Navbar com Mudança de Tema

```javascript
// main.js
const navbar = document.querySelector('.navbar');
const SCROLL_THRESHOLD = 80;

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
});
```

### 6.2 Smooth Scroll para Âncoras

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
```

### 6.3 Animações com Intersection Observer

```javascript
// animations.js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima uma vez
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

```css
/* Em sections.css */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}
[data-animate][data-delay="1"] { transition-delay: 0.15s; }
[data-animate][data-delay="2"] { transition-delay: 0.30s; }
[data-animate][data-delay="3"] { transition-delay: 0.45s; }
```

### 6.4 Contador Animado

```javascript
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}
```

### 6.5 Menu Mobile (Hambúrguer)

```javascript
const menuBtn = document.querySelector('.navbar-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',
    mobileMenu.classList.contains('open') ? 'true' : 'false'
  );
});
```

---

## 7. Responsividade

### Breakpoints

```css
/* Mobile first */
/* xs: < 480px (default) */
@media (min-width: 480px)  { /* sm */ }
@media (min-width: 768px)  { /* md — tablet */ }
@media (min-width: 1024px) { /* lg — desktop */ }
@media (min-width: 1280px) { /* xl — wide */ }
```

### Grid de Seções

| Seção | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Navbar | hambúrguer | hambúrguer | links horizontais |
| Hero | 1 coluna, 100vh | 1 coluna | 1 coluna |
| Sobre | 1 coluna | 2 colunas | 2 colunas |
| Áreas | 1 coluna | 2 colunas | 3 colunas |
| Diferenciais | 1 coluna | 2 colunas | 4 colunas |
| Números | 2 × 2 | 2 × 2 | 4 colunas |
| Depoimentos | 1 slide | 1 slide | 1 slide com setas |
| Equipe | 1 coluna | 2 colunas | 4 colunas |
| Contato | 1 coluna | 1 coluna | 2 colunas |
| Rodapé | 1 coluna | 2 colunas | 3 colunas |

---

## 8. Perguntas em Aberto

> [!WARNING]
> As perguntas abaixo impactam diretamente a implementação. Precisam ser respondidas antes de fechar o código de algumas seções.

### Backend do formulário de contato
- O formulário vai enviar e-mail? Se sim, qual serviço? (Formspree, EmailJS, Resend, backend próprio)
- Há integração com CRM ou WhatsApp Business API?

### Conteúdo real
- Quais são as áreas de atuação reais do escritório?
- Quais sócios/advogados devem aparecer na seção Equipe? (fotos disponíveis?)
- Há depoimentos reais ou vão usar placeholders inicialmente?
- Quais são os números reais (anos de experiência, casos, clientes)?

### Hospedagem e domínio
- Onde a landing page vai ser hospedada? (GitHub Pages, Netlify, servidor próprio, etc.)
- Já existe domínio? (salescosta.com.br ou similar)

### Logo final
- Os arquivos `_temp` serão substituídos pelos arquivos finais? Quando?
- O brasão colorido (`BRASAO_COR`) tem versão SVG disponível?

### Idioma
- A landing page será apenas em português, ou haverá versão em inglês?

### Analytics
- Haverá Google Analytics, Hotjar, ou similar?

---

## 9. Plano de Implementação

### Fase 1 — Estrutura Base (Dia 1)
- [ ] Criar `index.html` com estrutura semântica de todas as seções
- [ ] Criar `css/variables.css` com todos os design tokens
- [ ] Criar `css/reset.css`
- [ ] Configurar Google Fonts

### Fase 2 — Navbar + Hero (Dia 1-2)
- [ ] Navbar responsiva com logo e links
- [ ] Hero section com tipografia e CTAs
- [ ] Sticky navbar com mudança de tema
- [ ] Menu mobile (hambúrguer)

### Fase 3 — Seções de Conteúdo (Dia 2-4)
- [ ] Seção Sobre
- [ ] Seção Áreas de Atuação (grid de cards)
- [ ] Seção Diferenciais (fundo escuro)
- [ ] Seção Em Números (contadores)
- [ ] Seção Depoimentos (carousel)
- [ ] Seção Equipe (cards)

### Fase 4 — Contato + Rodapé (Dia 4-5)
- [ ] Seção Fale Conosco (formulário)
- [ ] Rodapé
- [ ] Integração do backend de formulário (depende da resposta da Pergunta 8.1)

### Fase 5 — Polimento e Testes (Dia 5-6)
- [ ] Animações com Intersection Observer
- [ ] Contadores animados
- [ ] Testes de responsividade (320px → 1440px)
- [ ] Lighthouse audit (performance, acessibilidade, SEO)
- [ ] Meta tags SEO e Open Graph
- [ ] Favicon (brasão S)

---

## 10. Critérios de Aceitação

| Critério | Meta |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Acessibilidade | ≥ 90 |
| Lighthouse SEO | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Layout correto em 320px, 768px, 1280px | ✅ |
| Formulário funcional com feedback ao usuário | ✅ |
| Smooth scroll entre seções | ✅ |
| Sticky navbar funcional | ✅ |
| Animações respeitam `prefers-reduced-motion` | ✅ |

---

## 11. Referências

| Item | Link / Localização |
|---|---|
| Site Lefosse (referência visual) | https://lefosse.com/ |
| Site Higasi Sales (referência de seções) | https://www.higasisales.com.br/ |
| Logo preferencial | `images/260701_sales_costa_marca_PREFERENCIAL_temp.png` |
| Logo assinatura | `images/260701_sales_costa_marca_ASSINATURA_temp.png` |
| Brasão colorido | `images/260701_sales_costa_marca_BRASAO_COR_temp.png` |
| Paleta de cores | `images/paleta_cores.png` |
| Padrão cromático (PDF) | `images/260701_sales_costa_marca_PADRAO_CROMATICO_temp.pdf` |
| Cormorant Garamond | https://fonts.google.com/specimen/Cormorant+Garamond |
| DM Sans | https://fonts.google.com/specimen/DM+Sans |
