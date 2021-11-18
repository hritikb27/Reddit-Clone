import React from "react"

function Nav(){
    return(
        <nav>
            <h2>reddit</h2>
            <input type='text' placeholder='Search Reddit'></input>
            <div className='right-nav'>
                <div className='login-btn'>
                    <button id='log-in'>Log In</button>
                    <button id='sign-up'>Sign Up</button>
                </div>
                <h2>Drop</h2>
            </div>
        </nav>
    )
}

export default Nav