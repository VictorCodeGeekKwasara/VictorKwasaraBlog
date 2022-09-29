import React,{useRef,useState} from 'react'
import { AppBar } from '@mui/material'
import {Link} from "gatsby-theme-material-ui"
import {links,openClose,link, wrapper, openStyle} from "./nav.module.css"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';

const styles = {
	icons: {
		color: '#58F8FA',
	},
};

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
				<Link class={link}  to='/'>
					<span class={link}>Home</span>
				</Link>
				<Link class={link} to='/portfolio'>
					<span class={link}>Portfolio</span>
				</Link>
				<Link class={link} to='/blog'>
					<span class={link}>Blogs</span>
				</Link>
				<Link class={link} to='/about'>
					<span class={link}>About</span>
				</Link>
				<Link class={link} to='/login'>
					<span class={link}> Login</span>
				</Link>
				<Link class={link} to='/joinus'>
					<span class={link}>Joinus</span>
				</Link>
			</div>
			<div class={openClose}>
				{open ? (
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={styles.icons}
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
						sx={styles.icons}
						onClick={handleNavToggle}
					>
						<MenuRoundedIcon />
					</IconButton>
				)}
			</div>
		</div>
	);
}
