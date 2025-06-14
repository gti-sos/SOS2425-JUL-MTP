const express = require('express');
const app = express();
const PORT = process.env.port || 16078;

app.get('/hello', (request, response)=> {
    response.send('Hello World!');
});

app.use("/", express.static('./public')); //static files

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
}); //listen es asincrono de modo que tarda un pelin