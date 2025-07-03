
# Location SQLite App

Este é um aplicativo desenvolvido em **React Native com Expo**, que tem como objetivo principal capturar a localização atual do usuário, salvar os dados localmente utilizando **SQLite**, e aplicar tema escuro/claro com persistência usando **AsyncStorage**.

---

## O que o app faz

- Solicita permissão de localização ao usuário
- Captura a latitude e longitude reais
- Salva essas localizações no banco de dados local (SQLite)
- Lista todas as localizações capturadas
- Aplica tema escuro/claro com persistência entre sessões

---

## Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-location](https://docs.expo.dev/versions/latest/sdk/location/)
- [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
- [React Native Paper](https://callstack.github.io/react-native-paper/)

---

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/marcosgoudinho/location-sqlite.git
cd location-sqlite
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Instale as bibliotecas necessárias

```bash
npx expo install expo-location expo-sqlite
npm install @react-native-async-storage/async-storage
```

### 4. Inicie o emulador Android (via Android Studio) ou conecte um celular via USB

> Certifique-se de que a **virtualização (SVM/VT-x)** esteja ativada no BIOS caso use emulador.

### 5. Rode o app no emulador

```bash
npx expo start --android
```

---

## 📱 Requisitos

- Node.js
- Expo CLI
- Android Studio com emulador ou celular com **Expo Go**
- Permissões de localização ativadas

---

## 📦 Estrutura de funcionalidades

- `App.js`: tela principal com botão de captura e listagem
- `helpers/themeStorage.js`: persistência do tema com AsyncStorage
- `helpers/database.js`: criação, inserção e leitura no banco SQLite

---

## ✅ Conclusão

Este projeto tem como objetivo o aprendizado prático sobre:
- **Permissões e localização com Expo**
- **Persistência de dados com SQLite e AsyncStorage**
- **Gerenciamento de estado e temas com React Native**

Foi desenvolvido como parte da disciplina **Soluções Mobile** no curso de **Engenharia de Software da UNISATC**.

---

### 🔗 Professor responsável:
**Thyerri Mezzari**

-------------------------------------------------------------------------------------------------------------------------------------------
