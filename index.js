const express = require("express")
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get("/api" , (req , res) => {
    res.send("ok");
})

app.listen(8080 , () => {
    console.log("server is running..")
})