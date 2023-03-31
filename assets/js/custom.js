const user = {
  id: 1,
  email: 'jamespeterson@gmail.com',
  password: 'password',
  name: 'James Peterson',
  role: 'Managing Director, Remote',
  invited: 'May 1, 2019',
  status: 'Completed on April 20, 2020',
  avg_score: '85%',
  profile_img:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
};

var userLogged = false;

const subBtn = document.getElementById('submitBtn');
const logoutBtn = document.getElementById('logoutBtn');

var userRole = document.getElementById('role');

function submitAction(e) {
  e.preventDefault();
  var enteredMail = document.getElementById('mail_id').value;
  var enteredPassword = document.getElementById('password').value;
  if (enteredMail.trim().length != 0 || enteredPassword.trim().length != 0) {
    if (
      enteredMail.trim() == user.email &&
      enteredPassword.trim() == user.password
    ) {
      userLogged = true;
      localStorage.setItem('user', JSON.stringify(user));
      window.location.replace('profile.html');
      //   window.location.href = 'profile.html';
      //   alert('Login successful');
    } else {
      alert('Invalid credentials');
      localStorage.clear();
    }
  } else {
    alert('please fill the fields to continue');
    localStorage.clear();
  }
}

// function logoutAction(e) {
//   //   e.preventDefault();
//   localStorage.removeItem('user');
//   console.log('logout called');
//   //   if (userLogged == true) {
//   //     userLogged = false;
//   //     window.location.replace('/index.html');
//   //   }
// }

subBtn.addEventListener('click', submitAction);
// logoutBtn.addEventListener('click', logoutAction);
