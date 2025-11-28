/**
 * RI 5 - Módulo de Teste e Execução (ES6 Module Import)
    * Criação de objetos conforme o exemplo dado.
 */

// Importa todas as classes necessárias
import { Endereco } from "./endereco.js";
import { Telefone } from "./telefone.js";
import { Funcionario } from "./funcionario.js";
import { Empresa } from "./empresa.js";
import { DescritorEmpresa } from "./descritorEmpresa.js"; // Importa o descritor


// --- 1. Criação dos Objetos Iniciais ---

// Funcionário 1: Tony Stark
let endereco1 = new Endereco(123, 'Av. Paulista', 'Jardim Paulista', 'São Paulo');
let telefone1 = new Telefone('011', '9-9999-9999');
let funcionario1 = new Funcionario('Tony Stark', '123456789', '999.999.999-99', endereco1, telefone1);

// Funcionário 2: Bruce Banner
let endereco2 = new Endereco(400, 'Rua da Química', 'Vila Científica', 'Campinas');
let telefone2 = new Telefone('019', '9-8888-7777');
let funcionario2 = new Funcionario('Bruce Banner', '987654321', '111.111.111-11', endereco2, telefone2);

// Funcionário 3: Carol Danvers
let endereco3 = new Endereco(50, 'Av. Espacial', 'Centro', 'Rio de Janeiro');
let telefone3 = new Telefone('021', '9-7777-6666');
let funcionario3 = new Funcionario('Carol Danvers', '555555555', '222.222.222-22', endereco3, telefone3);


// --- 2. Execução ---

// Adiciona os três funcionários ao array
let funcionarios = [funcionario1, funcionario2, funcionario3]; 

// Criação da Empresa
let enderecoEmpresa = new Endereco(10, 'Rua Principal', 'Industrial', 'São Paulo');
let empresa = new Empresa(funcionarios, enderecoEmpresa, 'ABC LTDA', 'Mercado online', '999-999-999-999-99');

// Criação e Execução do Descritor
let descritor = new DescritorEmpresa();
descritor.descrever(empresa);