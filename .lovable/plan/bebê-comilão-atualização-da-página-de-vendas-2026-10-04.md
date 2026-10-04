# Bebê Comilão — atualização da página de vendas

## Mudanças visíveis
- Substituir o título principal por: “+365 receitas com ferro, vitaminas e texturas certas para o seu bebê com mais de 6 meses crescer saudável — e você já saber o que preparar para ele todos os dias.”
- Substituir o texto de apoio por: “Seu bebê merece mais que papinha pronta e repetição. São 365 receitas organizadas por fase, com apoio de pediatra e nutricionista, para você variar as refeições, parar de decidir tudo do zero e planejar a semana com mais clareza, mesmo com a rotina corrida.”
- Remover a área do vídeo e colocar, no lugar, o mockup transparente enviado (mulher e livros), em tamanho médio e sem cortar a arte.
- Logo abaixo do primeiro botão de compra da abertura, acrescentar uma faixa horizontal contínua com as cinco imagens de receitas enviadas, lado a lado e com movimento infinito suave. A frase “Você não precisa de mais receitas salvas no celular.” permanece na seção seguinte.
- No topo da página, exibir “OFERTA LIMITADA - EXPIRA EM”, um ícone de relógio e contagem regressiva de 17:00. A contagem começa na primeira visita daquele navegador, continua após sair/voltar e para em 00:00; outro aparelho começa sua própria contagem.
- Na seção da oferta, substituir “Oferta válida até hoje às 00:00” por “A oferta expira em minutos, não saia da página!”

## Imagens e desempenho
- Enviar ao CDN as seis imagens novas, preservando seus arquivos originais, sem recortes nem alterações: um mockup e cinco receitas. As imagens já existentes (logo, depoimentos e mockups dos kits) permanecem no CDN.
- Priorizar o carregamento do mockup visível no início, manter dimensões reservadas para evitar saltos e carregar as imagens da faixa de forma eficiente. Não prometer carregamento instantâneo em qualquer conexão.

## Detalhes técnicos
- Ajustar a abertura e inserir componentes leves para cronômetro e faixa de receitas, com animação CSS em loop e respeito à preferência por movimento reduzido.
- Salvar no armazenamento local do navegador um prazo absoluto calculado na primeira visita; no carregamento, calcular o tempo restante pelo relógio atual, evitando reinício em recargas e conflitos de hidratação.
- Preservar seções, links da Cakto, pixel da UTMify e demais imagens. Verificar desktop e celular, recarga/retorno do cronômetro, movimento contínuo e carregamento das imagens.
