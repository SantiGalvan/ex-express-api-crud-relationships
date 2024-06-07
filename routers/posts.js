const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.js");
const validator = require('../middlewares/validator.js');
const validationSlug = require("../validations/validationSlug.js");
const bodyData = require("../validations/posts.js");

// Store con validatore
router.post('/', validator(bodyData), postsController.store);
// Index
router.get('/', postsController.index);
// Validatore dello slug
router.use('/:slug', validator(validationSlug));
// Show
router.get('/:slug', postsController.show);
// Update con validatore
router.put('/:slug', validator(bodyData), postsController.update);
// Destroy
router.delete('/:slug', postsController.destroy);

module.exports = router;