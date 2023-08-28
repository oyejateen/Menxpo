const express = require('express')
const path = require('path');
const fs = require('fs');
const app = express()
const port = 0000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/public", express.static(path.resolve(__dirname, 'public')));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.get("/codes",function (req, res) {
  res.sendFile(__dirname + "/public/index.html")
})
app.post("/codes",function (req, res) {
  console.log(req.body)
const name = req.body.name;
  const email = req.body.email;
  const github = req.body.github
  const message = req.body.broCode;

  const data = {
    name: name,
    email: email,
    github: github,
    message: message
  };
  fs.appendFile("./public/codes.json", JSON.stringify(data), function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    res.status(200).redirect('/');

});
});

app.listen(port, () => {
  console.log('----------------------------------');
  console.log('Server Has Been Started on:', port);
  console.log(`
  __  __           __  __            
 |  \/  | ___ _ __ \ \/ /_ __   ___  
 | |\/| |/ _ \ '_ \ \  /| '_ \ / _ \ 
 | |  | |  __/ | | |/  \| |_) | (_) |
 |_|  |_|\___|_| |_/_/\_\ .__/ \___/ 
                        |_|          
    `)
  console.log('----------------------------------');
})