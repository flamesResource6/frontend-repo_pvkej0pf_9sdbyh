import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Crosshair, ChevronDown, Menu, X, Calendar, ClipboardCheck, MapPin, BookOpen, Phone, FileText } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function useDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClick(e) {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return { open, setOpen, ref }
}

const fiturLinks = [
  { to: '/jadwal-dokter', label: 'Jadwal Dokter', Icon: Calendar },
  { to: '/ceklis-rujukan', label: 'Ceklis Persyaratan Rujukan', Icon: ClipboardCheck },
  { to: '/peta-faskes', label: 'Peta Fasilitas Kesehatan', Icon: MapPin },
  { to: '/edukasi', label: 'Edukasi Kesehatan', Icon: BookOpen },
  { to: '/narahubung-fktp', label: 'Narahubung FKTP', Icon: Phone },
  { to: '/panduan-rujukan', label: 'Panduan Rujukan', Icon: FileText },
]

export default function Layout() {
  const { pathname } = useLocation()
  const { open, setOpen, ref } = useDropdown() // desktop dropdown

  // mobile menu states
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileFiturOpen, setMobileFiturOpen] = useState(true)

  useEffect(() => {
    // close menus on route change
    setOpen(false)
    setMobileOpen(false)
  }, [pathname])

  const isActive = (to) => pathname === to

  const linkBase = 'flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-sm transition-colors'
  const mobileLink = 'flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg text-base transition-colors'

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      <header className="relative isolate">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="h-56 bg-teal-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 sm:pt-12">
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

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-teal-200 text-teal-700 transition-colors hover:bg-teal-50"
              aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Desktop nav with dropdown */}
            <nav className="hidden md:flex items-center gap-3 text-sm">
              <NavLink
                to="/"
                className={({ isActive }) => `px-3 py-2 rounded-lg transition-colors ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'}`}
              >
                Beranda
              </NavLink>

              <div className="relative" ref={ref}>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-transparent transition-all duration-200 ${open ? 'bg-white text-teal-700 shadow-sm' : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'}`}
                >
                  Fitur
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </button>

                {open && (
                  <div
                    role="menu"
                    aria-label="Menu fitur"
                    className="absolute right-0 mt-2 w-64 rounded-xl border border-teal-100 bg-white/95 shadow-lg backdrop-blur-sm p-2 origin-top-right animate-[dropdown_160ms_ease-out]"
                    style={{
                      animationName: 'dropdown',
                    }}
                  >
                    <style>{`@keyframes dropdown{0%{opacity:0;transform:translateY(-6px) scale(0.98)}100%{opacity:1;transform:translateY(0) scale(1)}}`}</style>
                    {fiturLinks.map(({ to, label, Icon }) => (
                      <NavLink
                        key={to}
                        to={to}
                        onClick={() => setOpen(false)}
                        className={`${linkBase} ${isActive(to) ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'}`}
                        role="menuitem"
                      >
                        <Icon className="h-4 w-4 text-teal-500" />
                        <span>{label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Mobile slide-down menu */}
          <div
            className={`md:hidden transition-[max-height,opacity,transform] duration-300 ease-out ${mobileOpen ? 'max-h-[520px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1'} overflow-hidden`}
            aria-hidden={!mobileOpen}
          >
            <div className="mt-4 rounded-2xl border border-teal-100 bg-white/80 shadow-lg backdrop-blur p-2">
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `${mobileLink} ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'}`}
              >
                {/* Home visual using crosshair mark */}
                <Crosshair className="h-5 w-5 text-teal-500" />
                Beranda
              </NavLink>

              <button
                type="button"
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                onClick={() => setMobileFiturOpen((v) => !v)}
                aria-expanded={mobileFiturOpen}
                aria-controls="mobile-fitur-panel"
              >
                <span className="inline-flex items-center gap-2"><ChevronDown className={`h-5 w-5 transition-transform ${mobileFiturOpen ? 'rotate-180' : ''}`} />Fitur</span>
              </button>

              <div
                id="mobile-fitur-panel"
                className={`grid transition-all duration-300 ease-out ${mobileFiturOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden mt-1 space-y-1 pl-2">
                  {fiturLinks.map(({ to, label, Icon }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) => `${mobileLink} ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'}`}
                    >
                      <Icon className="h-5 w-5 text-teal-500" />
                      <span>{label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
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
