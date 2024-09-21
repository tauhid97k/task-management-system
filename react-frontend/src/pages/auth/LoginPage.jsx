import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  const onSubmit = () => {}

  return (
    <div className="card">
      <h1 className="text-2xl font-medium text-center border-b border-zinc-200 pb-4 mb-4">
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={isSubmitting} className="disabled:opacity-70">
          <div className="flex flex-col gap-y-1 mb-3">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              name="email"
              className="input"
            />
            {errors.email && (
              <span className="input-error">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-1 mb-3">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              name="password"
              className="input"
            />
            {errors.password && (
              <span className="input-error">{errors.password}</span>
            )}
          </div>
          <label className="flex items-center gap-1.5 mb-3">
            <input
              {...register('remember')}
              type="checkbox"
              name="remember"
              className="input-checkbox"
            />
            <span className="text-zinc-700 whitespace-nowrap">Remember me</span>
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </fieldset>
      </form>
      <div className="mt-3 text-center text-zinc-700">
        <span>Do not have an account? </span>
        <Link to="/register" className="hover:underline">
          Register
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
