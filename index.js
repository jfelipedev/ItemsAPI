const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const SetSimplesController = require("./controllers/setSimplesController");
const ArmaSimplesController = require("./controllers/armaSimplesController");
const EscudoSimplesController = require("./controllers/escudoSimplesController");

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

app.use("/set/simples/", SetSimplesController);
app.use("/armas/simples/", ArmaSimplesController);
app.use("/escudos/simples/", EscudoSimplesController);

app.listen(PORT, () =>
  console.log("Servidor foi iniciado com sucesso em http://localhost:" + PORT)
);
