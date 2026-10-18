
const modules = [
  {
    id: 1,
    icon: "⌘",
    title: "Mengenal Antarmuka Excel",
    level: "DASAR",
    duration: "20–25 menit",
    description: "Kenali bagian-bagian Excel dan fungsi menu yang sering digunakan.",
    objective: "Siswa mampu mengenali komponen utama Excel dan menemukan menu dasar.",
    steps: [
      {
        title: "Membuka Microsoft Excel",
        intro: "Kita mulai dari mengenali aplikasi dan membuat lembar kerja.",
        content: `
          <h3>Tujuan langkah ini</h3>
          <p>Membuka aplikasi Excel dan mengenali workbook.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Buka Microsoft Excel melalui menu Start atau ikon Excel di komputer.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Pilih Blank Workbook atau Buku Kerja Kosong jika tersedia.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Amati halaman kerja yang muncul. Jangan mengetik dulu; kita kenali bagian-bagiannya terlebih dahulu.</p></div>
          <div class="tip-box"><strong>Perlu diingat:</strong> Workbook adalah file Excel. Di dalam satu workbook dapat terdapat beberapa worksheet.</div>
        `,
        tasks: [
          "Excel berhasil dibuka.",
          "Workbook kosong berhasil ditampilkan."
        ]
      },
      {
        title: "Mengenal Title Bar dan Quick Access Toolbar",
        intro: "Bagian atas Excel menampilkan nama file dan beberapa perintah cepat.",
        content: `
          <h3>Title Bar</h3>
          <p>Title Bar berada di bagian paling atas jendela. Bagian ini menampilkan nama workbook dan informasi aplikasi.</p>
          <h3>Quick Access Toolbar</h3>
          <p>Toolbar ini menyediakan akses cepat ke perintah yang sering digunakan. Isinya dapat berbeda menurut versi dan pengaturan Excel.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Lihat bagian paling atas jendela Excel.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Temukan nama workbook atau tulisan yang menunjukkan file masih baru.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Jika tersedia, cari ikon Save, Undo, dan Redo pada toolbar akses cepat.</p></div>
          <div class="tip-box"><strong>Fungsi:</strong> Save menyimpan perubahan, Undo membatalkan tindakan terakhir, dan Redo mengulangi tindakan yang dibatalkan.</div>
        `,
        tasks: [
          "Saya menemukan nama workbook di bagian atas.",
          "Saya dapat mengenali fungsi Save, Undo, dan Redo."
        ]
      },
      {
        title: "Mengenal Ribbon dan tab Home",
        intro: "Ribbon adalah area berisi kumpulan perintah yang dikelompokkan berdasarkan tab.",
        content: `
          <p>Tab Home merupakan salah satu tab yang paling sering digunakan ketika mengolah data.</p>
          <table class="data-table">
            <tr><th>Kelompok</th><th>Fungsi umum</th></tr>
            <tr><td>Clipboard</td><td>Cut, Copy, Paste, dan Format Painter.</td></tr>
            <tr><td>Font</td><td>Jenis, ukuran, warna, Bold, Italic, dan garis batas.</td></tr>
            <tr><td>Alignment</td><td>Perataan teks, Wrap Text, dan Merge & Center.</td></tr>
            <tr><td>Number</td><td>Format angka, tanggal, persen, dan mata uang.</td></tr>
            <tr><td>Styles</td><td>Conditional Formatting, Format as Table, dan Cell Styles.</td></tr>
            <tr><td>Cells</td><td>Insert, Delete, dan Format sel/baris/kolom.</td></tr>
            <tr><td>Editing</td><td>AutoSum, Fill, Clear, Sort & Filter, dan Find.</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik tab Home.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Amati kelompok Clipboard, Font, Alignment, Number, Styles, Cells, dan Editing.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Arahkan kursor ke ikon untuk membaca tooltip jika tersedia. Jangan mengubah data dulu.</p></div>
        `,
        tasks: [
          "Saya menemukan tab Home.",
          "Saya dapat menyebutkan fungsi Font dan Alignment.",
          "Saya mengetahui bahwa format angka berada pada kelompok Number."
        ]
      },
      {
        title: "Mengenal tab Insert",
        intro: "Tab Insert digunakan untuk menambahkan objek ke lembar kerja.",
        content: `
          <table class="data-table">
            <tr><th>Perintah</th><th>Kegunaan</th></tr>
            <tr><td>Table</td><td>Mengubah rentang data menjadi tabel Excel.</td></tr>
            <tr><td>Pictures</td><td>Menyisipkan gambar.</td></tr>
            <tr><td>Shapes</td><td>Menyisipkan bentuk.</td></tr>
            <tr><td>Charts</td><td>Membuat grafik dari data.</td></tr>
            <tr><td>PivotTable</td><td>Meringkas dan menganalisis data.</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik tab Insert.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Temukan kelompok atau perintah Table dan Charts jika tersedia.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Perhatikan ikon-ikonnya. Kamu akan menggunakannya ketika membuat tabel dan grafik.</p></div>
        `,
        tasks: [
          "Saya dapat menemukan tab Insert.",
          "Saya memahami bahwa grafik dapat dibuat melalui kelompok Charts."
        ]
      },
      {
        title: "Mengenal tab Page Layout",
        intro: "Tab ini mengatur tata letak lembar kerja, terutama saat dicetak.",
        content: `
          <table class="data-table">
            <tr><th>Perintah</th><th>Kegunaan</th></tr>
            <tr><td>Margins</td><td>Mengatur batas tepi halaman cetak.</td></tr>
            <tr><td>Orientation</td><td>Memilih Portrait atau Landscape.</td></tr>
            <tr><td>Size</td><td>Memilih ukuran kertas.</td></tr>
            <tr><td>Print Area</td><td>Menentukan bagian yang dicetak.</td></tr>
            <tr><td>Scale to Fit</td><td>Mengatur skala agar data sesuai halaman cetak.</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik Page Layout.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Temukan Margins, Orientation, dan Size.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Kenali letaknya. Kamu belum perlu mengubah pengaturan.</p></div>
        `,
        tasks: [
          "Saya dapat menemukan tab Page Layout.",
          "Saya memahami perbedaan Portrait dan Landscape."
        ]
      },
      {
        title: "Mengenal tab Formulas",
        intro: "Tab Formulas menyediakan alat untuk menggunakan dan mengelola rumus.",
        content: `
          <table class="data-table">
            <tr><th>Perintah/kelompok</th><th>Kegunaan</th></tr>
            <tr><td>Insert Function (fx)</td><td>Membantu mencari dan memasukkan fungsi.</td></tr>
            <tr><td>AutoSum</td><td>Membantu membuat rumus seperti SUM dan AVERAGE.</td></tr>
            <tr><td>Function Library</td><td>Kumpulan fungsi berdasarkan kategori.</td></tr>
            <tr><td>Formula Auditing</td><td>Membantu memeriksa hubungan dan kesalahan rumus.</td></tr>
            <tr><td>Calculation</td><td>Mengatur opsi perhitungan workbook.</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik tab Formulas.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Temukan Insert Function atau AutoSum jika tersedia.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Amati kelompok fungsi yang tersedia. Kita akan berlatih rumus pada Modul 3.</p></div>
        `,
        tasks: [
          "Saya dapat menemukan tab Formulas.",
          "Saya mengetahui kegunaan umum AutoSum."
        ]
      },
      {
        title: "Mengenal tab Data",
        intro: "Tab Data digunakan untuk mengelola, mengurutkan, dan memeriksa data.",
        content: `
          <table class="data-table">
            <tr><th>Perintah</th><th>Kegunaan</th></tr>
            <tr><td>Sort</td><td>Mengurutkan data.</td></tr>
            <tr><td>Filter</td><td>Menampilkan data yang memenuhi kriteria.</td></tr>
            <tr><td>Text to Columns</td><td>Memisahkan isi teks ke beberapa kolom.</td></tr>
            <tr><td>Remove Duplicates</td><td>Menghapus data duplikat pada rentang terpilih.</td></tr>
            <tr><td>Data Validation</td><td>Membatasi atau mengatur jenis masukan data.</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik tab Data.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Temukan Sort dan Filter.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Ingat lokasi menu ini karena akan digunakan pada Modul 5.</p></div>
        `,
        tasks: [
          "Saya menemukan tab Data.",
          "Saya memahami perbedaan Sort dan Filter."
        ]
      },
      {
        title: "Mengenal Review dan View",
        intro: "Dua tab ini membantu pemeriksaan dokumen dan pengaturan tampilan.",
        content: `
          <h3>Tab Review</h3>
          <p>Berisi perintah seperti Spelling, Comments, dan Protect Sheet atau Protect Workbook, bergantung versi Excel.</p>
          <h3>Tab View</h3>
          <p>Berisi pengaturan tampilan seperti Normal, Page Layout, Show/Hide, Zoom, dan Freeze Panes.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik tab Review dan cari fitur pemeriksaan atau komentar.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Klik tab View dan temukan pengaturan Zoom atau Freeze Panes jika tersedia.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Kembali ke Home.</p></div>
          <div class="tip-box"><strong>Catatan:</strong> menu dapat berbeda berdasarkan versi, sistem operasi, dan jenis lisensi Excel.</div>
        `,
        tasks: [
          "Saya dapat menemukan tab Review.",
          "Saya dapat menemukan tab View.",
          "Saya memahami bahwa menu Excel memiliki fungsi yang berbeda-beda."
        ]
      },
      {
        title: "Mengenal Name Box, Formula Bar, dan worksheet",
        intro: "Bagian ini membantu kamu mengetahui posisi sel dan mengelola isi sel.",
        content: `
          <table class="data-table">
            <tr><th>Bagian</th><th>Fungsi</th></tr>
            <tr><td>Name Box</td><td>Menampilkan alamat sel aktif, misalnya A1.</td></tr>
            <tr><td>Formula Bar</td><td>Menampilkan atau mengedit isi sel aktif.</td></tr>
            <tr><td>Column headings</td><td>Penanda kolom dengan huruf.</td></tr>
            <tr><td>Row headings</td><td>Penanda baris dengan angka.</td></tr>
            <tr><td>Sheet tabs</td><td>Berpindah antarworksheet.</td></tr>
            <tr><td>Status Bar</td><td>Menampilkan informasi status dan dapat menampilkan ringkasan pilihan.</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik sel A1. Perhatikan alamat sel yang tampil pada Name Box.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Ketik contoh teks di A1. Perhatikan Formula Bar.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Temukan tab worksheet di bagian bawah jendela.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Perhatikan Status Bar pada bagian bawah Excel.</p></div>
        `,
        tasks: [
          "Saya dapat menemukan Name Box.",
          "Saya dapat menemukan Formula Bar.",
          "Saya dapat membedakan baris dan kolom.",
          "Saya dapat menemukan sheet tabs dan Status Bar."
        ]
      }
    ],
    quiz: [
      { q: "Tab apa yang umum digunakan untuk mengatur font dan perataan teks?", options: ["Insert", "Home", "Review", "View"], answer: 1 },
      { q: "Di tab mana kamu biasanya menemukan perintah untuk membuat grafik?", options: ["Insert", "Review", "View", "File"], answer: 0 },
      { q: "Apa fungsi Name Box?", options: ["Mengganti warna workbook", "Menampilkan alamat sel aktif", "Membuat grafik", "Mencetak halaman"], answer: 1 },
      { q: "Perintah Sort dan Filter umumnya berada di tab ...", options: ["Home", "Data", "View", "Review"], answer: 1 },
      { q: "Apa fungsi Formula Bar?", options: ["Menampilkan atau mengedit isi sel aktif", "Mengatur ukuran kertas", "Membuat worksheet baru saja", "Mengubah tema website"], answer: 0 }
    ]
  },
  {
    id: 2,
    icon: "▦",
    title: "Memasukkan dan Mengelola Data",
    level: "PRAKTIK DASAR",
    duration: "25–35 menit",
    description: "Membuat tabel tinggi dan berat badan dari data latihan fiktif.",
    objective: "Siswa mampu mengisi, mengedit, dan merapikan tabel data secara sistematis.",
    steps: [
      {
        title: "Siapkan workbook dan judul tabel",
        intro: "Kita akan membuat tabel data latihan kelas menggunakan data fiktif.",
        content: `
          <h3>Tujuan</h3>
          <p>Membuat lembar kerja baru dan memberi judul pada tabel.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Buka workbook kosong atau tambahkan worksheet baru.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Klik sel A1 dan ketik DATA LATIHAN TINGGI DAN BERAT BADAN.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Tekan Enter. Judul akan masuk ke sel A1.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Klik sel A3. Baris 2 sengaja dikosongkan sebagai jarak antara judul dan tabel.</p></div>
          <div class="tip-box"><strong>Ingat:</strong> setiap kali memilih sel, alamatnya dapat dilihat di Name Box.</div>
        `,
        tasks: [
          "Workbook siap digunakan.",
          "Judul sudah diketik di A1.",
          "Sel A3 siap diisi dengan kepala tabel."
        ]
      },
      {
        title: "Isi kepala tabel",
        intro: "Kita akan membuat enam kolom: nomor, nama, kelas, tinggi, berat, dan indeks latihan.",
        content: `
          <h3>Ikuti penempatan sel berikut</h3>
          <table class="data-table">
            <tr><th>Sel</th><th>Teks yang diketik</th></tr>
            <tr><td>A3</td><td>No.</td></tr>
            <tr><td>B3</td><td>Nama</td></tr>
            <tr><td>C3</td><td>Kelas</td></tr>
            <tr><td>D3</td><td>Tinggi (cm)</td></tr>
            <tr><td>E3</td><td>Berat (kg)</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik A3, ketik No., lalu tekan Tab.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Ketik Nama pada B3, lalu tekan Tab.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Lanjutkan dengan Kelas, Tinggi (cm), dan Berat (kg) sampai E3.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Tekan Enter setelah selesai.</p></div>
          <div class="tip-box">Tekan Tab untuk berpindah ke sel berikutnya dalam satu baris.</div>
        `,
        tasks: [
          "A3 berisi No.",
          "B3 berisi Nama.",
          "C3 berisi Kelas.",
          "D3 berisi Tinggi (cm).",
          "E3 berisi Berat (kg)."
        ]
      },
      {
        title: "Masukkan data siswa contoh",
        intro: "Gunakan tabel berikut sebagai sumber data. Semua nama dan angka adalah data fiktif untuk latihan.",
        content: `
          <h3>Data sumber</h3>
          <table class="data-table">
            <tr><th>No.</th><th>Nama</th><th>Kelas</th><th>Tinggi (cm)</th><th>Berat (kg)</th></tr>
            <tr><td>1</td><td>Alya</td><td>X-E1</td><td>158</td><td>48</td></tr>
            <tr><td>2</td><td>Bima</td><td>X-E1</td><td>165</td><td>55</td></tr>
            <tr><td>3</td><td>Citra</td><td>X-E1</td><td>160</td><td>50</td></tr>
            <tr><td>4</td><td>Damar</td><td>X-E1</td><td>170</td><td>62</td></tr>
            <tr><td>5</td><td>Intan</td><td>X-E1</td><td>155</td><td>45</td></tr>
            <tr><td>6</td><td>Raka</td><td>X-E1</td><td>168</td><td>58</td></tr>
            <tr><td>7</td><td>Salsa</td><td>X-E1</td><td>162</td><td>52</td></tr>
            <tr><td>8</td><td>Fajar</td><td>X-E1</td><td>172</td><td>65</td></tr>
          </table>
          <div class="instruction"><strong>Langkah 1</strong><p>Mulai dari sel A4 dan masukkan nomor 1.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Isi B4 dengan Alya, C4 dengan X-E1, D4 dengan 158, dan E4 dengan 48.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Lanjutkan baris berikutnya untuk Bima, Citra, Damar, Intan, Raka, Salsa, dan Fajar sesuai tabel sumber.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Pastikan data Alya berada pada baris 4, Bima pada baris 5, dan seterusnya hingga Fajar pada baris 11.</p></div>
          <div class="tip-box"><strong>Tips:</strong> kamu boleh memasukkan data per baris menggunakan Tab, lalu Enter. Periksa kembali sebelum melanjutkan.</div>
        `,
        tasks: [
          "Delapan data siswa contoh sudah dimasukkan.",
          "Data tinggi berada di kolom D.",
          "Data berat berada di kolom E.",
          "Data terakhir, Fajar, berada pada baris 11."
        ]
      },
      {
        title: "Memperbaiki dan mengedit data",
        intro: "Data yang salah dapat diperbaiki tanpa mengetik ulang seluruh tabel.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Klik sel yang isinya ingin diperbaiki.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Ketik nilai pengganti atau edit isi sel melalui Formula Bar.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Tekan Enter untuk menyimpan perubahan pada sel.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Untuk latihan, ubah nilai berat Alya di E4 menjadi 49, lalu ubah kembali menjadi 48.</p></div>
          <div class="tip-box">Latihan mengubah lalu mengembalikan data membantu kamu memahami cara mengedit sel. Jangan gunakan data pribadi nyata.</div>
        `,
        tasks: [
          "Saya mencoba memilih sebuah sel.",
          "Saya mengubah E4 menjadi 49.",
          "Saya mengembalikan E4 menjadi 48."
        ]
      },
      {
        title: "Merapikan lebar kolom dan menyimpan file",
        intro: "Tabel yang rapi lebih mudah dibaca dan diperiksa.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Arahkan kursor ke batas antara huruf kolom B dan C.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Jika kursor berubah menjadi penanda pengatur lebar, klik dua kali untuk AutoFit Column Width.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Ulangi pada kolom lain yang teksnya terpotong.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Tekan Ctrl+S untuk menyimpan. Jika diminta, pilih lokasi dan nama file, misalnya Latihan_Data_XE1.xlsx.</p></div>
          <div class="tip-box">Pastikan file tersimpan pada folder yang mudah ditemukan kembali.</div>
        `,
        tasks: [
          "Lebar kolom sudah disesuaikan.",
          "Tidak ada judul kolom penting yang terpotong.",
          "File latihan telah disimpan."
        ]
      }
    ],
    quiz: [
      { q: "Jika kepala tabel dimulai di A3, di sel mana nama Alya diletakkan?", options: ["B3", "A4", "B4", "C4"], answer: 2 },
      { q: "Kolom manakah yang menyimpan tinggi badan?", options: ["B", "C", "D", "E"], answer: 2 },
      { q: "Apa fungsi tombol Tab saat memasukkan data?", options: ["Berpindah ke sel berikutnya secara mendatar", "Menghapus baris", "Mencetak tabel", "Menutup Excel"], answer: 0 },
      { q: "Shortcut umum untuk menyimpan file adalah ...", options: ["Ctrl+P", "Ctrl+S", "Ctrl+Z", "Ctrl+F"], answer: 1 }
    ]
  },
  {
    id: 3,
    icon: "ƒx",
    title: "Rumus Dasar Excel",
    level: "PERHITUNGAN",
    duration: "25–35 menit",
    description: "Berlatih penjumlahan, pengurangan, SUM, dan AVERAGE.",
    objective: "Siswa mampu menulis rumus sederhana dan memeriksa hasilnya.",
    steps: [
      {
        title: "Memahami rumus dan alamat sel",
        intro: "Rumus Excel membantu menghitung data secara otomatis.",
        content: `
          <h3>Aturan dasar</h3>
          <ul>
            <li>Rumus Excel biasanya diawali tanda sama dengan (=).</li>
            <li>Tanda + digunakan untuk penjumlahan.</li>
            <li>Tanda - digunakan untuk pengurangan.</li>
            <li>Fungsi SUM digunakan untuk menjumlahkan rentang.</li>
            <li>Fungsi AVERAGE digunakan untuk menghitung rata-rata aritmetika.</li>
          </ul>
          <div class="instruction"><strong>Langkah 1</strong><p>Buka file latihan Modul 2 atau workbook kosong.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Amati bahwa rumus dapat menggunakan angka langsung atau alamat sel.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Rumus =10+5 menghasilkan 15. Rumus =B2+C2 menjumlahkan nilai di B2 dan C2.</p></div>
          <div class="tip-box">Tanda sama dengan adalah bagian penting dari rumus.</div>
        `,
        tasks: [
          "Saya memahami bahwa rumus dimulai dengan tanda sama dengan.",
          "Saya dapat membedakan angka langsung dan referensi sel."
        ]
      },
      {
        title: "Penjumlahan menggunakan tanda +",
        intro: "Kita mulai dengan rumus paling sederhana.",
        content: `
          <h3>Contoh praktik</h3>
          <p>Ketik angka 12 pada A1 dan angka 8 pada B1.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik A1, ketik 12, lalu tekan Enter.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Klik B1, ketik 8, lalu tekan Enter.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Klik C1, ketik =A1+B1, lalu tekan Enter.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa bahwa C1 menampilkan hasil 20.</p></div>
          <div class="simulator">
            <h3>Coba rumus di website</h3>
            <p>Ini simulasi latihan, bukan Microsoft Excel sungguhan.</p>
            <label>Nilai A1 <input class="sim-input" id="sumA" type="number" value="12"></label>
            <br><br>
            <label>Nilai B1 <input class="sim-input" id="sumB" type="number" value="8"></label>
            <div class="result-box" id="sumResult">Hasil = 20</div>
          </div>
        `,
        tasks: [
          "Saya mengisi A1 dengan 12 dan B1 dengan 8.",
          "Saya mengetik =A1+B1 di C1.",
          "Hasil C1 adalah 20."
        ]
      },
      {
        title: "Pengurangan menggunakan tanda -",
        intro: "Rumus pengurangan dapat digunakan untuk mencari selisih dua nilai.",
        content: `
          <h3>Contoh: sisa uang latihan</h3>
          <p>Misalnya uang awal 50.000 dan pengeluaran 15.000.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Masukkan 50000 pada A2.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Masukkan 15000 pada B2.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Pada C2 ketik =A2-B2, lalu tekan Enter.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa hasilnya: 35000.</p></div>
          <div class="simulator">
            <h3>Simulasi pengurangan</h3>
            <label>Nilai awal <input class="sim-input" id="subA" type="number" value="50000"></label>
            <br><br>
            <label>Nilai pengurang <input class="sim-input" id="subB" type="number" value="15000"></label>
            <div class="result-box" id="subResult">Hasil = 35000</div>
          </div>
        `,
        tasks: [
          "Saya memasukkan nilai awal dan pengurang.",
          "Saya mengetik rumus =A2-B2.",
          "Hasil pengurangan adalah 35000."
        ]
      },
      {
        title: "Menjumlahkan banyak data dengan SUM",
        intro: "Fungsi SUM menjumlahkan nilai dalam rentang sel.",
        content: `
          <h3>Contoh nilai tugas</h3>
          <p>Masukkan 70, 80, dan 90 pada B2, B3, dan B4.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Isi B2 dengan 70, B3 dengan 80, dan B4 dengan 90.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Klik B5.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Ketik =SUM(B2:B4), lalu tekan Enter.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa hasilnya: 240.</p></div>
          <div class="tip-box">Tanda titik dua pada B2:B4 menunjukkan rentang dari B2 sampai B4.</div>
          <div class="simulator">
            <h3>Simulasi SUM</h3>
            <label>Nilai 1 <input class="sim-input" id="sum1" type="number" value="70"></label><br><br>
            <label>Nilai 2 <input class="sim-input" id="sum2" type="number" value="80"></label><br><br>
            <label>Nilai 3 <input class="sim-input" id="sum3" type="number" value="90"></label>
            <div class="result-box" id="sumRangeResult">Jumlah = 240</div>
          </div>
        `,
        tasks: [
          "Saya mengisi tiga nilai latihan.",
          "Saya mengetik =SUM(B2:B4).",
          "Hasil penjumlahan adalah 240."
        ]
      },
      {
        title: "Menghitung rata-rata dengan AVERAGE",
        intro: "AVERAGE menghitung rata-rata aritmetika dari rentang nilai.",
        content: `
          <h3>Melanjutkan contoh nilai</h3>
          <div class="instruction"><strong>Langkah 1</strong><p>Pastikan B2, B3, dan B4 berisi 70, 80, dan 90.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Klik B6.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Ketik =AVERAGE(B2:B4), lalu tekan Enter.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa hasilnya: 80.</p></div>
          <div class="tip-box">Rata-rata = jumlah seluruh nilai dibagi banyaknya nilai. Pada contoh ini, 240 ÷ 3 = 80.</div>
          <div class="simulator">
            <h3>Simulasi AVERAGE</h3>
            <label>Nilai 1 <input class="sim-input" id="avg1" type="number" value="70"></label><br><br>
            <label>Nilai 2 <input class="sim-input" id="avg2" type="number" value="80"></label><br><br>
            <label>Nilai 3 <input class="sim-input" id="avg3" type="number" value="90"></label>
            <div class="result-box" id="avgResult">Rata-rata = 80</div>
          </div>
        `,
        tasks: [
          "Saya memahami arti rata-rata.",
          "Saya mengetik =AVERAGE(B2:B4).",
          "Hasil rata-rata adalah 80."
        ]
      },
      {
        title: "Periksa rumus dan kesalahan",
        intro: "Rumus yang salah dapat menghasilkan error atau angka yang tidak sesuai.",
        content: `
          <h3>Periksa hal-hal berikut</h3>
          <ul>
            <li>Apakah rumus diawali dengan tanda =?</li>
            <li>Apakah alamat sel yang digunakan benar?</li>
            <li>Apakah rentang sel sudah sesuai?</li>
            <li>Apakah sel yang dihitung berisi angka?</li>
          </ul>
          <div class="instruction"><strong>Langkah 1</strong><p>Klik sel yang berisi rumus.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Lihat rumus pada Formula Bar.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Bandingkan alamat sel dan tanda operasi dengan instruksi.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Perbaiki rumus jika diperlukan dan periksa hasilnya kembali.</p></div>
        `,
        tasks: [
          "Saya memeriksa rumus melalui Formula Bar.",
          "Saya dapat menyebutkan dua penyebab hasil rumus salah."
        ]
      }
    ],
    quiz: [
      { q: "Rumus Excel umumnya diawali dengan tanda ...", options: ["+", "=", "#", ":"], answer: 1 },
      { q: "Apa hasil =20-7?", options: ["27", "13", "140", "3"], answer: 1 },
      { q: "Fungsi SUM digunakan untuk ...", options: ["Mengurutkan teks", "Menjumlahkan nilai", "Mengubah warna sel", "Membuat grafik"], answer: 1 },
      { q: "Apa hasil =AVERAGE(70,80,90)?", options: ["240", "90", "80", "70"], answer: 2 }
    ]
  },
  {
    id: 4,
    icon: "▤",
    title: "Memformat Tabel",
    level: "PENYAJIAN DATA",
    duration: "20–25 menit",
    description: "Membuat tabel mudah dibaca melalui format teks, warna, batas, dan angka.",
    objective: "Siswa mampu merapikan tabel tanpa mengubah nilai datanya.",
    steps: [
      {
        title: "Pilih rentang tabel",
        intro: "Sebelum memformat, pastikan bagian data yang dipilih sudah benar.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Buka file data siswa dari Modul 2.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Pilih rentang A3:E11, termasuk kepala tabel dan delapan baris data.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Pastikan kolom dan baris yang dipilih sesuai. Hindari memilih sel di luar tabel.</p></div>
          <div class="tip-box">Rentang A3:E11 berarti mulai dari A3 sampai E11, termasuk semua sel di antaranya.</div>
        `,
        tasks: ["Saya membuka file data latihan.", "Saya memilih rentang A3:E11."]
      },
      {
        title: "Tebalkan kepala tabel",
        intro: "Judul kolom perlu dibedakan dari isi tabel.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Pilih A3:E3.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Buka tab Home dan cari kelompok Font.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Klik Bold (B) untuk menebalkan teks kepala tabel.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa bahwa hanya kepala tabel yang menjadi tebal.</p></div>
        `,
        tasks: ["Saya memilih A3:E3.", "Saya menerapkan Bold pada kepala tabel."]
      },
      {
        title: "Memberi warna dan batas tabel",
        intro: "Warna dan garis batas membantu membedakan kepala tabel dan isi.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Pilih A3:E3.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Pada tab Home, gunakan Fill Color untuk memberi warna latar yang lembut.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Jika diperlukan, ubah warna teks agar tetap kontras.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Pilih A3:E11, lalu gunakan Borders untuk menambahkan garis batas.</p></div>
          <div class="tip-box">Hindari warna terlalu banyak. Prioritaskan keterbacaan.</div>
        `,
        tasks: ["Kepala tabel memiliki warna latar.", "Garis batas tabel sudah terlihat."]
      },
      {
        title: "Atur lebar kolom dan perataan",
        intro: "Pastikan teks tidak terpotong dan data mudah dibaca.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Pilih kolom A sampai E dengan menyeret kepala kolomnya.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Klik dua kali batas salah satu kepala kolom untuk menyesuaikan lebar otomatis jika tersedia.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Pilih angka yang perlu dirapikan dan gunakan perataan sesuai kebutuhan.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa semua kepala kolom dan data agar tidak terpotong.</p></div>
        `,
        tasks: ["Lebar kolom sudah sesuai.", "Tabel dapat dibaca tanpa teks penting terpotong."]
      },
      {
        title: "Ubah data menjadi Excel Table",
        intro: "Fitur Format as Table menyediakan format tabel dan filter otomatis.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Pilih A3:E11.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Pilih Home → Format as Table atau Insert → Table, sesuai versi Excel.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Pilih gaya tabel yang sederhana.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Pastikan opsi My table has headers atau Tabel saya memiliki header dicentang, lalu konfirmasi.</p></div>
          <div class="tip-box">Jika sudah menggunakan Format as Table, jangan membuat tabel baru di atas tabel yang sama.</div>
        `,
        tasks: ["Saya dapat mengubah rentang menjadi tabel Excel.", "Kepala tabel tetap dikenali dengan benar."]
      }
    ],
    quiz: [
      { q: "Perintah Bold digunakan untuk ...", options: ["Menebalkan teks", "Menghapus baris", "Membuat rumus", "Menyimpan file"], answer: 0 },
      { q: "Apa tujuan memberi garis batas pada tabel?", options: ["Menghapus nilai", "Membantu membedakan sel dan membaca data", "Mengganti rumus", "Menutup worksheet"], answer: 1 },
      { q: "Sebelum memformat tabel, sebaiknya ...", options: ["Pilih rentang data yang benar", "Hapus seluruh data", "Tutup file", "Ubah semua angka menjadi teks"], answer: 0 }
    ]
  },
  {
    id: 5,
    icon: "⇅",
    title: "Sort dan Filter Data",
    level: "PENGELOLAAN DATA",
    duration: "20 menit",
    description: "Mengurutkan data dan menampilkan baris berdasarkan kriteria.",
    objective: "Siswa mampu membedakan Sort dan Filter dan menggunakannya pada tabel.",
    steps: [
      {
        title: "Memahami Sort dan Filter",
        intro: "Keduanya digunakan untuk membantu membaca data, tetapi fungsinya berbeda.",
        content: `
          <p><strong>Sort</strong> mengubah urutan baris berdasarkan nilai kolom. <strong>Filter</strong> menyembunyikan sementara baris yang tidak memenuhi kriteria.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Buka tabel data siswa yang sudah dibuat.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Periksa bahwa setiap baris mewakili satu siswa dan setiap kolom memiliki kepala tabel.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Simpan salinan file sebelum mencoba Sort jika ingin mempertahankan urutan awal.</p></div>
        `,
        tasks: ["Saya memahami perbedaan Sort dan Filter.", "Saya menyiapkan tabel yang memiliki kepala kolom."]
      },
      {
        title: "Mengurutkan data berdasarkan tinggi",
        intro: "Kita akan mengurutkan data dari tinggi terendah ke tertinggi.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Klik salah satu sel pada kolom Tinggi (cm).</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Buka tab Data dan pilih Sort Smallest to Largest atau urutan terkecil ke terbesar.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Jika muncul konfirmasi, pilih Expand the selection agar seluruh baris siswa ikut berpindah.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa bahwa nama, kelas, dan berat badan tetap berada pada baris siswa yang benar.</p></div>
          <div class="tip-box">Jangan mengurutkan satu kolom saja secara terpisah karena dapat membuat data antarkolom tidak lagi cocok.</div>
        `,
        tasks: ["Saya mengurutkan data berdasarkan tinggi.", "Saya memastikan setiap baris tetap cocok dengan nama siswa."]
      },
      {
        title: "Mengaktifkan Filter",
        intro: "Filter memudahkan pencarian baris berdasarkan kriteria.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Klik salah satu sel pada tabel.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Buka tab Data dan pilih Filter jika belum aktif.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Klik tanda panah pada kepala kolom Kelas.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Pilih nilai yang ingin ditampilkan, lalu konfirmasi.</p></div>
          <div class="instruction"><strong>Langkah 5</strong><p>Untuk menampilkan semua data kembali, buka menu Filter dan pilih Clear Filter atau pilih semua nilai.</p></div>
        `,
        tasks: ["Saya mengaktifkan Filter.", "Saya mencoba menyaring data.", "Saya dapat menampilkan seluruh data kembali."]
      }
    ],
    quiz: [
      { q: "Sort digunakan untuk ...", options: ["Mengurutkan data", "Menyisipkan gambar", "Mengganti nama file", "Menghapus rumus"], answer: 0 },
      { q: "Filter digunakan untuk ...", options: ["Menyembunyikan sementara baris yang tidak sesuai kriteria", "Menghapus semua data", "Mengubah angka menjadi huruf", "Membuat slide"], answer: 0 },
      { q: "Saat mengurutkan tabel, mengapa seluruh rentang perlu ikut dipilih?", options: ["Agar data setiap siswa tetap berada pada baris yang benar", "Agar semua data terhapus", "Agar font berubah", "Agar workbook tertutup"], answer: 0 }
    ]
  },
  {
    id: 6,
    icon: "▥",
    title: "Grafik dan Proyek Akhir",
    level: "PROYEK",
    duration: "30–40 menit",
    description: "Menyajikan data dalam grafik dan menyelesaikan proyek pengolahan data.",
    objective: "Siswa mampu membuat grafik sederhana dan memeriksa hasil kerja.",
    steps: [
      {
        title: "Siapkan data untuk grafik",
        intro: "Grafik membantu menyajikan perbandingan data secara visual.",
        content: `
          <p>Gunakan data latihan yang memiliki kategori dan nilai numerik. Misalnya, data nama siswa dan nilai tugas. Hindari memilih data identitas sensitif.</p>
          <div class="instruction"><strong>Langkah 1</strong><p>Buka tabel latihan yang sudah memiliki kepala kolom.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Pilih kolom kategori dan kolom nilai yang ingin ditampilkan pada grafik.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Pastikan rentang yang dipilih mencakup kepala kolom.</p></div>
        `,
        tasks: ["Saya menyiapkan data kategori dan nilai.", "Saya memilih rentang data yang tepat."]
      },
      {
        title: "Membuat grafik",
        intro: "Pilih jenis grafik yang sesuai dengan tujuan penyajian.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Pilih rentang data.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Buka tab Insert, lalu cari kelompok Charts.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Pilih grafik batang/kolom untuk membandingkan nilai antar kategori.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Periksa apakah nama kategori dan nilai sudah tampil dengan benar.</p></div>
        `,
        tasks: ["Saya berhasil menyisipkan grafik.", "Kategori dan nilai grafik sesuai data sumber."]
      },
      {
        title: "Beri judul dan periksa grafik",
        intro: "Grafik yang baik memiliki judul dan label yang mudah dipahami.",
        content: `
          <div class="instruction"><strong>Langkah 1</strong><p>Klik grafik untuk menampilkan opsi pengaturan grafik.</p></div>
          <div class="instruction"><strong>Langkah 2</strong><p>Tambahkan judul yang menjelaskan isi grafik, misalnya Nilai Tugas Siswa.</p></div>
          <div class="instruction"><strong>Langkah 3</strong><p>Periksa apakah nilai yang ditampilkan sesuai dengan tabel sumber.</p></div>
          <div class="instruction"><strong>Langkah 4</strong><p>Pastikan judul dan label tidak terpotong.</p></div>
        `,
        tasks: ["Grafik memiliki judul.", "Grafik sudah diperiksa terhadap data sumber."]
      },
      {
        title: "Proyek akhir: olah data sederhana",
        intro: "Gabungkan keterampilan dari modul sebelumnya.",
        content: `
          <h3>Tugas proyek</h3>
          <p>Buat workbook berisi data latihan siswa, lakukan perhitungan sederhana, rapikan tabel, urutkan data berdasarkan satu kolom, lalu buat grafik dari data yang sesuai.</p>
          <div class="instruction"><strong>Tugas 1</strong><p>Pastikan tabel memiliki kepala kolom dan minimal lima baris data fiktif.</p></div>
          <div class="instruction"><strong>Tugas 2</strong><p>Gunakan rumus yang telah dipelajari, seperti SUM atau AVERAGE, sesuai kebutuhan data.</p></div>
          <div class="instruction"><strong>Tugas 3</strong><p>Format tabel agar mudah dibaca.</p></div>
          <div class="instruction"><strong>Tugas 4</strong><p>Gunakan Sort atau Filter dan pastikan data tetap cocok.</p></div>
          <div class="instruction"><strong>Tugas 5</strong><p>Buat grafik sederhana, simpan file, dan periksa hasil akhir.</p></div>
        `,
        tasks: [
          "Tabel memiliki kepala kolom dan data yang lengkap.",
          "Saya menggunakan rumus yang sesuai.",
          "Tabel telah diformat agar mudah dibaca.",
          "Saya mencoba Sort atau Filter dengan benar.",
          "Saya membuat grafik dan menyimpan file."
        ]
      }
    ],
    quiz: [
      { q: "Grafik batang atau kolom cocok digunakan untuk ...", options: ["Membandingkan nilai antar kategori", "Mengedit rumus secara langsung", "Mengganti nama workbook", "Menghapus worksheet"], answer: 0 },
      { q: "Apa yang harus diperiksa setelah grafik dibuat?", options: ["Kesesuaian kategori dan nilai dengan data sumber", "Warna komputer", "Nama browser", "Kecepatan keyboard"], answer: 0 },
      { q: "Apa bukti penting bahwa proyek akhir selesai?", options: ["File tersimpan dan hasil diperiksa", "Hanya mengganti warna", "Menutup Excel tanpa menyimpan", "Menghapus data sumber"], answer: 0 }
    ]
  }
];

