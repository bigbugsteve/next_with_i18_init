import { useReducer } from 'react';
import { AuthContext } from './auth.context';
import cookie from 'react-cookies';

const isBrowser = typeof window !== 'undefined';

const INITIAL_STATE = {
    isAuthenticated: isBrowser && !!cookie.load('token')
};

function reducer(state: any, action: any) {

    switch(action.type) {
        case'SIGNIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
            };
        case 'SIGNED_OUT':
            return {
                ...state,
                isAuthenticated: false,
            };
        default: 
            return state;
    };
}

export const AuthProvider: React.FunctionComponent = ({children}) => {

    const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
    
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}