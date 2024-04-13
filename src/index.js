"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_1 = require("./calculadora");
// Cria uma instância da calculadora
var calculadora = new calculadora_1.default();
// Realiza algumas operações de exemplo
var resultadoSoma = calculadora.adicionar(5, 3);
console.log("Resultado da soma: ".concat(resultadoSoma));
var resultadoSubtracao = calculadora.subtrair(10, 7);
console.log("Resultado da subtra\u00E7\u00E3o: ".concat(resultadoSubtracao));
var resultadoMultiplicacao = calculadora.multiplicar(4, 6);
console.log("Resultado da multiplica\u00E7\u00E3o: ".concat(resultadoMultiplicacao));
var resultadoDivisao = calculadora.dividir(20, 5);
console.log("Resultado da divis\u00E3o: ".concat(resultadoDivisao));
