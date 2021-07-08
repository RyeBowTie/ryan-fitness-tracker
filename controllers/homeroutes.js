const router = require('express').Router();


router.get('/', async (req, res) => {
    // get totals from last exercise 
});

router.get('/stats', async (req, res) => {
    res.sendFile(process.cwd() + "/public/stats.html")
});

router.get('/exercise', async (req, res) => {
    res.sendFile(process.cwd() + "/public/exercise.html");
});

  

module.exports = router;