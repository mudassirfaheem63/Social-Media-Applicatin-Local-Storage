const form = document.querySelector('form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const myLoader = document.querySelector('div')

const users = JSON.parse(localStorage.getItem('users')) || []

form.addEventListener('submit', (e) => {
   e.preventDefault()
   if (!firstName.value || !lastName.value || !userName.value || !email.value || !password.value) {
      return alert('bhai apna naam tu likha')
   }

   if (password.value.length < 8) {
      return alert('password should be atleast of 8 characters')
   }
   
   const existingUser = users.find((user) => {
    return user.email == email.value || user.userName == userName.value
   })

   if(existingUser) return alert('username or email already exist please try with another email or username')

   const obj = {
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      email: email.value,
      password: password.value
   }

   users.push(obj)

   localStorage.setItem('users', JSON.stringify(users))
   myLoader.style.display = 'block'

   setTimeout(() => {
      window.location.href = '../home/home.html'
   },5000)
})