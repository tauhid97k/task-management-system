import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container min-h-[calc(100vh-52px)] py-4 grid place-items-center">
        <main className="w-full max-w-sm">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default AuthLayout
