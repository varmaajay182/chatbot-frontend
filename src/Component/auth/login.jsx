import React from 'react'
import { Link } from 'react-router-dom'
import register from './register'

function login() {
    return (
        <div className='oterAuthform'>
            <div class="wrapper">
                <div class="title">
                    Login Form
                </div>
                <form action="#">
                    <div class="field">
                        <input type="text" required />
                        <label>Email Address</label>
                    </div>
                    <div class="field">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div class="content">
                        <div class="checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <div class="pass-link">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                    <div class="field">
                        <input type="submit" value="Login" />
                    </div>
                    <div class="signup-link">
                        Not a member? <Link to="/register">Signup now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default login
