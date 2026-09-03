# Portofolio Muhamad Hasyim Ashary (Static HTML5 Website)

Website portofolio statis modern & responsif untuk **Muhamad Hasyim Ashary** (S1 Pendidikan Teknik Elektronika UNJ, IPK 3.66/4.00).

Proyek ini dibangun menggunakan **Pure HTML5**, **CSS3 (Glassmorphism Dark Theme)**, dan **Vanilla JavaScript**, sehingga **100% kompatibel untuk di-hosting gratis di GitHub Pages, Vercel, atau Netlify**.

---

## 🚀 Panduan Upload ke GitHub Pages (Langkah demi Langkah)

### Langkah 1: Buat Repository Baru di GitHub
1. Buka [github.com/new](https://github.com/new).
2. Isi Nama Repository, contoh: `portofolio-hasyim` atau `muhamadhasyimashary.github.io`.
3. Pilih **Public**.
4. Klik **Create repository**.

### Langkah 2: Push Kode ke GitHub via Terminal
Buka Terminal / Command Prompt di folder ini (`c:\laragon\www\portofolio-hasyim-static`):

```bash
cd c:\laragon\www\portofolio-hasyim-static

git init
git add .
git commit -m "Initial static portfolio release for Muhamad Hasyim Ashary"
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/portofolio-hasyim.git
git push -u origin main
```
*(Ganti `USERNAME_ANDA` dengan username akun GitHub Anda)*.

---

### Langkah 3: Aktifkan GitHub Pages (Gratis)
1. Masuk ke halaman Repository GitHub Anda.
2. Klik Tab **Settings** -> pilih menu **Pages** di sebelah kiri.
3. Di bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`
   - **Branch**: Pilih `main` dan folder `/ (root)`
4. Klik **Save**.

Tunggu sekitar 1-2 menit, website portofolio Anda akan langsung online dan bisa diakses dunia melalui URL:
👉 `https://USERNAME_ANDA.github.io/portofolio-hasyim/`

---

## 📂 Struktur File Proyek

```
portofolio-hasyim-static/
├── index.html            # Halaman utama HTML5
├── css/
│   └── style.css         # Styling Glassmorphism & Animasi
├── js/
│   └── script.js         # JavaScript Interaktif & Typing Effect
├── images/
│   ├── hasyim_photo.jpg  # Foto Profil Muhamad Hasyim Ashary
│   ├── siresto.jpg       # Image Cover Project 1
│   ├── recruitment.jpg   # Image Cover Project 2
│   └── storage.jpg       # Image Cover Project 3
└── README.md             # Panduan Deployment
```
