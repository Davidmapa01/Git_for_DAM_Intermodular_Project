const express = require("express");
const app = express();

// Se añade morgan
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);

// Middleware
app.use(morgan("dev"));

app.listen(app.get("port"), 
() => console.log("La aplicación se ha iniciado en el puerto " + app.get("port"))  // Si se incia correctamente mostrará este mensaje por consola
);

app.use(require("./src/routes/index_rutas.js"));