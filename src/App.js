import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box style={{backgroundColor: "#000"}}>
        <Navbar />
        <Routes>
          <Route path="/" exacr element={<Feed />} />
          <Route path="/video/:id" exacr element={<VideoDetail />} />
          <Route path="/channel/:id" exacr element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exacr element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
