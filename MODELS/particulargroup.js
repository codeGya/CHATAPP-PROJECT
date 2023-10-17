const Sequelize=require('sequelize')
const sequelize=require('./database.js')


const particularGroup=sequelize.define('particularGroup',
{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    groupno:
    {
        type:Sequelize.INTEGER
    },
    userName:{
        type:Sequelize.STRING

    },
    isAdmin:{
        type:Sequelize.BOOLEAN
    }
})

module.exports=particularGroup