import React from 'react';
import Button from '@mui/material/Button';

export function BigButton({ text, onClick }: { text: string; onClick: any }) {
  return (
    <Button variant="contained" onClick={onClick} style={{ width: 160, height: 80 }}>
      {text}
    </Button>
  );
}
