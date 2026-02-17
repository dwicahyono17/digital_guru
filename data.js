// ============================================
// DATA MATA PELAJARAN (untuk CP, TP, Modul Ajar)
// ============================================
const subjects = [
  {
    id: 'pp',
    name: 'Pend. Pancasila',
    iconClass: 'fas fa-flag',
    gradClass: 'grad-pp',
    links: {
      cp: '#',
      tp: '#',
      modul: '#',
    }
  },
  {
    id: 'bindo',
    name: 'Bahasa Indonesia',
    iconClass: 'fas fa-book-open',
    gradClass: 'grad-bindo',
    links: {
      cp: '#',
      tp: '#',
      modul: '#',
    }
  },
  {
    id: 'mat',
    name: 'Matematika',
    iconClass: 'fas fa-calculator',
    gradClass: 'grad-mat',
    links: {
      cp: '#',
      tp: '#',
      modul: '#',
    }
  },
  {
    id: 'ipas',
    name: 'IPAS',
    iconClass: 'fas fa-flask',
    gradClass: 'grad-ipas',
    links: {
      cp: '#',
      tp: '#',
      modul: '#',
    }
  },
  {
    id: 'sr',
    name: 'Seni Rupa',
    iconClass: 'fas fa-paint-brush',
    gradClass: 'grad-sr',
    links: {
      cp: '#',
      tp: '#',
      modul: '#',
    }
  },
  {
    id: 'bing',
    name: 'Bahasa Inggris',
    iconClass: 'fas fa-language',
    gradClass: 'grad-bing',
    links: {
      cp: '#',
      tp: '#',
      modul: '#',
    }
  },
  {
    id: 'bjawa',
    name: 'Bahasa Jawa',
    iconClass: 'fas fa-comments',
    gradClass: 'grad-bjawa',
    links: {
      cp: '#',
      tp: '#',
      modul: '#',
    }
  }
];

