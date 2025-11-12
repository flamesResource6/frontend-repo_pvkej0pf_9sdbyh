import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  CheckSquare,
  MapPin,
  GraduationCap,
  Phone,
  BookOpen,
  Crosshair
} from 'lucide-react'
import FeatureCard from './components/FeatureCard'
import { Link } from 'react-router-dom'

const brand = {
  primary: 'text-teal-700',
  primaryBg: 'bg-teal-600',
  soft: 'text-teal-500',
  softBg: 'bg-teal-50',
  ring: 'ring-teal-100',
}

export default function App() {
  const features = useMemo(
    () => [
      {
        title: 'Jadwal Dokter',
        icon: Calendar,
        accent: 'teal',
        description: 'Lihat jadwal praktik dokter di fasilitas kesehatan terdekat.',
        to: '/jadwal-dokter'
      },
      {
        title: 'Ceklis Persyaratan Rujukan',
        icon: CheckSquare,
        accent: 'blue',
        description: 'Panduan singkat untuk memastikan berkas rujukan Anda lengkap.',
        to: '/ceklis-rujukan'
      },
      {
        title: 'Peta Fasilitas Kesehatan',
        icon: MapPin,
        accent: 'teal',
        description: 'Telusuri lokasi rumah sakit dan klinik rujukan di Kota Bogor.',
        to: '/peta-faskes'
      },
      {
        title: 'Edukasi Kesehatan',
        icon: GraduationCap,
        accent: 'blue',
        description: 'Artikel dan infografis singkat untuk hidup sehat dan bugar.',
        to: '/edukasi'
      },
      {
        title: 'Narahubung FKTP',
        icon: Phone,
        accent: 'teal',
        description: 'Kontak penting fasilitas kesehatan tingkat pertama Anda.',
        to: '/narahubung-fktp'
      },
      {
        title: 'Panduan Rujukan',
        icon: BookOpen,
        accent: 'blue',
        description: 'Langkah-langkah rujukan yang jelas dan mudah diikuti.',
        to: '/panduan-rujukan'
      },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      <header className="relative isolate">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="h-56 bg-teal-600/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 sm:pt-14">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
              {/* Medical cross icon */}
              <div className="relative h-6 w-6">
                <div className="absolute inset-0 m-auto h-6 w-2 bg-teal-600 rounded" />
                <div className="absolute inset-0 m-auto h-2 w-6 bg-teal-600 rounded" />
              </div>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
              Selamat Datang di <span className="text-teal-700">MEDILINK</span>
            </h1>
          </div>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Sistem Informasi Tata Rujukan Kesehatan Kota Bogor
          </p>
          <p className="mt-1 text-teal-700 font-medium text-sm sm:text-base">
            Terhubung, Terarah, Sehat
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((f, idx) => (
                <FeatureCard key={idx} {...f} />
              ))}
            </div>
          </section>
        </motion.div>
      </main>

      <footer className="pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} MEDILINK</span>
            <span className="inline-flex items-center gap-2">
              <Crosshair className="h-4 w-4 text-teal-600" />
              Fokus pada layanan rujukan yang cepat dan tepat
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
