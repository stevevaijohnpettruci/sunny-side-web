export default function MenuCard({ name, price }) {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-4">
      {/* IMAGE */}
      <div
        className="
          w-44 h-44
          sm:w-52 sm:h-52
          md:w-64 md:h-64
          rounded-2xl md:rounded-3xl
          bg-gray-300
        "
      />

      {/* TEXT */}
      <h3
        className="
          text-base sm:text-lg md:text-lg
          font-semibold text-[#3C57DB]
          text-center
        "
      >
        {name}
      </h3>

      <p
        className="
          text-sm sm:text-base md:text-base
          text-gray-700
        "
      >
        Rp. {price.toLocaleString("id-ID")}
      </p>
    </div>
  );
}
