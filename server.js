const express = require('express')
const fs = require('fs')
const app = express()


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes/apiroutes'))
app.use(require('./routes/htmlroutes'))

app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`)
})

const PORT = process.env.PORT || 3000