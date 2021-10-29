import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    priority: Number,
    description: String,
    createdOn: {
        type: Date,
        default: new Date()
    },
    dueBy: {
        type: Date,
        default: new Date()
    },
    listId: String,
}, { collection: 'Task' })

const Task = mongoose.model('Task', TaskSchema);

export default Task;