// Tetapan laman. Isi selepas ikut PANDUAN-SETUP.md — laman tetap berfungsi walaupun kosong.
window.ARKIB_CONFIG = {
  // Alamat laman selepas diterbitkan, contoh "https://namakau.github.io/arkib-dakwaan-solehah/"
  siteUrl: "",

  // Komen (Giscus, perlu repo GitHub dengan Discussions). Dapatkan nilai dari https://giscus.app
  giscus: {
    repo: "",        // contoh "namakau/arkib-dakwaan-solehah"
    repoId: "",      // contoh "R_kgDO..."
    category: "Komen",
    categoryId: ""   // contoh "DIC_kwDO..."
  },

  // Borang hantar pembahasan (Google Form). Tampal link "prefilled" dan gantikan
  // nilai medan ID dakwaan dengan {ID}. Contoh:
  // "https://docs.google.com/forms/d/e/XXXX/viewform?usp=pp_url&entry.123456={ID}"
  // Jika kosong, butang akan buka GitHub Issue (perlu akaun GitHub).
  borangPembahasan: ""
};
