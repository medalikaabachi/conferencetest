const router = require("express").Router()

const Conference = require('../models/conference')

const isAuth = require('../middleware/isAuth')
const isAdmin = require('../middleware/isAdmin')
//add conferance
router.post("/addconference",isAuth,isAdmin, async(req, res) => {
    const {startDate,endDate,desc,name}=req.body
    const newConference = new Conference({startDate,endDate,desc,name})

    
    const conference = await newConference.save()
    res.send({msg:"conference add", conference})
})
//modify conference
router.put("/conference/:confId",isAuth,isAdmin, async (req, res) => {
    const confId = req.params.confId;
    const conference = await Conference.findByIdAndUpdate(confId, req.body, { new: true })
    return res.json(conference)
})
//delete conference

router.delete("/delete/:id",isAuth,isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
      const conference = await Conference.findOneAndDelete({ _id: id });
      res.json({ msg: "conference deleted", conference });
    } catch (error) {
      console.log(error);
    }
  });
  
/**
    * @route Get api/conferences
    * @desc get all conferences
    * @acess private
*/
router.get("/conferences",isAuth,isAdmin, async (req, res) => {
    return res.json(await Conference.find())
})

module.exports = router