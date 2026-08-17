# Learning React Native

Repositório de estudos de React Native com [Expo](https://docs.expo.dev/). Cada pasta é um projeto Expo independente, criado para praticar conceitos diferentes.

## Projetos

| Pasta | Descrição | Linguagem |
| --- | --- | --- |
| [`Training01/learning01`](Training01/learning01) | Projeto base do Expo (boilerplate). | TypeScript |
| [`Training02/training02`](Training02/training02) | Componentes básicos de UI (`View`, `Text`, `Pressable`) e estilos inline. | JavaScript |

## Requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) (via `npx`, sem instalação global)
- App [Expo Go](https://expo.dev/go) no celular, ou um emulador Android/iOS

## Rodando um projeto

Entre na pasta do projeto desejado, instale as dependências e inicie o servidor de desenvolvimento:

```bash
cd Training02/training02
npm install
npm start
```

Outros scripts disponíveis em cada projeto:

```bash
npm run android   # abre no emulador/dispositivo Android
npm run ios       # abre no simulador iOS
npm run web       # abre no navegador
```

## Estrutura

Cada projeto Expo é independente, com seu próprio `package.json`, `app.json` e `.gitignore`.
