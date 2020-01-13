import React, { FC } from 'react';
import TodoTask from '../types/TodoTask';

interface TodoCardProps {
  task: TodoTask;
}

const TodoCard: FC<TodoCardProps> = props => {
  const { task } = props;
  return (
    <div>
      {task.title}
      {task.description}
    </div>
  );
};

export default TodoCard;
