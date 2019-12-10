const cores = require('colors')
const express = require('express')
const bodyparser = require('body-parser')
const app = express() 

app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json())
 
app.get('/usuario', function (req, res) {
  res.json('Get usuario')
})

app.post('/usuario', function (req, res) {

    let body = req.body
    if (body.nome === undefined) { 

      res.status(400).json({
        mensagem : 'O nome é nescessário' ,
      })  

    }
    else {
      
    res.json({
      body
    })
    }
    
  })

app.put('/usuario/:id', function (req, res) {
    
    let id = req.params.id
    res.json({
      id ,
      nome : 'Emanuel'
    })
  })

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
  })
    
 
app.listen(3000 , () => console.log('Escutando a porta 3000'.green))