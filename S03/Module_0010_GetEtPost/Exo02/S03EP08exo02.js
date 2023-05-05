const express = require("express");

const randomNumberMinMax = require("./modules/randomNumberMinMax");

const errorHandler500 = require("./middlewares/errorHandler500");
const pageNotFound404 = require("./middlewares/pageNotFound404");

const app = express();

let random = randomNumberMinMax(1, 10);

let result = "";

let trials = 0;

let sentTrials = 0;

app.set("view engine", "ejs");

// app.use(express.static("public"));

// Permet de recuperer les valeurs des requetes POST
app.use(express.urlencoded({ extended: true }));

// Permet de recuperer les valeurs JSON des requetes POST
// app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {});
});

// GET : permet de parametrer la route vers la page login
app.get("/fourchette", (req, res) => {
  res.render("fourchette", { result, sentTrials });
});

// POST
app.post("/fourchette", (req, res) => {
  trials++;
  let sentTrials = trials;
  const userChoice = req.body.number;
  if (userChoice < random) {
    result = "C'est plus !";
  } else if (userChoice == random) {
    trials = 0;
    random = random = randomNumberMinMax(1, 10);
    result =
      "C'est gagne ! Vous pouvez rejouer en entrant en nouveau nombre.";
  } else {
    result = "C'est moins !";
  }
  res.render("fourchette", { result, sentTrials });
});

// Error handling middleware
app.use(errorHandler500);

app.use(pageNotFound404);

app.listen(3000);
