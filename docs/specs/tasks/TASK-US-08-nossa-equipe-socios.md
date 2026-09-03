# Task Breakdown — US-08: Nossa Equipe (Cards dos Sócios Responsáveis)

> **SPEC de Referência:** [`SPEC-US-08-nossa-equipe-socios.md`](../SPEC-US-08-nossa-equipe-socios.md)  
> **Componente:** Componente 8 (Nossa Equipe)  
> **Target Files:** `index.html`, `css/components.css`, `css/sections.css`, `js/animations.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="equipe">` com o grid de 4 cards de sócios (AS, CC, FR, LM). |
| `css/components.css` | **[MODIFY]** | Adicionar estilo do `.socio-card` com avatar quadrado `aspect-ratio: 1 / 1` e iniciais centralizadas sobre fundo bege. |
| `css/sections.css` | **[MODIFY]** | Configurar grid responsivo (1 coluna no mobile, 2×2 no tablet, 4 colunas no desktop). |
| `js/animations.js` | **[MODIFY]** | Adicionar revelação em cascata com `IntersectionObserver`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<section id="equipe" class="equipe">` em fundo Branco Puro (`#FFFFFF`).
- Adicione a eyebrow `NOSSA EQUIPE` e o H2 `Os sócios responsáveis por cada caso.`.
- Monte o grid de 4 sócios (*Antônio Sales*, *Camila Costa*, *Felipe Ramos*, *Luisa Martins*), com os avatares contendo as iniciais (*AS*, *CC*, *FR*, *LM*), cargos, áreas e registros OAB.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/components.css`, estilize o container do avatar `.socio-card__avatar` com `width: 100%; aspect-ratio: 1 / 1; background-color: var(--color-off-white); border-radius: 4px; display: flex; align-items: center; justify-content: center`.
- Formate as iniciais `.socio-card__initials` em `font-size: 2.5rem; font-weight: 700; color: var(--color-taupe)`.
- Adicione regra CSS permitindo a substituição transparente da div de iniciais por uma tag `<img>` com `width: 100%; height: 100%; object-fit: cover` sem alterar a estrutura da página.
- Em `css/sections.css`, defina a responsividade: 1 coluna no mobile (< 768px), grid 2×2 no tablet (768px – 1023px) e 4 colunas em linha no desktop (≥ 1024px).

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, adicione animação suave de fade-in nos cards `.socio-card` via `IntersectionObserver`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 4 sócios (*AS*, *CC*, *FR*, *LM*) são exibidos com suas respectivas áreas de atuação e registros OAB.
- [ ] **[CA-02]** Em telas móveis (< 768px), os cards da equipe empilham-se em 1 coluna sem distorção das caixas quadradas de avatar.
- [ ] **[RN-01]** As iniciais dos sócios permanecem perfeitamente centralizadas sobre o quadrado bege `#F8F6F4`.
- [ ] **[RN-02]** A estrutura permite a substituição futura por fotos reais mantendo `aspect-ratio: 1 / 1`.
