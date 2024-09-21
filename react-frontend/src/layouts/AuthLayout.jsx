import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { LoaderCircle } from 'lucide-react'

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-84px)] grid place-items-center">
      <LoaderCircle className="size-12  stroke-1 animate-spin" />
    </div>
  )
}

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
