import { Box, Typography } from "@mui/material";

import Note from "./Note";

import { INote } from "../interfaces/interFace";

interface INoteProps {
    notes: INote[];
    deleteNoteHandle: (id: number) => void;
}

const Notes: React.FC<INoteProps> = ({ notes, deleteNoteHandle }) => {
    return (
        <Box>
            <Typography variant="h5">Notes</Typography>

            <Box>
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        deleteNoteHandle={deleteNoteHandle}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Notes;
