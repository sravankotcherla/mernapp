const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if (!token) {
            res.status(400).json({message:"User Authorization token missing from header"})
        } else {
            const isCustomAuth = token.length < 500;
            if (isCustomAuth) {
                const decodedJWT = jwt.verify(token, 'test');
                req.userId = decodedJWT._id;
                next();
            } else {
                const decodedData = jwt.decode(token);
                req.userId = decodedData.id;
                next();
            }
        }
    }catch(e) {
        console.log(e);
        res.status(400).json({ message: "Something went wrong" });
    }
    
}