// ============================================
// DATA BUKU SISWA – STRUKTUR MENU PER MAPEL
// ============================================
const bukuSubjects = [
  {
    id: 'pp',
    name: 'Pendidikan Pancasila',
    iconClass: 'fas fa-flag',
    gradClass: 'grad-pp',
    items: [
      {
        type: 'Buku Siswa',
        authors: 'Adi Darma Indra, dkk.',
        year: 2023,
        iconClass: 'fas fa-flag',
        gradClass: 'grad-pp',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BS-KLS-V.pdf'
      },
      {
        type: 'Buku Guru',
        authors: 'Adi Darma Indra, dkk.',
        year: 2023,
        iconClass: 'fas fa-chalkboard',
        gradClass: 'grad-pp',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Pendidikan-Pancasila-BG-KLS-V.pdf'
      },
      {
        type: 'Buku Panduan',
        authors: 'Dr. Irene C. Sinaga, dkk.',
        year: 2025,
        iconClass: 'fas fa-book',
        gradClass: 'grad-pp',
        link: 'https://kurikulum.kemendikdasmen.go.id/file/panduan/dokumen/2.%20Final%20Panduan%20Mata%20Pelajaran%20Pendidikan%20Pancasila_12_09_2025_Revisi%203.pdf'
      }
    ]
  },
  {
    id: 'bindo',
    name: 'Bahasa Indonesia',
    iconClass: 'fas fa-book-open',
    gradClass: 'grad-bindo',
    items: [
      {
        type: 'Buku Siswa 2021',
        authors: 'Evy Verawaty, Zulqarnain',
        year: 2021,
        iconClass: 'fas fa-book-open',
        gradClass: 'grad-bindo',
        link: 'https://drive.google.com/file/d/1Xt9LIwvkR1AQklb1xmtYq3dVmOs-pr6W/view?usp=sharing'
      },
      {
        type: 'Buku Guru 2021',
        authors: 'Evy Verawaty, Zulqarnain',
        year: 2021,
        iconClass: 'fas fa-chalkboard-teacher',
        gradClass: 'grad-bindo',
        link: 'https://drive.google.com/file/d/1mofmppltQj9XT-C1UZhnY-KYSDSkVqrs/view?usp=sharing'
      },
      {
        type: 'Buku Siswa 2024',
        authors: 'Maya Lestari Gf, Zulqarnain',
        year: 2024,
        iconClass: 'fas fa-book',
        gradClass: 'grad-bindo',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BS_KLS_V_Rev.pdf'
      },
      {
        type: 'Buku Guru 2024',
        authors: 'Maya Lestari Gf, Zulqarnain',
        year: 2024,
        iconClass: 'fas fa-user-graduate',
        gradClass: 'grad-bindo',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Indonesia_BG_KLS_V_Rev.pdf'
      },
      {
        type: 'Buku Panduan',
        authors: 'Prof. Kisyani Laksono, dkk.',
        year: 2025,
        iconClass: 'fas fa-book',
        gradClass: 'grad-bindo',
        link: 'https://kurikulum.kemendikdasmen.go.id/file/panduan/dokumen/4.%20Panduan%20Mata%20Pelajaran%20Bahasa%20Indonesia_16_09_2025_Revisi%203.pdf'
      }
    ]
  },
  {
    id: 'mat',
    name: 'Matematika',
    iconClass: 'fas fa-calculator',
    gradClass: 'grad-mat',
    items: [
      {
        type: 'Buku Siswa',
        authors: 'Meita Fitrianawati, dkk.',
        year: 2022,
        iconClass: 'fas fa-calculator',
        gradClass: 'grad-mat',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-BS-KLS-V.pdf'
      },
      {
        type: 'Buku Guru',
        authors: 'Meita Fitrianawati, dkk.',
        year: 2022,
        iconClass: 'fas fa-chalkboard-teacher',
        gradClass: 'grad-mat',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Matematika-BG-KLS-V.pdf'
      },
      {
        type: 'Buku Panduan',
        authors: 'Ari Setiyani, dkk.',
        year: 2025,
        iconClass: 'fas fa-book',
        gradClass: 'grad-mat',
        link: 'https://kurikulum.kemendikdasmen.go.id/file/panduan/dokumen/5.%20Final%20Panduan%20Mata%20Pelajaran%20Matematika_12_09_2025_Revisi%203.pdf'
      }
    ]
  },
  {
    id: 'ipas',
    name: 'IPAS',
    iconClass: 'fas fa-flask',
    gradClass: 'grad-ipas',
    items: [
      {
        type: 'Buku Siswa 2021',
        authors: 'Amalia Fitri Ghaniem, dkk.',
        year: 2021,
        iconClass: 'fas fa-flask',
        gradClass: 'grad-ipas',
        link: 'https://drive.google.com/file/d/17Exfckcf7JlyP13Hic6fF39u8Whls13u/view?usp=sharing'
      },
      {
        type: 'Buku Guru 2021',
        authors: 'Amalia Fitri Ghaniem, dkk.',
        year: 2021,
        iconClass: 'fas fa-chalkboard-teacher',
        gradClass: 'grad-ipas',
        link: 'https://drive.google.com/file/d/11RBi4BGSMWPhQYV7WH4cYVYzcPGZjOBg/view'
      },
      {
        type: 'Buku Siswa 2024',
        authors: 'Amalia Fitri Ghaniem, dkk.',
        year: 2024,
        iconClass: 'fas fa-book',
        gradClass: 'grad-ipas',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPAS_BS_KLS_V_Rev.pdf'
      },
      {
        type: 'Buku Guru 2024',
        authors: 'Amalia Fitri Ghaniem, dkk.',
        year: 2024,
        iconClass: 'fas fa-user-graduate',
        gradClass: 'grad-ipas',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/IPAS_BG_KLS_V_Rev.pdf'
      },
      {
        type: 'Buku Panduan',
        authors: 'Dr. Cucun Sutinah, dkk.',
        year: 2025,
        iconClass: 'fas fa-book',
        gradClass: 'grad-ipas',
        link: 'https://kurikulum.kemendikdasmen.go.id/file/panduan/dokumen/7.%20Final%20Panduan%20Mata%20Pelajaran%20IPAS_03_10_2025_Revisi%204.pdf'
      }
    ]
  },
  {
    id: 'sr',
    name: 'Seni Rupa',
    iconClass: 'fas fa-paint-brush',
    gradClass: 'grad-sr',
    items: [
      {
        type: 'Buku Guru 2021',
        authors: 'Taufik Hidayatulloh, Afia Fauziah',
        year: 2021,
        iconClass: 'fas fa-paint-brush',
        gradClass: 'grad-sr',
        link: 'https://drive.google.com/file/d/115Hzx5t66jAwbpElp6yzZ4ckJ07LGytp/view?usp=sharing'
      },
      {
        type: 'Buku Guru 2024',
        authors: 'Taufik Hidayatulloh, Afia Fauziah',
        year: 2024,
        iconClass: 'fas fa-paint-roller',
        gradClass: 'grad-sr',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Seni_Rupa_BG_KLS_V_Rev.pdf'
      },
      {
        type: 'Buku Panduan',
        authors: 'Dr. Rizki Taufik Rahman, dkk.',
        year: 2025,
        iconClass: 'fas fa-book',
        gradClass: 'grad-sr',
        link: 'https://kurikulum.kemendikdasmen.go.id/file/panduan/dokumen/18.%20Panduan%20Mata%20Pelajaran%20Seni%20Rupa.pdf'
      }
    ]
  },
  {
    id: 'bing',
    name: 'Bahasa Inggris',
    iconClass: 'fas fa-language',
    gradClass: 'grad-bing',
    items: [
      {
        type: 'Buku Siswa 2021',
        authors: 'EYLC Team',
        year: 2021,
        iconClass: 'fas fa-language',
        gradClass: 'grad-bing',
        link: 'https://drive.google.com/file/d/1t9mypk3_00fk2BY5o13et_99oKaGrxDJ/view?usp=sharing'
      },
      {
        type: 'Buku Guru 2021',
        authors: 'EYLC Team',
        year: 2021,
        iconClass: 'fas fa-chalkboard-teacher',
        gradClass: 'grad-bing',
        link: 'https://drive.google.com/file/d/10gjoS95iHunM2fUTIlgXtsPJ2gpb7bjq/view?usp=sharing'
      },
      {
        type: 'Buku Siswa 2024',
        authors: 'Yusnita Febriyanti, dkk.',
        year: 2024,
        iconClass: 'fas fa-book-open',
        gradClass: 'grad-bing',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Inggris_FN_BS_KLS_V.pdf'
      },
      {
        type: 'Buku Guru 2024',
        authors: 'Yusnita Febriyanti, dkk.',
        year: 2024,
        iconClass: 'fas fa-user-graduate',
        gradClass: 'grad-bing',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/Inggris_FN_BG_KLS_V.pdf'
      },
	  {
        type: 'Buku Panduan',
        authors: 'Prof. Emi Emilia, Ph.D., dkk.',
        year: 2025,
        iconClass: 'fas fa-book',
        gradClass: 'grad-bing',
        link: 'https://kurikulum.kemendikdasmen.go.id/file/panduan/dokumen/3.%20Final%20Panduan%20Mata%20Pelajaran%20Bahasa%20Inggris_12_09_2025_Revisi%203.pdf'
      }
    ]
  },
  {
    id: 'bjawa',
    name: 'Bahasa Jawa',
    iconClass: 'fas fa-comments',
    gradClass: 'grad-bjawa',
    items: [
      {
        type: 'Tantri Basa',
        authors: 'Tim Penyusun',
        year: 2016,
        iconClass: 'fas fa-comments',
        gradClass: 'grad-bjawa',
        link: 'https://drive.google.com/file/d/1n9sBLvmw44sLsgZCOuoRATA9a7KjV_e5/view?usp=sharing'
      }
    ]
  },
  {
    id: 'kka',
    name: 'Koding & AI (KKA)',
    iconClass: 'fas fa-code',
    gradClass: 'grad-koding',
    items: [
      {
        type: 'Buku Guru',
        authors: 'Cahaya Arifn, Fedora, dkk.',
        year: 2025,
        iconClass: 'fas fa-code',
        gradClass: 'grad-koding',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/KKA_BG_KLS_5.pdf'
      },
      {
        type: 'Buku Siswa',
        authors: 'Cahaya Arifn, Fedora, dkk.',
        year: 2025,
        iconClass: 'fas fa-laptop-code',
        gradClass: 'grad-koding',
        link: 'https://static.sc.cloudapp.web.id/content/pdf/bukuteks/kurikulum21/KKA_BS_KLS_5.pdf'
      },
	  {
        type: 'Buku Panduan',
        authors: 'Prof. Dr. Sri Astuti, M.Pd., dkk.',
        year: 2025,
        iconClass: 'fas fa-book',
        gradClass: 'grad-koding',
        link: 'https://kurikulum.kemendikdasmen.go.id/file/panduan/dokumen/33.%20Final%20Panduan%20Mata%20Pelajaran%20Panduan%20Mata%20Pelajaran%20Koding%20dan%20Kecerdasan%20Artifisial_12_Sep_2025_revisi%203.pdf'
      }
    ]
  }
];