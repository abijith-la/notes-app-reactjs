import React from "react";
import Header from "./Header"
import Sidebar from "./Sidebar";
import Loginformbox from "./Loginformbox";
import Registerformbox from "./Registerformbox";
import Alert from "./Alert";
import Texteditor from "./Texteditor";
import Notetile from "./NoteTile";

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

    function displayNote() {
        console.log("herllo")
    }

    function switchForm() {
        var el = document.querySelector(".loginformbox");
        var el2 = document.querySelector(".registerformbox");
        if (el.style.visibility == "visible") {
            el.style.visibility = "hidden";
            el.style.opacity = "0";
            el.style.top = "0%";
            el2.style.visibility = "visible";
            el2.style.opacity = "1";
            el2.style.top = "50%";
        }
        else {
            el2.style.visibility = "hidden";
            el2.style.opacity = "0";
            el2.style.top = "0%";
            el.style.visibility = "visible";
            el.style.opacity = "1";
            el.style.top = "50%";
        }
    }

    return (
        <div className="App">
            <div className="title-seq">Welcome to SuperMemo</div>
            <div className="blur" onClick={closePopUp}></div>
            <div className="spacer layer1 flip"></div>
            <Header />
            <Sidebar />
            <Loginformbox switchForm={switchForm}/>
            <Registerformbox switchForm={switchForm}/>
            <Alert />
            <Texteditor />
            <Notetile displayNote={displayNote}/>
        </div>
    )
}