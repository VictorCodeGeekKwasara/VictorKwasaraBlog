import React,{useRef,useState} from 'react'
import { AppBar } from '@mui/material'
import {Link} from "gatsby-theme-material-ui"
import {links,openClose,link, wrapper, openStyle} from "./nav.module.css"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
const styles = {

appbar:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  backgroundImage:`linear-gradient(to right, #fff,#58F8FA,#fff)`,
  height:'10vh',
  

  lnk:{
    // textDecoration:'none'
   color:'#1F0318',
  }
}

// (theme)=>({
//   [theme.breakpoints.up]:{

//   }
// })



}

export default function Nav() {
  const [open,setOpen] = useState(false);
  const linksRef = useRef();

  const handleNavToggle = () => {
		setOpen(!open);
    linksRef.current.classList.toggle(openStyle);
	};

  return (
		<div class={wrapper}>		
				<div class={links} ref={linksRef}>
					<Link class={link} to='/'>
						Home
					</Link>
					<Link class={link} to='/portfolio'>
						Portfolio
					</Link>
					<Link class={link} to='/blog'>
						Blogs
					</Link>
					<Link class={link} to='/about'>
						About
					</Link>
					<Link class={link} to='/login'>
						Login
					</Link>
					<Link class={link} to='/joinus'>
						Joinus
					</Link>
				</div>
			<div class={openClose}>
				{open ? (
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={handleNavToggle}
					>
						<CloseRoundedIcon />
					</IconButton>
				) : (
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={handleNavToggle}
					>
						<MenuRoundedIcon sx={{ color: 'white' }} />
					</IconButton>
				)}
			</div>
		</div>
	);
}
