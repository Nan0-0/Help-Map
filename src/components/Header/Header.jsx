import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { AppBar,Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className= {classes.Toolbar}>
                <Typography variant="h5" className= {classes.title}>
                    Help Map 
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className= {classes.title}>
                        See More...
                    </Typography>
                    <Autocomplete>
                        <div className= {classes.search}>
                            <div className={classes.SearchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder= "Search..." classes = {{ root: classes.inputRoot, input: classes.inputInput}}/>
                        </div>
                    </Autocomplete>

                </Box>

            </Toolbar>
        </AppBar> 
    );
}

export default Header;