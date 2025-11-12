const tips = [
  { title: 'Cuci Tangan yang Benar', desc: 'Gunakan sabun dan air mengalir selama minimal 20 detik.' },
  { title: 'Aktif Bergerak', desc: 'Luangkan 30 menit setiap hari untuk aktivitas fisik.' },
  { title: 'Istirahat Cukup', desc: 'Tidur 7-8 jam per malam untuk pemulihan tubuh.' },
]

export default function Edukasi() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800">Edukasi Kesehatan</h2>
      <p className="text-gray-600 mt-1">Beberapa tips singkat untuk gaya hidup sehat.</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((t, i) => (
          <div key={i} className="rounded-xl border border-teal-100 bg-white p-4">
            <h3 className="font-semibold text-gray-800">{t.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
