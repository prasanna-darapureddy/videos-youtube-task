export const styles = {
    mainContainer:{
        display: 'flex',
        flexDirection: 'column',
        padding:'10px',
        minHeight:'100vh',
        fontFamily:'Roboto',
    },
    headersContainer:{
        display: {xs: 'flex'},
        flexDirection: {xs:'column', sm:'row'},
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '30px',
        gap:1.5,
    },
    menuLogoContainer:{
        display: 'flex',
        alignItems: 'center',
        gap:2,
    },
    menuIcon:{
        cursor:'pointer',
        fontSize: '30px',
        color:'#030303',
        fontWeight:'normal',
        display: {xs:'none', sm:'inline'}
    },
    logo:{
        width:'100px',
        cursor:'pointer',
    },
    searchMicContainer:{
        display: 'flex',
        gap:2
    },
    searchContainer:{
        border: '1px solid #c8c8c8',
        display:'flex',
        alignSelf: {xs: 'center'},
        width:{xs:'100%', sm:'300px', md:'400px', lg:'600px'},
        borderRadius:'20px',
    },
    search:{
        width:'100%',
        padding: '5px 15px',
    },
    button:{
        backgroundColor:'#f8f8f8',
        color:'#6c6c6c',
        padding:'5px',
        width:'70px',
        border:'none',
        outline:'none',
        borderTopLeftRadius:'0px',
        borderBottomLeftRadius:'0px',
        borderTopRightRadius:'20px',
        borderBottomRightRadius:'20px',
        borderLeft: '1px solid #c8c8c8',        
    },
    micContainer:{
        borderRadius:'40px',
        height:'40px',
        width:'40px',
        backgroundColor:'#f2f2f2',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    headerIconsContainer:{
        display:{xs:'none', sm:'flex'},
        gap:2,
        alignItems:'center',
    },
    logInProfile:{
        backgroundColor:'#00887a',
        color:'#fff',
        borderRadius:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'40px',
        width:'40px',
    },
    contentContainer:{
        display: {xs:'flex'},
        flexDirection: {xs: 'column', md:'row'},
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        minHeight:'100vh',
        padding: '5px 40px',
        gap:2,
        fontFamily:'Helvetica',
    },
    videoContainer:{
        width:{xs:'100%', md:'70%'},
        display: 'flex',
        flexDirection: 'column',
        gap:1,
    },
    videosListContainer:{
        display: 'flex',
        flexDirection: 'column',
        gap:2,
        visibility: 'scroll',
        overflowY: 'scroll',
        height:'100vh',
    },
    subContent:{
        color:'#6c6c6c',
        fontSize:'15px',
    },
    description:{
        fontSize:'18px',
    },
    video:{
        // border: '1px solid #6c6c6c',
        // borderRadius: '20px',
    },
    playIcon:{
        color:'#fff',
        border: '3px solid #fff',
        borderRadius:'50px',
        padding:'10px',
        fontSize:'35px',
    },
    thumbnail:{
        width:'95%',
    },
    playingVideoContent:{
        display:'flex',
        flexDirection: 'column',
        gap:2
    },
    profileDescriptionContainer:{
        display: 'flex',
        alignItems: 'center',
        gap:2
    },
    authorSubscribersContainer:{
        display: 'flex',
        flexDirection: 'column',
        gap:1,
    },
    profile:{
        height:'40px',
        width:'40px',
        borderRadius:'50px',
    }
}