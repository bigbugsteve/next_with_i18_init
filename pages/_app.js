import "../styles/globals.css";

import { ToastProvider } from 'react-toast-notifications'

import { I18nextProvider } from "react-i18next";    
import i18next from 'i18next'
import { config as i18nextConfig } from '../translations'
console.log("🚀 ~ file: _app.js ~ line 8 ~ i18nextConfig", i18nextConfig)

i18next.init(i18nextConfig)

function SafeHdyrate({children}) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

function MyApp({ Component, pageProps }) {

    return (
        <SafeHdyrate>
            <I18nextProvider i18n={i18next}>
                <ToastProvider autoDismiss={true}>
                    <Component {...pageProps} />
                </ToastProvider>
            </I18nextProvider>
        </SafeHdyrate>
    );
}

export default MyApp;
