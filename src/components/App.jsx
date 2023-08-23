import React from "react";
import Header from "./Header"
import Sidebar from "./Sidebar";

export default function App() {
    function closePopUp() {
        var el1 = document.querySelector(".loginformbox");
        var el2 = document.querySelector(".registerformbox");
        el1.style.visibility = "hidden";
        el1.style.opacity = "0";
        el1.style.top = "0%";
        el2.style.visibility = "hidden";
        el2.style.opacity = "0";
        el2.style.top = "0%";
        document.querySelector(".blur").classList.toggle("bg");
    }

    return (
        <div className="App">
            <div className="title-seq">Welcome to SuperMemo</div>
            <div className="blur" onClick={closePopUp}></div>
            <div className="spacer layer1 flip"></div>
            <Header />
            <Sidebar />
        </div>
    )
}