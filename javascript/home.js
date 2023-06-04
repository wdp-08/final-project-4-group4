document.addEventListener('DOMContentLoaded', function() {
  const usernameElement = document.getElementById('user');
  const loginUser = localStorage.getItem('loginUser');

  if (loginUser) {
    usernameElement.textContent = `Welcome, ${loginUser}☺️`;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('loginUser');
    alert('Logout berhasil!');
    window.location.href = 'login.html';
  });
});