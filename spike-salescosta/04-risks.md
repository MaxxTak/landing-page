# 04. Risks · Riscos, Dependências & Perguntas em Aberto

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-09-01  
> **Status:** Atualizado conforme Layout Oficial ([sales-costa-layout1.png](../images/sales-costa-layout1.png))

---

## 1. Matriz de Riscos Técnicos e de Negócio

| ID | Risco Identificado | Categoria | Probabilidade | Impacto | Estratégia de Mitigação |
|---|---|---|---|---|---|
| **R01** | Ausência de definição do serviço de backend para envio do formulário de contato | Técnico | Alta | Alto | Utilizar serviço *serverless* terceirizado (Formspree/EmailJS) enviando para `contato@salescosta.com.br` ou fallback via WhatsApp API. |
| **R02** | Fotografias reais dos sócios (AS, CC, FR, LM) ainda não foram tiradas | Conteúdo | Média | Médio | Manter a solução inteligente prevista no layout oficial: placeholders elegantes com iniciais (*AS*, *CC*, *FR*, *LM*) sobre fundo bege `#F8F6F4`. |
| **R03** | Números da OAB nos cards da equipe constam como `OAB/SP 000.000` | Conteúdo | Baixa | Baixo | Substituir pelas inscrições OAB oficiais dos sócios antes da publicação final. |
| **R04** | Formatos de imagem PNG `_temp` para logos | Marca | Baixa | Baixo | Ativos parametrizados via CSS/HTML permitindo substituição transparente por vetores SVG. |

---

## 2. Perguntas em Aberto (Fila de Decisões)

1. **Backend do Formulário:** Qual plataforma processará as mensagens enviadas por `contato@salescosta.com.br`?
2. **Inscrições OAB:** Quais os números de inscrição OAB reais de Antônio Sales, Camila Costa, Felipe Ramos e Luisa Martins?
3. **Endereço e Telefone:** Confirmar se o endereço `Av. Paulista, 1000 — 12º andar` e telefone `+55 (11) 3000-0000` são definitivos.
