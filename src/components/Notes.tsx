import { Box, Typography } from "@mui/material";

import Note from "./Note";
import { INote } from "../interfaces/interFace";

interface INotesProps {
    notes: INote[];
    deleteNoteHandle: (id: number) => void;
}

const Notes: React.FC<INotesProps> = ({ notes, deleteNoteHandle }) => {
    return (
        <Box>
            <Typography variant="h5">NOTES</Typography>
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
