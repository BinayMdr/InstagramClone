import React from 'react'
import NavBar from '../NavBar/NavBar'
import Story from '../Story/Story'
import SideBar from '../SideBar/SideBar'
import Post from '../Post/Post'
import { Container,Grid } from '@material-ui/core'

const HomePage = () => {
    return (
        <>
          <NavBar /> 
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <Story />
                <Post />
              </Grid>
              <Grid item xs={4}>
                <SideBar />
              </Grid>
            </Grid>
          </Container>
        </>
    )
}

export default HomePage