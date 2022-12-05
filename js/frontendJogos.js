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
        

        for (let i = 0; i < resp[0].Jogos.length; i++) {
            const dados = resp[0].Jogos[i].fixture.date
            const dataJogo = dados.slice(0,10)
            if (dataJogo == data){
                jogos.push([resp[0].Jogos[i].fixture.venue.name, resp[0].Jogos[i].teams.home.name, resp[0].Jogos[i].teams.away.name, resp[0].Jogos[i].goals.home, resp[0].Jogos[i].goals.away, resp[0].Jogos[i].teams.home.logo, resp[0].Jogos[i].teams.away.logo, resp[0].Jogos[i].teams.home.winner, resp[0].Jogos[i].teams.away.winner])
            }
        }
        console.log(jogos)
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
        

        for (let i = 0; i < resp[0].Jogos.length; i++) {
            const dados = resp[0].Jogos[i].fixture.date
            const dataJogo = dados.slice(0,10)
            console.log(dataJogo)
            console.log(data)
            if (dataJogo == data){
                jogos.push([resp[0].Jogos[i].fixture.venue.name, resp[0].Jogos[i].teams.home.name, resp[0].Jogos[i].teams.away.name, resp[0].Jogos[i].goals.home, resp[0].Jogos[i].goals.away, resp[0].Jogos[i].teams.home.logo, resp[0].Jogos[i].teams.away.logo, resp[0].Jogos[i].teams.home.winner, resp[0].Jogos[i].teams.away.winner])
            }
        }
        console.log(jogos)
    }

    catch(e){
        console.log( e)
    }
}
    
    