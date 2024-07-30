import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";

export const TopMenu = (props: any) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <div style={{ flex: 1 }}></div>
       
          <Button variant="contained" color="success">
              הזמנת פריטים
            </Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};
