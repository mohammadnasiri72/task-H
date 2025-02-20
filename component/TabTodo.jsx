import { Box, Tab, Tabs } from "@mui/material";
import React from "react";




  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
export default function TabTodo() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="همه" {...a11yProps(0)} />
          <Tab label="انجام شده" {...a11yProps(1)} />
          <Tab label="انجام نشده" {...a11yProps(2)} />
        </Tabs>
      </Box>
     
    </>
  );
}
