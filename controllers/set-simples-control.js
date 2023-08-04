const express = require("express");
const SetSimples = require("../models/set-simples-schema");

const router = express.Router();

// Função para criar registro de Set Simples
router.post("/", async (req, res) => {
  try {
    const set = await SetSimples.create(req.body);
    res.status(201).json(set);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar registro." });
  }
});

// Função para obter todos os itens de Set Simples
router.get("/", async (req, res) => {
  try {
    const set = await SetSimples.find();
    res.json(set);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar registros." });
  }
});

// Função para obter um item de Set Simples por ID
router.get("/:id", async (req, res) => {
  try {
    const set = await SetSimples.findById(req.params.id);
    if (!set) {
      return res.status(404).json({ error: "Item não encontrado." });
    }
    res.json(set);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar registro." });
  }
});

// Função para atualizar um item de Set Simples por ID
router.put("/:id", async (req, res) => {
  try {
    const set = await SetSimples.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!set) {
      return res.status(404).json({ error: "Item não encontrado." });
    }
    res.json(set);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar registro." });
  }
});

// Função para deletar um item de Set Simples por ID
router.delete("/:id", async (req, res) => {
    try {
        const set = await SetSimples.findByIdAndDelete(req.params.id);
        if (!set) {
          return res.status(404).json({ error: "Item não encontrado." });
        }
        res.json({ message: "Item deletado com sucesso." });
      } catch (error) {
        res.status(500).json({ error: "Erro ao deletar registro." });
      }
});

module.exports = router;
