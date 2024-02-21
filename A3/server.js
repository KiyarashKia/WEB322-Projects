const legoData = require("./modules/legoSets");


const express = require('express');
const path = require('path');
const app = express();
const HTTP_PORT = process.env.PORT || 4002;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
  });

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
  });

app.get('/lego/sets', (req, res) => {
  console.log(req.query.theme);
  if (req.query.theme){
    legoData.getSetsByTheme(req.query.theme)
    .then(themeSets => {
      res.send(themeSets);
    })
    .catch(error => {
        console.error(error);
        res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
    });
  }
  else {
    legoData.getAllSets()
    .then(sets => {
        res.send(sets);
    })
    .catch(error => {
        console.error(error);
        res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
    });
  }
});

app.get('/lego/sets/:set_num', (req, res) => {
  legoData.getSetByNum(req.params.set_num)
  .then(set => {
    res.send(set);
  })
  .catch(error => {
      console.error(error);
      res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
  });
});

app.all('*', (req, res) => { 
  res.status(404).sendFile(path.join(__dirname, '/views/404.html')); 
}); 


  app.listen(HTTP_PORT, () => {
    legoData.initialize();
    console.log(`server listening on: ${HTTP_PORT}`)
});