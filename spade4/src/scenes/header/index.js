import React from 'react';
//import { AppBar, Toolbar, Link } from '@material-ui/core';

import { AppBar, Button, Toolbar  } from '@material-ui/core';

export default props =>

    <AppBar position="static" color="default">
        <Toolbar>
        <Button href="/" >
Home
      </Button>
      <Button href="/audit" >
      Audit
            </Button>
        </Toolbar>
    </AppBar>