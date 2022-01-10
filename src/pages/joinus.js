import React,{useState} from 'react'
import Layout from '../components/Layout';
import axios  from 'axios'
import { Button } from 'gatsby-theme-material-ui';
import { Typography } from '@mui/material';


const styles = {

   err:{
    textAlign:'center',
    color:'red',
  },
  bg:{
     position:'absolute',
     top:'0px',
     left:'0px',
     width:'100vw',
     height:'100vh',
     backgroundImage:`linear-gradient(to right, #1F0318,#58F8FA,#1F0318)`,
     zIndex:'-1'
    },

  formwrapper:{

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red',
    height:"100vh",
    // zindex:'2'

    txt:{
      color:'#1F0318',
    },
    frm:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
      inpt:{
      margin:'3vh',
      height:'5vh',
      width: '80vw',
      textAlign:'center',
    },
      btn:{
      backgroundColor:'#1F0318',
      marginTop:'4vh',
      '&:hover':{

        backgroundColor:'#410532',
        
      },
      },
    },
   
  }
 
}

export default function Login() {
 	const [nameError, setNameError] = useState('');
	const [passError, setPassError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


  const handlesubmit = (e) => {
		e.preventDefault();
		setEmailError('');
		setNameError('');
		setPassError('');
		axios
			.post('https://backendblogvictork.herokuapp.com/signup', { name, email, password })
			.then((res) => {
				console.log(res.data);
				window.location.assign("/blog")
			})
			.catch((err) => {
				if (err.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					// console.log(err.response.data);
				
					setNameError(err.response.data.errors.name);
					setPassError(err.response.data.errors.password);
					setEmailError(err.response.data.errors.email);
					// console.log(err.response.status);
					// console.log(err.response.headers);
				} else if (err.request) {
					// The request was made but no response was received
					// `err.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
				
				} else {
					// Something happened in setting up the request that triggered an Err
					console.log('Err', err.message);
				}
				console.log(err.config);
			});
	};
    return (
    <Layout>  
      <div style={styles.bg}></div>   

     
      <div  style={styles.formwrapper}> 
      <Typography variant='h5' sx={styles.formwrapper.txt} >JOIN US</Typography> 
        <form  onSubmit={handlesubmit} style={styles.formwrapper.frm}>
        <input 
        type="text"
        placeholder='Name' 
        required='true' 
        name='name'	
        value={name}
				onChange={(e) => setName(e.target.value)}
        style={styles.formwrapper.frm.inpt}
         />
        {nameError!='' && <div style={styles.err}>{nameError}</div>}
        <input
        type="email"
        placeholder='example@xxxxxx.com'
        required='true'
        name='email'
        value={email}
				onChange={(e) => setEmail(e.target.value)}
        style={styles.formwrapper.frm.inpt}
         />
       {emailError!='' && <div style={styles.err}>{emailError}</div>}
        <input
        type="password"
        placeholder='password'
        required='true'
        name='password'
        value={password}
				onChange={(e) => setPassword(e.target.value)}
        style={styles.formwrapper.frm.inpt}
        />
        {passError!='' && <div style={styles.err}>{passError}</div>}


        <Button type="submit" variant='contained' sx={styles.formwrapper.frm.btn}>Submit</Button>
      </form></div>
    </Layout>
  )
}
