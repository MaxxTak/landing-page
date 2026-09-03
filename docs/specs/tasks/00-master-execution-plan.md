# Master Implementation Roadmap — Sales Costa Advogados Landing Page

> **Origem dos SPECs:** Diretório [`docs/specs/`](../specs/)  
> **Stack:** HTML5 Semântico / Vanilla CSS3 / Vanilla JS (ES6+) — Sem frameworks ou ferramentas de build  
> **Tipografia:** Fonte única **Montserrat** para todo o site — `--font-body` e `--font-display` (definidos em `css/variables.css`) resolvem ambos para `'Montserrat', system-ui, sans-serif`. Pesos usados: 300/400/500/600/700/800 (`.hero__title` = 800). Sem tipografia serifada. Google Fonts: `family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400`.  
> **Objetivo:** Guia sequencial de tarefas prontas para execução imediata por agentes de IA ou engenheiros de software.

---

## 🏗️ Estrutura de Arquivos da Aplicação

```
.\landing-page\
├── index.html                  # Documento principal Single-Page
├── css/
│   ├── reset.css               # Reset CSS e prevenção de overflow-x
│   ├── variables.css           # Design Tokens (Cores, Tipografia, Spacing)
│   ├── components.css          # Componentes reutilizáveis (Botões, Cards, Badges)
│   └── sections.css            # Estilos específicos das 10 seções
├── js/
│   ├── main.js                 # Navegação, Drawer, Scroll Suave, Validação de Formulário
│   └── animations.js           # IntersectionObserver, Contadores, Touch Swipe
└── docs/
    ├── specs/                  # 10 Especificações Técnicas (SPEC-US-01 a 10)
    └── tasks/                  # 10 Checklists de Implementação (TASK-US-01 a 10)
```

---

## 🚀 Sequência de Execução por Fases (10 Tarefas)

| Fase | Arquivo de Tarefa | Seção / Componente | SPEC de Referência | Status |
|---|---|---|---|---|
| **Fase 0** | [TASK-00-setup.md](#fase-0-setup-base-do-projeto) | Setup do Projeto & Design Tokens | Baseline | Ready |
| **Fase 1** | [`TASK-US-01-hero-banner.md`](TASK-US-01-hero-banner.md) | Componente 1: Header Sticky & Hero Banner | [`SPEC-US-01-hero-banner.md`](../SPEC-US-01-hero-banner.md) | Ready |
| **Fase 2** | [`TASK-US-02-comunicado-ao-mercado.md`](TASK-US-02-comunicado-ao-mercado.md) | Componente 2: Comunicado ao Mercado | [`SPEC-US-02-comunicado-ao-mercado.md`](../SPEC-US-02-comunicado-ao-mercado.md) | Ready |
| **Fase 3** | [`TASK-US-03-sobre-o-escritorio.md`](TASK-US-03-sobre-o-escritorio.md) | Componente 3: Sobre o Escritório | [`SPEC-US-03-sobre-o-escritorio.md`](../SPEC-US-03-sobre-o-escritorio.md) | Ready |
| **Fase 4** | [`TASK-US-04-areas-de-atuacao.md`](TASK-US-04-areas-de-atuacao.md) | Componente 4: Áreas de Atuação Grid | [`SPEC-US-04-areas-de-atuacao.md`](../SPEC-US-04-areas-de-atuacao.md) | Ready |
| **Fase 5** | [`TASK-US-05-diferenciais-atendimento.md`](TASK-US-05-diferenciais-atendimento.md) | Componente 5: Por Que Sales Costa | [`SPEC-US-05-diferenciais-atendimento.md`](../SPEC-US-05-diferenciais-atendimento.md) | Ready |
| **Fase 6** | [`TASK-US-06-em-numeros.md`](TASK-US-06-em-numeros.md) | Componente 6: Métricas em Números | [`SPEC-US-06-em-numeros.md`](../SPEC-US-06-em-numeros.md) | Ready |
| **Fase 7** | [`TASK-US-07-depoimentos-prova-social.md`](TASK-US-07-depoimentos-prova-social.md) | Componente 7: Depoimentos Carousel | [`SPEC-US-07-depoimentos-prova-social.md`](../SPEC-US-07-depoimentos-prova-social.md) | Ready |
| **Fase 8** | [`TASK-US-08-nossa-equipe-socios.md`](TASK-US-08-nossa-equipe-socios.md) | Componente 8: Nossa Equipe Sócios | [`SPEC-US-08-nossa-equipe-socios.md`](../SPEC-US-08-nossa-equipe-socios.md) | Ready |
| **Fase 9** | [`TASK-US-09-fale-conosco-formulario.md`](TASK-US-09-fale-conosco-formulario.md) | Componente 9: Fale Conosco Form | [`SPEC-US-09-fale-conosco-formulario.md`](../SPEC-US-09-fale-conosco-formulario.md) | Ready |
| **Fase 10** | [`TASK-US-10-rodape-institucional.md`](TASK-US-10-rodape-institucional.md) | Componente 10: Rodapé Institucional | [`SPEC-US-10-rodape-institucional.md`](../SPEC-US-10-rodape-institucional.md) | Ready |

---

## 🔍 Diretrizes Universais de Verificação para Agentes de IA

A cada tarefa concluída, o agente executor DEVE rodar as seguintes verificações:
1. **Zero Overflow Horizontal:** Inspecionar se `document.documentElement.scrollWidth <= window.innerWidth` em viewports de 320px, 375px, 768px, 1024px e 1440px.
2. **Touch Targets Confortáveis:** Garantir que todos os elementos interativos possuem área tátil mínima de `44x44px`.
3. **Sem Quebra de Layout:** Validar transição fluida entre breakpoints sem truncamento ou sobreposição de texto.
