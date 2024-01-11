class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if  (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "usou um ataque indefinido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const mago = new Heroi("FelipeDaDio", 100, "mago");
const guerreiro = new Heroi("VódoFelipao", 35, "guerreiro");
const monge = new Heroi("Felipao22", 40, "monge");
const ninja = new Heroi("Felipao2", 30, "ninja");

mago.atacar();      
guerreiro.atacar(); 
monge.atacar();     
ninja.atacar();     
