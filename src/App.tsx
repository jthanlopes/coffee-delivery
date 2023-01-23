import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { router } from './router';

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />

      <GlobalStyles />
    </ThemeProvider>
  )
}