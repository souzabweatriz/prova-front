# PROVA - Front-End De Professores e Disciplinas

Este projeto tem como objetivo criar um Front para a API de gerenciamento de **Professores** e **Disciplinas**.f


## 🚀 Como iniciar o projeto Next.js (Windows CMD)
### 📦 Criando o projeto

```bash
npx create-next-app@latest
```

### 💬 Responder perguntas 

#### Would you like to use TypeScript? ... No / Yes
#### Would you like to use ESLint? ... No / Yes
#### Would you like to use Tailwind CSS? ... No / Yes
#### Would you like your code inside a src/ directory? ... No / Yes
#### Would you like to use App Router? (recommended) ... No / Yes
#### Would you like to use Turbopack for next dev? ... No / Yes
#### Would you like to customize the import alias (@/* by default)? ... No / Yes

```bash
cd my-app
```
```bash
code .
```
```bash
npm run dev
```

---

## ✅ ESSENCIAIS

```bash
npm install 
```
``` bash
npm install antd
```
``` bash
npm install react-toastify
```
``` bash
npm install axios
```

---

## 🚀 middleware.js

```json
import { NextResponse } from "next/server";

export const config = {
    matcher: "/",
};

export default function middleware(req) {
    return NextResponse.redirect(new URL("/<nome da pasta da rota>", req.url));
}
```

---

## 📁 Estrutura básica sugerida

```
.next/
public/
├── icons/
├── images/
├── media/
src/
├── app/
├── components/
├── styles/
middleware.js
.env.local
.gitignore
eslint.config.mjs
jsconfig.json
next.config.mjs
package-lock.json
package.json
README.md

```

---

## 🌐 Pacotes instalados

| Pacote        | Função                          |
|---------------|---------------------------------|
| antd          | Biblioteca de componentes UI    |
| react-toastify| Permite requisições externas    |
| axios         | Variáveis de ambiente           |


---

## 📝 Comandos úteis

```
# Rodar servidor em desenvolvimento
npm run dev

# Rodar servidor em produção
npm start
```

---

## 🔗 Links úteis para consulta

- 📄 [Documentação 1 - Cheat Sheet ](https://docs.google.com/document/d/18cXgKxNFGcFshRfH6-cpQEVJ4z7wuY-5Jr1pZFiuhm4/edit?tab=t.0)


