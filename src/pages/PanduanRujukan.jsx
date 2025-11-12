const steps = [
  'Kunjungi FKTP untuk pemeriksaan awal',
  'Dapatkan surat rujukan bila diperlukan',
  'Pilih fasilitas rujukan sesuai kebutuhan',
  'Bawa berkas persyaratan saat kunjungan',
  'Ikuti instruksi lanjutan dari faskes rujukan',
]

export default function PanduanRujukan() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800">Panduan Rujukan</h2>
      <p className="text-gray-600 mt-1">Langkah-langkah ringkas proses rujukan.</p>

      <ol className="mt-4 space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-sm font-semibold">{i + 1}</span>
            <span className="text-sm text-gray-700">{s}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
