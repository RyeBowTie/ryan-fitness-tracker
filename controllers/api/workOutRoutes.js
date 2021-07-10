const router = require('express').Router();

const {Workout} = require('../../models');

router.get('/', async (req, res) => {
    try {
        await Workout.find({}, (error, data) => {
            if (error) {
                res.send(error);
              } else {
                Workout.aggregate([{
                    $addFields: {
                        "totalDuration": {$sum: "$exercises.duration"}
                    }
                }], (error, data) => {
                    if (error) {
                        res.send(error);
                    } else {
                        res.send(data);
                    }
                })
            }
        })

    } catch (error) {
        console.error(error);
    }

});

router.get('/range', async (req, res) => {
    const response = await Workout.find({}).limit(4);
    
    console.log(response)
    if (response) {
        Workout.aggregate([{
            $addFields: {
                "totalDuration": {$sum: "$exercises.duration"}
            }
        }], (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        })
    }
});

router.post('/',  async (req, res) => {
    try{
        await Workout.insertMany({}, (error, data) => {
            if (error) {
                res.send(error);
              } else {
               
                console.log(data)
                res.send(data)
            }
        })
    } catch (error) {
        res.send(error);
    }
});

router.put('/:id', async (req, res) => {
    console.log(req.body)
    await Workout.updateOne({
        _id : req.params.id
    },
    {$addToSet: {exercises : (req.body)}
    }, (error, data) => {
            if (error) {
                res.send(error);
              } else {
                res.send(data);
            }
    })
});

module.exports = router;