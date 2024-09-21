import axios from 'axios'
import { redirect } from 'react-router-dom'

export const useAxios = () => {
  // Create a singleton instance
  let instance = null

  // Initialize the instance if it doesn't exist
  if (!instance) {
    instance = axios.create({
      withCredentials: true,
      baseURL: process.env.BASE_API_URL,
    })

    // Response interceptor
    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error

        if (response) {
          const { status } = response

          if (status === 401) {
            redirect('/')
          }

          if (status === 403) {
            redirect('/unauthorized')
          }

          if (status === 500) {
            redirect('/internal-server-error')
          }
        }

        return Promise.reject(error)
      }
    )
  }

  return instance
}
