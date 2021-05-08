import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Methane from '../src/Graphs/methane';
import Ice from '../src/Graphs/Ice';
import Co from '../src/Graphs/co2';
import No from './Graphs/no2'

const useStyles =makeStyles((themes)=>({

    topic:{
        textAlign:'center',
        margin:"50px",
        backgroundColor:"rgb(25,51,0)",
    
    },
    text:{
        fontSize:"30px",
        fontWeight:"bold",
        color:"white",
        [themes.breakpoints.down('xs')]: {
            fontSize:"20px",
          },
    },

    graph:{
        margin:"40px",
        padding:"20px",
        [themes.breakpoints.down('xs')]: {
            margin:"10px",
            padding:"5px",
          },
    },
    footer:{
        backgroundColor:"rgb(224,224,224)",
        padding:"20px"
    }
}))

export default function Landings(){

    const classes = useStyles();

    return(
        <div>
            <Grid container>
                <Grid item xs={12} md={12} className={classes.topic}>
                    <Typography className={classes.text}>- POLAR ICE CAPS -</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.graph} elevation={10}>
                       <Methane/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.graph} elevation={10}>
                        <Co/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.graph} elevation={10}>
                        <No/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.graph} elevation={10}>
                        <Ice/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} className={classes.footer}>
                <Typography>Designed and Developed by </Typography>
                    <Typography>Akash Ekanayaka (Bsc)</Typography>
                    <Typography>University Of Colombo</Typography>
                    <Typography>Sri Lanka</Typography>
                </Grid>
    
            </Grid>
          
            
        </div>
    )
}