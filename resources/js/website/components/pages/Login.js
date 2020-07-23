import React from 'react';
import Sidebar from '../partials/Sidebar';
import {Link} from "react-router-dom";

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div id="content-wrap">
                <div className="row">
                    <div id="main" className="eight columns">

                        <h2>Login</h2>

                        <form name="contactForm" method="post" action="">
                            <fieldset>
                                <div className="group">
                                    <label>Email</label>
                                    <input name="email" type="text" value="" placeholder="Email" />
                                </div>
                                <div className="group">
                                    <label>Password</label>
                                    <input name="password" type="password" value="" placeholder="Password" />
                                </div>

                                <button type="submit" className="submit">Login</button>
                                &nbsp;<Link to="/register">Create account</Link>
                            </fieldset>
                        </form>

                    </div>

                    <Sidebar/>

                </div>
            </div>
        )
    }
}

export default Login;
