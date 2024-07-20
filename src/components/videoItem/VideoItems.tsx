import { Box, Typography } from "@mui/material";
import { styles } from "./VideoItemsStyles";

interface IProps{
    eachVideoData:{
        id: string;
        title: string;
        thumbnailUrl: string;
        duration: string;
        uploadTime: string;
        views: string;
        author: string;
        videoUrl: string;
        description: string;
        subscriber: string;
        isLive: boolean;
    },
    updateVideo: (id: string) => void
}

function VideoItem(props: IProps) {
    const {eachVideoData, updateVideo} = props

    const onClickVideoItem = () =>{
        updateVideo(eachVideoData.id)
    }
    
  return (
   <>
    <Box sx={styles.listItem} onClick={onClickVideoItem}>
        <Box sx={{...styles.thumbnailContainer, backgroundImage: `url(${eachVideoData.thumbnailUrl})}`}}>
            <Box component={'span'} sx={styles.duration}>{eachVideoData.duration}</Box>
        </Box>
        <Box sx={styles.contentContainer}>
            <Typography sx={styles.title}>{eachVideoData.title}</Typography>
            <Box component={'span'} sx={styles.subContent}>{eachVideoData.author}</Box>
            <Box sx={styles.subContent}>{eachVideoData.views} Views  . {eachVideoData.uploadTime}</Box>
        </Box>
    </Box>
   </>
  )
}

export default VideoItem
