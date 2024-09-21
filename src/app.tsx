import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet title="%s | Pizza Shop" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}
