import Header from '@/components/Header'
import { Toaster } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-112px)] grid place-items-center">
      <LoaderCircle className="size-12 stroke-1 animate-spin" />
    </div>
  )
}

const DashboardLayout = () => {
  return (
    <>
      <Header />

      <main className="container py-6">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            classNames: {
              success:
                'text-lg text-zinc-800 font-bold border border-zinc-300 bg-white',
            },
          }}
        />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default DashboardLayout
