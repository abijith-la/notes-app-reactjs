import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"

export default function Editor({tempNoteText, setTempNoteText, darkMode }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className={`pane editor ${darkMode?"":"invert"}`}>
            <ReactMde
                value={tempNoteText}
                onChange={(text) => setTempNoteText(text)}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
