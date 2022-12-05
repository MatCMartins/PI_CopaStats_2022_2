let nomeSelecao = ""
async function ShowSelecao(selecao){
    const protocolo = "http"
    const host = "localhost:3000"
    const selecoesEndpoint = "/selecoes"
    const jogadoresEndpoint = "/jogadores"
    try{
        const URL = `${protocolo}://${host}${selecoesEndpoint}`
        const resp = (await axios.get(URL)).data
        document.getElementById("tecnico").style.display = "block";
        document.getElementById("estatisticas_selecao").style.display = "block";
        document.getElementById("selecao_intro").style.display = "block";
        document.getElementById("proximo_jogo").style.display = "block";
        document.getElementById("jogadores_selecao").style.display = "block";
        
        const URL2 = `${protocolo}://${host}${jogadoresEndpoint}`
        const resp2 = (await axios.get(URL2)).data


        nomeSelecao = selecao
        listaSelecoes = []
        let nome = ""
        let bandeira = ""
        let vitorias = ""
        let empates = ""
        let derrotas = ""
        let gols_pro = ""
        let media_gols_pro = ""
        let media_gols_contra = ""
        let clean_sheets = ""
        let penaltis = ""
        let lista_jogadores = []

            if (nomeSelecao == "Alemanha"){
                 nome = resp[0].Alemanha.team.name
                 bandeira = resp[0].Alemanha.team.logo
                 vitorias = resp[0].Alemanha.fixtures.wins.total
                 empates = resp[0].Alemanha.fixtures.draws.total
                 derrotas = resp[0].Alemanha.fixtures.loses.total
                 gols_pro = resp[0].Alemanha.goals.for.total.total
                 media_gols_pro = resp[0].Alemanha.goals.for.average.total
                 media_gols_contra = resp[0].Alemanha.goals.against.average.total
                 clean_sheets = resp[0].Alemanha.clean_sheet.total
                 penaltis = resp[0].Alemanha.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[0].Alemanha[i].player.name,resp2[0].Alemanha[i].player.photo])
                }

                


            }
            else if (nomeSelecao == "Arábia Saudita"){
                 nome = resp[1].Arabia_Saudita.team.name
                 bandeira = resp[1].Arabia_Saudita.team.logo
                 vitorias = resp[1].Arabia_Saudita.fixtures.wins.total
                 empates = resp[1].Arabia_Saudita.fixtures.draws.total
                 derrotas = resp[1].Arabia_Saudita.fixtures.loses.total
                 gols_pro = resp[1].Arabia_Saudita.goals.for.total.total
                 media_gols_pro = resp[1].Arabia_Saudita.goals.for.average.total
                 media_gols_contra = resp[1].Arabia_Saudita.goals.against.average.total
                 clean_sheets = resp[1].Arabia_Saudita.clean_sheet.total
                 penaltis = resp[1].Arabia_Saudita.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[1].Arabia_Saudita[i].player.name,resp2[1].Arabia_Saudita[i].player.photo])
                }

            }
            else if (nomeSelecao == "Argentina"){
                 nome = resp[2].Argentina.team.name
                 bandeira = resp[2].Argentina.team.logo
                 vitorias = resp[2].Argentina.fixtures.wins.total
                 empates = resp[2].Argentina.fixtures.draws.total
                 derrotas = resp[2].Argentina.fixtures.loses.total
                 gols_pro = resp[2].Argentina.goals.for.total.total
                 media_gols_pro = resp[2].Argentina.goals.for.average.total
                 media_gols_contra = resp[2].Argentina.goals.against.average.total
                 clean_sheets = resp[2].Argentina.clean_sheet.total
                 penaltis = resp[2].Argentina.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[2].Argentina[i].player.name,resp2[2].Argentina[i].player.photo])
                }
                

            }
            else if (nomeSelecao == "Austrália"){
                 nome = resp[3].Australia.team.name
                 bandeira = resp[3].Australia.team.logo
                 vitorias = resp[3].Australia.fixtures.wins.total
                 empates = resp[3].Australia.fixtures.draws.total
                 derrotas = resp[3].Australia.fixtures.loses.total
                 gols_pro = resp[3].Australia.goals.for.total.total
                 media_gols_pro = resp[3].Australia.goals.for.average.total
                 media_gols_contra = resp[3].Australia.goals.against.average.total
                 clean_sheets = resp[3].Australia.clean_sheet.total
                 penaltis = resp[3].Australia.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[3].Australia[i].player.name,resp2[3].Australia[i].player.photo])
                }

                
            }
            else if (nomeSelecao == "Bélgica"){
                 nome = resp[4].Belgica.team.name
                 bandeira = resp[4].Belgica.team.logo
                 vitorias = resp[4].Belgica.fixtures.wins.total
                 empates = resp[4].Belgica.fixtures.draws.total
                 derrotas = resp[4].Belgica.fixtures.loses.total
                 gols_pro = resp[4].Belgica.goals.for.total.total
                 media_gols_pro = resp[4].Belgica.goals.for.average.total
                 media_gols_contra = resp[4].Belgica.goals.against.average.total
                 clean_sheets = resp[4].Belgica.clean_sheet.total
                 penaltis = resp[4].Belgica.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[4].Belgica[i].player.name,resp2[4].Belgica[i].player.photo])
                }



            }
            else if (nomeSelecao == "Brasil"){
                 nome = resp[5].Brasil.team.name
                 bandeira = resp[5].Brasil.team.logo
                 vitorias = resp[5].Brasil.fixtures.wins.total
                 empates = resp[5].Brasil.fixtures.draws.total
                 derrotas = resp[5].Brasil.fixtures.loses.total
                 gols_pro = resp[5].Brasil.goals.for.total.total
                 media_gols_pro = resp[5].Brasil.goals.for.average.total
                 media_gols_contra = resp[5].Brasil.goals.against.average.total
                 clean_sheets = resp[5].Brasil.clean_sheet.total
                 penaltis = resp[5].Brasil.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[5].Brasil[i].player.name,resp2[5].Brasil[i].player.photo])
                }

            }
            else if (nomeSelecao == "Camarões"){
                nome = resp[6].Camaroes.team.name
                bandeira = resp[6].Camaroes.team.logo
                vitorias = resp[6].Camaroes.fixtures.wins.total
                empates = resp[6].Camaroes.fixtures.draws.total
                derrotas = resp[6].Camaroes.fixtures.loses.total
                gols_pro = resp[6].Camaroes.goals.for.total.total
                media_gols_pro = resp[6].Camaroes.goals.for.average.total
                media_gols_contra = resp[6].Camaroes.goals.against.average.total
                clean_sheets = resp[6].Camaroes.clean_sheet.total
                penaltis = resp[6].Camaroes.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[6].Camaroes[i].player.name,resp2[6].Camaroes[i].player.photo])
                }

            }
            else if (nomeSelecao == "Canadá"){
                nome = resp[7].Canada.team.name
                bandeira = resp[7].Canada.team.logo
                vitorias = resp[7].Canada.fixtures.wins.total
                empates = resp[7].Canada.fixtures.draws.total
                derrotas = resp[7].Canada.fixtures.loses.total
                gols_pro = resp[7].Canada.goals.for.total.total
                media_gols_pro = resp[7].Canada.goals.for.average.total
                media_gols_contra = resp[7].Canada.goals.against.average.total
                clean_sheets = resp[7].Canada.clean_sheet.total
                penaltis = resp[7].Canada.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[7].Canada[i].player.name,resp2[7].Canada[i].player.photo])
                }

            }
            else if (nomeSelecao == "Coreia do Sul"){
                nome = resp[8].Coreia_do_Sul.team.name
                bandeira = resp[8].Coreia_do_Sul.team.logo
                vitorias = resp[8].Coreia_do_Sul.fixtures.wins.total
                empates = resp[8].Coreia_do_Sul.fixtures.draws.total
                derrotas = resp[8].Coreia_do_Sul.fixtures.loses.total
                gols_pro = resp[8].Coreia_do_Sul.goals.for.total.total
                media_gols_pro = resp[8].Coreia_do_Sul.goals.for.average.total
                media_gols_contra = resp[8].Coreia_do_Sul.goals.against.average.total
                clean_sheets = resp[8].Coreia_do_Sul.clean_sheet.total
                penaltis = resp[8].Coreia_do_Sul.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[8].Coreia_do_Sul[i].player.name,resp2[8].Coreia_do_Sul[i].player.photo])
                }

            }
            else if (nomeSelecao == "Costa Rica"){
                nome = resp[9].Costa_Rica.team.name
                bandeira = resp[9].Costa_Rica.team.logo
                vitorias = resp[9].Costa_Rica.fixtures.wins.total
                empates = resp[9].Costa_Rica.fixtures.draws.total
                derrotas = resp[9].Costa_Rica.fixtures.loses.total
                gols_pro = resp[9].Costa_Rica.goals.for.total.total
                media_gols_pro = resp[9].Costa_Rica.goals.for.average.total
                media_gols_contra = resp[9].Costa_Rica.goals.against.average.total
                clean_sheets = resp[9].Costa_Rica.clean_sheet.total
                penaltis = resp[9].Costa_Rica.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[9].Costa_Rica[i].player.name,resp2[9].Costa_Rica[i].player.photo])
                }

            }
            else if (nomeSelecao == "Croácia"){
                nome = resp[10].Croacia.team.name
                bandeira = resp[10].Croacia.team.logo
                vitorias = resp[10].Croacia.fixtures.wins.total
                empates = resp[10].Croacia.fixtures.draws.total
                derrotas = resp[10].Croacia.fixtures.loses.total
                gols_pro = resp[10].Croacia.goals.for.total.total
                media_gols_pro = resp[10].Croacia.goals.for.average.total
                media_gols_contra = resp[10].Croacia.goals.against.average.total
                clean_sheets = resp[10].Croacia.clean_sheet.total
                penaltis = resp[10].Croacia.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[10].Croacia[i].player.name,resp2[10].Croacia[i].player.photo])
                }

            }
            else if (nomeSelecao == "Dinamarca"){
                nome = resp[11].Dinamarca.team.name
                bandeira = resp[11].Dinamarca.team.logo
                vitorias = resp[11].Dinamarca.fixtures.wins.total
                empates = resp[11].Dinamarca.fixtures.draws.total
                derrotas = resp[11].Dinamarca.fixtures.loses.total
                gols_pro = resp[11].Dinamarca.goals.for.total.total
                media_gols_pro = resp[11].Dinamarca.goals.for.average.total
                media_gols_contra = resp[11].Dinamarca.goals.against.average.total
                clean_sheets = resp[11].Dinamarca.clean_sheet.total
                penaltis = resp[11].Dinamarca.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[11].Dinamarca[i].player.name,resp2[11].Dinamarca[i].player.photo])
                }

            }
            else if (nomeSelecao == "Equador"){
                nome = resp[12].Equador.team.name
                bandeira = resp[12].Equador.team.logo
                vitorias = resp[12].Equador.fixtures.wins.total
                empates = resp[12].Equador.fixtures.draws.total
                derrotas = resp[12].Equador.fixtures.loses.total
                gols_pro = resp[12].Equador.goals.for.total.total
                media_gols_pro = resp[12].Equador.goals.for.average.total
                media_gols_contra = resp[12].Equador.goals.against.average.total
                clean_sheets = resp[12].Equador.clean_sheet.total
                penaltis = resp[12].Equador.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[12].Equador[i].player.name,resp2[12].Equador[i].player.photo])
                }

            }
            else if (nomeSelecao == "Espanha"){

                nome = resp[13].Espanha.team.name
                bandeira = resp[13].Espanha.team.logo
                vitorias = resp[13].Espanha.fixtures.wins.total
                empates = resp[13].Espanha.fixtures.draws.total
                derrotas = resp[13].Espanha.fixtures.loses.total
                gols_pro = resp[13].Espanha.goals.for.total.total
                media_gols_pro = resp[13].Espanha.goals.for.average.total
                media_gols_contra = resp[13].Espanha.goals.against.average.total
                clean_sheets = resp[13].Espanha.clean_sheet.total
                penaltis = resp[13].Espanha.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[13].Espanha[i].player.name,resp2[13].Espanha[i].player.photo])
                }

            }
            else if (nomeSelecao == "Estados Unidos"){
                nome = resp[14].Estados_Unidos.team.name
                bandeira = resp[14].Estados_Unidos.team.logo
                vitorias = resp[14].Estados_Unidos.fixtures.wins.total
                empates = resp[14].Estados_Unidos.fixtures.draws.total
                derrotas = resp[14].Estados_Unidos.fixtures.loses.total
                gols_pro = resp[14].Estados_Unidos.goals.for.total.total
                media_gols_pro = resp[14].Estados_Unidos.goals.for.average.total
                media_gols_contra = resp[14].Estados_Unidos.goals.against.average.total
                clean_sheets = resp[14].Estados_Unidos.clean_sheet.total
                penaltis = resp[14].Estados_Unidos.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[14].Estados_Unidos[i].player.name, resp2[14].Estados_Unidos[i].player.photo])
                }

            }
            else if (nomeSelecao == "França"){
                nome = resp[15].Franca.team.name
                bandeira = resp[15].Franca.team.logo
                vitorias = resp[15].Franca.fixtures.wins.total
                empates = resp[15].Franca.fixtures.draws.total
                derrotas = resp[15].Franca.fixtures.loses.total
                gols_pro = resp[15].Franca.goals.for.total.total
                media_gols_pro = resp[15].Franca.goals.for.average.total
                media_gols_contra = resp[15].Franca.goals.against.average.total
                clean_sheets = resp[15].Franca.clean_sheet.total
                penaltis = resp[15].Franca.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[15].Franca[i].player.name,resp2[15].Franca[i].player.photo])
                }

            }
            else if (nomeSelecao == "Holanda"){
                nome = resp[16].Holanda.team.name
                bandeira = resp[16].Holanda.team.logo
                vitorias = resp[16].Holanda.fixtures.wins.total
                empates = resp[16].Holanda.fixtures.draws.total
                derrotas = resp[16].Holanda.fixtures.loses.total
                gols_pro = resp[16].Holanda.goals.for.total.total
                media_gols_pro = resp[16].Holanda.goals.for.average.total
                media_gols_contra = resp[16].Holanda.goals.against.average.total
                clean_sheets = resp[16].Holanda.clean_sheet.total
                penaltis = resp[16].Holanda.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[16].Holanda[i].player.name,resp2[16].Holanda[i].player.photo])
                }

            }
            else if (nomeSelecao == "Inglaterra"){
                nome = resp[17].Inglaterra.team.name
                bandeira = resp[17].Inglaterra.team.logo
                vitorias = resp[17].Inglaterra.fixtures.wins.total
                empates = resp[17].Inglaterra.fixtures.draws.total
                derrotas = resp[17].Inglaterra.fixtures.loses.total
                gols_pro = resp[17].Inglaterra.goals.for.total.total
                media_gols_pro = resp[17].Inglaterra.goals.for.average.total
                media_gols_contra = resp[17].Inglaterra.goals.against.average.total
                clean_sheets = resp[17].Inglaterra.clean_sheet.total
                penaltis = resp[17].Inglaterra.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[17].Inglaterra[i].player.name,resp2[17].Inglaterra[i].player.photo])
                }

            }
            else if (nomeSelecao == "Irã"){
                nome = resp[18].Ira.team.name
                bandeira = resp[18].Ira.team.logo
                vitorias = resp[18].Ira.fixtures.wins.total
                empates = resp[18].Ira.fixtures.draws.total
                derrotas = resp[18].Ira.fixtures.loses.total
                gols_pro = resp[18].Ira.goals.for.total.total
                media_gols_pro = resp[18].Ira.goals.for.average.total
                media_gols_contra = resp[18].Ira.goals.against.average.total
                clean_sheets = resp[18].Ira.clean_sheet.total
                penaltis = resp[18].Ira.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[18].Ira[i].player.name,resp2[18].Ira[i].player.photo])
                }

            }
            else if (nomeSelecao == "Japão"){
                nome = resp[19].Japao.team.name
                bandeira = resp[19].Japao.team.logo
                vitorias = resp[19].Japao.fixtures.wins.total
                empates = resp[19].Japao.fixtures.draws.total
                derrotas = resp[19].Japao.fixtures.loses.total
                gols_pro = resp[19].Japao.goals.for.total.total
                media_gols_pro = resp[19].Japao.goals.for.average.total
                media_gols_contra = resp[19].Japao.goals.against.average.total
                clean_sheets = resp[19].Japao.clean_sheet.total
                penaltis = resp[19].Japao.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[19].Japao[i].player.name,resp2[19].Japao[i].player.photo])
                }
            }
            else if (nomeSelecao == "Marrocos"){
                nome = resp[20].Marrocos.team.name
                bandeira = resp[20].Marrocos.team.logo
                vitorias = resp[20].Marrocos.fixtures.wins.total
                empates = resp[20].Marrocos.fixtures.draws.total
                derrotas = resp[20].Marrocos.fixtures.loses.total
                gols_pro = resp[20].Marrocos.goals.for.total.total
                media_gols_pro = resp[20].Marrocos.goals.for.average.total
                media_gols_contra = resp[20].Marrocos.goals.against.average.total
                clean_sheets = resp[20].Marrocos.clean_sheet.total
                penaltis = resp[20].Marrocos.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[20].Marrocos[i].player.name,resp2[20].Marrocos[i].player.photo])
                }

            }
            else if (nomeSelecao == "México"){
                nome = resp[21].Mexico.team.name
                bandeira = resp[21].Mexico.team.logo
                vitorias = resp[21].Mexico.fixtures.wins.total
                empates = resp[21].Mexico.fixtures.draws.total
                derrotas = resp[21].Mexico.fixtures.loses.total
                gols_pro = resp[21].Mexico.goals.for.total.total
                media_gols_pro = resp[21].Mexico.goals.for.average.total
                media_gols_contra = resp[21].Mexico.goals.against.average.total
                clean_sheets = resp[21].Mexico.clean_sheet.total
                penaltis = resp[21].Mexico.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[21].Mexico[i].player.name,resp2[21].Mexico[i].player.photo])
                }

            }
            else if (nomeSelecao == "País de Gales"){
                nome = resp[22].Pais_de_Gales.team.name
                bandeira = resp[22].Pais_de_Gales.team.logo
                vitorias = resp[22].Pais_de_Gales.fixtures.wins.total
                empates = resp[22].Pais_de_Gales.fixtures.draws.total
                derrotas = resp[22].Pais_de_Gales.fixtures.loses.total
                gols_pro = resp[22].Pais_de_Gales.goals.for.total.total
                media_gols_pro = resp[22].Pais_de_Gales.goals.for.average.total
                media_gols_contra = resp[22].Pais_de_Gales.goals.against.average.total
                clean_sheets = resp[22].Pais_de_Gales.clean_sheet.total
                penaltis = resp[22].Pais_de_Gales.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[22].Pais_de_Gales[i].player.name,resp2[22].Pais_de_Gales[i].player.photo])
                }

            }
            else if (nomeSelecao == "Polônia"){
                nome = resp[23].Polonia.team.name
                bandeira = resp[23].Polonia.team.logo
                vitorias = resp[23].Polonia.fixtures.wins.total
                empates = resp[23].Polonia.fixtures.draws.total
                derrotas = resp[23].Polonia.fixtures.loses.total
                gols_pro = resp[23].Polonia.goals.for.total.total
                media_gols_pro = resp[23].Polonia.goals.for.average.total
                media_gols_contra = resp[23].Polonia.goals.against.average.total
                clean_sheets = resp[23].Polonia.clean_sheet.total
                penaltis = resp[23].Polonia.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[23].Polonia[i].player.name,resp2[23].Polonia[i].player.photo])
                }

            }
            else if (nomeSelecao == "Portugal"){
                nome = resp[24].Portugal.team.name
                bandeira = resp[24].Portugal.team.logo
                vitorias = resp[24].Portugal.fixtures.wins.total
                empates = resp[24].Portugal.fixtures.draws.total
                derrotas = resp[24].Portugal.fixtures.loses.total
                gols_pro = resp[24].Portugal.goals.for.total.total
                media_gols_pro = resp[24].Portugal.goals.for.average.total
                media_gols_contra = resp[24].Portugal.goals.against.average.total
                clean_sheets = resp[24].Portugal.clean_sheet.total
                penaltis = resp[24].Portugal.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[24].Portugal[i].player.name,resp2[24].Portugal[i].player.photo])
                }

            }
            else if (nomeSelecao == "Catar"){
                nome = resp[25].Qatar.team.name
                bandeira = resp[25].Qatar.team.logo
                vitorias = resp[25].Qatar.fixtures.wins.total
                empates = resp[25].Qatar.fixtures.draws.total
                derrotas = resp[25].Qatar.fixtures.loses.total
                gols_pro = resp[25].Qatar.goals.for.total.total
                media_gols_pro = resp[25].Qatar.goals.for.average.total
                media_gols_contra = resp[25].Qatar.goals.against.average.total
                clean_sheets = resp[25].Qatar.clean_sheet.total
                penaltis = resp[25].Qatar.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[25].Qatar[i].player.name,resp2[25].Qatar[i].player.photo])
                }

            }
            else if (nomeSelecao == "Senegal"){
                nome = resp[26].Senegal.team.name
                bandeira = resp[26].Senegal.team.logo
                vitorias = resp[26].Senegal.fixtures.wins.total
                empates = resp[26].Senegal.fixtures.draws.total
                derrotas = resp[26].Senegal.fixtures.loses.total
                gols_pro = resp[26].Senegal.goals.for.total.total
                media_gols_pro = resp[26].Senegal.goals.for.average.total
                media_gols_contra = resp[26].Senegal.goals.against.average.total
                clean_sheets = resp[26].Senegal.clean_sheet.total
                penaltis = resp[26].Senegal.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[26].Senegal[i].player.name,resp2[26].Senegal[i].player.photo])
                }

            }
            else if (nomeSelecao == "Sérvia"){
                nome = resp[27].Servia.team.name
                bandeira = resp[27].Servia.team.logo
                vitorias = resp[27].Servia.fixtures.wins.total
                empates = resp[27].Servia.fixtures.draws.total
                derrotas = resp[27].Servia.fixtures.loses.total
                gols_pro = resp[27].Servia.goals.for.total.total
                media_gols_pro = resp[27].Servia.goals.for.average.total
                media_gols_contra = resp[27].Servia.goals.against.average.total
                clean_sheets = resp[27].Servia.clean_sheet.total
                penaltis = resp[27].Servia.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[27].Servia[i].player.name,resp2[27].Servia[i].player.photo])
                }

            }
            else if (nomeSelecao == "Suiça"){
                nome = resp[28].Suica.team.name
                bandeira = resp[28].Suica.team.logo
                vitorias = resp[28].Suica.fixtures.wins.total
                empates = resp[28].Suica.fixtures.draws.total
                derrotas = resp[28].Suica.fixtures.loses.total
                gols_pro = resp[28].Suica.goals.for.total.total
                media_gols_pro = resp[28].Suica.goals.for.average.total
                media_gols_contra = resp[28].Suica.goals.against.average.total
                clean_sheets = resp[28].Suica.clean_sheet.total
                penaltis = resp[28].Suica.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[28].Suica[i].player.name,resp2[28].Suica[i].player.photo])
                }

            }
            else if (nomeSelecao == "Tunísia"){
                nome = resp[29].Tunisia.team.name
                bandeira = resp[29].Tunisia.team.logo
                vitorias = resp[29].Tunisia.fixtures.wins.total
                empates = resp[29].Tunisia.fixtures.draws.total
                derrotas = resp[29].Tunisia.fixtures.loses.total
                gols_pro = resp[29].Tunisia.goals.for.total.total
                media_gols_pro = resp[29].Tunisia.goals.for.average.total
                media_gols_contra = resp[29].Tunisia.goals.against.average.total
                clean_sheets = resp[29].Tunisia.clean_sheet.total
                penaltis = resp[29].Tunisia.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[29].Tunisia[i].player.name,resp2[29].Tunisia[i].player.photo])
                }

            }
            else if (nomeSelecao == "Uruguai"){
                nome = resp[30].Uruguai.team.name
                bandeira = resp[30].Uruguai.team.logo
                vitorias = resp[30].Uruguai.fixtures.wins.total
                empates = resp[30].Uruguai.fixtures.draws.total
                derrotas = resp[30].Uruguai.fixtures.loses.total
                gols_pro = resp[30].Uruguai.goals.for.total.total
                media_gols_pro = resp[30].Uruguai.goals.for.average.total
                media_gols_contra = resp[30].Uruguai.goals.against.average.total
                clean_sheets = resp[30].Uruguai.clean_sheet.total
                penaltis = resp[30].Uruguai.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[30].Uruguai[i].player.name,resp2[30].Uruguai[i].player.photo])
                }

            }
            else if (nomeSelecao == "Gana"){
                nome = resp[31].Gana.team.name
                bandeira = resp[31].Gana.team.logo
                vitorias = resp[31].Gana.fixtures.wins.total
                empates = resp[31].Gana.fixtures.draws.total
                derrotas = resp[31].Gana.fixtures.loses.total
                gols_pro = resp[31].Gana.goals.for.total.total
                media_gols_pro = resp[31].Gana.goals.for.average.total
                media_gols_contra = resp[31].Gana.goals.against.average.total
                clean_sheets = resp[31].Gana.clean_sheet.total
                penaltis = resp[31].Gana.penalty.scored.total
                for (let i = 0; i < 20; i++){
                    lista_jogadores.push([resp2[31].Gana[i].player.name,resp2[31].Gana[i].player.photo])
                }

            }
            







        
        listaSelecoes.push(nome, bandeira, vitorias, empates, derrotas, gols_pro, media_gols_pro, media_gols_contra, clean_sheets, penaltis)
        console.log(lista_jogadores)

        const idNome = document.getElementById("nomeSelecao")
        idNome.innerHTML = listaSelecoes[0]
        const idBandeira = document.getElementById("bandeiraSelecao")
        idBandeira.src = listaSelecoes[1]
        const idVitorias = document.getElementById("vitoriasSelecao")
        idVitorias.innerHTML = listaSelecoes[2]
        const idEmpates = document.getElementById("empatesSelecao")
        idEmpates.innerHTML = listaSelecoes[3]
        const idDerrotas = document.getElementById("derrotasSelecao")
        idDerrotas.innerHTML = listaSelecoes[4]
        const idGolsPro = document.getElementById("golsSelecao")
        idGolsPro.innerHTML = listaSelecoes[5]
        const idMediaGolsPro = document.getElementById("mediaGolsMSelecao")
        idMediaGolsPro.innerHTML = listaSelecoes[6]
        const idMediaGolsContra = document.getElementById("mediaGolsFSelecao")
        idMediaGolsContra.innerHTML = listaSelecoes[7]
        const idCleanSheets = document.getElementById("cleanSheetsSelecao")
        idCleanSheets.innerHTML = listaSelecoes[8]
        const idPenaltis = document.getElementById("penaltisSelecao")
        idPenaltis.innerHTML = listaSelecoes[9]


        for (let index = 0; index < 19; index++) {
            let idFoto = String("jogador"+String(index));
            let idNome = String("nome"+String(index));
            console.log(idNome)
            var jogadorFoto = document.getElementById(idFoto)
            var jogadorNome = document.getElementById(idNome)
            jogadorNome.innerHTML = lista_jogadores[index][0]
            jogadorFoto.src = String(lista_jogadores[index][1])
            
        }
        

    }   
    catch(e){
        console.log(e)
    }

        
    
}