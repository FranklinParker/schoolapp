const router = require('express').Router();
const courseDataController = require('../controller/courseDataController');


/***
 * Delete a course
 *
 *
 */
router.delete('/:id', function (req, res) {

    const id = req.params.id;

    courseDataController.deleteCourseById(id, function (error, result) {
        if (error) {
            return res.status(500).json({
                status: 'error',
                title: 'An error occurred',
                error: error
            });
        }
        res.status(200).json({
            status: 'success',
            id: result._id,
            verison: result.__v

        });
    });


});


/**
 * save a course
 *
 *
 */
router.post('/', function (req, res) {

    const courseData = req.body;
    console.log('update: ', courseData);

    courseDataController.saveCourse(courseData, function (error, result) {
        console.log('error', error);
        if (error) {
            return res.status(500).json({
                status: 'error',
                title: 'An error occurred',
                error: error
            });
        }
        console.log("save :" + JSON.stringify(result));
        res.status(200).json({
            status: 'success',
            id: result._id,
            verison: result.__v

        });
    });


});


module.exports = router;



