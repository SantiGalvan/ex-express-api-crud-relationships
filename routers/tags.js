const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tags.js");
const validator = require('../middlewares/validator.js');
const { validationTagId } = require("../validations/generalValidation.js");

// Store
router.post('/', tagsController.store);
// Index
router.get('/', tagsController.index);
// Validatore dell'id
router.use('/:id', validator(validationTagId));
// Show
router.get('/:id', tagsController.show);
// Update
router.put('/:id', tagsController.update);
// Delete
router.delete('/:id', tagsController.destroy);

module.exports = router;