async function mostrarSelecao(nomeSelecao) {
    const protocolo = "http"
    const host = "localhost:3000"
    const jogadoresEndpoint = "/jogadores"
    
    
    try{
        const URL = `${protocolo}://${host}${jogadoresEndpoint}`
        const jogadores = (await axios.get(URL)).data
        document.getElementById("jogadores1").style.display = "block";
        document.getElementById("jogadores2").style.display = "block";
        document.getElementById("jogadores3").style.display = "block";
        document.getElementById("jogadores4").style.display = "block";
        document.getElementById("jogadores5").style.display = "block";
        let nomeJogadores = []
        let indexSelecao = 0
        
        var selecao = nomeSelecao;
        for (indexSelecao = 0; indexSelecao < 20 ; indexSelecao++) {
            if (selecao=="Alemanha"){
                nomeJogadores.push([jogadores[0].Alemanha[indexSelecao].player.name,jogadores[0].Alemanha[indexSelecao].player.photo])
            }
            else if (selecao=="Arábia Saudita"){
                nomeJogadores.push([jogadores[1].Arabia_Saudita[indexSelecao].player.name,jogadores[1].Arabia_Saudita[indexSelecao].player.photo])
            }
            else if (selecao=="Argentina"){
                nomeJogadores.push([jogadores[2].Argentina[indexSelecao].player.name,jogadores[2].Argentina[indexSelecao].player.photo])

            }
            else if (selecao=="Austrália"){
                nomeJogadores.push([jogadores[3].Australia[indexSelecao].player.name,jogadores[3].Australia[indexSelecao].player.photo])
            }
            else if (selecao=="Bélgica"){
                nomeJogadores.push([jogadores[4].Belgica[indexSelecao].player.name,jogadores[4].Belgica[indexSelecao].player.photo])
            }
            else if (selecao=="Brasil"){
                nomeJogadores.push([jogadores[5].Brasil[indexSelecao].player.name,jogadores[5].Brasil[indexSelecao].player.photo])
            }
            else if (selecao=="Camarões"){
                nomeJogadores.push([jogadores[6].Camaroes[indexSelecao].player.name,jogadores[6].Camaroes[indexSelecao].player.photo])
            }
            else if (selecao=="Canadá"){
                nomeJogadores.push([jogadores[7].Canada[indexSelecao].player.name,jogadores[7].Canada[indexSelecao].player.photo])
            }
            else if (selecao=="Coreia do Sul"){
                nomeJogadores.push([jogadores[8].Coreia_do_Sul[indexSelecao].player.name,jogadores[8].Coreia_do_Sul[indexSelecao].player.photo])
            }
            else if (selecao=="Costa Rica"){
                nomeJogadores.push([jogadores[9].Costa_Rica[indexSelecao].player.name,jogadores[9].Costa_Rica[indexSelecao].player.photo])
            }
            else if (selecao=="Croácia"){
                nomeJogadores.push([jogadores[10].Croacia[indexSelecao].player.name,jogadores[10].Croacia[indexSelecao].player.photo])
            }
            else if (selecao=="Dinamarca"){
                nomeJogadores.push([jogadores[11].Dinamarca[indexSelecao].player.name,jogadores[11].Dinamarca[indexSelecao].player.photo])
            }
            else if (selecao=="Equador"){
                nomeJogadores.push([jogadores[12].Equador[indexSelecao].player.name,jogadores[12].Equador[indexSelecao].player.photo])            }
            else if (selecao=="Espanha"){
                nomeJogadores.push([jogadores[13].Espanha[indexSelecao].player.name,jogadores[13].Espanha[indexSelecao].player.photo])
            }
            else if (selecao=="Estados Unidos"){
                nomeJogadores.push([jogadores[14].Estados_Unidos[indexSelecao].player.name,jogadores[14].Estados_Unidos[indexSelecao].player.photo])
            }
            else if (selecao=="França"){
                nomeJogadores.push([jogadores[15].Franca[indexSelecao].player.name,jogadores[15].Franca[indexSelecao].player.photo])
            }
            else if (selecao=="Holanda"){
                nomeJogadores.push([jogadores[16].Holanda[indexSelecao].player.name,jogadores[16].Holanda[indexSelecao].player.photo])
            }
            else if (selecao=="Inglaterra"){
                nomeJogadores.push([jogadores[17].Inglaterra[indexSelecao].player.name,jogadores[17].Inglaterra[indexSelecao].player.photo])
            }
            else if (selecao=="Irã"){
                nomeJogadores.push([jogadores[18].Ira[indexSelecao].player.name,jogadores[18].Ira[indexSelecao].player.photo])	
            }
            else if (selecao=="Japão"){
                nomeJogadores.push([jogadores[19].Japao[indexSelecao].player.name,jogadores[19].Japao[indexSelecao].player.photo])
            }
            else if (selecao=="Marrocos"){
                nomeJogadores.push([jogadores[20].Marrocos[indexSelecao].player.name,jogadores[20].Marrocos[indexSelecao].player.photo])
            }
            else if (selecao=="México"){
                nomeJogadores.push([jogadores[21].Mexico[indexSelecao].player.name,jogadores[21].Mexico[indexSelecao].player.photo])
            }
            else if (selecao=="Pais_de_Gales"){
                nomeJogadores.push([jogadores[22].Pais_de_Gales[indexSelecao].player.name,jogadores[22].Pais_de_Gales[indexSelecao].player.photo])
            }
            else if (selecao=="Polônia"){
                nomeJogadores.push([jogadores[23].Polonia[indexSelecao].player.name,jogadores[23].Polonia[indexSelecao].player.photo])
            }
            else if (selecao=="Portugal"){
                nomeJogadores.push([jogadores[24].Portugal[indexSelecao].player.name,jogadores[24].Portugal[indexSelecao].player.photo])
            }
            else if (selecao=="Catar"){
                nomeJogadores.push([jogadores[25].Qatar[indexSelecao].player.name,jogadores[25].Qatar[indexSelecao].player.photo])
            }
            else if (selecao=="Senegal"){
                nomeJogadores.push([jogadores[26].Senegal[indexSelecao].player.name,jogadores[26].Senegal[indexSelecao].player.photo])
            }
            else if (selecao=="Sérvia"){
                nomeJogadores.push([jogadores[27].Servia[indexSelecao].player.name,jogadores[27].Servia[indexSelecao].player.photo])
            }
            else if (selecao=="Suiça"){
                nomeJogadores.push([jogadores[28].Suica[indexSelecao].player.name,jogadores[28].Suica[indexSelecao].player.photo])
            }
            else if (selecao=="Tunísia"){
                nomeJogadores.push([jogadores[29].Tunisia[indexSelecao].player.name,jogadores[29].Tunisia[indexSelecao].player.photo])
            }
            else if (selecao=="Uruguai"){
                nomeJogadores.push([jogadores[30].Uruguai[indexSelecao].player.name,jogadores[30].Uruguai[indexSelecao].player.photo])
            }
            else if (selecao=="Gana"){
                nomeJogadores.push([jogadores[31].Gana[indexSelecao].player.name,jogadores[31].Gana[indexSelecao].player.photo])
            }
            nomeJogadores = nomeJogadores.sort()
        }
        console.log(nomeJogadores)
        let index = 1;
        for (index = 1; index < 21; index++) {
            let idFoto = String("jogador"+String(index));
            let idNome = String("nomeJogador"+String(index));
            console.log(idFoto)
            var jogadorFoto = document.getElementById(idFoto)
            var jogadorNome = document.getElementById(idNome)
            // console.log(idJogador.src)
            jogadorNome.innerHTML = nomeJogadores[index][0]
            jogadorFoto.src = String(nomeJogadores[index][1])
            
        }
    }
    catch(e){
        console.log(e)
    }

}