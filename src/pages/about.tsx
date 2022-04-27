import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react';
import { go } from '../helpers/misc';

export default function About() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ width: '60%', margin: '36px 0 12px 0', padding: 4 }}>
        <CardHeader title="Planning Poker" />
        <CardContent style={{ textAlign: 'justify' }}>
          <Typography>
            Planning poker, also called Scrum poker, is a consensus-based, gamified technique for
            estimating, mostly used for timeboxing in Agile principles. In planning poker, members
            of the group make estimates by playing numbered cards face-down to the table, instead of
            speaking them aloud. The cards are revealed, and the estimates are then discussed. By
            hiding the figures in this way, the group can avoid the cognitive bias of anchoring,
            where the first number spoken aloud sets a precedent for subsequent estimates. Planning
            poker is a variation of the Wideband delphi method. It is most commonly used in agile
            software development, in particular in Scrum and Extreme Programming. The method was
            first defined and named by James Grenning in 2002 and later popularized by Mike Cohn in
            the book Agile Estimating and Planning, whose company trade marked the term and a
            digital online tool.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: '60%', margin: '12px 0 36px 0', padding: 4 }}>
        <CardHeader title="Author" />
        <CardContent style={{ textAlign: 'justify' }}>Vinicius França Lima Vilaça</CardContent>
        <CardActions>
          <IconButton
            aria-label="https://github.com/viniciusfdev"
            onClick={() => go('https://github.com/viniciusfdev')}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="https://www.linkedin.com/in/viniciusfdev/"
            onClick={() => go('https://www.linkedin.com/in/viniciusfdev/')}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="'mailto: viniciusfdev@gmail.com"
            onClick={() => go('mailto: viniciusfdev@gmail.com')}
          >
            <EmailIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
