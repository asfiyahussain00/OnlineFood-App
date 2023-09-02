const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 9000
const path = require('path')

const clientpath = path.join(__dirname,'./client/dist')
app.use('/', express.static(clientpath))

app.use(cors())
app.use(express.json())


 app.use('/api', require('./api/User/Router'))
 app.use('/api', require('./api/Category/Router'))
 app.use('/api', require('./api/Restuarent/Router'))
 app.use('/api', require('./api/Items/Router'))
 app.use('/api', require('./api/orders/Router'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}` )
})