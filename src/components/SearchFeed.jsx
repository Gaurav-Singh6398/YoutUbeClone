import React,{useState,useEffect} from "react";
import { Box, Stack, Typography } from "@mui/material";
import {  Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {useParams} from 'react-router-dom'

function SearchFeed() { 
  
  const[videos,setvideos]=useState([])
  const{searchTerm}=useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setvideos(data.items));
  }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bolder" mb={2}sx={{
          color:'white'}}>
          Seacrh Reasults For:<span style={{color:'#FC1503'}}>{searchTerm}Videos</span>
        </Typography>
        
        <Video videos={videos}/>
      </Box>
  );
}

export default SearchFeed
