function habilitarForum(){
    const telaBloqueio = document.querySelector('.tela_bloqueio')
    const telaForum = document.querySelector('.tela_forum')
    telaBloqueio.classList.remove('d-block')
    telaBloqueio.classList.add('d-none')
    telaForum.classList.remove('d-none')
    telaForum.classList.add('d-block')
}