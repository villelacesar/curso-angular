"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("hello world");
let ligado = true;
let name1 = "Teste";
let idade = 1;
let altura = 1.9;
let nulo = null;
let indefinido = undefined;
let retorno;
let alguma_coisa = 1;
let produto = {
    namex: "cesar",
    cidade: "pr",
    idade: 30
};
let meuProduto = {
    nome: "Tenis",
    preco: 100,
    unidades: 10
};
let dados = ["teste", "teste1", "teste2"];
let dados2 = ["teste", "teste1", "teste2"];
let infos = ["cesar", "selma", 30];
let boleto = ["agua", 15, 15];
let aniversario = new Date("2024-10-01 05:00:12");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Cesar"));
function CalltoPhone(phone) {
    return phone;
}
console.log(CalltoPhone(131313));
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
console.log(getDatabase(10));
const bot = {
    id: 1,
    name: "mega"
};
const bot2 = {
    id: 2,
    name: "high"
};
console.log(bot);
console.log(bot.id = 10);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Selma");
console.log(p.sayHello());
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
class Magician extends Character {
    constructor(stregth, skill, magicPoints) {
        super(stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character(10, 98);
p1.attack();
p1.name = "Villela";
console.log(p1.name);
const p2 = new Magician(10, 20, 10);
console.log(p2);
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 4], [5]);
const stgArray = concatArray(["Cesar", "Selma"], ["Villela"]);
console.log(numArray);
console.log(stgArray);
