const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const workOutRoutes = require('./workOutRoutes');

router.use('/workout', workOutRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;