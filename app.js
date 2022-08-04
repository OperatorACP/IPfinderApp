const express = require('express');
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.listen(port,  () => {
    console.log("Servidor corriendo en el puerto " + port);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});





