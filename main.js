function validateForm(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    alert("Data tidak boleh kosong!");
    return false;
  } else {
    alert("Register berhasil!");
    window.location.href = "login.html";
  }
}