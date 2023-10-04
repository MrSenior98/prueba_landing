import type { AppProps } from 'next/app'
import { AppProvider } from '../contexts/AppContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppProvider>
        <Component {...pageProps} />
    </AppProvider>
</ThemeProvider>
);
}
