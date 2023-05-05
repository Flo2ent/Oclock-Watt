const express = require("express");

const errorHandler500 = require("./middlewares/errorHandler500");
const pageNotFound404 = require("./middlewares/pageNotFound404");

const app = express();

let guests = [];

let guestId = 1;

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
app.get("/manage", (req, res) => {
  res.render("manage", { guests });
});

// POST
app.post("/manage", (req, res) => {
  const person = req.body.firstName;
  const id = req.body.removePersonButton;
  if (person != "") {
    guests.push({
      firstName: person,
      id: guestId++,
    });
  }
  if (id != null) {
    guests.find;
    //Recuperation de l'objet x (la personne) qui a comme ID celui passé en paramètre
    const personToRemove = guests.findIndex((x) => x.id == id);
    console.log(personToRemove);
    guests.splice(personToRemove, 1);
  }
  res.render("manage", { guests });
});

// Error handling middleware
app.use(errorHandler500);

app.use(pageNotFound404);

app.listen(3000);
