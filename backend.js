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
    await mongoose.connect('mongodb+srv://MateusCMartins:@copastats.knia4lw.mongodb.net/?retryWrites=true&w=majority')
  }

//Cadastro

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

//Fórum

const forumSchema = mongoose.Schema({
    texto: {type: String, required: true},
    categoria: {type: String, required: true},
    usuario: {type: String, required: true}
  })
const Forum = mongoose.model("Forum", forumSchema)

app.get('/forum', async (req, res) => {
  const posts = await Forum.find()
  res.json(posts)
})


app.post('/forum', async (req,res) =>{
  try{
    const texto = req.body.texto
    const categoria = req.body.categoria
    const usuario = req.body.usuario
    const forum = new Forum({texto, categoria, usuario})
    const respMongo = await forum.save()
    console.log(respMongo)
    const postagem = await Forum.find()
    res.json(postagem)

  }
  catch(error){
    console.log(error)
    res.status(409).end()
  }
})


//Jogadores	
const jogadorSchema = mongoose.Schema({
    Selecao:[
      {
        player:{
          name: {type: String, required: true},
          age: {type: Number, required: true},
          nationality: {type: String, required: true},
          height: {type: String, required: true},
          weight: {type: String, required: true},
          photo: {type: String, required: true},
        },
        statistics: {
          shots: {
            total: {type: Number, required: true}
          },
          goals: {
            total: {type: Number, required: true},
            assists: {type: Number, required: true}
          },
          passes:{
            total: {type: Number, required: true},
          },
          dribbles:{
            attempts: {type: Number, required: true},
          },
          fouls:{
            drawn: {type: Number, required: true},
            committed: {type: Number, required: true}
          },
          cards:{
            yellow: {type: Number, required: true},
            red: {type: Number, required: true},
          }
        }
      }
    ]
  })

const Jogador = mongoose.model("Jogadore", jogadorSchema)
app.get('/jogadores', async (req,res) =>{
    const jogadores = await Jogador.find()
    res.json(jogadores)
})


//Classificações
const classificacaoSchema = mongoose.Schema({
      standings:[
        {
          team:{
            name: {type: String, required: true},
            logo: {type: String, required: true},
          },
          points: {type: Number, required: true},
          goalsDiff: {type: Number, required: true},
          group: {type: String, required: true},
          all:{
            played: {type: Number, required: true},
            win: {type: Number, required: true},
            draw: {type: Number, required: true},
            lose: {type: Number, required: true},
            goals:{
              for: {type: Number, required: true},
              against: {type: Number, required: true}
            }
          }
        }
      ]
    })
const Classificacao = mongoose.model("Classificacoes", classificacaoSchema)
app.get('/classificacoes', async (req,res) =>{
    const classificacoes = await Classificacao.find()
    res.json(classificacoes)
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
