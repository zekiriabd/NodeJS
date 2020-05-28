import express from 'express';
const app = express();

app.get('/getmessage', (req, res) => {
    res.json("Hello World");
});


app.listen(4000,()=> { console.log('http://localhost:4000/getmessage')}); 