import type { AppProps } from "next/app";
import { store } from '@/redux/configureStore'
import { Provider } from 'react-redux'
import CheckRequiredResource from "../components/CheckRequiredResource";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CheckRequiredResource>
        <Component {...pageProps} />
      </CheckRequiredResource>
    </Provider>
  );
}
