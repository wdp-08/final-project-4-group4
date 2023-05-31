document.addEventListener('DOMContentLoaded', function() {
    const usernameElement = document.getElementById('user');
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    if (loggedInUser) {
      usernameElement.textContent = `Welcome, ${loggedInUser}☺️`;
    }
  });