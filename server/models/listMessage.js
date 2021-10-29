import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ListSchema = new Schema({
    title: String,
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


export default ListMessage;