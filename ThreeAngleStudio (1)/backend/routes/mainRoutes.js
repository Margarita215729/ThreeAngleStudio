const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Routes
router.get('/', mainController.getHome);
router.post('/contact', mainController.submitContactForm);
router.get('/services', mainController.getServices);
router.put('/services', mainController.updateService);
router.get('/gallery', mainController.getGallery);
router.post('/gallery', mainController.addGalleryItem);

module.exports = router;
