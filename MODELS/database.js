const Sequelize=require('sequelize')


const sequelize=new Sequelize('chat_app','root','Is18071995$',{host:'localhost',dialect:'mysql'
})

module.exports=sequelize