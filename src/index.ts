type heroi = {
    name: string,
    lastname: string
};
//Teste de configuração do tsconfig, quando for compilado tirar esse comentario e demais.
console.log("hello world");

//tipo primitivos
let ligado: boolean = true;
let name1: string = "Teste";
let idade: number = 1;
let altura: number = 1.9;

//tipos especiais null, undefined
//null
let nulo: null = null;

//undefined
let indefinido: undefined = undefined;

//tipos abrangentes any e void
let retorno: void; //usado em func.

let alguma_coisa: any = 1; //usar quando tem uma func não previsivel, podendo retornar obj ou string, number etc.

//objeto - sem previsibilidade --nao recomendado.
let produto: object = {
    namex: "cesar",
    cidade: "pr",
    idade: 30
};

//objeto tipado, com previsibilidade --struct
type Produto_Loja = {
    nome: string,
    preco: number,
    unidades: number;
};

//usando o objeto
let meuProduto: Produto_Loja = {
    nome: "Tenis",
    preco: 100,
    unidades: 10
};

//arrays[]
/** 
fffff
 */
//um maneira
let dados: string[] = ["teste", "teste1", "teste2"];
//outra
let dados2: Array<string> = ["teste", "teste1", "teste2"];
//primeira mais usada.

//Array de multi-tipos --cuidado com esse tipo. melhor construir obj shape-ado.
let infos: (string | number) [] = ["cesar", "selma", 30]

/**
*  Tuplas
 */
//seguir a exata ordem que foi definido. respeitar as ordens das informações.
let boleto: [string, number, number] = ["agua", 15, 15];
//array muli-type aceita qq ordem, tupla tem que ser na ordem declarada.

/**
* array metodos
 */
//dados.pop(); //remover ultimo elemento
//dados.filter(); //para filtrar

/**
* Datas
 */
let aniversario: Date = new Date("2024-10-01 05:00:12");
console.log(aniversario.toString());

/**
 * 
  FUNÇÕES
 */
function addNumber(x:number, y:number): number {
    return x+y;
}

let soma: number = addNumber(4, 7);
console.log(soma);

function addToHello(name: string) {
    return `Hello ${name}`;
}
console.log(addToHello("Cesar"));

//Função multi-types
function CalltoPhone(phone: number | string) {
    return phone;
}
console.log(CalltoPhone(131313));

//Funções Assincronas (esperar por algo) --maneira de escrever Promise
//tenho q tipar passando uma Promise, do que tipo? nesse caso string.
async function getDatabase(id: number): Promise<string> {
    return "felipe";
}
console.log(getDatabase(10));

//INTERFACES (type x interfaces)
type robot = {
    id: number,
    name: string;
}

const bot: robot = {
    id: 1,
    name: "mega"
}

//trabalhar com classe, pode usar interface.
interface robot2 {
    readonly id: number,
    name: string
}

const bot2: robot2 = {
    id: 2,
    name: "high"
}

//podem ser multi-types id: number | string
console.log(bot);
console.log(bot.id = 10);
console.log(bot2); //aqui nao consegue alterar pq a property foi colocada como readonly.

//Quando usar interfaces. Quando usar classes.
class Pessoa implements robot2 {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello, I'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Selma");
console.log(p.sayHello());

//CLASSES

/** Data Modifiers 
 * private - nao consegue, apenas get setters
 * public - colocando ou nao por default
 * protected - classes e subclasses
*/

class Character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number) {
        //this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//Character: superclass
//Magician: subclass
class Magician extends Character {
    
    magicPoints: number;

    constructor(stregth: number, skill: number, magicPoints: number) {
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

//GENERICS <T>
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 4], [4, 5, 9]);
const stgArray = concatArray<string[]>(["Cesar", "Selma"], ["Villela"]);

//numArray.push("Madu");  //aqui permite adicionar tipos diferentes em um mesmo Array.

console.log(numArray);
console.log(stgArray);


//DECORATORS - decora uma função para disparar ou injetar.

//decorators
function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario {}

//Ex. documentar e versionar uma API
//aqui usando class decorator.

//class decorator
function apiVersion(version: string){
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: "Cesar"});
    }
}

//attribute decorator
function minLength(len: number) {
    return (target:any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < len) {
                throw new Error(`Tamanho menor do que ${len}`);
            } else {
                _value = value;
            }
        };

        //injetou
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    };
}

class Api{
    @minLength(5)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("Selma Villela");
console.log(api.name);