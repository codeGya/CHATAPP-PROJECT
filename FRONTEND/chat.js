






document.addEventListener('DOMContentLoaded',allPersonWhoAreOnline)

async function allPersonWhoAreOnline()
{
   
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }
    setInterval(async ()=>{
         personWhoAreOnline=await axios.get('http://localhost:5000/user/online',config)
    let output=""

    for(let i=0;i<personWhoAreOnline.data.length;i=i+1)
    {
        output=output+`<li id=personWhoAreOnline.data[i].id> ${personWhoAreOnline.data[i].name}  Online</li>`
    }
    console.log(output,'output')
    document.getElementById('online').innerHTML=output+`<button onclick=createGroup()>Create Group</button>`

    },1000)
    
}

async function logOutButton()
{
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }

    const userId=localStorage.getItem('token')
    const waitForUserDeletion=await axios.delete(`http://localhost:5000/delete/online/user/${userId}`,config)
    if(waitForUserDeletion.status===200)
    {
        localStorage.removeItem('token')
        window.location.href='./signin.html'
    }
}
document.getElementById('chat').addEventListener('submit',sendMessage)

async function sendMessage()
{
    
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }
    console.log(config,'config')
    const message={messageTo:document.getElementById('message').value}
    console.log(message,'message')
    const getAllUserMessage= await axios.post('http://localhost:5000/send/chat/message',message,config)
    //document.getElementById('livemessage')=document.getElementById('livemessage')+`<li id=${getAllUserMessage.data.id}>${getAllUserMessage.data.chat} .${getAllUserMessage.data.createdAt}</li>`

}
document.addEventListener('DOMContentLoaded',getAllUserMessage)

async function getAllUserMessage(e)
{
    e.preventDefault()
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }
    
    // //let oldmessage=[]

    
    
    
        
            //localStorage.setItem('oldmessage',oldmessage)
           // setInterval(async ()=>{
            function getFromLocalStorage()
            {

            }
            let getFromLocalStorageReqularly=localStorage.getItem('oldmessage')
        //   setInterval(()=>{
            //    getFromLocalStorageReqularly)
            //    console.log(getFromLocalStorageReqularly,'getFromLocalStorageReqularly')

    //    },1000)
    //    let getFromLocalStorage=localStorage.getItem('oldmessage')

            
        setInterval(async ()=>{
            let getFromLocalStorageReqularly=localStorage.getItem('oldmessage')
            if(getFromLocalStorageReqularly===null)
            {
                console.log('1')
                //
                const messageIdOfLastMessage=0

              const getAllUserMessage=await axios.get(`http://localhost:5000/get/all/previous/message/?lastmessage=${messageIdOfLastMessage}`,config)
              console.log(getAllUserMessage,'getAllUserMessage')
             let newarraybeforestringifying=getAllUserMessage.data
             const newarrayAfterStringifying=JSON.stringify(newarraybeforestringifying)
        
             // const newarray=JSON.stringify(newarraybeforestringifying)
              console.log(newarraybeforestringifying.length)
            if(newarraybeforestringifying.length>0){
                localStorage.setItem('oldmessage',newarrayAfterStringifying)
       
        
                let output=""
               for(let i=0;i<newarraybeforestringifying.length;i=i+1)
               {
               //let newarraybeforestringifying=getAllUserMessage.data

              output=output + `<li id=${newarraybeforestringifying[i].id}>${newarraybeforestringifying[i].chat} .${newarraybeforestringifyingy[i].createdAt}</li>`


               }
               console.log(newarray.length,'output')
               document.getElementById('previousmessage').innerHTML=output
        

             }
              


            }else{
                console.log('2')
                
                let newArray=localStorage.getItem('oldmessage')
                let freshArray=JSON.parse(newArray)
                console.log(newArray,'newArray')
             
                const messageIdOfLastMessage=freshArray[freshArray.length-1].id
                console.log(freshArray[0],'messageIdOfLastMessage')
               // const finalMessageIdOfLastMessage=JSON.parse(messageIdOfLastMessage)
                console.log(messageIdOfLastMessage,'finalMessageIdOfLastMessage')
                
                const getAllUserMessage=await axios.get(`http://localhost:5000/get/all/previous/message/?lastmessage=${messageIdOfLastMessage}`,config)
                 const updatedArray=getAllUserMessage.data
                 console.log(updatedArray,'updatedArray')
                 
                 //let newArrayAfterStringifying=localStorage.getItem('oldmessage')
                 //console.log(newArrayAfterStringifying,'newArrayAfterStringifying')
                //const freshArrayAfterStringifying=JSON.stringify([...freshArray])
                // let resultantArrayAfterStringifying=newArrayAfterStringifying.concat(freshArrayAfterStringifying)
                // console.log(resultantArrayAfterStringifying,'resultantArrayAfterStringifying')
                // localStorage.setItem('oldmessage',resultantArrayAfterStringifying)
                const newArrayAfterConcating=freshArray.concat(updatedArray)

                const newArrayAfterConcatingAfterStringifying=JSON.stringify(newArrayAfterConcating)

                localStorage.setItem('oldmessage',newArrayAfterConcatingAfterStringifying)

                
             

             

             
                
                
                
                
                let output=""
                for(let i=0;i<newArrayAfterConcating.length;i=i+1){
                    output=output+`<li id=${newArrayAfterConcating[i].id}>${newArrayAfterConcating[i].chat} .${newArrayAfterConcating[i].createdAt}</li>`

                }
                console.log(newArray,'output')
                document.getElementById('previousmessage').innerHTML=output
                
        
            


        
        
        

        

           }},1000)
        


        
        

    
        
        
        
        


    
}

