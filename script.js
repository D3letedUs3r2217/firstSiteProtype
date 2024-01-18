import {USER} from '../UserfulCode/UserCreator.js'

const Username = document.getElementById('textUser')
const Email = document.getElementById('emailUser')
const password1 = document.getElementById('pass1')
const password2 = document.getElementById('pass2')
let respost = document.getElementById('respond')

const btn = document.getElementById('buttonR')

btn.addEventListener('click', () =>{

    function clearAll(){
    Username.value = ''
    Email.value = ''
    password1.value = ''
    password2.value = ''
    }


 try{
    if(password1.value != password2.value){
        respost.innerHTML = 'As senhas devem estar de acordo! '
    }else{
        const User = new USER(Username.value, Email.value, password1.value)
    console.log(User)
        clearAll()
    }
 }
    catch(error){
        respost.innerHTML = error
    }

    


    
   
    
    
})

