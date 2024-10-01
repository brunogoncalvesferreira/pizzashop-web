import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet title="%s | Pizza Shop" />
        <Toaster richColors duration={2000} />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}
