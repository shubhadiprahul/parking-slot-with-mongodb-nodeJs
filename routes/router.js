const router = require('express').Router()
const cardb = require('../model/conn')

let SLOTSIZE = process.env.SLOTSIZE


router.get('/homepage',(req,res)=>{
    res.send({homepage:`It's Homepage`})
})

router.post('/carPark', async (req, res) => {
    let carDetails = new cardb({
         carNumber:req.body.carNumber
    })
    if (SLOTSIZE < 1) {
        res.send({ message: 'slot is booked' })
    }
    else {
        await carDetails.save((err, data) => {
            if (err) {
                res.send({ error: err.message })
            }
            else {
                res.status(200).send({ success: `car is park at slot Number ${data._id} ` })
            }
        })
    }
})


router.delete('/carunpark/:slotid', async (req, res) => {
    let slotid = req.params.slotid
    data = await cardb.findByIdAndDelete(slotid)
    res.send({unpark:`your car unpark your car details ${data}`})
})


router.get('/cardetails/:number', async (req, res) => {
    carData = await cardb.findById(req.params.number)
    .then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

router.use('*', (req, res) => {
    res.status(400).send({ message: 'page not found' })
})

module.exports = router;