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
    }
}, { collection: 'Task' })

const ListSchema = new Schema({
    title: String,
    tasks: [TaskSchema],
    currentStatus: {
        type: String,
        default: 'Incomplete'
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
}, { collection: 'ListMessage' });



const ListMessage = mongoose.model('ListMessage', ListSchema);
const Task = mongoose.model('Task', TaskSchema);

export default ListMessage;