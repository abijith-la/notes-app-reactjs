import React from "react"

export default function Header() {
    function toggleSidebar() {
        var content = document.getElementById("options-sidebar");
        var gear = document.getElementById("gear")
        if (content.style.width == "30vmin") {
            gear.classList.toggle("collapsible-active");
            content.style.left = "-30vmin";
            content.style.width = "0vmin";
            content.style.top = "0vmin";
            content.style.bottom = "50vmin";
        } else {
            gear.classList.toggle("collapsible-active");
            content.style.left = "1vmin";
            content.style.width = "30vmin";
            content.style.top = "8vmin";
            content.style.bottom = "1vmin";
        }
    }

    function toggleEditor() {
        var el = document.querySelector(".editor");
        el.classList.toggle("editor-toggle");
        editorVal();
    }

    function titleSeq() {
        var el = document.querySelector(".title-seq");
        document.addEventListener("click", function () {
            el.classList.add("title-seq-end");
            el.addEventListener("animationend", function () {
                el.remove();
            })
        })
    }

    return (
        <div className="topbar">
            <button type="button" id="gear" onClick={toggleSidebar} className="collapsible">
                <i className="fa-solid fa-gear" />
            </button>
            <div>
                <h1 className="topbar-title">
                    SuperMemo
                </h1>
            </div>
            &nbsp; &nbsp;
            <button type="button" onClick={toggleEditor} className="editnote">
                <i className="fa-solid fa-edit" />
            </button>
            &nbsp;&nbsp;&nbsp;
            <input className="searchbar" />
            <button type="button" onClick={titleSeq} className="search">
                <i className="fa-solid fa-search" />
            </button>
        </div>
    )
}