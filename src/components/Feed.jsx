import React,{useState,useEffect} from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// import Sidebar from "./Sidebar";
// import Video from "./Video";

function Feed() { 
  const[selectedCategory,setselectedCategory]=useState('New')
  const[videos,setvideos]=useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setvideos(data.items));
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar 
        selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        <Typography
          className="copyright"
          varient="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copy right2002
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bolder" mb={2}sx={{
          color:'white'}}>
          {selectedCategory}<span style={{color:'#FC1503'}}>Videos</span>
        </Typography>
        
        <Video videos={videos}/>
      </Box>
    </Stack>//#F31503
  );
}

export default Feed;
