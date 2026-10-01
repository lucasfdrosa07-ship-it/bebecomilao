# Bebê Comilão — recriar a página de vendas no Lovable

Recriar fielmente a página enviada (mesmos textos, cores, ordem das seções, links de checkout e imagens), adaptada à estrutura deste projeto.

## Seções (na ordem original)
1. Topo: logo, título, área do vídeo (placeholder até ter o link), linha de confiança e botão para a oferta
2. Explicação do produto (antes x depois)
3. O que você recebe (4 cartões)
4. Distribuição das 365 receitas (5 categorias + total)
5. Depoimentos (carrossel automático com as 6 imagens reais)
6. Oferta: Kit Essencial R$ 10,90 e Kit Completo R$ 27,90, aviso "oferta limitada", bônus e apoio profissional
7. Perguntas frequentes (sanfona)
8. Chamada final com os dois botões de compra

## Mantido como está
- Links de checkout Cakto (Essencial e Completo)
- Paleta creme/rosa (#FDFBF7, #FB7185, #292524) e animações suaves de entrada
- Título e descrição de compartilhamento do site original

## Pendências (ficam com espaço reservado, como no original)
- Link do vídeo de vendas
- Imagem do produto e do bônus
- Nome e credenciais da profissional

## Detalhes técnicos
- Página única em `src/routes/index.tsx`, componentes em `src/components/landing/`
- Cores convertidas em tokens no `src/styles.css`
- Instalar `motion` e usar `lucide-react`; dados editáveis num arquivo de configuração
- Sem chave Gemini/servidor Express (não são usados pela página)
