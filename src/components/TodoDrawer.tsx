import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { ChangeEventHandler, FC, useState } from 'react';

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

interface TodoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { title: string; description: string }) => void;
}

const TodoDrawer: FC<TodoDrawerProps> = props => {
  const { isOpen, onClose, onSave } = props;
  const classes = useStyles(props);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const updateTitle: ChangeEventHandler<HTMLInputElement> = event =>
    setTitle(event.target.value);

  const updateDescription: ChangeEventHandler<HTMLInputElement> = event =>
    setDescription(event.target.value);

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      SlideProps={{
        onEnter: () => {
          setTitle('');
          setDescription('');
        },
      }}
      open={isOpen}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Add Task</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.drawerContent}>
        <TextField
          fullWidth
          label="Title"
          margin="normal"
          onChange={updateTitle}
          value={title}
          variant="outlined"
        />
        <TextField
          fullWidth
          multiline
          label="Description"
          margin="normal"
          onChange={updateDescription}
          rows="4"
          value={description}
          variant="outlined"
        />
        <div className={classes.buttonContainer}>
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => onSave({ title, description })}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default TodoDrawer;
