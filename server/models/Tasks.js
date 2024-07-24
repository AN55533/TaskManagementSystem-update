const { Schema} =require('mongoose');
const { model} =require('mongoose');

const taskSchema = new Schema({
   taskId: { type: String, required: true },
   title: { type: String, required: true },
   assignedto: { type: String, required: true },
   description: { type: String },
   status: { type: String, required: true },
   duedate: { type: Date, required: true }
});

const Tasks = model('Tasks', taskSchema);

module.exports = Tasks;
