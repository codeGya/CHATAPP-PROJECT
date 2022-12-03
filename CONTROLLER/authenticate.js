const jwt=require('jsonwebtoken')

const User=require('../MODELS/user.js')

exports.verifyUserAuthencity=async (req,res,next)=>{
   console.log(req.headers,'req.headers.header1')
    const verifyUserAuthencity=jwt.verify(req.headers.header1,'indreshsingh')
    console.log(verifyUserAuthencity,'verifyUserAuthencity')

    const findParticularUser=await User.findByPk(verifyUserAuthencity.userId)
    console.log(findParticularUser,'findParticularUser')

    if(findParticularUser===null)
    {
        console.log('1')
        res.status(205).send({})
    }
    else
    {
        console.log('2')
        req.user=findParticularUser
        next()
    }

}