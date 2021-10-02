const express = require("express");
const html = require("./html.js")
const bodyParser = express.urlencoded({ extended: false });
const client = express();

let obj = new Map()

obj.set('value', 0);

// function buildObj () {
//     obj.value += 1;
// }

client.get('/', (request, response) => {
    response.send(html(obj.get('value')));
})

client.post('/', bodyParser, (request, response) => {
    obj.set('value', obj.get('value')+1);
    console.log(obj.get('value'));
    response.redirect('/');
})

const PORT = 3000;
client.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));