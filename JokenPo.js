class JokenPO {
    //atributos | so uso quando vouguardar a escolha de cada um e ter placar
    #jogador1; #jogador2;

    ///set e gets
    setJogador1(value) { this.#jogador1 = value }; getJogador1() { return this.#jogador1 }
    setJogador2(value) { this.#jogador2 = value }; getJogador2() { return this.#jogador2 }

    //construtor
    constructor(jogador1, jogador2) {
        this.#jogador1 = jogador1;
        this.#jogador2 = jogador2;
    }
    computador() {
        let res;
        this.#jogador2 = Math.floor(Math.random() * 3) + 1;
        if (this.#jogador2 == 1) {
            res = "pedra"
        } else if (this.#jogador2 == 2) {
            res = "papel"
        } else {
            res = "tesoura"
        }
        return res;
    }
    inicioJogo(x) {
        var pl1 = x;//.toLowerCase()
        var pl2 = this.computador();
        let vencedor = "";
        let perdedor = "";
        let player = "";
        let jogo = "";

        if (pl1 == pl2) {
            jogo = "empate"
        } else if (pl1 == "pedra" && pl2 == "tesoura") {
            vencedor = pl1; perdedor = pl2;
        } else if (pl1 == "pedra" && pl2 == "papel") {
            vencedor = pl2; perdedor = pl1;
        } else if (pl1 == "papel" && pl2 == "tesoura") {
            vencedor = pl2; perdedor = pl1;
        } else if (pl1 == "papel" && pl2 == "pedra") {
            vencedor = pl1; perdedor = pl2;
        } else if (pl1 == "tesoura" && pl2 == "pedra") {
            vencedor = pl2; perdedor = pl1;
        } else if (pl1 == "tesoura" && pl2 == "papel") {
            vencedor = pl1; perdedor = pl2;
        }

        if (vencedor == pl1) {
            player = "Voce"
        } else {
            player = "Computador"
        }

        if (jogo == "empate") {
            console.log(`Empate! Ambos escolheram ${pl1}`)
        } else {
            console.log(`${player} Venceu com ${vencedor} contra ${perdedor}`);
        }
        return player;
    }
}
export{JokenPO}
// var novoJovo = new JokenPO();
// novoJovo.inicioJogo("papel");
