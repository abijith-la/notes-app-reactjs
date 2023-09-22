import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { addDoc, onSnapshot, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"

export default function App() {
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    const [tempNoteText, setTempNoteText] = React.useState("")
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    React.useEffect(() => {
        const gutter = document.querySelector('.gutter')
        if (!darkMode && gutter ) {
            gutter.style.backgroundColor = "#111"
        }
        else if (gutter) {
            gutter.style.backgroundColor = "#eee"
        }
    }, [darkMode])

    const currentNote =
        notes.find(note => note.id === currentNoteId)
        || notes[0]

    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
            const notesArray = snapshot.docs.map(doc => (
                {
                    ...doc.data(),
                    id: doc.id
                }
            )
            )
            setNotes(notesArray.sort(
                (a, b) => b.updatedAt - a.updatedAt
            ))
        })
        return unsubscribe
        // to call when component gets unmounted. firebase returns a clean up function for onSnapshot
    }, [])

    React.useEffect(() => {
        if (!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    React.useEffect(() => {
        if (currentNote) {
            setTempNoteText(currentNote.body)
        }
    }, [currentNote])

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (tempNoteText !== currentNote.body) {
                updateNote(tempNoteText)
            }
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [tempNoteText])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }

    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(docRef, {body: text, updatedAt: Date.now()}, {merge: true})
    }

    async function deleteNote(noteId) {
         const docRef = doc(db, "notes", noteId)
         await deleteDoc(docRef)
         setCurrentNoteId(notes[0]?.id)
    }

    return (
        <main className={darkMode?"":"dark"}>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                            toggleDarkMode={toggleDarkMode}
                            darkMode={darkMode}
                        />
                        {
                            <Editor
                                tempNoteText={tempNoteText}
                                setTempNoteText={setTempNoteText}
                                darkMode={darkMode}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}
