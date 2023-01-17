import { Button, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import WhiteSpace from '../../components/common/WhiteSpace';

const Register = () => {
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
          <h2>Inscription</h2>
          <TextField label="Nom" variant="outlined" />
          <TextField label="E-mail" variant="outlined" />
          <TextField label="Mot de passe" variant="outlined" />
          <TextField label="Confirmer le mot de passe" variant="outlined" />
          <Button variant="contained" component="label" color="warning">
            Charger un Avatar
            <input type="file" hidden />
          </Button>
          <WhiteSpace height={10} />
          <Button variant="contained" color="primary">
            Inscription
          </Button>
          <Typography variant="p" color="textSecondary">
            Déjà inscrit? <Link to="/connexion">Connexion</Link>
          </Typography>
          <WhiteSpace height={50} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Register;
