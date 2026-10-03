import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="app">
      <div className="book">
        <h1>Halaman tidak ditemukan</h1>
        <p>
          <Link to="/">← Kembali ke daftar bab</Link>
        </p>
      </div>
    </div>
  )
}
