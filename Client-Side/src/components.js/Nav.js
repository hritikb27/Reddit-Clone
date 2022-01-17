import React from "react"
import { Link } from "react-router-dom"

const Nav = ()=>{
    return(
        <nav className='nav'>
            <Link to='/'>
                <h2>reddit</h2>
            </Link>
            <input type='text' placeholder='Search Reddit'></input>
            <div className='right-nav'>
                <div className='login-btn'>
                    <Link to='/login'>
                        <li id='log-in'>Log In</li>
                    </Link>

                    <Link to='/sign-up'>
                    <li id='sign-up'>Sign Up</li>
                    </Link>
                </div>
                <h2>Drop</h2>
            </div>
        </nav>
    )
}

export default Nav