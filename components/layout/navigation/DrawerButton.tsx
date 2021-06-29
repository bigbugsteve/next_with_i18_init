import React from 'react';

const drawerToggleButton = props => (
    <button className="drawertoggle__button" onClick={props.onClick}> 
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
    </button>
);

export default drawerToggleButton;