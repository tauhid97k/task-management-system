import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="py-3 bg-white shadow-sm">
      <nav className="container flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">
          Brand
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
