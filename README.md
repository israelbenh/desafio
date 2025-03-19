# README - Configuração e Execução de Testes com Cypress

## 1. Preparação do Ambiente
Antes de começar, certifique-se de que tem instalado:

✅ Node.js (versão recomendada: 18+)
✅ Docker (já está rodando o backend no Docker)
✅ Git

Caso precise instalar o Node.js, baixe aqui: [Node.js](https://nodejs.org/)

---

## 2. Criando o Projeto Cypress
Abra o terminal e execute os seguintes comandos para criar o projeto e configurar o Cypress.

```sh
# Criar a pasta do projeto e entrar nela
mkdir cypress-tests
cd cypress-tests

# Iniciar um projeto Node.js
npm init -y

# Instalar o Cypress como dependência de desenvolvimento
npm install cypress --save-dev
```

Após a instalação, abra o Cypress pela primeira vez:

```sh
npx cypress open
```
Isso criará automaticamente a pasta `cypress/` e alguns arquivos de configuração.

---

## 3. Configurando o Cypress
Edite o arquivo `cypress.config.js` para definir a URL base do seu ambiente:

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // Configuração extra se necessário
    },
  },
});
```

Isso fará com que os testes sempre usem `http://localhost:8080` como URL base.

---

## 4. Executando os Testes
Para rodar os testes no modo interativo:

```sh
npx cypress open
```

Para rodar os testes no modo headless (sem abrir interface):

```sh
npx cypress run
```

---

## 5. Integrando ao Docker (Opcional)
Se quiser rodar os testes dentro de um contêiner Docker, crie um `Dockerfile`:

```Dockerfile
FROM cypress/included:12.17.1

WORKDIR /app

COPY . .

CMD ["npx", "cypress", "run"]
```

Agora, rode os testes dentro do Docker:

```sh
docker build -t cypress-tests .
docker run --network=host cypress-tests
```

---

## 6. Execução via Linha de Comando
Para rodar os testes via linha de comando, utilize:

```sh
npx cypress run --browser chrome # Executa no navegador Chrome
npx cypress run --headless # Executa os testes sem interface gráfica
```

Se precisar de um relatório em JSON:

```sh
npx cypress run --reporter json > resultado.json
```

---

### Comentários
- Sempre comente estruturas mais complexas para facilitar a compreensão do código.
- Se tiver alguma dúvida ou sugestão, entre em contato!

---

🚀 **Agora você está pronto para rodar testes automatizados com Cypress!**

