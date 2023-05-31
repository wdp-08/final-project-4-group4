document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.querySelector('.btn.btn-primary.w-100.mb-3');

  loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('log-username').value;
    const password = document.getElementById('log-password').value;

    if (username === '' || password === '') {
      alert('Data tidak boleh kosong!');
      return false;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
      alert('Login berhasil!');
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser.username));
      window.location.href = 'home.html';
    } else {
      alert('Login gagal. Username atau password salah!');
    }
  });
});