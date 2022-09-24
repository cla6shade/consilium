import React from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import "../css/Navbar.css"

class Navbar extends React.Component {
    render() {
        return <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div className="title-container">
                        <p>Consilium</p>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    }
}

export default Navbar