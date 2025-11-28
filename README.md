# RI5_UML_Associacoes_POO

Projeto de Programação Orientada a Objetos (POO) em JavaScript, baseado em um Diagrama UML. O foco é a implementação de classes e suas associações, introduzindo a classe `Funcionario` e a relação de associação 1:N (uma `Empresa` para muitos `Funcionario`).

O projeto utiliza a modularização ES6 do JavaScript e inclui uma classe `descritorEmpresa` para gerar uma saída formatada no console com todos os atributos da empresa e a lista de seus funcionários.

## ✨ Tecnologias Utilizadas

- **JavaScript (ES6+)**: Para a lógica e estrutura do projeto.
- **Node.js**: Como ambiente de execução para o script via linha de comando.

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter o Node.js instalado em sua máquina (versão 14.x ou superior é recomendada).

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente.

**1. Clone o repositório:**

```bash
git clone https://github.com/Mariana/RI5_UML_Associacoes_POO.git
cd RI5_UML_Associacoes_POO
```

**2. Execute o script principal:**

Agora, basta executar o arquivo de entrada do projeto (`ri5.js`) com o Node.js:

```bash
node src/ri5.js
```

## 📋 Saída Esperada

Após a execução do comando acima, você verá a seguinte saída no seu terminal, listando os detalhes da empresa e seus funcionários:

```text
=================================================
      RI 5: LISTA DE FUNCIONÁRIOS DA EMPRESA     
=================================================
Razão social: ABC LTDA
Nome fantasia: Mercado online
cnpj: 999-999-999-999-99
Endereco: 
Endereco: Rua Principal Bairro: Industrial Cidade: São Paulo numero: 10
funcionários:
Nome: Tony Stark
matricula: 123456789
cpf: 999.999.999-99
Endereco: Av. Paulista Bairro: Jardim Paulista Cidade: São Paulo numero: 123
Nome: Bruce Banner
matricula: 987654321
cpf: 111.111.111-11
Endereco: Rua da Química Bairro: Vila Científica Cidade: Campinas numero: 400
Nome: Carol Danvers
matricula: 555555555
cpf: 222.222.222-22
Endereco: Av. Espacial Bairro: Centro Cidade: Rio de Janeiro numero: 50
=================================================
```
