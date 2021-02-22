const express = require('express');
const router = express.Router();
const manufacturerController = require('../controllers/manufacturerController');

router.post('/', manufacturerController.create);

//gets all
router.get('/', manufacturerController.readAll);

//update
router.put('/:id', manufacturerController.update);

//delete
router.delete('/:id', manufacturerController.delete);

module.exports = router;
