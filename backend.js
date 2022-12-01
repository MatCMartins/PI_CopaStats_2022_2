const bcrypt = require('bcrypt')
const exp = require('constants')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const app = express()

app.use(express.json())
app.use(cors())


async function conectarAoMongoDB(){
    await mongoose.connect('mongodb+srv://MateusCMartins:KJM3HkB7QLpIV3fN@copastats.knia4lw.mongodb.net/?retryWrites=true&w=majority')
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

app.post('/login', async (req,res) =>{
    const {login, password} = req.body
    const usuario = await Usuario.findOne({login})
    if (!usuario){
        res.status(401).end()
    }
    const senhaCorreta = await bcrypt.compare(password, usuario.password)
    if (!senhaCorreta){
        res.status(401).end()
    }
    const token = jwt.sign({login}, 'segredo',{expiresIn: '1h'})
    res.status(200).send({token})
    
    
})



app.listen(3000, () => {
    try{
      conectarAoMongoDB()
      console.log('Servidor em funcionamento...')
    }
    catch (e){
      console.log('Erro', e)
    }
  })