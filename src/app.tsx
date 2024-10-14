import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
          <Helmet title="%s | Pizza.Shop" />
          <Toaster richColors duration={2000} />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  )
}
