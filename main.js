function validateForm(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    alert("Data tidak boleh kosong!");
    return false;
  } else {
    // Menyimpan data ke dalam Local Storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Register berhasil!");
    window.location.href = "login.html";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Memilih elemen tombol "Login" berdasarkan class
  const loginButton = document.querySelector('.btn.btn-primary.w-100.mb-3');

  // Menambahkan event listener ke tombol "Login"
  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Menghentikan perilaku default dari tombol submit

    // Mengambil nilai dari input username dan password
    const username = document.getElementById('log-username').value;
    const password = document.getElementById('log-password').value;

    // Memeriksa apakah username atau password kosong
    if (username === '' || password === '') {
      alert('Data tidak boleh kosong!');
      return false;
    }

    // Memeriksa apakah data yang dimasukkan sesuai dengan yang ada di Local Storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      alert('Login berhasil!');
      // Mengarahkan ke halaman "home.html"
      window.location.href = 'home.html';
    } else {
      alert('Login gagal. Username atau password salah!');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Memeriksa apakah ada data pengguna yang disimpan di Local Storage
  const storedUsername = localStorage.getItem('username');

  // Mengubah isi dari elemen h2 dengan id "user" menjadi nama pengguna
  const userElement = document.getElementById('user');
  if (storedUsername) {
    userElement.textContent = `Welcome, ${storedUsername}☺️`;
  }
});
