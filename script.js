// Ganti dengan Nomor WhatsApp Anda (628xxxxxx)
const WHATSAPP_NUMBER = "6281234567890"; 

function openPopup(productName) {
    // Tampilkan popup dan set nama produk
    document.getElementById('popupProductName').textContent = productName;
    document.getElementById('hiddenProductName').value = productName;
    document.getElementById('popupOverlay').style.display = 'block';
}

function closePopup() {
    // Sembunyikan popup
    document.getElementById('popupOverlay').style.display = 'none';
}

function sendOrder() {
    const nama = document.getElementById('namaPemesan').value;
    const alamat = document.getElementById('alamatLengkap').value;
    const produk = document.getElementById('hiddenProductName').value;

    // Validasi sederhana
    if (!nama || !alamat) {
        alert("Nama dan Alamat harus diisi lengkap.");
        return;
    }

    // Format pesan WhatsApp
    let message = `*ORDER COD BARU*\n\n`;
    message += `Produk: ${produk}\n`;
    message += `Nama Pemesan: ${nama}\n`;
    message += `Alamat Lengkap: ${alamat}\n\n`;
    message += `Mohon konfirmasi pesanan ini. Terima kasih!`;

    // Encoding pesan agar aman di URL
    const encodedMessage = encodeURIComponent(message);
    
    // Buka WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Sembunyikan popup setelah berhasil order
    closePopup();

    // Reset formulir
    document.getElementById('codForm').reset();
}