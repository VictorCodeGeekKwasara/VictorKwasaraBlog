import React from 'react'
import {
	createTheme,
	ThemeProvider,
	responsiveFontSizes,
} from '@mui/material/styles';
import Nav from './Nav'
import Footer from './Footer'
// import { useWidth } from '../hooks/useWidth'
import {layout} from "./layout.module.css"

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Layout({children}) {
 

  // let mobile = useWidth(true);

  return (
    <ThemeProvider theme={theme}>
     <div class={layout}>
      <Nav/>

			{children}

      <Footer/>
		</div> 
    </ThemeProvider>
		
	);
}
