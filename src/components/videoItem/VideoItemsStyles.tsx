export const styles = {
    listItem:{
        display: {xs:'flex'},
        flexDirection:{xs:'column', md:'row'},
        width:'100%',
        gap:1
    },
    thumbnailContainer:{
        width:{xs: '200px', sm:'220px'},
        height:'130px',
        borderRadius:'10px',
        backgroundSize:'cover',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding:'5px',
    },
    duration:{
        backgroundColor:'#000',
        color:'#fff',
        borderRadius:'10px',
        padding:'3px',
        fontSize:'12px',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    title:{
        width:{xs:'180px', sm:'150px'},
        color:'#000',
        fontWeight:'bold',
    },
    subContent:{
        color:'#6c6c6c',
        fontSize:'13px',
    }
}