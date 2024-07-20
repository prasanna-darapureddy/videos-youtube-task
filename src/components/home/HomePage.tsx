import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SiYoutubeshorts } from "react-icons/si";
import { Home, SubscriptionsOutlined, VideoLibraryOutlined } from "@mui/icons-material";
import Header from "../header/Header";
import { homeStyles } from "./HomeStyles";

interface IProps {
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

interface IState {
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
    menuOpened: boolean,
}

function HomePage(props: Readonly<IProps>) {
    const videosData = props.videosData
    const [videosList, setVideosList] = useState<IState['videosData']>(videosData)
    const [searchInput, setSearchInput] = useState<IState['searchInput']>('')
    const [menuOpened, setMenuOpened] = useState<IState['menuOpened']>(false)
    const navigate = useNavigate()

    const onClickVideoItem = (id: string) => {
        navigate(`/videos/${id}`)
    }

    return (
        <Box sx={homeStyles.mainContainer}>
            <Header searchInput={searchInput} setSearchInput={setSearchInput} menuOpened={menuOpened} setMenuOpened={setMenuOpened} videosList={videosList} setVideosList={setVideosList} />
            <Box sx={homeStyles.menusTabContentContainer}>
                <Box sx={homeStyles.menusTab}>
                    <Box sx={menuOpened ? homeStyles.openedMenuItem : homeStyles.menuItem}>
                        <Home />
                        <Box component={'span'} sx={menuOpened ? homeStyles.openedMenuName : homeStyles.menuName}>Home</Box>
                    </Box>
                    <Box sx={menuOpened ? homeStyles.openedMenuItem : homeStyles.menuItem}>
                        <SiYoutubeshorts style={homeStyles.shortIcon} />
                        <Box component={'span'} sx={menuOpened ? homeStyles.openedMenuName : homeStyles.menuName}>Shorts</Box>
                    </Box>
                    <Box sx={menuOpened ? homeStyles.openedMenuItem : homeStyles.menuItem}>
                        <SubscriptionsOutlined />
                        <Box component={'span'} sx={menuOpened ? homeStyles.openedMenuName : homeStyles.menuName}>Subscribers</Box>
                    </Box>
                    <Box sx={menuOpened ? homeStyles.openedMenuItem : homeStyles.menuItem}>
                        <VideoLibraryOutlined />
                        <Box component={'span'} sx={menuOpened ? homeStyles.openedMenuName : homeStyles.menuName}>You</Box>
                    </Box>
                </Box>
                <Grid container spacing={2} sx={homeStyles.contentContainer}>
                    {videosList.map(eachVideo => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={homeStyles.listItem} onClick={() => onClickVideoItem(eachVideo.id)} key={eachVideo.id}>
                            <Box sx={{ ...homeStyles.thumbnailContainer, backgroundImage: `url(${eachVideo.thumbnailUrl})}` }}>
                                <Box component={'span'} sx={homeStyles.duration}>{eachVideo.duration}</Box>
                            </Box>
                            <Box sx={homeStyles.profileContentContainer}>
                                <Box component={'img'} src={eachVideo.thumbnailUrl} alt='profile' sx={homeStyles.profile} />

                                <Box sx={homeStyles.itemContentContainer}>
                                    <Typography sx={homeStyles.title}>{eachVideo.title}</Typography>
                                    <Box component={'span'} sx={homeStyles.subContent}>{eachVideo.author}</Box>
                                    <Box sx={homeStyles.subContent}>{eachVideo.views} Views  . {eachVideo.uploadTime}</Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
export default HomePage
