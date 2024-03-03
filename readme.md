# Projeto devstore - Rocketseat

## Sobre o Projeto

O devstore é um projeto pessoal desenvolvido utilizando o Next.js 14, concebido com o objetivo de explorar os novos recursos e conceitos introduzidos na última versão do framework. Este projeto visa proporcionar um e-commerce com a listagens de produtos, com interface fuida. Com foco em mostrar o aprendizado e a aplicação prática dos novos recursos do Next.js 14, o devstore é um exemplo claro de como tecnologias modernas podem ser utilizadas para criação de novas ferramentas para o mercado.

## Recursos e Tecnologias Utilizadas

- **Next.js 14**: A base do projeto, utilizada para o desenvolvimento do front-end e algumas funcionalidades do back-end.
- **React 18**: Utilizado junto com o Next.js para criar uma interface de usuário interativa e dinâmica.
- **TypeScript**: Para adicionar tipagem estática ao projeto, aumentando a qualidade do código e reduzindo a chance de erros.
- **Tailwind CSS**: Para estilização rápida e responsiva das páginas.
- **Vercel**: Para hospedagem e deploy contínuo do projeto, aproveitando a integração direta com repositórios Git.

## Funcionalidades

- **Listagens de Produtos**: Usuários podem explorar produtos utilizando filtros como categorias, marcas, faixas de preço, e avaliações. Esta funcionalidade facilita a navegação pelo catálogo e ajuda os usuários a encontrar os produtos que estão procurando de maneira eficaz.

- **Funcionalidade de Busca**: Essencial para um e-commerce, permite aos usuários pesquisar produtos específicos por meio de palavras-chave. A busca inteligente pode sugerir produtos conforme o usuário digita, melhorando a experiência de compra.

- **Filtros de Produtos**: Além da busca por palavras-chave, os usuários podem refinar os resultados utilizando filtros avançados, como faixa de preço, cor, tamanho, avaliações de clientes, e mais. Isso permite que os usuários encontrem exatamente o que precisam com facilidade.

- **Apresentação de um Produto Individual**: Cada produto tem sua própria página com detalhes, incluindo descrição, especificações, preço, opções de personalização (se aplicável), fotos de alta qualidade e avaliações de usuários. Isso ajuda os clientes a tomar decisões informadas sobre suas compras.

- **Cadastro e Autenticação de Usuários**: Os usuários podem criar uma conta para uma experiência personalizada. Isso inclui salvar produtos favoritos, acompanhar o histórico de pedidos e facilitar o processo de checkout com informações de envio e pagamento salvas.

- **Carrinho de Compras e Checkout**: Os usuários podem adicionar produtos ao carrinho e prosseguir para o checkout, onde podem revisar seus pedidos, escolher opções de envio, aplicar cupons de desconto e concluir a compra de forma segura.

- **Alertas e Notificações**: Os usuários podem se inscrever para receber notificações sobre novos produtos, ofertas especiais ou disponibilidade de itens anteriormente fora de estoque, garantindo que não percam nenhuma oportunidade.


## Novos Recursos do Next.js 14 Utilizados

- **Server Components**: Utilização de Server Components para melhorar a performance do aplicativo, carregando dinamicamente partes da página no servidor.
- **Streaming de Dados**: Implementação de streaming de dados para carregar conteúdo de forma eficiente, melhorando a experiência do usuário.
- **Suspense no Servidor**: Uso do Suspense para lidar com a busca assíncrona de dados, permitindo uma renderização mais fluida.
- **Edge API Routes**: Emprego de Edge API Routes para reduzir a latência nas respostas das requisições, aproveitando a infraestrutura global da Vercel.
- **TypeScript 4.7**: Aproveitamento das últimas funcionalidades do TypeScript para garantir um código mais seguro e de fácil manutenção.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão recomendada: 16.x ou superior)
- npm ou yarn
- Uma conta na Vercel (para deploy)

### Passos para Execução

1. Clone o repositório do projeto:
   ```
   git clone https://github.com/estevesryan/devstore.git
   ```
2. Entre no diretório do projeto:
   ```
   cd devstore
   ```
3. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   yarn
   ```
4. Configure as variáveis de ambiente criando um arquivo `.env.local` com base no arquivo de exemplo `.env.example`.

5. Execute o projeto localmente:
   ```
   npm run dev
   ```
   ou
   ```
   yarn dev
   ```
6. Acesse `http://localhost:3000` no seu navegador para ver o projeto rodando.

## Contribuições

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para abrir uma issue ou criar um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
