import { Box } from "@mui/material";

import "./App.css";

import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
    return (
        <>
            <Header />

            <Box style={{ padding: 20 }}>
                <CreateNotes />
                <Notes />
            </Box>
        </>
    );
}

export default App;
