import React from "react";

export default function Sidebar() {
    var title = "Click to login"
    function showLogin() {
        var el = document.querySelector(".loginformbox");
        el.style.visibility = "visible";
        el.style.opacity = "1";
        el.style.top = "50%";
        document.querySelector(".blur").classList.toggle("bg");
    }

    return (
        <div className="wrapper">
            <div className="sidebar" id="options-sidebar">
                <div className="profile-text">Profile</div>
                <button
                    id="profile-button"
                    type="button"
                    onClick={showLogin}
                    title={title}
                    className="profilebutton"
                />
                <br />
                <div>
                    <video
                        className="videoplayer"
                        src=".\src\assets\SuperMemoRSMB.mp4"
                        loop=""
                        autoPlay=""
                        muted=""
                        height="100%"
                        width="100%"
                    />
                </div>
            </div>
        </div>

    )
}