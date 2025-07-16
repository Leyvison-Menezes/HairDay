# 💈 Hair Day - Agendamento de Barbearia

Projeto de Estudo Rocketseat

---

## 🚀 Sobre o Projeto

O **Hair Day** é uma aplicação web do tipo SPA (Single Page Application) desenvolvida como parte de um curso da **Rocketseat**.  
O projeto simula um sistema de agendamento para uma barbearia, permitindo **agendar, visualizar e cancelar horários** de forma simples e intuitiva.

O objetivo principal foi colocar em prática conceitos fundamentais de:

- JavaScript moderno
- Manipulação da DOM
- Modularização de código
- Integração com uma API REST simulada

---

## ✨ Funcionalidades

- **📅 Agendamento de Horários**  
  Selecione uma data e um horário disponível para agendar um atendimento.

- **📆 Visualização por Dia**  
  Veja todos os agendamentos do dia, separados por manhã, tarde e noite.

- **⏳ Disponibilidade de Horários**  
  Horários passados ou já ocupados ficam automaticamente indisponíveis.

- **❌ Cancelamento de Agendamentos**  
  Cancele agendamentos existentes com uma confirmação simples.

---

## 🛠️ Tecnologias e Conceitos Aplicados

### 🎨 Frontend

- **HTML5**: Estruturação semântica da página  
- **CSS3**: Estilização responsiva  
- **JavaScript (ESM)**: Lógica da aplicação, DOM, eventos e fetch API

### 🧪 Backend (Simulado)

- **json-server**: API REST mockada a partir de um arquivo `.json`

### 🧰 Ferramentas de Desenvolvimento

- **Node.js & NPM**: Ambiente de execução e pacotes  
- **Webpack**: Empacotamento dos módulos JS/CSS  
- **Babel**: Compatibilidade com navegadores antigos  
- **webpack-dev-server**: Live reload para desenvolvimento

### 📅 Bibliotecas

- **dayjs**: Manipulação e formatação de datas

---

## 📂 Estrutura de Pastas

```HairDay
/
├── dist/                # Arquivos finais para produção
├── node_modules/        # Dependências
├── src/                 # Código-fonte
│   ├── assets/          # Imagens e ícones
│   ├── libs/            # Config. de bibliotecas (ex: dayjs.js)
│   ├── modules/         # Lógica principal
│   │   ├── form/        # Formulário de agendamento
│   │   └── schedules/   # Visualização e cancelamento
│   ├── services/        # Comunicação com a API
│   ├── styles/          # CSS
│   └── utils/           # Funções utilitárias (ex: opening-hours.js)
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── server.json          # Base de dados mock
└── webpack.config.js    # Configuração do Webpack
```

---

## ⚙️ Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Leyvison-Menezes/HairDay.git
```

### 2. Acesse o diretório

```bash
cd HairDay
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor da API (json-server)

```bash
npm run server
```

> A API estará rodando em: [http://localhost:3333](http://localhost:3333)

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

> A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🙏 Agradecimentos

Agradeço à **Rocketseat** por todo o conteúdo de qualidade e os desafios práticos que tornaram possível o desenvolvimento deste projeto.

---

📎 **GitHub**: [Hair Day no GitHub](https://github.com/Leyvison-Menezes/HairDay)
