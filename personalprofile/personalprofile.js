const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedIn'))

if (!isLoggedInUser) {
    alert('the user is not logged in, redirecting to login page')
    window.location.href = '../login/login.html'
}

const userFullName = document.querySelector('.card-title')
const email = document.querySelector('#email')
const userName = document.querySelector('#userName')
const profilePicture = document.querySelector('#profilePicture')
const userDescription = document.querySelector('.card-text')

function render() {

    const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedIn'))

    if (!isLoggedInUser) {
        alert('the user is not logged in, redirecting to login page')
        window.location.href = '../login/login.html'
    }

    userFullName.textContent = isLoggedInUser.firstName + ' ' + isLoggedInUser.lastName
    email.innerHTML = isLoggedInUser.email
    userName.innerText = isLoggedInUser.userName

    profilePicture.src = isLoggedInUser.profilePicture || 'https://static.vecteezy.com/system/resources/previews/045/711/185/non_2x/male-profile-picture-placeholder-for-social-media-forum-dating-site-chat-operator-design-social-profile-template-default-avatar-icon-flat-style-free-vector.jpg'
    userDescription.textContent = isLoggedInUser.Description || 'No Description Added'
}
render()

function saveHandler() {
    const inputFirstName = document.querySelector('#inputFirstName')
    const inputLasttName = document.querySelector('#inputLasttName')
    const inputDescription = document.querySelector('#inputDescription')
    const inputProfilePicture = document.querySelector('#inputProfilePicture')

    const newIsLoggedInUser = {
        ...isLoggedInUser,
        firstName: inputFirstName.value,
        lastName: inputLasttName.value,
        Description: inputDescription.value,
        profilePicture: inputProfilePicture.value
    }

    localStorage.setItem('isLoggedIn', JSON.stringify(newIsLoggedInUser))

  render()
}