import { useState } from 'react'
import ReactPlayer from 'react-player';
import { Box, InputBase, Typography } from '@mui/material';
import { ArrowUpward, MenuOutlined, Mic, NotificationsNoneOutlined, PlayArrow, Search,} from '@mui/icons-material';
import { styles } from './VideoplayerStyles'
import VideoItem from '../videoItem/VideoItems';
import { useNavigate, useParams } from 'react-router-dom';

interface IProps{
    videosData: {
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
    }[]
}

interface IState{
    selectedVideo: {
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
    } | undefined,
    searchInput: string,
    videosData: {
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
    }[],
    menuOpened: boolean
}

function Videoplayer( props: IProps) {
    const videosData = props.videosData
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const initialVideo = videosData.find(video => video.id === id)
    const [videosList, setVideosList] = useState<IState['videosData']>(videosData)
    const [selectedVideo, setSelectedVideo] = useState<IState['selectedVideo']>(initialVideo) 
    const [searchInput, setSearchInput] = useState<IState['searchInput']>('')   

    const updateVideo = (id: string) => {
        const filteredVideo = videosList.find(video => video.id === id)
        filteredVideo && setSelectedVideo(filteredVideo)
    }

    const onClickSearchButton = () => {
        const searchedData = videosList.filter(eachVideo => eachVideo.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        setVideosList(searchedData)
    }

    const onClickMenuIcon = () => {
        
    }

  return (
    <>
        <Box sx={styles.mainContainer}>
            <Box sx={styles.headersContainer}>
                <Box sx={styles.menuLogoContainer}>
                    <MenuOutlined sx={styles.menuIcon} onClick={onClickMenuIcon}/>
                    <Box component={'img'} src={'/youtubelogo.png'} alt='logo' sx={styles.logo} onClick={() => navigate('/')}/>
                </Box>                
                <Box sx={styles.searchMicContainer}>
                    <Box sx={styles.searchContainer}>
                        <InputBase sx={styles.search} placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                        <Box sx={styles.button} component={"button"} onClick={onClickSearchButton}><Search /></Box>
                    </Box>
                    <Box sx={styles.micContainer}><Mic/></Box>
                </Box>
                <Box sx={styles.headerIconsContainer}>  
                    <ArrowUpward />
                    <NotificationsNoneOutlined />
                    <Box sx={styles.logInProfile}>N</Box>
                </Box>
            </Box>        
            
            <Box sx={styles.contentContainer}>
                <Box sx={styles.videoContainer}>            
                    <ReactPlayer
                        style={styles.video}
                        url={selectedVideo && selectedVideo.videoUrl}
                        width='100%'
                        height='35em'
                        playing={true}  
                        controls={true}
                        volume={10}
                        muted={true}
                        light={selectedVideo && selectedVideo.thumbnailUrl}
                        playIcon={<PlayArrow sx={styles.playIcon}/>}
                    />
                    <Box sx={styles.playingVideoContent}>
                        <Typography variant="h5">{selectedVideo && selectedVideo.title}</Typography>  
                        <Box sx={styles.profileDescriptionContainer}>
                            <Box component={'img'} src = {selectedVideo && selectedVideo.thumbnailUrl} alt={'profile'} sx={styles.profile}/>
                            <Box sx={styles.authorSubscribersContainer}>
                                <Box component={'span'} sx={styles.subContent}>{selectedVideo && selectedVideo.author}</Box>
                                <Box component={'span'} sx={styles.subContent}>{selectedVideo && selectedVideo.subscriber}</Box>
                            </Box>
                        </Box> 
                        <Typography sx={styles.description}>{selectedVideo && selectedVideo.description}</Typography>
                    </Box>
                </Box>
                <Box sx={styles.videosListContainer}>
                    {videosData.map(eachVideo => (
                        <VideoItem eachVideoData={eachVideo} key={eachVideo.id} updateVideo={updateVideo}/>
                    ))}
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Videoplayer
