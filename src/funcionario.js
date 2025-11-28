/**
 * RI 5 - Módulo Funcionario (ES6 Export)
 * Classe Funcionario, conforme UML.
 */
import { Endereco } from './endereco.js';
import { Telefone } from './telefone.js';

export class Funcionario {
    constructor(nome, matricula, cpf, endereco, telefone) { // Construtor conforme UML [cite: 123]
        this.nome = nome;           // public nome: string [cite: 118]
        this.matricula = matricula; // public matricula: string [cite: 119]
        this.cpf = cpf;             // public cpf: string [cite: 120]
        this.endereco = endereco;   // public endereco: Endereco [cite: 121]
        this.telefone = telefone;   // public telefone: Telefone [cite: 122]
    }

    // Método auxiliar para a descrição
    detalhes() {
        // Saída desejada: Nome, matricula, cpf e endereço (telefone não está na saída de funcionário) [cite: 163-166]
        return `
Nome: ${this.nome}
matricula: ${this.matricula}
cpf: ${this.cpf}
${this.endereco.detalhes()}
        `.trim();
    }
}