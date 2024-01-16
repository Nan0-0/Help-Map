
import React from 'react';
import { Box } from '@material-ui/core';


const listStyles = {
  container: {
    direction: "column",
    bg: "whiteAlpha.900",
    width: "37vw",
    height: "100vh",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    overflow: "hidden",
    px: 2,
  },
};

const List = ({ items, isLoading, renderItem }) => {


  return (
    <Box {...listStyles.container}>
      <Box flex={1} overflowY={"scroll"} mt={16} display="flex" flexDirection="column">
        {items && items.map((item, i) => renderItem(item, i))}
      </Box>
    </Box>
  );
};

export default List;
