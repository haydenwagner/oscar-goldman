module.exports = function(){
    return function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, HW-Post-Request');
        res.header('Access-Control-Expose-Headers', 'HW-Post-Request');

        next();
    };
};