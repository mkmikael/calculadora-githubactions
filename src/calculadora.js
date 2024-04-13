"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importando as funções de operações
var adicao_1 = require("./operacoes/adicao");
var subtracao_1 = require("./operacoes/subtracao");
var multiplicacao_1 = require("./operacoes/multiplicacao");
var divisao_1 = require("./operacoes/divisao");
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.adicionar = function (a, b) {
        return (0, adicao_1.adicionar)(a, b);
    };
    Calculadora.prototype.subtrair = function (a, b) {
        return (0, subtracao_1.subtrair)(a, b);
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return (0, multiplicacao_1.multiplicar)(a, b);
    };
    Calculadora.prototype.dividir = function (a, b) {
        return (0, divisao_1.dividir)(a, b);
    };
    return Calculadora;
}());
exports.default = Calculadora;
