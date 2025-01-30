const express = require("express")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

const data = [
    { name: "Lena", age: 22 },
    { name: "Max", age: 19 },
    { name: "Sophie", age: 25 },
    { name: "Tom", age: 18 },
    { name: "Emma", age: 21 },
    { name: "Felix", age: 20 },
    { name: "Clara", age: 23 },
    { name: "Jonas", age: 26 },
    { name: "Mia", age: 24 },
    { name: "Noah", age: 27 }
];

app.get("/people", (req, res) => {
    res.send(data);
})

app.get("/people/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.send(data[id]);
})

app.post("/people", (req, res) => {
    data.push(req.body);
    res.send(req.body);
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})