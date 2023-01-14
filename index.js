// Importing
const express = require('express');
const session = require("express-session");
const app = express();
const chalk = require('chalk');
const ejs = require("ejs");
const config = require("./config.json");
const port = config.website.port
const domain = config.website.domain;

// Exporting Module's
module.exports.app = app;


// Setting View Point
app.enable("trust proxy")
app.set('views',"./Pages");
app.set('view engine','ejs');

app.locals.domain = config.website.domain.split("//")[1];

app.use("/assets", express.static("./assets"))

app.use(
  session({
    secret: config.website.secret,
    resave: false,
    saveUninitialized: false
  })
);





  // Website Pages

app.get("/", (req, res) => {
    res.render("index.ejs",
    {config: config});
  });

app.get("/privacy", (req, res) => {
    res.render("privacy.ejs", {config: config});
  });

app.get("/terms", (req, res) => {
    res.render("terms.ejs", {config: config});
  });

app.get("/status", (req, res) => {
    res.render("status.ejs", {config: config});
  });

app.get("/about", (req, res) => {
    res.render("about.ejs", {config: config});
  });

app.get("/services", (req, res) => {
    res.render("services.ejs", {config: config});
  });

  app.get("/", (req, res) => {
    res.render("header.ejs", {config: config});
  });
  app.get("/", (req, res) => {
    res.render("footer.ejs", {config: config});
  });

app.get("/support", (req, res) => {
    res.redirect(config.support);
  });

app.get("/server", (req, res) => {
    res.redirect(config.support);
  });


  // Client Domain

app.get("/client", (req, res) => {
    res.redirect(config.hosting.client_domain);
  });

app.get("/dash", (req, res) => {
    res.redirect(config.hosting.client_domain);
  });

app.get("/cp", (req, res) => {
    res.redirect(config.hosting.client_domain);
  });

  // Panel Domain

app.get("/panel", (req, res) => {
    res.redirect(config.hosting.panel_domain);
  });

app.get("/control", (req, res) => {
    res.redirect(config.hosting.panel_domain);
  });

app.get("/gp", (req, res) => {
    res.redirect(config.hosting.panel_domain);
  });












app.use(function (req, res, next) {
    res.status(404).render("404.ejs", {config: config});
  });


app.listen(port, domain, () => {
    console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`Website Ruing On`), chalk.green(`${domain}${port}`))                                                                                  
});
