/**
 * RI 5 - Módulo Telefone (ES6 Export)
 * Classe Telefone, conforme UML.
 */
export class Telefone {
    constructor(ddd, numero) { // Construtor com ddd: string, numero: string [cite: 128]
        this.ddd = ddd;
        this.numero = numero;
    }

    // Método auxiliar para a descrição
    detalhes() {
        return `ddd: ${this.ddd} numero: ${this.numero}`;
    }
}