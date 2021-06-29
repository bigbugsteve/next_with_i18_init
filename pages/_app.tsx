import AppLayout from '../components/layout/AppLayout'

import { useStore } from '../redux/store'
import { Provider } from 'react-redux'

import { ToastProvider } from 'react-toast-notifications'

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.scss'

import { AuthProvider } from '../context/auth/auth.provider'
import ProtectRoute from "../context/auth/ProtectedRoute";

import { I18nextProvider } from "react-i18next";    
import i18next from 'i18next'
import { config as i18nextConfig } from '../translations'

i18next.init(i18nextConfig)

function SafeHydrate({children}) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

function MyApp({ Component, pageProps }) {

    const store = useStore(pageProps.initialReduxState)
    
    return (
        <SafeHydrate>
            <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                    <ToastProvider autoDismiss={true}>
                        <AuthProvider>
                            <ProtectRoute>

                            <AppLayout>
                                <Component {...pageProps} />
                            </AppLayout>
                            </ProtectRoute>
                        </AuthProvider>
                    </ToastProvider>
                </I18nextProvider>
            </Provider>
        </SafeHydrate>
    );
}

export default MyApp;
