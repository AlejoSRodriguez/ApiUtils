const express = require("express");
const cors = require('cors')
const app = express();
const router = require('./routes')
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!\n" + err);
  });

app.listen(PORT, () => console.log('SERVER UP'))