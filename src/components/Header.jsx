import React from "react"

export default function Header() {
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
            <button type="button" className="collapsible">
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