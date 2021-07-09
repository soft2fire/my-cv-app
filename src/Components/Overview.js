import React from "react";

const Overview = (props) => {
    const { tasks } = props;
    const taskList = () => { }
    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <div className="flex">
                        <li key={task.id}>{task.text}</li><button onClick={task.edit}>remove</button>
                    </div>
                );
            })}
        </ul>
    );
};

export default Overview;