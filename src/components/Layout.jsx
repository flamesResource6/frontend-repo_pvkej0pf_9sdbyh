import { Link, NavLink, Outlet } from 'react-router-dom'
import { Crosshair } from 'lucide-react'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      <header className="relative isolate">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="h-56 bg-teal-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 sm:pt-14">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                <div className="relative h-6 w-6">
                  <div className="absolute inset-0 m-auto h-6 w-2 bg-teal-600 rounded" />
                  <div className="absolute inset-0 m-auto h-2 w-6 bg-teal-600 rounded" />
                </div>
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
                  Selamat Datang di <span className="text-teal-700">MEDILINK</span>
                </h1>
                <p className="mt-1 text-gray-600 text-sm sm:text-base">
                  Sistem Informasi Tata Rujukan Kesehatan Kota Bogor
                </p>
                <p className="mt-0.5 text-teal-700 font-medium text-xs sm:text-sm">
                  Terhubung, Terarah, Sehat
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-3 text-sm">
              <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700'}`}>Beranda</NavLink>
              <NavLink to="/jadwal-dokter" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700'}`}>Jadwal Dokter</NavLink>
              <NavLink to="/ceklis-rujukan" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700'}`}>Ceklis Rujukan</NavLink>
              <NavLink to="/peta-faskes" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700'}`}>Peta Faskes</NavLink>
              <NavLink to="/edukasi" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700'}`}>Edukasi</NavLink>
              <NavLink to="/narahubung-fktp" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700'}`}>Narahubung</NavLink>
              <NavLink to="/panduan-rujukan" className={({isActive}) => `px-3 py-2 rounded-lg ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700'}`}>Panduan</NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <Outlet />
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
