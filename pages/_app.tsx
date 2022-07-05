import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Provider } from '@Models/provider';
import { theme } from '@Tools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Provider>
          <Global
            styles={css`
              ${emotionNormalize}
            `}
          />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
