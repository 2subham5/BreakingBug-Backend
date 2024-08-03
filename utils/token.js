const jwt = require("jsonwebtoken");
//process.env fixed
const createNewToken = (payload) => {
    return jwt.sign({ userId: payload }, process.env.SECRET_KEY, { expiresIn: '10d' });
}

module.exports = {createNewToken}