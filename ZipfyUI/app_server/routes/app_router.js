const express = require('express');
const router = express.Router();
//const mainController = require('../controllers/main');
const mainController = require('../controllers/main');

/* get home page */
router.get('/', mainController.renderIndex);
router.get('/about', mainController.renderAbout);
router.get('/stats', mainController.renderStats);

module.exports = router;
