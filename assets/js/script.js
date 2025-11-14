


// ====== Simple Chatbot Logic ======
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Fungsi kirim pesan
function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;

  // Tampilkan pesan user
  appendMessage(text, 'user');

  // Kosongkan input
  userInput.value = '';

  // Respon bot setelah sedikit delay
  setTimeout(() => {
    const reply = getBotReply(text);
    appendMessage(reply, 'bot');
  }, 700);

}

function clearHistory() {
  const confirmDelete = confirm("Apakah kamu yakin ingin menghapus semua chat?");
  if (!confirmDelete) return;

  if (!chatBox) return;

  // Ambil pesan pertama (misal pesan pembuka bot)
  const firstMessage = chatBox.querySelector('.bot-message');
  let firstHTML = '';

  if (firstMessage) {
    firstHTML = firstMessage.outerHTML;
  }

  // Hapus semua pesan dari chat box
  chatBox.innerHTML = firstHTML;

  // Hapus dari localStorage biar pas refresh tetap kosong
  localStorage.removeItem('chatHistory');
}


// Tampilkan pesan ke chat box
function appendMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
  
  // kalau dari bot, pakai innerHTML supaya <br> kebaca
  if (sender === 'bot') {
    messageDiv.innerHTML = message;
  } else {
    messageDiv.textContent = message;
  }

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simpan chat ke localStorage
function saveChatHistory() {
  const history = chatBox.innerHTML;
  localStorage.setItem('chatHistory', history);
}

