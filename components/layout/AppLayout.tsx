import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Footer from '../footer/Footer';

import Navigation from '../ui/Navigation'
import SideDrawer from './navigation/SideDrawer';

const AppLayout = (props) => {

    const { t } = useTranslation('common')

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const handleSideDrawer = () => {
        setSideDrawerOpen(!sideDrawerOpen)
    }

    const menuItems = [
        {
            name: t('navigation.home'),
            url: '/'
        },
        {
            name: t('navigation.about'),
            url: '/claims'
        },
        {
            name: t('navigation.new_claim'),
            url: '/claims/add'
        }
    ]

    return (
        <div className="layout__mainwrapper">
            <Navigation handleSideDrawer={handleSideDrawer} menuItems={menuItems} />
            <SideDrawer isOpen={sideDrawerOpen} close={handleSideDrawer} />
            {props.children}
            <Footer />
        </div>
    )
}

export default AppLayout
