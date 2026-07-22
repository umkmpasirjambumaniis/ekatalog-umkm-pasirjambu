/*
  =========================================================
  DATA UMKM DESA PASIRJAMBU
  =========================================================
  Ini daftar semua UMKM yang tampil di website. Untuk NAMBAH
  UMKM BARU, EDIT DATA, atau ISI FOTO/PETA, cukup edit file
  ini saja -- tidak perlu buka file index.html.

  CARA ISI FOTO:
    1. Taruh file foto di folder "foto/" (contoh: foto/nira-fashion.jpg)
    2. Isi baris "foto" dengan path itu, contoh:
       "foto": "foto/nira-fashion.jpg"
    3. Kalau foto dihosting online (Google Drive/Imgur), boleh juga
       taruh link lengkapnya, contoh:
       "foto": "https://i.imgur.com/xxxxx.jpg"
    4. Kalau belum ada foto, biarkan kosong: "foto": ""

  CARA ISI PETA:
    1. Buka lokasi UMKM di Google Maps, klik "Bagikan" > "Salin link"
    2. Tempel link itu ke baris "peta", contoh:
       "peta": "https://maps.app.goo.gl/xxxxxxx"
    3. Kalau belum ada, biarkan kosong: "peta": ""

  CARA NAMBAH UMKM BARU:
    Copy 1 blok dari tanda kurung kurawal { sampai } (termasuk koma
    setelahnya), tempel di akhir daftar (sebelum tanda "]" penutup),
    lalu ganti isinya. Contoh blok kosong siap isi ada di paling
    bawah file ini.

  Jenis usaha yang sudah dikenali sistem (biar warna & ikon otomatis
  sesuai): Perdagangan, Kuliner, Jasa, Kerajinan, Pertenakan,
  "Pertanian atau Perkebunan", Lainnya. Kalau pakai jenis baru di luar
  ini juga tetap tampil, cuma warnanya default.
  =========================================================
*/

