import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container min-h-[calc(100vh-64px)] py-4 grid place-items-center">
        <main className="w-full max-w-sm">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AuthLayout
