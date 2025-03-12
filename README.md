(Due to technical issues, the search service is temporarily unavailable.)

Aqui está o conteúdo do `README.md` formatado para ser copiado e salvo em um arquivo `README.md`. Você pode copiar este texto, colar em um arquivo `.md` e fazer o download.

```markdown
# Formula 1 API

Esta é uma API simples construída com Fastify que fornece informações sobre equipes e pilotos da Formula 1.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/formula1-api.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd formula1-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

O servidor estará rodando em `http://localhost:3333`.

## Endpoints

### Listar todas as equipes

- **URL:** `/teams`
- **Método:** `GET`
- **Resposta:**
  ```json
  {
    "formula1Teams": [
      {
        "id": 1,
        "nome": "Mercedes-AMG Petronas Formula One Team",
        "base": "Brackley, Reino Unido"
      },
      ...
    ]
  }
  ```

### Listar todos os pilotos

- **URL:** `/racers`
- **Método:** `GET`
- **Resposta:**
  ```json
  {
    "formula1Drivers": [
      {
        "id": 1,
        "nome": "Lewis Hamilton",
        "equipeId": 1,
        "nacionalidade": "Britânico"
      },
      ...
    ]
  }
  ```

### Obter detalhes de um piloto específico

- **URL:** `/racers/:id`
- **Método:** `GET`
- **Parâmetros:**
  - `id` (número): ID do piloto
- **Resposta:**
  ```json
  {
    "driver": {
      "id": 1,
      "nome": "Lewis Hamilton",
      "equipeId": 1,
      "nacionalidade": "Britânico"
    }
  }
  ```

  **Erro:**
  ```json
  {
    "message": "Piloto não encontrado"
  }
  ```

## Estrutura do Projeto

- `index.ts`: Arquivo principal que contém a configuração do servidor e os endpoints.
- `README.md`: Este arquivo, contendo informações sobre o projeto.

## Dependências

- [Fastify](https://www.fastify.io/): Framework web rápido e de baixo overhead para Node.js.
- [@fastify/cors](https://github.com/fastify/fastify-cors): Plugin para habilitar CORS no Fastify.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```
