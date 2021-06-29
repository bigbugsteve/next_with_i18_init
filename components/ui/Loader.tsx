import React from "react";
import { useTranslation } from "react-i18next";
import ClientOnlyPortal from "../portal/portal";

const LoadIndicator = (props) => {

    const { t } = useTranslation("common");
    
    return (
        <ClientOnlyPortal selector="#loader-hook">
            <div className={props.className}>
                <div className="load__icon-wrapper">
                    <img
                        className="load__icon load__icon-wb"
                        src="/loader.svg"
                        alt="Loader"
                    />
                </div>
                <div className="load__icon-wb mt-5 load__warning">
                    {t("errorhandling.please_wait")}
                </div>
            </div>
        </ClientOnlyPortal>
    );
};

export default LoadIndicator;
