import React from 'react'
import useStyles from './styles'
import { Avatar,Grid,Typography } from '@material-ui/core';
import Profile from '../../Image/profile.jpg'

const SideBar = () => {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={2}>
                    <Avatar alt="a" src={Profile} className={classes.profileImage}/>
                </Grid>
                <Grid item xs={8} className={classes.profileNameDiv}>
                    <Typography variant="caption text" className={classes.username}>
                        binay_manandhar
                    </Typography><br/>
                    <Typography variant="caption text" className={classes.fullname}>
                        Binay Manandhar
                    </Typography>
                </Grid>
                <Grid item xs={2} className={classes.switchDiv}>
                    <Typography variant="subtitle2" className={classes.switch}>
                        Switch
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={10}>
                    <Typography variant="subtitle2" style={{color:'#8e8e8e',fontSize:'12px',fontWidth:'600'}}>
                          Suggestions for you  
                    </Typography>
                </Grid>
                <Grid item xs={2} style={{padding:'0'}} className={classes.seeAllDiv}>
                    <Typography variant="subtitle2" style={{fontSize:'12px'}} >
                        See All
                    </Typography>
                </Grid>
            </Grid>
            
            { [...Array(5)].map((elementInArray, index) => ( 
                <Grid container spacing={3} >

                    <Grid item xs={2}>
                        <Avatar alt="a" src={Profile} className={classes.suggestionProfile}/>
                    </Grid>
                    <Grid item xs={8} className={classes.suggestionProfileDiv}>
                        <Typography variant="caption text" className={classes.username}>
                            binay_manandhar
                        </Typography><br/>
                        <Typography variant="caption text" className={classes.fullname} style={{fontSize:'12px'}}>
                            Followed by Wazza + 5 more
                        </Typography>
                    </Grid>
                    <Grid item xs={2} style={{marginTop:'25px',paddingLeft:'0'}}>
                        <Typography variant="subtitle2" className={classes.switch}>
                            Follow
                        </Typography>
                    </Grid>
                </Grid>
            ))}

        </div>
    )
}

export default SideBar