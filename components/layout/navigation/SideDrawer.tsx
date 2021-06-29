import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import cookie from 'react-cookies';
import { AuthContext } from '../../../context/auth/auth.context';
import RootState from '../../../interfaces/RootState';


import Close from 'mdi-react/CloseIcon';
import Logout from 'mdi-react/LogoutIcon';
import AccountIcon from 'mdi-react/AccountIcon';

import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';
import { useRouter } from 'next/router';

interface Props {
    isOpen: boolean
    close: () => void
    userName?: string
}

const SideDrawer = ({isOpen, close, userName}: Props) => {

    const userData = useSelector((state: RootState) => state.user.userData);
    const { authDispatch } = useContext<any>(AuthContext);
    const router = useRouter();
    const { t } = useTranslation("common");

    const logOut = () => {
        localStorage.clear();
        cookie.remove('token', {path: '/'});
        cookie.remove('data', {path: '/'});
        authDispatch({ type: 'SIGNED_OUT' });
        router.replace("/");
    }
    

    const handleRoute = (url) => {
        close()
        router.push(url)
    }

    return (
        <div className={`side__drawer ${isOpen && 'open'}`}>
            {userData && 
            <div className="side__drawer_con-number">{userData.con_number}</div>
            }
            <div className="side__drawer_close">
                <Close onClick={close} />
            </div>
            <div className="side__drawer_user">
                <div className="side__drawer_user-logged-in text-base">
                    {t('navigation.logged_in')}
                </div>
                <div className="side__drawer_user-name text-xl my-2 d-flex justify-content-between">
                     {userData?.customername}
                    <div className="side__drawer_user-icon-wrapper">
                        <AccountIcon />
                    </div>
                </div>
            </div>
            <ul className="side__drawer_navigation-list">
                <li className="side__drawer_navigation-list-item text-xl" onClick={() => handleRoute('/claims/add')}>
                    
                    {t('navigation.new_claim')}
                </li>
                <li className="side__drawer_navigation-list-item text-xl" onClick={() => handleRoute('/claims')}>
                    {t('navigation.claim_history')}
                </li>
                <li className="side__drawer_navigation-list-item text-xl" onClick={() => handleRoute('/profile')}>
                    {t('navigation.profile')}
                </li>
            </ul>
            <div className="side__drawer_logout-btn-wrapper border-0">
                <div className="d-flex justify-content-between align-items-center">
                    <Button classes="text-xl" buttonName={t('navigation.logout')} onClick={()=>logOut()} />
                    <Logout onClick={()=>logOut()}/>
                </div>
            </div>
        </div>
    )
}

export default SideDrawer
