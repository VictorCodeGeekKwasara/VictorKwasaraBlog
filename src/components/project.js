import React from 'react'
import { CardActionArea } from 'gatsby-theme-material-ui';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {image,content} from "./project.module.css"

// 'https://professorcodegeekblogsitesample1.netlify.app/'

const styles = {
  card: theme =>({
		borderRadius: "5px",
		display:"flex",
		width:"90vw",
		height: "250px",
    [theme.breakpoints.up("md")]:{
       width: "850px",
			 height: "250px"
			//  margin: "10vh auto"
    },     
  }),

  actionArea: theme =>({
		 display: "flex" ,
     [theme.breakpoints.up("md")]:{
			padingLeft: 0 ,
			flexDirection: "row",
			// alignItems: "left",
			justifyContent: "left",
			gap: "65px"
			
		 }
  })

}

const Project = ({title,link,description,img}) => {
  return (
		<>
			<Card sx={styles.card}>
				<a>
					<CardActionArea sx={styles.actionArea} to={link} target='_blank'>
					<img
						src={img}
						alt='site display image'
						placeholder='tracedSvg'
						class={image}
					/>
					<CardContent class={content}>
						<Typography gutterBottom variant='h4' component='div'>
							{title}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{' '}
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
				</a>
				
			</Card>
		</>
	);
}

export default Project