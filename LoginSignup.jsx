import "./LoginSignup.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

export default function LoginSignup(){
    return(
        <div className="container">
            <h2 style={{color: 'green', textDecorationLine: 'underline'}}>Sign in</h2>
        <TextField
          id="filled-required"
          label="Username"  
          variant="standard"
        />
        <br></br>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <br></br>
        <p style={{marginLeft: '100px', color: 'black',fontSize: '11px'}}>Forgot Password?</p>
        <div style={{textAlign: "left"}}><span><Checkbox color="success" />
        </span><span style={{color: 'black', fontSize: '12px'}}>Remember me</span></div>
        <Button variant="contained" small color="success"  style={{ borderRadius: '50px' }}>Login</Button>
        <br />
        <p style={{color: 'black', fontSize: '12px'}}>Do not have an account? <a style={{color: 'success'}}> Signup</a></p>
        </div>
    );
}