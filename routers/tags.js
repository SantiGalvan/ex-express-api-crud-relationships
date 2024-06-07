const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tags.js");

// Store
router.post('/', tagsController.store);
// Index
router.get('/', tagsController.index);
// Show
router.get('/:id', tagsController.show);
// Update
router.put('/:id', tagsController.update);
// Delete
router.delete('/:id', tagsController.destroy);

module.exports = router;