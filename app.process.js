const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const htmldir = "/src/html/";

app.get('/', (req,res) => res.sendFile(path.join(__dirname + htmldir + 'homepage.index.html')));
app.get('/timeline', (req,res) => res.sendFile(path.join(__dirname + htmldir + 'timeline.index.html')))
app.use(express.static(__dirname + '/src'));
app.listen(port, () => console.log(`App listening on port ${port}!`));