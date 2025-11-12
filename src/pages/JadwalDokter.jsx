import { useState } from 'react'

const data = [
  { poli: 'Umum', dokter: 'dr. Aulia', hari: 'Senin - Rabu', jam: '08:00 - 12:00' },
  { poli: 'Gigi', dokter: 'drg. Bima', hari: 'Kamis - Jumat', jam: '09:00 - 13:00' },
  { poli: 'Anak', dokter: 'dr. Citra Sp.A', hari: 'Selasa - Kamis', jam: '13:00 - 16:00' },
]

export default function JadwalDokter() {
  const [q, setQ] = useState('')
  const filtered = data.filter(
    (row) => row.poli.toLowerCase().includes(q.toLowerCase()) || row.dokter.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800">Jadwal Dokter</h2>
      <p className="text-gray-600 mt-1">Contoh sederhana jadwal praktik di beberapa poli.</p>

      <div className="mt-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari poli atau dokter..."
          className="w-full md:w-72 rounded-lg border border-teal-100 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 pr-4">Poli</th>
              <th className="py-2 pr-4">Dokter</th>
              <th className="py-2 pr-4">Hari</th>
              <th className="py-2 pr-4">Jam</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className="border-t border-teal-100/60">
                <td className="py-2 pr-4">{row.poli}</td>
                <td className="py-2 pr-4">{row.dokter}</td>
                <td className="py-2 pr-4">{row.hari}</td>
                <td className="py-2 pr-4">{row.jam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
