import React from "react";

export default function Registerformbox({switchForm}) {
    function registerFunc() {
        console.log("registered")
    }

    return (
        <div className="registerformbox" id="login">
            <div>
                <h1>Register</h1>
                &nbsp;
                <form>
                    <input
                        type="text"
                        className="form-input"
                        id="remail"
                        placeholder="Email"
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        className="form-input"
                        id="rusername"
                        placeholder="Username"
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        className="form-input"
                        id="rpassword"
                        placeholder="Password"
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        className="form-input"
                        id="rconfirmpassword"
                        placeholder="Confirm Password"
                    />
                </form>
                &nbsp;
                <div className="switchformbutton" onClick={switchForm}>
                    <u>Login instead</u>
                </div>
            </div>
            <div>
                <button type="button" onClick={registerFunc} className="submit-btn">
                    Submit
                </button>
            </div>
        </div>
    )
}