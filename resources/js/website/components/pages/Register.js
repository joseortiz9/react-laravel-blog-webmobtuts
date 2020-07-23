import React from 'react';
import Sidebar from '../partials/Sidebar';
import {Link} from "react-router-dom";

class Register extends React.Component
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

                        <h2>Create account</h2>

                        <form name="contactForm" method="post" action="">
                            <fieldset>
                                <div className="group">
                                    <label>Username</label>
                                    <input name="name" type="text" value="" placeholder="Name" />
                                </div>
                                <div className="group">
                                    <label>Email</label>
                                    <input name="email" type="text" value="" placeholder="Email" />
                                </div>
                                <div className="group">
                                    <label>Password</label>
                                    <input name="password" type="password" value="" placeholder="Password" />
                                </div>

                                <button type="submit" className="submit">Register</button>
                                &nbsp;<Link to="/login">Already have account</Link>
                            </fieldset>
                        </form>

                    </div>

                    <Sidebar/>

                </div>
            </div>
        )
    }
}

export default Register;
