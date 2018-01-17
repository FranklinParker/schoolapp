const Course = require('../model/Course').Course;

/**
 * get a list of courses
 *
 *
 * @param req
 * @param response
 */
module.exports.viewAllCoures = function (req, response) {
    console.log('req user ' + req.user);
    Course.find().populate('department').exec( function (error, courses) {
        if (error) {
            return response.status(500).json({
                resultCode: 'Error',
                error: error
            });
        }
        console.log("courses:" + JSON.stringify(courses));
        response.status(200).json({
            resultCode: 'Success',
            records: courses
        });

    });

}

/**
 * delete a course record
 *
 *
 * @param req
 * @param response
 */
module.exports.deleteCourseById = function (id, callback) {
    console.log('will delete - id:' +id);
    Course.findByIdAndRemove({_id: id})
        .then(function(record) {
            console.log('record deleted', record);
            callback(null,record);
        });

}

/***
 * Save a course record
 *
 *
 * @param courseData
 * @param callback
 */
module.exports.saveCourse = function (courseData, callback) {
    if (courseData.id) { // this is an update
        const courseUpdate = {
            name: courseData.name,
            department: courseData.department,
            description: courseData.description
        };
        Course.findByIdAndUpdate({_id: courseData.id}, {$set: courseUpdate})
            .then(function (result) {

                callback(null, result);
            });

    } else {
        const course = new Course({
            name: courseData.name,
            department: courseData.department,
            description: courseData.description
        });
        course.save(function (error, result) {
            callback(error, result);
        });
    }


}