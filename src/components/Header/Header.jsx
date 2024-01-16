
import React, { useState, useEffect, useRef } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, List, ListItem, ListItemText } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = () => {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);
    const [places, setPlaces] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const autocompleteRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                setPlaces([]);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const generateMockData = (input) => [
        { id: 1, description: 'Place 1' },
        { id: 2, description: 'Place 2' },
        { id: 3, description: 'Place 3' },
    ];

    const handlePlaceSelect = () => {
        if (autocomplete) {
            const selectedPlace = autocomplete.getPlace();
            console.log(selectedPlace);
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        const mockData = generateMockData(value);

        const filteredSuggestions = mockData.filter((place) =>
            place.description.toLowerCase().startsWith(value.toLowerCase())
        );

        setPlaces(filteredSuggestions);
    };

    return (
        <LoadScript placeholder="PlaceHolder" libraries={["places"]}>
            <AppBar position="static" style={{ backgroundColor: '#396600' }}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.title}>
                        Help Map
                    </Typography>
                    <Box display="flex">
                        <Typography variant="h6" className={classes.title}>
                            Find more places
                        </Typography>
                        <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceSelect}>
                            <div ref={autocompleteRef} className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{ root: classes.inputRoot, input: classes.inputInput }}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                {places.length > 0 && (
                                    <List className={classes.autocompleteList}>
                                        {places.map((place) => (
                                            <ListItem button key={place.id}>
                                                <ListItemText primary={place.description} />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </div>
                        </Autocomplete>
                    </Box>
                </Toolbar>
            </AppBar>
        </LoadScript>
    );
};

export default Header;