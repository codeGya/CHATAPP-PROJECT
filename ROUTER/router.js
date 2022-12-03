const express=require('express')
const router=express.Router()
const authenticate=require('../CONTROLLER/authenticate.js')
const controller=require('../CONTROLLER/controller')
console.log(controller,'controller')

router.post('/post-user',controller.signUpUser)
router.post('/sign-user',controller.signInUser)
router.get('/user/online',authenticate.verifyUserAuthencity,controller.userOnline)
router.delete('/delete/online/user/:deleteId',authenticate.verifyUserAuthencity,controller.removeParticularUser)
router.post('/send/chat/message',authenticate.verifyUserAuthencity,controller.saveChatMessages)
router.get('/get/all/previous/message',authenticate.verifyUserAuthencity,controller.getAllPreviousMessageOfUser)
router.post('/create/group/name',authenticate.verifyUserAuthencity,controller.createGroupName)
router.get('/search/group/name',authenticate.verifyUserAuthencity,controller.addOneUserToGroup)
router.get('/get/details/about/particular/group/:groupId',authenticate.verifyUserAuthencity,controller.getDataOfParticularGroup)
router.delete('/remove/that/person/from/group/:deleteId',authenticate.verifyUserAuthencity,controller.deleteThatPersonFromGroup)

module.exports=router