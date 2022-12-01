const protocolo = "http"
const host = "localhost"
const loginEndpoint = "/signup"


function ShowDiv() {
    document.getElementById("jogadores1").style.display = "block";
    document.getElementById("jogadores2").style.display = "block";
    document.getElementById("jogadores3").style.display = "block";
    document.getElementById("jogadores4").style.display = "block";
    document.getElementById("jogadores5").style.display = "block";
}
function ShowSelecao(){
    document.getElementById("tecnico").style.display = "block";
    document.getElementById("estatisticas_selecao").style.display = "block";
    document.getElementById("selecao_intro").style.display = "block";
    document.getElementById("proximo_jogo").style.display = "block";
    document.getElementById("jogadores_selecao").style.display = "block";
}
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))






async function cadastrarUsuario(){
    const username = document.querySelector("#usuarioCadastro").value
    const senha = document.querySelector("#senhaCadastro").value
    if (username && senha){
        try{
            const URL = `${protocolo}://${host}${loginEndpoint}`
            await axios.post(URL, {login: username, password: senha})
            username.value = ""
            senha.value = ""
            exibirAlerta('#alertaModalCadastro', 'Usuário cadastrado com sucesso! Faça login para acessar o fórum!', ['alert-success'], ['alert-danger'], 3000)
            ocultarModal('#modalCadastro', 3000)
        }
        catch(e){
            exibirAlerta('#alertaModalCadastro', 'Erro ao cadastrar usuário', ['alert-danger'], ['alert-success'], 3000)
        }
    }
}