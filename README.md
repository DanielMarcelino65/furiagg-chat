# 🐾 FURIA Fan Chat — Experiência Interativa com o Time de CS

Este projeto é uma simulação de um chat interativo com a FURIA Esports, focado no time de Counter-Strike. O objetivo é criar uma experiência imersiva para os fãs, permitindo que descubram curiosidades, estatísticas e conquistas do time de forma divertida, responsiva e animada.

---

## 🧠 Funcionalidades

- 💬 Chat com IA (OpenAI GPT-4) focado **exclusivamente no time de CS da FURIA**
- 🔄 Persistência de conversa via `localStorage`, mesmo após recarregar a página
- 💡 Sugestões de perguntas dinâmicas e botão para acessar perguntas anteriores
- 🤖 Detecção de perguntas repetidas e controle inteligente do histórico
- ✨ Animações suaves com Framer Motion para mensagens e botões
- 📱 Interface responsiva e acessível para desktop e mobile
- 💻 Código limpo, organizado e totalmente documentado com JSDoc

---

## 🔧 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [OpenAI API (GPT-4)](https://platform.openai.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Como rodar localmente

1. **Clone o repositório**

```bash
git clone https://github.com/DanielMarcelino65/furiagg-chat.git
```

2. **Instale as dependências**

```bash
pnpm install
# ou
npm install
```

3. **Adicione sua chave da OpenAI no `.env`**

```
OPENAI_API_KEY=sk-sua-chave-aqui
```

4. **Adicione suas informações do FIrebase no `.env`**

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

5. **Execute o projeto**

```bash
pnpm dev
# ou
npm run dev
```

---

## 🧪 Diferenciais implementados

- ✅ Persistência do chat sem obrigar login (especialmente devido aos testes que deverão ser realizados)
- ✅ Estrutura modular com componentes reutilizáveis e tipados
- ✅ Fluxo de usuário limpo, sem repetições ou loops confusos
- ✅ UX aprimorada com animações suaves
- ✅ Código documentado com comentários e JSDoc para fácil manutenção
- ✅ Controle inteligente de histórico de perguntas
- ✅ Perguntas feitas são geradas pela própria AI, baseado em possíveis interesses de um fã

---

## 🛡️ Observação

Este projeto é uma **simulação interativa**. Algumas respostas podem não refletir dados oficiais em tempo real.

---

## 🙋‍♂️ Autor

Desenvolvido por **Daniel Marcelino**
📧 [www.linkedin.com/in/danielmarcelino65](www.linkedin.com/in/danielmarcelino65)

---

## 📝 Licença

Este projeto é livre para fins acadêmicos e de portfólio.

---

**GL HF** 🖤
