# Nome do Projeto

Tabela de Funcionários.

## Sobre o Projeto

Este projeto é uma aplicação web desenvolvida em React.js que exibe uma tabela responsiva com dados consumidos de uma API simulada utilizando `json-server`. Ele inclui funcionalidades como pesquisa por nome, cargo e número de telefone, além de formatação de datas e números de telefone no front-end.

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) como gerenciador de pacotes

## Instruções para Rodar a Aplicação

### 1. Clonar o Repositório

```bash
git clone https://github.com/rmdbarbosa/tabela.git
cd tabela
```

### 2. Instalar Dependências

Se estiver usando npm:

```bash
npm install
```

Ou com Yarn:

```bash
yarn install
```

### 3. Iniciar o Servidor JSON (API Simulada)

```bash
json-server --watch db.json
```

### 4. Rodar a Aplicação

Se estiver usando npm:

```bash
npm run dev
```

Ou com Yarn:

```bash
yarn dev
```

A aplicação será aberta automaticamente no navegador.

## Tecnologias Utilizadas

- React.js
- Tailwind CSS
- json-server
- TypeScript
