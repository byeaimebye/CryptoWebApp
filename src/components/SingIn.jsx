import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar'; 
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/celerilogo.png';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();

export default function SignIn({setLocalStorage}) {
  
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #03A9F4',
            padding: '23px',
            borderRadius: ' 35px',
            backgroundColor:'rgba(161,198,230,0.8)'

          }}
        >
            <lottie-player
             src="https://assets1.lottiefiles.com/packages/lf20_ikaawl5v.json"  
             background="transparent"  speed="1" 
              style={{
                margin: "0 auto", 
                width: "999px", 
                height: "650px", 
                position:"absolute",
                zIndex:"-100"}}  
                loop  autoplay></lottie-player>
        <div className="logoSing">
            <img src={logo} alt="" className="imgLogoSing" />
            <h4 className="celeriSing">celeri</h4>
            </div>  
        
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange= {e => setLocalStorage(e.target.value)}
              key='user'
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
             
            />
            <FormControlLabel
              
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             <Link href="/GridCoins" variant="body2" style={{color:"white", textDecoration:"none", fontSize:"15px"}}>
                 Sing In
                </Link>
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              {/* <Grid item>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}