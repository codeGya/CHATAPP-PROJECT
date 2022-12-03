const Sequelize=require('sequelize')
const sequelize=require('./database.js')

const groupMap=sequelize.define('groupMap',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    nop:{
        type:Sequelize.STRING,
    }
    
})

module.exports=groupMap
  