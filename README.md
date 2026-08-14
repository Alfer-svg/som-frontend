# som-frontend — endereço aposentado (redirecionador)

O SOM saiu daqui em **14/08/2026**. Este repositório é público e por isso não
guarda mais uma linha do sistema: ficou só o redirecionamento para o endereço
próprio da Maracatu Digital.

- **Sistema:** https://app.maracatumktdigital.com
- **Código (privado):** `Alfer-svg/som-app`
- **API:** `api.maracatumktdigital.com`

## Por que não foi simplesmente apagado

Três coisas ainda apontam para `alfer-svg.github.io/som-frontend`:

1. **O aplicativo já instalado** — o endereço fica compilado dentro dele
   (`capacitor.config.ts`, `server.url`). Quem tem o app abre por aqui, e versão
   nova só chega depois da fila da Apple.
2. **Links de portal já enviados** a clientes.
3. Favoritos.

O `404.html` atende qualquer caminho e repassa preservando parâmetros — é o que
mantém esses três casos funcionando.

**Quando apagar:** app novo publicado + links renovados. Estimativa: 60 dias.
