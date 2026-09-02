# 06. Visual Layout · Decomposição de Componentes (Desktop & Mobile)

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-09-02  
> **Fontes das Imagens:**  
> - **Layout Desktop (1658x6400):** [images/sales-costa-layout1.png](../images/sales-costa-layout1.png)  
> - **Layout Mobile (420x10080):** [images/sales-costa-layout1-mobi.png](../images/sales-costa-layout1-mobi.png)  
> **Garantia de Fidelidade:** Mapeamento de precisão 1:1 entre a versão Desktop e Mobile para cada um dos 10 componentes visuais recortados.

---

## 1. Visão Geral dos Layouts Oficiais (Desktop & Mobile)

Abaixo apresentam-se os layouts completos de referência para Desktop e Dispositivos Móveis:

| Layout Desktop Oficial (1658px) | Layout Mobile Oficial (420px) |
|:---:|:---:|
| ![Layout Desktop](../images/sales-costa-layout1.png) | ![Layout Mobile](../images/sales-costa-layout1-mobi.png) |

---

## 2. Decomposição Par-a-Par dos 10 Componentes Visuais (Corrigida)

Abaixo estão apresentados os **10 componentes visuais** com seus recortes exatos recém-ajustados a partir do layout mobile ([images/sales-costa-layout1-mobi.png](../images/sales-costa-layout1-mobi.png)):

---

### Componente 1: Navbar & Hero Banner

| Desktop (01_navbar_hero.png) | Mobile (01_navbar_hero_mobile.png) |
|:---:|:---:|
| ![Componente 1 Desktop](../images/components/01_navbar_hero.png) | ![Componente 1 Mobile](../images/components/mobile/01_navbar_hero_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Navbar Desktop:** Logo `SALES COSTA` à esquerda e 6 links de ancoragem horizontais à direita.
- **Navbar Mobile:** Logo `SALES COSTA` à esquerda e botão hambúrguer ($\ge 44\times 44\text{px}$) à direita com drawer lateral.
- **Hero Headline:** H1 *"Junto nas decisões que constroem o futuro."* redimensiona suavemente via `font-size: clamp(2rem, 5vw, 4rem)` (64px no desktop, 32px no mobile).
- **Botões CTA:** Dispostos lado a lado no desktop; empilhados em 1 coluna full width no mobile (`width: 100%`).

---

### Componente 2: Comunicado ao Mercado

| Desktop (02_comunicado.png) | Mobile (02_comunicado_mobile.png) |
|:---:|:---:|
| ![Componente 2 Desktop](../images/components/02_comunicado.png) | ![Componente 2 Mobile](../images/components/mobile/02_comunicado_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** Container max-width 860px centralizado com a marca d'água "S" decorativa posicionada à direita no plano de fundo.
- **Mobile:** Container 100% de largura com padding lateral de 20px; marca d'água atua como overlay sutil no fundo (`z-index: 0`) sem comprometer a leitura.

---

### Componente 3: Sobre o Escritório

| Desktop (03_sobre.png) | Mobile (03_sobre_mobile.png) |
|:---:|:---:|
| ![Componente 3 Desktop](../images/components/03_sobre.png) | ![Componente 3 Mobile](../images/components/mobile/03_sobre_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** Layout em 2 colunas assimétricas (40% H2 / 60% texto e pilares com divisores verticais).
- **Mobile:** Migração para **1 coluna empilhada**; pilares (*Comprometimento*, *Confidencialidade*, *Excelência*) separados por linhas divisórias horizontais.

---

### Componente 4: Áreas de Atuação (Grid de Especialidades)

| Desktop (04_areas.png) | Mobile (04_areas_mobile.png) |
|:---:|:---:|
| ![Componente 4 Desktop](../images/components/04_areas.png) | ![Componente 4 Mobile](../images/components/mobile/04_areas_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** Grid de 3 colunas x 2 linhas (6 cards).
- **Mobile:** Grid de 1 coluna x 6 cards empilhados (`grid-template-columns: 1fr`) com botões *"Saiba mais →"* expansivos e táteis ($\ge 44\text{px}$).

---

### Componente 5: Por Que Sales Costa (Diferenciais)

| Desktop (05_diferenciais.png) | Mobile (05_diferenciais_mobile.png) |
|:---:|:---:|
| ![Componente 5 Desktop](../images/components/05_diferenciais.png) | ![Componente 5 Mobile](../images/components/mobile/05_diferenciais_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** 4 colunas horizontais em ambiente Dark `#404347`.
- **Mobile:** 4 cartões empilhados em 1 coluna vertical com padding de 24px entre blocos.

---

### Componente 6: Em Números (Métricas)

| Desktop (06_numeros.png) | Mobile (06_numeros_mobile.png) |
|:---:|:---:|
| ![Componente 6 Desktop](../images/components/06_numeros.png) | ![Componente 6 Mobile](../images/components/mobile/06_numeros_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** 4 colunas em linha com divisores verticais finos em fundo Off-White `#F8F6F4`.
- **Mobile:** Reorganização para **Grid 2x2** (2 números por linha) com divisores verticais ocultados para ampliar a legibilidade tátil.

---

### Componente 7: Depoimentos

| Desktop (07_depoimentos.png) | Mobile (07_depoimentos_mobile.png) |
|:---:|:---:|
| ![Componente 7 Desktop](../images/components/07_depoimentos.png) | ![Componente 7 Mobile](../images/components/mobile/07_depoimentos_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** Card de citação centralizado com aspas e dots de navegação.
- **Mobile:** Card 100% de largura com suporte a gestos laterais de deslizamento (*touch swipe*) e dots de controle ampliados ($\ge 44\times 44\text{px}$).

---

### Componente 8: Nossa Equipe (Cards dos Sócios)

| Desktop (08_equipe.png) | Mobile (08_equipe_mobile.png) |
|:---:|:---:|
| ![Componente 8 Desktop](../images/components/08_equipe.png) | ![Componente 8 Mobile](../images/components/mobile/08_equipe_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** 4 cards de sócios (*AS*, *CC*, *FR*, *LM*) dispostos em linha.
- **Mobile:** 1 card por linha empilhado verticalmente; avatares travados em proporção quadrada `aspect-ratio: 1/1`.

---

### Componente 9: Fale Conosco (Formulário & Dados)

| Desktop (09_contato.png) | Mobile (09_contato_mobile.png) |
|:---:|:---:|
| ![Componente 9 Desktop](../images/components/09_contato.png) | ![Componente 9 Mobile](../images/components/mobile/09_contato_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** 2 colunas lado a lado (Dados de Contato à esquerda / Formulário à direita).
- **Mobile:** Empilhamento vertical (Dados de contato no topo / Formulário abaixo); inputs configurados com `font-size: 16px` para evitar o zoom automático no Safari iOS.

---

### Componente 10: Rodapé Institucional

| Desktop (10_rodape.png) | Mobile (10_rodape_mobile.png) |
|:---:|:---:|
| ![Componente 10 Desktop](../images/components/10_rodape.png) | ![Componente 10 Mobile](../images/components/mobile/10_rodape_mobile.png) |

#### Especificações de Comparação & Responsividade:
- **Desktop:** Logo `SALES COSTA` à esquerda e links institucionais horizontais à direita em fundo Dark `#2B2D30`.
- **Mobile:** Alinhamento vertical (Logo centralizado no topo e links dispostos em lista com área tátil $\ge 44\text{px}$).
