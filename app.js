//require the Express npm Package
const express = require('express');


//Express app
//Creating our server named app
const app = express();

//Make everything inside public available

app.use(express.static('public'));


//Creating a 'GET' Route
app.get('/home', (request, response, next) =>{
    response.sendFile(__dirname + '/views/home.html');
})


//create a Second Route

app.get('/about', (request, response)=>{

response.sendFile(__dirname + '/views/about.html')
})

//create a third Route

app.get('/works', (request, response)=>{

response.sendFile(__dirname + '/views/works.html')
})
//create a fourth Route

app.get('/gallery', (request, response)=>{

response.sendFile(__dirname + '/views/gallery.html')
})

//Start the server
app.listen(3000, ()=>console.log('App is listening on PORT 3000'));

