import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Fetching tasks failed' });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, priority } = req.body;
        const newTask = await Task.create({
            title,
            description,
            priority,
            userId: req.user.id
        });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: 'Task creation failed' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: 'Updating task failed' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Deleting task failed' });
    }
};
