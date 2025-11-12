import { useMemo } from 'react'
import FeatureCard from '../components/FeatureCard'
import { Calendar, CheckSquare, MapPin, GraduationCap, Phone, BookOpen } from 'lucide-react'

export default function Home() {
  const features = useMemo(
    () => [
      { title: 'Jadwal Dokter', icon: Calendar, accent: 'teal', description: 'Lihat jadwal praktik dokter.', to: '/jadwal-dokter' },
      { title: 'Ceklis Persyaratan Rujukan', icon: CheckSquare, accent: 'blue', description: 'Pastikan berkas rujukan lengkap.', to: '/ceklis-rujukan' },
      { title: 'Peta Fasilitas Kesehatan', icon: MapPin, accent: 'teal', description: 'Temukan lokasi faskes rujukan.', to: '/peta-faskes' },
      { title: 'Edukasi Kesehatan', icon: GraduationCap, accent: 'blue', description: 'Artikel singkat untuk hidup sehat.', to: '/edukasi' },
      { title: 'Narahubung FKTP', icon: Phone, accent: 'teal', description: 'Kontak penting FKTP Anda.', to: '/narahubung-fktp' },
      { title: 'Panduan Rujukan', icon: BookOpen, accent: 'blue', description: 'Langkah rujukan yang jelas.', to: '/panduan-rujukan' },
    ],
    []
  )

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </div>
    </section>
  )
}
