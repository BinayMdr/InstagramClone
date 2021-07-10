import React,{useState,useEffect} from 'react'
import { Avatar,Paper } from '@material-ui/core';
import useStyles from './styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Profile from '../../Image/profile.jpg'

const Story = () => {
  const classes = useStyles();
  const [showBack,setShowBack] = useState(false)
  const [showNext,setShowNext] = useState(true)

  useEffect(() => {
        let story_width = document.getElementById("story-div").clientWidth
        story_width > 522 ? setShowNext(true) : setShowNext(false)
  },[]);
    const next = () => {
        let check_div = document.getElementById("story-div").style.left
        if(check_div == '') document.getElementById("story-div").style.left = '-65px'
        else{ 
            let previous = check_div.replace("px","")
            document.getElementById("story-div").style.left = (parseInt(previous) - 65) +'px'
        }    

        let story_width = document.getElementById("story-div").clientWidth
        let shift_left = document.getElementById("story-div").style.left.replace("px","")
        if((522 + Math.abs(parseInt(shift_left)) > story_width)) setShowNext(false)
        setShowBack(true)
    }

    const back = () => {
        let check_div = document.getElementById("story-div").style.left
        let previous = check_div.replace("px","")
        document.getElementById("story-div").style.left = (parseInt(previous) + 65) +'px'
        if(document.getElementById("story-div").style.left == '0px') 
        {
            document.getElementById("story-div").style.left = ''
            setShowBack(false) 
        }

        let story_width = document.getElementById("story-div").clientWidth
        let shift_left = document.getElementById("story-div").style.left.replace("px","")
        if((522 + Math.abs(parseInt(shift_left)) < story_width)) setShowNext(true)
    }

  
    return (
        <div style={{position:'relative'}}>
            <Paper className={classes.root} id="main-story">
                <div id="story-div" style={{position:'absolute'}}>
                    <ul className={classes.list}>
                        <li><Avatar alt="a" src={Profile} className={classes.avatar} /> </li>
                        <li><Avatar alt="q" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="w" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="e" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="r" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="t" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="y" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="u" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="i" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="o" src={Profile} className={classes.avatar} /></li>
                        <li><Avatar alt="p" src={Profile} className={classes.avatar} /></li>
                    </ul>
                </div>
                    { showNext &&
                        <button onClick={next} className={classes.nextbutton}>< ArrowForwardIosIcon style={{width:'15px'}}/> </button>
                    }    
                    { showBack &&
                        <button onClick={back} className={classes.backbutton}>< ArrowBackIosIcon style={{width:'15px'}}/> </button>
                    }
            </Paper>
        </div>
    )
}

export default Story