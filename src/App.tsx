import { useEffect } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BabDetailPage from './pages/BabDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function RootLayout() {
  return (
    <>
      <ScrollTop />
      <Outlet />
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
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
