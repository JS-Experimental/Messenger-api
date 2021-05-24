import bodyParser from "body-parser";
import express from 'express';
import {createNewMessage, getAllMessages} from "./services/MessageService";
const app = express()
const port = 4000

app.use(bodyParser.json())

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH')
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/message', (req,res) => {
    createNewMessage(req.body.messageText)
    res.send(req.body);
})

app.get('/api/messages', async (req,res) => {
    // const messages =
    res.send({
        messages: await getAllMessages()
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
