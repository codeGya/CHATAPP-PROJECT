document.getElementById('form').addEventListener('submit',submitsignuppage)

async function submitsignuppage(e)
{
   e.preventDefault()
    
       const name=document.getElementById('name').value
       const email=document.getElementById('email').value
        const password=document.getElementById('password').value
        const mobilenumber=document.getElementById('number').value

        const userTable={
            name:name,
            email:email,
            password:password,
            number:mobilenumber
        }

    
    //console.log(userTable)
    const waitForPostingDataToBackend=await axios.post('http://localhost:5000/post-user',userTable)

    if(waitForPostingDataToBackend.status===200)
    {
        window.alert('Successfuly signed up')
    }

    if(waitForPostingDataToBackend.status===205)
    {
        window.alert('User already exists please Login!')
    }
    
    
}