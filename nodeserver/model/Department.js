
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: [true, ' Name is required.']
    },
    code: {
        type: String,
        required: [true, ' Code is required.']
    }
});

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;