// -------------------------------------
// NAVIGASI DAN STATUS
// -------------------------------------

const pageNames = {
  beranda: "Beranda",
  modul: "Modul Belajar",
  belajar: "Ruang Praktik",
  evaluasi: "Evaluasi",
  tentang: "Tentang"
};

const completedModules = new Set();
const completedSteps = new Set();
const moduleScores = {};
let activeModuleId = 1;
let activeStepIndex = 0;
let currentQuiz = null;

function showPage(id) {
  if (!pageNames[id]) return;

  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", page.id === id);
  });

  document.querySelectorAll("[data-page]").forEach(link => {
    const active = link.dataset.page === id;
    link.classList.toggle("active", active);

    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.getElementById("breadcrumb").textContent = pageNames[id];
  document.getElementById("navigation").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");

  history.replaceState(null, "", `#${id}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage(link.dataset.page);
  });
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("navigation");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});

// -------------------------------------
// KARTU MODUL DAN PROGRES
// -------------------------------------

function renderModuleCards(targetId) {
  const target = document.getElementById(targetId);
  target.replaceChildren();

  modules.forEach(module => {
    const card = document.createElement("article");
    card.className = "module-card";

    const icon = document.createElement("div");
    icon.className = "module-icon";
    icon.textContent = module.icon;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = `MODUL ${module.id} · ${module.level}`;

    const title = document.createElement("h3");
    title.textContent = module.title;

    const description = document.createElement("p");
    description.textContent = module.description;

    const duration = document.createElement("small");
    duration.className = "muted";
    duration.textContent = `⏱ ${module.duration}`;

    const button = document.createElement("button");
    button.className = "btn primary";
    button.textContent = completedModules.has(module.id)
      ? "Ulangi modul"
      : "Mulai modul →";
    button.addEventListener("click", () => openModule(module.id));

    card.append(icon, tag, title, description, duration, button);

    if (completedModules.has(module.id)) {
      const status = document.createElement("div");
      status.className = "tip-box";
      status.textContent = "✓ Modul selesai";
      card.appendChild(status);
    }

    target.appendChild(card);
  });
}

function updateProgress() {
  const total = modules.length;
  const count = completedModules.size;
  const percent = count / total * 100;

  document.getElementById("progressText").textContent =
    `${count} dari ${total} modul selesai.`;

  document.getElementById("progressBar").style.width = `${percent}%`;

  renderModuleCards("moduleGrid");
  renderModuleCards("homeModules");
}

// -------------------------------------
// MEMBUKA MODUL DAN LANGKAH
// -------------------------------------

function openModule(id) {
  activeModuleId = id;
  const module = modules.find(item => item.id === id);

  if (!module) return;

  const header = document.getElementById("lessonHeader");
  header.replaceChildren();

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = `MODUL ${module.id} · ${module.level}`;

  const title = document.createElement("h1");
  title.textContent = module.title;

  const desc = document.createElement("p");
  desc.textContent = module.description;

  const objective = document.createElement("div");
  objective.className = "tip-box";
  objective.textContent = `Tujuan pembelajaran: ${module.objective}`;

  header.append(tag, title, desc, objective);

  const saved = completedSteps.has(`${id}-${activeStepIndex}`);
  if (saved) {
    activeStepIndex = 0;
  } else {
    activeStepIndex = 0;
  }

  renderStepList();
  renderStep();
  showPage("belajar");
}

function renderStepList() {
  const module = modules.find(item => item.id === activeModuleId);
  const list = document.getElementById("stepList");
  list.replaceChildren();

  module.steps.forEach((step, index) => {
    const key = `${activeModuleId}-${index}`;
    const button = document.createElement("button");
    button.className = "step-item";

    if (index === activeStepIndex) button.classList.add("active");
    if (completedSteps.has(key)) button.classList.add("completed");

    const num = document.createElement("span");
    num.className = "step-num";
    num.textContent = completedSteps.has(key) ? "✓" : String(index + 1);

    const label = document.createElement("span");
    label.textContent = step.title;

    button.append(num, label);
    button.addEventListener("click", () => {
      activeStepIndex = index;
      renderStepList();
      renderStep();
    });

    list.appendChild(button);
  });

  const quizButton = document.createElement("button");
  quizButton.className = "step-item";
  quizButton.innerHTML = '<span class="step-num">Q</span><span>Evaluasi modul</span>';
  quizButton.addEventListener("click", () => startModuleQuiz());
  list.appendChild(quizButton);
}


function renderLessonVisual(module, step, index) {
  const palettes = [
    {tone:"purple", label:"EXCEL EXPLORER", icon:"🧭", sub:"Kenali wilayah kerja Excel"},
    {tone:"green", label:"DATA QUEST", icon:"📋", sub:"Susun data dengan teliti"},
    {tone:"orange", label:"FORMULA LAB", icon:"ƒx", sub:"Ubah data menjadi informasi"},
    {tone:"pink", label:"DESIGN STUDIO", icon:"🎨", sub:"Buat lembar kerja lebih jelas"},
    {tone:"blue", label:"DATA DETECTIVE", icon:"🔎", sub:"Temukan pola dalam data"},
    {tone:"gold", label:"CHART CHAMPION", icon:"📊", sub:"Ceritakan data lewat grafik"}
  ];
  const p = palettes[module.id - 1] || palettes[0];
  let tiles = [];
  if (module.id === 1) {
    tiles = [
      ["🏠","Home","format"],["🧩","Insert","objek"],["📐","Page Layout","halaman"],
      ["ƒx","Formulas","rumus"],["🔎","Data","olah data"],["💬","Review","tinjau"],["👁️","View","tampilan"]
    ];
  } else if (module.id === 2) {
    tiles = [["🔤","Nama","teks"],["🔢","Tinggi","angka"],["⚖️","Berat","angka"],["💾","Simpan","workbook"]];
  } else if (module.id === 3) {
    tiles = [["＋","Tambah","A1+B1"],["−","Kurang","A1-B1"],["Σ","SUM","jumlah"],["ƒx","AVERAGE","rata-rata"]];
  } else if (module.id === 4) {
    tiles = [["B","Bold","tebal"],["🎨","Fill Color","warna"],["▦","Borders","garis"],["↔️","Alignment","perataan"]];
  } else if (module.id === 5) {
    tiles = [["↕️","Sort","urutkan"],["⏷","Filter","saring"],["✓","Check","periksa"]];
  } else {
    tiles = [["📋","Data","sumber"],["📊","Chart","visual"],["✍️","Title","judul"],["🏁","Project","selesai"]];
  }
  return `<div class="quest-visual ${p.tone}">
    <div class="quest-visual-head"><div><span class="visual-kicker">${p.label} · STAGE ${String(module.id).padStart(2,"0")}</span><strong>${p.sub}</strong></div><span class="visual-mascot">${p.icon}</span></div>
    <div class="visual-tiles">${tiles.map((t,i)=>`<div class="visual-tile" style="--tile-index:${i}"><span class="visual-tile-icon">${t[0]}</span><b>${t[1]}</b><small>${t[2]}</small></div>`).join("")}</div>
    <div class="visual-footer"><span>✦ Misi ${index + 1}</span><span class="visual-dots"><i></i><i></i><i></i></span><span>+ XP</span></div>
  </div>`;
}

function renderStep() {
  const module = modules.find(item => item.id === activeModuleId);
  const step = module.steps[activeStepIndex];
  const key = `${activeModuleId}-${activeStepIndex}`;

  document.getElementById("stepCounter").textContent =
    `LANGKAH ${activeStepIndex + 1} DARI ${module.steps.length}`;

  document.getElementById("stepDuration").textContent =
    module.duration;

  document.getElementById("stepTitle").textContent = step.title;
  document.getElementById("stepIntro").textContent = step.intro;

  const stepIntro = document.getElementById("stepIntro");
  const oldVisual = document.getElementById("questVisual");
  if (oldVisual) oldVisual.remove();
  const visualWrap = document.createElement("div");
  visualWrap.id = "questVisual";
  visualWrap.innerHTML = renderLessonVisual(module, step, activeStepIndex);
  stepIntro.insertAdjacentElement("afterend", visualWrap);

  document.getElementById("stepContent").innerHTML = step.content;

  document.getElementById("stepFeedback").textContent = "";
  document.getElementById("stepFeedback").className = "feedback";

  document.getElementById("practiceArea").replaceChildren();

  const checkContainer = document.getElementById("stepCheck");
  const checkbox = document.getElementById("understood");

  checkContainer.style.display = "block";
  checkbox.checked = completedSteps.has(key);

  document.getElementById("prevStep").disabled = activeStepIndex === 0;

  const isLast = activeStepIndex === module.steps.length - 1;
  document.getElementById("nextStep").textContent =
    isLast ? "Selesaikan langkah →" : "Langkah berikutnya →";

  // Aktifkan simulator sesuai modul yang sedang dipelajari.
  attachSimulators();

  // Jika langkah ini sudah ditandai selesai, pengguna tetap dapat mengulanginya.
  // Untuk melanjutkan ke langkah berikutnya, centang instruksi selesai.
}

document.getElementById("prevStep").addEventListener("click", () => {
  if (activeStepIndex > 0) {
    activeStepIndex--;
    renderStepList();
    renderStep();
  }
});

document.getElementById("nextStep").addEventListener("click", () => {
  const module = modules.find(item => item.id === activeModuleId);
  const key = `${activeModuleId}-${activeStepIndex}`;
  const checkbox = document.getElementById("understood");
  const feedback = document.getElementById("stepFeedback");

  if (!checkbox.checked) {
    feedback.textContent =
      "Selesaikan instruksi pada langkah ini di Microsoft Excel, lalu centang kotak konfirmasi sebelum melanjutkan.";
    feedback.className = "feedback error";
    return;
  }

  completedSteps.add(key);

  if (activeStepIndex < module.steps.length - 1) {
    activeStepIndex++;
    renderStepList();
    renderStep();
    return;
  }

  feedback.textContent =
    "Semua langkah praktik modul ini telah ditandai selesai. Selanjutnya kerjakan evaluasi modul.";
  feedback.className = "feedback success";

  const quizButton = document.createElement("button");
  quizButton.className = "btn primary";
  quizButton.textContent = "Mulai evaluasi modul →";
  quizButton.addEventListener("click", startModuleQuiz);

  document.getElementById("practiceArea").replaceChildren(quizButton);
});

document.getElementById("understood").addEventListener("change", event => {
  const key = `${activeModuleId}-${activeStepIndex}`;
  const feedback = document.getElementById("stepFeedback");

  if (event.target.checked) {
    completedSteps.add(key);
    feedback.textContent =
      "Langkah ditandai sudah dikerjakan. Kamu bisa melanjutkan.";
    feedback.className = "feedback success";
  } else {
    completedSteps.delete(key);
    feedback.textContent = "";
    feedback.className = "feedback";
  }

  renderStepList();
});

// -------------------------------------
// SIMULATOR RUMUS MODUL 3
// -------------------------------------

function numberValue(id) {
  const input = document.getElementById(id);
  if (!input) return 0;
  return Number(input.value) || 0;
}

function updateSum() {
  const output = document.getElementById("sumResult");
  if (output) {
    output.textContent =
      `Hasil = ${numberValue("sumA") + numberValue("sumB")}`;
  }
}

function updateSubtraction() {
  const output = document.getElementById("subResult");
  if (output) {
    output.textContent =
      `Hasil = ${numberValue("subA") - numberValue("subB")}`;
  }
}

function updateSumRange() {
  const output = document.getElementById("sumRangeResult");
  if (output) {
    output.textContent =
      `Jumlah = ${numberValue("sum1") + numberValue("sum2") + numberValue("sum3")}`;
  }
}

function updateAverage() {
  const output = document.getElementById("avgResult");
  if (output) {
    const average =
      (numberValue("avg1") + numberValue("avg2") + numberValue("avg3")) / 3;

    output.textContent = `Rata-rata = ${Number(average.toFixed(2))}`;
  }
}

function attachSimulators() {
  ["sumA", "sumB"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", updateSum);
  });

  ["subA", "subB"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", updateSubtraction);
  });

  ["sum1", "sum2", "sum3"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", updateSumRange);
  });

  ["avg1", "avg2", "avg3"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", updateAverage);
  });

  updateSum();
  updateSubtraction();
  updateSumRange();
  updateAverage();
}

// -------------------------------------
// EVALUASI SETIAP MODUL
// -------------------------------------

function startModuleQuiz() {
  const module = modules.find(item => item.id === activeModuleId);

  currentQuiz = {
    questions: module.quiz,
    index: 0,
    score: 0,
    selected: null,
    answered: false,
    mode: "module",
    moduleId: module.id
  };

  showQuizQuestion();
}

function showQuizQuestion() {
  const quiz = currentQuiz;
  const question = quiz.questions[quiz.index];

  document.getElementById("stepTitle").textContent =
    `Evaluasi: ${modules.find(m => m.id === activeModuleId).title}`;

  document.getElementById("stepIntro").textContent =
    `Pertanyaan ${quiz.index + 1} dari ${quiz.questions.length}. Pilih jawaban yang paling tepat.`;

  document.getElementById("stepCounter").textContent = "EVALUASI MODUL";
  document.getElementById("stepDuration").textContent = "Latihan formatif";

  document.getElementById("stepContent").replaceChildren();

  const q = document.createElement("h3");
  q.textContent = question.q;

  const options = document.createElement("div");
  options.className = "task-list";

  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "task-row";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "moduleQuizAnswer";
    radio.value = index;
    radio.checked = quiz.selected === index;
    radio.disabled = quiz.answered;

    radio.addEventListener("change", () => {
      quiz.selected = index;
    });

    const text = document.createElement("span");
    text.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    label.append(radio, text);
    options.appendChild(label);
  });

  document.getElementById("stepContent").append(q, options);
  document.getElementById("stepCheck").style.display = "none";

  const feedback = document.getElementById("stepFeedback");
  feedback.textContent = "";
  feedback.className = "feedback";

  const area = document.getElementById("practiceArea");
  area.replaceChildren();

  const submit = document.createElement("button");
  submit.className = "btn primary";
  submit.textContent = quiz.answered
    ? (quiz.index === quiz.questions.length - 1 ? "Lihat hasil" : "Pertanyaan berikutnya →")
    : "Periksa jawaban";

  submit.addEventListener("click", () => {
    if (!quiz.answered) {
      if (quiz.selected === null) {
        feedback.textContent = "Pilih jawaban terlebih dahulu.";
        feedback.className = "feedback error";
        return;
      }

      quiz.answered = true;
      const correct = quiz.selected === question.answer;

      if (correct) quiz.score++;

      feedback.textContent = correct
        ? "Benar! Jawabanmu tepat."
        : `Belum tepat. Jawaban yang benar: ${question.options[question.answer]}.`;

      feedback.className = `feedback ${correct ? "success" : "error"}`;

      // Kunci pilihan setelah jawaban diperiksa.
      options.querySelectorAll("input").forEach(input => {
        input.disabled = true;
      });

      submit.textContent =
        quiz.index === quiz.questions.length - 1
          ? "Lihat hasil"
          : "Pertanyaan berikutnya →";

      return;
    }

    if (quiz.index < quiz.questions.length - 1) {
      quiz.index++;
      quiz.selected = null;
      quiz.answered = false;
      showQuizQuestion();
    } else {
      finishModuleQuiz();
    }
  });

  area.appendChild(submit);
}

function finishModuleQuiz() {
  const quiz = currentQuiz;
  const total = quiz.questions.length;
  const percent = Math.round(quiz.score / total * 100);

  document.getElementById("stepCounter").textContent = "HASIL EVALUASI";
  document.getElementById("stepTitle").textContent =
    `Nilai kamu: ${percent}`;

  document.getElementById("stepIntro").textContent =
    `${quiz.score} jawaban benar dari ${total} pertanyaan.`;

  document.getElementById("stepContent").innerHTML = `
    <div class="tip-box">
      <strong>${percent >= 75 ? "Target latihan tercapai." : "Ayo pelajari kembali materi."}</strong>
      <p>${percent >= 75
        ? "Kamu dapat melanjutkan belajar atau mengulang modul untuk memperkuat pemahaman."
        : "Buka kembali langkah yang masih sulit, lalu ulangi evaluasi."}</p>
    </div>
    <p>Nilai ini adalah hasil latihan pengetahuan pada prototipe, bukan penilaian penuh keterampilan praktik.</p>
  `;

  document.getElementById("stepCheck").style.display = "none";
  document.getElementById("stepFeedback").textContent = "";
  document.getElementById("practiceArea").replaceChildren();

  if (percent >= 75) {
    completedModules.add(quiz.moduleId);
    updateProgress();
  }

  const retry = document.createElement("button");
  retry.className = "btn secondary";
  retry.textContent = "Ulangi evaluasi";
  retry.addEventListener("click", startModuleQuiz);

  const back = document.createElement("button");
  back.className = "btn primary";
  back.textContent = "Kembali ke modul";
  back.addEventListener("click", () => {
    activeStepIndex = 0;
    renderStepList();
    renderStep();
  });

  document.getElementById("practiceArea").append(retry, back);
}

// -------------------------------------
// EVALUASI AKHIR
// -------------------------------------

document.getElementById("startFinalQuiz").addEventListener("click", () => {
  currentQuiz = {
    questions: modules.flatMap(module => module.quiz).slice(0, 10),
    index: 0,
    score: 0,
    selected: null,
    answered: false,
    mode: "final"
  };

  renderFinalQuestion();
});

function renderFinalQuestion() {
  const quiz = currentQuiz;
  const question = quiz.questions[quiz.index];
  const area = document.getElementById("finalQuizArea");

  area.replaceChildren();

  const title = document.createElement("h3");
  title.textContent = `Pertanyaan ${quiz.index + 1} dari ${quiz.questions.length}`;

  const questionText = document.createElement("p");
  questionText.textContent = question.q;

  const options = document.createElement("div");
  options.className = "task-list";

  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "task-row";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "finalQuizAnswer";
    radio.value = index;

    radio.addEventListener("change", () => {
      quiz.selected = index;
    });

    const text = document.createElement("span");
    text.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    label.append(radio, text);
    options.appendChild(label);
  });

  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.setAttribute("aria-live", "polite");

  const button = document.createElement("button");
  button.className = "btn primary";
  button.textContent = "Periksa jawaban";

  button.addEventListener("click", () => {
    if (!quiz.answered) {
      if (quiz.selected === null) {
        feedback.textContent = "Pilih jawaban terlebih dahulu.";
        feedback.className = "feedback error";
        return;
      }

      quiz.answered = true;
      const correct = quiz.selected === question.answer;
      if (correct) quiz.score++;

      feedback.textContent = correct
        ? "Jawaban benar."
        : `Jawaban yang benar adalah: ${question.options[question.answer]}.`;

      feedback.className = `feedback ${correct ? "success" : "error"}`;

      options.querySelectorAll("input").forEach(input => {
        input.disabled = true;
      });

      button.textContent =
        quiz.index === quiz.questions.length - 1
          ? "Lihat hasil"
          : "Pertanyaan berikutnya →";

      return;
    }

    if (quiz.index < quiz.questions.length - 1) {
      quiz.index++;
      quiz.selected = null;
      quiz.answered = false;
      renderFinalQuestion();
    } else {
      const percent = Math.round(quiz.score / quiz.questions.length * 100);
      area.replaceChildren();

      const result = document.createElement("div");
      result.className = "tip-box";
      result.textContent =
        `Evaluasi selesai. Skor kamu ${quiz.score}/${quiz.questions.length} (${percent}%).`;

      area.appendChild(result);
    }
  });

  area.append(title, questionText, options, feedback, button);
}

// -------------------------------------
// INISIALISASI
// -------------------------------------

renderModuleCards("homeModules");
updateProgress();

const hashPage = window.location.hash.slice(1);
if (pageNames[hashPage]) showPage(hashPage);
