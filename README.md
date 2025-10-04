# Painel de Chamadas para Sala de Espera (Desafio de Estágio ESIG Group)

<!-- <img width="1897" height="895" alt="Captura de tela 2025-10-03 211552" src="https://github.com/user-attachments/assets/a9054529-1405-46b9-8abc-60df5e1f0376" /> -->
![Desktop2025 10 04-14 08 55 04-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/c6835044-eb20-444a-8740-6f332d88a98e)


![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

- Este projeto é a solução para o desafio técnico do processo seletivo de estágio em Desenvolvimento Front-end da ESIG Group. O objetivo é construir uma Single Page Application (SPA) que simula um painel de chamadas para uma sala de espera, com foco na transição animada de componentes.

## ✨ Principais Funcionalidades

* **Painel com 2 Estados Visuais:** A tela alterna entre um "Estado Padrão" (com vídeo em destaque) e um "Estado de Chamada" (com a senha em destaque).
* **Transição Suave:** A troca entre os estados é feita com uma animação de *fade* (esmaecer), garantindo uma experiência visual fluida.
* **Simulação Automática:** Novas chamadas são geradas automaticamente a cada 15 segundos.
* **Aviso Sonoro:** Um bipe é tocado duas vezes a cada nova chamada para alertar os pacientes.
* **Histórico de Chamadas:** A sidebar exibe as últimas 4 chamadas, com a mais recente sempre no topo.
* **Relógio em Tempo Real:** A data e a hora no cabeçalho são atualizadas a cada segundo.
* **Suporte a Playlist:** O player de vídeo é configurado para reproduzir uma playlist do YouTube.

## ✨ Checklist de Requisitos

Esta seção detalha o status de cada critério de aceite solicitado no desafio.

* ✅ **REQ_01: Aplicação de Página Única (SPA):** Deve haver apenas uma tela, cujos estados visuais
mudam dinamicamente, conforme as imagens de
referência.
* ✅ **REQ_02: Animação Suave:** A transição do vídeo (redução/expansão e movimento)
deve ser fluida, sem travamentos ou saltos visuais..
* ✅ **REQ_03: Simulação da Chamada:** A aplicação deve fornecer um mecanismo claro para
disparar o evento de uma nova chamada (ex: um botão,
um timer).
* ✅ **REQ_04: Timer de Retorno Automático:** O "Estado de Chamada" deve permanecer ativo por 15
segundos antes de retornar automaticamente ao "Estado
Padrão".
* ✅ **REQ_05: Reprodução de Vídeo:** O vídeo principal deve ser reproduzido em loop e com
som.
* ✅ **REQ_06: Atualização do Histórico:** A cada nova chamada, a lista de histórico é atualizada com a chamada mais recente no topo.
* ⚠️ **REQ_07: Código Limpo e Organizado:** O código-fonte deve ser legível, bem estruturado e conter
comentários que expliquem a lógica implementada.
* ✅ **REQ_08: Suporte a Playlist:** A aplicação deve permitir a configuração de uma playlist
do YouTube, em vez de um único vídeo.
* ❌ **REQ_09: Responsividade:** A aplicação deve ser responsiva para se adaptar
conforme o dispositivo. Tamanho mínimo: 1366 x 768.

## 🛠️ Tecnologias Utilizadas

* **Angular v18.x:** Framework principal para a construção da SPA.
* **TypeScript:** Linguagem base para o desenvolvimento com Angular.
* **SCSS:** Pré-processador CSS para estilização avançada.
* **HTML5:** Linguagem de marcação para a estrutura das páginas.
* **Font Awesome** (para ícones)
* **pixabay** (sound)


## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [Angular CLI](https://angular.dev/cli) (`npm install -g @angular/cli`)

**Instalação e Execução:**

1.  **Clone o repositório:**
    ```bash
    git clone (https://github.com/andersonpedrodn/esig-painel-chamadas)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd esig-painel-chamadas
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação:**
    ```bash
    ng serve --open
    ```

A aplicação estará disponível em `http://localhost:4200/`.

## 📹 Vídeo de Apresentação
*Link para o vídeo de 10-15 minutos apresentando a aplicação e explicando os conceitos de CSS aplicados.*
