import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  const onSubmit = () => {}

  return (
    <div className="card">
      <h1 className="text-2xl font-medium text-center border-b border-zinc-200 pb-4 mb-4">
        Register
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={isSubmitting} className="disabled:opacity-70">
          <div className="flex flex-col gap-y-1 mb-3">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              {...register('name')}
              type="text"
              name="name"
              id="name"
              className="input"
            />
            {errors.name && <span className="input-error">{errors.name}</span>}
          </div>
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
          <div className="flex flex-col gap-y-1 mb-3">
            <label htmlFor="password_confirmation" className="input-label">
              Confirm Password
            </label>
            <input
              {...register('password_confirmation')}
              type="password"
              name="password_confirmation"
              className="input"
            />
            {errors.password_confirmation && (
              <span className="input-error">
                {errors.password_confirmation}
              </span>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </fieldset>
      </form>
      <div className="mt-3 text-center text-zinc-700">
        <span>Already have an account? </span>
        <Link to="/" className="hover:underline">
          Login
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage
