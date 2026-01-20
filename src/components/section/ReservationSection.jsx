import { MapPin, Phone } from "lucide-react";

export const ReservationSection = () => {
  return (
    <section id="story" className="relative bg-gray-100 overflow-hidden py-20">
      <div className="flex flex-col md:flex-row">
        {/* LEFT BOX: RESERVATION */}
        <div className="w-full md:w-1/2 bg-[#3C57DB] rounded-tr-3xl rounded-br-3xl shadow-xl">
          {/* padding internal untuk konten */}
          <div className="px-16 py-16">
            {/* TITLE tetap sama */}
            <h1 className="text-6xl -translate-x-8 translate-y-6 font-bold text-transparent stroke-text-white">
              RESERVATION
            </h1>
            <h2 className="text-white font-bold text-4xl">RESERVATION</h2>
            <p className="text-white mt-4 max-w-lg">
              Reservasinya mudah kok tinggal hubungi aja kontak Sunny Side
              dibawah ini.
            </p>

            {/* CONTACT */}
            <div className="mt-10 space-y-6">
              {/* Alamat */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Samping Fakultas Ekonomi Universitas Galuh, Jl. Arya Janggala,
                  Mekarjaya, Baregbeg, Kabupaten Ciamis, Jawa Barat 46274
                </p>
              </div>

              {/* Telepon */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <p className="text-white/90 font-medium">(+62) 858-6119-6708</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BOX: GOOGLE MAPS */}
        <div className="w-full md:w-1/2 flex flex-col px-10 gap-4 mt-10 md:mt-0">
          <h2 className="text-xl font-semibold text-center text-gray-600">
            Atau dengan langsung datang ke lokasi
          </h2>
          <div className="w-full h-80 md:h-full shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3682306772102!2d108.35364667375671!3d-7.312465192695457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5f8e1e8fb879%3A0xd082cf8702fe995c!2sSunny%20Side%20Coffee!5e0!3m2!1sid!2sid!4v1768880873804!5m2!1sid!2sid"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
