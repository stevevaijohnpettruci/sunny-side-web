import { Instagram } from "./SocialMediaIcon";
import { MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-[#3C57DB] py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* LOGO + DESCRIPTION */}
          <div>
            <a href="#hero" className="inline-block">
              <img className="w-40" src="/Logo (2).png" alt="Company Logo" />
            </a>

            <p className="mt-4 leading-relaxed text-[#3C57DB]/80">
              Ngopi di Sunny Side dan nikmati sensasinya.
            </p>
          </div>

          {/* NAVIGASI */}
          <div>
            <h4 className="text-[#3C57DB] font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { label: "Menu", href: "daftar-menu" },
                { label: "Cerita Sunny", href: "cerita-sunny" },
                { label: "Reservasi", href: "https://wa.me/6285861196708" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-[#3C57DB]/70 hover:text-[#3C57DB] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HUBUNGI KAMI */}
          <div>
            <h4 className="text-[#3C57DB] font-semibold mb-4">Kontak Kami</h4>

            <ul className="space-y-4 text-[#3C57DB]/80">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#3C57DB]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#3C57DB]" />
                </div>

                <a
                  href="https://www.google.com/maps/dir//M9Q4%2B2F9+Sunny+Side+Coffee,+samping+fakultas+ekonomi+universitas+galuh,+Jl.+Arya+Janggala,+Mekarjaya,+Kec.+Baregbeg,+Kabupaten+Ciamis,+Jawa+Barat+46274/@-7.1134905,107.3451959,9z/data=!4m12!1m2!2m1!1ssunnyside+coffee!4m8!1m0!1m5!1m1!1s0x2e6f5f8e1e8fb879:0xd082cf8702fe995c!2m2!1d108.3562216!2d-7.3124652!3e9?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:underline underline-offset-4 text-[#3C57DB]/80 hover:text-[#3C57DB]"
                >
                  Samping Fakultas Ekonomi Universitas Galuh, Jl. Arya Janggala,
                  Mekarjaya, Baregbeg, Kabupaten Ciamis, Jawa Barat 46274
                </a>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#3C57DB]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#3C57DB]" />
                </div>

                <a
                  href="https://wa.me/6285861196708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  (+62) 858-6119-6708
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="text-[#3C57DB] font-semibold mb-4">
              Ikuti Kami di Instagram
            </h4>

            <a
              href="https://www.instagram.com/sunnyside.kopi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center group"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full
      bg-[#3C57DB]/20 group-hover:bg-[#3C57DB] transition-colors"
              >
                <Instagram
                  size={20}
                  className="text-[#3C57DB] group-hover:text-white transition"
                />
              </div>

              <span className="text-[#3C57DB]/80 group-hover:text-[#3C57DB] transition">
                @sunnyside.kopi
              </span>
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 border-t border-[#3C57DB]/30 text-center text-[#3C57DB]/80">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-semibold">Sunny Side Kopi</span>. Hak Cipta.
          </p>
        </div>
      </div>
    </footer>
  );
};
