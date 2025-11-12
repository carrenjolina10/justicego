const chatBox = document.getElementById('lawyer-chat-box');
const userInput = document.getElementById('lawyer-user-input');

userInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();  // cegah efek default (misal submit form atau baris baru)
    sendMessage();
  }
});

// Kirim pesan user
function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;

  // Tampilkan pesan user
  appendMessage(text, 'user');

  // Kosongkan input
  userInput.value = '';

  // Bot balas setelah delay
  setTimeout(() => {
    const reply = getBotReply(text);
    appendMessage(reply, 'bot');
  }, 700);
}

// Hapus riwayat chat
function clearHistory() {
  const confirmDelete = confirm("Apakah kamu yakin ingin menghapus semua chat?");
  if (!confirmDelete) return;

  if (!chatBox) return;

  // Simpan pesan pembuka bot kalau ada
  const firstMessage = chatBox.querySelector('.bot-message');
  let firstHTML = '';
  if (firstMessage) {
    firstHTML = firstMessage.outerHTML;
  }

  chatBox.innerHTML = firstHTML;

  // Tidak perlu hapus localStorage karena tidak digunakan
}

// Tampilkan pesan ke chat box (TIDAK disimpan ke localStorage)
function appendMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');

  if (sender === 'bot') {
    messageDiv.innerHTML = message;
  } else {
    messageDiv.textContent = message;
  }

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Tidak panggil saveChatHistory();
}

// Hapus fungsi simpan dan load chat history

// Balasan otomatis sederhana
function getBotReply(input) {
  input = input.toLowerCase();

  if (input.includes('halo') || input.includes('hai') || input.includes('hallo') || input.includes('hi')) {
    return 'Hai juga! Ada yang bisa saya bantu?';
  } 
  else if (input.includes('terima kasih') || input.includes('makasih')) {
    return 'Sama-sama~ senang bisa bantu 🌸';
  }
  else if (input.includes('konsultasi') || input.includes('mau konsul') || input.includes('pengen konsul') || input.includes('konsul')) {
    return 'Untuk konsultasi hukum, silakan jelaskan masalah Anda secara singkat supaya saya bisa membantu lebih lanjut.';
  }
  else if (input.includes('biaya konsultasi') || input.includes('harga konsultasi') || input.includes('biaya') || input.includes('harga')) {
    return 'Biaya jasa konsultasi kami tergantung jenis kasusnya. Bisa langsung hubungi kami untuk info lebih detail.';
  }
  else if (input.includes('jam kerja') || input.includes('buka') || input.includes('waktu')) {
    return 'Jam kerja kami Senin-Jumat, 08.00 - 17.00 WIB. Di luar jam itu, Anda bisa tinggalkan pesan di sini.';
  }
  else if (input.includes('layanan') || input.includes('jenis kasus')) {
    return 'Kami melayani berbagai kasus hukum seperti perdata, pidana, bisnis, dan keluarga, dan lain sebagainya. Apa yang ingin Anda tanyakan?';
  }
  else {
    return 'Hmm... saya belum paham 😅 bisa dijelaskan lagi?';
  }
}