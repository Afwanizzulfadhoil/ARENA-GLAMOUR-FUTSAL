my-futsal-app/
├── pages/
│   ├── index.js               # Halaman utama
│   ├── member.js              # Form daftar member
│   ├── booking.js             # Form booking lapangan
│   ├── admin/
│   │   └── dashboard.js       # Panel admin
│   └── api/
│       ├── daftar-member.js   # API route untuk daftar member
│       ├── booking.js         # API route untuk booking
│       ├── harga.js           # API route untuk ambil harga
│       └── update-harga.js    # API untuk update harga
├── lib/
│   └── supabase.js            # Supabase client config
├── .env.local                 # ENV file untuk kunci Supabase
├── package.json
└── README.md
