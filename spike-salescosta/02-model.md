# 02. Model · Arquitetura Visual, Paleta & Componentes

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-08-31  
> **Status:** Concluído / Pronto para Implementação

---

## 1. Sistema de Cores e Identidade Cromática

### 1.1 Cores Oficiais da Marca

| Nome da Cor | Hexadecimal | RGB | Conceito / Significado | Uso Principal |
|---|---|---|---|---|
| **Personalização** | `#AA9B8F` | `170, 155, 143` | Tom Taupe sofisticado, refinamento | Headers, acentos primários, CTAs, bordas de destaque |
| **Solidez** | `#53565A` | `83, 86, 90` | Cinza chumbo corporativo, firmeza | Background dark, tipografia principal, navbar escurecida |
| **Inovação / Sagacidade** | `#E4FF8F` | `228, 255, 143` | Lima vibrante, energia e modernidade | Badges, hover states pontuais, indicadores ativados |

### 1.2 Paleta Derivada (Design System)
Para garantir contraste adequado (WCAG AAA) e suporte a seções claras e escuras:

```css
:root {
  /* Core Brand Colors */
  --color-primary:      #AA9B8F; /* Taupe — identidade visual */
  --color-dark:         #53565A; /* Cinza chumbo — solidez */
  --color-accent:       #E4FF8F; /* Lima — inovação */

  /* Neutral & Base Colors */
  --color-white:        #FFFFFF;
  --color-off-white:    #F8F6F4; /* Derivado do taupe, fundo quente suave */
  --color-text-dark:    #2B2B2B; /* Preto carvão para leitura de alto contraste */
  --color-text-mid:     #6B6460; /* Cinza quente para textos secundários */
  --color-border:       #D9D3CE; /* Linha de divisão sutil */
  --color-overlay:      rgba(83, 86, 90, 0.82); /* Máscara para hero banner */
}
```

---

## 2. Gestão de Ativos de Marca e Logos

| Arquivo de Imagem | Tipo | Uso Recomendado | Estratégia de Troca |
|---|---|---|---|
| `260701_sales_costa_marca_PREFERENCIAL_temp.png` | Wordmark Horizontal | Navbar e Rodapé em fundos claros | Parametrizado via `<img src="images/...">` |
| `260701_sales_costa_marca_ASSINATURA_temp.png` | Assinatura Institucional | Hero Banner / Módulos de Apresentação | Substituível sem alterar layout |
| `260701_sales_costa_marca_BRASAO_COR_temp.png` | Brasão "S" + Quadrado Lima | Favicon do site, navbar dark e marcas d'água | Suporta troca para SVG final |
| `260701_sales_costa_marca_BRASAO_temp.png` | Brasão Monocromático | Elemento gráfico decorativo em background | Aplicação com opacidade 0.05 a 0.1 |

---

## 3. Tipografia e Hierarquia Visual

O projeto combina duas famílias tipográficas via Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### 3.1 Tabela de Aplicação Tipográfica

| Família | Estilo / Peso | Tamanho (Desktop) | Uso Pretendido |
|---|---|---|---|
| **Cormorant Garamond** | 300 Light | `4rem` (64px) | Titular principal H1 do Hero |
| **Cormorant Garamond** | 400 Regular | `2.25rem` (36px) | Títulos de Seção H2 |
| **Cormorant Garamond** | 600 SemiBold Italic | `1.375rem` (22px) | Citações, destaques e números decorativos |
| **DM Sans** | 400 Regular | `1rem` (16px) | Corpo de texto, parágrafos e descrições |
| **DM Sans** | 500 Medium Uppercase | `0.75rem` (12px) | Sub-headlines (eyebrow tags), labels e botões |

---

## 4. Especificação dos Componentes por Seção

### 4.1 Navbar (Navegação Superior Sticky)
- **Componentes:** Brand Logo, Links de Ancoragem (`#sobre`, `#areas`, `#diferenciais`, `#equipe`), CTA "Fale Conosco" em formato de botão vazado (*outline*), Botão Hambúrguer para Mobile.
- **Comportamento Visual:**
  - *Estado Inicial (Topo):* Fundo transparente, logo em tom Taupe/Branco.
  - *Estado Scrolled (> 80px):* Background `#53565A` com sombra sutil `0 4px 20px rgba(0,0,0,0.15)`.

### 4.2 Hero Banner
- **Estrutura:** Fundo com textura/imagem institucional em tom dark, máscara overlay `#53565A` (80%), container centralizado de até 860px.
- **Elementos:** Eyebrow tag `"SALES COSTA ADVOGADOS"` em caixa alta com `letter-spacing: 4px`, H1 editorial de alto impacto, subtítulo explicativo e dupla de botões CTA.

### 4.3 Sobre o Escritório
- **Grid:** 2 colunas assimétricas (40% / 60%).
- **Coluna Esquerda:** Título institucional + Monograma "S" em marca d'água decorativa.
- **Coluna Direita:** 3 parágrafos de apresentação da história e visão do escritório, divididos por linha de acento `#AA9B8F`, finalizando com os pilares: *Comprometimento*, *Confidencialidade* e *Excelência*.

### 4.4 Áreas de Atuação (Cards Grid)
- **Grid:** 3 colunas (desktop), 2 colunas (tablet), 1 coluna (mobile).
- **Anatomy do Card:** Ícone SVG linear em tom Taupe, título da especialidade em DM Sans 500, breve descrição funcional e link interativo "Saiba mais →".

### 4.5 Por Que Sales Costa (Diferenciais)
- **Ambiente:** Fundo totalmente Dark (`#53565A`) para quebrar o ritmo da página.
- **Diferenciais Mapeados:** Atendimento Personalizado, Equipe Especializada, Resultados Comprovados e Ética & Transparência.
- **Destaque:** Eyebrow em cor Lima (`#E4FF8F`) ressaltando inovação.

### 4.6 Em Números (Métricas)
- **Ambiente:** Fundo totalmente Taupe (`#AA9B8F`) com texto em branco.
- **Mapeamento de Indicadores:**
  - `+15` Anos de Experiência
  - `+500` Clientes Atendidos
  - `+300` Casos Concluídos
  - `5` Áreas de Especialização

### 4.7 Depoimentos (Carousel)
- **Layout:** Fundo Off-White (`#F8F6F4`).
- **Anatomy do Item:** Aspas gigantes em Cormorant Garamond, citação em itálico, identificação do cliente e setor corporativo. Controle por setas laterais e pontos de navegação.

### 4.8 Nossa Equipe (Cards de Advogados)
- **Grid:** 4 colunas desktop.
- **Card:** Aspect-ratio 1:1 para foto, overlay sutil em Taupe no hover, nome, registro OAB, especialidade e link direto para perfil do LinkedIn.

### 4.9 Fale Conosco (Formulário & Contato)
- **Grid:** 2 Colunas.
  - *Coluna Esquerda:* Endereço físico, e-mail institucional, telefones e links de redes sociais.
  - *Coluna Direita:* Formulário com inputs de linha fina (*minimalist border-bottom*), seletores de área e botão de envio.

### 4.10 Rodapé Institucional
- **Ambiente:** Dark Charcoal (`#2B2B2B`).
- **Conteúdo:** Copyright, links para Política de Privacidade, Termos de Uso e dados da OAB.
