import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

export function Modal(props: {
  content: JSX.Element;
  title: string;
  onSubmit: Function;
  onClose: Function;
}) {
  return (
    <Dialog open={true}>
      <DialogTitle></DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button>ok</Button>
        <Button>cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
