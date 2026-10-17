import { Suspense, lazy, useEffect } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,
} from 'react-router-dom'
import { TopNav } from './components/TopNav'

// Halaman di-`lazy` (code-split) supaya bundel AWAL kecil: data 50 bab +
// partikel = ±91% ukuran sumber, jadi tidak ikut terunduh sebelum dibuka.
const HomePage = lazy(() => import('./pages/HomePage'))
const BabDetailPage = lazy(() => import('./pages/BabDetailPage'))
const SusunCampuranPage = lazy(() => import('./pages/SusunCampuranPage'))
const PartikelPage = lazy(() => import('./pages/PartikelPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function MemuatHalaman() {
  return (
    <div className="app mx-auto p-4 md:p-8 lg:p-10 xl:px-12">
      <div className="book">
        <p className="text-ink-soft" role="status">
          Memuat…
        </p>
      </div>
    </div>
  )
}

function RootLayout() {
  return (
    <>
      <TopNav />
      <ScrollTop />
      <Suspense fallback={<MemuatHalaman />}>
        <Outlet />
      </Suspense>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: '/',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'bab/:no', element: <BabDetailPage /> },
      { path: 'latihan/susun', element: <SusunCampuranPage /> },
      { path: 'partikel', element: <PartikelPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
