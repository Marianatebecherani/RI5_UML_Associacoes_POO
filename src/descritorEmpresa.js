/**
 * RI 5 - Módulo DescritorEmpresa (ES6 Export)
 * Implementa a lógica de impressão formatada (Saída Desejada).
 */
import { Empresa } from './empresa.js';

export class DescritorEmpresa {
    
    /**
     * Imprime os atributos formatados da empresa e seus funcionários.
     * @param {Empresa} empresa - O objeto Empresa a ser descrito.
     */
    descrever(empresa) {
        let output = `
Razão social: ${empresa.razaoSocial}
Nome fantasia: ${empresa.nomeFantasia}
cnpj: ${empresa.cnpj}
Endereco: 
${empresa.endereco.detalhes()}
funcionários:
        `.trim();

        // Adiciona a descrição de cada funcionário
        empresa.funcionarios.forEach(f => {
            output += `\n${f.detalhes()}`;
        });
        
        console.log("=================================================");
        console.log("      RI 5: LISTA DE FUNCIONÁRIOS DA EMPRESA     ");
        console.log("=================================================");
        console.log(output);
        console.log("=================================================");
    }
}