import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    styled,
} from "@mui/material";

import { INote } from "../interfaces/interFace";

interface INoteProps {
    note: INote;
    deleteNoteHandle: (id: number) => void;
}

const Note: React.FC<INoteProps> = ({ note, deleteNoteHandle }) => {
    return (
        <SCard style={{ background: note.color }}>
            <CardContent>
                <Wrapper>
                    <Typography>{note.title}</Typography>

                    <Typography>{note.details}</Typography>

                    <Typography>{note.date}</Typography>

                    <Button
                        variant="outlined"
                        onClick={() => deleteNoteHandle(note.id)}
                    >
                        Delete
                    </Button>
                </Wrapper>
            </CardContent>
        </SCard>
    );
};

const SCard = styled(Card)`
    width: 400px;
    margin: 20px;
`;

const Wrapper = styled(Box)`
    & > button {
        border: none;
        background: #fff;
        margin-top: 5px;
    }
`;

export default Note;
