// Menangkap elemen Navbar berdasarkan ID
const navEl = document.getElementById('mainNavbar');

// Mendengarkan aktivitas scroll pada jendela browser
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navEl.classList.add('navbar-scrolled');
    } else {
        navEl.classList.remove('navbar-scrolled');
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Mendengarkan pergerakan scroll
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Mengecek posisi setiap section di layar
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 120)) {
            currentSection = section.getAttribute('id');
        }
    });

    // Menghapus penanda aktif dari semua menu terlebih dahulu
    navLinks.forEach(link => {
        link.classList.remove('active-menu');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active-menu');
        }
    });
});

// ================= VALIDASI NEWSLETTER  =================
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const messageBox = document.getElementById('newsletterMessage');

newsletterForm.addEventListener('submit', function(event) {
    // 1. Mencegah halaman me-refresh saat tombol diklik
    event.preventDefault(); 
    
    // 2. Mengambil teks yang diketik pengguna dan menghapus spasi berlebih
    const emailValue = emailInput.value.trim();
    
    // 3. Pola Regex (Regular Expression) untuk memeriksa format standar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Memunculkan kotak pesan
    messageBox.style.display = 'block';
    
    // 4. Logika Pengecekan (IF-ELSE)
    if (emailValue === "") {
        messageBox.innerHTML = '<span class="text-danger"><i class="bi bi-exclamation-circle"></i> Email tidak boleh kosong!</span>';
    } else if (!emailPattern.test(emailValue)) {
        messageBox.innerHTML = '<span class="text-warning"><i class="bi bi-exclamation-triangle"></i> Format email tidak valid! Pastikan menggunakan simbol @ dan domain.</span>';
    } else {
        messageBox.innerHTML = '<span class="text-success"><i class="bi bi-check-circle-fill"></i> Terima kasih! Email Anda berhasil didaftarkan.</span>';
        
        emailInput.value = '';
        
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 4000);
    }
});