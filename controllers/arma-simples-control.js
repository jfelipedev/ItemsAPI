const express = require("express");
const ArmasSimples = require("../models/arma-simples-schema");

const router = express.Router();

// Função para criar registro de Arma Simples
router.post("/", async (req, res) => {
  try {
    const arma = await ArmasSimples.create(req.body);
    res.status(201).json(arma);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar registro." });
  }
});

// Função para obter todos os itens de Arma Simples
router.get("/", async (req, res) => {
  try {
    const arma = await ArmasSimples.find();
    res.json(arma);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar registros." });
  }
});

// Função para obter um item de Arma Simples por ID
router.get("/:id", async (req, res) => {
  try {
    const arma = await ArmasSimples.findById(req.params.id);
    if (!arma) {
      return res.status(404).json({ error: "Item não encontrado." });
    }
    res.json(arma);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar registro." });
  }
});

// Função para atualizar um item de Arma Simples por ID
router.put("/:id", async (req, res) => {
  try {
    const arma = await ArmasSimples.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!arma) {
      return res.status(404).json({ error: "Item não encontrado." });
    }
    res.json(arma);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar registro." });
  }
});

// Função para deletar um item de Arma Simples por ID
router.delete("/:id", async (req, res) => {
    try {
        const arma = await ArmasSimples.findByIdAndDelete(req.params.id);
        if (!arma) {
          return res.status(404).json({ error: "Item não encontrado." });
        }
        res.json({ message: "Item deletado com sucesso." });
      } catch (error) {
        res.status(500).json({ error: "Erro ao deletar registro." });
      }
});

module.exports = router;
