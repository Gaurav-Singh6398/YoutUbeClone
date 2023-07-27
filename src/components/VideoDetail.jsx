import React,{useState, useEffect}from 'react'
import {Link ,useParams} from  'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import{CheckCircle, VideoSettings } from '@mui/icons-material'
import{Video} from './'
import{fetchFromAPI} from '../utils/fetchFromAPI' 

const VideoDetail=()=>{
  const{ id}=useParams();

  const[videoDetail,setvideoDetail]=useState(null)
  const[videos,setVideos]=useState(null);

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>setvideoDetail(data.items[0]));
   
  },[id])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items));
   },[id])
  
  
  if(!videoDetail?.snippet||!videoDetail?.statistics)return "Loading....."

  const{snippet:{title,channelId,channelTitle},statistics: {viewCount,likeCount}}=videoDetail
  return(
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>

          <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
             {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
          <Link to={`/channel/${channelId}`}>
            <Typography variant={{sm:'subtitle!',md:'h6'}} color='#fff'>
              {channelTitle}
              <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
            </Typography>
            <Stack sx={{color:'#fff'}}>
              <Typography variant="body1" sx={{opacity:0.8}}>
                {parseInt(viewCount).toLocaleString()}views
              </Typography>
              <Typography variant="body1" sx={{opacity:0.8}}>
                {parseInt(likeCount).toLocaleString()}LIKES
              </Typography>
            </Stack>
          </Link>
          </Stack>
          </Box>
        </Box>
        <Box px={2}py={{md:1,xs:5}} justifyContent="center" alignItems="center">
        
        <Video videos={videos} direction="column"/> 

      </Box>
      </Stack>
      
    </Box>
    
  )
}

export default VideoDetail;