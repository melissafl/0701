require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  return res.json({
    msg: "Bienvenido al Api Demo",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
