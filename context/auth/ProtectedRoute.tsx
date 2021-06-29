import { useRouter } from 'next/dist/client/router'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from './auth.context'
import LoadingScreen from '../../components/ui/Loader'

function ProtectedRoute({ children }) {

    const router = useRouter()

    const {
        authState: { isAuthenticated }
    } = useContext<any>(AuthContext)
    
    useEffect(()=>{
        // Home page is not protected
        if(window && window.location && window.location.pathname === '/' || window.location.pathname === '/login' ) {
            return
        }
        // If not logged in, redirect to homepage
        if (!isAuthenticated) router.replace('/')
    }, [isAuthenticated])

    // if(!isAuthenticated && window.location.pathname !== '/') {
    //     return <LoadingScreen />
    // }
    return children
}

export default ProtectedRoute
