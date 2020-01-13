import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.spacing(40),
  },
  drawerContent: {
    padding: theme.spacing(3),
  },
}));

const TodoDrawer: FC = props => {
  const classes = useStyles(props);

  return (
    <Drawer anchor="right" classes={{ paper: classes.drawer }} open>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Add Task</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.drawerContent}>Content of the drawer</div>
    </Drawer>
  );
};

export default TodoDrawer;
