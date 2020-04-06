const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())

const port = process.env.PORT || 3020;
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Sucessfully wroking..')
});

app.post('/webhook', async(req, res) => {
    console.log('webhook_api_called');
    if(!req.body) res.sendStatus(400)
    res.setHeader('Content-Type', 'application/json')
    const { queryResult } = req.body
    const intent = queryResult.intent.displayName;
    const parameters = queryResult.parameters;
    console.log('intent', intent)
    if(intent == 'doj'){
    const resText = "Your date of joining is  03-06-2017"
    const responseObj = {
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages":[{"text": { "text":[resText] } }],
        "source":""
    }
    console.log('responseObj', responseObj)
    return res.json(responseObj);
}
return res.sendStatus(400)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});


    // "start": "GOOGLE_APPLICATION_CREDENTIALS=./bikeshopsample-ca7f0-fa609d83ca06.json node app.js",
