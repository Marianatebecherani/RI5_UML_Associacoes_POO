/**
 * RI 5 - Módulo Empresa (ES6 Export)
 * Classe Empresa, conforme UML, com lista de funcionários (Associação 1:N).
 */
import { Endereco } from './endereco.js';
import { Funcionario } from './funcionario.js';

export class Empresa {
    constructor(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionarios = funcionarios || [];
    }
}