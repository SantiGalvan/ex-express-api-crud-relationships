const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.js");
const validator = require('../middlewares/validator.js');
const { validationCategoryId } = require("../validations/generalValidation.js");
const bodyData = require("../validations/categories.js");

// Store
router.post('/', validator(bodyData), categoriesController.store);
// Index
router.get('/', categoriesController.index);
// Validatore dell'id
router.use('/:id', validator(validationCategoryId));
// Show
router.get('/:id', categoriesController.show);
// Update
router.put('/:id', validator(bodyData), categoriesController.update);
// Delete
router.delete('/:id', categoriesController.destroy);

module.exports = router;