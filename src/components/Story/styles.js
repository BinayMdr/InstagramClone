import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({  
    root:{
        marginTop:'40px',
        padding:'5px',
        overflowX:'hidden',
        position:'relative',
        height:'95px',
        marginTop:'90px'
    },
    list:{
        display:'flex',
        listStyle:'none',
        padding:'0',
    },
    avatar:{
        width:'60px',
        height:'60px',
        display:'inline-flex',
        marginRight:'10px',
        border:'2px solid #c32aa3',
    },
    nextbutton:{
        borderRadius:'50%',
        padding:'0 4px',
        backgroundColor:'white',
        position: 'absolute',
        right: '0',
        top: '35px'
    },
    backbutton:{
        borderRadius:'50%',
        padding: '0 2px 0 4px',
        backgroundColor:'white',
        position: 'absolute',
        left: '0',
        top: '35px'
    }
  }));