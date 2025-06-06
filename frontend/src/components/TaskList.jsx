import PropTypes from 'prop-types';

function TaskList({ tasks, updateTask, deleteTask }) {
    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <div key={task._id} className="flex justify-between items-center bg-gray-100 p-4 rounded">
                    <div>
                        <h2 className="font-bold">{task.title} ({task.priority})</h2>
                        <p>{task.description}</p>
                        <p className="text-sm">{task.status}</p>
                    </div>
                    <div className="space-x-2">
                        {task.status === 'active' && (
                            <button onClick={() => updateTask(task._id)} className="bg-green-500 text-white p-2 rounded">Complete</button>
                        )}
                        <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TaskList;
