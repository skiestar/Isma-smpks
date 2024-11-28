function diagnosa() {
    const gejalaTerpilih = Array.from(document.querySelectorAll('input[name="gejala"]:checked')).map(input => input.value);
    let hasil = '';

    if (gejalaTerpilih.includes('daunKuning') && gejalaTerpilih.includes('akarBusuk')) {
        hasil = 'Kemungkinan tanaman terkena infeksi busuk akar. Penanggulangan: potong akar yang busuk, ganti media tanam, dan gunakan fungisida.';
    } else if (gejalaTerpilih.includes('bercakDaun') && gejalaTerpilih.includes('ulatDaun')) {
        hasil = 'Kemungkinan tanaman terserang ulat daun. Penanggulangan: semprotkan insektisida sesuai dosis dan pangkas daun yang terkena.';
    } else if (gejalaTerpilih.includes('batangBusuk') && gejalaTerpilih.includes('jamurPutih')) {
        hasil = 'Tanaman mungkin terkena busuk batang akibat infeksi jamur. Penanggulangan: bersihkan batang yang terinfeksi, aplikasikan fungisida, dan pastikan sirkulasi udara baik.';
    } else if (gejalaTerpilih.includes('tikus')) {
        hasil = 'Tanaman terkena serangan tikus. Penanggulangan: gunakan perangkap atau pagar pelindung di sekitar tanaman.';
    } else if (gejalaTerpilih.includes('kumbangTanduk')) {
        hasil = 'Tanaman mungkin terserang kumbang tanduk. Penanggulangan: lakukan pemangkasan dan bersihkan bagian tanaman yang terinfeksi.';
    } else if (gejalaTerpilih.includes('rayap') && gejalaTerpilih.includes('akarBusuk')) {
        hasil = 'Kemungkinan akar tanaman diserang rayap. Penanggulangan: gunakan insektisida khusus untuk rayap dan periksa area sekitar akar.';
    } else if (gejalaTerpilih.includes('busukBuah')) {
        hasil = 'Tanaman mengalami busuk buah. Penanggulangan: potong buah yang membusuk dan jaga kebersihan lingkungan tanaman.';
    } else if (gejalaTerpilih.includes('jamurPutih')) {
        hasil = 'Munculnya jamur putih biasanya disebabkan oleh kelembaban tinggi. Penanggulangan: semprotkan fungisida dan kurangi penyiraman berlebihan.';
    } else if (gejalaTerpilih.length === 0) {
        hasil = 'Silakan pilih gejala terlebih dahulu.';
    } else {
        hasil = 'Gejala tidak dapat dikenali. Hubungi ahli pertanian untuk diagnosis lebih lanjut.';
    }

    document.getElementById('hasilDiagnosa').innerText = hasil;
}