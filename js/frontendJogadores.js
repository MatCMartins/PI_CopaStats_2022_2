let nomeDaSelecao = ""
let nomeJogadores = []
let golsJogadores = []
let assistenciasJogadores = []
let cartoesAmarelosJogadores = []
let cartoesVermelhosJogadores = []
let chutesJogadores = []
let passesJogadores = []
let faltasSofridas = []
let faltasCometidas = []
let driblesJogadores = []
let idadeJogadores = []
let posicaoJogadores = []
let alturaJogadores = []
let pesoJogadores = []

let nome = ""
let foto = ""
let gols = ""
let assistencias = ""
let cartoesAmarelos = ""
let cartoesVermelhos = ""
let chutes = ""
let passes = ""
let faltasS = ""
let faltasC = ""
let dribles = ""
let idade = ""
let posicao = ""
let altura = ""
let peso = ""



async function mostrarSelecao(nomeSelecao) {
    const protocolo = "http"
    const host = "localhost:3000"
    const jogadoresEndpoint = "/jogadores"
    try{
        const URL = `${protocolo}://${host}${jogadoresEndpoint}`
        const response = await fetch(URL)
        const jogadores = (await axios.get(URL)).data
        document.getElementById("jogadores1").style.display = "block";
        document.getElementById("jogadores2").style.display = "block";
        document.getElementById("jogadores3").style.display = "block";
        document.getElementById("jogadores4").style.display = "block";
        document.getElementById("jogadores5").style.display = "block";
        
        const dadosJogador = document.getElementById("dadosJogador");
        const jogadoresLista = document.getElementById("jogadores")
        if (dadosJogador.classList.contains("d-block")){
            dadosJogador.classList.remove("d-block");
            dadosJogador.classList.add("d-none");
            jogadoresLista.classList.remove("d-none");
            jogadoresLista.classList.add("d-block");
            
        }
        
        let indexSelecao = 0
        
        var selecao = nomeSelecao;
        for (indexSelecao = 0; indexSelecao < 20; indexSelecao++) {
            if (nomeJogadores.length >=20) {
                nomeJogadores = []
                golsJogadores = []
                assistenciasJogadores = []
                cartoesAmarelosJogadores = []
                cartoesVermelhosJogadores = []
                chutesJogadores = []
                passesJogadores = []
                faltasSofridas = []
                faltasCometidas = []
                driblesJogadores = []
                idadeJogadores = []
                posicaoJogadores = []
                alturaJogadores = []
                pesoJogadores = []

            }
            if (selecao=="Alemanha"){
                nomeJogadores.push([jogadores[0].Alemanha[indexSelecao].player.name,jogadores[0].Alemanha[indexSelecao].player.photo])
                golsJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[0].Alemanha[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[0].Alemanha[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[0].Alemanha[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[0].Alemanha[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[0].Alemanha[indexSelecao].player.height)
                pesoJogadores.push(jogadores[0].Alemanha[indexSelecao].player.weight)

            }
            else if (selecao=="Arábia Saudita"){
                nomeJogadores.push([jogadores[1].Arabia_Saudita[indexSelecao].player.name,jogadores[1].Arabia_Saudita[indexSelecao].player.photo])
                golsJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].player.height)
                pesoJogadores.push(jogadores[1].Arabia_Saudita[indexSelecao].player.weight)
            }
            else if (selecao=="Argentina"){
                nomeJogadores.push([jogadores[2].Argentina[indexSelecao].player.name,jogadores[2].Argentina[indexSelecao].player.photo])
                golsJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[2].Argentina[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[2].Argentina[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[2].Argentina[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[2].Argentina[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[2].Argentina[indexSelecao].player.height)
                pesoJogadores.push(jogadores[2].Argentina[indexSelecao].player.weight)


            }
            else if (selecao=="Austrália"){
                nomeJogadores.push([jogadores[3].Australia[indexSelecao].player.name,jogadores[3].Australia[indexSelecao].player.photo])
                golsJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[3].Australia[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[3].Australia[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[3].Australia[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[3].Australia[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[3].Australia[indexSelecao].player.height)
                pesoJogadores.push(jogadores[3].Australia[indexSelecao].player.weight)

            }
            else if (selecao=="Bélgica"){
                nomeJogadores.push([jogadores[4].Belgica[indexSelecao].player.name,jogadores[4].Belgica[indexSelecao].player.photo])
                golsJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[4].Belgica[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[4].Belgica[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[4].Belgica[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[4].Belgica[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[4].Belgica[indexSelecao].player.height)
                pesoJogadores.push(jogadores[4].Belgica[indexSelecao].player.weight)

            }
            else if (selecao=="Brasil"){
                nomeJogadores.push([jogadores[5].Brasil[indexSelecao].player.name,jogadores[5].Brasil[indexSelecao].player.photo])
                golsJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[5].Brasil[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[5].Brasil[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[5].Brasil[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[5].Brasil[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[5].Brasil[indexSelecao].player.height)
                pesoJogadores.push(jogadores[5].Brasil[indexSelecao].player.weight)

            }
            else if (selecao=="Camarões"){
                nomeJogadores.push([jogadores[6].Camaroes[indexSelecao].player.name,jogadores[6].Camaroes[indexSelecao].player.photo])
                golsJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[6].Camaroes[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[6].Camaroes[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[6].Camaroes[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[6].Camaroes[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[6].Camaroes[indexSelecao].player.height)
                pesoJogadores.push(jogadores[6].Camaroes[indexSelecao].player.weight)


            }
            else if (selecao=="Canadá"){
                nomeJogadores.push([jogadores[7].Canada[indexSelecao].player.name,jogadores[7].Canada[indexSelecao].player.photo])
                golsJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[7].Canada[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[7].Canada[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[7].Canada[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[7].Canada[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[7].Canada[indexSelecao].player.height)
                pesoJogadores.push(jogadores[7].Canada[indexSelecao].player.weight)

            }
            else if (selecao=="Coreia do Sul"){
                nomeJogadores.push([jogadores[8].Coreia_do_Sul[indexSelecao].player.name,jogadores[8].Coreia_do_Sul[indexSelecao].player.photo])
                golsJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].player.height)
                pesoJogadores.push(jogadores[8].Coreia_do_Sul[indexSelecao].player.weight)

            }
            else if (selecao=="Costa Rica"){
                nomeJogadores.push([jogadores[9].Costa_Rica[indexSelecao].player.name,jogadores[9].Costa_Rica[indexSelecao].player.photo])
                golsJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].passes.total)

                faltasSofridas.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[9].Costa_Rica[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[9].Costa_Rica[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[9].Costa_Rica[indexSelecao].player.height)
                pesoJogadores.push(jogadores[9].Costa_Rica[indexSelecao].player.weight)

            }
            else if (selecao=="Croácia"){
                nomeJogadores.push([jogadores[10].Croacia[indexSelecao].player.name,jogadores[10].Croacia[indexSelecao].player.photo])
                golsJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[10].Croacia[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[10].Croacia[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[10].Croacia[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[10].Croacia[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[10].Croacia[indexSelecao].player.height)
                pesoJogadores.push(jogadores[10].Croacia[indexSelecao].player.weight)
                    
            }
            else if (selecao=="Dinamarca"){
                nomeJogadores.push([jogadores[11].Dinamarca[indexSelecao].player.name,jogadores[11].Dinamarca[indexSelecao].player.photo])
                golsJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[11].Dinamarca[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[11].Dinamarca[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[11].Dinamarca[indexSelecao].player.height)
                pesoJogadores.push(jogadores[11].Dinamarca[indexSelecao].player.weight)

            }
            else if (selecao=="Equador"){
                nomeJogadores.push([jogadores[12].Equador[indexSelecao].player.name,jogadores[12].Equador[indexSelecao].player.photo]) 
                golsJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[12].Equador[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[12].Equador[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[12].Equador[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[12].Equador[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[12].Equador[indexSelecao].player.height)
                pesoJogadores.push(jogadores[12].Equador[indexSelecao].player.weight)
            }
            else if (selecao=="Espanha"){
                nomeJogadores.push([jogadores[13].Espanha[indexSelecao].player.name,jogadores[13].Espanha[indexSelecao].player.photo])
                golsJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].cards.yellow)  
                cartoesVermelhosJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[13].Espanha[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[13].Espanha[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[13].Espanha[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[13].Espanha[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[13].Espanha[indexSelecao].player.height)
                pesoJogadores.push(jogadores[13].Espanha[indexSelecao].player.weight)
            }   
            else if (selecao=="Estados Unidos"){
                nomeJogadores.push([jogadores[14].Estados_Unidos[indexSelecao].player.name,jogadores[14].Estados_Unidos[indexSelecao].player.photo])
                golsJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].player.height)
                pesoJogadores.push(jogadores[14].Estados_Unidos[indexSelecao].player.weight)

            }
            else if (selecao=="França"){
                nomeJogadores.push([jogadores[15].Franca[indexSelecao].player.name,jogadores[15].Franca[indexSelecao].player.photo])
                golsJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[15].Franca[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[15].Franca[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[15].Franca[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[15].Franca[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[15].Franca[indexSelecao].player.height)
                pesoJogadores.push(jogadores[15].Franca[indexSelecao].player.weight)

            }
            else if (selecao=="Holanda"){
                nomeJogadores.push([jogadores[16].Holanda[indexSelecao].player.name,jogadores[16].Holanda[indexSelecao].player.photo])
                golsJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[16].Holanda[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[16].Holanda[indexSelecao].statistics[0].fouls.committed)

                driblesJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[16].Holanda[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[16].Holanda[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[16].Holanda[indexSelecao].player.height)
                pesoJogadores.push(jogadores[16].Holanda[indexSelecao].player.weight)

            }
            else if (selecao=="Inglaterra"){
                nomeJogadores.push([jogadores[17].Inglaterra[indexSelecao].player.name,jogadores[17].Inglaterra[indexSelecao].player.photo])
                golsJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[17].Inglaterra[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[17].Inglaterra[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[17].Inglaterra[indexSelecao].player.height)
                pesoJogadores.push(jogadores[17].Inglaterra[indexSelecao].player.weight)

            }
            else if (selecao=="Irã"){
                nomeJogadores.push([jogadores[18].Ira[indexSelecao].player.name,jogadores[18].Ira[indexSelecao].player.photo])
                golsJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[18].Ira[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[18].Ira[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[18].Ira[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[18].Ira[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[18].Ira[indexSelecao].player.height)
                pesoJogadores.push(jogadores[18].Ira[indexSelecao].player.weight)

            }
            else if (selecao=="Japão"){
                nomeJogadores.push([jogadores[19].Japao[indexSelecao].player.name,jogadores[19].Japao[indexSelecao].player.photo])
                golsJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[19].Japao[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[19].Japao[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[19].Japao[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[19].Japao[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[19].Japao[indexSelecao].player.height)
                pesoJogadores.push(jogadores[19].Japao[indexSelecao].player.weight)
                
            }
            else if (selecao=="Marrocos"){
                nomeJogadores.push([jogadores[20].Marrocos[indexSelecao].player.name,jogadores[20].Marrocos[indexSelecao].player.photo])
                golsJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[20].Marrocos[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[20].Marrocos[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[20].Marrocos[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[20].Marrocos[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[20].Marrocos[indexSelecao].player.height)
                pesoJogadores.push(jogadores[20].Marrocos[indexSelecao].player.weight)

            }
            else if (selecao=="México"){
                nomeJogadores.push([jogadores[21].Mexico[indexSelecao].player.name,jogadores[21].Mexico[indexSelecao].player.photo])
                golsJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[21].Mexico[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[21].Mexico[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[21].Mexico[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[21].Mexico[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[21].Mexico[indexSelecao].player.height)
                pesoJogadores.push(jogadores[21].Mexico[indexSelecao].player.weight)
                
            }
            else if (selecao=="País de Gales"){
                nomeJogadores.push([jogadores[22].Pais_de_Gales[indexSelecao].player.name,jogadores[22].Pais_de_Gales[indexSelecao].player.photo])
                golsJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].player.height)
                pesoJogadores.push(jogadores[22].Pais_de_Gales[indexSelecao].player.weight)

            }
            else if (selecao=="Polônia"){
                nomeJogadores.push([jogadores[23].Polonia[indexSelecao].player.name,jogadores[23].Polonia[indexSelecao].player.photo])
                golsJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[23].Polonia[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[23].Polonia[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[23].Polonia[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[23].Polonia[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[23].Polonia[indexSelecao].player.height)
                pesoJogadores.push(jogadores[23].Polonia[indexSelecao].player.weight)



            }
            else if (selecao=="Portugal"){
                nomeJogadores.push([jogadores[24].Portugal[indexSelecao].player.name,jogadores[24].Portugal[indexSelecao].player.photo])
                golsJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[24].Portugal[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[24].Portugal[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[24].Portugal[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[24].Portugal[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[24].Portugal[indexSelecao].player.height)
                pesoJogadores.push(jogadores[24].Portugal[indexSelecao].player.weight)
                
            }
            else if (selecao=="Catar"){
                nomeJogadores.push([jogadores[25].Qatar[indexSelecao].player.name,jogadores[25].Qatar[indexSelecao].player.photo])
                golsJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[25].Qatar[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[25].Qatar[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[25].Qatar[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[25].Qatar[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[25].Qatar[indexSelecao].player.height)
                pesoJogadores.push(jogadores[25].Qatar[indexSelecao].player.weight)

            }
            else if (selecao=="Senegal"){
                nomeJogadores.push([jogadores[26].Senegal[indexSelecao].player.name,jogadores[26].Senegal[indexSelecao].player.photo])
                golsJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].shots.total) 
                passesJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[26].Senegal[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[26].Senegal[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[26].Senegal[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[26].Senegal[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[26].Senegal[indexSelecao].player.height)
                pesoJogadores.push(jogadores[26].Senegal[indexSelecao].player.weight)

                
            }
            else if (selecao=="Sérvia"){
                nomeJogadores.push([jogadores[27].Servia[indexSelecao].player.name,jogadores[27].Servia[indexSelecao].player.photo])
                golsJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[27].Servia[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[27].Servia[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[27].Servia[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[27].Servia[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[27].Servia[indexSelecao].player.height)
                pesoJogadores.push(jogadores[27].Servia[indexSelecao].player.weight)
            }
            else if (selecao=="Suiça"){
                nomeJogadores.push([jogadores[28].Suica[indexSelecao].player.name,jogadores[28].Suica[indexSelecao].player.photo])
                golsJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[28].Suica[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[28].Suica[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[28].Suica[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[28].Suica[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[28].Suica[indexSelecao].player.height)
                pesoJogadores.push(jogadores[28].Suica[indexSelecao].player.weight)
            }
            else if (selecao=="Tunísia"){
                nomeJogadores.push([jogadores[29].Tunisia[indexSelecao].player.name,jogadores[29].Tunisia[indexSelecao].player.photo])
                golsJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[29].Tunisia[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[29].Tunisia[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[29].Tunisia[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[29].Tunisia[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[29].Tunisia[indexSelecao].player.height)
                pesoJogadores.push(jogadores[29].Tunisia[indexSelecao].player.weight)

            }
            else if (selecao=="Uruguai"){
                nomeJogadores.push([jogadores[30].Uruguai[indexSelecao].player.name,jogadores[30].Uruguai[indexSelecao].player.photo])
                golsJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[30].Uruguai[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[30].Uruguai[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[30].Uruguai[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[30].Uruguai[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[30].Uruguai[indexSelecao].player.height)
                pesoJogadores.push(jogadores[30].Uruguai[indexSelecao].player.weight)

            }
            else if (selecao=="Gana"){
                nomeJogadores.push([jogadores[31].Gana[indexSelecao].player.name,jogadores[31].Gana[indexSelecao].player.photo])
                golsJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].goals.total)
                assistenciasJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].goals.assists)
                cartoesAmarelosJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].cards.yellow)
                cartoesVermelhosJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].cards.red)
                chutesJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].shots.total)
                passesJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].passes.total)
                faltasSofridas.push(jogadores[31].Gana[indexSelecao].statistics[0].fouls.drawn)
                faltasCometidas.push(jogadores[31].Gana[indexSelecao].statistics[0].fouls.committed)
                driblesJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].dribbles.attempts)
                idadeJogadores.push(jogadores[31].Gana[indexSelecao].player.age)
                posicaoJogadores.push(jogadores[31].Gana[indexSelecao].statistics[0].games.position)
                alturaJogadores.push(jogadores[31].Gana[indexSelecao].player.height)
                pesoJogadores.push(jogadores[31].Gana[indexSelecao].player.weight)

            }
            
        }
        
        for (let index = 0; index < 20; index++) {
            let idFoto = String("jogador"+String(index));
            let idNome = String("nomeJogador"+String(index));
            var jogadorFoto = document.getElementById(idFoto)
            var jogadorNome = document.getElementById(idNome)
            jogadorNome.innerHTML = nomeJogadores[index][0]
            jogadorFoto.src = String(nomeJogadores[index][1])
            
        }
    }
    catch(e){
        console.log(e)
    }
    nomeDaSelecao = nomeSelecao
}

async function getJogadores(idLinkJogador){
    try{
        const idJogador = "nomeJogador"+String(idLinkJogador)
        const oJogador = document.getElementById(idJogador)
        for (index = 0; index < 20; index++) {
            if (oJogador.innerHTML == nomeJogadores[index][0]){
                nome = nomeJogadores[index][0]
                foto = nomeJogadores[index][1]
                gols = golsJogadores[index]
                assistencias = assistenciasJogadores[index]
                cartoesAmarelos = cartoesAmarelosJogadores[index]
                cartoesVermelhos = cartoesVermelhosJogadores[index]
                chutes = chutesJogadores[index]
                passes = passesJogadores[index]
                faltasS = faltasSofridas[index]
                faltasC = faltasCometidas[index]
                dribles = driblesJogadores[index]
                idade = idadeJogadores[index]
                posicao = posicaoJogadores[index]
                altura = alturaJogadores[index]
                peso = pesoJogadores[index]
                if (assistencias == null){
                    assistencias = 0
                }
                if (cartoesAmarelos == null){
                    cartoesAmarelos = 0
                }
                if (cartoesVermelhos == null){
                    cartoesVermelhos = 0
                }
                if (chutes == null){
                    chutes = 0
                }
                if (passes == null){
                    passes = 0
                }
                if (faltasS == null){
                    faltasS = 0
                }
                if (faltasC == null){
                    faltasC = 0
                }
                if (dribles == null){
                    dribles = 0
                }
                

                
                
                // console.log(idadeJogador.innerHTML)
                console.log(nome)
            }
        }





        const golsJogador = document.getElementById("gols")
        const assistenciasJogador = document.getElementById("assistencias")
        const cartoesAmarelosJogador = document.getElementById("cartoesAmarelos")
        const cartoesVermelhosJogador = document.getElementById("cartoesVermelhos")
        const chutesJogador = document.getElementById("chutes")
        const passesJogador = document.getElementById("passes")
        const faltasSofridasJogador = document.getElementById("faltasSofridas")
        const faltasCometidasJogador = document.getElementById("faltasCometidas")
        const driblesJogador = document.getElementById("dribles")
        const idadeJogador = document.getElementById("idade")
        const posicaoJogador = document.getElementById("posicao")
        const alturaJogador = document.getElementById("altura")
        const pesoJogador = document.getElementById("peso")
        const fotoJogador = document.getElementById("foto")
        const nomeJogador = document.getElementById("nome")

        

        nomeJogador.innerHTML = nome
        golsJogador.innerHTML = gols
        assistenciasJogador.innerHTML = assistencias
        cartoesAmarelosJogador.innerHTML = cartoesAmarelos
        cartoesVermelhosJogador.innerHTML = cartoesVermelhos
        chutesJogador.innerHTML = passes
        passesJogador.innerHTML = chutes
        faltasSofridasJogador.innerHTML = faltasS
        faltasCometidasJogador.innerHTML = faltasC
        driblesJogador.innerHTML = dribles
        idadeJogador.innerHTML = idade
        posicaoJogador.innerHTML = posicao
        alturaJogador.innerHTML = altura
        pesoJogador.innerHTML = peso
        fotoJogador.src = foto

        const dadosJogador = document.getElementById("dadosJogador")
        dadosJogador.classList.remove("d-none")
        dadosJogador.classList.add("d-block")
        const listaJogadores = document.getElementById("jogadores")
        listaJogadores.classList.add("d-none")

    }
    catch(e){
        console.log(e)
    }
}


function carregarDados(){
    console.log(nome)
    try{
        
    }
    catch(e){
        console.log(e)
    }
}
