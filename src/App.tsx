import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import React, { ChangeEvent, FC, useState } from 'react';
import TodoCard from './components/TodoCard';
import TodoDrawer from './components/TodoDrawer';
import TodoTask from './types/TodoTask';

const useStyles = makeStyles(theme => ({
  mainButton: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    position: 'fixed',
  },
}));

const App: FC = () => {
  const classes = useStyles();

  const [tasks, setTasks] = useState<TodoTask[]>([
    {
      id: '1',
      title: 'Test Task #1',
      description: 'Some text here',
      isDone: false,
      createdAt: '2020-01-13',
    },
    {
      id: '2',
      title: 'Test Task #2',
      description: 'Some text here',
      isDone: true,
      createdAt: '2020-01-13',
    },
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const switchTab = (_: ChangeEvent<{}>, newTab: number) =>
    setSelectedTab(newTab);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Paper square>
        <Tabs value={selectedTab} onChange={switchTab} centered>
          <Tab label="To Do" />
          <Tab label="Done" />
        </Tabs>
      </Paper>
      {tasks.map(task => (
        <TodoCard key={task.id} task={task} />
      ))}
      <Fab
        className={classes.mainButton}
        color="primary"
        onClick={() => setIsDrawerOpen(true)}
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <TodoDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default App;
