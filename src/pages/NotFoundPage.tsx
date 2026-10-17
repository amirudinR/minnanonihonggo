import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="app mx-auto p-4 md:p-8 lg:p-10 xl:px-12">
      <div className="book">
        <h1>Halaman tidak ditemukan</h1>
        <p>
          <Link to="/">← Kembali ke daftar bab</Link>
        </p>
      </div>
    </div>
  )
}
