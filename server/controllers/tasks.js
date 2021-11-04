import Task from '../models/task.js';
import mongoose from 'mongoose';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        console.log(tasks);
        res.status(200).json(tasks);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTask = async (req, res)=> {
    const task = req.body;

    const newTask = new Task(task);
    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const updateTask = async (req, res) => {
    const id = req.params.id;
    const task = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id exists');

    const updatedTask = await Task.findByIdAndUpdate(id, { ...task, id }, { new: true });

    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id exists');

    await Task.findByIdAndRemove(id);

    res.json({ message: 'Task deleted' });
}