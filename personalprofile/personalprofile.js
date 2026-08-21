let isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedIn'))
const posts = JSON.parse(localStorage.getItem('posts')) || []
if (!isLoggedInUser) {
    alert('the user is not logged in, redirecting to login page')
    window.location.href = '../login/login.html'
}

const userFullName = document.querySelector('.card-title')
const email = document.querySelector('#email')
const userName = document.querySelector('#userName')
const profilePicture = document.querySelector('#profilePicture')
const userDescription = document.querySelector('.card-text')
const postCaption = document.querySelector('#postCaption')
const postPictureURL = document.querySelector('#postPictureURL')

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
    isLoggedInUser = newIsLoggedInUser   // ← keep the in-memory copy in sync
    render()
}

function submitHandler() {
    console.log(postCaption.value);
    console.log(postPictureURL.value);
    posts.push({
        usersDetails: isLoggedInUser,
        postCaption: postCaption.value,
        postPictureURL: postPictureURL.value,
    })
    localStorage.setItem('posts', JSON.stringify(posts))
    renderPosts()
}

function renderPosts() {
    const postArea = document.querySelector('#postArea')
    postArea.innerHTML = ''
    const newPost = posts.map((post) => {
        return `<div id="post">
          <div id="userDetails" style="display: flex;">
            <img style="width: 100px;height: 100px; border-radius: 50px; object-fit: contain;"
              src="${post.usersDetails.profilePicture}"
              alt="">
            <div>
              <h4>${post.usersDetails.firstName + ' ' + post.usersDetails.lastName}</h4>
              <h4>${post.usersDetails.email}</h4>
            </div>
          </div>
          <p>${post.postCaption}</p>
          <img style="width: 600px; height: 300px; object-fit: contain;" src="${post.postPictureURL}" alt="">
        </div>`
    })
    postArea.innerHTML = newPost.filter((post) => {
        return post.includes(isLoggedInUser.email)
    }).reverse().join('')
}
renderPosts()

function logoutHandler() {
    console.log('hello')
    localStorage.removeItem('isLoggedIn')

    window.location.href= '../login/login.html'
}