// Load chat saat halaman dibuka
function loadChatHistory() {
  const savedHistory = localStorage.getItem('chatHistory');
  if (savedHistory) {
    chatBox.innerHTML = savedHistory;
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Panggil load saat halaman pertama kali dibuka
window.addEventListener('load', loadChatHistory);

// Ubah appendMessage agar otomatis nyimpen tiap kali ada pesan baru
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

  // simpan setiap kali ada pesan baru
  saveChatHistory();
}



// Balasan otomatis sederhana
function getBotReply(input) {
  input = input.toLowerCase();

  if (input.includes('halo') || input.includes('hai') || input.includes('hallo') || input.includes('hi')) {
    return 'Hai juga, Justyfriend! Ada yang bisa JustyBox bantu?';
  } 
  else if (input.includes('nama kamu')) {
    return 'Namaku JustyBox! Asisten virtualmu yang siap bantu ✨';
  }
  else if (input.includes('apa kabar')) {
    return 'Aku baik banget, semoga Justyfriend juga ya 💕';
  }
  else if (input.includes('terima kasih') || input.includes('makasih')) {
    return 'Sama-sama~ senang bisa bantu 🌸';
  }
  else if (input.includes('webinar')) {
    return 'Kamu bisa cek halaman Webinar di menu atas, ya 🧠✨';
  }
  else if (input.includes('layanan')) {
    return 'Kami punya banyak layanan seru! Klik menu Layanan di atas 💼';
  }
  else if (input.includes('kontak')) {
    return 'Kamu bisa hubungi kami lewat halaman Kontak 📞';
  }
  else if (input.includes('ketemu') || input.includes('bertemu')) {
    return 'Kamu bisa hubungi kami lewat halaman Kontak 📞 untuk bertemu dengan kami';
  }
  else if (input.includes('janji')) {
    return 'Kamu bisa membuat janji dengan Lawyer melalui halaman Layanan 💼';
  }


  if(input.includes('tanya pasal')||
            input.includes('bingung pasal')||
            input.includes('pasal apa')||
            input.includes('undang undang')||
            input.includes('dasar hukum')||
            input.includes('bunyi pasal')){
    return `
  <b>Baik, Justyfriend!</b> Kalau kamu ingin tahu tentang pasal atau aturan hukum tertentu,
  aku bisa bantu kasih penjelasan dasarnya.
  <br><br>
  Bisa sebut undang-undang yang dimaksud?<br>
  Misalnya UU ITE / LLAJ / KUHP/ Perlindungan Anak / PKDRT / KDRT / Pornografi / Hak Cipta / PDP / Konsumen
      `;
}


// ITE
else if(input.includes('uu ite') || input.includes('ite')){
  return `
    <b>UU ITE</b> adalah singkatan dari <b>Undang-Undang Informasi dan Transaksi Elektronik</b>, yaitu <b>Undang-Undang Nomor 11 Tahun 2008</b> yang mengatur segala hal terkait informasi elektronik dan transaksi elektronik di Indonesia.<br><br>

    UU ITE mengatur tentang:<br>
    <ul>
      <li>Definisi informasi dan dokumen elektronik</li>
      <li>Transaksi elektronik dan tanda tangan elektronik</li>
      <li>Perlindungan data pribadi dan privasi</li>
      <li>Larangan penyebaran konten negatif seperti hoaks, pencemaran nama baik, dan pornografi</li>
      <li>Sanksi atas pelanggaran di dunia digital</li>
    </ul>
    
    Undang-undang ini sangat penting dalam mengatur aktivitas digital dan keamanan di internet di Indonesia. 
  `;
}




//LLAJ
else if(input.includes('llaj') || input.includes('uu llaj')) {
   return `
LLAJ (<b>Lalu Lintas dan Angkutan Jalan</b>) adalah keseluruhan aspek yang berkaitan dengan pengaturan, pengendalian, dan penyelenggaraan lalu lintas serta angkutan di jalan raya. Hal ini mencakup aspek keselamatan, ketertiban, kenyamanan, dan kelancaran dalam penggunaan jalan oleh berbagai moda transportasi. LLAJ bertujuan menjamin keamanan bagi pengguna jalan serta menciptakan sistem transportasi jalan yang efektif dan efisien.<br><br>

Dalam konteks hukum, LLAJ diatur oleh berbagai peraturan perundang-undangan, antara lain:<br>
1. <b>Undang-Undang Nomor 22 Tahun 2009</b> tentang Lalu Lintas dan Angkutan Jalan yang menjadi dasar utama pengaturan lalu lintas dan angkutan di jalan raya.<br>
2. <b>Undang-Undang Nomor 38 Tahun 2004</b> tentang Jalan sebagai landasan pengelolaan dan pemeliharaan jalan.<br>
3. <b>Undang-Undang Nomor 11 Tahun 2020</b> tentang Cipta Kerja yang juga mengatur beberapa ketentuan terkait sektor transportasi.<br>
4. Peraturan Pemerintah dan Peraturan Menteri terkait teknis penyelenggaraan lalu lintas dan angkutan jalan.<br>
5. Peraturan Daerah yang mengatur ketentuan lalu lintas di wilayah masing-masing.<br><br>

Semua regulasi ini bertujuan menciptakan sistem LLAJ yang aman, tertib, dan mendukung mobilitas masyarakat secara optimal.
  `;
}





// KUHP
else if(input.includes('uu kuhp') || input.includes('kuhp')){
   return `
  KUHP (<b>Kitab Undang-Undang Hukum Pidana</b>) adalah kumpulan peraturan hukum pokok yang mengatur tindak pidana, tindakan yang dilarang, serta sanksi yang dikenakan terhadap pelaku kejahatan di Indonesia. KUHP menjadi dasar hukum utama dalam penegakan hukum pidana dan merupakan rujukan dalam proses peradilan pidana di pengadilan.<br><br>

  KUHP mengatur berbagai jenis tindak pidana, antara lain:<br>
  - <b>Kejahatan terhadap keamanan negara</b> (misal: makar)<br>
  - <b>Kejahatan terhadap nyawa dan tubuh</b> (misal: pembunuhan, penganiayaan)<br>
  - <b>Kejahatan terhadap harta benda</b> (misal: pencurian, penggelapan)<br>
  - <b>Kejahatan terhadap kesusilaan</b> (misal: perzinahan, pencabulan)<br>
  - <b>Kejahatan terhadap ketertiban umum</b> (misal: penghasutan, perusakan)<br><br>

  Beberapa pasal penting dalam KUHP yang sering dirujuk antara lain:<br>
  - <b>Pasal 338</b>: <i>Mengatur tentang tindak pidana pembunuhan</i>, dengan ancaman pidana penjara paling lama 15 tahun.<br>
  - <b>Pasal 362</b>: <i>Mengatur pencurian</i>, dengan ancaman pidana penjara paling lama 5 tahun atau denda.<br>
  - <b>Pasal 351</b>: <i>Mengatur penganiayaan</i>, dengan ancaman pidana berbeda tergantung berat ringannya perbuatan.<br>
  - <b>Pasal 378</b>: <i>Mengatur penipuan</i>, dengan ancaman pidana penjara maksimal 4 tahun.<br>
  - <b>Pasal 310</b>: <i>Mengatur pencemaran nama baik (fitnah)</i>, dengan ancaman pidana penjara atau denda.<br><br>

  KUHP disusun sejak masa kolonial Belanda dan mengalami berbagai pembaruan agar relevan dengan perkembangan hukum di Indonesia. Selain KUHP, terdapat juga KUHAP (<i>Kitab Undang-Undang Hukum Acara Pidana</i>) yang mengatur tata cara penyidikan, penuntutan, dan persidangan perkara pidana.<br><br>

  KUHP merupakan instrumen hukum yang sangat penting dalam menjaga ketertiban dan keadilan di masyarakat dengan memberikan landasan hukum bagi penegak hukum untuk menindak pelaku kejahatan secara adil dan terukur.
    `;
}




//Perlindungan Anak
else if(input.includes('uu perlindungan anak') || input.includes('perlindungan anak')){
   return `
  <b>Perlindungan Anak</b> adalah segala upaya yang dilakukan untuk menjamin dan melindungi hak-hak anak agar mereka dapat tumbuh dan berkembang secara optimal sesuai dengan harkat dan martabat manusia, serta mendapat perlindungan dari kekerasan, diskriminasi, eksploitasi, dan perlakuan yang merugikan lainnya.<br><br>

  Perlindungan Anak diatur dalam berbagai peraturan perundang-undangan, antara lain:<br>
  1. <b>Undang-Undang Nomor 35 Tahun 2014</b> tentang Perubahan atas Undang-Undang Nomor 23 Tahun 2002 tentang Perlindungan Anak.<br>
  2. <b>Undang-Undang Nomor 23 Tahun 2002</b> tentang Perlindungan Anak.<br>
  3. <b>Konvensi Hak Anak</b> (Convention on the Rights of the Child) yang diratifikasi oleh Indonesia.<br><br>

  Perlindungan anak mencakup berbagai aspek seperti:<br>
  - Perlindungan dari kekerasan fisik, psikis, dan seksual.<br>
  - Perlindungan dari eksploitasi ekonomi dan sosial.<br>
  - Perlindungan hak atas pendidikan, kesehatan, dan lingkungan yang layak.<br>
  - Perlindungan dalam situasi darurat dan bencana.<br><br>

  Beberapa contoh program perlindungan anak yang dijalankan oleh pemerintah dan lembaga terkait:<br>
  - <b>Program Pusat Pelayanan Terpadu Pemberdayaan Perempuan dan Anak (P2TP2A)</b>, sebagai tempat pelayanan dan perlindungan korban kekerasan.<br>
  - <b>Program Sekolah Ramah Anak</b> yang menciptakan lingkungan belajar yang aman dan nyaman bagi anak.<br>
  - <b>Program Kampung/Kota Layak Anak</b> yang mendorong terciptanya lingkungan sosial dan fisik yang mendukung hak-hak anak.<br><br>

  Lembaga-lembaga penting yang berperan dalam perlindungan anak antara lain:<br>
  - <b>Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (Kemen PPPA)</b>.<br>
  - <b>Komisi Nasional Perlindungan Anak (Komnas PA)</b>.<br>
  - <b>Lembaga Swadaya Masyarakat (LSM)</b> yang fokus pada hak anak dan perlindungan anak.<br><br>

  Perlindungan anak adalah tanggung jawab bersama seluruh elemen masyarakat untuk menciptakan lingkungan yang aman dan mendukung tumbuh kembang anak secara sehat dan bahagia.
    `;
}




//PKDRT
else if(input.includes('uu pkdrt') || input.includes('pkdrt')){
    return `
  <b>PKDRT (Penghapusan Kekerasan Dalam Rumah Tangga)</b> adalah upaya untuk mencegah, menangani, dan menghapus segala bentuk kekerasan yang terjadi dalam rumah tangga, baik kekerasan fisik, psikis, seksual, maupun penelantaran. Tujuannya adalah melindungi korban dan menciptakan lingkungan keluarga yang aman, harmonis, dan bebas dari kekerasan.<br><br>

  PKDRT diatur dalam <b>Undang-Undang Nomor 23 Tahun 2004</b> tentang Penghapusan Kekerasan Dalam Rumah Tangga, yang menjadi dasar hukum utama dalam penanganan kasus kekerasan dalam rumah tangga di Indonesia.<br><br>

  Jenis kekerasan dalam rumah tangga yang diatur antara lain:<br>
  - Kekerasan fisik, seperti pemukulan, penganiayaan.<br>
  - Kekerasan psikis, seperti intimidasi, penghinaan, ancaman.<br>
  - Kekerasan seksual, seperti pemaksaan hubungan seksual.<br>
  - Penelantaran rumah tangga, seperti tidak memberikan nafkah.<br><br>

  Upaya penanganan PKDRT meliputi:<br>
  - Perlindungan dan pendampingan bagi korban.<br>
  - Penyidikan dan penegakan hukum terhadap pelaku.<br>
  - Rehabilitasi sosial dan pemulihan psikologis korban.<br><br>

  Lembaga yang berperan aktif dalam penanganan PKDRT antara lain:<br>
  - <b>Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (Kemen PPPA)</b>.<br>
  - <b>Unit Pelayanan Terpadu Pemberdayaan Perempuan dan Anak (UPTPPA)</b> di tingkat daerah.<br>
  - <b>Polisi</b> dan <b>Pengadilan</b> dalam proses hukum.<br><br>

  PKDRT merupakan isu penting dalam upaya mewujudkan keluarga dan masyarakat yang sehat, aman, dan berkeadilan.
    `;
}



//kdrt
else if(input.includes('kdrt') || input.includes('uu kdrt')){
    return `
  <b>KDRT (Kekerasan Dalam Rumah Tangga)</b> adalah segala bentuk kekerasan yang terjadi di lingkungan rumah tangga yang dapat berupa kekerasan fisik, psikis, seksual, dan penelantaran terhadap anggota keluarga. KDRT merusak keharmonisan keluarga serta melanggar hak asasi manusia dan norma sosial.<br><br>

  Jenis-jenis KDRT meliputi:<br>
  - <b>Kekerasan fisik</b>: seperti pemukulan, penyiksaan, dan tindakan yang menyebabkan luka fisik.<br>
  - <b>Kekerasan psikis</b>: seperti ancaman, intimidasi, penghinaan, dan perlakuan yang merendahkan martabat.<br>
  - <b>Kekerasan seksual</b>: pemaksaan hubungan seksual atau tindakan seksual yang tidak diinginkan dalam rumah tangga.<br>
  - <b>Penelantaran</b>: tidak memberikan nafkah, pengabaian terhadap kebutuhan dasar anggota keluarga.<br><br>

  KDRT diatur dan dihapuskan melalui <b>Undang-Undang Nomor 23 Tahun 2004</b> tentang Penghapusan Kekerasan Dalam Rumah Tangga, yang memberikan landasan hukum untuk perlindungan korban dan penegakan hukum terhadap pelaku.<br><br>

  Upaya penanganan KDRT meliputi:<br>
  - Perlindungan dan rehabilitasi korban.<br>
  - Penegakan hukum melalui proses penyidikan dan pengadilan.<br>
  - Pendidikan dan sosialisasi pencegahan kekerasan dalam keluarga.<br><br>

  KDRT merupakan masalah serius yang memerlukan perhatian seluruh elemen masyarakat agar tercipta keluarga yang aman, harmonis, dan bebas dari kekerasan.
    `;
}





//Pornografi
else if(input.includes('pornografi') || input.includes('uu pornografi')){
    return `
  <b>Pornografi</b> adalah segala bentuk gambar, tulisan, suara, dan/atau informasi lainnya melalui media apapun yang menampilkan atau menggambarkan alat kelamin atau aktivitas seksual dengan tujuan untuk menimbulkan rasa birahi atau ketertarikan seksual.<br><br>

  Pornografi diatur dalam <b>Undang-Undang Nomor 44 Tahun 2008</b> tentang Pornografi, yang bertujuan untuk melindungi moral dan nilai-nilai sosial masyarakat serta menjaga kesehatan mental dan fisik terutama anak-anak dan generasi muda dari dampak negatif pornografi.<br><br>

  Beberapa ketentuan penting dalam UU Pornografi:<br>
  - <b>Pasal 4</b>: Larangan memproduksi, menggandakan, memperbanyak, menyebarluaskan, dan/atau menyiarkan materi pornografi.<br>
  - <b>Pasal 10</b>: Pelarangan pembuatan, penggandaan, penyebaran, dan/atau penayangan pornografi anak.<br>
  - <b>Pasal 15</b>: Larangan membuat, menyimpan, atau menyebarkan pornografi melalui media elektronik dan internet.<br><br>

  Jenis materi pornografi yang dilarang meliputi:<br>
  - Gambar atau tulisan yang menampilkan alat kelamin secara eksplisit.<br>
  - Adegan hubungan seksual atau tindakan asusila.<br>
  - Konten yang memicu hasrat seksual yang tidak sesuai norma dan etika.<br><br>

  Sanksi pidana bagi pelaku pelanggaran pornografi:<br>
  - Hukuman penjara hingga 12 tahun.<br>
  - Denda mencapai miliaran rupiah.<br>
  - Sanksi tambahan berupa penyitaan alat bukti dan pemusnahan materi pornografi.<br><br>

  Selain itu, UU ini juga menekankan pentingnya peran serta masyarakat, pemerintah, dan lembaga terkait dalam melakukan pencegahan, edukasi, dan penegakan hukum terhadap pelanggaran pornografi.<br><br>

  Perlindungan khusus juga diberikan kepada anak-anak dari paparan materi pornografi, sesuai dengan Undang-Undang Perlindungan Anak dan aturan lainnya.
    `;
}




//Hak Cipta
else if(input.includes('hak cipta') || input.includes('uu hak cipta')){
    return `
  <b>Hak Cipta</b> adalah hak eksklusif yang diberikan oleh negara kepada pencipta atau pemegang hak cipta atas karya ciptaannya di bidang ilmu pengetahuan, seni, dan sastra. Hak ini meliputi hak untuk mengumumkan, memperbanyak, dan menggunakan karya cipta tersebut sesuai dengan ketentuan peraturan perundang-undangan.<br><br>

  Hak cipta diatur dalam <b>Undang-Undang Nomor 28 Tahun 2014</b> tentang Hak Cipta yang memberikan perlindungan hukum bagi pencipta karya serta mengatur sanksi atas pelanggaran hak cipta.<br><br>

  <b>Jenis karya yang dilindungi hak cipta antara lain:</b><br>
  - Karya tulis seperti buku, artikel, dan naskah.<br>
  - Karya seni seperti lukisan, patung, kaligrafi, dan karya seni rupa lainnya.<br>
  - Karya musik dan lagu, termasuk lirik dan aransemen.<br>
  - Karya sinematografi dan fotografi.<br>
  - Program komputer dan perangkat lunak.<br>
  - Terjemahan, adaptasi, atau transformasi dari karya asli.<br><br>

  <b>Hak yang diberikan kepada pencipta meliputi:</b><br>
  - Hak moral: hak untuk mengklaim penciptaan karya dan menjaga integritas karya.<br>
  - Hak ekonomi: hak untuk mendapatkan keuntungan ekonomi dari karya melalui pengumuman, reproduksi, penyewaan, atau distribusi.<br><br>

  <b>Pelanggaran Hak Cipta:</b><br>
  Pelanggaran hak cipta dapat berupa:<br>
  - Penggandaan karya tanpa izin.<br>
  - Penyebaran atau distribusi karya tanpa persetujuan pemegang hak.<br>
  - Penggunaan karya untuk tujuan komersial tanpa lisensi.<br><br>

  <b>Sanksi hukum terhadap pelanggaran hak cipta (Pasal 72 UU Hak Cipta):</b><br>
  - Pidana penjara maksimal 7 tahun.<br>
  - Denda maksimal Rp5 miliar.<br><br>

  <b>Prosedur pendaftaran hak cipta:</b><br>
  - Mengajukan permohonan ke Direktorat Jenderal Kekayaan Intelektual (DJKI).<br>
  - Melampirkan karya cipta dan dokumen pendukung lainnya.<br>
  - Pemeriksaan formal dan substantif oleh DJKI.<br>
  - Jika disetujui, sertifikat hak cipta diterbitkan sebagai bukti legalitas.<br><br>

  <b>Contoh kasus pelanggaran hak cipta:</b><br>
  - Pembajakan buku dan karya tulis tanpa izin pencipta.<br>
  - Penggunaan musik tanpa lisensi di media komersial.<br>
  - Penyalinan perangkat lunak ilegal (software bajakan).<br><br>

  UU Hak Cipta mendorong perlindungan atas kreativitas dan inovasi sehingga pencipta karya mendapat penghargaan dan insentif yang layak, sekaligus memberikan kepastian hukum dalam penggunaan karya cipta.
    `;
}




//PDP
else if(input.includes('pdp') || input.includes('uu pdp')){
    return `
  <b>PDP (Perlindungan Data Pribadi)</b> adalah upaya dan kebijakan yang dilakukan untuk melindungi data pribadi seseorang agar tidak disalahgunakan, diakses, atau diproses tanpa izin. Data pribadi meliputi segala informasi yang berkaitan dengan identitas individu, baik langsung maupun tidak langsung.<br><br>

  Perlindungan Data Pribadi diatur oleh <b>Undang-Undang Nomor 27 Tahun 2022</b> tentang Perlindungan Data Pribadi (UU PDP), yang menjadi landasan hukum utama dalam menjaga privasi dan keamanan data pribadi di Indonesia.<br><br>

  Beberapa poin penting dalam UU PDP:<br>
  - <b>Hak subjek data</b>: hak individu untuk mengakses, memperbaiki, menghapus, dan membatasi penggunaan data pribadinya.<br>
  - <b>Kewajiban pengendali data</b>: pihak yang mengelola data wajib menjaga keamanan, keakuratan, dan kerahasiaan data pribadi.<br>
  - <b>Prinsip pengolahan data</b>: data harus diproses secara sah, adil, transparan, dan sesuai dengan tujuan yang jelas.<br>
  - <b>Persetujuan</b>: pengumpulan dan pemrosesan data harus didasarkan pada persetujuan yang jelas dari pemilik data, kecuali diatur lain oleh undang-undang.<br><br>

  UU PDP juga mengatur sanksi administratif dan pidana bagi pelanggaran perlindungan data pribadi, termasuk denda dan hukuman penjara.<br><br>

  Perlindungan Data Pribadi sangat penting di era digital untuk melindungi privasi individu dari risiko kebocoran data, penyalahgunaan informasi, dan kejahatan siber.
    `;
}




//Konsumen
else if(input.includes('konsumen') || input.includes('uu konsumen')){
    return `
  <b>Konsumen</b> adalah setiap orang atau badan hukum yang menggunakan barang dan/atau jasa yang tersedia dalam masyarakat, baik untuk kepentingan diri sendiri, keluarga, orang lain, atau makhluk hidup lain dan tidak untuk diperdagangkan.<br><br>

  Definisi dan perlindungan konsumen diatur dalam <b>Undang-Undang Nomor 8 Tahun 1999</b> tentang Perlindungan Konsumen (UUPK), yang bertujuan memberikan perlindungan hukum kepada konsumen serta menciptakan hubungan yang adil antara pelaku usaha dan konsumen.<br><br>

  Hak-hak konsumen menurut UUPK antara lain:<br>
  - Hak atas kenyamanan, keamanan, dan keselamatan dalam menggunakan barang/jasa.<br>
  - Hak untuk memilih dan mendapatkan barang/jasa sesuai dengan nilai dan standar yang dijanjikan.<br>
  - Hak untuk didengar pendapat dan keluhannya atas barang/jasa yang digunakan.<br>
  - Hak atas informasi yang benar, jelas, dan jujur mengenai kondisi dan jaminan barang/jasa.<br>
  - Hak untuk mendapatkan perlindungan hukum dalam menggunakan barang/jasa.<br><br>

  Kewajiban konsumen juga diatur, seperti menggunakan barang/jasa sesuai petunjuk dan membayar sesuai perjanjian.<br><br>

  Pelaku usaha wajib memberikan informasi, jaminan mutu, serta bertanggung jawab atas kerugian yang dialami konsumen akibat penggunaan barang/jasa.<br><br>

  Jika terjadi sengketa, konsumen dapat mengajukan pengaduan kepada Badan Penyelesaian Sengketa Konsumen (BPSK) atau melalui jalur pengadilan.<br><br>

  Perlindungan konsumen bertujuan menciptakan iklim usaha yang sehat dan meningkatkan kepercayaan masyarakat terhadap produk dan jasa yang beredar di pasar.
    `;
}



//KEKERASAN
  if (input.includes('informasi tentang kekerasan') || input.includes('informasi kekerasan') || input.includes('tentang kekerasan')) {
  return `<p><b>Kekerasan adalah setiap perbuatan yang menyebabkan rasa sakit atau penderitaan secara fisik, seksual, psikologis, atau penelantaran, baik yang dilakukan secara sengaja maupun tidak.</b></p>
    <p>Penganiayaan termasuk dalam bentuk kekerasan, yaitu perbuatan yang dengan sengaja menyebabkan luka atau rasa sakit pada tubuh atau jiwa orang lain, seperti pukulan, tendangan, penyiksaan, atau perlakuan kasar lainnya.</p>
    <p>Kekerasan merupakan pelanggaran terhadap hak asasi manusia dan martabat individu, serta dapat dikenakan sanksi sesuai dengan ketentuan hukum yang berlaku.</p>
    <p>Untuk informasi lebih lengkap, kunjungi <a href="https://peraturan.bpk.go.id/" target="_blank">www.peraturan.bpk.go.id</a>.</p><br><br>
    Apakah anda sedang mengalami kekerasan dari orang lain? Silakan beri tahu kami.
`;
} else if (
  input.includes('mengalami kekerasan') ||
  input.includes('laporan kekerasan') ||
  input.includes('ada kekerasan') ||
  input.includes('terjadi kekerasan')
) {
  return `<p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
}  else if (input.includes('penganiayaan') || input.includes('kekerasan')) {
    return `Kalau mengalami penganiayaan atau kekerasan, segera amankan diri dan laporkan ke polisi.<br>
    Info lengkap dan pendampingan hukum ada di halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a>.`;
}




// PENIPUAN
if (input.includes('informasi tentang penipuan') || input.includes('informasi penipuan') || input.includes('tentang penipuan')) {
  return `KUHP Nomor 378 Pasal Penipuan<br>
  <br>
  Barang siapa dengan maksud untuk menguntungkan diri sendiri atau orang lain secara melawan hukum, dengan memakai nama palsu, martabat palsu, tipu muslihat, atau rangkaian kebohongan, menggerakkan orang lain untuk menyerahkan sesuatu benda, memberi hutang, atau menghapuskan piutang, diancam karena penipuan dengan pidana penjara paling lama empat tahun.
  <br>`;
}else if (
  input.includes('mengalami penipuan') ||
  input.includes('laporan penipuan') ||
  input.includes('ada penipuan') ||
  input.includes('terjadi penipuan') ||
  input.includes('ditipu') ||
  input.includes('ketipu') ||
  input.includes('tertipu')
) {
  return `<p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if(input.includes('penipuan online')||
          input.includes('tipu online')||
          input.includes('nipu online')){
    return `Justyfriend, kalau kamu mengalami atau mencurigai adanya <b>penipuan online</b>, jangan panik dulu ya 💛
  <br><br>
  Secara hukum, kasus seperti ini bisa dijerat dengan <b>Pasal 378 KUHP tentang Penipuan</b> dan juga <b>UU No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE)</b>, terutama kalau penipuannya dilakukan lewat media digital seperti chat, toko online, atau media sosial.
  <br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
}




// BISNIS
if (input.includes('mengalami masalah bisnis')||
            input.includes('masalah bisnis')) {
  return 'Bisa jelasin dulu masalah bisnismu itu seperti apa? Apakah soal keuangan, pelanggan, partner, legal, sengketa atau operasional? 😌';
} else if (input.includes('keuangan')) {
  return `Oke Justyfriend 💛, kalau masalah bisnismu keuangan, biasanya yang terjadi itu berkaitan sama arus kas, pencatatan, utang/piutang, atau pengeluaran yang nggak terkendali.<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (input.includes('utang-piutang') ||
 input.includes('utang piutang') ||
 input.includes('hutang piutang') ||
 input.includes('hutang') ||
 input.includes('utang') ||
 input.includes('pinjol')
) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (input.includes('pelanggan')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (
  input.includes('partner')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
}
else if (
  input.includes('legal')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (
  input.includes('operasional')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (input.includes('sengketa bisnis')) {
    return `Jika kamu menghadapi sengketa bisnis, seperti perselisihan partner atau pelanggan, ada langkah hukum yang bisa ditempuh.<br>
    Untuk informasi lengkap dan konsultasi, kunjungi halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a>, ya.`;
  }


// KELUARGA
if (
  input.includes('permasalahan di keluarga') || 
  input.includes('masalah di keluarga') || 
  input.includes('masalah antar keluarga')|| 
  input.includes('permasalahan keluarga')) {
  return `Justyfriend 💛, boleh jelaskan masalahnya lebih spesifik?<br><br>

  <b>Contoh Masalah Keluarga</b><br>
  - Perselisihan rumah tangga antara suami-istri<br>
  - Perceraian atau gugatan cerai<br>
  - Hak asuh anak<br>
  - Masalah warisan atau harta keluarga<br>
  - Kekerasan dalam rumah tangga (KDRT)<br><br>

  Boleh kamu tuliskan masalah seperti apa yang kamu hadapi?
  `;
  } else if (
  input.includes('perselisihan rumah tangga suami istri')|| 
  input.includes('masalah sama suami')|| 
  input.includes('masalah sama istri')|| 
  input.includes('selisih rumah tangga')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (
  input.includes('perceraian')|| 
  input.includes('gugatan cerai')|| 
  input.includes('cerai')|| 
  input.includes('bercerai')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (
  input.includes('hak asuh anak')|| 
  input.includes('hak asuh')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (
  input.includes('warisan')|| 
  input.includes('warisan ortu')|| 
  input.includes('harta keluarga')|| 
  input.includes('harta warisan')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
} else if (
  input.includes('kdrt')|| 
  input.includes('kekerasan dalam rumah tangga')|| 
  input.includes('dipukul suami')|| 
  input.includes('kdrt oleh suami')) {
  return `Oke Justyfriend 💛,<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
}




// BULLYING
if (
  input.includes('bullying') || 
  input.includes('perundungan') || 
  input.includes('intimidasi') || 
  input.includes('di-bully') ||
  input.includes('dibully') ||
  input.includes('pembullyan') ||
  input.includes('pembully-an') ||
  input.includes('bully')
) {
  return `Justyfriend 💛, kalau masalahmu terkait <b>bullying / perundungan</b>, itu berarti ada perlakuan kasar atau intimidasi yang merugikan secara fisik, verbal, atau psikologis.<br><br>

  <b>Contoh Bullying</b><br>
  - Verbal: ejekan, hinaan, ancaman, pelecehan kata-kata<br>
  - Fisik: pukul, dorong, ambil barang tanpa izin<br>
  - Psikologis / Sosial: isolasi, gosip, intimidasi<br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
}




// LALU LINTAS
if(input.includes('sim')||
  input.includes('lalu lintas')||
  input.includes('kendaraan')||
  input.includes('rambu')||
  input.includes('mobil')||
  input.includes('motor')){
  return `Justyfriend, kalau soal <b>lalu lintas</b> diatur dalam UU No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan ya 🚗
  <br><br>
  Biasanya kalau cuma pelanggaran ringan, seperti lupa bawa SIM atau nerobos lampu merah, cukup dikenai denda.
  <br>
  Tapi kalau sampai menyebabkan kecelakaan atau kerugian orang lain, bisa masuk pidana karena dianggap lalai.
  <br><br>
  <p><b>Kami memahami permasalahan Anda dengan serius.</b></p>
  <p>JusticeGo memiliki <i>lawyer</i> yang berpengalaman dan tepat untuk membantu menyelesaikan kasus seperti ini.</p>
  <p>Untuk mengetahui lebih lanjut mengenai layanan yang kami tawarkan dan bagaimana kami dapat membantu, silakan kunjungi halaman <b><i><a href="layanan.html">layanan</a></i></b> kami.</p>
  <p>Tim kami siap memberikan pendampingan hukum yang Anda butuhkan demi mendapatkan solusi terbaik.</p>
  `;
}




// KETENAGAKERJAAN
 if (input.includes('ketenagakerjaan') || input.includes('masalah kerja')|| input.includes('masalah ketenagakerjaan') || input.includes('masalah di tempat kerja')) {
    return `Masalah ketenagakerjaan sering muncul, seperti:<br>
    - Gaji yang tidak dibayar tepat waktu atau tidak sesuai kontrak<br>
    - PHK tanpa prosedur yang benar<br>
    - Perselisihan tentang kontrak kerja<br>
    - Diskriminasi atau pelecehan di tempat kerja<br><br>
    Masalah seperti apa yang kamu sedang hadapi?`;
  }else if (input.includes('phk') || input.includes('pemutusan hubungan kerja')) {
    return `Pemutusan Hubungan Kerja (PHK) harus mengikuti prosedur hukum yang berlaku, misalnya ada surat pemberitahuan, pesangon, dan hak lainnya.<br>
    Untuk info lengkap dan bantuan hukum, silakan kunjungi halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a> kami, Justyfriend.`;
  }else if (input.includes('pelecehan di kerja') || input.includes('pelecehan kerja')|| input.includes('pelecehan di tempat kerja')) {
    return `Kalau kamu mengalami pelecehan di tempat kerja, kamu berhak melapor dan mendapatkan perlindungan.<br>
    Silakan cek detail dan cara melapor di halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a> kami, ya. Kami siap membantu.`;
  }else if (input.includes('gaji') || input.includes('gaji ga adil') || input.includes('gaji tidak adil')|| input.includes('gaji ga dibayar')) {
    return `Pemutusan Hubungan Kerja (PHK) harus mengikuti prosedur hukum yang berlaku, misalnya ada surat pemberitahuan, pesangon, dan hak lainnya.<br>
    Untuk info lengkap dan bantuan hukum, silakan kunjungi halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a> kami, Justyfriend.`;
  }




  // ====== PIDANA ======
  if (input.includes('pidana') ||
   input.includes('kasus pidana') || 
   input.includes('tindak pidana') || 
   input.includes('laporan polisi')|| 
   input.includes('kena kasus pidana') ||
   input.includes('kena pidana')) {
    return `Kasus pidana seperti pencurian, penipuan, penganiayaan harus dilaporkan ke polisi untuk proses hukum.<br>
    Kami bisa bantu arahkan kamu untuk langkah selanjutnya lewat halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a>.`;
  }




  // ====== PERDATA ======
  if (input.includes('perdata') ||
  input.includes('sengketa perdata') ||
  input.includes('gugatan perdata') || 
  input.includes('masalah perdata')){
    return `Sengketa perdata biasanya terkait hak dan kewajiban antar individu, seperti warisan, kontrak, atau tanah.<br>
    Kami bisa bantu kamu melalui layanan konsultasi di halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a>.`;
  }
  if (input.includes('warisan') || input.includes('harta warisan')) {
    return `Masalah warisan sering menimbulkan sengketa. Penting untuk memahami hukum warisan yang berlaku.<br>
    Silakan kunjungi halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a> untuk konsultasi dan bantuan hukum.`;
  }





  // ====== PELECEHAN ======
  if (input.includes('kena pelecehan') ||
  input.includes('pelecehan seksual') ||
  input.includes('sexual harassment') ||
  input.includes('dilecehin')) {
    return `Pelecehan, terutama pelecehan seksual, adalah tindakan yang melanggar hukum dan kamu berhak melapor.<br>
    Untuk langkah dan perlindungan hukum, cek halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a> kami, ya.`;
  }
  if (input.includes('pelecehan verbal') || input.includes('pelecehan fisik')) {
    return `Pelecehan verbal maupun fisik sama-sama serius dan bisa dilaporkan.<br>
    Kami siap membantu kamu dengan konsultasi hukum lewat halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a>.`;
  }




  // ====== ARAHAN UMUM KE HALAMAN LAYANAN ======
  if (
    input.includes('bantuan hukum') ||
    input.includes('konsultasi hukum') ||
    input.includes('minta bantuan') ||
    input.includes('butuh lawyer') ||
    input.includes('pengacara') ||
    input.includes('lawyer') ||
    input.includes('konsultasi') ||
    input.includes('cara lapor')
  ) {
    return `Kamu bisa langsung mengunjungi halaman <a href="layanan.html" target="layanan.html"><b>Layanan</b></a> kami untuk informasi lengkap dan membuat janji konsultasi dengan lawyer profesional.`;
  }

else {
    return 'Hmm... JustyBox belum paham 😅 bisa dijelaskan lagi, Justyfriend?';
  }
}

// Enter key untuk kirim
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});