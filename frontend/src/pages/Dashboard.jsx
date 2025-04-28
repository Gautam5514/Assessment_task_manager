import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { useTasks } from '../hooks/UseTask';

function Dashboard() {
    const { logout } = useAuth();
    const { tasks, fetchTasks, createTask, updateTask, deleteTask } = useTasks();
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchTasks();
    }, []);

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'active') return task.status === 'active';
        if (filter === 'completed') return task.status === 'completed';
    });

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button onClick={logout} className="bg-red-500 text-white p-2 rounded">Logout</button>
            </div>

            <TaskForm createTask={createTask} />

            <div className="flex gap-4 my-4">
                <button onClick={() => setFilter('all')} className="bg-gray-300 p-2 rounded">All</button>
                <button onClick={() => setFilter('active')} className="bg-gray-300 p-2 rounded">Active</button>
                <button onClick={() => setFilter('completed')} className="bg-gray-300 p-2 rounded">Completed</button>
            </div>

            <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
}

export default Dashboard;
