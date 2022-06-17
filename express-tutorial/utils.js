// Logs the details about the request
const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const data = new Date().getFullYear();

    console.log(method, url, data);
    next()
}

const authorize = (req,res,next) => {
    const {name} = req.query;
    if (name == 'me'){
        req.user = {name: 'i', id: 3};
        next();
    }else{
        res.status(401).send('Unauthorized');
    }
}
module.exports = {logger, authorize}
