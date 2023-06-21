import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import "./App.css";

import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import Notes from "./components/Notes";

import { INote } from "./interfaces/interFace";

function App() {
    const [notes, setNotes] = useState<INote[]>([]);

    useEffect(() => {
        setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }, []);

    const addHandle = (note: INote) => {
        setNotes([...notes, note]);

        sessionStorage.setItem("notes", JSON.stringify([...notes, note]));
    };

    const deleteNoteHandle = (id: number) => {
        const updatedNotes = notes.filter((note) => note.id !== id);

        setNotes(updatedNotes);

        sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    return (
        <>
            <Header />

            <Box style={{ padding: 20 }}>
                <CreateNotes addHandle={addHandle} />
                <Notes notes={notes} deleteNoteHandle={deleteNoteHandle} />
            </Box>
        </>
    );
}

export default App;
