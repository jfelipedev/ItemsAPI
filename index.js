const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const setSimplesController = require("./controllers/set-simples-control");
const armaSimplesController = require("./controllers/arma-simples-control");
const escudoSimplesController = require("./controllers/escudo-simples-control");

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${dbUsername}:${dbPassword}@itemsdb.bdm0jb5.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conexão com o MongoDB bem-sucedida!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

app.get("/", (request, response) => {
  return response.json({ Ping: "Pong" });
});

// --------------- ROTAS

app.use("/set/simples/", setSimplesController);
app.use("/armas/simples/", armaSimplesController);
app.use("/escudos/simples/", escudoSimplesController);

app.listen(PORT, () =>
  console.log("Servidor foi iniciado com sucesso em http://localhost:" + PORT)
);
