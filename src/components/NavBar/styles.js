import { fade,makeStyles } from "@material-ui/core/styles";
import { BorderLeft, MicNone } from "@material-ui/icons";

export default makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appbar:{
        backgroundColor:'white',
        outline:'ridge',
        boxShadow:'none',
        position:'fixed',
        paddingTop:'10px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'absolute',
      color: 'black',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'snow',
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      border:'1px solid black',
    },
    searchIcon: {
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'1px 4px 0 4px'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + 10px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    avatar:{
        width:'30px',
        height:'28px'
    },
    button:{
      '&:hover':{
        backgroundColor:'transparent',
      }
    },
    inputRoot: {
      color: "black",
      border:'0',
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
      position:'absolute',
      top:'-2px',
      height:'28px', 
      "& .MuiAutocomplete-input":{
        position:'absolute',
        top:'-5px',
        width: '170px',
        paddingLeft: '15px!important',
      }  
    }
  }));