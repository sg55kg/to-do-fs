const Task = ({ task }) => {
    return (
        <>
        <h3>{task.name}</h3>
        <h3>{task.priority}</h3>
        <h3>{task.listId}</h3>
        </>
    )
}

export default Task;