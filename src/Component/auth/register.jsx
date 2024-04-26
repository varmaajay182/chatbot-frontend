import React from 'react'
import { Link } from 'react-router-dom'

function register() {
    return (
        <div className='oterAuthform'>
            <div class="wrapper">
                <div class="title">
                    Register Form
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div class="field">
                        <input type="text" name='name' required />
                        <label>Name</label>
                    </div>
                    <div class="field">
                        <input type="text" name='email' required />
                        <label>Email Address</label>
                    </div>
                    <div class="field">
                        <input type="text" required />
                        <label>Email Address</label>
                    </div>
                    <div class="field">
                        <input type="password" name='passowrd' required />
                        <label>Password</label>
                    </div>
                    <div class="field">
                        <input type="submit" value="Register" />
                    </div>
                    <div class="signup-link">
                        Not a member? <Link to="/">Login now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default register
