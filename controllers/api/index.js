const router = require('express').Router();

const workOutRoutes = require('./workOutRoutes');

router.use('/workouts', workOutRoutes);


module.exports = router;