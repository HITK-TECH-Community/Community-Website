import React from 'react'
import './Style/Header.css'
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
function Header() {
    return (
        <div >
            <div className="topnav">
                <a className="/" href="#home">Home</a>
                <a href="/">News</a>
                <a href="/">Contact</a>
                <a href="/">About</a>
                <div className='login'>
                <a href="/">SingIn</a>
                <a href="/">SingUp</a>
                    
                </div>
            </div>

        </div>
    )
}

export default Header
