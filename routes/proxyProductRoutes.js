const express = require('express');
const router = express.Router();
const proxyProductController = require('../controllers/proxyProductController');
const { authenticate, requireAdmin } = require('../middlewares/auth');

// Admin-only
router.post('/', authenticate, requireAdmin, proxyProductController.createProxyProduct);
router.put('/:id', authenticate, requireAdmin, proxyProductController.updateProxyProduct);
router.delete('/:id', authenticate, requireAdmin, proxyProductController.deleteProxyProduct);

// Public
router.get('/', proxyProductController.listProxyProducts);
router.get('/:id', proxyProductController.getProxyProduct);

module.exports = router; 