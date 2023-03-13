const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});

app.use(express.static("public")); // Servir archivos estáticos desde la carpeta "public"
