import { InputBase, Box, Button, styled, Typography } from "@mui/material";

import { useState } from "react";

import { INote } from "../interfaces/interFace";

import { v4 as uuid } from "uuid";

const defaultObject = {
    id: 0,
    title: "",
    details: "",
    color: "",
    date: new Date().toLocaleString().toString(),
};

interface ICreateNoteProps {
    addHandle: (note: INote) => void;
}

const CreateNotes: React.FC<ICreateNoteProps> = ({ addHandle }) => {
    const [note, setNote] = useState<INote>(defaultObject);

    const [error, setError] = useState<string>("");

    const changeHandle = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        if (error) setError("");
        console.log(e.target.name, e.target.value);

        setNote({ ...note, [e.target.name]: e.target.value });
    };
    console.log(note);

    const onCreateHandle = () => {
        if (!note.title && !note.details) {
            setError("Fill all Fields");
            return;
        }

        addHandle({ ...note, id: uuid() });
        setNote(defaultObject);
    };

    return (
        <Container>
            <InputBase
                placeholder="title"
                onChange={(e) => changeHandle(e)}
                name="title"
            />

            <Box component="span">30</Box>

            <InputBase
                placeholder="Details"
                onChange={(e) => changeHandle(e)}
                name="details"
            />

            <Box component="span">30</Box>

            <InputBase
                type="color"
                defaultValue={"#f5f5f5"}
                placeholder="color"
                onChange={(e) => changeHandle(e)}
                name="color"
            />

            <Button variant="outlined" onClick={() => onCreateHandle()}>
                Create
            </Button>

            {error && <Error>{error}</Error>}
        </Container>
    );
};

const Container = styled(Box)`
    & > * {
        margin: 20px 20px 20px 0;
    }

    & > div > input[type="text"] {
        border-bottom: 1px solid #000;
        opacity: 0.4;
        width: 300px;
        padding-right: 25px;
    }

    & > div > input[type="color"] {
        width: 40px;
        height: 30px;
        position: relative;
        bottom: -10px;
    }

    & > span {
        font-size: 10px;
        position: relative;
        right: 40px;
    }
`;

const Error = styled(Typography)`
    background: red;
    color: #fff;
    padding: 10px;
    width: 50%;
`;

export default CreateNotes;
