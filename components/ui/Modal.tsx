import React from 'react'
import { useTranslation } from 'react-i18next'
import ClientOnlyPortal from '../portal/portal'

const Modal = ({children}) => {

    const { t } = useTranslation('common')

    return (
        <ClientOnlyPortal selector="#modal-root">
            <div className="modal__root">
                {children}
            </div>
        </ClientOnlyPortal>
    )
}

export default Modal
