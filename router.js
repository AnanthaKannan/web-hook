const express = require("express");
const router = express.Router();
const fetch = require('./fetch')

router.get('/', function (req, res) {
    console.log('api called');
    res.send('Sucessfully wroking..')
});


router.post('/webhook', async(req, res) => {
    console.log('webhook_api_called');
    if(!req.body) res.sendStatus(400)
    res.setHeader('Content-Type', 'application/json')
    const { queryResult } = req.body
    const intent = queryResult.intent.displayName;
    const parameters = queryResult.parameters;
    console.log('intent', intent)
    let resText = null;
    if(intent == 'doj'){
        resText = fetch.doj()
    }
    else{
        res.sendStatus(400);
    }

    const responseObj = {
        "fulfillmentText": resText,
        "fulfillmentMessages":[{"text": { "text":[resText] } }],
        "source":""
    }
    console.log('responseObj', responseObj)
    return res.json(responseObj);
})

module.exports = router;