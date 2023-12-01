function tampilkanInput() {
    // Mendapatkan nilai dari elemen input
    const hasil = document.getElementById("name").value;

    var hasilHTML = "<p>Input dari pengguna:    " + hasil + "</p>";
    // Menampilkan nilai menggunakan document.getElementById
    document.getElementById("hasil").innerHTML = hasilHTML
}