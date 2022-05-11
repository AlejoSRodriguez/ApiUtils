const express = require("express");
const app = express();

app.use('/api', (req, res) => res.send({"hola": "chau"}))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('SERVER UP'))