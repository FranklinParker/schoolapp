const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: [true, ' Course Name is required.']
    },
    department: {type: mongoose.Schema.ObjectId, ref: 'Department'},
    description: {
        type: String,
        required: [true, 'Description']

    }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports.Course = Course;
