import React from "react";

const SignUp = ()=>{
    return(
        <main class="form-signin">
            <form action="/signup" method="POST">
                <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="John Doe" name="name" required />
                <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" er />
                <label for="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </main>
    )
}

export default SignUp