import React from "react";

export default function Texteditor() {
    function saveNote() {
        const el = document.getElementsByClassName("texteditor__content")
        console.log(el[0].value)
    }
    var title = ""
    var content = ""

    return (
        <div className="texteditor">
            <textarea
                className="texteditor__title"
                placeholder="Enter title here"
                rows="1"
                cols="44"
                >
                    {title}
            </textarea>
            <textarea
                className="texteditor__content"
                placeholder="Write your content here"
                rows="32"
                cols="50"
            >
                {content}
            </textarea>
            <button type="button" onClick={saveNote}>click</button>
        </div>
    )
}