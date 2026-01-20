export default function MenuCard({ name, price }) {
  return (
    <div className="flex flex-col items-center gap-4">
      
      {/* IMAGE / PLACEHOLDER */}
      <div className="w-64 h-64 rounded-3xl bg-gray-300" />

      {/* TEXT */}
      <h3 className="text-lg font-semibold text-[#3C57DB]">
        {name}
      </h3>
      <p className="text-base text-gray-700">
        Rp. {price.toLocaleString("id-ID")}
      </p>

    </div>
  );
}
