const form = document.querySelector('form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const myLoader = document.querySelector('div')

const users = JSON.parse(localStorage.getItem('users')) || []

form.addEventListener('submit', (e) => {
   e.preventDefault()
   if ( !email.value || !password.value) {
      return alert('bhai apna naam tu likha')
   }

   if (password.value.length < 8) {
      return alert('password should be atleast of 8 characters')
   }
   
   const existingUser = users.find((user) => {
    return user.email == email.value
   })

   !existingUser &&  alert('This email does not exist ,please try register first')

   if(existingUser.password == password.value){
    alert('user logged in sucessfully')
   } else{
    return alert('password incorecct')
   }

   myLoader.style.display = 'block'

   setTimeout(() => {
    window.location.href = '../home/home.html'
   },3000)
})