const umkmData = [
  {
    id: 1,
    nama: "Nira Fashion",
    pemilik: "Eni",
    alamat:
      "Kp. Sukamanah, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Lainnya",
    produk: "Pakaian, Elektronik, Furnitur, Serba ada",
    foto: "foto/nira-fashion.jpg",
    peta: "https://maps.app.goo.gl/B6uKZXuTpmQ91Ke66?g_st=ac",
  },
  {
    id: 2,
    nama: "Warung Teh Sarah",
    pemilik: "Siti",
    alamat:
      "Kp. Cijambu, RT 14/RW 04, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Makanan dan Jajanan",
    foto: "foto/warung-tehsarah.jpg",
    peta: "https://www.google.com/maps/place/-6.691318,107.267693",
  },
  {
    id: 3,
    nama: "Eka Beauty Studio",
    pemilik: "Eka",
    alamat:
      "Kp. Cikopak, RT 13/RW 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Jasa",
    produk: "Salon perawatan, treatment, smoothing, eyelash, nail art",
    foto: "foto/eka-beauty.jpg",
    peta: "https://maps.app.goo.gl/T3kJKVPvX4nY4jSbA",
  },
  {
    id: 4,
    nama: "Warung Bu Iis",
    pemilik: "Iis",
    alamat:
      "Kp. Cikopak, RT 13/RW 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Pertanian",
    produk: "Sembako, bensin, jajanan",
    foto: "foto/warung-bu-iis.jpg",
    peta: "https://www.google.com/maps/place/-6.69453,107.27045",
  },
  {
    id: 5,
    nama: "Warung Opik",
    pemilik: "Taufik Hidayat",
    alamat:
      "Kp. Cikopak, RT 13/RW 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Perdagangan",
    produk: "Sembako, ATM mini, pulsa",
    foto: "foto/warung-opik.jpg",
    peta: "https://www.google.com/maps/place/-6.695117,107.270833",
  },
  {
    id: 6,
    nama: "Warung Bu Entin",
    pemilik: "Entin",
    alamat:
      "Kp. Cisuren, RT 12/RW 04, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 3",
    jenis: "Perdagangan",
    produk: "Sembako, bensin",
    foto: "foto/warung-bu-entin.jpg",
    peta: "https://maps.app.goo.gl/cdqbGDmdFsxs7Kw5A?g_st=ac",
  },
  {
    id: 7,
    nama: "Warung Seblak Teh Nina",
    pemilik: "Nina",
    alamat:
      "Kp. Cisuren, RT 12/RW 04, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 3",
    jenis: "Kuliner",
    produk: "Seblak, Jajanan",
    foto: "foto/warung-seblak-teh-nina.jpg",
    peta: "https://maps.app.goo.gl/jxJg48BwLohVYNDu8?g_st=ac",
  },
  {
    id: 8,
    nama: "Mi Ayam Pak Adum",
    pemilik: "Pak Adum",
    alamat:
      "Kp. Cisuren, RT 12/RW 04, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Kuliner",
    produk: "Kupat tahu, mi ayam, cilok",
    foto: "foto/mie-ayam-pak-adung.jpg",
    peta: "https://maps.app.goo.gl/7v8wmwksNY7ZS2uJ7?g_st=ac",
  },
  {
    id: 9,
    nama: "Toko Sembako Al-Barokah",
    pemilik: "Eni",
    alamat:
      "Kp. Cijambu, RT 12, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Perdagangan",
    produk: "Sembako, Parabot, Pakaian",
    foto: "foto/sembako-albarokah.jpg",
    peta: "https://maps.app.goo.gl/hRXPbpkANjhZsb7q7",
  },
  {
    id: 10,
    nama: "Warung Teh Rani",
    pemilik: "Rani Wulansari",
    alamat:
      "Kp. Cimahi, RT 11/RW 04, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Perdagangan",
    produk: "Sembako, Jajanan",
    foto: "foto/warung-teh-rani.jpg",
    peta: "https://www.google.com/maps/place/-6.697925,107.275184",
  },
  {
    id: 11,
    nama: "Warung Teh Ai",
    pemilik: "Ai",
    alamat:
      "Kp. Cimahi, RT 10/RW 03, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 3",
    jenis: "Perdagangan",
    produk: "Sembako, Jajanan, Cilor",
    foto: "foto/warung-teh-ayi.jpg",
    peta: "https://maps.google.com/?q=-6.698082,107.275617&entry=gps&g_st=ac",
  },
  {
    id: 12,
    nama: "Warung Ibu Susan",
    pemilik: "Susan",
    alamat:
      "Kp. Cimahi, RT 11/RW 04, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 3",
    jenis: "Perdagangan",
    produk: "Sembako, Jajanan, Seblak, Bakso, Cilok, Karedok",
    foto: "foto/warung-ibu-susan.jpg",
    peta: "https://maps.app.goo.gl/VXTwBkNScjAHnwnc9?g_st=ac",
  },
  {
    id: 13,
    nama: "Warung Teh Nuraidah",
    pemilik: "NurAidah",
    alamat:
      "Kp. Cimahi, RT 11/RW 04, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 3",
    jenis: "Kuliner",
    produk: "Sembako, Jajanan, Mi Jebew, Mi Ayam, Seblak",
    foto: "foto/warung-teh-nuraidah.jpg",
    peta: "https://maps.app.goo.gl/JRgBonfnwHdBD3zAA",
  },
  {
    id: 14,
    nama: "BRILink Desi Anjaeni",
    pemilik: "DESI ANJAENI",
    alamat:
      "Kp. Cijambu, RT 06/RW 07, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 3",
    jenis: "Jasa",
    produk:
      "Tarik tunai, setor tunai, setor  pinjaman, transfer, top up e wallet.",
    foto: "foto/brilink-desi.jpg",
    peta: "https://maps.app.goo.gl/REmR1jHTPQ1inFTRA?g_st=ac",
  },
  {
    id: 15,
    nama: "Kedai Han Es Kelapa Muda",
    pemilik: "Rudi",
    alamat:
      "Kp. Cijambu, RT 6/RW 07, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Kuliner",
    produk: "Es kelapa, es jeruk, dimsum, Es Teler",
    foto: "foto/kedai-han.jpg",
    peta: "https://maps.app.goo.gl/1Lc6HVe58G9Wbemw6",
  },
  {
    id: 16,
    nama: "Toko Sayur Ibu Nina",
    pemilik: "Ibu Nina & Bapak Mahmudin",
    alamat:
      "Kp. Cijambu, RT 06, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Buah & sayur",
    foto: "foto/kedai-sayur-bunina.jpg",
    peta: "https://www.google.com/maps/place/-6.70115,107.273598",
  },
  {
    id: 17,
    nama: "Pengelolaan Kayu Pak Ipang",
    pemilik: "Ipang",
    alamat:
      "Kp. Cisuren, RT 12, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 3",
    jenis: "Kerajinan",
    produk: "Kayu, perahu, mebel",
    foto: "foto/kayu-pak-ipang.jpg",
    peta: "https://maps.app.goo.gl/56L6mjgiCpYU8fhX8?g_st=ac",
  },
  {
    id: 18,
    nama: "Warung Nasi Parasmanan Teh Leni",
    pemilik: "Teh Leni",
    alamat:
      "Kp. Sampalan Wetan, RT 03/RW 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Kuliner",
    produk: "Makanan (Teman Nasi)",
    foto: "foto/warung-prasmanan.jpeg",
    peta: "https://maps.app.goo.gl/iFUXC4XsHUx716D69?g_st=ac",
  },
  {
    id: 19,
    nama: "Ikan Segar Bapa Yusuf",
    pemilik: "Yusuf",
    alamat:
      "Kp. Sampalan Wetan, RT 03/RW 08, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Pertenakan",
    produk: "Ikan segar, ikan asin, Ikan nila, emas",
    foto: "foto/ikan-yusuf.jpeg",
    peta: "https://maps.app.goo.gl/rryEH6miaVfwhQHh9?g_st=ac",
  },
  {
    id: 20,
    nama: "Toko sembako pak bujang",
    pemilik: "Pak bujang",
    alamat:
      "Kp. Citiis RT 09/RW 03, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Sembako",
    foto: "foto/toko-pakbujang.jpg",
    peta: "https://maps.app.goo.gl/3Hw3eKwvKnJwpjsJ9?g_st=aw",
  },
  {
    id: 21,
    nama: "Warung Dua Putra",
    pemilik: "Ibu Nurbaeti",
    alamat:
      "Kp. Sampalan, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Perdagangan",
    produk: "Sembako, Pulsa",
    foto: "foto/warung-duaputra.jpg",
    peta: "https://maps.google.com/?q=-6.698767,107.279052&entry=gps ",
  },
  {
    id: 22,
    nama: "Sawmil",
    pemilik: "H. tapif",
    alamat:
      "Kp. Citiis, RT 03/RW 09, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Kerajinan",
    produk: "Sawmil & kayu",
    foto: "foto/sawmil.jpg",
    peta: "https://maps.app.goo.gl/AJSynEa6QCpTi71p7?g_st=aw",
  },
  {
    id: 23,
    nama: "Seblak dan Jus Teh Rani",
    pemilik: "Teh Rani",
    alamat:
      "Kp. Sampalan RT 03/08, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Kuliner",
    produk: "Seblak, Jus, basreng, dll",
    foto: "foto/seblak-tehrani.jpeg",
    peta: "https://maps.app.goo.gl/oX7jdRGVgALxUQg88?g_st=aw",
  },
  {
    id: 24,
    nama: "Warung Bu Juju",
    pemilik: "Ibu Juju",
    alamat:
      "Kp. Cimanggu, RT 1, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Kuliner",
    produk: "Warung jajanan, snacks",
    foto: "foto/warung-bujuju.jpeg",
    peta: "https://maps.app.goo.gl/covzQMB2dMMbSexv6?g_st=aw",
  },
  {
    id: 25,
    nama: "Warung Ajuy",
    pemilik: "Ibu Ani",
    alamat:
      "Kp. Cimanggu RT 01/RW 01, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Perdagangan",
    produk: "Warung, Gas, dan Bensin",
    foto: "foto/warung-ajuy.jpeg",
    peta: "https://maps.app.goo.gl/eCgJ3nWi2MobNoZf6?g_st=aw",
  },
  {
    id: 26,
    nama: "Toko Alat Pancing H. Eman",
    pemilik: "H. Eman",
    alamat:
      "Kp. Cijambu RT 07/RW 02,Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Lainnya",
    produk: "Alat pancing, sembako, pupuk urea",
    foto: "foto/toko-pancing-eman.jpeg",
    peta: "https://www.google.com/maps/place/-6.70057,107.273187",
  },
  {
    id: 27,
    nama: "Toko Grosir Syabil",
    pemilik: "H. Hasan",
    alamat:
      "Kp. Cijambu, RT 06/RW 07, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Sembako",
    foto: "foto/toko-syabil.jpeg",
    peta: "https://www.google.com/maps/place/-6.700784,107.273349",
  },
  {
    id: 28,
    nama: "Warung Teh Resti",
    pemilik: "Teh Resti",
    alamat:
      "Kp. Cijambu RT 06/RW 07, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Jajanan warung, makanan minuman",
    foto: "foto/warungtehresti.jpeg",
    peta: "https://maps.app.goo.gl/uBUm6SM3NkhkAZ5d6",
  },
  {
    id: 29,
    nama: "Warung Ibu Eti",
    pemilik: "Ibu Eti",
    alamat:
      "Kp. Cimanggu RT 02/RW 01, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Jajanan warung, makanan dan minuman, pulsa",
    foto: "foto/warungibueti.png",
    peta: "https://www.google.com/maps/place/-6.70138,107.277295",
  },
  {
    id: 30,
    nama: "Pangkas Rambut Baraya",
    pemilik: "Bapak Usup Hanapiah",
    alamat:
      "Kp. Cijambu RT 08, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Jasa",
    produk: "Pangkas Rambut",
    foto: "foto/pangkas-rambutbaraya.jpeg",
    peta: "https://maps.app.goo.gl/eUw15LZyTB8aYdrFA?g_st=aw",
  },
  {
    id: 31,
    nama: "Daun Pisang Ibu Rini",
    pemilik: "Ibu Rini",
    alamat:
      "Kp. Sampalan, RT 03, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Kerajinan",
    produk: "Daun Pisang",
    foto: "foto/daunpisangiburini.jpeg",
    peta: "https://maps.app.goo.gl/ME6QmanZqwjGHm4R7",
  },
  {
    id: 32,
    nama: "Warung Ibu Cueh",
    pemilik: "Ibu Cueh",
    alamat:
      "Kp. Cimanggu, RT 01/RW 01, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Perdagangan",
    produk: "Jajanan warung, makanan dan minuman",
    foto: "foto/ibucueh.jpeg",
    peta: "https://maps.app.goo.gl/zd29AF86r1hCcGBD8?g_st=aw",
  },
  {
    id: 33,
    nama: "Warung Ibu Ana",
    pemilik: "Ana Rohanah",
    alamat:
      "Kp Cijambu, RT 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Kuliner",
    produk: "Warung, Makanan dan Minuman, Jajanan",
    foto: "foto/warungibuana.png",
    peta: "https://maps.app.goo.gl/S7iZKFnZSTp4dC9J6?g_st=aw",
  },
  {
    id: 34,
    nama: "Toko Sembako Ilham",
    pemilik: "Ilham",
    alamat:
      "Kp. Cijambu, RT 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Sembako",
    foto: "foto/tokosembakoilham.jpeg",
    peta: "https://maps.app.goo.gl/DDZ96DEWzRD5kLsU6?g_st=aw",
  },
  {
    id: 35,
    nama: "Toko H. Latifah",
    pemilik: "H. Latifah",
    alamat:
      "Kp. Cijambu, RT 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Sembako, Makanan dan Minuman, Jajanan",
    foto: "foto/tokolatifah.jpeg",
    peta: "https://maps.app.goo.gl/hikyxEfpbvv1y5b57?g_st=aw",
  },
  {
    id: 36,
    nama: "Pinanjung Mas",
    pemilik: "Pa Aceng",
    alamat:
      "Kp. Cimanggu, RT 01, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Pertenakan",
    produk: "Jual Ikan",
    foto: "foto/pananjungmas.jpeg",
    peta: "https://maps.app.goo.gl/kgxBD3MDH6ioUtfd7?g_st=aw",
  },
  {
    id: 37,
    nama: "Depot Air Pinang Merah",
    pemilik: "Ibu Rahmawati",
    alamat:
      "Kp. Cimanggu, RT 01/RW01, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Perdagangan",
    produk: "Isi ulang air galon, sewa ps",
    foto: "foto/depotairpinangmerah.jpeg",
    peta: "https://maps.app.goo.gl/WWMjZ3ZtdGdC9vri6?g_st=aw",
  },
  {
    id: 38,
    nama: "Warung Na’im Frozen",
    pemilik: "Ucu Annisa",
    alamat:
      "Kp. Cijambu RT 04/RW 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Frozen Food, bahan seblak, minyak, isi gas, pulsa",
    foto: "foto/warungnaimfrozen.jpeg",
    peta: "https://maps.app.goo.gl/VaAWxf3NfJrJWQRRA?g_st=aw",
  },
  {
    id: 39,
    nama: "Kolam Renang dan Warung Pa Bubun",
    pemilik: "Pa Bubun",
    alamat:
      "Kp. Cijambu, RT 05, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Kolam renang dan warung",
    foto: "foto/pabubun.jpeg",
    peta: "https://maps.app.goo.gl/xREDsPKTy6GhaFsi7?g_st=aw",
  },
  {
    id: 40,
    nama: "Warung Pa H. Amirul",
    pemilik: "Pa H. Amirul",
    alamat:
      "Kp. Cijambu RT 08/RW02, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Sembako, makanan minuman, isi ulang air, gas, pom mini bensin",
    foto: "foto/warungamirul.jpeg",
    peta: "https://maps.app.goo.gl/Aoqy4t4QQEhrigj7A?g_st=aw",
  },
  {
    id: 41,
    nama: "Lotek Ibu Rohayati",
    pemilik: "Ibu Rohayati",
    alamat:
      "Kp. Cijambu, RT 18, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Kuliner",
    produk: "Lotek, Karedok",
    foto: "foto/lotekrohayati.jpeg",
    peta: "https://maps.app.goo.gl/HtUcDJNQcDAsHBqt9?g_st=aw",
  },
  {
    id: 42,
    nama: "Warung Serepet Jaer",
    pemilik: "Ibu Elis",
    alamat:
      "Kp. Cijambu RT 08, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Sembako, Pom Mini Bensin",
    foto: "foto/serepetjaer.jpeg",
    peta: "https://maps.app.goo.gl/n5x2UVKZ1S4w5yCNA?g_st=aw",
  },
  {
    id: 43,
    nama: "Warung Ibu Halimah",
    pemilik: "Ibu Halimah",
    alamat:
      "Kp. Cikaret, RT 23, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Sembako",
    foto: "foto/warunghalimah.jpeg",
    peta: "https://www.google.com/maps/place/-6.688639,107.26689",
  },
  {
    id: 44,
    nama: "Warung Ibu Isoh",
    pemilik: "Ibu Isoh",
    alamat:
      "Kp. Cikadu, RT 15, Desa Pasirjambu, Kec. Maniis Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungisoh.jpeg",
    peta: "https://share.google/QjETuUSmyasS0aDHz",
  },
  {
    id: 45,
    nama: "Warung & Agen BRILink Pak Hasanudin",
    pemilik: "Pak Hasanudin",
    alamat:
      "Kp. Cikadu, RT 15/RW 05, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/brilinkhasanudin.jpeg",
    peta: "https://share.google/akfeSQI6eDJy4IL94",
  },
  {
    id: 46,
    nama: "Warung Bu Elis",
    pemilik: "Bu Elis",
    alamat:
      "Kp. Cikadu, RT 23/RW 05, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungbuelis.jpeg",
    peta: "https://share.google/hKfBGa7ZSFUmWWFcr",
  },
  {
    id: 47,
    nama: "Warung Teh Devi",
    pemilik: "Teh Devi",
    alamat:
      "Kp. Cikaret, RT 16/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungtehdevi.jpeg",
    peta: "https://maps.app.goo.gl/DLurc1EvngcyzZVr5",
  },
  {
    id: 48,
    nama: "Warung Sayur Teh Irma",
    pemilik: "Teh Irma",
    alamat:
      "Kp. Cikaret, RT 16/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Sayur",
    foto: "foto/warungtehirma.jpeg",
    peta: "https://maps.app.goo.gl/DLurc1EvngcyzZVr5",
  },
  {
    id: 49,
    nama: "Warung Bu Entus",
    pemilik: "Bu Entus",
    alamat:
      "Kp. Cikaret, RT 17/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungentus.jpeg",
    peta: "https://share.google/oupjIY65LGTvdl0bV",
  },
  {
    id: 50,
    nama: "Warung Bu Nunung",
    pemilik: "Bu Nunung",
    alamat:
      "Kp. Cikaret, RT 17/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungnunung.jpeg",
    peta: "https://share.google/3GFnjcdRo7BpqSMtn",
  },
  {
    id: 51,
    nama: "Warung Bu Tarsih",
    pemilik: "Bu Tarsih",
    alamat:
      "Kp. Cikaret, RT 17/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungtarsih.jpeg",
    peta: "https://maps.app.goo.gl/rZE4KYkcgZna9prJ6",
  },
  {
    id: 52,
    nama: "Warung Ibu Munah",
    pemilik: "Ibu Munah",
    alamat:
      "Kp. Cikaret, RT 17/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungbumunah.jpeg",
    peta: "https://maps.app.goo.gl/zESRAMmLN24Xh88F7",
  },
  {
    id: 53,
    nama: "Warung Bu Tuti",
    pemilik: "Bu Tuti",
    alamat:
      "Kp. Cikaret, RT 19/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungbututi.jpeg",
    peta: "https://maps.app.goo.gl/19x1B3hb97GHM5nF6",
  },
  {
    id: 54,
    nama: "Warung Bu Iyun",
    pemilik: "Bu Iyun",
    alamat:
      "Kp. Cikaret, RT 19/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungibuiyun.jpeg",
    peta: "https://maps.app.goo.gl/4RgZWpSNdGWvpCym9",
  },
  {
    id: 55,
    nama: "Warung Pak RT 19",
    pemilik: "Pak RT 19",
    alamat:
      "Kp. Cikaret, RT 19/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungpakrt19.jpeg",
    peta: "https://maps.app.goo.gl/6pEQBF71ZqZLcQ31A",
  },
  {
    id: 56,
    nama: "Warung Ibu Kokoy",
    pemilik: "Ibu Kokoy",
    alamat:
      "Kp. Cikadu, RT 15/RW 05, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat 41166",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungibukokoy.jpeg",
    peta: "https://maps.app.goo.gl/kN2TgLRpfS86Z6qFA",
  },
  {
    id: 57,
    nama: "Warung Bu Imas",
    pemilik: "Bu Imas",
    alamat:
      "Kp. Cikadu, RT 23/RW 05, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungimad.jpeg",
    peta: "https://maps.app.goo.gl/TprpXq4r5jeEpa9o6",
  },
  {
    id: 58,
    nama: "Bengkel Bapak Ahmad",
    pemilik: "Bapak Ahmad",
    alamat:
      "Kp. Cikaret, RT 19/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Jasa Servis",
    foto: "foto/bengkelahmad.jpeg",
    peta: "https://share.google/mRhacx092iOAYTW1Q",
  },
  {
    id: 59,
    nama: "Warung Abidin",
    pemilik: "Pak Abidin",
    alamat:
      "Kp. Cikaret, RT 19/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungabidin.jpeg",
    peta: "https://maps.app.goo.gl/TN8TcDRGTaB6zjoo6",
  },
  {
    id: 60,
    nama: "Warung Bu Ikah",
    pemilik: "Bu Ikah",
    alamat:
      "Kp. Cikaret, RT 17/RW 06, Desa Pasirjambu, Kec. Maniis, Kab. Purwakarta, Jawa Barat",
    dusun: "Dusun 4",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungibuikah.jpeg",
    peta: "https://maps.app.goo.gl/q9QWDf2cju1w6rUcA",
  },
  {
    id: 61,
    nama: "Warung Ibu Ida",
    pemilik: "Bu Ida",
    alamat:
      "Kp. Cijambu, RT 18/RW 02, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok",
    foto: "foto/warungbuida.jpeg",
    peta: "https://maps.app.goo.gl/sA7Y41MfEhQDcovKA?g_st=aw",
  },
  {
    id: 62,
    nama: "Mebel Bapak Roni",
    pemilik: "Bapak Roni",
    alamat:
      "Kp. Cijambu, RT 18/RW 02, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Kerajinan",
    produk: "Kayu, Kusen, Mebel",
    foto: "foto/mebelpakroni.png",
    peta: "https://maps.app.goo.gl/FgrRx3w6btsEoRXg7?g_st=aw",
  },
  {
    id: 63,
    nama: "Warung Bapak Tatang",
    pemilik: "Bapak Tatang",
    alamat:
      "Kp. Cijambu, RT 07/RW 07, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 2",
    jenis: "Perdagangan",
    produk: "Kebutuhan pokok, jajanan, dll.",
    foto: "foto/warungtatang.jpeg",
    peta: "https://maps.app.goo.gl/Xg459vta2WyUUcrj8?g_st=aw",
  },
   {
    id: 64,
    nama: "Seblak Prasmanan Edod",
    pemilik: "Ibu Dede",
    alamat:
      "Kp. Sampalan Wetan, RT 03/RW 08, Desa Pasirjambu, Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    dusun: "Dusun 1",
    jenis: "Kuliner",
    produk: "Jajanan Seblak, Gorengan, Minuman Es",
    foto: "foto/seblakedod.jpeg",
    peta: "https://maps.app.goo.gl/skC3PShj7nxmRrZU7?g_st=aw",
  },
];

/*
  ---------------------------------------------------------
  CONTOH BLOK KOSONG UNTUK NAMBAH UMKM BARU (copy dari sini)
  ---------------------------------------------------------

  {
    "id": 61,
    "nama": "Nama Usaha Baru",
    "pemilik": "Nama Pemilik",
    "alamat": "Kp. ..., Kec. Maniis, Kabupaten Purwakarta, Jawa Barat",
    "dusun": "Dusun 1",
    "jenis": "Kuliner",
    "produk": "Sebutkan produk/jasa yang ditawarkan",
    "foto": "",
    "peta": ""
  },

*/