async function createGroup()
{
    window.location.href='./group.html'

   
    
           
//     document.getElementById('groupname').innerHTML=`<li id=groupNameElement><input type="text" id="groupname"><button  onclick=afterNamingGroup()>CREATE GROUP NAME</button></li>`
//    //document.getElementById('submitgroupinfo').addEventListener('submit',afterNamingGroup)
  
//    async function  afterNamingGroup() {
//         const message={nog:document.getElementById('groupname').value}
//         console.log(message,'message')
//         const postGroupNameToBackend=await axios.post('http://localhost:5000/create/group/name',message,config)
//         if(postGroupNameToBackend.status===200)
//         {
//            document.getElementById('groupname').removeChild(document.getElementById('groupNameElement'))

//             let output=""
//             for(let i=0;i<personWhoAreOnline.data.length;i=i+1)
//             {
//                 output=output+`<li id=personWhoAreOnline.data[i].id> ${personWhoAreOnline.data[i].name}  Online<button onclick=addUserToGroup("${personWhoAreOnline.data[i].id}")>Add User To Group</button></li>`
//             }
//             document.getElementById('creategroup').innerHTML=output

//         }
        


//     }
        
   
    
   
}

// async function addUserToGroup(a)
// {
//     const config = {
//         headers: {
//             header1:localStorage.getItem('token'),
//           }}
//     const postoneUserToGroup=await axios.get(`http://localhost:50000/add/one/user/to/group/${a}`,config)
// }

document.addEventListener('DOMContentLoaded',findUserIsMemberOfGroupOrNot)

async function findUserIsMemberOfGroupOrNot()
{
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }}

    const getGroupName=await axios.get('http://localhost:5000/search/group/name',config)
    console.log(getGroupName,'getGroupName')

    if(getGroupName.status===200)
    {
        let output=""
        for(let i=0;i<getGroupName.data.length;i=i+1)
        {
            
            
               // output=output+`<li><button onclick=getAllDetailsAboutParticularGroup('${getGroupName.data[i].id}')>${getGroupName.data[i].name} admin</button></li>`

            
           
            
                output=output+`<li><button onclick=getAllDetailsAboutParticularGroup('${getGroupName.data[i].id}')>${getGroupName.data[i].name}</button></li>`
            
          

        }
        document.getElementById('memberofparticulargroup').innerHTML=output
        console.log(output,'output')
       

    }
    if(getGroupName.status===205)
    {
        window.alert('You are not part of any Group!')
    }
    


}

async function getAllDetailsAboutParticularGroup(a)
{
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }}

    const getDeatislAboutGroup=await axios.get(`http://localhost:5000/get/details/about/particular/group/${a}`,config)
    console.log(getDeatislAboutGroup,'getDeatislAboutGroup')
    let output=`<h3> All About Group </h3>`+""

    for(let i=0;i<getDeatislAboutGroup.data.length;i=i+1)
    {
        if(getDeatislAboutGroup.data[i].isAdmin===true)
        {
            output=output+`<li id=${getDeatislAboutGroup.data[i].id}>${i+1}.${getDeatislAboutGroup.data[i].userName} admin</li>`

        }
        if(getDeatislAboutGroup.data[i].isAdmin===false)
        {
            output=output+`<li id=${getDeatislAboutGroup.data[i].id}>${i+1}.${getDeatislAboutGroup.data[i].userName}<input type=button onclick=removeThatPersonFromGroup("${getDeatislAboutGroup.data[i].id}") value=REMOVE></li>`

        }

        
        
        

    }
    document.getElementById('allaboutparticulargroup').innerHTML=output+`<button onclick=addNewPeopleToGroup()>ADD MEMBER</button>`
}

async function removeThatPersonFromGroup(a)
{
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }}

   const deleteParticularPersonFromGroup= await axios.delete(`http://localhost:5000/remove/that/person/from/group/${a}`,config)

   if(deleteParticularPersonFromGroup.status===200)
   {
    document.getElementById('allaboutparticulargroup').removeChild(document.getElementById(a))
    console.log(deleteParticularPersonFromGroup.data,'deleteParticularPersonFromGroup.data')

   }
}

async function addNewPeopleToGroup()
{
    document.getElementById('addMemberToParticularGroup').innerHTML=`<li><form id=newmemberingroup><input type=text><input type=submit value=ADD NEW MEMBER>`

    
}
// document.getElementById('newmemberingroup').addEventListener('submit',addNewPersonIngroup)

// async function addNewPersonIngroup()
// {

// }




