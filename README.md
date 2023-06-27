# Projeto Integrador 1 - Descrição do Back-end em JavaScript com MongoDB
**Descrição**:

Este repositório contém o código fonte do projeto integrador 1, que consiste em um sistema medico de nutricionista. O back-end foi desenvolvido em JavaScript, utilizando o ambiente de execução Node.js, juntamente com o framework Express.js.

O banco de dados utilizado neste projeto é o MongoDB, um banco de dados não relacional que armazena os dados de forma flexível e escalável. O MongoDB oferece suporte a documentos JSON, permitindo uma fácil integração com o JavaScript.

## Funcionalidades:

O back-end do sistema de gerenciamento de tarefas oferece as seguintes funcionalidades:

**Cadastro de usuários:**
Os usuários podem se cadastrar fornecendo informações como nome, e-mail e senha. Essas informações são armazenadas no banco de dados MongoDB, garantindo a persistência dos dados.

**Autenticação de usuários:**
Após o cadastro, os usuários podem fazer login no sistema fornecendo suas credenciais. O back-end valida essas credenciais, comparando-as com as informações armazenadas no MongoDB. Após a autenticação bem-sucedida, o usuário recebe um token de acesso que será utilizado para autorização nas demais rotas.

**Cadastro de pacientes:**
Os usuários podem cadastrar informações dos pacientes, como nome, data de nascimento, gênero, endereço e histórico médico. Essas informações são armazenadas no banco de dados MongoDB, garantindo a persistência dos dados.

**Autorização de rotas:**
As rotas relacionadas ao gerenciamento de tarefas são protegidas por um middleware de autorização. Somente usuários autenticados, com o token de acesso válido, têm permissão para acessar essas rotas. Isso garante a segurança e a privacidade das informações de cada usuário.

## Instalação e Configuração
Para executar este projeto em seu ambiente local, siga as etapas abaixo:

Clone este repositório em sua máquina local.
Certifique-se de ter o Node.js instalado. Caso contrário, faça o download e instale-o em nodejs.org.
Instale as dependências do projeto executando o comando npm install no diretório raiz do projeto.
Configure as variáveis de ambiente no arquivo .env, fornecendo as informações de conexão com o banco de dados MongoDB e outras configurações necessárias.
Inicie o servidor executando o comando npm start. O servidor estará disponível na porta especificada no arquivo .env.
Contribuição
Contribuições para este projeto são bem-vindas. Se você deseja contribuir, siga estas etapas:

## Fork este repositório.
Crie um branch para a sua feature (git checkout -b minha-nova-feature).
Faça as alterações desejadas e faça commit delas (git commit -m 'Adiciona minha nova feature').
Envie as alterações para o seu repositório fork (git push origin minha-nova-feature).
Abra um Pull Request neste repositório.
Aguarde a revisão e a aprovação
