import React from "react";

export default function Loginformbox({switchForm}) {
    function loginFunc() {
        console.log("logged in")
    }

    return (
        <div className="loginformbox">
            <div>
                <h1>Login</h1>
                &nbsp;
                <form>
                    <input
                        type="text"
                        className="form-input"
                        id="lemail"
                        placeholder="Email"
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        className="form-input"
                        id="lpassword"
                        placeholder="Password"
                    />
                </form>
                &nbsp;
                <div className="switchformbutton" onClick={switchForm}>
                    <u>Create new account</u>
                </div>
            </div>
            <div>
                <button type="button" className="submit-btn" onClick={loginFunc}>
                    Submit
                </button>
            </div>
        </div>

    )
}