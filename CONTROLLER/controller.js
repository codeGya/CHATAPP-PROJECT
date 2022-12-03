const User=require('../MODELS/user.js')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const Online=require('../MODELS/online.js')
const Message=require('../MODELS/messages.js')
const { Op } = require("sequelize");
const Group=require('../MODELS/group.js')
const groupMap=require('../MODELS/groupmap.js')
const particularGroup=require('../MODELS/particulargroup.js')



exports.signUpUser=async (req,res,next)=>{

    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    const number=req.body.number
    

    
    const searchUserTable=await User.findAll({where:{email:email}})
    
    if(searchUserTable.length==0)
    {
        
        await bcrypt.hash(password,10,async (err,hash)=>{
          await User.create({email:email,name:name,password:hash,mnumber:number})
          res.status(200).send({})
       })
        

    }
    else{
        console.log('email is old')
        res.status(205).send('User already exists!')
    }

    
}

exports.signInUser=async (req,res,next)=>{

    const email=req.body.email
    const password=req.body.password

    const waitForSearchingDatabase=await User.findAll({where:{email:email}})
    
    if(waitForSearchingDatabase.length==0)
    {
        

        res.status(205).send({})

    }
    else if(waitForSearchingDatabase.length>0){
        
        await bcrypt.compare(password,waitForSearchingDatabase[0].password,async (err,result)=>{
            if(result===true)
            {
                const generateToken= jwt.sign({userId:waitForSearchingDatabase[0].id},'indreshsingh')
                await Online.create({email:email,name:waitForSearchingDatabase[0].name,login:waitForSearchingDatabase[0].id})
                res.status(200).send(generateToken)

            }
            else{
                
                res.status(206).send({})
            }
        })
    }



}
exports.userOnline=async (req,res,next)=>{
    const waitForGettingDataOfOnlineUsers=await Online.findAll({where:{login:{[Op.ne]:req.user.id}}})
    res.send(waitForGettingDataOfOnlineUsers)
}
exports.removeParticularUser=async (req,res,next)=>{

    Online.destroy({where:{email:req.user.email}})
    res.status(200).send({})
}
exports.saveChatMessages=async (req,res,next)=>{
    const message=req.body.messageTo
    console.log(message,'message')

    const saveChatMessage=await req.user.createMessage({chat:message})
    res.send(saveChatMessage)

}
exports.getAllPreviousMessageOfUser=async (req,res,next)=>{
    const messageId=req.query.lastmessage
    console.log(messageId,'messageId')

    const getAllPreviousMessageOfUser=await req.user.getMessages({where:{id:{[Op.gt]:messageId}}})
    console.log(getAllPreviousMessageOfUser,'getAllPreviousMessageOfUser')
    res.send(getAllPreviousMessageOfUser)
}
exports.createGroupName=async (req,res,next)=>{
    const name=req.body.nog
    const groupMember=req.body.groupname
    console.log(groupMember,'groupMember')

    const groupIdentity=await req.user.createGroup({name:name,createdby:req.user.name})
    await particularGroup.create({groupno:groupIdentity.id,userName:req.user.name,isAdmin:true})

          await req.user.addGroup(groupIdentity,{through:{nop:groupMember.length+1}})
    for(let i=0;i<groupMember.length;i=i+1)
    {
        
        await particularGroup.create({groupno:groupIdentity.id,userName:groupMember[i],isAdmin:false})
        

    }
    res.status(200).send({})
    
    

}
// exports.addOneUserToGroup=async (req,res,next)=>{
//     const getGroupInstance=await req.user.getGroups()
//     const particularGroupInstance=getGroupInstance[0]
//     const idOfPersonWhoWantToBeGroupMember=req.params.a

//     const nameOfPersonWhoWantToBeGroupMember=await User.findByPk(idOfPersonWhoWantToBeGroupMember)

//     await req.user.addGroup(particularGroupInstance,{through:{nop:nameOfPersonWhoWantToBeGroupMember.name}})
//     res.send({})
// }
exports.addOneUserToGroup=async (req,res,next)=>{

    const getGroupName=await req.user.getGroups()
    if(getGroupName.length>0)
    {
        res.status(200).send(getGroupName)

    }
    else{
        res.status(205).send({})
    }

    

}
exports.getDataOfParticularGroup=async (req,res,next)=>{
    const groupName=req.params.groupId

    const getGroupName=await Group.findByPk(groupName)

   const getMembersOfParticularGroup=await  particularGroup.findAll({where:{groupno:getGroupName.id}})

   res.send(getMembersOfParticularGroup)
}

exports.deleteThatPersonFromGroup=async (req,res,next)=>{
    const deleteId=req.params.deleteId
    const getParticularGroupInfo=await particularGroup.findByPk( deleteId)
    const getGroupId=getParticularGroupInfo.groupno
    const particularGroupNumber=await req.user.getGroups({where:{id:getGroupId}})
    console.log(particularGroupNumber,'particularGroupNumber')
    const getNumberOfParticularPersonInThatGroup=particularGroupNumber[0].groupMap.nop
   const newPersonInGroup=getNumberOfParticularPersonInThatGroup-1

    await groupMap.update({nop:newPersonInGroup},{where:{GroupId:getGroupId}})

    await particularGroup.destroy({where:{id:deleteId}})
    res.status(200).send(particularGroupNumber)

    // const getNumberOfPeopleInThatGroup=await req.user.getGroups({where:{id:deleteId}})

    // console.log(getNumberOfPeopleInThatGroup,'getNumberOfPeopleInThatGroup')

    //const findNumberOfPeopleInThatGroup=getNumberOfPeopleInThatGroup[0].group



}
