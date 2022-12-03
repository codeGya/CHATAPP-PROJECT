document.getElementById('signin').addEventListener('submit',signInPageForUsers)

async function signInPageForUsers(e)
{
    

    e.preventDefault()
    console.log('i am in sinin page')
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    const userTable={
        email:email,
        password:password
    }
    const waitForLoggingIn=await axios.post('http://localhost:5000/sign-user',userTable)
   
    if(waitForLoggingIn.status===200)
    {
        localStorage.setItem('token',waitForLoggingIn.data)
        window.location.href='./chat.html'
        
    }
    
    
    
    if(waitForLoggingIn.status===205){
        
        window.alert('No such email-id exists')

        
    }
    if(waitForLoggingIn.status===206)
    {
        window.alert('Password is incorrect')
    }

    

   // 
}
// document.getElementById('pay').addEventListener('click',sendPaymentRelatedData)

// async function sendPaymentRelatedData()
// {
//     const waitForSendingDataToBackend=await axios.post()
// }