# 01. Overview · Visão Geral e Contexto

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-08-31  
> **Status:** Concluído / Pronto para Implementação  
> **Referência Metodológica:** Skill `spike-solucao`

---

## 1. Sumário Executivo

Este documento estabelece o **Overview** (Visão Geral e Contexto) da solução proposta para a **Landing Page Institucional do escritório Sales Costa Advogados**. 

O objetivo principal desta spike é avaliar, definir e validar a arquitetura visual, a estrutura de seções, o sistema de design tokens e a stack técnica para a criação de uma **landing page single-page (one-page) de alto padrão de sofisticação**, alinhada à excelência da marca jurídica.

---

## 2. Contexto Atual do Projeto

### 2.1 Estado Atual do Repositório
Atualmente, o projeto possui apenas ativos de identidade visual armazenados no diretório `images/` (logos em variados formatos e paleta cromática oficial). Não há código de marcação, estilização ou lógica pré-existente.

### 2.2 Ativos de Marca Encontrados
- **Wordmark Horizontal:** `images/260701_sales_costa_marca_PREFERENCIAL_temp.png` (Assinatura principal para headers e footers em fundo claro).
- **Assinatura Completa:** `images/260701_sales_costa_marca_ASSINATURA_temp.png` (Versão institucional estendida).
- **Brasão Colorido:** `images/260701_sales_costa_marca_BRASAO_COR_temp.png` (Monograma "S" com acento lima, ideal para favicons e ambientes dark).
- **Brasão Monocromático:** `images/260701_sales_costa_marca_BRASAO_temp.png`.
- **Padrão Cromático Oficial:** `images/260701_sales_costa_marca_PADRAO_CROMATICO_temp.pdf` e `images/paleta_cores.png`.

> [!IMPORTANT]
> Os ativos possuem o sufixo `_temp`, indicando que são provisórios. A arquitetura técnica foi concebida para permitir a substituição transparente desses arquivos sem necessidade de refatoração do código HTML/CSS.

---

## 3. O Que Está Sendo Avaliado (Escopo da Spike)

Avalia-se a criação de uma presença digital refinada que equilibre **tradição, solidez e modernidade**. Para isso, utilizou-se o benchmarking cruzado de duas referências de mercado:

### 3.1 Benchmark 1: Lefosse (Linguagem Visual & Sofisticação)
- **Tom e Estética:** Escritório *full-service*, estética editorial, uso estratégico de espaço em branco (*whitespace*), tipografia serifada de alto luxo combinada com sans-serif técnica.
- **Interatividade:** Sticky navbar transparente que transiciona suavemente ao scroll para fundo sólido dark (`#53565A`), botões minimalistas com borda sutil e espaçamento de letras (*letter-spacing*).

### 3.2 Benchmark 2: Higasi Sales (Estrutura de Seções One-Page)
- **Navegabilidade:** Estrutura contínua e fluida de navegação por ancoragem em página única.
- **Seções Mapeadas:** Hero Banner, Sobre o Escritório, Áreas de Atuação, Diferenciais, Em Números, Depoimentos, Nossa Equipe, Fale Conosco e Rodapé.

---

## 4. Decisão de Stack Técnica

### 4.1 Comparativo de Arquitetura

| Critério | Opção A: HTML5 / CSS3 / Vanilla JS (Recomendada) | Opção B: Next.js / React / TailwindCSS |
|---|---|---|
| **Dependências de Build** | Zero (Executa nativamente no navegador) | Altas (Node.js, npm, Webpack/Turbopack, node_modules) |
| **Performance (Lighthouse)** | Nativa 98-100 (Sem overhead de JS runtime) | 80-90 (Requer otimização cuidadosa de bundle) |
| **Manutenibilidade** | Extremamente simples (Qualquer dev HTML/CSS edita) | Requer conhecimento em Framework React/Next |
| **Custo de Hospedagem** | Gratuito / Qualquer servidor estático (GitHub Pages/Netlify) | Requer Serverless/Node.js host se houver SSR/ISR |
| **Complexidade** | Mínima (Adequada para landing page estática) | Sobredimensionada para o escopo atual |

### 4.2 Decisão Final
Adoptou-se a **Opção A (HTML5 / Vanilla CSS / Vanilla JS)**. A escolha garante máxima performance de carregamento, independência de ferramentas de build complexas, facilidade de implantação e controle absoluto sobre as animações e design tokens.
