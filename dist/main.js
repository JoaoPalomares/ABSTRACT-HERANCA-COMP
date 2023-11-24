"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotaFiscal_1 = require("./model/NotaFiscal");
const notaF1 = new NotaFiscal_1.NotaFiscal(`213578-952`);
notaF1.pessoaF.setNome(`Joãozin`);
notaF1.pessoaF.setCpf(`878.530.875-78`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF1.getNumeroNotaFiscal()}`);
const notaF2v = new NotaFiscal_1.NotaFiscal(`104829480-13`);
notaF2v.pessoaF.setNome(`Paulin`);
notaF2v.pessoaF.setCpf(`336.344.627-60`);
console.log(`Nome: ${notaF2v.pessoaF.getNome()}`);
console.log(`CPF: ${notaF2v.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF2v.getNumeroNotaFiscal()}`);
//# sourceMappingURL=main.js.map