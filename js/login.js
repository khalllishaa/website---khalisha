var loginStatus = 0; // dijadikan variabel global

const login = document.getElementById('login');
const pindah = document.getElementsByClassName('shoppingCartLink');

alert("harap login terlebih dahulu sebelum membeli");

login.addEventListener('click', () => {
    let username;
    let password;
    do{
        username = prompt("Masukkan Username Anda : ");
        password = prompt("Masukkan Password Anda : ");
        if (username !== null && password !== null) {
          if (username !== "" && password !== "") {
              loginStatus = 1;
              alert("Berhasil login");
              login.style.display = "none";
          } else {
              alert('Username / Password Kosong');
          }
      } else {
          alert('Login gagal');
      }
    }while(username == "" || username == null || password == "" || password == null);
})

for (let i = 0; i < pindah.length; i++) {
    pindah[i].addEventListener('click', () => {
      if (loginStatus === 1) {
        window.location.href = 'cart.html';
      } else {
        alert("login terlebih dahulu sebelum membeli");
      }
    });
  }