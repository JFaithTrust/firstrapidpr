import { ApiService } from '../services/api_service'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { Loader, Videos } from '../components'
import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [ suggestedVideo, setSuggestedVideo] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
        setVideoDetail(data.items[0])
        const suggestedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        setSuggestedVideo(suggestedData.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])

  // const {
  //   snippet: { title, channelId, channelTitle, description, tags, thumbnails},
  //   statistics: { viewCount, likeCount, commetCount}
  // } = videoDetail
  
  if(!videoDetail?.snippet) return <Loader />
  return (
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'} sx={{ flexDirection: {xs: 'column', md: 'row'}}}>
        <Box width={{ xs: '100%', md:'75%' }}>
          <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${id}`}
            className='react_player'
            controls
          />
          {videoDetail.snippet.tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant={'outlined'}
            />
          ))}
          <Typography variant='h5' fontWeight='bold' p={2}>
            { videoDetail.snippet.title }
          </Typography>
          <Typography variant='subtitle2' p={2} sx={{ opasity: '.7' }}>
            { videoDetail.snippet.description }
          </Typography>
          <Stack direction={'row'} gap='20px' alignItems={'center'} py={1} px={2}>
            <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
              <Visibility />
              {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
            </Stack>
            <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
              <FavoriteOutlined />
              {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
            </Stack>
            <Stack sx={{ opacity: 0.7 }} direction='row' alignItems='center' gap='3px'>
              <MarkChatRead />
              {parseInt(videoDetail.statistics.commentCount).toLocaleString()} comments
            </Stack>
          </Stack>

            <Stack direction={'row'} py={1} px={2}>
              <Stack direction={'row'} alignItems={'center'} marginTop={'5px'} gap={'5px'}>
                <Avatar
                  alt={videoDetail.snippet.channelTitle}
                  src={videoDetail.snippet.thumbnails.default.url}
                />
                <Typography variant='subtitle2' color={'gray'}>
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Stack>
            </Stack>
        </Box>
        <Box 
          width={{ xs: '100%', md:'25%' }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent= 'center'
          alignItems={'center'}
          overflow='scroll'
          maxHeight={'100vh'}
        >
          <Videos videos={suggestedVideo} />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail
