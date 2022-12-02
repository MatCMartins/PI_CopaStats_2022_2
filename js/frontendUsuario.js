const protocolo = "http"
const host = "localhost:3000"
const cadastroEndpoint = "/signup"
const loginEndpoint = "/login"

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
    const username = document.querySelector('#usuarioCadastro')
    const senha = document.querySelector('#senhaCadastro')
    const login = username.value
    const password = senha.value
    if (login && password){
        try{
            const URL = `${protocolo}://${host}${cadastroEndpoint}`
            await axios.post(URL, {login, password})
            username.value = ""
            senha.value = ""
            exibirAlerta('.alert-modal-cadastro', 'Usuário cadastrado com sucesso! Faça login para acessar o fórum!', ['alert-success','show'], ['d-none', 'alert-danger'], 3000)
            ocultarModal('#modalCadastro', 1000)      
        }
        catch(e){
            exibirAlerta('.alert-modal-cadastro', 'Erro ao cadastrar usuário', ['alert-danger','show'], ['d-none'], 1000)    
        }
    }
    else{
        exibirAlerta('.alert-modal-cadastro', 'Preencha todos os campos', ['alert-danger','show'], ['d-none'], 1000)
    }   
        

}

async function login(){
    const username = document.querySelector('#usuarioLogin')
    const senha = document.querySelector('#senhaLogin')
    const login = username.value
    const password = senha.value
    const cadastroLink = document.querySelector('#cadastroLink')
    const loginLink = document.querySelector('#loginLink')
    let logado = false
    if ((login && password)){
        try{
            logado = true
            const URL = `${protocolo}://${host}${loginEndpoint}`
            const resp = await axios.post(URL, {login, password
            })
            username.value = ""
            senha.value = ""
            exibirAlerta('.alert-modal-login', 'Login efetuado com sucesso!', ['alert-success','show'], ['d-none', 'alert-danger'], 1000)
            ocultarModal('#modalLogin', 1000)
            cadastroLink.innerHTML = login
            loginLink.innerHTML = "Logout"
            cadastroLink.classList.add('disabled')
            console.log(resp.data)
            
            

        }
        catch(e){
            exibirAlerta('.alert-modal-login', 'Erro ao fazer login', ['alert-danger','show'], ['d-none'], 1000)
            console.log(e)
        }
    
    }
    else{
        exibirAlerta('.alert-modal-login', 'Preencha todos os campos', ['alert-danger','show'], ['d-none'], 1000)
        console.log(login)
        console.log(password)
    }
    if (logado==true){
        habilitarForum()
    }
    return login
}

// async function logoff(){
//     const cadastroLink = document.querySelector('#loginLink')
//     const loginLink = document.querySelector('#loginLink')
//     if (loginLink.innerHTML == "Logout"){
//         resp.data.delete()
//         loginLink.innerHTML = "Login"
//         cadastroLink.innerHTML = "Cadastro"
//         cadastroLink.classList.remove('disabled')
//         loginLink.innerHTML = "Login"
//     }
// }

function exibirAlerta(seletor, conteudo, classesAAdicionar, classeARemover, timeout){
    let alert = document.querySelector(seletor)
    alert.innerHTML = conteudo
    alert.classList.add(...classesAAdicionar)
    alert.classList.remove(...classeARemover)
    setTimeout(() =>{
      alert.classList.remove('show')
      alert.classList.add('d-none')
    },timeout)
  }
const ocultarModal = (seletor, timeout) => {
    setTimeout(() => {
      const modal = bootstrap.Modal.getInstance(document.querySelector(seletor))
      modal.hide()
    },timeout)
  }
