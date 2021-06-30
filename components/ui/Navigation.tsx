import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from 'reactstrap'
import { AuthContext } from '../../context/auth/auth.context'
import cookie from "react-cookies";

import DrawerToggleButton from '../layout/navigation/DrawerButton'
import { useRouter } from 'next/router'

const Navigation = ({handleSideDrawer, menuItems}) => {

    const { t } = useTranslation('common')

    const {
        authState: { isAuthenticated }
    } = useContext<any>(AuthContext)
    

    const items = menuItems.map((item, index) => {
        return (
            <li className="toolbar__list-group-item text-lg mx-3" key={index}>
                <Link href={item.url}>
                    <a>
                        {item.name}
                    </a>
                </Link>
            </li>
        )
    })

    const { authDispatch } = useContext<any>(AuthContext);
    const router = useRouter();
    // Functions
    const logOut = () => {
        localStorage.clear();
        cookie.remove("token", { path: "/" });
        cookie.remove("data", { path: "/" });
        authDispatch({ type: "SIGNED_OUT" });
        router.replace("/");
    };

    return (
        <div className="navigation__container">
                <header className="toolbar">
                    <div className="toolbar__container w-100">
                        <div className="toolbar__navigation">
                            <ul className="toolbar__list-group toolbar__section p-0 m-0">
                                <li className="toolbar__list-group-item toolbar__logo d-flex justify-content-start">
                                    <Link href="/dashboard">
                                        <a>
                                            <img className="poland_service__logo mr-3" src="/ps_logo_black.png" />
                                        </a>
                                    </Link>
                                </li>
                                <li className="toolbar__list-group-item text-lg mx-3">
                                    <Link href="/claims/add">
                                        <a>{t("navigation.home")}</a>
                                    </Link>
                                </li>
                                <li className="toolbar__list-group-item text-lg mx-3">
                                    <Link href="/claims/add">
                                        <a>{t("navigation.about")}</a>
                                    </Link>
                                </li>
                                {isAuthenticated &&
                                <>
                                <li className="toolbar__list-group-item text-lg mx-3">
                                    <Link href="/claims/add">
                                        <a>{t("navigation.new_claim")}</a>
                                    </Link>
                                </li>
                                <li className="toolbar__list-group-item text-lg mx-3">
                                    <Link href="/claims">
                                        <a>{t("navigation.claim_history")}</a>
                                    </Link>
                                </li>
                                </>
                                }
                                {/* {items} */}
                                <li className="toolbar__hamburger">
                                    <FontAwesomeIcon icon={faBars} size="3x" onClick={handleSideDrawer} />
                                    {/* <DrawerToggleButton
                                        onClick={handleSideDrawer}
                                    /> */}
                                </li>
                            </ul>
                            <ul className="toolbar__list-group auth_toolbar__section p-0 m-0">
                                {isAuthenticated ?
                                <li className="toolbar__list-group-item text-lg mx-3" onClick={() => logOut()}>
                                    {/* <Link href="/profile"> */}
                                        <a>{t("navigation.logout")}</a>
                                    {/* </Link> */}
                                </li>
                                :
                                <li className="toolbar__list-group-item text-lg mx-3">
                                    <Link href="/login">
                                        <a>{t("login.login")}</a>
                                    </Link>
                                </li>
                                }
                                {isAuthenticated &&
                                <li className="toolbar__list-group-item text-lg mx-3">
                                    <Link href="/profile">
                                        <a>{t("navigation.profile")}</a>
                                    </Link>
                                </li>
                                }

                            </ul>
                        </div>
                    </div>
                </header>
        </div>
    )
}

export default Navigation
