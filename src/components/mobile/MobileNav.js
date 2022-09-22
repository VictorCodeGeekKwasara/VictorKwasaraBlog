import React,{useState} from 'react'
import { Link } from 'gatsby'
import { AppBar } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';




const styles={

  appb:{
    backgroundColor:'transparent',
    display:'flex',
    flexDirection: 'row',
    alignitems:'center',
    justifyContent:'flex-end',
    
  },
  appdv:{
    position:'absolute',
    top:'0.4vh',
   left:'85.5vw', 
   color:'black',  
   zIndex:'10',     
  },

  linkdv:{
    position:"absolute",
    backgroundColor:'rgba(88,248,250,1)',
    top: '0px',
    left: '0px',
    width:'100vw',
    height:'100vh',
    zIndex: '1',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',

    lnks:{
      
      height: '15vh',
      width: '100vw',
      fontSize:'5vh',
      textDecoration:'none',
      color:'black',
     
    }

  }

}
export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleNavToggle = ()=> {
          setOpen(!open);

  }

  return (
		<div>
			{open ? (
				<div style={styles.appdv}>
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
				</div>
			) : (
				<AppBar sx={styles.appb} elevation={0}>
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
				</AppBar>
			)}

			{open && (
				<div style={styles.linkdv}>
					<Link style={styles.linkdv.lnks} to='/'>
						Home
					</Link>
					<Link style={styles.linkdv.lnks} to='/portfolio'>
						Portfolio
					</Link>
					<Link style={styles.linkdv.lnks} to='/blog'>
						Blogs
					</Link>
					<Link style={styles.linkdv.lnks} to='/about'>
						About
					</Link>
					<Link style={styles.linkdv.lnks} to='/login'>
						Login
					</Link>
					<Link style={styles.linkdv.lnks} to='/joinus'>
						Joinus
					</Link>
				</div>
			)}
		</div>
	);
}
