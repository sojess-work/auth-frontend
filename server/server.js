const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;


app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/authapp-frontend/dist/auth_frontend/"));


app.get('/*', (req,res) => {
  res.sendFile(process.cwd()+"/authapp-frontend/dist/authapp-frontend/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
