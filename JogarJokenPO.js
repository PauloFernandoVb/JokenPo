import { JokenPO } from "./JokenPo.js";
class Jogando extends JokenPO {
    //atributos
    #vitorias;
    #pontos;
    #empates;

    //get e sets
    setVitorias(value) { this.#vitorias = value }; getVitorias() { return this.#vitorias }
    setPontos(value) { this.#pontos = value }; getPontos() { return this.#pontos }
    setEmpates(value) { this.#empates = value }; getEmpates() { return this.#empates }

    //construtor
    constructor(jogador1, jogador2, vitorias, pontos, empates) {
        super(jogador1, jogador2,);
        this.#vitorias = vitorias;
        this.#pontos = pontos;
        this.#empates = empates;
    }

    jogar() {
        let contPontosPC = 0;
        let contPontosEU = 0;
        let contEmpates = 0;

        while (contPontosEU < 5 && contPontosPC < 5) {
            let lista = ["pedra", "papel", "pedra", "tesoura", "pedra", "tesoura", "papel", "papel", "tesoura", "tesoura", "papel", "tesoura"];
            for (let i = 0; i < lista.length; i++) {
                let jogada = lista[i];
                var player = super.inicioJogo(jogada);
                if (player === "Voce") {
                    contPontosEU++;
                }
                else if (player === "Computador") {
                    contPontosPC++;
                }
                if(contPontosEU ===5 || contPontosPC===5){
                    break;
                }
            }
        }
        console.log(`Vitorias ${contPontosEU}`);
        console.log(`Derrotas ${contPontosPC}`);

        if (contPontosEU === 5) {
            console.log(" Você é o grande vencedor!");
        } else {
            console.log(" O computador venceu!");
        }
    }
}
var jogar = new Jogando();
jogar.jogar();