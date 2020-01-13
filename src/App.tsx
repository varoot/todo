import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo App</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
