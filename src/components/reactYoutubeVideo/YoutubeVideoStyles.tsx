export const styles = {
    bgContainer:{
        padding:'10px',
        display:'flex',
        flexDirection:'column',
        minHeight: '100vh',
    },
    error:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    loading:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    videoItem:{
        display:'flex',        
        flexDirection: 'column',
        gap:1,
        cursor:'pointer',
    },
    title:{
        maxWidth:'350px',
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
        display:'flex',
        gap:2
    },
    menusTab:{
        display:{xs: 'none', sm:'flex'},
        flexDirection:'column',
        gap:3.5,
        
    },
    menuItem:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        fontFamily:'Helvetica',
    },
    openedMenuItem:{
        display:'flex',
        alignItems:'center',
        gap:1.5,
    },
    menuName:{
        fontSize:'13px',
    },
    openedMenuName:{
        fontSize:'16px',
    },
    shortIcon:{
        fontSize:'22px'
    },
    subContent:{
        color:'#6c6c6c',
        fontSize:'13px',
    }   ,
    moreVideos:{
        display:'flex',
        flexDirection:'column',
    }
}