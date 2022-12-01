const bcrypt = require('bcrypt')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')




async function conectarAoMongoDB(){
    await mongoose.connect('mongodb+srv://MateusCMartins:<password>@copastats.knia4lw.mongodb.net/?retryWrites=true&w=majority')
  }

const usuarioSchema = mongoose.Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  })
usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuario", usuarioSchema)


app.post('/signup', async (req,res) =>{
    try{
        const login = req.body.login
        const password = req.body.password
        const senhaCriptografada = await bcrypt.hash(password, 10)
        const usuario = new Usuario({login, password: senhaCriptografada})
    
        const respMongo = await usuario.save()
        console.log(respMongo)
        res.status(201).end()
      }
      catch (error){
        console.log(error)
        res.status(409).end()
      }
  })


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