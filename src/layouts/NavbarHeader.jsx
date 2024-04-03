import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const NavbarHeader = () => {
    return (
        <header>
            <div className="logo">
                <img src="/ENElogo.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">
                        Home
                    </Link></li>
                    <li><Link to="/Mainpage">Evaluation</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavbarHeader