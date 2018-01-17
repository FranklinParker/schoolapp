const isLoggedIn = true;

function secureApiRoutes(req, response, next) {
    if(isLoggedIn){
        next();
    } else {
        response.status(200).json({
            accessNotAllowed: "Not allowed"
        });
    }


}
module.exports.secureApiRoutes = secureApiRoutes;