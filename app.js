require("dotenv/config");

const express = require("express");

const app = express();

require("./config")(app);

app.locals.appTitle = `Axios CRUD`;

const index = require("./routes/index.routes");
app.use("/", index);

const charactersRoutes = require("./routes/characters.routes");
app.use("/", charactersRoutes);


require("./error-handling")(app);

module.exports = app;
