import { sequelize } from "../config/db.js";
import Joke from "../models/Joke.js";

// Ajouter une blague
export async function createJoke(req, res) {
  try {
    const { question, answer, image_url } = req.body;
    if (!question || !answer) {
      return res
        .status(400)
        .json({ message: "Tous les champs sont obligatoires" });
    }
    const cleanQuestion = question.toLowerCase().trim().replace(/\s+/g, " ");
    const jokeExists = await Joke.findOne({
      where: { question: cleanQuestion },
    });
    console.log(jokeExists);

    if (jokeExists) {
      return res.status(400).json({ message: "Cette blague existe déjà." });
    }
    const newJoke = await Joke.create({
      question,
      answer,
      image_url,
    });
    res
      .status(201)
      .json({ error: false, message: "Blague ajoutée", result: newJoke });
  } catch (error) {
    console.error("createJoke error : ", error);
    res.status(500).json({ message: "Impossible d'enregistrer la blague" });
  }
}

//Afficher toutes les blagues
export async function getAllJokes(req, res) {
  const jokes = await Joke.findAndCountAll();
  res.status(200).json({
    error: false,
    result: jokes,
  });
}

//Afficher les blagues par id
export async function getJokeById(req, res) {
  try {
    const { id } = req.params;
    const joke = await Joke.findByPk(id);
    if (!joke)
      return res.status(404).json({ message: "La blague n'existe pas" });
    res.status(200).json({
      error: false,
      message: `Blague dont l'id est : ${id}`,
      result: joke,
    });
  } catch (error) {
    console.error("getJokeById error : ", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}

//Afficher les blagues aléatoirement (id)
export async function getRandomJoke(req, res) {
  const randomJoke = await Joke.findOne({ order: sequelize.random() });
  res
    .status(200)
    .json({ error: false, message: "Blague aléatoire", result: randomJoke });
}

//Supprimer une blague
export async function deleteJoke(req, res) {
  const { id } = req.params;
  try {
    const isDeleted = await Joke.destroy({ where: { id } });
    if (!isDeleted)
      return res.status(404).json({ message: "Blague introuvable" });
    res.json({ message: "Blague supprimée" });
  } catch (error) {
    console.error("deleteJoke error : ", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
}
