import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div

                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className={`text-snippet ${props.darkMode?"":"whitetext"}`}>{note.body.split("\n")[0]}</h4>
                <button
                    className={`delete-btn ${props.darkMode?"":"invert"}`}
                    onClick={() => props.deleteNote(note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className={`pane sidebar ${props.darkMode?"":"dark"}`}>
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className={`dark-mode-btn ${props.darkMode?"":"invert"}`} onClick={props.toggleDarkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
                    </svg>
                </button>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
