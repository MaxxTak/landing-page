# 01. Overview · Visão Geral e Contexto

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-09-01  
> **Status:** Atualizado conforme Layout Oficial com Diretriz Estrita de Responsividade Universal ([sales-costa-layout-previa.png](../images/sales-costa-layout-previa.png))  
> **Referência Metodológica:** Skill `spike-solucao`

---

## 1. Sumário Executivo

Este documento estabelece o **Overview** (Visão Geral e Contexto) da solução proposta para a **Landing Page Institucional do escritório Sales Costa Advogados**, atualizado com base no **design oficial de referência** ([images/sales-costa-layout-previa.png](../images/sales-costa-layout-previa.png)).

O objetivo principal desta spike é avaliar, definir e validar a arquitetura visual, a estrutura exata das 11 seções, o sistema de design tokens, a stack técnica e a **garantira incondicional de responsividade universal**, assegurando que a aplicação seja totalmente utilizável em **todos os tipos de dispositivos** (smartphones de 320px, phablets, tablets, laptops, monitores 4K e telas dobráveis) **sem qualquer quebra de layout**.

---

## 2. Diretriz Estrita de Responsividade Universal

A arquitetura da landing page adota a abordagem **Mobile-First** com adaptação fluida contínua. 

### Princípios Inegociáveis de Responsividade:
- **Zero Overflow Horizontal:** Aplicação estrita de `overflow-x: hidden; width: 100%` impedindo qualquer rolagem lateral indesejada.
- **Tipografia e Espaçamentos Fluidos:** Utilização de funções CSS `clamp()`, unidades relativas (`rem`, `vw`) e grids flexíveis.
- **Áreas de Toque Confortáveis:** Alvos de clique e toque com dimensões mínimas de $44 \times 44\text{px}$ em telas sensíveis ao toque.
- **Prevenção de Zoom Indesejado:** Entradas de formulário com `font-size: 16px` para evitar zoom automático em navegadores móveis (iOS Safari).
- **Adaptabilidade Fluida por Breakpoint:** Redimensionamento inteligente dos 10 componentes em telas pequenas (320px–480px), médias (768px–1023px) e grandes (1024px+).

---

## 3. Estrutura Oficial de Seções da Landing Page

A partir do layout de referência ([sales-costa-layout-previa.png](../images/sales-costa-layout-previa.png)), a landing page está dividida em **11 seções navegáveis**:

1. **Navbar Sticky:** Marca `SALES COSTA` + Links `Comunicado` | `Sobre` | `Áreas` | `Diferenciais` | `Equipe` | `Fale conosco` (Menu drawer no mobile).
2. **Hero Banner:** Headline *"Junto nas decisões que constroem o futuro."* + Subtítulo + CTAs *"Conheça o escritório →"* e *"Fale conosco →"* + Indicador de scroll.
3. **Comunicado ao Mercado:** Seção dark institucional sobre a união de Dilson Higasi Sales e Rodrigo Moreira da Costa, com citações dos sócios-fundadores e marca d'água "S" decorativa.
4. **Sobre o Escritório:** *"Uma trajetória construída sobre confiança e critério técnico."* + 3 parágrafos de apresentação + 3 pilares (*Comprometimento*, *Confidencialidade*, *Excelência*).
5. **Áreas de Atuação:** Grid 2x3 com 6 especialidades (*Empresarial*, *Tributário*, *Trabalhista*, *Civil*, *Societário*, *Compliance & Governança*), colapsável para 1 coluna no mobile.
6. **Por Que Sales Costa (Diferenciais):** Ambiente dark `#404347` com 4 diferenciais adaptáveis para exibição empilhada em smartphones.
7. **Em Números:** Banner claro com métricas (*15+ Anos*, *500+ Clientes*, *300+ Casos*, *5 Áreas*) em grid 2x2 no mobile.
8. **Depoimentos:** Citação de cliente (*Marina Albuquerque, Diretora Financeira do Grupo Vantis*) + navegação por dots com suporte a touch swipe.
9. **Nossa Equipe:** Grid de 4 sócios (*Antônio Sales*, *Camila Costa*, *Felipe Ramos*, *Luisa Martins*) com avatares responsivos.
10. **Fale Conosco:** Formulário minimalista + Endereço (*Av. Paulista, 1000 — 12º andar, São Paulo/SP*), e-mail, telefone e redes sociais.
11. **Rodapé Institucional:** Logo e links com alinhamento vertical em telas pequenas.

---

## 4. Decisão de Stack Técnica

Adotou-se **HTML5 Semântico / Vanilla CSS3 / Vanilla JS (ES6+)**. A escolha garante 100% de alinhamento com a alta performance e fidelidade visual do layout oficial, sem dependência de frameworks ou ferramentas pesadas de build.
