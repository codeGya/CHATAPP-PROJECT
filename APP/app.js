const express=require('express')
const app=express()
const cors=require('cors')
const router=require('../ROUTER/router.js')
const sequelize=require('../MODELS/database')
const Message=require('../MODELS/messages.js')
const User=require('../MODELS/user.js')
const Group=require('../MODELS/group.js')
const groupMap=require('../MODELS/groupmap.js')

User.belongsToMany(Group,{through:groupMap})
Group.belongsToMany(User,{through:groupMap})

User.hasMany(Message)
Message.belongsTo(User)

app.use(express.json())
app.use(cors())
synchronizing()

async function synchronizing()
{
    await sequelize.sync()
}

app.use(router)


app.listen(5000)