import React,{useState} from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';
import { Button } from 'gatsby-theme-material-ui';
import {wrapper, txt, background} from "./index.module.css"

import { useWidth } from '../hooks/useWidth';

const styles = {
	btn1: {
		backgroundColor: '#58F8FA',
		marginTop: '4vh',
		'&:hover': {
			backgroundColor: '#47BDBE',
		},
		color: 'black',
		zIndex: 1,
	},
	btn2: {
		marginLeft: '2.5vw',
		marginTop: '4vh',
		backgroundColor: '#fff',
		'&:hover': {
			backgroundColor: 'white',
		},
		color: 'black',
		
	},
};


export default function Index() {

  const [small,isSmall] = useState(true);


  let mobile = useWidth(true) ;

	return (
		<Layout>
			<div class={wrapper}>
				<div class={background}></div>
				<div class={txt}>
					<Typography variant='h1'>
						Welcome to Victor’s Blog and Potfolio site
					</Typography>

					<Button
						size='large'
						to={`/blog`}
						variant='contained'
						sx={styles.btn1}
					>
						{' '}
						Blogs
					</Button>
					<Button
						size='large'
						to={`/portfolio`}
						variant='contained'
						sx={styles.btn2}
					>
						Portfolio
					</Button>
				</div>
			</div>
		</Layout>
	);
}

export const Head = <link rel='icon' href='favicon.ico' />;


