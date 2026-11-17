# Panduan setup — Arkib Dakwaan Solehah

Laman ini laman statik (HTML + JS). Ia boleh dihoskan percuma di GitHub Pages. Semua langkah di bawah dibuat melalui pelayar; tak perlu pasang apa-apa.

## 1. Terbitkan laman (GitHub Pages)

1. Buat akaun di https://github.com (kalau belum ada).
2. Klik **New repository**. Nama cadangan: `arkib-dakwaan-solehah`. Pilih **Public**. Klik **Create repository**.
3. Dalam repo kosong tu, klik **uploading an existing file**. Seret semua isi folder `Arkib Dakwaan Solehah` ke situ:
   `index.html`, `config.js`, `.nojekyll`, folder `data`, folder `.github`.
   (Fail bermula dengan titik mungkin tersembunyi dalam Explorer. Hidupkan *View → Show → Hidden items*.)
4. Klik **Commit changes**.
5. Pergi ke **Settings → Pages**. Di *Branch*, pilih `main` dan `/ (root)`, klik **Save**.
6. Tunggu 1–2 minit. Laman akan hidup di `https://NAMAKAU.github.io/arkib-dakwaan-solehah/`.
7. Buka `config.js` (dalam repo, klik ikon pensel) dan isi `siteUrl` dengan alamat tadi.

## 2. Hidupkan ruangan komen (Giscus)

Komen disimpan dalam GitHub Discussions repo kau. Pengomen perlu log masuk GitHub (percuma); kau boleh padam atau kunci komen dari GitHub.

1. Repo → **Settings → General → Features** → tandakan **Discussions**.
2. Pergi ke tab **Discussions** → ikon pensel di sebelah *Categories* → **New category**:
   nama `Komen`, format **Open-ended discussion**.
3. Pasang aplikasi Giscus: https://github.com/apps/giscus → **Install** → pilih repo ini sahaja.
4. Buka https://giscus.app, isi nama repo (`NAMAKAU/arkib-dakwaan-solehah`), pilih kategori `Komen`.
   Halaman itu akan papar `data-repo-id` dan `data-category-id`.
5. Salin nilai itu ke `config.js`:

   ```js
   giscus: {
     repo: "NAMAKAU/arkib-dakwaan-solehah",
     repoId: "R_kgDO...",
     category: "Komen",
     categoryId: "DIC_kwDO..."
   },
   ```

Setiap dakwaan dapat thread sendiri, dinamakan ikut ID (contoh `S13-03`).

## 3. Borang hantar pembahasan

Ada dua pilihan. Pilih satu.

**A. Google Form (cadangan — orang awam tak perlu akaun GitHub)**

1. Buat Google Form baru dengan medan: *ID dakwaan* (jawapan pendek), *Pendirian* (pilihan: Mematahkan / Menyokong / Betulkan transkrip / Penjelasan pihak berkenaan), *Hujah* (perenggan), *Sumber* (perenggan), *Nama untuk dipaparkan* (pilihan).
2. Menu ⋮ → **Get pre-filled link**. Isi medan ID dengan `XXX`, klik **Get link**, salin.
3. Dalam link itu, tukar `XXX` kepada `{ID}`, kemudian tampal ke `borangPembahasan` dalam `config.js`.
4. Jawapan masuk ke Google Sheets kau untuk disemak.

**B. GitHub Issue (tanpa setup tambahan)**

Biarkan `borangPembahasan` kosong. Butang akan buka borang Issue dalam repo (templat `.github/ISSUE_TEMPLATE/pembahasan.yml`). Pengirim perlu akaun GitHub.

## 4. Paparkan pembahasan yang diluluskan

Tambah ke `data/pembahasan.json`, ikut ID dakwaan:

```json
{
  "S13-03": [
    {
      "teks": "Negara Kota Vatican ditubuhkan melalui Perjanjian Lateran pada 11 Februari 1929.",
      "oleh": "Nama penyumbang",
      "tarikh": "18 Nov 2026",
      "sumber": "https://..."
    }
  ]
}
```

Kemudian jana semula data (atau minta Claude buat):

```
.venv\Scripts\python.exe -I "Master Dakwaan Solehah\_build\build_site.py" "Master Dakwaan Solehah" "Arkib Dakwaan Solehah"
```

Upload semula `data/arkib.js` ke repo.

## 5. Tambah dakwaan baru

Tambah dalam `Master Dakwaan Solehah/dakwaan.json`, jana semula seperti langkah 4, dan upload `data/arkib.js`. Master list (HTML/Markdown) dan website guna data yang sama.

## Nota

- Klip dimainkan melalui pemain rasmi YouTube (youtube-nocookie); tiada video disalin ke repo.
- Video Facebook tak boleh dibenamkan; laman akan beri butang ke hantaran asal.
- Cap masa bertanda "anggaran" dipadankan automatik daripada transkrip Whisper. Betulkan yang lari melalui pembahasan.
