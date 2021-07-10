import React from 'react';
import {AppBar,Toolbar,IconButton,InputBase,Badge,Typography,Avatar,Container} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './styles'
import Logo from '../../Image/logo.png'
import Profile from '../../Image/profile.jpg'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './style.css'

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
        <AppBar position="static" className={classes.appbar}>
            <Container maxWidth="md">
                <Toolbar>
                    <img src={Logo} />
                    <div className={classes.search} style={{marginLeft:'38%'}}>
                        <div className={classes.searchIcon}>
                        <SearchIcon style={{fontSize:'18px'}}/>
                        </div>
                        {/* <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        style={{height:'25px',fontSize:'14px'}}
                        /> */}
                         <Autocomplete
                            id="combo-box-demo"
                            freeSolo
                            classes={classes}
                            options={top100Films.map((option) => option.title)}
                            disableClearable
                            style={{ width: '200px',height:'24px' }}
                            renderInput={params => {
                                return (
                                <TextField
                                    {...params}
                                    placeholder="Search"
                                    variant="outlined"
                                    fullWidth
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                />
                                );
                            }}
                            />
                      
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit" className={classes.button}>
                        <Badge badgeContent={17} color="secondary">
                            <FavoriteBorderIcon  style={{color:'black'}}/>
                        </Badge>
                        </IconButton>
                        <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        className={classes.button}
                        >
                        <Avatar alt="Wazza" src={Profile} className={classes.avatar} />
                        </IconButton>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  );
}

const top100Films = [
    {title:'one'},
    {title:'one'},
    {title:'one'},
    {title:'one'},
]