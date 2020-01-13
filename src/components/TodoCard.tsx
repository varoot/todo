import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { FC } from 'react';
import TodoTask from '../types/TodoTask';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(3),
      overflow: 'hidden',

      '&:focus $content': {
        backgroundColor: theme.palette.action.hover,
      },
    },
    content: {
      padding: theme.spacing(3),
    },
    selected: {
      '& $content': {
        boxShadow: `inset 1px 0 ${theme.palette.secondary.main}`,
        [theme.breakpoints.up('sm')]: {
          boxShadow: `inset 5px 0 ${theme.palette.secondary.main}`,
        },
      },
    },
  }),
  { name: 'TodoCard' },
);

interface TodoCardProps {
  isSelected?: boolean;
  onClick: (id: string) => void;
  task: TodoTask;
}

const TodoCard: FC<TodoCardProps> = props => {
  const { isSelected, onClick, task } = props;
  const classes = useStyles(props);
  return (
    <ButtonBase
      className={clsx(classes.root, { [classes.selected]: isSelected })}
      component={Paper}
      onClick={() => onClick(task.id)}
      role="checkbox"
      aria-checked={isSelected}
    >
      <div className={classes.content}>
        <Typography variant="body1">{task.title}</Typography>
        <Typography variant="caption">{task.description}</Typography>
      </div>
    </ButtonBase>
  );
};

export default TodoCard;
