import { useState } from "react";

import { Box } from "@mui/material";

import "./App.css";

import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import Notes from "./components/Notes";

import { INote } from "./interfaces/interFace";

function App() {
    const [notes, setNotes] = useState<INote[]>([]);

    const addHandle = (note: INote) => {
        setNotes([...notes, note]);
    };

    return (
        <>
            <Header />

            <Box style={{ padding: 20 }}>
                <CreateNotes addHandle={addHandle} />
                <Notes />
            </Box>
        </>
    );
}

export default App;
