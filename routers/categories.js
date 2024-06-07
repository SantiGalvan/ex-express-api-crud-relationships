const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.js");

// Store
router.post('/', categoriesController.store);
// Index
router.get('/', categoriesController.index);
// Show
router.get('/:id', categoriesController.show);
// Update
router.put('/:id', categoriesController.update);
// Delete
router.delete('/:id', categoriesController.destroy);

module.exports = router;