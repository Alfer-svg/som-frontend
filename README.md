# SOM — Sistema Operacional Maracatu

Sistema operacional interno da **Maracatu Digital Intelligence** (agência de marketing digital).

## Módulos (MVP)
- **Dashboard** — KPIs (clientes, receita, funil, projetos, MRR, a receber/pagar).
- **CRM** — funil de vendas em kanban (8 estágios: Novo → Contatado → Qualificado → Reunião → Proposta → Negociação → Ganho/Perdido). Lead "Ganho" vira cliente.
- **Comercial** — cadastro de clientes com **CNPJ auto-preenchido** (BrasilAPI) + validação.
- **Financeiro** — receitas/despesas, a receber/pagar, status pago/pendente.
- **Operacional** — projetos em kanban por status, com serviço, responsável, prazo e progresso.

## Stack
HTML + [Alpine.js](https://alpinejs.dev) (CDN) + CSS puro. Dados em `localStorage` (prefixo `som_`). Sem backend — MVP. Migrar pra backend/login quando precisar de multiusuário.

## Rodar
Servir a pasta (ex.: `python3 -m http.server 8770`) e abrir `http://localhost:8770`.
