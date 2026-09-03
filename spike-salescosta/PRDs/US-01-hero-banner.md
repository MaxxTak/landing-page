# PRD — US-01: Hero Banner & Proposta de Valor

> **Origem:** US-01 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 1 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
Ao acessar o portal institucional da banca Sales Costa Advogados, o visitante (potencial cliente corporativo ou parceiro) precisa identificar imediatamente o posicionamento do escritório, sua reputação e autoridade no mercado jurídico sem necessitar de busca prolongada.

### 1.2 Problema
Páginas iniciais genéricas sem clareza de mensagem ou com tempo de carregamento elevado geram dispersão, perda de interesse e alta taxa de rejeição (*bounce rate*).

### 1.3 Persona Afetada
- **Diretores Executivos, CFOs, Gerentes Jurídicos e Famílias com Gestão Patrimonial** buscando assessoria de alta complexidade.

---

## 2. Objetivos

- **O01:** Apresentar a proposta de valor principal do escritório nos primeiros 3 segundos de visualização da página.
- **O02:** Disponibilizar chamadas para ação (CTAs) diretas e visíveis em qualquer resolução de tela (320px a 2560px).

---

## 3. Métricas de Sucesso

- **M01:** Taxa de retenção no topo da página (*Above-the-fold engagement*) $> 80\%$.
- **M02:** Clique nos botões CTA (*Conheça o escritório* e *Fale conosco*) $> 12\%$ dos acessos totais.
- **M03:** Tempo de carregamento da Hero Banner (First Contentful Paint) $< 1.5\text{s}$.

---

## 4. Solução Proposta

Desenvolvimento da **Hero Section** institucional em fundo dark (`#484B4F` / `#404347`), apresentando a eyebrow tag `"SALES COSTA ADVOGADOS"`, a headline principal H1 em alto impacto visual (*"Junto nas decisões que constroem o futuro."*), o subtítulo de posicionamento corporativo, a dupla de botões CTA interativos com indicação vetorial e o elemento animado de indução ao scroll.

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout1.png](../../images/sales-costa-layout1.png)
- **Componente Visual:** `images/components/01_navbar_hero.png`
- **Esquema de Cores:** Fundo Dark Charcoal `#404347`, Eyebrow Taupe `#AA9B8F`, Texto Branco `#FFFFFF`.
- **Tipografia:** Eyebrow `DM Sans 500` (12px, `letter-spacing: 4px`), H1 `DM Sans` / `Cormorant Garamond` (`font-size: clamp(2rem, 5vw, 4rem)`).
- **Responsividade:** CTAs alinhados horizontalmente no desktop; empilhados em 1 coluna full width no mobile (`< 1024px`).

---

## 6. Regras de Negócio

- **RN-01:** O H1 deve permanecer visível e legível em todos os tamanhos de viewport sem sobreposição de caixas.
- **RN-02:** O botão *"Fale conosco →"* deve direcionar o scroll suave até a seção `#contato`.
- **RN-03:** O botão *"Conheça o escritório →"* deve direcionar o scroll suave até a seção `#sobre`.
- **RN-04:** O elemento animado de scroll deve indicar a continuidade da página e rolar suavemente ao ser clicado.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Exibição da Headline e Subtítulo
- **Dado** que o usuário acessa a landing page no desktop ou mobile,
- **Quando** a Hero Section é carregada,
- **Então** o texto H1 *"Junto nas decisões que constroem o futuro."* deve ser exibido com destaque e sem quebras de layout.

### CA-02: Interatividade dos Botões CTA
- **Dado** que o usuário clica no botão *"Fale conosco →"*,
- **Quando** a ação de clique/toque ocorre,
- **Então** a página rola suavemente até o formulário da seção `#contato` compensando o offset da navbar (80px).

### CA-03: Responsividade dos CTAs no Mobile
- **Dado** um viewport com largura $< 1024\text{px}$,
- **Quando** a Hero Banner é renderizada,
- **Então** os botões CTA são empilhados em 1 coluna com alvos de toque $\ge 44\times 44\text{px}$.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Vídeos de fundo ou carrossel de imagens na hero section (foco em minimalismo e performance estática).

### Riscos
- **Risco:** Lentidão no carregamento da fonte serifada via CDN.
- **Mitigação:** Uso de `<link rel="preconnect">` e `font-display: swap`.
