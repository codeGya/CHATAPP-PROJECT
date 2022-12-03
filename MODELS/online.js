const Sequelize=require('sequelize')
const sequelize=require('./database.js')

const Online=sequelize.define('Online',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false

    },
    name:{
        type:Sequelize.STRING,
        unique:true,
        
        allowNull:false

},login:{type:Sequelize.INTEGER}})

module.exports=Online