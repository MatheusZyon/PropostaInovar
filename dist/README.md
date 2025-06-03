# Proposta Comercial - Inovar Esquadrias (Projeto React + Vite)

Este repositório contém o código-fonte da landing page de proposta comercial desenvolvida para a Inovar Esquadrias, utilizando React, TypeScript, Vite e Tailwind CSS com Shadcn/ui.

## Visão Geral

O projeto apresenta uma proposta comercial interativa, destacando os serviços da CRIA RÁPIDO e o desafio enfrentado pela Inovar Esquadrias, culminando na solução proposta.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

*   Node.js (versão 18 ou superior recomendada)
*   PNPM (gerenciador de pacotes)

## Instalação

1.  Clone este repositório ou descompacte o arquivo .zip fornecido.
2.  Navegue até o diretório raiz do projeto:
    ```bash
    cd inovar-proposta
    ```
3.  Instale as dependências do projeto usando PNPM:
    ```bash
    pnpm install
    ```

## Executando Localmente

Para iniciar o servidor de desenvolvimento local:

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver ocupada).

## Scripts Disponíveis

*   `pnpm dev`: Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR).
*   `pnpm build`: Compila o projeto para produção na pasta `dist`.
*   `pnpm lint`: Executa o ESLint para verificar erros e avisos de código.
*   `pnpm preview`: Inicia um servidor local para visualizar a build de produção.

## Correções Realizadas

Durante a análise, foram identificados e corrigidos os seguintes pontos:

1.  **Erro de Lint:** Uma variável não utilizada (`actionTypes`) no hook `use-toast.ts` foi removida.
2.  **Erros de Importação de Imagens:** Os caminhos de importação para as imagens `logo-cria-rapido.png` e `seta-baixo.png` no arquivo `App.tsx` foram corrigidos para apontar para o diretório correto (`./assets/images/` em vez de `./assets/logos/`).

## Deploy no Vercel

Este projeto está pronto para ser implantado na Vercel.

1.  **Conecte seu Repositório GitHub:** Faça o upload deste projeto para um novo repositório no GitHub.
2.  **Importe o Projeto na Vercel:**
    *   Acesse sua conta Vercel e clique em "Add New..." -> "Project".
    *   Importe o repositório GitHub que você acabou de criar.
3.  **Configurações de Deploy:**
    *   A Vercel deve detectar automaticamente que é um projeto Vite.
    *   **Framework Preset:** Selecione `Vite`.
    *   **Build Command:** `pnpm build` (ou deixe o padrão da Vercel se for `vite build`).
    *   **Output Directory:** `dist`.
    *   **Install Command:** `pnpm install`.
4.  **Clique em "Deploy".**

A Vercel cuidará do build e do deploy da sua aplicação.

## Configuração do GitHub

1.  Crie um novo repositório no GitHub.
2.  Siga as instruções do GitHub para fazer o push do código local para o repositório remoto.
    ```bash
    git init
    git add .
    git commit -m "Initial commit: Inovar Proposta project setup"
    git branch -M main
    git remote add origin <URL_DO_SEU_REPOSITORIO_GITHUB>
    git push -u origin main
    ```

Substitua `<URL_DO_SEU_REPOSITORIO_GITHUB>` pela URL fornecida pelo GitHub.
