async function pegarClassificacoes(){
    const protocolo = "http"
    const host = "localhost:3000"
    const classificacoesEndpoint = "/classificacoes"
    try{
        const URL = `${protocolo}://${host}${classificacoesEndpoint}`
        let resp = (await axios.get(URL)).data
        let grupoA = []
        let grupoB = []
        let grupoC = []
        let grupoD = []
        let grupoE = []
        let grupoF = []
        let grupoG = []
        let grupoH = []
        resp = resp[0]
        // resp = resp[0].Grupo_A[0].team.name
        
        let i = 0;
        for (i=0; i<4; i++){
            const nomeA = resp.Grupo_A[i].team.name
            const bandeiraA = resp.Grupo_A[i].team.logo
            const sgA = resp.Grupo_A[i].goalsDiff
            const partidasA = resp.Grupo_A[i].points
            const vitoriasA = resp.Grupo_A[i].all.win
            const empatesA = resp.Grupo_A[i].all.draw
            const derrotasA = resp.Grupo_A[i].all.lose
            const golsProA = resp.Grupo_A[i].all.goals.for
            const golsContraA = resp.Grupo_A[i].all.goals.against
            grupoA.push([nomeA, bandeiraA, sgA, partidasA, vitoriasA, empatesA, derrotasA, golsProA, golsContraA])


            const nomeB = resp.Grupo_B[i].team.name
            const bandeiraB = resp.Grupo_B[i].team.logo
            const sgB = resp.Grupo_B[i].goalsDiff
            const partidasB = resp.Grupo_B[i].points
            const vitoriasB = resp.Grupo_B[i].all.win
            const empatesB = resp.Grupo_B[i].all.draw
            const derrotasB = resp.Grupo_B[i].all.lose
            const golsProB = resp.Grupo_B[i].all.goals.for
            const golsContraB = resp.Grupo_B[i].all.goals.against
            grupoB.push([nomeB, bandeiraB, sgB, partidasB, vitoriasB, empatesB, derrotasB, golsProB, golsContraB])

            const nomeC = resp.Grupo_C[i].team.name
            const bandeiraC = resp.Grupo_C[i].team.logo
            const sgC = resp.Grupo_C[i].goalsDiff
            const partidasC = resp.Grupo_C[i].points
            const vitoriasC = resp.Grupo_C[i].all.win
            const empatesC = resp.Grupo_C[i].all.draw
            const derrotasC = resp.Grupo_C[i].all.lose
            const golsProC = resp.Grupo_C[i].all.goals.for
            const golsContraC = resp.Grupo_C[i].all.goals.against
            grupoC.push([nomeC, bandeiraC, sgC, partidasC, vitoriasC, empatesC, derrotasC, golsProC, golsContraC])

            const nomeD = resp.Grupo_D[i].team.name
            const bandeiraD = resp.Grupo_D[i].team.logo
            const sgD = resp.Grupo_D[i].goalsDiff
            const partidasD = resp.Grupo_D[i].points
            const vitoriasD = resp.Grupo_D[i].all.win
            const empatesD = resp.Grupo_D[i].all.draw
            const derrotasD = resp.Grupo_D[i].all.lose
            const golsProD = resp.Grupo_D[i].all.goals.for
            const golsContraD = resp.Grupo_D[i].all.goals.against
            grupoD.push([nomeD, bandeiraD, sgD, partidasD, vitoriasD, empatesD, derrotasD, golsProD, golsContraD])

            const nomeE = resp.Grupo_E[i].team.name
            const bandeiraE = resp.Grupo_E[i].team.logo
            const sgE = resp.Grupo_E[i].goalsDiff
            const partidasE = resp.Grupo_E[i].points
            const vitoriasE = resp.Grupo_E[i].all.win
            const empatesE = resp.Grupo_E[i].all.draw
            const derrotasE = resp.Grupo_E[i].all.lose
            const golsProE = resp.Grupo_E[i].all.goals.for
            const golsContraE = resp.Grupo_E[i].all.goals.against
            grupoE.push([nomeE, bandeiraE, sgE, partidasE, vitoriasE, empatesE, derrotasE, golsProE, golsContraE])

            const nomeF = resp.Grupo_F[i].team.name
            const bandeiraF = resp.Grupo_F[i].team.logo
            const sgF = resp.Grupo_F[i].goalsDiff
            const partidasF = resp.Grupo_F[i].points
            const vitoriasF = resp.Grupo_F[i].all.win
            const empatesF = resp.Grupo_F[i].all.draw
            const derrotasF = resp.Grupo_F[i].all.lose
            const golsProF = resp.Grupo_F[i].all.goals.for
            const golsContraF = resp.Grupo_F[i].all.goals.against
            grupoF.push([nomeF, bandeiraF, sgF, partidasF, vitoriasF, empatesF, derrotasF, golsProF, golsContraF])

            const nomeG = resp.Grupo_G[i].team.name
            const bandeiraG = resp.Grupo_G[i].team.logo
            const sgG = resp.Grupo_G[i].goalsDiff
            const partidasG = resp.Grupo_G[i].points
            const vitoriasG = resp.Grupo_G[i].all.win
            const empatesG = resp.Grupo_G[i].all.draw
            const derrotasG = resp.Grupo_G[i].all.lose
            const golsProG = resp.Grupo_G[i].all.goals.for
            const golsContraG = resp.Grupo_G[i].all.goals.against
            grupoG.push([nomeG, bandeiraG, sgG, partidasG, vitoriasG, empatesG, derrotasG, golsProG, golsContraG])

            const nomeH = resp.Grupo_H[i].team.name
            const bandeiraH = resp.Grupo_H[i].team.logo
            const sgH = resp.Grupo_H[i].goalsDiff
            const partidasH = resp.Grupo_H[i].points
            const vitoriasH = resp.Grupo_H[i].all.win
            const empatesH = resp.Grupo_H[i].all.draw
            const derrotasH = resp.Grupo_H[i].all.lose
            const golsProH = resp.Grupo_H[i].all.goals.for
            const golsContraH = resp.Grupo_H[i].all.goals.against
            grupoH.push([nomeH, bandeiraH, sgH, partidasH, vitoriasH, empatesH, derrotasH, golsProH, golsContraH])


            

        }
        grupos=[grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH]
        let j = 1
        let index = 0
        const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
        for(index=0; index<8; index++) {
            primeiro = grupos[index][0][0]
            primeiroJogo = grupos[index][0][3]
            primeiroVitorias = grupos[index][0][4]
            primeiroEmpates = grupos[index][0][5]
            primeiroDerrotas = grupos[index][0][6]
            primeiroGolsPro = grupos[index][0][7]
            primeiroGolsContra = grupos[index][0][8]
            primeiroSG = grupos[index][0][2]



            segundo = grupos[index][1][0]
            segundoJogo = grupos[index][1][3]
            segundoVitorias = grupos[index][1][4]
            segundoEmpates = grupos[index][1][5]
            segundoDerrotas = grupos[index][1][6]
            segundoGolsPro = grupos[index][1][7]
            segundoGolsContra = grupos[index][1][8]
            segundoSG = grupos[index][1][2]

            terceiro = grupos[index][2][0]
            terceiroJogo = grupos[index][2][3]
            terceiroVitorias = grupos[index][2][4]
            terceiroEmpates = grupos[index][2][5]
            terceiroDerrotas = grupos[index][2][6]
            terceiroGolsPro = grupos[index][2][7]
            terceiroGolsContra = grupos[index][2][8]
            terceiroSG = grupos[index][2][2]

            quarto = grupos[index][3][0]
            quartoJogo = grupos[index][3][3]
            quartoVitorias = grupos[index][3][4]
            quartoEmpates = grupos[index][3][5]
            quartoDerrotas = grupos[index][3][6]
            quartoGolsPro = grupos[index][3][7]
            quartoGolsContra = grupos[index][3][8]
            quartoSG = grupos[index][3][2]

            idPrimeiro = document.querySelector(`#${letras[index]}${1}`)
            idPrimeiro.innerHTML = primeiro
            idPrimeiroJogo = document.querySelector(`#${letras[index]}J${1}`)
            idPrimeiroJogo.innerHTML = primeiroJogo
            idPrimeiroVitorias = document.querySelector(`#${letras[index]}V${1}`)
            idPrimeiroVitorias.innerHTML = primeiroVitorias
            idPrimeiroEmpates = document.querySelector(`#${letras[index]}E${1}`)
            idPrimeiroEmpates.innerHTML = primeiroEmpates
            idPrimeiroDerrotas = document.querySelector(`#${letras[index]}D${1}`)
            idPrimeiroDerrotas.innerHTML = primeiroDerrotas
            idPrimeiroGolsPro = document.querySelector(`#${letras[index]}GP${1}`)
            idPrimeiroGolsPro.innerHTML = primeiroGolsPro
            idPrimeiroGolsContra = document.querySelector(`#${letras[index]}GC${1}`)
            idPrimeiroGolsContra.innerHTML = primeiroGolsContra
            idPrimeiroSG = document.querySelector(`#${letras[index]}SG${1}`)
            idPrimeiroSG.innerHTML = primeiroSG

            idSegundo = document.querySelector(`#${letras[index]}${2}`)
            idSegundo.innerHTML = segundo
            idSegundoJogo = document.querySelector(`#${letras[index]}J${2}`)
            idSegundoJogo.innerHTML = segundoJogo
            idSegundoVitorias = document.querySelector(`#${letras[index]}V${2}`)
            idSegundoVitorias.innerHTML = segundoVitorias
            idSegundoEmpates = document.querySelector(`#${letras[index]}E${2}`)
            idSegundoEmpates.innerHTML = segundoEmpates
            idSegundoDerrotas = document.querySelector(`#${letras[index]}D${2}`)
            idSegundoDerrotas.innerHTML = segundoDerrotas
            idSegundoGolsPro = document.querySelector(`#${letras[index]}GP${2}`)
            idSegundoGolsPro.innerHTML = segundoGolsPro
            idSegundoGolsContra = document.querySelector(`#${letras[index]}GC${2}`)
            idSegundoGolsContra.innerHTML = segundoGolsContra
            idSegundoSG = document.querySelector(`#${letras[index]}SG${2}`)
            idSegundoSG.innerHTML = segundoSG

            idTerceiro = document.querySelector(`#${letras[index]}${3}`)
            idTerceiro.innerHTML = terceiro
            idTerceiroJogo = document.querySelector(`#${letras[index]}J${3}`)
            idTerceiroJogo.innerHTML = terceiroJogo
            idTerceiroVitorias = document.querySelector(`#${letras[index]}V${3}`)
            idTerceiroVitorias.innerHTML = terceiroVitorias
            idTerceiroEmpates = document.querySelector(`#${letras[index]}E${3}`)
            idTerceiroEmpates.innerHTML = terceiroEmpates
            idTerceiroDerrotas = document.querySelector(`#${letras[index]}D${3}`)
            idTerceiroDerrotas.innerHTML = terceiroDerrotas
            idTerceiroGolsPro = document.querySelector(`#${letras[index]}GP${3}`)
            idTerceiroGolsPro.innerHTML = terceiroGolsPro
            idTerceiroGolsContra = document.querySelector(`#${letras[index]}GC${3}`)
            idTerceiroGolsContra.innerHTML = terceiroGolsContra
            idTerceiroSG = document.querySelector(`#${letras[index]}SG${3}`)
            idTerceiroSG.innerHTML = terceiroSG

            idQuarto = document.querySelector(`#${letras[index]}${4}`)
            idQuarto.innerHTML = quarto
            idQuartoJogo = document.querySelector(`#${letras[index]}J${4}`)
            idQuartoJogo.innerHTML = quartoJogo
            idQuartoVitorias = document.querySelector(`#${letras[index]}V${4}`)
            idQuartoVitorias.innerHTML = quartoVitorias
            idQuartoEmpates = document.querySelector(`#${letras[index]}E${4}`)
            idQuartoEmpates.innerHTML = quartoEmpates
            idQuartoDerrotas = document.querySelector(`#${letras[index]}D${4}`)
            idQuartoDerrotas.innerHTML = quartoDerrotas
            idQuartoGolsPro = document.querySelector(`#${letras[index]}GP${4}`)
            idQuartoGolsPro.innerHTML = quartoGolsPro
            idQuartoGolsContra = document.querySelector(`#${letras[index]}GC${4}`)
            idQuartoGolsContra.innerHTML = quartoGolsContra
            idQuartoSG = document.querySelector(`#${letras[index]}SG${4}`)
            idQuartoSG.innerHTML = quartoSG
            

            j++


            
        }
    }
    catch{
        console.log("Erro ao pegar classificações")
    }
}