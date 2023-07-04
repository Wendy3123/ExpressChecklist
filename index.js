// Require needed modules
const express = require('express')

//initialize the app object
const app = express()

app.get('/',function(req,res){
    //this gets sent to the client
    //(your web browser most likely!!!)
    res.send('HI ITS WENDYS PAGE')
})

app.get('/second',function(req,res){        //pass a second route
    //this gets sent to the client
    //(your web browser most likely!!!)
    res.send('HI ITS WENDYS SECOND PAGE')
})
// Listen for connections.
app.listen(3000, function () {
    console.log('I am awake!')
})
