import '../styles/globals.css'
import { AppWrapper } from '../components/contextHandler';

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default MyApp
