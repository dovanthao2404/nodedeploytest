const express = require('express')
const routerCustomer = require('./src/controllers/customer.controller')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/customer", routerCustomer)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})