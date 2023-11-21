import React from 'react';
import { logoStyle } from '../helper';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand" style={logoStyle}>CELEBRITIES</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar