import express from 'express';

import { getTasks, createTask, updateTask, deleteTask } from '../controllers/tasks.js'

const router = express.Router();

//http://localhost:5000/tasks

router.get('/', getTasks)
router.post('/', createTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router;