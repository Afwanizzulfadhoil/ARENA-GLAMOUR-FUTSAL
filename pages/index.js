import React, { useEffect } from "react";

const App = () => {
    useEffect(() => {
        // Smooth scroll
        const handler = (e) => {
            const href = e.currentTarget.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        };
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach((a) => a.addEventListener("click", handler));
        return () => anchors.forEach((a) => a.removeEventListener("click", handler));
    }, []);

    return (
        <div className="bg-gray-100 font-poppins">
            {/* Navigation */}
            <nav className="bg-glamour text-white sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img src="https://placehold.co/50x50" alt="Logo Arena Glamour Futsal" className="h-12 w-12 rounded-full" />
                            <span className="text-xl font-bold">
                                ARENA <span className="text-yellow-400">GLAMOUR</span>
                            </span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#home" className="hover:text-yellow-400 transition">Beranda</a>
                            <a href="#facility" className="hover:text-yellow-400 transition">Fasilitas</a>
                            <a href="#pricing" className="hover:text-yellow-400 transition">Harga</a>
                            <a href="#gallery" className="hover:text-yellow-400 transition">Galeri</a>
                        </div>
                        <div>
                            <a href="#booking" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full transition transform hover:scale-105">
                                Booking
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero-video bg-gray-900 flex items-center justify-center relative min-h-[60vh]">
                <img src="https://placehold.co/1920x1080" alt="Lapangan futsal modern dengan pencahayaan profesional dan lantai sintetis premium" className="absolute w-full h-full object-cover" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        TEMPAH <span className="text-yellow-400">KEJUARAAN</span> ANDA
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                        Lapangan futsal premium dengan standar internasional dan fasilitas eksklusif untuk pengalaman bermain tak terlupakan
                    </p>
                    <div className="space-x-4">
                        <a href="#booking" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transform hover:scale-105 transition pulse-hover">
                            BOOKING SEKARANG
                        </a>
                        <a href="#pricing" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transform hover:scale-105 transition">
                            LIHAT HARGA
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
                            <div className="text-gray-300">Tim Regular</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">5.0</div>
                            <div className="text-gray-300">Rating Google</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
                            <div className="text-gray-300">Lapangan Premium</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                            <div className="text-gray-300">Layanan Booking</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facility Section */}
            <section id="facility" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            FASILITAS <span className="text-yellow-400">PREMIUM</span>
                        </h2>
                        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kami menyediakan fasilitas terbaik untuk pengalaman bermain futsal yang tak terlupakan
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {/* SVG Lapangan Sintetis */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9h4v12H2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Lapangan Sintetis</h3>
                            <p className="text-gray-600 text-center">
                                Lantai sintetis berkualitas tinggi dengan kualitas FIFA Recommended untuk performa maksimal
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {/* SVG Pencahayaan LED */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Pencahayaan LED</h3>
                            <p className="text-gray-600 text-center">
                                Sistem pencahayaan profesional 500 lux untuk pertandingan siang dan malam hari
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {/* SVG Lounge Eksklusif */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-3">Lounge Eksklusif</h3>
                            <p className="text-gray-600 text-center">
                                Ruang tunggu ber-AC dengan TV LED, sofa nyaman, dan locker pribadi untuk kenyamanan maksimal
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            PAKET <span className="text-yellow-400">HARGA</span>
                        </h2>
                        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Pilih paket yang sesuai dengan kebutuhan tim Anda
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Member Package */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 border-2 border-yellow-400 relative">
                            <div className="bg-yellow-400 text-gray-900 py-3 px-6 font-bold">PAKET MEMBER</div>
                            <div className="p-8">
                                <div className="text-5xl font-bold text-gray-800 mb-2">Rp95<span className="text-lg">.000</span></div>
                                <div className="text-gray-500 mb-6">Per Jam</div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <CheckIcon color="yellow" /> Prioritas booking lapangan
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon color="yellow" /> Gratis air mineral
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon color="yellow" /> Cashback poin reward
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon color="yellow" /> Diskon merchandise 15%
                                    </li>
                                </ul>
                                <a href="#booking" className="block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg text-center transition">
                                    DAFTAR MEMBER
                                </a>
                            </div>
                        </div>
                        {/* Regular Package */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-200">
                            <div className="bg-gray-800 text-white py-3 px-6 font-bold">PAKET REGULER</div>
                            <div className="p-8">
                                <div className="text-5xl font-bold text-gray-800 mb-2">Rp110<span className="text-lg">.000</span></div>
                                <div className="text-gray-500 mb-6">Per Jam</div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <CheckIcon color="gray" /> Booking maksimal H-1
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon color="gray" /> Ruang ganti standar
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon color="gray" /> Akses area publik
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon color="gray" /> Air mineral (dijual terpisah)
                                    </li>
                                </ul>
                                <a href="#booking" className="block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg text-center transition">
                                    BOOKING SEKARANG
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            GALERI <span className="text-yellow-400">KAMI</span>
                        </h2>
                        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Lihat suasana dan fasilitas Arena Glamour Futsal
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Lapangan utama Arena Glamour Futsal dengan pencahayaan profesional di malam hari",
                            "Area lounge premium dengan sofa kulit dan meja kopi modern untuk relaksasi setelah bermain",
                            "Turnamen futsal sedang berlangsung dengan wasit profesional di Arena Glamour",
                            "Cafe arena dengan menu sehat dan minuman isotonik untuk pemulihan setelah bermain"
                        ].map((alt, idx) => (
                            <div className="overflow-hidden rounded-lg" key={idx}>
                                <img src="https://placehold.co/600x400" alt={alt} className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            APA KATA <span className="text-yellow-400">MEREKA</span>
                        </h2>
                        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Testimonial
                            name="Ahmad"
                            role="Kapten Tim Futsal PT Bintang Jaya"
                            text='Lapangan terbaik di Jakarta! Lantai sintetisnya sangat nyaman untuk bermain, tidak sakit di lutut seperti lapangan lain. Pelayanannya juga cepat dan profesional.'
                            img="https://placehold.co/50x50"
                        />
                        <Testimonial
                            name="Rina"
                            role="Manager Marketing PT Surya Abadi"
                            text='Sebagai member, saya sangat puas dengan fasilitas dan pelayanan di Arena Glamour. Turun jadi Rp95rb/jam sangat worth it dengan fasilitas yang diberikan.'
                            img="https://placehold.co/50x50"
                        />
                        <Testimonial
                            name="Budi"
                            role="Pelatih Futsal SMU Nusantara"
                            text='Turnamen terakhir kami di sini sangat sukses! Pencahayaannya bagus, lapangannya konsisten, dan staffnya sangat membantu. Pasti akan kembali lagi!'
                            img="https://placehold.co/50x50"
                        />
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section id="booking" className="py-20 bg-glamour text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Siap <span className="text-yellow-400">Bermain?</span>
                            </h2>
                            <p className="text-gray-200 mb-8">
                                Booking lapangan Anda sekarang dan nikmati pengalaman bermain futsal premium dengan fasilitas terbaik di Jakarta. Isi form atau hubungi langsung tim kami.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <PhoneIcon />
                                    <span>(021) 8888-7777</span>
                                </div>
                                <div className="flex items-center">
                                    <MailIcon />
                                    <span>booking@arenaglamour.com</span>
                                </div>
                                <div className="flex items-center">
                                    <LocationIcon />
                                    <span>Jl. Sport Raya No.88, Kebayoran Baru, Jakarta Selatan</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-xl mt-0">
                            <form>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Nomor HP</label>
                                    <input type="text" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Tanggal</label>
                                        <input type="date" id="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Waktu</label>
                                        <select id="time" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                                            <option>08:00 - 09:00</option>
                                            <option>09:00 - 10:00</option>
                                            <option>10:00 - 11:00</option>
                                            <option>11:00 - 12:00</option>
                                            <option>13:00 - 14:00</option>
                                            <option>14:00 - 15:00</option>
                                            <option>15:00 - 16:00</option>
                                            <option>16:00 - 17:00</option>
                                            <option>17:00 - 18:00</option>
                                            <option>19:00 - 20:00</option>
                                            <option>20:00 - 21:00</option>
                                            <option>21:00 - 22:00</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400" />
                                        <span className="ml-2 text-gray-700">Saya ingin menjadi member (diskon Rp15.000/jam)</span>
                                    </label>
                                </div>
                                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-lg transition">
                                    KONFIRMASI BOOKING
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6">
                                ARENA <span className="text-yellow-400">GLAMOUR</span>
                            </h3>
                            <p className="text-gray-400">
                                Lapangan futsal premium dengan standar internasional di jantung Jakarta. Fasilitas lengkap untuk kebutuhan klub maupun komunitas.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Menu</h4>
                            <ul className="space-y-3">
                                <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition">Beranda</a></li>
                                <li><a href="#facility" className="text-gray-400 hover:text-yellow-400 transition">Fasilitas</a></li>
                                <li><a href="#pricing" className="text-gray-400 hover:text-yellow-400 transition">Harga</a></li>
                                <li><a href="#gallery" className="text-gray-400 hover:text-yellow-400 transition">Galeri</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Jam Operasional</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex justify-between">
                                    <span>Senin-Jumat</span>
                                    <span>08.00-23.00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sabtu-Minggu</span>
                                    <span>07.00-24.00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Hari Libur</span>
                                    <span>24 Jam</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6">Follow Kami</h4>
                            <div className="flex space-x-4">
                                <SocialIcon type="facebook" />
                                <SocialIcon type="youtube" />
                                <SocialIcon type="google" />
                                <SocialIcon type="twitter" />
                            </div>
                            <div className="mt-6">
                                <img src="https://placehold.co/200x60" alt="QR Code untuk booking online Arena Glamour Futsal" className="border border-gray-700 rounded-lg p-1" />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                &copy; 2023 Arena Glamour Futsal. All rights reserved.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <a href="https://wa.me/62895327544446" className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition transform hover:scale-110 z-50 floating-btn">
                <WhatsAppIcon />
            </a>
        </div>
    );
};

// Helper Components
const CheckIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${color === "yellow" ? "text-yellow-400" : "text-gray-400"} mr-2`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const Testimonial = ({ name, role, text, img }) => (
    <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="text-yellow-400 text-2xl mr-2">★</div>
            ))}
        </div>
        <p className="text-gray-600 mb-6">"{text}"</p>
        <div className="flex items-center">
            <img src={img} alt={`Profil ${name}, ${role}`} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm text-gray-500">{role}</div>
            </div>
        </div>
    </div>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
);

const SocialIcon = ({ type }) => {
    // You can expand this with more icons if needed
    const icons = {
        facebook: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
        ),
        youtube: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
        ),
        google: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
        ),
        twitter: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
        ),
    };
    return (
        <a href="#" className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center transition">
            {icons[type]}
        </a>
    );
};

export default App;
