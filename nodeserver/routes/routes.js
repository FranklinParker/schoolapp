const coursesDataController = require('../controller/courseDataController');
const apiSecureController = require('../controller/apiSecureController');
const departmentViewController = require('../controller/departmentViewController');


function configureUnprotectedRoutes(app){
    app.get('/api/courses', coursesDataController.viewAllCoures);
    app.get('/api/departments',departmentViewController.viewAllDepartment);
    app.use('/api/user', require('./users'));

}
module.exports.configureUnprotectedRoutes = configureUnprotectedRoutes;

var allowDelete = function(req, res, next){
    res.append('Access-Control-Allow-Methods', 'DELETE');
    next();
}

const course = require('./course');
function configureProtectedRoutes(app){
    app.use('/api',allowDelete, apiSecureController.secureApiRoutes);
    app.use('/api/admin/course',allowDelete, course );

}

module.exports.configureProtectedRoutes = configureProtectedRoutes;



