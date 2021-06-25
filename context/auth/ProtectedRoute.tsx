import { useRouter } from 'next/dist/client/router'
import React, { useContext } from 'react'
import { AuthContext } from './auth.context'

function ProtectedRoute({ children }) {

    const router = useRouter()

    const {
        authState: { isAuthenticated }
    } = useContext<any>(AuthContext)
    
    return (
        <div>
            
        </div>
    )
}

export default ProtectedRoute
