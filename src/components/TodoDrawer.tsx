import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.spacing(40),
  },
  drawerContent: {
    padding: theme.spacing(2, 3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0, 0, -1),
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
      <div className={classes.drawerContent}>
        <TextField fullWidth label="Title" margin="normal" variant="outlined" />
        <TextField
          fullWidth
          multiline
          label="Description"
          margin="normal"
          rows="4"
          variant="outlined"
        />
        <div className={classes.buttonContainer}>
          <Button color="primary">Cancel</Button>
          <Button color="primary" variant="contained">
            Save
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default TodoDrawer;
