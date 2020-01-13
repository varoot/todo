import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { FC } from 'react';
import TodoTask from '../types/TodoTask';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(3),
      overflow: 'hidden',
    },
    content: {
      padding: theme.spacing(3),
    },
    selected: {
      '& $content': {
        boxShadow: `inset 5px 0 ${theme.palette.secondary.main}`,
      },
    },
  }),
  { name: 'TodoCard' },
);

interface TodoCardProps {
  isSelected?: boolean;
  task: TodoTask;
}

const TodoCard: FC<TodoCardProps> = props => {
  const { isSelected, task } = props;
  const classes = useStyles(props);
  return (
    <Paper className={clsx(classes.root, { [classes.selected]: isSelected })}>
      <div className={classes.content}>
        <Typography variant="body1">{task.title}</Typography>
        <Typography variant="caption">{task.description}</Typography>
      </div>
    </Paper>
  );
};

export default TodoCard;
