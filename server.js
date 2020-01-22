const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const routes = require("./controllers/controller.js");
const chalk = require("chalk");
const db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(chalk.green(`APP LISTENING: ${PORT}`));
    });
});