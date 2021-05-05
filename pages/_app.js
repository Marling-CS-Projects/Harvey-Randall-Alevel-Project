import '../styles/globals.css'
import { AppWrapper } from '../components/Context/socketioContext';

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default MyApp
