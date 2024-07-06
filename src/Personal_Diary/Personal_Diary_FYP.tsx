import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { ReactNode } from "react";
import Mindmap from '../Image/mindmap.png'
import Chart1 from '../Image/chart1.png'
import Chart2 from '../Image/chart2.png'
import Storyboard from '../Image/storyboard.png'

import Myimage from '../Image/20230125_122649.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import data from '../personal_diary.json'
import PeopleIcon from '@mui/icons-material/People';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Mainbox, SubBox } from "./Box";


export default function Personal_Diary_FYP () {
    return (
        <Box>
        <Box display="flex" justifyContent= 'center' pb="3rem">
        <Typography variant="h6">“Edge AI-based Multi-Camera Car Park Occupancy Detection System”</Typography>
        </Box>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>BACKGROUND</Typography>
        
        </Box>
        <Mainbox >
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="body1" color="grey">
            In the past 10 years, the number of private cars in HK increased by 190k, while the number of parking spaces only increased by 58k.
            </Typography>
            <Typography variant="body1" color="grey">
            The ratio of the number of vehicles to the parking spaces has dropped to a low of 1.05 in recent research
            </Typography>
            </Box>
        </Mainbox>

        <Box width="100%" display="flex" flexDirection= 'column' alignItems="center" pb="3rem">
            <Box width="80%" display="flex" flexDirection= 'column' alignItems="center">
            <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>WHAT'S THE PROBLEM</Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">

            <Typography variant="body1" color="grey" pb="1rem">
            From our experiment results, finding an available parking space during the peak period in urban areas is difficult.
We conducted tests on 10 different shopping malls in Mong Kok & Tsim Sha Tsui. On average, it took approximately 18.4 minutes to find an available parking slot.

            </Typography>
            <Typography variant="body1" color="grey">
            We observed a situation that Parking spaces are hard to locate for drivers and Information of spaces are not provided for drivers
            </Typography>
            </Box>
            </Box>
        </Box>
        <Mainbox>
            <SubBox>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="h6" color="grey" mb="1rem" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>POV</Typography>
            <List sx={{width:"100%"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{cursor:"default"}}>
              <ListItemIcon sx={{minWidth:"fit-content", paddingRight:"3px"}}>
                <PeopleIcon/>
              </ListItemIcon>
              <Box display="flex" alignItems="center">
              <Typography pr="1rem" color="grey">
              User: 
               </Typography>
                <Typography color="grey">
                Drivers
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{cursor:"default"}}>
              <ListItemIcon sx={{minWidth:"fit-content", paddingRight:"3px"}}>
                <QuestionMarkIcon/>
              </ListItemIcon>
              <Box display="flex" alignItems="center">
              <Typography pr="1rem" color="grey">
                    Need: 
               </Typography>
                <Typography color="grey">
                  Locating an available slot when the park is almost full
                </Typography>
              </Box>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{cursor:"default"}}>
              <ListItemIcon sx={{minWidth:"fit-content",paddingRight:"3px"}}>
                <TipsAndUpdatesIcon/>
              </ListItemIcon>
              <Box display="flex" alignItems="center">
              <Typography pr="1rem" color="grey">
              Goal: 
               </Typography>
                <Typography color="grey">
                Ease the process of searching for an available parking slot                </Typography>
              </Box>
              
            </ListItemButton>
          </ListItem>
          
        </List>

            </Box>
            </SubBox>
            <SubBox>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="h6" color="grey" mb="1rem" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>DESIGN GOALS</Typography>
            <Typography color="grey">
            Show available Occupancy information on the app directly embed into Shopping Mall App
            <ListItem  style={{ display: 'list-item' }}>
            Drivers are now able to know where is the closest empty slot !!
            </ListItem>
            <ListItem style={{ display: 'list-item' }}>
                Simplistic UI that is intuitive and responsive
                <ListItem  style={{ display: 'list-item' }}>
                Drivers may want to see the result quickly
                </ListItem>
            </ListItem>
            <ListItem style={{ display: 'list-item' }}>
                Low latency response time
                </ListItem>
                <ListItem style={{ display: 'list-item' }}>
                Accurate and reliable data
                </ListItem>
                <ListItem style={{ display: 'list-item' }}>
                Cheap and easy to install
                </ListItem>
            </Typography>
            </Box>
            </SubBox>
        </Mainbox>

        
        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>OUR SOLUTION</Typography>
        
        </Box>
        <Mainbox>
            <Typography color="grey">
            We propose a system that uses edge AI to detect the occupancy of parking spaces in real-time. The system will be installed in the parking lot. And this system will make used of multiple camera and LoRa to transmit the data to the cloud. The cloud will then process the data and send it to the user's phone. The user can then see the occupancy of the parking lot in real-time. This system will be able to provide the user with the information they need to find an available parking space quickly and easily.
             </Typography> 
        </Mainbox>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>RESULT</Typography>
        
        </Box>
        <Mainbox>
            <Typography color="grey">
            We successfully developed a system that uses edge AI to detect the occupancy of parking spaces in real-time with a nice accuracy and able to deploy in to low computational devices like raspberry pi 4. The system is able to provide the user with the information they need to find an available parking space quickly and easily.
            For Details, please refer to the powerpoint below:
            <a href="https://docs.google.com/presentation/d/1-o8OyEzf5mX3Mq3R27SX7ZRKsq9jUBTZ/edit?usp=sharing&ouid=111506364067838692197&rtpof=true&sd=true">Powerpoint</a>
            </Typography>
        </Mainbox>

        </Box>
        )
}