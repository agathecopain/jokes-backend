import express from "express";
import {
  createJoke,
  deleteJoke,
  getAllJokes,
  getJokeById,
  getRandomJoke,
} from "../controllers/joke.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/joke:
 *   post:
 *     summary: Ajout d'une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *             properties:
 *               question:
 *                 type: string
 *                 example: Quel est le comble pour un joueur de bowling ?
 *               answer:
 *                 type: string
 *                 example: C’est de perdre la boule
 *     responses:
 *       201:
 *         description: Blague ajoutée
 */

router.post("/joke", createJoke);

/**
 * @swagger
 * /api/jokes:
 *   get:
 *     summary: Affiche toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 */

router.get("/jokes", getAllJokes);

/**
 * @swagger
 * /api/joke/{id}:
 *   get:
 *     summary: Affiche une blague en fonction de son id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'identifiant de la blague
 *     responses:
 *       200:
 *         description: Détail de la blague
 *       404:
 *         description: Blague non trouvée
 *       500:
 *         description: Erreur serveur
 */

router.get("/joke/:id", getJokeById);

/**
 * @swagger
 * /api/joke/{id}:
 *   delete:
 *     summary: Supprime une blague en fonction de son id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: L'identifiant de la blague
 *     responses:
 *       200:
 *         description: Blague supprimée
 *       404:
 *         description: Blague introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/joke/:id", deleteJoke);

/**
 * @swagger
 * /api/jokes/random:
 *   get:
 *     summary: Affiche une blague aléatoirement
 *     responses:
 *       200:
 *         description: Blague sélectionnée
 */

router.get("/jokes/random", getRandomJoke);

export default router;
