import { AppBar, Toolbar, Typography } from "@mui/material";

import logo from "../assets/logo.svg";

const Header: React.FC = () => {
    return (
        <AppBar color="transparent" position="static">
            <Toolbar style={{ gap: 10 }}>
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: 30, marginBottom: 10 }}
                />
                <Typography>Note</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
