const legoData = require("./modules/legoSets");


const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 4002;


app.get('/', (req, res) => {
    res.send('Assignment 2:  Kiarash Kia - 108688235');
  });

app.get('/lego/sets', (req, res) => {
    legoData.getAllSets()
    .then(sets => {
        res.send(sets);
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Internal Server Error,");
    });
  });

app.get('/lego/sets/num-demo', (req, res) => {
    legoData.getSetByNum('71028-2')
    .then(set => {
      res.send(set);
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Internal Server Error");
    });
  });

app.get('/lego/sets/theme-demo', (req, res) => {
    legoData.getSetsByTheme('min')
    .then(data => {
      res.send(data);
    })
    .catch(error => {
        console.error(error);
        res.status(500).send("Internal Server Error");
    });
  });


  app.listen(HTTP_PORT, () => {
    legoData.initialize();
    console.log(`server listening on: ${HTTP_PORT}`)
});