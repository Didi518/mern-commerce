import { Button, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import WhiteSpace from '../../components/common/WhiteSpace';

const Login = () => {
  return (
    <Stack>
      <Stack
        sx={{
          width: '40%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          borderRadius: '10px',
          my: 4,
          boxShadow: 2,
        }}
      >
        <Stack
          direction={'column'}
          spacing={2}
          sx={{ width: '60%', textAlign: 'center' }}
          pt={5}
        >
          <h2>Connexion</h2>
          <TextField label="E-mail" variant="outlined" />
          <TextField label="Mot de passe" variant="outlined" />
          <WhiteSpace height={10} />
          <Button variant="contained" color="primary">
            Connexion
          </Button>
          <Typography variant="p" color="textSecondary">
            Pas encore inscrit? <Link to="/inscription">Inscription</Link>
          </Typography>
          <WhiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
