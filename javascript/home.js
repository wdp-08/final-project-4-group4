// Mengambil username untuk di tampilkan pada halaman home
document.addEventListener('DOMContentLoaded', function() {
  const usernameElement = document.getElementById('user');
  const loginUser = localStorage.getItem('loginUser');

  if (loginUser) {
    usernameElement.textContent = `Welcome, ${loginUser}☺️`;
  }
});

// Menghapus data loginUser dar lokal stronge saat logout
document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('loginUser');
    alert('Logout berhasil!');
    window.location.href = 'login.html';
  });
});

// Menampilkan menu level
function showLevel() {
  let levelMenu = document.querySelector('.level-menu');
  let menu = document.querySelector('.menu');
  levelMenu.classList.add('show');
  menu.style.display = 'none';
}