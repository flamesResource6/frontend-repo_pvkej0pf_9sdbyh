export default function PetaFaskes() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800">Peta Fasilitas Kesehatan</h2>
      <p className="text-gray-600 mt-1">Contoh peta statis Kota Bogor. Untuk versi interaktif, kita bisa integrasikan peta nanti.</p>

      <div className="mt-4 overflow-hidden rounded-xl border border-teal-100 bg-white">
        <div className="aspect-video w-full bg-gradient-to-br from-teal-50 to-blue-50 grid place-items-center text-teal-700">
          <div className="text-center">
            <div className="text-6xl">🗺️</div>
            <p className="mt-2 text-sm">Peta placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
