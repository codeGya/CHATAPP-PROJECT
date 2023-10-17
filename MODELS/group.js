const Sequelize=require('sequelize')
const sequelize=require('./database.js')

const Group=sequelize.define('Group',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,

    },
    createdby:{
        type:Sequelize.STRING

    }

})

module.exports=Group