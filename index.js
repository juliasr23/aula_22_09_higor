const express = require('express')
const app = express()
const port = 3000

const users = require('./users')
app.use('/users',users)

const path = require('path')


//app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')
//ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

app.get('/users/add',(req,res)=>{
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save',(req,res)=>{
  console.log(req.body)
  const name =req.body.name
  const age = req.body.age

  console.log(name)
  console.log(age)
})

// antes do , pois ela deve ser a ultima
app.get('/users/:id', (req, res) => {
  //obtendo o parametro passado req.params.id
  console.log(`Carregando usuário: ${req.params.id}`)
  res.sendFile(`${basePath}/users.html`)
})

app.get('/blog', (req, res) => {
 const nome = req.query['nome']
  if (nome){
    console.log(`Carregando usuário: ${nome}`)
    res.send(`<h1>${nome}</h1>`)
  }
  else{
    res.send(`<h1>Você não passou nome</h1>`)
  }
})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
