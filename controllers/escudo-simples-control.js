const express = require("express");
const EscudoSimples = require("../models/escudo-simples-schema");

const router = express.Router();

// Função para criar registro de Escudo Simples
router.post("/", async (req, res) => {
  try {
    const escudo = await EscudoSimples.create(req.body);
    res.status(201).json(escudo);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar registro." });
  }
});

// Função para obter todos os itens de Escudo Simples
router.get("/", async (req, res) => {
  try {
    const escudo = await EscudoSimples.find();
    res.json(escudo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar registros." });
  }
});

// Função para obter um item de Escudo Simples por ID
router.get("/:id", async (req, res) => {
  try {
    const escudo = await EscudoSimples.findById(req.params.id);
    if (!escudo) {
      return res.status(404).json({ error: "Item não encontrado." });
    }
    res.json(escudo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar registro." });
  }
});

// Função para atualizar um item de Escudo Simples por ID
router.put("/:id", async (req, res) => {
  try {
    const escudo = await EscudoSimples.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!escudo) {
      return res.status(404).json({ error: "Item não encontrado." });
    }
    res.json(escudo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar registro." });
  }
});

// Função para deletar um item de Escudo Simples por ID
router.delete("/:id", async (req, res) => {
    try {
        const escudo = await EscudoSimples.findByIdAndDelete(req.params.id);
        if (!escudo) {
          return res.status(404).json({ error: "Item não encontrado." });
        }
        res.json({ message: "Item deletado com sucesso." });
      } catch (error) {
        res.status(500).json({ error: "Erro ao deletar registro." });
      }
});

module.exports = router;
