export function log(req, res, next) {
    const ip = req.ip;
    const method = req.method;
    const url = req.orginalUrl;
    const date = new Date();

    console.log(`ip=${ip} method=${method} Url=${url} date=${date}`);
    next();

}

