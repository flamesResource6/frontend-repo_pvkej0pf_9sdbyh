import { useState } from 'react'

const items = [
  'Surat rujukan dari FKTP',
  'Kartu identitas (KTP/KK)',
  'Kartu BPJS/KIS (jika ada)',
  'Hasil pemeriksaan penunjang (jika diminta)',
]

export default function CeklisRujukan() {
  const [checked, setChecked] = useState(() => new Set())

  function toggle(idx) {
    const next = new Set(checked)
    next.has(idx) ? next.delete(idx) : next.add(idx)
    setChecked(next)
  }

  const progress = Math.round((checked.size / items.length) * 100)

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800">Ceklis Persyaratan Rujukan</h2>
      <p className="text-gray-600 mt-1">Tandai kelengkapan berkas rujukan Anda.</p>

      <div className="mt-4 rounded-xl border border-teal-100 bg-white p-4">
        <div className="mb-3 h-2 w-full rounded-full bg-teal-100">
          <div className="h-2 rounded-full bg-teal-500" style={{ width: `${progress}%` }} />
        </div>
        <ul className="space-y-3">
          {items.map((label, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <input
                id={`item-${idx}`}
                type="checkbox"
                checked={checked.has(idx)}
                onChange={() => toggle(idx)}
                className="h-4 w-4 rounded border-teal-300 text-teal-600 focus:ring-teal-400"
              />
              <label htmlFor={`item-${idx}`} className="text-sm text-gray-700">
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
