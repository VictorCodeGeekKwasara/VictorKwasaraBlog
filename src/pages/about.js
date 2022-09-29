import React from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';
// import { StaticImage } from 'gatsby-plugin-image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton, Link } from 'gatsby-theme-material-ui';
// import balance from '../images/balance.svg';
// import { useWidth } from '../hooks/useWidth';
import Seo from "../components/seo";
import {victor,container,website, text, social} from "./about.module.css";

export default function About() {
	// custome hook used to toggle the screen design based on view width improvision
	// should use beter styling solutions
	// let mobile = useWidth(false);

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
						studying Engineering. Ever since Victor has learnt About the
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



export const Head = () => <Seo title='About' />;