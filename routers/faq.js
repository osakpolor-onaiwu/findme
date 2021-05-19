const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faq.controller');

router.post('/', faqController.create);

//gets all
router.get('/', faqController.readAll);

//update
router.put('/:id', faqController.update);

//delete
router.delete('/:id', faqController.delete);

module.exports = router;
