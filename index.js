const express = require('express')
const routerCustomer = require('./src/controllers/customer.controller')
const { MongoClient } = require('mongodb');
const app = express()
const port = 3000

require("./src/configs/cloudinary.js")

const mongoURI = 'mongodb+srv://dovanthao:oUXaTqsI4peq5Qh2@cluster0.srucgrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(mongoURI);
client.connect().then(() => {
    console.log("connect thanh cong");
});

app.use(express.json());

app.get('/', async (req, res) => {
    const client = new MongoClient(mongoURI);
    await client.connect();

    const database = client.db('sample_mflix');
    const collection = database.collection('users');
    const cursor = collection.find({});
    const results = await cursor.toArray();
    res.send(results)
})

app.use("/customer", routerCustomer)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})