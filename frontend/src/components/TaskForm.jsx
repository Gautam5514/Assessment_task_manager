import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskForm({ createTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, description, priority });
        setTitle('');
        setDescription('');
        setPriority('Medium');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
            <input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Title" className="border p-2 w-full" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-2 w-full" />
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2 w-full">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button className="bg-blue-500 text-white p-2 rounded w-full">Add Task</button>
        </form>
    );
}

TaskForm.propTypes = {
    createTask: PropTypes.func.isRequired
};

export default TaskForm;
