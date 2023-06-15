function validateForm(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    alert("Data tidak boleh kosong!");
    return false;
  } else {
    // Mengambil data dari Local Storage (jika ada)
    let existingData = JSON.parse(localStorage.getItem("users")) || [];

    // Memeriksa apakah username sudah terpakai
    let isUsernameTaken = existingData.some(user => user.username === username);
    if (isUsernameTaken) {
      alert("Username sudah terpakai!");
      return false;
    }

    // Membuat objek baru untuk data pengguna
    let user = {
      username: username,
      email: email,
      password: password
    };

    // Menambahkan data pengguna baru ke dalam array existingData
    existingData.push(user);

    // Menyimpan data ke dalam Local Storage
    localStorage.setItem("users", JSON.stringify(existingData));

    alert("Register berhasil!");
    window.location.href = "index.html";
  }
}