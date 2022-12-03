function habilitarForum(){
    const telaBloqueio = document.querySelector('.tela_bloqueio')
    const telaForum = document.querySelector('.tela_forum')
    telaBloqueio.classList.remove('d-block')
    telaBloqueio.classList.add('d-none')
    telaForum.classList.remove('d-none')
    telaForum.classList.add('d-block')
}

async function postarPost(usuario, texto, categoria){
    const protocolo = "http"
    const host = "localhost:3000"
    const forumEndpoint = "/forum"
    const URL = `${protocolo}://${host}${forumEndpoint}`
    let usuarioPost = String(usuario)
    let textoPost = String(texto)
    let categoriaPost = String(categoria)

    if (usuarioPost && textoPost && categoriaPost){
        let postagens = document.querySelector('.postagens')
        let postagem = document.createElement('div')
        postagem.classList.add('postagem')
        let usuarioCat = document.createElement('h6')
        usuarioCat.classList.add('usuarioCat')
        let textoPostagem = document.createElement('p')
        textoPostagem.classList.add('textoPost')
        postagem.appendChild(usuarioCat)
        postagem.appendChild(textoPostagem)
        postagens.appendChild(postagem)
        usuarioCat.innerHTML = `${usuarioPost} · ${categoriaPost}`
        textoPostagem.innerHTML = textoPost
        
    }
    else{
        console.log("erro")
    }

}

async function obterPost() {
    const protocolo = "http"
    const host = "localhost:3000"
    const forumEndpoint = "/forum"
    const URL = `${protocolo}://${host}${forumEndpoint}`
    const posts = (await axios.get(URL)).data
    let postagens = document.querySelector('.postagens')
    for (let post of posts){
        let postagem = document.createElement('div')
        postagem.classList.add('postagem')
        let usuarioCat = document.createElement('h6')
        usuarioCat.classList.add('usuarioCat')
        let textoPost = document.createElement('p')
        textoPost.classList.add('textoPost')
        postagem.appendChild(usuarioCat)
        postagem.appendChild(textoPost)
        postagens.appendChild(postagem)
        usuarioCat.innerHTML = `${post.usuario} · ${post.categoria}`
        textoPost.innerHTML = post.texto
    }
  }

async function fazerPost(){
    const protocolo = "http"
    const host = "localhost:3000"
    const forumEndpoint = "/forum"
    const usuario = String(document.querySelector('#cadastroLink').innerHTML)
    const texto = document.querySelector('#publicacao').value
    const categoria = document.querySelector('#categoria').value
    // console.log(usuario)
    try{
        if (texto != "" && categoria != ""){
            const URL = `${protocolo}://${host}${forumEndpoint}`
            const resp = (axios.post(URL, {texto, usuario,categoria})).data
            texto.value = ""
            exibirAlerta('.alert-modal-forum', 'Postagem feita com sucesso!', ['alert-success','show'], ['d-none', 'alert-danger'],3000)
            
            postarPost(usuario, texto, categoria)
        }
        else{
            exibirAlerta('.alert-modal-forum', 'Preencha todos os campos!', ['alert-danger','show'], ['d-none'], 3000)
        }
    }
    catch(e){
        exibirAlerta('.alert-modal-forum', 'Erro ao fazer postagem!', ['alert-danger','show'], ['d-none'], 3000)
        console.log(e)
    }

        
}