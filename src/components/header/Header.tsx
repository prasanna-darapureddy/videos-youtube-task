import { MenuOutlined, Mic, NotificationsNoneOutlined, Search, VideoCallOutlined } from '@mui/icons-material'
import { Box, InputBase } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { styles } from './HeaderStyles'

interface IProps {
    searchInput: string,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    menuOpened: boolean,
    setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>,
    videosList: {
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
    setVideosList: React.Dispatch<React.SetStateAction<{
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
    }[]>>
}

function Header(props: Readonly<IProps>) {
    const { searchInput, setSearchInput, menuOpened, setMenuOpened, videosList, setVideosList } = props
    const navigate = useNavigate()

    const onClickSearchButton = () => {
        const searchedData = videosList.filter(eachVideo => eachVideo.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
        setVideosList(searchedData)
    }

    return (
        <Box sx={styles.headersContainer}>
            <Box sx={styles.menuLogoContainer}>
                <MenuOutlined sx={styles.menuIcon} onClick={() => setMenuOpened(!menuOpened)} />
                <Box component={'img'} src={'/youtubelogo.png'} alt='logo' sx={styles.logo} onClick={() => navigate('/')} />
            </Box>
            <Box sx={styles.searchMicContainer}>
                <Box sx={styles.searchContainer}>
                    <InputBase sx={styles.search} placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <Box sx={styles.button} component={"button"}><Search onClick={onClickSearchButton} /></Box>
                </Box>
                <Box sx={styles.micContainer}><Mic /></Box>
            </Box>
            <Box sx={styles.headerIconsContainer}>
                <VideoCallOutlined />
                <NotificationsNoneOutlined />
                <Box sx={styles.logInProfile}>N</Box>
            </Box>
        </Box>
    )
}

export default Header
