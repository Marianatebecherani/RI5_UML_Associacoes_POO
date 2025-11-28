/**
 * RI 5 - Módulo Endereco (ES6 Export)
 * Classe Endereco, conforme UML.
 */
export class Endereco {
    constructor(numero, rua, bairro, cidade) { // Construtor com numero: number, rua: string, bairro: string, cidade: string 
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }

    // Método auxiliar para a descrição
    detalhes() {
        // Formato da saída: Rua: Av. Paulista Bairro: Jardim Paulista Cidade: São Paulo numero: 123
        return `Endereco: ${this.rua} Bairro: ${this.bairro} Cidade: ${this.cidade} numero: ${this.numero}`;
    }
}