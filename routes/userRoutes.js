const express = require('express');
const { getUsers } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/', authenticate, authorize(['Admin']), getUsers);

module.exports = router;
