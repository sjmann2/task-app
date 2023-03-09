// Overview will display all tasks
import React from 'react'

const Overview = (props) => {
  const { tasks } = props;
// it takes the tasks from the props and maps over it
// for each task it will display a li element with the content of tasks
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  );
};
export default Overview;