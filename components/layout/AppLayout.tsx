import React from 'react'

const AppLayout = (props) => {
    return (
        <div className="layout__mainwrapper">
            {props.children}
        </div>
    )
}

export default AppLayout
