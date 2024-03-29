import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

export default function SignUp(){
    return(
        <div className="container">
            <h2 style={{color: 'green', textDecorationLine: 'underline'}}>Sign Up</h2>
        <TextField
          id="filled-required"
          label="First Name"
          variant="standard"
        />
        <br></br>
        <TextField
          id="filled-required"
          label="Last Name"
          variant="standard"
        />
        <br></br>
        <TextField
          id="filled-required"
          label="Email"
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
        <p style={{color: 'black', fontSize: '12px'}}>Already a member? <a style={{color: 'success'}}>Login</a></p>
        
        <Button variant="contained" small color="success" fullWidth border-radius="50px" style={{ borderRadius: '50px' }}>Sign Up</Button>
        
        
        </div>
    );
}