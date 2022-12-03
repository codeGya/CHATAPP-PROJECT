document.addEventListener('DOMContentLoaded',usersWhoAreOnline)
const array=[]

async function usersWhoAreOnline()
{
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }}
        
           let personWhoAreOnline=await axios.get('http://localhost:5000/user/online',config)
           let output=""

           for(let i=0;i<personWhoAreOnline.data.length;i=i+1)
           {
               output=output+`<option value=${personWhoAreOnline.data[i].name}> ${personWhoAreOnline.data[i].name}  Online</option>`
           }

           document.getElementById('gmembers').innerHTML=output
    
}
document.getElementById('groupname').addEventListener('submit',postGroupDataToBackend)

async function postGroupDataToBackend(e){
    const config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }


    e.preventDefault()
    const a=document.getElementById('gmembers')
    const array=[...a.selectedOptions]
    const valueOfPeopleWhoWantToBeGroupMember=array.map((element)=>element.value)
    console.log(valueOfPeopleWhoWantToBeGroupMember)

    const message={
        groupname:valueOfPeopleWhoWantToBeGroupMember,
        nog:document.getElementById('creategroup').value
    }

    const postGroupNameToBackend=await axios.post('http://localhost:5000/create/group/name',message,config)


    if(postGroupNameToBackend.status===200)
    {
        // const getGroupName=await axios.get('http://localhost:5000/search/group/name',config)
        // if(getGroupName.status===200)
        // {
        //     document.getElementById('memberofparticulargroup').innerHTML=`<li><input type=button value=${getGroupName.data}></li>`

        // }
       window.location.href='./chat.html'
        
    }



    



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