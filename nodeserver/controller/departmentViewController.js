const Department  = require('../model/Department');

function viewAllDepartment(req, response) {
    Department.find()
        .exec(function (error, departments) {
            if (error) {
                return response.status(500).json({
                    resultCode:'Error',
                    error: error
                });
            }
            console.log("departments:" + JSON.stringify(departments));
            response.status(200).json({
                resultCode:'Success',
                records: departments
            });

        });


}
module.exports.viewAllDepartment = viewAllDepartment;