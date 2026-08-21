function logoutHandler() {
    console.log('hello')
    localStorage.removeItem('isLoggedIn')

    window.location.href= '../login/login.html'
}

const isLoggedInUser = JSON.parse(localStorage.getItem('isLoggedIn'))
const posts = JSON.parse(localStorage.getItem('posts')) || []
if (!isLoggedInUser) {
    alert('the user is not logged in, redirecting to login page')
    window.location.href = '../login/login.html'
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
    postArea.innerHTML = newPost.reverse().join('')
}
renderPosts()