import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
          <Helmet title="%s | Pizza Shop" />
          <Toaster richColors duration={2000} />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </>
  )
}
