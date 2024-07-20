import { Box, Grid, Typography, } from '@mui/material';
import { useState } from 'react'
import YouTube from 'react-youtube';
import { styles } from './YoutubeVideoStyles';
import { Home, MenuOutlined,  SubscriptionsOutlined, VideoLibraryOutlined } from '@mui/icons-material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { SiYoutubeshorts } from 'react-icons/si';


interface IState{
    searchInput:string;
    menuOpened:boolean;
    selectedVideo:{
        etag:string,
        id:string,
        snippet:{
            channelId: string;
            channelTitle: string;
            description:string;
            liveBroadcastContent:string;
            publishTime:string;
            publishedAt:string;
            title:string;
            thumbnails:{
                default:string;
            }
        }
    } | undefined;
     data:{
        etag:string,
        id:string,
        snippet:{
            channelId: string;
            channelTitle: string;
            description:string;
            liveBroadcastContent:string;
            publishTime:string;
            publishedAt:string;
            title:string;
            thumbnails:{
                default:string;
            }
        }
    }[],
}
const opts = {
    height:'500',
    width:'1000',
}

function YoutubeVideo() {
    const location = useLocation()  
    const params = useParams()
    const id = params.id
    const {data} = location.state as IState
    const initialVideo = data && data.find(eachVideo => eachVideo.id === id)
    const [menuOpened, setMenuOpened] = useState<IState['menuOpened']>(false)
    const [selectedVideo, setSelectedVideo] = useState<IState['selectedVideo']>(initialVideo) 
    const navigate = useNavigate() 

    const onClickMenuIcon = () => {
        setMenuOpened(!menuOpened)
    }

    const onClickMappedVideo = (id:string) => {
        const selected = data.find(eachVideo => eachVideo.id === id)
        setSelectedVideo(selected)
    }

    return (
        <>
            <Box sx={styles.bgContainer}>
                <Box sx={styles.headersContainer}>
                    <Box sx={styles.menuLogoContainer}>
                        <MenuOutlined sx={styles.menuIcon} onClick={onClickMenuIcon}/>
                        <Box component={'img'} src={'/youtubelogo.png'} alt='logo' sx={styles.logo} onClick={() => navigate('/')}/>
                    </Box>
                    <Box sx={styles.headerIconsContainer}>
                        <Box sx={styles.logInProfile}>N</Box>
                    </Box>
                </Box>
                <Box sx={styles.contentContainer}>
                    <Box sx={styles.menusTab}>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <Home/>
                            <Box component={'span'} sx={menuOpened ? styles.openedMenuName : styles.menuName}>Home</Box>
                        </Box>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <SiYoutubeshorts style={styles.shortIcon}/>
                            <Box component={'span'}  sx={menuOpened ? styles.openedMenuName : styles.menuName}>Shorts</Box>
                        </Box>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <SubscriptionsOutlined/>
                            <Box component={'span'}  sx={menuOpened ? styles.openedMenuName : styles.menuName}>Subscribers</Box>
                        </Box>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <VideoLibraryOutlined/>
                            <Box component={'span'}  sx={menuOpened ? styles.openedMenuName : styles.menuName}>You</Box>
                        </Box>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item key={selectedVideo && selectedVideo.id} sx={styles.videoItem} xs={12} sm={6} md={4} lg={3}>
                            <YouTube videoId={selectedVideo && selectedVideo.id} opts={opts}/>
                            <Typography sx={styles.title}>{selectedVideo && selectedVideo.snippet.title}</Typography>
                            <Box component={'span'} sx={styles.subContent}>{selectedVideo && selectedVideo.snippet.channelTitle}</Box>
                            <Box sx={styles.subContent}>{selectedVideo && selectedVideo.snippet.publishedAt}</Box>
                        </Grid>
                    </Grid>
                    <Box sx={styles.moreVideos}>
                        {data && data.map(eachVideo =>                             
                            <Box key={eachVideo.id} onClick={() => onClickMappedVideo(eachVideo.id)}>
                                <YouTube videoId={eachVideo.id} opts={opts}/>
                                <Typography sx={styles.title}>{eachVideo.snippet.title}</Typography>
                                <Box component={'span'} sx={styles.subContent}>{eachVideo.snippet.channelTitle}</Box>
                                <Box sx={styles.subContent}>{eachVideo.snippet.publishedAt}</Box>
                            </Box>                            
                        )}
                    </Box>
                </Box>
            </Box>
        </>    
    )
}
export default YoutubeVideo


