import { Stack, Typography } from '@mui/material';
import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { BigButton } from '../common/components/buttons';

function Title({ style }: { style?: CSSProperties }) {
  const Tlement = ({ text }: { text: string }) => (
    <div>
      <Typography variant="h2" component="span" style={{ fontWeight: 'bold' }}>
        {text}
      </Typography>
    </div>
  );

  return (
    <div style={style}>
      <Tlement text="Planning" />
      <Tlement text="Poker" />
      <Tlement text="Online" />
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Title style={{ position: 'fixed', padding: 12 }} />
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <BigButton onClick={() => {}} text="create room" />
        <BigButton onClick={() => {}} text="enter room" />
        <BigButton onClick={() => navigate('about')} text="about" />
      </Stack>
    </div>
  );
}
