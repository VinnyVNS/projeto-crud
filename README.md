# Sistema de Gestão de Pacientes e Consultas

> Projeto acadêmico focado no desenvolvimento de uma aplicação CRUD para o gerenciamento de pacientes e agendamento de consultas médicas.

## Sobre o Projeto

Este projeto foi desenvolvido como parte das atividades do curso **Análise e Desenvolvimento de Sistemas**. O principal objetivo é demonstrar a implementação prática de operações **CRUD** (Create, Read, Update, Delete) trabalhando com relacionamentos entre entidades em um sistema de gestão clínica.

## Funcionalidades

O sistema é dividido em dois módulos principais:

### 1. CRUD de Pacientes
Gerenciamento do cadastro das pessoas atendidas pela clínica.
- **Operações:** Cadastrar, Listar, Editar e Excluir (CRUD).
- **Dados armazenados:**
  - Nome completo
  - CPF
  - Data de nascimento
  - E-mail
  - Celular

### 2. CRUD de Consultas
Gerenciamento da agenda médica, vinculando o atendimento aos pacientes previamente cadastrados.
- **Operações:** Agendar (Cadastrar), Listar, Remarcar (Editar) e Cancelar (Excluir).
- **Dados armazenados:**
  - Paciente (Vínculo com o cadastro de pacientes)
  - Data da consulta
  - Hora da consulta
  - Nome do médico

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3 e JavaScript (Vanilla).
- **Armazenamento:** LocalStorage.

## Pré-requisitos

Como o projeto roda inteiramente no navegador do usuário, você só precisa de:
- Um navegador web moderno (Google Chrome, Firefox, Edge, etc.).
- [Git](https://git-scm.com) (opcional, apenas se quiser clonar o repositório via terminal em vez de baixar o ZIP).

## Como Executar o Projeto

O projeto não requer instalação de dependências ou configuração de banco de dados. Siga os passos abaixo:

1. **Faça o clone do repositório** (ou baixe o arquivo ZIP):
   - `git clone https://github.com/VinnyVNS/projeto-crud`
2. **Acesse a pasta do projeto:**
   - `cd projeto-crud`
3. **Inicie a aplicação:**
   - Basta abrir a pasta no seu computador e dar um duplo clique no arquivo `index.html`.
   - Ou clique com o botão direito sobre ele e escolha "Abrir com > Google Chrome" (ou o navegador de sua preferência).
