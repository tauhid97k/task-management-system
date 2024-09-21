import { LoaderCircle } from 'lucide-react'

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-84px)] grid place-items-center">
      <LoaderCircle className="size-12 animate-spin" />
    </div>
  )
}

export default Loading
