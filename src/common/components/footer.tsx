import { Typography } from '@mui/material';

export function Footer() {
  return (
    <footer style={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <Typography style={{ float: 'right', padding: 16, fontWeight: 'bold' }} component="span">
        viniciusfdev
      </Typography>
    </footer>
  );
}
