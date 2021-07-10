import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton,Avatar,InputBase,Box } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles'
import Background from '../../Image/back.jpg'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const Post = () => {
    const classes = useStyles();
    return (
      <div> 
        { [...Array(5)].map((elementInArray, index) => ( 
          <Card className={classes.root}>

            <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    B
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="binay_manandhar"
            />

            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={Background}
              title="Contemplative Reptile"
              style={{height:'450px'}}
            />

          <CardContent style={{padding:'0'}}>
            <Box
              display="flex"
              justifyContent="flex-start"
            >
              <Box width="100%">
                <IconButton className={classes.button}>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton className={classes.button} style={{paddingLeft:'5px'}}>
                  <ChatBubbleOutlineOutlinedIcon/>
                </IconButton>
                <IconButton className={classes.button} style={{paddingLeft:'5px'}}>
                  <ShareOutlinedIcon />
                </IconButton>
              </Box>
              <Box justifyContent="flex-end">
                <IconButton className={classes.button}>
                  <BookmarkBorderOutlinedIcon/>
                </IconButton>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-start"
            >
              <Box>
                <Avatar aria-label="recipe" style={{width:'25px',height:'25px',marginLeft:'10px'}}>
                    B
                </Avatar>
              </Box>
              <Box style={{marginLeft:'5px',paddingTop:'5px'}}>
                <Typography variant="caption text" >
                    Liked by wazza and 20 others
                </Typography>
              </Box>
            </Box>
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
              <Typography variant="caption text">
                  <strong>binay_manadhar</strong> Hello guys!!!
              </Typography>
            </div>
            <Box
              display="flex"
              justifyContent="flex-start"
              style={{marginTop:'5px',marginLeft:'10px'}}
            >
              <Box width="100%" style={{paddingTop:'6px'}}>
                <strong>binay_manandhar</strong> Hello
              </Box>
              <Box justifyContent="flex-end" style={{marginRight:'10px'}}>
                <IconButton className={classes.button} style={{padding:'0'}}>
                  <FavoriteBorderIcon/>
                </IconButton>
              </Box>
            </Box>
            <div style={{marginLeft:'10px',paddingTop:'5px'}}>
              <Typography variant="caption text">
                6 minutes ago
              </Typography>
            </div>
            <hr style={{borderTop:'gray'}}/>

            <Box
              display="flex"
              justifyContent="flex-start"
            >
              <Box width="100%">
                <IconButton className={classes.button}>
                  <InsertEmoticonIcon />
                </IconButton>
                <InputBase
                        placeholder="Add a comment"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        style={{height:'25px',fontSize:'14px'}}
                        />
              </Box>
              <Box justifyContent="flex-end" style={{paddingTop:'10px',paddingRight:'10px'}}>
                <Typography variant="caption text" style={{fontSize:'14px',color:'#339FFF'}}>
                  Post
                </Typography>
              </Box>
            </Box>


          </CardContent>
        </Card>   
        ))}               
      </div>
    )
}

export default Post