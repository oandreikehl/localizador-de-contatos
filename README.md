# 📇 Localizador de Contatos

O **Localizador de Contatos** é uma aplicação web desenvolvida para facilitar a **consulta e localização de contatos** a partir de dados armazenados em uma planilha.

A aplicação utiliza **JavaScript para acessar, percorrer e manipular os dados da planilha**, permitindo realizar pesquisas diretamente pela interface e apresentar os contatos correspondentes de forma dinâmica.

---

## 🚀 Tecnologias e recursos utilizados

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="45px" alt="HTML5"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="45px" alt="CSS3"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45px" alt="JavaScript"/>
</div>

<img src="https://github.com/oandreikehl/localizador-de-contatos/blob/master/assets/localizador-de-contatos.jpg?raw=true">

### HTML5

Utilizado para estruturar a interface da aplicação, incluindo campo de pesquisa, área de resultados e informações dos contatos.

### CSS3

Responsável pela estilização, organização dos elementos e criação de uma interface responsiva.

### JavaScript

Responsável pela lógica da aplicação, leitura dos dados, pesquisa, filtragem e atualização dinâmica das informações apresentadas na tela.

### 📊 Integração com planilha

A aplicação utiliza uma **planilha como fonte de dados**, permitindo consultar e atualizar a base de contatos de forma independente do código.

### 🔁 Estrutura de repetição `for`

O JavaScript utiliza a estrutura de repetição **`for`** para percorrer os registros obtidos da planilha e verificar os dados de cada contato durante o processo de pesquisa.

---

## ✨ Funcionalidades

* 🔎 Busca de contatos
* 📊 Integração com planilha
* 📋 Leitura dinâmica dos dados
* 🔁 Percorrimento dos registros utilizando `for`
* ⚡ Filtragem dos resultados
* 👤 Exibição das informações encontradas
* 🔄 Atualização dos dados através da planilha
* 📱 Interface responsiva

---

## 🔄 Como funciona

```text
       📊 Planilha
           ↓
    📥 Leitura dos dados
           ↓
      ⚙️ JavaScript
           ↓
    🔁 Percorre os registros
           ↓
      🔎 Pesquisa
           ↓
    📋 Filtra os resultados
           ↓
    👤 Exibe o contato
```

---

## 📊 Integração com planilha

Os contatos são armazenados em uma **planilha**, que funciona como a base de dados utilizada pela aplicação.

Através do JavaScript, os dados são carregados e percorridos para localizar os registros correspondentes à pesquisa realizada pelo usuário.

Dessa forma, novos contatos podem ser adicionados ou informações podem ser atualizadas diretamente na planilha, mantendo a aplicação conectada à base de dados.

---

## 🧠 Lógica de pesquisa

Ao realizar uma pesquisa, o JavaScript percorre os registros disponíveis e verifica quais correspondem ao termo informado pelo usuário.

```javascript
for (let i = 0; i < contatos.length; i++) {
    // Verificação dos dados do contato
}
```

Após a verificação, os resultados encontrados são apresentados dinamicamente na interface.

---

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, permitindo a utilização da aplicação em:

* 💻 Desktop
* 📱 Smartphones
* 📲 Tablets

---

## 🛠️ Estrutura do projeto

```text
Localizador-de-Contatos/
│
├── 📄 index.html
├── 🎨 style.css
├── ⚙️ scripts.js
└── 🖼️ assets/
```

---

## 🎯 Destaques

* Integração entre **Front-End e fonte externa de dados**
* Consulta dinâmica de contatos
* Integração com planilha
* Manipulação e filtragem de dados com JavaScript
* Utilização de estrutura de repetição `for`
* Atualização dos dados sem necessidade de alterar diretamente o código
* Interface responsiva

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Andrei Kehl**.
