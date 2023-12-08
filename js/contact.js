document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var messageDiv = document.createElement("div");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Ambil nilai dari input
      var name = document.querySelector('input[placeholder="nama"]').value;
      var message = document.querySelector('input[placeholder="message"]').value;
      var phoneNumber = document.querySelector('input[placeholder="no hp"]').value;
  
      // Validasi input
      if (!name || !message || !phoneNumber) {
        // Menampilkan pesan error
        messageDiv.textContent = "Mohon isi semua kolom!";
        messageDiv.style.color = "red";
      } else {
        messageDiv.textContent = "Pesan Anda telah dikirim!";
        messageDiv.style.color = "green";
  
        // pesan hilang setelah beberapa detik
        setTimeout(function () {
          messageDiv.textContent = "";
        }, 3000); //3 detik saja
  
        // nilai input bersih setelah mengirim
        document.querySelector('input[placeholder="nama"]').value = "";
        document.querySelector('input[placeholder="message"]').value = "";
        document.querySelector('input[placeholder="no hp"]').value = "";
      }
      form.appendChild(messageDiv);
    });
  });
  