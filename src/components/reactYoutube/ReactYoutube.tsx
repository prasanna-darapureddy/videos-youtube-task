import { Box, Grid, InputBase, Typography, } from '@mui/material';
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { styles } from './ReactYoutubeStyles';
import { Home, MenuOutlined, Mic, NotificationsNoneOutlined, Search, SubscriptionsOutlined, VideoCallOutlined, VideoLibraryOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { SiYoutubeshorts } from 'react-icons/si';

interface IState {
    searchInput: string;
    menuOpened: boolean;
    data: {
        etag: string,
        id: string,
        snippet: {
            channelId: string;
            channelTitle: string;
            description: string;
            liveBroadcastContent: string;
            publishTime: string;
            publishedAt: string;
            title: string;
            thumbnails: {
                default: string;
            }
        }
    }[],
    apiStatus: string,
    apiError: string,
}
const opts = {
    height: '200',
    width: '350',
}

//Get youtube video data from google developer account 
// first process is generate access key and then next is for url using that access key and api 

function ReactYoutube() {
    const [data, setData] = useState<IState['data']>([])
    const [apiStatus, setApiStatus] = useState<IState['apiStatus']>('')
    const [searchInput, setSearchInput] = useState<IState['searchInput']>('')
    const [menuOpened, setMenuOpened] = useState<IState['menuOpened']>(false)
    const navigate = useNavigate()

    const onClickSearchIcon = () => {
        const searchedData = data.filter(eachVideo => eachVideo.snippet.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        setData(searchedData)
    }

    const getData = async () => {
        setApiStatus('inProgress')
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyACB4JseFWf5wT02PzSe7B5S7ZBBY_hmBE&maxResults=50`

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            setData(data.items)
            setApiStatus('success')
            console.log(data.items)
        } else {
            setApiStatus('failure')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const renderProgressView = () => {
        return (
            <Box sx={styles.loading}>Loading.....</Box>
        )
    }

    const onClickMenuIcon = () => {
        setMenuOpened(!menuOpened)
    }

    const onClickVideoItem = (id: string) => {
        navigate(`/youtubevideo/${id}`, { state: data })
    }

    const renderSuccessView = () => {
        return (
            <Box sx={styles.bgContainer}>
                <Box sx={styles.headersContainer}>
                    <Box sx={styles.menuLogoContainer}>
                        <MenuOutlined sx={styles.menuIcon} onClick={onClickMenuIcon} />
                        <Box component={'img'} src={'/youtubelogo.png'} alt='logo' sx={styles.logo} onClick={() => navigate('/')} />
                    </Box>
                    <Box sx={styles.searchMicContainer}>
                        <Box sx={styles.searchContainer}>
                            <InputBase sx={styles.search} placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                            <Box sx={styles.button} component={"button"}><Search onClick={onClickSearchIcon} /></Box>
                        </Box>
                        <Box sx={styles.micContainer}><Mic /></Box>
                    </Box>
                    <Box sx={styles.headerIconsContainer}>
                        <VideoCallOutlined />
                        <NotificationsNoneOutlined />
                        <Box sx={styles.logInProfile}>N</Box>
                    </Box>
                </Box>
                <Box sx={styles.contentContainer}>
                    <Box sx={styles.menusTab}>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <Home />
                            <Box component={'span'} sx={menuOpened ? styles.openedMenuName : styles.menuName}>Home</Box>
                        </Box>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <SiYoutubeshorts style={styles.shortIcon} />
                            <Box component={'span'} sx={menuOpened ? styles.openedMenuName : styles.menuName}>Shorts</Box>
                        </Box>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <SubscriptionsOutlined />
                            <Box component={'span'} sx={menuOpened ? styles.openedMenuName : styles.menuName}>Subscribers</Box>
                        </Box>
                        <Box sx={menuOpened ? styles.openedMenuItem : styles.menuItem}>
                            <VideoLibraryOutlined />
                            <Box component={'span'} sx={menuOpened ? styles.openedMenuName : styles.menuName}>You</Box>
                        </Box>
                    </Box>
                    <Grid container spacing={2}>
                        {data?.map(eachItem => (
                            <Grid item key={eachItem.etag} sx={styles.videoItem} xs={12} sm={6} md={4} lg={3} onClick={() => onClickVideoItem(eachItem.id)}>
                                <YouTube videoId={eachItem.id} opts={opts} />
                                <Typography sx={styles.title}>{eachItem.snippet.title}</Typography>
                                <Box component={'span'} sx={styles.subContent}>{eachItem.snippet.channelTitle}</Box>
                                <Box sx={styles.subContent}>{eachItem.snippet.publishedAt}</Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        )
    }

    const renderFailureView = () => {
        return (
            <Box sx={styles.error}>Failed</Box>
        )
    }

    const renderYouTubePage = () => {
        switch (apiStatus) {
            case 'inProgress':
                return renderProgressView()
            case 'success':
                return renderSuccessView()
            case 'failure':
                return renderFailureView()
            default:
                return null
        }
    }

    return (
        <>
            {renderYouTubePage()}
        </>
    )
}
export default ReactYoutube
