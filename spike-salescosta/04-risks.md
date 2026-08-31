# 04. Risks · Riscos, Dependências & Perguntas em Aberto

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-08-31  
> **Status:** Concluído / Pronto para Implementação

---

## 1. Matriz de Riscos Técnicos e de Negócio

| ID | Risco Identificado | Categoria | Probabilidade | Impacto | Estratégia de Mitigação |
|---|---|---|---|---|---|
| **R01** | Ausência de definição do serviço de backend para envio de e-mails do formulário de contato | Técnico / Integração | Alta | Alto | Utilizar serviço *serverless* terceirizado sem backend próprio (ex: Formspree, EmailJS ou Resend) ou integrar via API WhatsApp Web como fallback temporário. |
| **R02** | Imagens e marcas atuais possuem sufixo `_temp` e podem sofrer alteração de proporção | Design / Marca | Média | Médio | Manter os caminhos de imagens em variáveis/CSS e usar containers com `object-fit: contain` e dimensões relativas. |
| **R03** | Latência no carregamento de fontes externas (Google Fonts) em conexões lentas | Performance | Baixa | Médio | Implementar `<link rel="preconnect">`, utilizar `font-display: swap` e prever fallbacks de fontes do sistema (`Georgia`, `serif`, `Arial`). |
| **R04** | Ausência de fotos profissionais em alta resolução da equipe de advogados | Conteúdo | Alta | Médio | Desenvolver os cards de equipe com suporte a avatares/silhuetas estilizadas com as cores da marca enquanto o ensaio fotográfico não é concluído. |
| **R05** | Incompatibilidade com navegadores legados (ex: Internet Explorer) | Compatibilidade | Baixa | Baixo | Utilizar propriedades CSS3 modernas com fallbacks padrão e JavaScript ES6 compilado ou compatível com navegadores evergreen. |

---

## 2. Perguntas em Aberto (Fila de Decisões)

> [!WARNING]
> Os pontos abaixo precisam de definição antes ou durante as fases iniciais de desenvolvimento.

### 2.1 Backend e Envio de E-mails
1. Qual será a ferramenta de recebimento das mensagens do formulário? (Formspree, EmailJS, Webhook N8N/Make, ou e-mail corporativo via SMTP?)
2. Haverá redirecionamento automático para o WhatsApp Business do escritório ao enviar a mensagem?

### 2.2 Conteúdo e Mídia
1. Quais são as 6 áreas de atuação prioritárias a serem exibidas na versão inicial da landing page?
2. Quantos sócios/advogados integrarão a seção "Nossa Equipe" e quais suas descrições e números OAB?
3. Os números apresentados na seção "Em Números" (anos de experiência, clientes, casos) já foram validados pela diretoria do escritório?

### 2.3 Hospedagem e Infraestrutura
1. Qual será a plataforma de hospedagem de destino? (Vercel, Netlify, GitHub Pages, cPanel/Hostgator do cliente?)
2. O domínio `salescosta.com.br` já está registrado e configurado com suporte a HTTPS/SSL?

---

## 3. Mapeamento de Dependências Externas

1. **Google Fonts CDN:** Carregamento das famílias `Cormorant Garamond` e `DM Sans`.
2. **Serviço de Formulário:** Dependência de endpoint HTTPS para recebimento dos dados do formulário sem exposição de credenciais de e-mail.
3. **Ativos de Marca:** Troca dos arquivos PNG `_temp` pelos vetores finais em SVG assim que fornecidos pelo time de branding.
