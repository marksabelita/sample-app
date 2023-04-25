import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { useStore } from '@/redux/store'

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
    return (<Provider store={store}>
      <Component {...pageProps} />;
    </Provider>)
}

export default MyApp;
