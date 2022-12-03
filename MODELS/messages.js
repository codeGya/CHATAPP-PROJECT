const Sequelize=require('sequelize')
const sequelize=require('./database.js')

const Message=sequelize.define('Message',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    chat:
    {
        type:Sequelize.STRING


    }
})
module.exports=Message