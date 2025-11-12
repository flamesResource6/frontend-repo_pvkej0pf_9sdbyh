const contacts = [
  { name: 'Puskesmas Bogor Utara', phone: '0251-123456', address: 'Jl. Sehat No. 1' },
  { name: 'Klinik Sehat Selalu', phone: '0251-654321', address: 'Jl. Harmoni No. 2' },
]

export default function NarahubungFKTP() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800">Narahubung FKTP</h2>
      <p className="text-gray-600 mt-1">Daftar kontak penting FKTP yang dapat dihubungi.</p>

      <div className="mt-4 divide-y divide-teal-100 rounded-xl border border-teal-100 bg-white">
        {contacts.map((c, i) => (
          <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="font-medium text-gray-800">{c.name}</p>
              <p className="text-sm text-gray-600">{c.address}</p>
            </div>
            <a href={`tel:${c.phone}`} className="text-teal-700 text-sm font-medium hover:underline">{c.phone}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
