import { InputBase, Box, Button, styled } from "@mui/material";

import { useState } from "react";

import { INote } from "../interfaces/interFace";

const defaultObject = {
    id: 0,
    title: "",
    details: "",
    color: "",
    date: new Date().toLocaleString().toString(),
};

const CreateNotes: React.FC = () => {
    const [note, setNote] = useState<INote>(defaultObject);

    const changeHandle = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        // if (error) setError("");
        // console.log(e.target.name, e.target.value);

        setNote({ ...note, [e.target.name]: e.target.value });
    };
    // console.log(note);

    const onClickHandle = () => {};

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

            <Button variant="outlined" onClick={onClickHandle()}>
                Create
            </Button>
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

export default CreateNotes;
