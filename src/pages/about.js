import React from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton, Link } from 'gatsby-theme-material-ui';
import balance from '../images/balance.svg';
import { useWidth } from '../hooks/useWidth';
import {victor,container,website, heading, text, social} from "./about.module.css";

const styles = {
		img: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-end',
			position: 'absolute',
			top: '10vh',
			right: '0px',
			height: '80vh',
			width: '55vw',

			// backgroundColor:'red'
					

		website: {
			position: 'absolute',
			top: '110vh',
			right: '10px',
			height: '80vh',
			width: '55vw',
			// backgroundColor:'brown',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},

		balance: {
			position: 'absolute',
			top: '120vh',
			left: '0px',
			height: '85vh',
			width: '35vw',
			backgroundImage: `url(${balance})`,
		},
	},
};

export default function About() {
	// custome hook used to toggle the screen design based on view width improvision
	// should use beter styling solutions
	let mobile = useWidth(false);

	return (
		<Layout>
			<div class={container}>
				<div class={social}>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 1, color: '#55ACEE' }}
						to='https://twitter.com/vkwasara'
					>
						{' '}
						<TwitterIcon />
					</IconButton>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 1, color: '#0A66C2' }}
						to='https://www.linkedin.com/in/victor-kwasara-7a1b06229/'
					>
						<LinkedInIcon />
					</IconButton>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 1, color: '#890101' }}
						to='https://www.instagram.com/professor_cypher/'
					>
						{' '}
						<InstagramIcon />
					</IconButton>
				</div>

				<div class={victor}>
					<Typography variant='h4'>About Victor</Typography>
					<Typography class={text} variant='body'>
						Victor is a Engineer and Programing language enthusiast. He learnt
						programming principles using java, back when he was in college
						studying Mining Engineering. Ever since Victor has learnt About the
						internet Using Javascript, html and CSS. He has also learnt, rust
						which is currently his favourite language and some python. In the
						future Victor sees himself working with, blockchain technology,
						cloud computing and distrubuted systems. Victor Loves reading and
						believes in having a wide range of knowledge. I make my web2
						websites Using the Mongo Db , Express , gatsby , Nodejs (MERN). I
						make my web3 websites Using React, anchor , solana. My other hobbies
						include running, reading non-fiction , walking.
					</Typography>
				</div>
				<div class={website}>
					<Typography variant='h4'>About this Website</Typography>
					<Typography class={text} variant='body'>
						This website is a place where You can find
						<Link to='/blog'>articles </Link>about life, tech,mining, news and
						anything that is interesting in society. This site is also Victor's
						<Link to='/portfolio'>portfolio</Link> site. Potential clients and
						employers can view projects made by Victor in the past.This website
						was made using gatsby, netlify cms for the content
						management,material ui, nodejs, express , jwt and Mongodb for
						authentication and continous deployment with netlify, git-gateway.
					</Typography>
				</div>
			</div>
		</Layout>
	);
}






		{/* <div style={styles.container.balance}></div>  */}

{/* {/* <div style={styles.container.bg}></div>  
					<div style={styles.container.img}>
						<StaticImage
							placeholder='tracedSVG'
							src='../images/victor.png'
							alt='victor pic'
						/> */}