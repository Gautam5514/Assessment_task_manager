import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const useTasks = () => {
    const { token } = useAuth();
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/api/tasks', {
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setTasks(data);
    };

    const createTask = async (task) => {
        const res = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(task),
        });
        const newTask = await res.json();
        setTasks((prev) => [...prev, newTask]);
    };

    const updateTask = async (id) => {
        const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ status: 'completed' }),
        });
        const updatedTask = await res.json();
        setTasks((prev) => prev.map((task) => (task._id === id ? updatedTask : task)));
    };

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        });
        setTasks((prev) => prev.filter((task) => task._id !== id));
    };

    return { tasks, fetchTasks, createTask, updateTask, deleteTask };
};
