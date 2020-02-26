const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client/dist'))

app.listen(port, () => console.log(`listening on port ${port}!`))
