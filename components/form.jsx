import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function Form(props) {
  const [ name, setName ] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  const [ message, setMessage ] = React.useState("");
  const [ snackOpen, setSnackOpen ] = React.useState(false);
  const sendMessage=(e)=>{
    setSnackOpen(true);
    e.preventDefault();
  };
  const clearForm=()=>{
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
        <TextField id="nameText" label="الاسم" value={name} fullWidth required={true} onChange={(e)=>setName(e.target.value)}/>
        <TextField id="emailText" label="البريد الالكتروني" value={email} fullWidth required={true} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField id="messageText" label="الرسالة" value={message} fullWidth required={true} onChange={(e)=>setMessage(e.target.value)}/>
        <Grid container spacing={2} >
          <Grid item xs={6}><Button variant="contained" onClick={e=>sendMessage(e)}>ارسال</Button></Grid>
          <Grid item xs={6}><Button variant="outlined" onClick={clearForm}>مسح</Button></Grid>
        </Grid>
        <Snackbar open={snackOpen} autoHideDuration={5000} onClose={()=>setSnackOpen(false)}>
          <Alert severity="success">تم ارسال الرسالة منجاح</Alert>
        </Snackbar>
    </>
  );
}
