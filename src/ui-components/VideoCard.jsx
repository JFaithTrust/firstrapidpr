import { Card, CardContent, CardMedia, Typography, Stack, Avatar } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import moment from "moment"
import { colors } from '../constants/colors'
import { Link } from "react-router-dom"

const VideoCard = ({video}) => {
  return (
    <Card sx={{ width: {xs: '100%', sm: '300px'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={`/videodetail/${video.id.videoId}`}>
            <CardMedia
                image={video?.snippet?.thumbnails?.medium?.url}
                alt={video?.snippet?.thumbnails?.title}
                sx={{ width: {xs: '100%', sm: '360px'}, height: '180px'}}
            />                          
        </Link>
        <CardContent sx={{ background: colors.primary, height: '200px', position: 'relative'}}>
            <Link to={`/videodetail/${video.id.videoId}`}>
                <Typography my={'5px'} sx={{ opacity: '.4' }}>
                    {moment(video?.snippet?.publishedAt).fromNow()}
                </Typography>
                <Typography variant={'subtitle1'} fontWeight={'bold'}>
                    {video?.snippet?.title.slice(0, 50)}
                </Typography>
                <Typography variant={'subtitle2'} sx={{ opacity: '.6' }}>
                    {video?.snippet?.description.slice(0, 70)}
                </Typography>
            </Link>
            <>
                <Stack 
                    direction={'row'}
                    position={'absolute'}
                    alignItems={'center'}
                    gap={'5px'}
                    bottom={'8px'}
                >
                    <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                    <Typography variant={'subtitle2'} color={'gray'} alignItems={'center'}>
                        {video?.snippet?.channelTitle}
                        <CheckCircleIcon sx={{fontSize: '12px', color: 'gray', ml: '5px'}} />
                    </Typography>
                </Stack>
            </>
        </CardContent>
    </Card>
  )
}

export default VideoCard