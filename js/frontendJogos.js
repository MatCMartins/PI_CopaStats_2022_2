const atual = String(new Date())


async function getJogos(){
    try{
       
        const mes = String(12)
        const dia = atual.slice(8,10)
        const ano = atual.slice(11,15)
        const data = ano + "-" + mes + "-" + dia
    
        const protocolo = "http"
        const host = "localhost:3000"
        const endpointJogos = "/jogos"
        const URL = `${protocolo}://${host}${endpointJogos}`
        const resp = (await axios.get(URL)).data
        
        let jogos = []
        


        for (let i = 0; i < resp[1].Jogos.length; i++) {
            const dados = resp[1].Jogos[i].fixture.date
            const dataJogo = dados.slice(0,10)
            if (dataJogo == data){
                jogos.push([resp[1].Jogos[i].fixture.venue.name, resp[1].Jogos[i].teams.home.name, resp[1].Jogos[i].teams.away.name, resp[1].Jogos[i].goals.home, resp[1].Jogos[i].goals.away, resp[1].Jogos[i].teams.home.logo, resp[1].Jogos[i].teams.away.logo, resp[1].Jogos[i].teams.home.winner, resp[1].Jogos[i].teams.away.winner])
            }
        }
        for (let  i = 0; i < jogos.length;  i++) {
            let espaco_jogos = document.querySelector("#jogos")
            let jogo = document.createElement("div")
            jogo.classList.add("container","mt-2")
            espaco_jogos.appendChild(jogo)

            let jogo_row = document.createElement("div")
            jogo_row.classList.add("row")
            jogo.appendChild(jogo_row)

            let jogo_margem = document.createElement("div")
            jogo_margem.classList.add("mt-5","pt-1")
            jogo_row.appendChild(jogo_margem)

            let jogo_texto = document.createElement("div")
            jogo_texto.classList.add("text-center")
            jogo_margem.appendChild(jogo_texto)

            let primeiro_time = document.createElement("img")
            primeiro_time.classList.add("col-2","mt-4","mb-4","me-4")
            primeiro_time.src = jogos[i][5]
            jogo_texto.appendChild(primeiro_time)

            let placar = document.createElement("div")
            placar.classList.add("col-6","d-inline-block","area_pontuacao")
            jogo_texto.appendChild(placar)

            let data_texto = document.createElement("span")
            data_texto.classList.add("d-block")
            data_texto.innerHTML = data
            placar.appendChild(data_texto)

            let gols_primeiro_time = document.createElement("span")
            gols_primeiro_time.classList.add("elemento_area_pontuacao")
            gols_primeiro_time.innerHTML = jogos[i][3]
            placar.appendChild(gols_primeiro_time)

            let x = document.createElement("span")
            x.classList.add("elemento_area_pontuacao", "ms-5", "me-5")
            x.innerHTML = "x"
            placar.appendChild(x)

            let gols_segundo_time = document.createElement("span")
            gols_segundo_time.classList.add("elemento_area_pontuacao")
            gols_segundo_time.innerHTML = jogos[i][4]
            placar.appendChild(gols_segundo_time)
            
            // let estadio = document.createElement("span")
            // estadio.classList.add("elemento_area_pontuacao", "d-block")
            // estadio.innerHTML = jogos[i][0]
            // placar.appendChild(estadio)

            let segundo_time = document.createElement("img")
            segundo_time.classList.add("col-2","mt-4","mb-4", "ms-4")
            segundo_time.src = jogos[i][6]
            jogo_texto.appendChild(segundo_time)

            


        }
    }

    catch(e){
        console.log( e)
    }

}
 
async function getJogosData(){
    const dataSelecionada = document.querySelector("#dataSelecionada").value
    data = dataSelecionada
    try{
    const protocolo = "http"
        const host = "localhost:3000"
        const endpointJogos = "/jogos"
        const URL = `${protocolo}://${host}${endpointJogos}`
        const resp = (await axios.get(URL)).data
        
        let jogos = []
        

        for (let i = 0; i < resp[1].Jogos.length; i++) {
            const dados = resp[1].Jogos[i].fixture.date
            const dataJogo = dados.slice(0,10)
            if (dataJogo == data){
                jogos.push([resp[1].Jogos[i].fixture.venue.name, resp[1].Jogos[i].teams.home.name, resp[1].Jogos[i].teams.away.name, resp[1].Jogos[i].goals.home, resp[1].Jogos[i].goals.away, resp[1].Jogos[i].teams.home.logo, resp[1].Jogos[i].teams.away.logo, resp[1].Jogos[i].teams.home.winner, resp[1].Jogos[i].teams.away.winner])
            }
        }
        console.log(jogos)

        

        let espaco_jogos = document.querySelector("#jogos")
        if (espaco_jogos.contains(document.querySelector(".container"))){
            espaco_jogos.removeChild(document.querySelector(".container"))
            espaco_jogos.removeChild(document.querySelector(".container"))

            
        }
        for (let  i = 0; i < jogos.length;  i++) {
            let jogo = document.createElement("div")
            jogo.classList.add("container","mt-2")
            espaco_jogos.appendChild(jogo)

            let jogo_row = document.createElement("div")
            jogo_row.classList.add("row")
            jogo.appendChild(jogo_row)

            let jogo_margem = document.createElement("div")
            jogo_margem.classList.add("mt-5","pt-1")
            jogo_row.appendChild(jogo_margem)

            let jogo_texto = document.createElement("div")
            jogo_texto.classList.add("text-center")
            jogo_margem.appendChild(jogo_texto)

            let primeiro_time = document.createElement("img")
            primeiro_time.classList.add("col-2","mt-4","mb-4","me-5")
            primeiro_time.src = jogos[i][5]
            jogo_texto.appendChild(primeiro_time)

            let placar = document.createElement("div")
            placar.classList.add("col-4","d-inline-block","area_pontuacao")
            jogo_texto.appendChild(placar)

            let data_texto = document.createElement("span")
            data_texto.classList.add("d-block")
            data_texto.innerHTML = data
            placar.appendChild(data_texto)

            let gols_primeiro_time = document.createElement("span")
            gols_primeiro_time.classList.add("elemento_area_pontuacao")
            gols_primeiro_time.innerHTML = jogos[i][3]
            placar.appendChild(gols_primeiro_time)

            let x = document.createElement("span")
            x.classList.add("elemento_area_pontuacao", "ms-4", "me-4")
            x.innerHTML = "x"
            placar.appendChild(x)

            let gols_segundo_time = document.createElement("span")
            gols_segundo_time.classList.add("elemento_area_pontuacao")
            gols_segundo_time.innerHTML = jogos[i][4]
            placar.appendChild(gols_segundo_time)
            


            let segundo_time = document.createElement("img")
            segundo_time.classList.add("col-2","mt-4","mb-4","ms-5")
            segundo_time.src = jogos[i][6]
            jogo_texto.appendChild(segundo_time)

            


        }
    }

    catch(e){
        console.log( e)
    }
}
    
    