import { InputBase, Box, Button, styled } from "@mui/material";

const CreateNotes: React.FC = () => {
    return (
        <Container>
            <InputBase placeholder="title" />

            <Box component="span">30</Box>

            <InputBase placeholder="Details" />
            <Box component="span">30</Box>

            <InputBase
                type="color"
                defaultValue={"#f5f5f5"}
                placeholder="color"
            />

            <Button variant="outlined">Create</Button>
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
